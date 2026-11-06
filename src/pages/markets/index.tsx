import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import MarketDeck from "../../components/fx/MarketDeck";
import { markets } from "../../data/content";
import { images } from "../../data/images";

export default function MarketsPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Markets Served"
        title="Serving Every Corner of the Industry"
        subtitle="Scroll or tap through the market deck — each card opens a focused view of where the alliance shows up."
        image={images.retail}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal>
            <MarketDeck markets={markets} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
