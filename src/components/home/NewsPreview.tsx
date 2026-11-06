import { Link } from "react-router";
import { events, newsItems } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function NewsPreview() {
  return (
    <SectionStage mood="editorial">
      <Container>
        <SectionHeading
          eyebrow="News & Events"
          title="Stay Connected to the Industry"
          description="Latest updates, upcoming events and the Annual Summit — editorial content for demonstration."
        />
        <div className="content-grid mt-14 grid lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 90} className="h-full">
              <article className="h-full">
                <Link
                  to={`/news/${item.slug}`}
                  className="surface-card surface-card--media group flex h-full flex-col"
                >
                  <CardFx />
                  <div className="img-frame relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="image-zoom h-full w-full object-cover"
                    />
                  </div>
                  <div className="surface-card__body flex flex-1 flex-col gap-2.5">
                    <p className="card-meta">
                      {item.category} · {item.date}
                    </p>
                    <h3 className="card-title text-[1.3rem] transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="card-copy flex-1">{item.excerpt}</p>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-stone/70 pt-12">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="font-serif text-2xl font-semibold text-charcoal">
              Upcoming Events
            </h3>
            <Button href="/events" variant="ghost" size="sm">
              View All Events
            </Button>
          </div>
          <div className="content-grid grid md:grid-cols-3">
            {events.map((event, i) => (
              <Reveal key={event.id} delay={i * 70} className="h-full">
                <div className="surface-card surface-card--padded flex h-full flex-col gap-2">
                  <CardFx />
                  <p className="card-meta">{event.type}</p>
                  <p className="card-title text-[1.15rem]">{event.title}</p>
                  <p className="card-copy !text-[0.88rem]">
                    {event.date} · {event.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
