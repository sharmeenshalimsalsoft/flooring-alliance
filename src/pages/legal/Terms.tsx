import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import { images } from "../../data/images";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        subtitle="Placeholder terms for demonstration. Final terms will be supplied by counsel."
        image={images.office}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-muted">
            <p>
              These Terms of Use are a structural placeholder. They do not create
              binding obligations and should not be treated as legal advice.
            </p>
            <p>
              Membership agreements, portal acceptable-use policies and financial
              access terms will be published here when approved.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
