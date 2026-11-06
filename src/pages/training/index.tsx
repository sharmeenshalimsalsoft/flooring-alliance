import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

const courses = [
  {
    title: "Hardwood Installation Foundations",
    level: "Beginner",
    format: "On-demand",
  },
  {
    title: "Commercial Project Coordination",
    level: "Intermediate",
    format: "Webinar series",
  },
  {
    title: "Supplier Product Certification Prep",
    level: "All levels",
    format: "On-demand",
  },
  {
    title: "Showroom Sales Excellence",
    level: "Intermediate",
    format: "Live workshop",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        variant="immersive"
        eyebrow="Training & Education"
        title="Learn. Advance. Lead."
        subtitle="Courses, webinars and professional development for dealers, contractors and supplier teams."
        image={images.training}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="content-grid grid md:grid-cols-2">
            {courses.map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="h-full">
                <div className="surface-card surface-card--padded flex h-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardFx />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-brass">
                      {c.level} · {c.format}
                    </p>
                    <h2 className="mt-2 font-serif text-xl font-semibold text-charcoal">
                      {c.title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-[11px] uppercase tracking-[0.14em] text-muted">
                    Portal Access
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Course listings are illustrative. Full Learning Center experiences
            live in the member portal preview.
          </p>
          <div className="mt-8">
            <Button href="/portal/learning" variant="secondary">
              Preview Learning Center
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
