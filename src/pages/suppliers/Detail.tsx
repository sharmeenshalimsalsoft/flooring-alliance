import { Link, useParams } from "react-router";
import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import { suppliers } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function SupplierDetail() {
  const { slug } = useParams();
  const supplier = suppliers.find((s) => s.slug === slug) ?? suppliers[0];

  return (
    <>
      <PageHero
        eyebrow={supplier.category}
        title={supplier.name}
        subtitle={supplier.description}
        image={images.customSupplier}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-6 lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-charcoal">
                About This Partner
              </h2>
              <p className="leading-relaxed text-muted">
                {supplier.name} is a fictional placeholder supplier used for
                interface demonstration. Product descriptions, certifications and
                website links will be populated when real supplier data is migrated.
              </p>
              <p className="leading-relaxed text-muted">
                Future detail pages will include logos, service descriptions,
                eligible membership types and outbound website links.
              </p>
              <Button href="/suppliers" variant="ghost">
                ← Back to Directory
              </Button>
            </div>
            <aside className="surface-card surface-card--padded h-fit">
                <CardFx />
              <div className="flex h-16 w-16 items-center justify-center bg-cream font-serif text-2xl text-walnut">
                {supplier.initials}
              </div>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted">
                    Category
                  </dt>
                  <dd className="mt-1 text-charcoal">{supplier.category}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.14em] text-muted">
                    Website
                  </dt>
                  <dd className="mt-1 text-muted">Coming soon</dd>
                </div>
              </dl>
              <Link
                to="/membership/supplier"
                className="mt-6 inline-block text-[11px] uppercase tracking-[0.14em] text-brass hover:text-primary"
              >
                Become a Partner →
              </Link>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
