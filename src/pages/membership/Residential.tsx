import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { images } from "../../data/images";

export default function ResidentialMembership() {
  return (
    <>
      <PageHero
        eyebrow="Residential Dealers"
        title="Grow Your Independent Flooring Business"
        subtitle="Purchasing programs, supplier relationships, business resources and a nationwide dealer network — built for independently owned retailers."
        image={images.residential}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="split-panel">
            <Reveal variant="slide-left">
              <h2 className="font-serif text-3xl font-semibold text-charcoal">
                Built for Independent Dealers
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Residential dealer membership connects your showroom to national
                supplier partnerships, peer networking and practical business
                resources — while you remain independently owned and locally focused.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-charcoal">
                {[
                  "Access to supplier purchasing programs",
                  "Business development and marketing resources",
                  "Education and training for your team",
                  "Peer networking with fellow dealers",
                  "Member-only offers and promotions",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/membership/apply" variant="gold">
                  Apply as a Dealer
                </Button>
                <Button href="/membership/benefits" variant="ghost">
                  View Benefits
                </Button>
              </div>
            </Reveal>
            <Reveal variant="slide-right">
              <div className="img-frame relative aspect-[4/5] overflow-hidden shadow-[0_24px_60px_rgba(73,56,45,0.12)]">
                <img
                  src={images.hardwood}
                  alt="Hardwood flooring in a residential living space"
                  className="image-zoom h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
