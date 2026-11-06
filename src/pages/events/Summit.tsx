import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function SummitPage() {
  return (
    <>
      <PageHero
        eyebrow="Annual Summit"
        title="The Industry Gathering of the Year"
        subtitle="Education, networking and supplier showcases for dealers, contractors and partners — dates and venue details are illustrative."
        image={images.summit}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="split-panel !items-start">
            <Reveal variant="slide-left">
              <h2 className="font-serif text-3xl font-semibold text-charcoal">
                September 22–24, 2026 · Chicago, IL
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                The Annual Summit brings the alliance community together for
                keynotes, breakout sessions, supplier exhibits and peer
                networking. Agenda details are placeholders pending client
                confirmation.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-charcoal">
                {[
                  "Keynote sessions with industry leaders",
                  "Breakouts for residential and commercial tracks",
                  "Supplier partner showcase floor",
                  "Networking receptions and peer roundtables",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/contact" variant="gold">
                  Request Summit Information
                </Button>
              </div>
            </Reveal>
            <Reveal variant="slide-right">
              <div className="surface-card surface-card--padded !p-8">
                <CardFx />
                <h3 className="font-serif text-xl font-semibold text-charcoal">
                  Who Should Attend
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Residential dealers, commercial contractors, supplier partners and
                  alliance staff. Registration flows will be available to members
                  through the portal in a later phase.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
