import Container from "../components/Container";
import ServiceCard from "../components/Services/ServiceCard";
import Title from "../components/Title";
import Button from "../components/Button";
import Hero from "../components/Hero";
import siteData from "../data/site.json";
import TextHighlighter from "../components/Highlight";
import { FaCode, FaPalette ,FaRocket} from "react-icons/fa";
import { TbPalette, TbTrendingUp, TbSettings,TbGrowth } from "react-icons/tb";
import SEO from "../components/SEO";

const iconsMap = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  TbPalette: TbPalette,
  TbTrendingUp: TbTrendingUp,
  TbSettings: TbSettings,
  FaRocket:FaRocket,
  TbGrowth:TbGrowth
};

const Services = () => {
  const services = siteData.services;
  const serviceHero = siteData.pages.services.hero;
  const aboutValue = siteData.about.values;
  const startupProcess=siteData.startupProcess
  console.log(serviceHero.title);
  return (
    <>
      <SEO
        title={siteData.pages.services.title}
        description={siteData.pages.services.description}
        url="/services"
      />
      <div className="py-8">
        <Container>
          <Hero
            title={serviceHero.title}
            description={
              <TextHighlighter
                text={serviceHero.subtitle}
                highlight={"استارتاپ"}
              />
            }
          />
          
          <section className="pb-8 pt-8">
      

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const IconComponent = iconsMap[service.icon];
                let variant = "default";
                if (index === 0) variant = "gradient";
                if (index === 2) variant = "bordered";
                if (index === 4) variant = "minimal";

                return (
                  <ServiceCard
                    key={service.id}
                    id={service.id}
                    title={service.title}
                    description={service.description}
                    icon={IconComponent}
                    variant={variant}
                    showButton={true}
                    imgUri={service.imgUri}
                  />
                );
              })}
            </div>
          </section>
        </Container>
      <div className=" py-12">
  <Container>
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
   
      <div className="space-y-6">
        
        <Title title={<TextHighlighter text={"چرا CORVEX ؟"} highlight={"corvex"} />} subtitle={'مزایای ما'} description={' ما به کیفیت و رضایت مشتری اعتقاد داریم'}/>
        
        <div className="grid grid-cols-1  gap-4">
          {aboutValue.map((v, index) => (
            <div key={index} className="bg-(--surface) border border-(--border) rounded-xl p-4 hover:border-(--primary) transition-all group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-(--primary)/10 rounded-xl flex items-center justify-center text-(--primary) font-bold">
                  {(index + 1).toLocaleString('fa-IR')}
                </div>
                <span className="font-medium group-hover:pr-3  group-hover:text-(--primary) transition-all duration-500">
                  {v}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <div className="bg-(--surface) border border-(--border) rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="w-1 h-8 bg-(--primary) rounded-full"></span>
          {startupProcess.title}
        </h3>
        
        <div className="space-y-6">
          {startupProcess.steps.map((item, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-(--primary)/10 rounded-xl text-[16px] flex items-center justify-center text-(--primary) font-bold text-sm group-hover:bg-(--primary) group-hover:text-white transition-all">
                  {item.step}
                </div>
                {index < startupProcess.steps.length-1 && <div className="w-0.5 h-12 bg-(--border) group-hover:bg-(--primary)/30 transition-colors"></div>}
              </div>
              <div className="pb-6">
                <h4 className="font-bold text-[18px] sm:text-[20px] mb-1 group-hover:text-(--primary) transition-colors">
                  {item.title}
                </h4>
                <p className="text-(--text-muted) text-[14px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    

    <div className="mt-8 bg-linear-to-r from-(--primary) to-(--secondary) rounded-[36px] p-8 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="sm:text-right text-center">
          <h4 className="text-[20px] sm:text-[30px] font-bold mb-2 ">آماده شروع پروژه هستید؟</h4>
          <p className="text-[14px] sm:text-[16px] opacity-90">همین حالا با ما تماس بگیرید و اولین قدم رو بردارید</p>
        </div>
        <Button 
          to="/contact_us" 
          size="lg"
          className="bg-white  hover:bg-white/90 "
        >
          <span className="text-transparent! bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">تماس با ما</span>
         
        </Button>
      </div>
    </div>
  </Container>
</div>
      </div>
    </>
  );
};

export default Services;
