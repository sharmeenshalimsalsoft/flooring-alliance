import { Link } from "react-router";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { services } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Member Services & Resources"
        subtitle="Training, business support and programs that help members operate with confidence."
        image={images.training}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="content-grid grid sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80} className="h-full">
                <Link
                  to={`/resources/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden bg-white"
                >
                  <div className="img-frame aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt=""
                      className="image-zoom h-full w-full object-cover"
                    />
                  </div>
                  <div className="surface-card surface-card--padded flex flex-1 flex-col !border-t-0 border-x border-b">
                <CardFx />
                    <h2 className="font-serif text-xl font-semibold text-charcoal transition-colors group-hover:text-primary">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">{s.description}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
