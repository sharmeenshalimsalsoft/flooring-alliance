import { stats } from "../../data/content";
import CountUp from "../fx/CountUp";
import SectionStage from "../fx/SectionStage";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function NetworkStats() {
  return (
    <SectionStage mood="network">
      <Container>
        <SectionHeading
          eyebrow="Our Network"
          title="Strength Measured Across the Country"
          description="Figures below are illustrative migration references from legacy organization materials and remain subject to client verification."
        />
        <div className="content-grid mt-14 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 90} className="h-full">
              <div className="surface-card surface-card--stat flex h-full flex-col items-center justify-center">
                <CardFx aura />
                <p className="stat-value font-serif text-4xl font-semibold md:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="card-copy mt-3 max-w-[12rem] text-center !text-[0.9rem]">
                  {stat.label}
                </p>
                <p className="card-meta mt-4">{stat.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionStage>
  );
}
