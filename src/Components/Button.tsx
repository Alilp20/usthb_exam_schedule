interface buttonProps {
  bg?: string;
  edges?: string;
  px?: string;
  py?: string;
  text?: string;
  href?: string;
  to?: string;
  additionalStyling?: string;
  children: React.ReactNode;
  buttonAction?: () => void;
}

import { Link } from "react-router-dom";

const Button = ({
  bg,
  edges,
  px,
  py,
  text,
  href,
  to,
  additionalStyling,
  buttonAction,
  children,
}: buttonProps) => {
  const baseClassStyling = ` ${bg || "gradient-button"}
        ${edges || "rounded-md"}
        ${px || "px-4"}
        ${py || "py-2"}
        ${text || "text-md font-medium text-white uppercase"}
        cursor-pointer whitespace-nowrap  ${additionalStyling || "inline-block"}`.trim();

  if (buttonAction) {
    return (
      <button onClick={buttonAction} className={baseClassStyling}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClassStyling}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={baseClassStyling}>
        {" "}
        {children}
      </Link>
    );
  }
};

export default Button;
