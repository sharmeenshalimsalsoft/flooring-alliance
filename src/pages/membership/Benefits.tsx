import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { benefits } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function MembershipBenefitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Benefits"
        title="More Than Membership"
        subtitle="A network of programs and resources designed to move independent businesses forward."
        image={images.partners}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="content-grid grid sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 70} className="h-full">
                <div className="surface-card surface-card--padded flex h-full flex-col gap-3">
                <CardFx />
                  <span className="card-index w-fit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="card-title text-[1.3rem]">{b.title}</h2>
                  <p className="card-copy">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
            Benefit descriptions are illustrative. Specific program terms will be
            confirmed with the client. No savings or rebate amounts are claimed.
          </p>
          <div className="mt-10 text-center">
            <Button href="/membership/apply" variant="gold">
              Apply for Membership
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
