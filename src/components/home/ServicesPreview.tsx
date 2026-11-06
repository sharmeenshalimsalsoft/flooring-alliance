import { Link } from "react-router";
import { services } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function ServicesPreview() {
  return (
    <SectionStage mood="studio">
      <Container>
        <SectionHeading
          eyebrow="Member Services"
          title="Resources Built for Working Professionals"
          description="Training, support and programs that help members strengthen their businesses across every market."
        />
        <div className="content-grid mt-14 grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80} className="h-full">
              <Link
                to={`/resources/${service.slug}`}
                className="surface-card surface-card--media group flex h-full flex-col"
              >
                <CardFx />
                <div className="img-frame relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    className="image-zoom h-full w-full object-cover"
                  />
                </div>
                <div className="surface-card__body flex flex-1 flex-col gap-3">
                  <h3 className="card-title text-[1.3rem] transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="card-copy flex-1">{service.description}</p>
                  <span className="link-arrow mt-1 inline-flex font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionStage>
  );
}
