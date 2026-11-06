import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import { images } from "../../data/images";
import { brand } from "../../config/brand";

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Accessibility"
        title="Accessibility Statement"
        subtitle="We aim for WCAG 2.2 AA alignment across the public website and member portal."
        image={images.office}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted">
            <p>
              {brand.temporaryName} is committed to an accessible digital
              experience, including semantic structure, keyboard navigation,
              visible focus states and sufficient color contrast.
            </p>
            <p>
              If you encounter an accessibility barrier, contact{" "}
              {brand.contactEmail}. This statement will be expanded with audit
              results as QA progresses.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
