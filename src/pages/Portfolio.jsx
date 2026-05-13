import { useMemo, useState } from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import { CiFilter, CiGrid41, CiGrid2H } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../components/Button";
import siteData from "../data/site.json";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import TextHighlighter from "../components/Highlight";
import SEO from "../components/SEO";

const Portfolio = () => {
  const [showFilterBtns, setShowFilterBtns] = useState(true);
  const [filter, setFilter] = useState("همه");
  const [viewMode, setViewMode] = useState("grid"); 
  const portfolioHero = siteData.pages.portfolio.hero;
  const portfolioItems = siteData.portfolio;
  
  const categories = useMemo(() => {
    return ["همه", ...new Set(portfolioItems.map((item) => item.category))];
  }, [portfolioItems]);

 
  const gridClass = viewMode === "grid" 
    ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5" 
    : "grid-cols-1 md:grid-cols-2 gap-5";
console.log(portfolioHero.title);
  return (
    <>
      <SEO
        title={siteData.pages.portfolio.title}
        description={siteData.pages.portfolio.description}
        url="/portfolio"
      />
      
      <div className="py-8">
        <Container>
    
        <Hero title={portfolioHero.title} description={<TextHighlighter text={portfolioHero.subtitle} highlight={'پروژه'}/>} />
         

        
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
         
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                onClick={() => setShowFilterBtns((prev) => !prev)}
                className="relative flex items-center gap-2 bg-(--surface) border border-(--border) hover:border-(--primary) transition-all px-4 py-2 rounded-xl"
              >
                <CiFilter size={20} className="text-(--primary)" />
                <span className="text-(--text)">فیلترها</span>
                {!showFilterBtns && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-(--primary) rounded-full"></span>
                )}
              </Button>

              
              <div className="flex items-center gap-2 bg-(--surface) border border-(--border) rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid" 
                      ? "bg-(--primary) text-white" 
                      : "text-(--text-muted) hover:text-(--primary)"
                  }`}
                >
                  <CiGrid41 size={20} />
                </button>
                <button
                  onClick={() => setViewMode("large")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "large" 
                      ? "bg-(--primary) text-white" 
                      : "text-(--text-muted) hover:text-(--primary)"
                  }`}
                >
                  <CiGrid2H size={20} />
                </button>
              </div>
            </div>

            
            <div className="w-full sm:w-auto">
              <div
                className={`${showFilterBtns ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"} transition-all duration-500`}
              >
                <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                        filter === cat
                          ? "bg-(--primary) text-white shadow-lg shadow-(--primary)/30"
                          : "bg-(--surface) border border-(--border) text-(--text-muted) hover:border-(--primary) hover:text-(--primary)"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

  
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-(--text-muted)">
              نمایش {filter === "همه" 
                ? portfolioItems.length 
                : portfolioItems.filter((p) => p.category === filter).length} 
              پروژه از {portfolioItems.length}
            </p>
            {filter !== "همه" && (
              <button
                onClick={() => setFilter("همه")}
                className="flex items-center gap-1 text-sm text-(--primary) hover:underline"
              >
                <IoMdClose />
                <span>پاک کردن فیلتر</span>
              </button>
            )}
          </div>

      
          {portfolioItems.length ? (
            <div className={`pt-5 pb-8 grid ${gridClass} gap-5`}>
              {(filter === "همه"
                ? portfolioItems
                : portfolioItems.filter((p) => p.category === filter)
              ).map((p, index) => (
                <div
                  key={p.id}
                  className="opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <PortfolioCard {...p} />
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-12 my-8 bg-(--surface) rounded-3xl border border-(--border) text-center">
              <div className="w-20 h-20 mx-auto bg-(--primary)/10 rounded-full flex items-center justify-center mb-4">
                <CiFilter size={30} className="text-(--primary)" />
              </div>
              <TextHighlighter
                text={`نمونه کار با دسته بندی "${filter}" یافت نشد.`}
                highlight={filter}
                className="text-[18px]"
              />
              <Button
                onClick={() => setFilter("همه")}
                variant="outline"
                className="mt-4"
              >
                مشاهده همه پروژه‌ها
              </Button>
            </div>
          )}

       
          <section className="relative overflow-hidden bg-linear-to-r from-(--secondary) to-(--primary) rounded-[36px] p-8 md:p-12 text-center">

            
            <div className="relative z-10 max-w-2xl mx-auto text-white">
              <h5 className="text-[20px] sm:text-[30px] font-bold mb-2">
                آیا آماده شروع پروژه خود هستید؟
              </h5>
              <p className="text-[14px] sm:text-[16px] opacity-90">
                با تیم ما تماس بگیرید تا ایده شما را به واقعیت تبدیل کنیم.
              </p>
              <Button
                to="/contact_us"
                className="bg-white  mt-8 hover:bg-white/90 px-8 py-3 rounded-xl  font-medium   transition-all"
              >
               <span className="text-transparent! bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)"> شروع همکاری</span>
              </Button>
            </div>
          </section>
        </Container>
      </div>

    </>
  );
};

export default Portfolio;