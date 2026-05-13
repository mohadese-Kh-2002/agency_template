import Button from "./Button";
import siteData from "../data/site.json";
import { useLocation } from "react-router-dom";

const Hero = ({title,description}) => {
  const {pathname}=useLocation()
  const Hero=siteData.pages
 
   const base = import.meta.env.BASE_URL;
  const HeroI = siteData.pages;
 const imageUri = HeroI[pathname.split('/')[1]]?.hero.backgroundImage 
  ? `${base}${HeroI[pathname.split('/')[1]]?.hero.backgroundImage}`
  : `${base}images/hero.png`;
 
   
console.log(imageUri);
  const CORVEX = "CORVEX";

  const parts =title.split(new RegExp(`(${CORVEX})`, "gi")) ;

  return (
    <section
      className={`overflow-hidden group relative border border-(--primary) bg-cover h-150 w-full bg-no-repeat bg-center rounded-[36px]`}
      style={{ backgroundImage: `url(${imageUri})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs " />
      <div className="straight-line"></div>
      <div className="straight-line-2"></div>
      <div className=" relative w-full h-full flex justify-center items-center flex-col">
        <h3 className="font-bold text-[25px] sm:text-[30px] mb-7 sm:mb-10 leading-relaxed">
          {parts.map((part, index) => {
            if (part.toUpperCase() == "CORVEX") {
              return (
                <span key={index} className="text-(--primary)">
                  {part}
                </span>
              );
            }
            return (
              <span key={index}>
                {part.split("").map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    style={{
                      animation: `fadeInLetter 0.3s ease-out ${index * 0.3}s forwards`,
                      opacity: 0,
                      transform: "translateY(20px)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            );
          })}
        </h3>
        <p className="text-[18px] sm:text-[25px] ">
          {description}
        </p>
        <div className="mt-14 flex items-center  gap-3.5">
          <Button variant="outline" to={'/portfolio'}>
            نمونه کار ها
          </Button>
          <Button size="lg" to={'/contact_us'}>
            شروع همکاری
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
