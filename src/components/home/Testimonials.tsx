import { useState } from "react";
import { testimonials } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  return (
    <SectionStage mood="velvet">
      <Container>
        <SectionHeading
          eyebrow="Member Voices"
          title="What Members Are Saying"
          description="Placeholder testimonials for layout demonstration only — not authentic member quotes."
        />
        <Reveal className="mx-auto mt-14 max-w-3xl text-center">
          <blockquote className="surface-card surface-card--padded surface-card--fx-glow !px-8 !py-12 md:!px-14 md:!py-16">
            <CardFx />
            <p className="font-serif text-2xl italic leading-relaxed text-charcoal md:text-[2rem]">
              “{active.quote}”
            </p>
            <footer className="mt-8">
              <p className="font-sans text-base font-semibold text-charcoal">
                {active.name}
              </p>
              <p className="mt-2 font-sans text-sm text-muted">
                {active.position}, {active.company}
              </p>
            </footer>
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? "scale-125 bg-brass-soft"
                    : "bg-stone/40 hover:bg-brass"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
