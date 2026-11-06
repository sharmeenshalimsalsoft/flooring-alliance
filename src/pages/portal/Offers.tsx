import { useState } from "react";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import { offers } from "../../data/portalDemo";

export default function PortalOffers() {
  const categories = ["All", ...new Set(offers.map((o) => o.category))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? offers : offers.filter((o) => o.category === cat);
  const featured = offers.find((o) => o.featured);

  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Supplier promotions and savings figures are fictional for layout review." />

      <Reveal>
        <div className="app-hero-banner">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
            Member exclusives
          </p>
          <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
            Offers & Promotions
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">
            {offers.length} programs available to your membership tier — filter by
            category or open details for terms.
          </p>
        </div>
      </Reveal>

      {featured && (
        <Reveal delay={40}>
          <article className="app-card app-card--panel relative overflow-hidden">
            <CardFx aura />
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="app-chip">Featured</span>
                  <span className="app-status app-status--active">{featured.status}</span>
                </div>
                <p className="app-card__label mt-4">
                  {featured.category} · {featured.supplier}
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold text-charcoal md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{featured.dates}</p>
                <div className="app-meta-row">
                  <span>{featured.savings}</span>
                  <span>{featured.terms}</span>
                </div>
              </div>
              <button type="button" className="btn btn--gold btn--md shrink-0">
                Claim / View Terms
              </button>
            </div>
          </article>
        </Reveal>
      )}

      <div className="app-toolbar">
        <div className="app-tabs" role="tablist" aria-label="Offer categories">
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
        <span className="text-xs text-muted">{list.length} results</span>
      </div>

      <div className="space-y-4">
        {list.map((o, i) => (
          <Reveal key={o.title} delay={i * 50}>
            <article className="app-card app-card--panel flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <CardFx />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="app-card__label">
                    {o.category} · {o.supplier}
                  </p>
                  <span
                    className={`app-status ${
                      o.status === "Expiring soon"
                        ? "app-status--pending"
                        : "app-status--active"
                    }`}
                  >
                    {o.status}
                  </span>
                </div>
                <h2 className="mt-2 font-serif text-xl font-semibold text-charcoal md:text-2xl">
                  {o.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{o.dates}</p>
                <div className="app-meta-row">
                  <span>{o.savings}</span>
                  <span>{o.terms}</span>
                </div>
              </div>
              <div className="app-inline-actions shrink-0">
                <button type="button" className="btn btn--ghost btn--md">
                  Save
                </button>
                <button type="button" className="btn btn--primary btn--md">
                  View Details
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
