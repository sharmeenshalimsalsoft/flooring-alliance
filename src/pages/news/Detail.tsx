import { Link, useParams } from "react-router";
import Container from "../../components/ui/Container";
import { newsItems } from "../../data/content";

export default function NewsDetail() {
  const { slug } = useParams();
  const item = newsItems.find((n) => n.slug === slug) ?? newsItems[0];

  return (
    <article>
      <header className="relative min-h-[360px] overflow-hidden">
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-walnut/65" />
        <Container className="relative z-10 py-24">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brass">
              {item.category} · {item.date}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ivory md:text-5xl">
              {item.title}
            </h1>
          </div>
        </Container>
      </header>
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed text-muted">{item.excerpt}</p>
            <p className="mt-6 leading-relaxed text-muted">
              This article page uses a reusable editorial template. Full body
              content, author attribution and related articles will be populated
              from the content management interface in a later phase.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              Placeholder copy ensures the layout, typography and navigation can
              be reviewed for client demonstration without inventing unverified
              organizational claims.
            </p>
            <Link
              to="/news"
              className="mt-10 inline-block text-[11px] uppercase tracking-[0.16em] text-brass hover:text-primary"
            >
              ← Back to News
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
