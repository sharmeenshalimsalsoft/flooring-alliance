import { useCallback, useEffect, useRef, useState } from "react";
import type { FlooringOption } from "../../data/flooringOptions";

const AUTOPLAY_MS = 5000;
const RESUME_MS = 10000;

type Props = {
  options: FlooringOption[];
  ariaLabel: string;
  /** Use h1 only for the primary page hero */
  titleAs?: "h1" | "h2";
  className?: string;
  eagerFirst?: boolean;
};

export default function FlooringInteractiveSection({
  options,
  ariaLabel,
  titleAs = "h2",
  className = "h-[100svh] min-h-[640px]",
  eagerFirst = false,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = options[activeIndex];
  const TitleTag = titleAs;

  const selectFloor = useCallback((index: number, fromUser = false) => {
    setActiveIndex(index);
    setTextKey((k) => k + 1);
    if (fromUser) {
      setPaused(true);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => setPaused(false), RESUME_MS);
    }
  }, []);

  useEffect(() => {
    if (paused || options.length === 0) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % options.length;
        setTextKey((k) => k + 1);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, options.length]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    options.forEach((opt, i) => {
      if (Math.abs(i - activeIndex) <= 1 || i === 0) {
        const img = new Image();
        img.src = opt.scene;
      }
    });
  }, [activeIndex, options]);

  if (!active) return null;

  return (
    <section
      className={`flooring-hero relative w-full overflow-hidden bg-charcoal ${className}`}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {options.map((opt, i) => (
        <div
          key={opt.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === activeIndex ? "opacity-100 z-[1]" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== activeIndex}
        >
          <img
            src={opt.scene}
            alt=""
            loading={eagerFirst && i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={`h-full w-full object-cover object-[center_65%] ${
              i === activeIndex ? "flooring-hero-zoom" : ""
            }`}
          />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-black/70 via-black/30 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-end pb-10 sm:pb-14 md:pb-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4">
          <div
            className="flooring-hero-pill flex max-w-full items-center gap-2.5 overflow-x-auto px-3.5 py-3 sm:gap-3 sm:px-5 sm:py-3.5"
            role="tablist"
            aria-label="Flooring finishes"
          >
            {options.map((opt, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={opt.name}
                  onClick={() => selectFloor(i, true)}
                  className={`group relative shrink-0 overflow-hidden rounded-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                    isActive
                      ? "h-14 w-10 sm:h-16 sm:w-11 ring-2 ring-white shadow-lg scale-105"
                      : "h-12 w-8 sm:h-14 sm:w-10 opacity-80 hover:opacity-100 hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={opt.swatch}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {isActive && (
                    <span
                      className="absolute inset-0 ring-1 ring-inset ring-white/40"
                      aria-hidden
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-end justify-center gap-1.5" aria-hidden>
            {options.map((opt, i) => (
              <button
                key={opt.id}
                type="button"
                tabIndex={-1}
                onClick={() => selectFloor(i, true)}
                className={`rounded-full bg-white transition-all duration-300 ${
                  i === activeIndex
                    ? "h-3.5 w-1 opacity-100"
                    : "h-2 w-1 opacity-40 hover:opacity-70"
                }`}
                aria-label={`Go to ${opt.name}`}
              />
            ))}
          </div>

          <div
            key={textKey}
            className="flooring-hero-text mt-6 sm:mt-8 text-center"
          >
            <TitleTag className="font-sans text-[1.35rem] sm:text-2xl md:text-3xl lg:text-[2.35rem] font-semibold uppercase tracking-[0.18em] text-white leading-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)]">
              {active.title}
            </TitleTag>
            <p className="mt-3 text-sm sm:text-[15px] font-light tracking-[0.04em] text-white/85">
              {active.subtitle}
            </p>
          </div>

          <p className="sr-only" aria-live="polite">
            Showing {active.title}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 z-10 h-[2px] bg-white/15"
          aria-hidden
        >
          <div
            key={`${activeIndex}-${paused}`}
            className={`h-full bg-white/70 ${
              paused ? "w-0" : "flooring-hero-progress"
            }`}
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
          />
        </div>
      </div>
    </section>
  );
}
