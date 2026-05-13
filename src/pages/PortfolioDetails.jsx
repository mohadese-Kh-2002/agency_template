import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CiCircleChevLeft} from "react-icons/ci";
import { FiArrowLeft } from "react-icons/fi";
import { HiOutlineChip } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { TbBulb, TbRocket } from "react-icons/tb";
import siteData from "../data/site.json";
import Container from "../components/Container";
import Button from "../components/Button";
import SEO from "../components/SEO";
import Title from "../components/Title";
import PortfolioCard from "../components/portfolio/PortfolioCard";
const PortfolioDetails = () => {
  const { id } = useParams();
 const base = import.meta.env.BASE_URL;
  const portfolioItems = siteData.portfolio;
  const portfolioItem = portfolioItems.find((p) => p.id === Number(id));
  const samePortfolio = portfolioItems.filter(
    (p) => p.id !== portfolioItem.id && p.category === portfolioItem.category,
  );
  if (!portfolioItem) {
    return (
      <div className="py-20 text-center">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="w-24 h-24 bg-(--primary)/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CiCircleChevLeft className="text-4xl text-(--primary)" />
            </div>
            <h2 className="text-3xl font-bold mb-4">پروژه پیدا نشد</h2>
            <p className="text-(--text-muted) mb-8">
              متأسفانه پروژه مورد نظر شما وجود ندارد.
            </p>
            <Button to="/portfolio" size="lg">
              بازگشت به نمونه کارها
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={siteData.pages.services.title}
        description={siteData.pages.services.title}
        url={`/portfolio/${id}`}
      />

      <div className="py-8">
        <Container>
          <div className="flex items-center gap-2 text-sm text-(--text-muted) mb-6">
            <Link to="/" className="hover:text-(--primary) transition-colors">
              خانه
            </Link>
            <CiCircleChevLeft className="rotate-180 text-[12px]" />
            <Link
              to="/portfolio"
              className="hover:text-(--primary) transition-colors"
            >
              نمونه کارها
            </Link>
            <CiCircleChevLeft className="rotate-180 text-[12px]" />
            <span className="text-(--primary)">{portfolioItem.title}</span>
          </div>

          <div className="mb-8">
            <span className="px-4 py-1.5 mb-5 inline-flex bg-linear-to-r from-(--primary) to-(--secondary) text-white rounded-full text-[14px] font-medium">
              {portfolioItem.category}
            </span>

            <h1 className="text-[20px] sm:text-[30px] font-bold mb-4">
              {portfolioItem.title}
            </h1>
            <p className="text-[16px] sm:text-[18px] text-(--text-muted)">
              {portfolioItem.description}
            </p>
          </div>

          <div className="mb-12">
            <div className="relative">
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  prevEl: ".swiper-button-prev ",
                  nextEl: ".swiper-button-next",
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-[36px] overflow-hidden"
              >
                {portfolioItem.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-video bg-(--surface)">
                      <img
                        src={`${base.slice(0,base.length-1)}${img}`}
                        alt={`${portfolioItem.title} - تصویر ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-(--primary) hover:bg-white transition-all">
                <CiCircleChevLeft className="text-[20px] rotate-180 text-(--primary)" />
              </button>
              <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-(--primary) hover:bg-white transition-all">
                <CiCircleChevLeft className="text-[20px] text-(--primary)" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-(--surface) border border-(--border) rounded-[36px] p-8 hover:border-(--primary) transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                    <TbBulb className="text-[20px] text-red-500" />
                  </div>
                  <h2 className="text-[14px] sm:text-[20px] font-bold">
                    چالش پروژه
                  </h2>
                </div>
                <p className="text-(--text-muted) text-[14px] sm:text-[16px] leading-relaxed ">
                  {portfolioItem.challenge}
                </p>
              </div>

              <div className="bg-(--surface) border border-(--border) rounded-[36px] p-8 hover:border-(--primary) transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                    <TbRocket className="text-[20px] text-green-500" />
                  </div>
                  <h2 className="text-[14px] sm:text-[20px] font-bold">
                    راه‌حل ما
                  </h2>
                </div>
                <p className="text-(--text-muted) text-[14px] sm:text-[16px] leading-relaxed ">
                  {portfolioItem.solution}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-(--primary)/5 to-transparent border border-(--border) rounded-[36px] p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 bg-linear-to-r from-(--primary) to-(--secondary) rounded-xl flex items-center justify-center text-white">
                    <HiOutlineChip className="text-[20px] " />
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-bold">
                    تکنولوژی‌ها
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {portfolioItem.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-(--surface) border border-(--border) rounded-xl text-[12px] font-medium hover:border-(--primary) hover:text-(--primary) transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {portfolioItem.result && (
                <div className="bg-linear-to-br from-(--primary)/5 to-transparent border border-(--border) rounded-3xl p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-linear-to-r from-(--primary) to-(--secondary) rounded-xl flex items-center justify-center text-white">
                       <BsStars className="text-[20px] " />
                    </div>
                   
                    <h3 className="text-xl font-bold">نتایج پروژه</h3>
                  </div>
                  <div className="space-y-4">
                    {portfolioItem.result.map((r, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-(--text-muted)">{r.label}</span>
                        <span className="text-[18px] sm:text-[20px] font-bold text-(--primary)">
                          {r.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {samePortfolio && samePortfolio.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <Title
                    title={"ممکن است بپسندید"}
                    subtitle={"پروژه‌های مشابه"}
                  />
                </div>
                <Button
                  variant="none"
                  to="/portfolio"
                  className="flex items-center gap-2 text-(--primary) hover:gap-3 transition-all"
                >
                  <span>مشاهده همه</span>
                  <FiArrowLeft />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {samePortfolio.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    to={`/portfolio/${item.id}`}
                    className="group"
                  >
                    <PortfolioCard key={item.id} {...item} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 bg-linear-to-r from-(--secondary) to-(--primary) rounded-[36px]  p-12 text-center text-white">
            <h2 className="text-[20px] sm:text-[30px] font-bold mb-4">
              پروژه مشابه می‌خواهید؟
            </h2>
            <p className="text-[14px] sm:text-[16px] opacity-90 mb-8 max-w-2xl mx-auto">
              ما می‌توانیم همین نتایج را برای کسب‌وکار شما نیز تکرار کنیم
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                to="/contact_us"
                className="bg-white text-(--primary) hover:bg-white/90"
              >
                <span className="text-transparent! bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">
                  شروع همکاری
                </span>
              </Button>
              <Button
                to="/services"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                مشاهده خدمات
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PortfolioDetails;
