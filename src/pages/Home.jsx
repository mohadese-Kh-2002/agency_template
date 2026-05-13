import { useEffect, useRef, useState } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { IoIosArrowBack } from "react-icons/io";
import siteData from "../data/site.json";
import { FaCode, FaPalette,FaRocket } from "react-icons/fa";
import { TbPalette, TbTrendingUp, TbSettings,TbGrowth } from "react-icons/tb";
import Button from "../components/Button";
import SEO from "../components/SEO";
import TextHighlighter from "../components/Highlight";
import { HiPhone } from "react-icons/hi2";
import { BiCategory } from "react-icons/bi";
import Title from "../components/Title";
import { FaArrowLeftLong } from "react-icons/fa6";

const iconsMap = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  TbPalette: TbPalette,
  TbTrendingUp: TbTrendingUp,
  TbSettings: TbSettings,
  FaRocket:FaRocket,
  TbGrowth:TbGrowth
};
const Home = () => {
  const services = siteData.services;
  const portfolio = siteData.portfolio;
  const aboutData = siteData.about;
  const concatData=siteData.contact;
  const homeHero=siteData.pages.home.hero;
  const stats = siteData.pages.home.stats;
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const extractNumber = (value) => {
    if (value === "24/7") return null;

    const match = value.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  const extractPrefix = (value) => {
    const match = value.match(/^[^0-9]+/);
    return match ? match[0] : "";
  };
  const extractSuffix = (value) => {
    const match = value.match(/[^0-9]+$/);
    return match ? match[0] : "";
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = stats.map((stat) => extractNumber(stat.value));

    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      if (currentStep >= steps) {
        const newCounts = stats.map((stat, index) => {
          if (stat.value === "24/7") return counts[index];
          return targets[index]; 
        });
        setCounts(newCounts);
        clearInterval(interval);
        return;
      }

      const newCounts = targets.map((target) =>
        Math.floor((target / steps) * currentStep),
      );

      setCounts(newCounts);
    }, stepTime);

    return () => clearInterval(interval);
  },[hasAnimated,stats]);
  return (
    
  <>
      <SEO 
        title={siteData.pages.home.title}
        description={siteData.pages.home.description}
        url="/"
      />
    <div className="py-8">
      <Container>
        <Hero title={homeHero.title}  description={homeHero.subtitle} />
<section ref={statsRef} className="pt-8">

  
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {stats.map((item, index) => {
      const prefix = extractPrefix(item.value);
      const suffix = extractSuffix(item.value);
      return (
        <div
          key={index}
          className="relative bg-(--surface) border border-(--border) rounded-3xl p-6 group cursor-pointer overflow-hidden hover:border-transparent transition-all duration-300"
        >
          <div className="straight-line"></div>
          <div className="straight-line-2"></div>
          
          <div className="relative z-10">
            <h3 className="text-[30px] font-bold text-(--primary) group-hover:scale-110 transition-transform duration-500">
              {prefix}
              {item.value === "24/7" ? item.value : hasAnimated ? counts[index] : '0'}
              {suffix}
            </h3>
            <p className="mt-2 text-(--text-muted) group-hover:text-(--primary) transition-colors duration-500">
              {item.label}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</section>
    <section className="pt-8">
  <div className="flex justify-between items-end mb-6">
    
    <Title title={'چی کار می‌کنیم؟'} subtitle={'خدمات ما'}/>
    <Button variant="none" to={"/services"} className="flex items-center gap-2 text-(--primary) hover:gap-3 transition-all">
      <span>مشاهده همه</span>
      <IoIosArrowBack className="text-[20px]" />
    </Button>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="md:col-span-2 bg-linear-to-br from-(--primary)/10 to-transparent border border-(--border) rounded-3xl p-8 hover:border-(--primary) transition-all">
      {services[0] && (() => {
        const IconComponent = iconsMap[services[0].icon];
        return (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-(--primary)/20 rounded-2xl">
              {IconComponent && <IconComponent className="text-4xl text-(--primary)" />}
            </div>
            <div>
              <h3 className="text-[20px] font-bold mb-3">{services[0].title}</h3>
              <p className="text-(--text-muted) leading-relaxed">{services[0].description}</p>
              <Button variant="none" to={`/services/${services[0].id}`} className="inline-block mt-4 text-(--primary) font-medium">
               <span className="ml-2"> بیشتر بدانید </span>
                <FaArrowLeftLong/>
              </Button>
            </div>
          </div>
        );
      })()}
    </div>
    
   
    <div className="bg-(--surface) border border-(--border) rounded-3xl p-6 hover:border-(--primary) transition-all">
      {services[1] && (() => {
        const IconComponent = iconsMap[services[1].icon];
        return (
          <>
            <div className="p-3 bg-(--primary)/20 rounded-2xl w-fit mb-4">
              {IconComponent && <IconComponent className="text-3xl text-(--primary)" />}
            </div>
            <h3 className="text-[20px] font-bold mb-2">{services[1].title}</h3>
            <p className="text-(--text-muted) text-[14px] line-clamp-3">{services[1].description}</p>
          </>
        );
      })()}
    </div>
  </div>
  

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
    {services.slice(2, 4).map((service) => {
      const IconComponent = iconsMap[service.icon];
      return (
        <div key={service.id} className="bg-(--surface) border border-(--border) rounded-3xl p-6 hover:border-(--primary) transition-all flex gap-4 items-start">
          <div className="p-2 bg-(--primary)/20 rounded-xl shrink-0">
            {IconComponent && <IconComponent className="text-2xl text-(--primary)" />}
          </div>
          <div>
            <h3 className="text-[18px] font-bold mb-1">{service.title}</h3>
            <p className="text-(--text-muted) text-[14px]">{service.description}</p>
          </div>
        </div>
      );
    })}
  </div>
</section>
   <section className="pt-8">
  <div className="flex justify-between items-end mb-6">
  
    <Title title={'پروژه‌های اخیر'} subtitle={'نمونه کارها'}/>
    <Button variant="none" to={"/portfolio"} className="flex items-center gap-2 text-(--primary) hover:gap-3 transition-all">
      <span>مشاهده همه</span>
      <IoIosArrowBack className="text-[20px]" />
    </Button>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {portfolio[0] && (
      <div className="relative h-100 rounded-3xl overflow-hidden group">
        <img 
          src={portfolio[0].images[0]} 
          alt={portfolio[0].title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-2">{portfolio[0].title}</h3>
            <p className="mb-3 opacity-90 flex gap-2 items-center">
              <BiCategory/>
              <span>{portfolio[0].category}</span>
            </p>
            <Button size="sm" to={`/portfolio/${portfolio[0].id}`} className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm  rounded-full text-[14px]">
              <span>دیدن جزئیات</span>
              <IoIosArrowBack className="text-[16px]" />
            </Button>
          </div>
        </div>
      </div>
    )}
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {portfolio.slice(1, 5).map((p) => (
        <div key={p.id} className="relative h-47.5 rounded-2xl overflow-hidden group">
          <img 
            src={p.images[0]} 
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex items-end p-4">
            <div className="text-white">
              <h4 className="font-bold text-sm">{p.title}</h4>
              <p className="text-xs opacity-80 flex items-center gap-2">
                 <BiCategory/>
              <span>{portfolio[0].category}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  

</section>
        <section className="pt-8">
  <div className="text-center mb-10">
    <span className="text-(--primary) font-medium">مزایای ما</span>
    <h2 className="text-[20px] md:text-[30px] font-bold mt-2"><TextHighlighter text={'چرا CORVEX؟'} highlight={'CORVEX'}/></h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
   
    <div className="space-y-4 ">
      {aboutData.values.map((item, index) => (
        <div key={index} className="group flex items-center gap-4 bg-(--surface) border border-(--border) rounded-2xl p-4 hover:border-(--primary) transition-all">
          <div className="w-10 h-10 font-bold bg-(--primary)/10 rounded-lg flex items-center justify-center text-(--primary)">
            {(index + 1).toLocaleString('fa-IR')}
          </div>
          <p className="font-medium text-lg group-hover:pr-3 transition-all group-hover:text-(--primary) duration-500">{item}</p>
        </div>
      ))}
    </div>
    
    
    <div className="bg-linear-to-br from-(--primary) to-(--secondary) rounded-[36px] p-5 text-white flex flex-col justify-between">
      <div>
        <h3 className="text-[25px] font-bold mb-4">همین حالا شروع کن!</h3>
        <p className="opacity-90 leading-relaxed mb-6">
          تیم ما آماده‌ست تا ایده‌ت رو به واقعیت تبدیل کنه. کافیه یه پیام بدی.
        </p>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <HiPhone/>
          </div>
          <span>{concatData.phone.slice(0,4)}-{concatData.phone.slice(4,7)}-{concatData.phone.slice(7,11)}</span>
        </div>
        <Button
          to="/contact_us"
          className="bg-white   px-6 py-3 rounded-full font-medium inline-block w-full text-center hover:bg-white/90 transition-all"
        >
         <span className="text-transparent! bg-clip-text bg-linear-to-r from-(--secondary) to-(--primary)"> تماس با ما</span>
        </Button>
      </div>
    </div>
  </div>
</section>
       <section className="pt-8">
  <div className="relative overflow-hidden bg-linear-to-br from-(--surface) to-(--bg) border border-(--border) rounded-[36px] p-12">
  
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-(--primary)/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-(--primary)/10 rounded-full blur-3xl"></div>
    
    <div className="relative text-center max-w-2xl mx-auto">
      <h4 className="text-[20px] md:text-[30px] font-bold mb-4">
        آماده‌ای پروژه‌ت رو شروع کنیم؟
      </h4>
      <p className="text-(--text-muted) mb-8 text-[18px]">
        کافیه یه مشاوره رایگان بگیر و اولین قدم رو بردار
      </p>
      <Button
        to="/contact-us"
        className="bg-(--primary) px-10 py-4 rounded-full text-black font-medium inline-block hover:bg-(--primary-hover) transition-all shadow-lg shadow-(--primary)/30"
      >
        درخواست مشاوره رایگان
      </Button>
    </div>
  </div>
</section>
      </Container>
    </div>
  </>
  );
};

export default Home;
