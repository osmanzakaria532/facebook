import { Link } from "react-router-dom";

const Button = ({ className, href, children, ...props }) => {
  return (
    <>
      <Link
        className={`capitalize py-1 px-3 inline-block rounded-xs cursor-pointer text-sm font-semibold ${className}`}
        to={href}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
