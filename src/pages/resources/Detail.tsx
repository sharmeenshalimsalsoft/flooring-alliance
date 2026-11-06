import { Link, useParams } from "react-router";
import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { services } from "../../data/content";

export default function ResourceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug) ?? services[0];

  return (
    <>
      <PageHero
        eyebrow="Member Services"
        title={service.title}
        subtitle={service.description}
        image={service.image}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted">
              This detail page is a reusable template for member service content.
              Full program descriptions, downloadable resources and portal deep
              links will be added when content migration begins.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              Members with portal access will find related documents, courses and
              offers inside the secure member area. Public visitors can explore
              membership options to learn how to join.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/membership" variant="gold">
                Explore Membership
              </Button>
              <Link
                to="/resources"
                className="inline-flex items-center text-sm text-muted hover:text-walnut"
              >
                ← All Resources
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
