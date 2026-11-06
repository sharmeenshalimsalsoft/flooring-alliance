import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import StoryChapters from "../../components/fx/StoryChapters";
import TiltMedia from "../../components/fx/TiltMedia";
import SpotlightGrid from "../../components/fx/SpotlightGrid";
import { images } from "../../data/images";
import { brand } from "../../config/brand";
import CardFx from "../../components/ui/CardFx";

const chapters = [
  {
    id: "unite",
    label: "The Alliance",
    title: "Two Organizations. One Stronger Platform.",
    body: `${brand.temporaryName} brings together the strengths of a residential dealer alliance and a commercial flooring contractor network — without asking members to give up their brand.`,
    image: images.about,
    imageAlt: "Alliance showroom atmosphere",
  },
  {
    id: "independent",
    label: "Independence",
    title: "Built for Independents — Not a Store-in-a-Box",
    body: "We do not private-label stores or dictate which brands sit on the showroom floor. Programs stay optional, manufacturer brands stay visible, and local identity stays intact.",
    image: images.stairs,
    imageAlt: "Architectural staircase with refined hardwood flooring",
  },
  {
    id: "network",
    label: "Network",
    title: "Purchasing Power. Peer Support. Real Partnerships.",
    body: "Members gain collective strength through supplier relationships, education, and a nationwide peer community focused on practical growth.",
    image: images.partners,
    imageAlt: "Industry partners collaborating",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="About Us"
        title="Two Organizations. One Stronger Alliance."
        subtitle="Commercial USA Flooring Alliance and American Home Surfaces Group are uniting to serve independent flooring businesses under one platform."
        image={images.about}
        gallery={[images.stairs, images.hardwood, images.partners]}
      />

      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal className="mb-10 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Our Story
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Explore how the alliance is shaped
            </h2>
          </Reveal>
          <StoryChapters chapters={chapters} />
          <Reveal className="mt-10 flex flex-wrap gap-4">
            <Button href="/mission" variant="secondary">
              Our Mission
            </Button>
            <Button href="/membership" variant="ghost">
              Explore Membership
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="section-shell section-shell--cream">
        <Container>
          <div className="split-panel mb-14 !items-center">
            <Reveal variant="slide-left">
              <TiltMedia>
                <div className="img-frame relative aspect-[4/3] overflow-hidden shadow-[0_24px_60px_rgba(47,36,28,0.12)]">
                  <img
                    src={images.designCenter}
                    alt="Design center flooring samples"
                    className="h-full w-full object-cover"
                  />
                </div>
              </TiltMedia>
            </Reveal>
            <Reveal variant="slide-right">
              <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
                Who we serve
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Move your pointer across the cards — each audience pathway is a
                distinct door into the network.
              </p>
            </Reveal>
          </div>

          <SpotlightGrid>
            <div className="content-grid grid md:grid-cols-3">
              {[
                {
                  title: "Residential Dealers",
                  text: "Independent floor covering dealers across all 50 states — showroom support, purchasing programs and peer networking.",
                },
                {
                  title: "Commercial Contractors",
                  text: "A national network of commercial flooring professionals with focused supplier partnerships and education.",
                },
                {
                  title: "Supplier Partners",
                  text: "Strategic manufacturer relationships kept intentionally close so members and suppliers both grow.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100} className="h-full">
                  <div className="surface-card surface-card--padded flex h-full flex-col gap-3">
                    <CardFx />
                    <span className="card-index w-fit">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="card-title text-[1.35rem]">{item.title}</h3>
                    <p className="card-copy">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </SpotlightGrid>
        </Container>
      </section>
    </>
  );
}
