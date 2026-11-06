import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Soft peach spotlight that follows the cursor across a grid. */
export default function SpotlightGrid({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={`spotlight-grid ${className}`}
      onMouseMove={onMove}
    >
      <div className="spotlight-grid__glow" aria-hidden />
      <div className="spotlight-grid__content">{children}</div>
    </div>
  );
}
