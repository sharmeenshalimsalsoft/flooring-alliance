import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import ValueOrbit from "../../components/fx/ValueOrbit";
import { images } from "../../data/images";

const values = [
  {
    title: "Independence",
    text: "Support independently owned businesses with tools that strengthen local market leadership.",
  },
  {
    title: "Partnership",
    text: "Foster durable relationships between members, suppliers and industry peers.",
  },
  {
    title: "Integrity",
    text: "Operate with transparency, especially around sensitive financial and membership information.",
  },
  {
    title: "Growth",
    text: "Create opportunities for education, networking and business development nationwide.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        variant="immersive"
        eyebrow="Our Mission"
        title="Advancing Opportunity Across Flooring & Surfaces"
        subtitle="Select a value on the orbit to explore what guides the alliance — a quieter, more intentional interaction than a standard card grid."
        image={images.kitchen}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Mission Statement
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              To unite residential dealers, commercial flooring professionals and
              supplier partners in a collaborative alliance that elevates industry
              standards, expands opportunity and builds lasting business value —
              without compromising the independence of our members.
            </p>
          </Reveal>
          <Reveal className="mt-16">
            <ValueOrbit values={values} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
