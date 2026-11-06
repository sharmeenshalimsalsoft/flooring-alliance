import CommercialFlooring from "../../components/home/CommercialFlooring";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { images } from "../../data/images";

export default function CommercialMembership() {
  return (
    <>
      <CommercialFlooring asPageHero />

      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="split-panel">
            <Reveal variant="slide-left" className="order-2 lg:order-1">
              <div className="img-frame relative aspect-[4/3] overflow-hidden shadow-[0_24px_60px_rgba(73,56,45,0.12)]">
                <img
                  src={images.commercialFlooring}
                  alt="Contemporary commercial office interior"
                  className="image-zoom h-full w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal variant="slide-right" className="order-1 lg:order-2">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
                Commercial Contractors
              </p>
              <h2 className="font-serif text-3xl font-semibold text-charcoal">
                Support for Commercial Professionals
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Commercial membership is structured around the realities of project
                work — supplier access, operational resources and a network of
                peers serving workplace, retail, hospitality and institutional spaces.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-charcoal">
                {[
                  "Commercial supplier partnerships",
                  "Purchasing and program opportunities",
                  "Contractor networking and forums",
                  "Training for commercial installations",
                  "Access to industry events and summits",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/membership/apply" variant="gold">
                  Apply for Commercial Membership
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
