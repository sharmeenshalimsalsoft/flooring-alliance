import { Link } from "react-router";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { events } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function EventsPage() {
  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="Events"
        title="Gather. Learn. Connect."
        subtitle="Regional meetups, educational roundtables and the Annual Summit — tap the gallery to shift the mood."
        image={images.summit}
        gallery={[images.training, images.partners, images.designCenter]}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="space-y-4">
            {events.map((event, i) => (
              <Reveal key={event.id} delay={i * 70}>
                <div className="surface-card surface-card--padded flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:!px-8 md:!py-7">
                <CardFx />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-brass">
                      {event.type}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl font-semibold text-charcoal">
                      {event.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                      {event.date} · {event.location}
                    </p>
                  </div>
                  {event.type === "Summit" ? (
                    <Link
                      to="/events/summit"
                      className="text-[11px] uppercase tracking-[0.16em] text-brass hover:text-primary"
                    >
                      Summit Details →
                    </Link>
                  ) : (
                    <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                      Details Coming Soon
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
