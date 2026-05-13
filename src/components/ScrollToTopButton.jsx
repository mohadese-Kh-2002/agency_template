import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";
const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTotop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollTotop}
      className={`
        fixed
        bottom-6 right-6 z-60
          p-3 rounded-full
        bg-(--primary) text-white
        shadow-lg
         transition-all duration-300
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
    `}
    >
      <HiArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;
