import { useEffect, useState } from "react";
import Container from "./Container";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineWrenchScrewdriver,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlinePhone,
  HiOutlineChevronDown,
} from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import siteData from "../data/site.json";

const menu = [
  { text: "خانه", link: "/", icon: <HiOutlineHome /> },
  { 
    text: "خدمات", 
    link: "/services", 
    icon: <HiOutlineWrenchScrewdriver />
  },
  { text: "نمونه کارها", link: "/portfolio", icon: <HiOutlineBriefcase /> },
  { text: "درباره ما", link: "/about_us", icon: <HiOutlineUsers /> },
  { text: "تماس با ما", link: "/contact_us", icon: <HiOutlinePhone /> },
];

const HeaderAgency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();
  const siteInfo = siteData.siteInfo;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // بستن سابمنو با کلیک خارج
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenSubmenu(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isActive = (link) => {
    if (link === "/") return location.pathname === "/";
    return location.pathname.startsWith(link);
  };

  return (
    <header
      className={`${
        isSticky 
          ? "fixed top-0 left-0 right-0 shadow-lg" 
          : "relative"
      } z-50 w-full bg-(--surface) transition-all duration-500 border-b border-(--primary)`}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
        
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-(--primary) rounded-lg flex items-center justify-center text-white font-bold text-xl   group-hover:scale-105 transition-transform">
              {siteInfo.title.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] sm:text-[20px] font-bold text-(--text) leading-6">
                {siteInfo.title}
              </span>
              <span className="text-[14px] text-(--text-muted)">آژانس دیجیتال</span>
            </div>
          </Link>

         
          <ul className="hidden lg:flex items-center gap-1">
            {menu.map((item) => (
              <li 
                key={item.link} 
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.link)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenSubmenu(openSubmenu === item.link ? null : item.link);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                        isActive(item.link)
                          ? "text-(--primary) bg-(--primary)/5"
                          : "text-(--text) hover:text-(--primary) hover:bg-(--primary)/5"
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                      <HiOutlineChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openSubmenu === item.link ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* سابمنوی کشویی */}
                    <div
                      className={`absolute top-full right-0 mt-2 w-64 bg-(--surface) rounded-xl shadow-xl border border-(--border) py-2 transition-all duration-300 ${
                        openSubmenu === item.link
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.link}
                          to={sub.link}
                          className="block px-4 py-2.5 text-(--text) hover:bg-(--primary)/5 hover:text-(--primary) transition-all hover:pr-6"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {sub.text}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all ${
                      isActive(item.link)
                        ? "text-(--primary) bg-(--primary)/5"
                        : "text-(--text) hover:text-(--primary) hover:bg-(--primary)/5"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.text}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* دکمه‌های سمت راست */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact_us"
              className="hidden lg:block bg-(--primary) text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-(--primary-hover) transition-all shadow-lg hover:shadow-xl"
            >
              مشاوره رایگان
            </Link>
            <ThemeToggle />
            <HiMenu
              onClick={() => setIsOpen(true)}
              className="cursor-pointer text-[32px] text-(--primary) lg:hidden"
            />
          </div>
        </nav>
      </Container>

      {/* موبایل منو - دراپ‌راست */}
      <div
        className={`fixed inset-0 z-1001 transition-all duration-500 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* اویرلی تیره */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* منوی موبایل */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-[85vw] max-w-[400px] bg-(--surface) shadow-2xl transition-all duration-500 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* هدر موبایل */}
            <div className="p-6 border-b border-(--border)">
              <div className="flex items-center justify-between mb-6">
                <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 bg-(--primary) rounded-lg flex items-center justify-center text-white font-bold">
                    {siteInfo.title.charAt(0)}
                  </div>
                  <div>
                    <span className="text-xl font-bold text-(--text) block">
                      {siteInfo.title}
                    </span>
                    <span className="text-xs text-(--text-muted)">آژانس دیجیتال</span>
                  </div>
                </Link>
                <FaWindowClose
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-(--text-muted) text-2xl hover:text-(--primary) transition-colors"
                />
              </div>
            </div>

            {/* لینک‌های موبایل */}
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {menu.map((item) => (
                  <li key={item.link}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.link ? null : item.link)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                            isActive(item.link)
                              ? "text-(--primary) bg-(--primary)/5"
                              : "text-(--text) hover:bg-(--primary)/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium">{item.text}</span>
                          </div>
                          <HiOutlineChevronDown
                            className={`w-5 h-5 transition-transform ${
                              openSubmenu === item.link ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        
                        {/* سابمنوی موبایل */}
                        <div
                          className={`pr-12 space-y-2 transition-all duration-300 ${
                            openSubmenu === item.link ? "block" : "hidden"
                          }`}
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.link}
                              to={sub.link}
                              className="block p-2 text-(--text-muted) hover:text-(--primary) transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubmenu(null);
                              }}
                            >
                              {sub.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.link}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                          isActive(item.link)
                            ? "text-(--primary) bg-(--primary)/5"
                            : "text-(--text) hover:bg-(--primary)/5"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium">{item.text}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* فوتر موبایل */}
            <div className="p-6 border-t border-(--border)">
              <Link
                to="/contact_us"
                className="block w-full bg-(--primary) text-white text-center px-6 py-3 rounded-xl font-semibold hover:bg-(--primary-hover) transition-all"
                onClick={() => setIsOpen(false)}
              >
                مشاوره رایگان
              </Link>
              <div className="flex justify-center gap-4 mt-4">
                <a href="#" className="text-(--text-muted) hover:text-(--primary) transition-colors">اینستاگرام</a>
                <a href="#" className="text-(--text-muted) hover:text-(--primary) transition-colors">لینکدین</a>
                <a href="#" className="text-(--text-muted) hover:text-(--primary) transition-colors">تلگرام</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAgency;