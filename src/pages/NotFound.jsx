import { HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-(--bg) px-4">
      <div
        className="
          relative
          w-full max-w-lg
          rounded-3xl
          p-10
          text-center
         bg-(--surface)   
          backdrop-blur-xl
          border-[0px_3px_3px_0px]
          border-(--primary)
          shadow-2xl
         
        "
      >
        <div className="absolute -top-20 -left-20 w-72 aspect-square bg-(--primary)/20 rounded-full blur-3xl"></div>

        <h1 className="text-[96px] md:text-[120px] font-black text-(--primary) ">
          404
        </h1>

        <p className="text-(--text) text-[20px] font-semibold mb-2">
          صفحه مورد نظر پیدا نشد
        </p>
        <p className="text-(--text-muted) mb-8">
          ممکن است آدرس اشتباه وارد شده باشد یا صفحه حذف شده باشد.
        </p>
        <Link
          to="/"
          className="
            relative inline-flex items-center justify-center
            px-7 py-3
            rounded-xl
            bg-(--primary)
            text-white
            font-semibold
            transition-all duration-300
            hover:scale-105
            hover:shadow-xl
            hover:bg-(--primary-hover)
          "
        >
          <HiOutlineHome size={20} className="ml-2.5"/>
          <span> بازگشت به صفحه اصلی</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
