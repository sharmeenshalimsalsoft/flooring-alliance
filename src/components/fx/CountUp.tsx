import { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";

type Props = {
  value: string;
  className?: string;
};

/** Animates numeric portions of strings like "50+", "1,200", "98%". */
export default function CountUp({ value, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true });
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    started.current = true;
    const [, prefix, numRaw, suffix] = match;
    const target = Number(numRaw.replace(/,/g, ""));
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const start = performance.now();
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      const formatted = numRaw.includes(",")
        ? current.toLocaleString("en-US")
        : String(current);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
