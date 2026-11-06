import { Link } from "react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  /** Hide trailing arrow on CTA-style buttons */
  showArrow?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "btn btn--primary",
  secondary: "btn btn--secondary",
  outline: "btn btn--outline",
  ghost: "btn btn--ghost",
  gold: "btn btn--gold",
  dark: "btn btn--dark",
};

const sizes: Record<Size, string> = {
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 10 10"
      className="btn__arrow"
      fill="none"
    >
      <path d="M0 5h7" className="btn__arrow-shaft" />
      <path d="M1 1l4 4-4 4" className="btn__arrow-head" />
    </svg>
  );
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  showArrow = true,
  ...rest
}: ButtonProps) {
  const classes =
    `btn-shell ${variants[variant]} ${sizes[size]} ${className}`.trim();

  const content = (
    <>
      <span className="btn__aura" aria-hidden />
      <span className="btn__label">{children}</span>
      {showArrow ? <ArrowIcon /> : null}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
