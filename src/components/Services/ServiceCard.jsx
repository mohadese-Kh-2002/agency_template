import { CiCircleChevLeft } from "react-icons/ci";
import Button from "../Button";

const ServiceCard = ({
  id,
  title,
  description,
  icon: Icon,
  imgUri,
  variant = "default",
  showButton = true,
  className = "",
  ...props
}) => {
  const variants = {
    default: {
      container:
        "bg-(--surface) border border-(--border) rounded-2xl p-6 hover:border-(--primary) hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden",
      iconBg: "bg-(--primary)/20",
      iconColor: "text-(--primary)",
      titleClass:
        "text-xl font-bold mb-2 group-hover:text-(--primary) transition-colors",
    },
    gradient: {
      container:
        "bg-gradient-to-br from-(--primary)/5 to-transparent border border-(--border) rounded-3xl p-8 hover:border-(--primary) hover:-translate-y-1 transition-all duration-300 group",
      iconBg: "bg-(--primary)/20",
      iconColor: "text-(--primary)",
      titleClass:
        "text-2xl font-bold mb-3 group-hover:text-(--primary) transition-colors",
    },
    bordered: {
      container:
        "bg-transparent border-2 border-(--border) rounded-2xl p-6 hover:border-(--primary) hover:-translate-y-1 transition-all duration-300 group relative",
      iconBg: "bg-(--primary)/10",
      iconColor: "text-(--primary)",
      titleClass:
        "text-xl font-bold mb-2 group-hover:text-(--primary) transition-colors",
    },
    minimal: {
      container:
        "bg-(--surface) rounded-2xl p-6 hover:shadow-lg hover:shadow-(--primary)/10 hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-(--primary)",
      iconBg: "bg-transparent",
      iconColor: "text-(--primary)",
      titleClass: "text-lg font-bold mb-2",
    },
  };

  const style = variants[variant] || variants.default;

  return (
    <div className={`${style.container} ${className}`} {...props}>
      {variant === "bordered" && (
        <div className="absolute top-0 right-0 w-20 h-20 bg-(--primary)/5 rounded-bl-3xl -translate-y-10 translate-x-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500"></div>
      )}

      <div className="relative z-10">
        {Icon ? (
          <div className={`p-3 ${style.iconBg} rounded-xl w-fit mb-4`}>
            <Icon className={`text-[30px] ${style.iconColor}`} />
          </div>
        ) : (
          <div
            className={`w-12.5 aspect-square rounded-full  bg-[url('${imgUri}')] bg-center bg-cover bg-no-repeat`}
          />
        )}

        <h3 className={style.titleClass}>{title}</h3>
        <p className="text-(--text-muted) text-sm mb-4 leading-relaxed">
          {description}
        </p>
        {showButton && (
          <Button
            to={`/services/${id}`}
            className="inline-flex items-center gap-1 text-(--primary) text-sm font-medium group/btn"
          >
            <span>بیشتر بدانید</span>
            <CiCircleChevLeft className="text-[18px] group-hover/btn:-translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
