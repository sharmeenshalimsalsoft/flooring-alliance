import { images } from "../../data/images";
import SectionStage from "../fx/SectionStage";
import TiltMedia from "../fx/TiltMedia";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function AboutAlliance() {
  return (
    <SectionStage mood="atelier">
      <Container>
        <div className="split-panel">
          <Reveal variant="slide-left">
            <TiltMedia>
              <div className="img-frame relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
                <img
                  src={images.about}
                  alt="Architectural interior featuring refined wood and stone surfaces"
                  className="image-zoom h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brass/30" />
              </div>
            </TiltMedia>
          </Reveal>
          <Reveal variant="slide-right">
            <div className="max-w-xl">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                About the Alliance
              </p>
              <h2 className="font-serif text-[1.85rem] font-semibold leading-[1.15] text-charcoal sm:text-3xl md:text-4xl lg:text-[2.5rem]">
                Independent Businesses. One Stronger Network.
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Commercial USA Flooring Alliance and American Home Surfaces Group
                are coming together as one unified platform — supporting
                independent residential dealers and commercial flooring
                contractors without taking away their brand independence.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We bridge members and suppliers through purchasing programs,
                education, showroom support and peer networking — without a
                store-in-a-box model.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-charcoal">
                {[
                  "Independent yet united — no store-in-a-box model",
                  "Residential dealers and commercial contractors under one roof",
                  "Focused supplier partnerships that stay close and effective",
                  "Nationwide coverage across all 50 states",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/about" variant="secondary" size="md">
                  Learn More About Us
                </Button>
                <Button href="/mission" variant="ghost" size="md">
                  Our Mission
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionStage>
  );
}
