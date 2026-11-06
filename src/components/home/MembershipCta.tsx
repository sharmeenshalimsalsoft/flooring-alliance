import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function MembershipCta() {
  return (
    <SectionStage mood="summit" className="!py-0">
      <Container className="relative z-10 flex min-h-[440px] items-center py-16 md:min-h-[520px]">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            Join the Alliance
          </p>
          <h2 className="font-serif text-[1.85rem] font-semibold leading-[1.15] text-charcoal sm:text-3xl md:text-4xl lg:text-5xl">
            Your Business Belongs in a Stronger Network.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Discover the opportunities, partnerships and resources available
            through our growing flooring and surfaces alliance.
          </p>
          <div className="mt-8">
            <Button href="/membership" variant="gold" size="lg">
              Explore Membership
            </Button>
          </div>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
