import { Link } from "react-router";
import { suppliers } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function SupplierPreview() {
  return (
    <SectionStage mood="gallery">
      <Container>
        <SectionHeading
          eyebrow="Supplier Network"
          title="Industry-Leading Supplier Partnerships"
          description="Placeholder supplier identities for demonstration only. Real supplier data and logos will be migrated when available."
        />
        <div className="content-grid mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {suppliers.map((s, i) => (
            <Reveal key={s.id} delay={i * 60} className="h-full">
              <Link
                to={`/suppliers/${s.slug}`}
                className="surface-card group flex h-full flex-col items-center px-4 py-7 text-center"
              >
                <CardFx />
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#f3ebe0,#e4d8c8)] font-serif text-lg text-walnut shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[linear-gradient(135deg,#dfc896,#c4a46a)] group-hover:text-charcoal md:h-16 md:w-16 md:text-xl">
                  {s.initials}
                </div>
                <p className="card-title mt-4 text-[0.95rem] !leading-snug">
                  {s.name}
                </p>
                <p className="card-meta mt-2">{s.category}</p>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Button href="/suppliers" variant="ghost" size="md">
            View Supplier Directory
          </Button>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
