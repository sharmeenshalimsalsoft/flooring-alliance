import { useEffect, useState } from "react";

type Props = {
  images: string[];
  className?: string;
  opacity?: number;
  intervalMs?: number;
};

/** Cinematic Ken Burns reel of on-brand flooring photography */
export default function FlooringBackdrop({
  images,
  className = "",
  opacity = 0.42,
  intervalMs = 7000,
}: Props) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || images.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs, reduceMotion]);

  if (!images.length) return null;

  return (
    <div
      className={`flooring-backdrop absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`flooring-backdrop__frame ${
            i === index ? "is-active" : ""
          } ${reduceMotion ? "is-static" : ""}`}
        />
      ))}
    </div>
  );
}
