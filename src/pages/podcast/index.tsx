import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { podcasts } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function PodcastPage() {
  return (
    <>
      <PageHero
        variant="immersive"
        eyebrow="What’s Underfoot"
        title="Conversations That Move the Industry"
        subtitle="Inspired by the official AHSG & Commercial USA podcast — candid talks with dealers, contractors and supplier partners. Playback is not connected in this design preview."
        image={images.podcast}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="mx-auto max-w-3xl space-y-5">
            {podcasts.map((ep, i) => (
              <Reveal key={ep.id} delay={i * 80}>
                <article className="surface-card surface-card--padded !p-6 md:!p-8">
                <CardFx />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brass">
                    {ep.episode} · {ep.duration}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-charcoal">
                    {ep.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {ep.description}
                  </p>
                  <button
                    type="button"
                    className="mt-5 border-b border-brass pb-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-walnut"
                  >
                    Listen (Preview UI)
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
