import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import PathwayPicker from "../../components/fx/PathwayPicker";
import { audiences } from "../../data/content";
import { images } from "../../data/images";

export default function MembershipPage() {
  return (
    <>
      <PageHero
        variant="immersive"
        eyebrow="Membership"
        title="Find the Path That Fits Your Business"
        subtitle="Hover or select a pathway — the preview updates live so you can explore residential, commercial, and supplier memberships."
        image={images.membershipCta}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal className="mb-10 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Choose your lane
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              An interactive membership guide
            </h2>
          </Reveal>
          <PathwayPicker
            pathways={audiences.map((a) => ({
              id: a.id,
              title: a.title,
              description: a.description,
              href: a.href,
              cta: a.cta,
              image: a.image,
            }))}
          />
          <Reveal className="mt-14 text-center">
            <Button href="/membership/apply" variant="gold" size="lg">
              Start Your Application
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
