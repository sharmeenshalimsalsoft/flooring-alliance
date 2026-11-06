import { Link } from "react-router";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { newsItems } from "../../data/content";
import { images } from "../../data/images";

const filters = ["All", "News", "Industry", "Events"];

export default function NewsPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="News & Events"
        title="Industry Insights & Alliance Updates"
        subtitle="Editorial content for demonstration. Category filters are visual only until a CMS is connected."
        image={images.news1}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] transition-all duration-300 ${
                  f === "All"
                    ? "bg-walnut text-ivory"
                    : "border border-stone text-muted hover:-translate-y-0.5 hover:border-brass hover:text-brass"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>
          <div className="content-grid grid md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 100} className="h-full">
                <article className="h-full">
                  <Link to={`/news/${item.slug}`} className="group flex h-full flex-col">
                    <div className="img-frame relative aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="image-zoom h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-brass">
                      {item.category} · {item.date}
                    </p>
                    <h2 className="mt-2 font-serif text-xl font-semibold text-charcoal transition-colors group-hover:text-primary">
                      {item.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-muted">{item.excerpt}</p>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
