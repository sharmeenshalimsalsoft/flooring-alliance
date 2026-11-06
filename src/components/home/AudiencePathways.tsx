import { Link } from "react-router";
import { audiences } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import SpotlightGrid from "../fx/SpotlightGrid";
import Reveal from "../ui/Reveal";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

export default function AudiencePathways() {
  return (
    <SectionStage mood="cinematic" aria-labelledby="audiences-heading">
      <Container>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Three Paths. One Alliance."
          description="Clear membership pathways for independent dealers, commercial contractors and supplier partners."
        />
        <h2 id="audiences-heading" className="sr-only">
          Membership Pathways
        </h2>
        <SpotlightGrid className="mt-14">
          <div className="content-grid grid gap-5 md:grid-cols-3 md:gap-6">
            {audiences.map((item, i) => (
              <Reveal key={item.id} delay={i * 100} className="h-full">
                <Link
                  to={item.href}
                  className="pathway-tile group relative flex h-full min-h-[420px] flex-col overflow-hidden md:min-h-[480px]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="image-zoom absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut/90 via-walnut/50 to-walnut/15 transition-opacity duration-500 group-hover:from-walnut/95" />
                  <div className="pathway-tile__shine" aria-hidden />
                  <div className="relative z-10 mt-auto flex min-h-[55%] flex-col justify-end p-7 lg:p-8">
                    <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brass">
                      Pathway 0{i + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-ivory transition-transform duration-500 group-hover:-translate-y-1 lg:text-[1.75rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone/95">
                      {item.description}
                    </p>
                    <span className="link-arrow mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                      {item.cta}
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </SpotlightGrid>
      </Container>
    </SectionStage>
  );
}
