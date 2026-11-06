import { useState } from "react";
import Container from "./Container";
import Reveal from "./Reveal";

type Variant = "classic" | "split" | "gallery" | "immersive";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  eyebrow?: string;
  /** Unique layout per page family — not a home-hero replica */
  variant?: Variant;
  /** Extra images for gallery / immersive variants */
  gallery?: string[];
}

export default function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
  variant = "classic",
  gallery = [],
}: PageHeroProps) {
  const frames = [image, ...gallery].filter(Boolean).slice(0, 5);
  const [active, setActive] = useState(0);

  if (variant === "split") {
    return (
      <section className="page-hero page-hero--split">
        <Container className="page-hero--split__grid">
          <Reveal className="page-hero--split__copy">
            {eyebrow && (
              <p className="mb-3 bg-[linear-gradient(90deg,#d4b08c,#b89578)] bg-clip-text font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-transparent">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-charcoal md:text-5xl lg:text-[3.4rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted md:text-lg">
                {subtitle}
              </p>
            )}
          </Reveal>
          <Reveal variant="slide-right" className="page-hero--split__media">
            <div className="img-frame relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
              <img src={image} alt="" className="h-full w-full object-cover page-hero--ken" />
            </div>
          </Reveal>
        </Container>
      </section>
    );
  }

  if (variant === "gallery") {
    return (
      <section className="page-hero page-hero--gallery">
        <div className="page-hero--gallery__stage">
          {frames.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`page-hero--gallery__frame ${i === active ? "is-active" : ""}`}
            />
          ))}
          <div className="page-hero--gallery__veil" aria-hidden />
        </div>
        <Container className="relative z-10 flex min-h-[52vh] items-end pb-12 pt-24 md:min-h-[58vh] md:pb-16">
          <Reveal className="max-w-3xl">
            {eyebrow && (
              <p className="mb-3 bg-[linear-gradient(90deg,#d4b08c,#b89578)] bg-clip-text font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-transparent">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-charcoal md:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {subtitle}
              </p>
            )}
            {frames.length > 1 && (
              <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero gallery">
                {frames.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    className={`page-hero--gallery__thumb ${i === active ? "is-active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>
        </Container>
      </section>
    );
  }

  if (variant === "immersive") {
    return (
      <section className="page-hero page-hero--immersive">
        <div className="page-hero--immersive__media">
          <img src={image} alt="" className="h-full w-full object-cover page-hero--ken" />
          <div className="page-hero--immersive__veil" aria-hidden />
        </div>
        <Container className="relative z-10 flex min-h-[58vh] items-center py-20 md:min-h-[64vh]">
          <Reveal className="mx-auto max-w-3xl text-center">
            {eyebrow && (
              <p className="mb-3 bg-[linear-gradient(90deg,#d4b08c,#b89578)] bg-clip-text font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-transparent">
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-charcoal md:text-5xl lg:text-[3.75rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {subtitle}
              </p>
            )}
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-hero relative flex min-h-[46vh] items-end overflow-hidden pb-12 pt-20 sm:min-h-[50vh] sm:pb-16 md:min-h-[54vh]">
      <div className="page-hero__media absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover page-hero--ken" />
      </div>
      <div className="page-hero__veil" aria-hidden />
      <Container className="relative z-10">
        <Reveal>
          {eyebrow && (
            <p className="mb-3 bg-[linear-gradient(90deg,#d4b08c,#b89578)] bg-clip-text font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-transparent">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.08] text-charcoal md:text-5xl lg:text-[3.65rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl font-sans text-base font-normal leading-relaxed text-muted md:text-lg">
              {subtitle}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
