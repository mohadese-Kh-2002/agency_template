import  { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex w-full justify-end">
      <button onClick={toggleTheme} className="w-9 sm:w-12.5 self-end  aspect-square rounded-full inline-flex justify-center items-center transition-all duration-300 theme-toggle">
      {theme === "light" ? (
        <HiOutlineSun className="text-yellow-500 text-[25px]" />
      ) : (
        <HiOutlineMoon className="text-white text-[25px]" />
      )}
    </button>
    </div>
  );
};

export default ThemeToggle;
