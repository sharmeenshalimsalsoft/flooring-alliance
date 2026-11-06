import { useMemo, useState } from "react";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import { documents, newsItems } from "../../data/portalDemo";

export default function PortalDocuments() {
  const categories = ["All", ...new Set(documents.map((d) => d.category))];
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    return documents.filter((d) => {
      const matchCat = cat === "All" || d.category === cat;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        d.title.toLowerCase().includes(q) ||
        d.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [cat, query]);

  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Search and downloads are visual only — files are not served." />

      <Reveal>
        <div className="app-hero-banner">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Resource library
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
            News & Documents
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            Handbooks, supplier summaries, brand assets, and member news in one
            place.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-2" variant="slide-left">
          <section className="app-card app-card--panel">
            <CardFx />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="app-card__title">Document library</h2>
              <span className="app-chip">{list.length} files</span>
            </div>

            <div className="app-toolbar mt-4">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documents…"
                className="app-field max-w-sm"
                aria-label="Search documents"
              />
              <div className="app-tabs" role="tablist">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`app-tab ${cat === c ? "is-active" : ""}`}
                    onClick={() => setCat(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <ul className="mt-4">
              {list.map((d) => (
                <li
                  key={d.title}
                  className="app-feed-item items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <p className="font-medium text-charcoal">{d.title}</p>
                    <div className="app-meta-row">
                      <span>
                        {d.category} · {d.type}
                      </span>
                      <span>{d.size}</span>
                      <span>Updated {d.updated}</span>
                      <span>{d.downloads} downloads</span>
                    </div>
                  </div>
                  <button type="button" className="btn btn--ghost btn--sm shrink-0">
                    Download
                  </button>
                </li>
              ))}
              {list.length === 0 && (
                <li className="app-empty list-none">No documents match your filters.</li>
              )}
            </ul>
          </section>
        </Reveal>

        <Reveal variant="slide-right">
          <aside className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Latest news</h2>
            <ul className="mt-4">
              {newsItems.map((n) => (
                <li key={n.title} className="app-feed-item items-start">
                  <span className="app-feed-dot" aria-hidden />
                  <div>
                    <span className="app-status app-status--pending">{n.category}</span>
                    <p className="mt-2 text-sm font-medium text-charcoal">{n.title}</p>
                    <p className="mt-1 text-xs text-muted">{n.date}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn--ghost btn--md mt-5 w-full">
              View all news
            </button>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
