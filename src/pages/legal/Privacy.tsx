import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import { images } from "../../data/images";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Placeholder policy page for navigation completeness. Final legal copy will be provided by the client."
        image={images.office}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted">
            <p>
              This page reserves space for the official Privacy Policy. No
              personal data is collected by this frontend prototype beyond what
              your browser stores locally for navigation.
            </p>
            <p>
              Future versions will describe how membership, portal and financial
              data are handled in accordance with applicable law and client policy.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
