import { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

type Props = {
  src: string;
  className?: string;
  loop?: boolean;
};

export default function LottieAccent({
  src,
  className = "",
  loop = true,
}: Props) {
  const [data, setData] = useState<object | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    let alive = true;
    fetch(src)
      .then((r) => r.json())
      .then((json) => {
        if (alive) setData(json);
      })
      .catch(() => {
        if (alive) setData(null);
      });
    return () => {
      alive = false;
    };
  }, [src]);

  if (!data || reduceMotion) return null;

  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <Lottie src={data} loop={loop} autoplay className="h-full w-full" />
    </div>
  );
}
