import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

export default function Container({
  children,
  className = "",
  wide = false,
}: ContainerProps) {
  return (
    <div
      className={`site-container ${wide ? "site-container--wide" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
