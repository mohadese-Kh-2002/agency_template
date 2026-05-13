import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none ";

  const variants = {
    primary:
      "bg-(--primary) text-white hover:opacity-90 ",
    outline:
      "border border-(--primary) text-(--primary) hover:bg-(--primary) hover:text-white ",
    ghost:
      "text-(--primary) hover:bg-(--primary)/10 ",
    none:
      "bg-transparent"
  };

  const sizes = {
    sm: "px-4 h-9 text-[10px] sm:text-[12px]",
    md: "px-6 h-10 text-[14px] sm:text-[16px]",
    lg: "px-8 h-12 text-[18px] sm:text-[20px]",
  };

  const disabledStyle = "opacity-50 pointer-events-none";
  const classes=`${base} ${variants[variant]} ${sizes[size]} ${
        disabled ? disabledStyle : ""
      } ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
 if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={classes} disabled={disabled}>{children}</button>
  )
};

export default Button;
