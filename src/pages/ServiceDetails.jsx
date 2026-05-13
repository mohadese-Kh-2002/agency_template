import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/Container";
import Button from "../components/Button";
import Title from "../components/Title";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";
import {
  TbPalette,
  TbTrendingUp,
  TbSettings,
  TbClock,
  TbGrowth,
} from "react-icons/tb";
import {
  CiCircleChevLeft,
  CiCircleChevDown,
  CiCircleChevUp,
} from "react-icons/ci";
import siteData from "../data/site.json";
import SEO from "../components/SEO";
import { FiCpu } from "react-icons/fi";

const iconsMap = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  TbPalette: TbPalette,
  TbTrendingUp: TbTrendingUp,
  TbSettings: TbSettings,
  FaRocket: FaRocket,
  TbGrowth: TbGrowth,
};

const ServiceDetails = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  const { id } = useParams();

  const service =
    siteData.services.find((s) => s.id === parseInt(id)) ||
    siteData.services[0];
  const IconComponent = iconsMap[service?.icon] || FaRocket;

  if (!service) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">سرویس مورد نظر یافت نشد</h1>
          <Button
            to="/services"
            variant="outline"
            className="text-(--primary) e"
          >
            بازگشت به صفحه خدمات
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <SEO
        title={`${service.title} | CORVEX`}
        description={service.description}
        url={`/services/${id}`}
      />

      <div className="py-8">
        <Container>
          <div className="flex items-center gap-2 text-[14px] text-(--text-muted) mb-6">
            <Link to="/" className="hover:text-(--primary) transition-colors">
              خانه
            </Link>
            <CiCircleChevLeft className="rotate-180 text-[12px]" />
            <Link
              to="/services"
              className="hover:text-(--primary) transition-colors"
            >
              خدمات
            </Link>
            <CiCircleChevLeft className="rotate-180 text-[12px]" />
            <span className="text-(--primary)">{service.title}</span>
          </div>
        </Container>

        <section className="relative py-12 bg-linear-to-b from-(--primary)/10 to-(--primary)/5">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center sm:text-right">
              <div>
                <span className="text-(--primary) font-medium mb-3 block">
                  خدمات تخصصی
                </span>
                <h1 className="text-[25px] md:text-[40px] font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-[16px] md:text-[18px] text-(--text-muted) leading-relaxed mb-6">
                  {service.longDesc || service.description}
                </p>
                {service.shortDesc && (
                  <p className="text-[14px] md:text[16px] text-(--primary) font-medium mb-8">
                    {service.shortDesc}
                  </p>
                )}
                <div className="flex items-center gap-4 flex-wrap justify-center">
                  <Button to="/contact_us" size="lg">
                    درخواست مشاوره
                  </Button>
                  <Button to="/portfolio" size="lg" variant="outline">
                    نمونه کارها
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className=" bg-transparent rounded-[36px] p-12 text-center border border-(--border)">
                  {service.imgUri ? (
                    <img
                      src={service.imgUri}
                      alt={service.title}
                      className="w-full h-64 object-cover rounded-2xl mb-6"
                    />
                  ) : (
                    <div className="w-32 aspect-square mx-auto bg-(--primary)/10 rounded-[36px] flex items-center justify-center mb-6">
                      <IconComponent className="text-6xl text-(--primary)" />
                    </div>
                  )}
                  <h3 className="text-[20px] font-bold">{service.title}</h3>
                  <p className="text-(--text-muted) mt-2 text-[14px]">
                    با جدیدترین تکنولوژی‌ها
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-6 pt-6 border-t border-(--border)">
                    {service.deliveryTime && (
                      <div className="text-center">
                        <div className="text-sm text-(--text-muted)">
                          زمان تحویل
                        </div>
                        <div className="font-bold text-(--primary) text-sm">
                          {service.deliveryTime}
                        </div>
                      </div>
                    )}
                    {service.price && (
                      <div className="text-center">
                        <div className="text-sm text-(--text-muted)">قیمت</div>
                        <div className="font-bold text-(--primary) text-sm">
                          {service.price}
                        </div>
                      </div>
                    )}
                    {service.support && (
                      <div className="text-center">
                        <div className="text-sm text-(--text-muted)">
                          پشتیبانی
                        </div>
                        <div className="font-bold text-(--primary) text-sm">
                          {service.support}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Container>
          {service.features && service.features.length > 0 && (
            <section className="py-8">
              <div className="text-center mb-5">
                <Title title={"چرا این سرویس؟"} subtitle={"ویژگی‌ها"} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 bg-(--surface) border border-(--border) rounded-xl p-4 hover:border-(--primary) hover:shadow-lg hover:shadow-(--primary)/5 transition-all duration-500"
                  >
                    <span className="w-12 h-12 rounded-xl bg-(--primary)/10  flex items-center justify-center text-(--primary) font-bold">
                      {(index + 1).toLocaleString("fa-IR")}
                    </span>
                    <span className="group-hover:pr-3 transition-all duration-500 group-hover:text-(--primary) text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.technologies && service.technologies.length > 0 && (
            <section className="relative py-8">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-(--primary)/25 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-(--primary)/20 rounded-full blur-3xl"></div>
              <div className=" bg-(--surface) border border-(--border) rounded-3xl p-8">
               <div className="flex items-center gap-2 justify-center mb-6">
                 <div className="w-10 h-10 bg-linear-to-r from-(--primary) to-(--secondary) rounded-xl flex items-center justify-center text-white">
                  <FiCpu className="text-[20px]" />
                </div>
                <h3 className="text-[20px] font-bold ">
                  تکنولوژی‌های استفاده شده
                </h3>
               </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {service.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-(--primary)/10 text-(--primary) rounded-full text-sm font-medium hover:bg-(--primary) hover:text-white transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {service.process && service.process.length > 0 && (
            <section className="py-8">
              <div className="text-center mb-5">
                <Title title={"فرآیند همکاری"} subtitle={"چطور کار می‌کنیم؟"} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.process.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden bg-(--surface) border border-(--border) rounded-2xl p-6 hover:border-(--primary) hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="straight-line"></div>
                    <div className="straight-line-2"></div>
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 bg-(--primary)/10 rounded-xl flex items-center justify-center text-xl font-bold text-(--primary)">
                        {item.step || index + 1}
                      </div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-(--text-muted) pr-16">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {service.faq && service.faq.length > 0 && (
            <section className="py-8">
              <div className="text-center mb-5">
                <Title title={"پاسخ سوالات شما"} subtitle={"سوالات متداول"} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {service.faq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-(--surface) border border-(--border) rounded-2xl p-6 hover:border-(--primary) hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className="p-4 sm:p-5 cursor-pointer flex items-center justify-between"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-[18px] sm:text-[20px] font-bold flex items-center gap-2">
                        <span className="w-1 h-6 bg-(--primary) rounded-full"></span>
                        {item.q}
                      </h3>

                      {openFaq === index ? (
                        <CiCircleChevUp className="text-2xl text-(--primary) transition-transform" />
                      ) : (
                        <CiCircleChevDown className="text-2xl text-(--text-muted) transition-transform" />
                      )}
                    </div>
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        openFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="sm:px-5 px-4 sm:pb-5 pb-4 pt-2 border-t border-(--border) mt-2">
                        <p className="text-(--text-muted)">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="py-8">
            <div className="bg-linear-to-r from-(--secondary) to-(--primary) rounded-[36px] p-12 text-center text-white">
              <h2 className="text-[20px] md:text-[30px] font-bold mb-4">
                آماده شروع پروژه هستید؟
              </h2>
              <p className="text-white mb-8 text-[18px]">
                همین حالا با ما تماس بگیرید و اولین قدم رو بردارید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  to="/contact_us"
                  size="lg"
                  className="bg-white  hover:bg-white/90"
                >
                  <span className="text-transparent! bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">
                    {" "}
                    شروع همکاری
                  </span>
                </Button>
                <Button
                  to="/contact_us"
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  تماس با ما
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};

export default ServiceDetails;
