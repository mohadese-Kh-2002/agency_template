import Button from "../Button";

const PortfolioCard = ({
  images = [],
  title,
  category,
  id,
  description = "",
}) => {
 const base = import.meta.env.BASE_URL;
  const imageUrl = images && images.length > 0 ? `${base.slice(0,base.length-1)}${images[0]}` : `${base}images/hero.png`;

  return (
    <div className="group relative mx-auto w-full max-w-sm">
      <div className="relative bg-(--surface) rounded-2xl border border-(--border) overflow-hidden hover:border-(--primary) hover:shadow-2xl hover:shadow-(--primary)/10 transition-all duration-500">
        <div
          className={`absolute top-3 right-3 z-10 px-3 py-1 bg-linear-to-r from-(--primary) to-(--secondary) rounded-full text-white text-xs font-medium shadow-lg`}
        >
          {category}
        </div>

        <div className="relative overflow-hidden aspect-4/3">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70  to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <Button
              to={`/portfolio/${id}`}
              variant="primary"
              className="bg-white text-black! hover:bg-white/90 shadow-lg"
            >
              مشاهده پروژه
            </Button>
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-sm text-white text-[12px] px-2 py-1 rounded-full">
              {(images.length).toLocaleString('fa-IR')}+ تصویر
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="text-[18px] font-bold mb-2 group-hover:text-(--primary) transition-colors line-clamp-1">
            {title}
          </h3>

          {description && (
            <p className="text-[14px] text-(--text-muted) mb-4 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
