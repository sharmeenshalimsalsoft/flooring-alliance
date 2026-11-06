import { Link } from "react-router";
import { podcasts } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function PodcastPreview() {
  return (
    <SectionStage mood="broadcast">
      <Container>
        <SectionHeading
          eyebrow="What’s Underfoot"
          title="The Alliance Podcast"
          description="Candid conversations with flooring leaders, suppliers and business professionals — inspired by the official AHSG & Commercial USA podcast."
        />
        <div className="content-grid mt-14 grid md:grid-cols-3">
          {podcasts.map((ep, i) => {
            const fx = (["rise", "glow", "tilt"] as const)[i % 3];
            return (
              <Reveal key={ep.id} delay={i * 80} className="h-full">
                <article
                  className={`surface-card surface-card--padded surface-card--fx-${fx} flex h-full flex-col gap-3`}
                >
                  <CardFx />
                  <p className="card-meta">
                    {ep.episode} · {ep.duration}
                  </p>
                  <h3 className="card-title text-[1.4rem]">{ep.title}</h3>
                  <p className="card-copy flex-1">{ep.description}</p>
                  <Link
                    to="/podcast"
                    className="link-arrow mt-3 inline-flex font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary"
                  >
                    Listen preview <span aria-hidden>→</span>
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-12 text-center">
          <Button href="/podcast" variant="gold">
            View All Episodes
          </Button>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
