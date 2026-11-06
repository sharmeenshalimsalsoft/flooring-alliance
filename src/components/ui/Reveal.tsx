import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** fade-up | fade | slide-left | slide-right | scale */
  variant?: "fade-up" | "fade" | "slide-left" | "slide-right" | "scale";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const style = {
    transitionDelay: inView ? `${delay}ms` : "0ms",
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal reveal--${variant} ${inView ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
