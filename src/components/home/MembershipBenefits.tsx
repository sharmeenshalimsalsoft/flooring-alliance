import { benefits } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function MembershipBenefits() {
  return (
    <SectionStage mood="parchment">
      <Container>
        <SectionHeading
          eyebrow="Membership"
          title="More Than Membership. A Network That Moves Business Forward."
          description="Programs and resources designed to support independent dealers, commercial professionals and supplier partners."
        />
        <div className="content-grid mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const fx = (["glow", "tilt", "frame", "rise"] as const)[i % 4];
            return (
              <Reveal key={b.title} delay={i * 70} className="h-full">
                <article
                  className={`surface-card surface-card--padded surface-card--fx-${fx} flex h-full flex-col gap-4`}
                >
                  <CardFx />
                  <span className="card-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="card-title text-[1.35rem]">{b.title}</h3>
                  <p className="card-copy flex-1">{b.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12 text-center md:mt-14">
          <Button href="/membership/benefits" variant="secondary">
            View All Benefits
          </Button>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
