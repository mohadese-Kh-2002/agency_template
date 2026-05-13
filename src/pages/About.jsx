import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { FiCode, FiCpu } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbHeart } from "react-icons/tb";
import Button from "../components/Button";
import siteData from "../data/site.json";
import TextHighlighter from "../components/Highlight";
import SEO from "../components/SEO";

const About = () => {
  const aboutHero = siteData.pages.about_us.hero;
  const about = siteData.about;

  return (
    <>
      <SEO
        title={siteData.pages.about_us.title}
        description={siteData.pages.about_us.description}
        url="/about_us"
      />

      <div className="py-8">
        <Container>
          <Hero
            title={aboutHero.title}
            description={
              <TextHighlighter
                text={String(aboutHero.subtitle)}
                highlight={"آشنایی با"}
              />
            }
          />

          <section className="py-8">
            <div className="text-center mb-5">
              <Title title={"چگونه شروع کردیم"} subtitle={"داستان ما"} />
            </div>

            <div className="relative  max-w-4xl mx-auto">
              <div className="relative overflow-hidden bg-linear-to-br from-(--surface) to-(--bg) border border-(--border)  hover:border-(--primary) transition-all duration-500 rounded-[36px] p-8">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-(--primary)/25 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-(--primary)/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
                    <div className="w-12 h-12 bg-(--primary)/10 rounded-2xl flex items-center justify-center">
                      <HiOutlineSparkles className="text-[20px] sm:text-[30px] text-(--primary)" />
                    </div>
                    <h3 className="text-[20px] font-bold">
                      {about.ourStory.title}
                    </h3>
                  </div>

                  <p className="text-[16px] sm:text-[18px] text-center sm:text-right text-(--text-muted) leading-relaxed">
                    <TextHighlighter
                      text={about.ourStory.description}
                      highlight={"CORVEX"}
                    />
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-(--border)">
                    {about.ourStory.stats.map((s) => (
                      <div className="text-center">
                        <div className="text-[16px] sm:text-[20px] font-bold text-(--primary)">
                          {s.value}
                        </div>
                        <div className="text-[12px] sm:text-[14px] text-(--text-muted)">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-8">
            <div className="text-center mb-8">
              <Title title={" ارزش‌ها و تخصص‌ها"} subtitle={"چرا ما؟"} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group">
                <div className=" bg-(--surface)  border border-(--border) rounded-[36px] p-8 hover:border-(--primary) hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-r from-(--primary) to-(--secondary) rounded-2xl flex items-center justify-center text-white">
                      <TbHeart className="text-[20px] sm:text-[30px]" />
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold">
                      ارزش‌های ما
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {about.values.map((v, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-(--primary)/5 rounded-xl hover:bg-(--primary)/10 transition-all group/item"
                      >
                        <div className="w-8 h-8 font-bold bg-(--primary)/10 rounded-lg flex items-center justify-center text-(--primary)">
                          {index + 1}
                        </div>
                        <span className="text-[16px] sm:text-[18px] font-medium group-hover/item:text-(--primary) transition-colors">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="bg-(--surface) border border-(--border) rounded-3xl p-8 hover:border-(--primary) hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-linear-to-r from-(--primary) to-(--secondary) rounded-2xl flex items-center justify-center text-white">
                      <FiCode className="text-[20px] sm:text-[30px]" />
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-bold">
                      مهارت‌ها و تکنولوژی‌ها
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {about.skills.map((s, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-(--primary)/5 rounded-xl hover:bg-(--primary)/10 hover:scale-105 transition-all"
                        >
                          <FiCpu className="text-[14px] text-(--primary)" />
                          <span className="text-[14px] font-medium">{s}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

         {about.team &&(<section className="py-8">
            <div className="text-center mb-0">
              <Title title={"متخصصان پشت کار"} subtitle={"تیم ما"} />
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-(--primary)/40",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-(--primary)",
              }}
              loop={true}
              speed={800}
              className="py-12! "
            >
              {about.team.map((member, index) => (
                <SwiperSlide key={member.id || index}>
                  <div className="group h-full">
                    <div className="bg-(--surface) border border-(--border) rounded-2xl p-6 text-center hover:border-(--primary) hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="w-24 h-24 mx-auto mb-4 relative">
                        {member.image ? (
                          <>
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-(--primary) shadow-lg">
                              <img
                              loading="lazy"
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>

                            <div className="absolute inset-0 rounded-full bg-(--primary)/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </>
                        ) : (
                          <div className="w-full h-full bg-linear-to-br from-(--primary) to-(--secondary) rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                            {member.name
                              ? member.name.charAt(0)
                              : String.fromCharCode(65 + index)}
                          </div>
                        )}
                      </div>

                      <h3 className="font-bold text-[18px] mb-1 group-hover:text-(--primary) transition-colors">
                        {member.name || "نام عضو تیم"}
                      </h3>
                      <p className="text-[14px] text-(--text-muted) mb-4">
                        {member.job || "عنوان شغلی"}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>)} 

         
           <div className=" bg-linear-to-r from-(--secondary) to-(--primary) rounded-[36px] p-8 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="sm:text-right text-center">
          <h4 className="text-[20px] sm:text-[30px] font-bold mb-2 "> آماده‌ای با هم کار کنیم؟</h4>
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
    </>
  );
};

export default About;
