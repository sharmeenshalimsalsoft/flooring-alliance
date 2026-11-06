import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

/** Subtle 3D tilt that follows the pointer — for media frames, not cards. */
export default function TiltMedia({
  children,
  className = "",
  maxTilt = 6,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * maxTilt;
    const ry = (x - 0.5) * maxTilt;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      className={`tilt-media ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
