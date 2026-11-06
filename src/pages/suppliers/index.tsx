import { useMemo, useState } from "react";
import { Link } from "react-router";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import SpotlightGrid from "../../components/fx/SpotlightGrid";
import { supplierCategories, suppliers } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function SuppliersPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return suppliers.filter((s) => {
      const catOk = category === "All" || s.category === category;
      const qOk =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [query, category]);

  return (
    <>
      <PageHero
        variant="gallery"
        eyebrow="Suppliers"
        title="Supplier Directory"
        subtitle="Search and filter the sample directory — cards react to your cursor with a soft material spotlight."
        image={images.supplier}
        gallery={[images.woodSamples, images.customStone, images.tileBrowse]}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md flex-1">
              <label htmlFor="supplier-search" className="sr-only">
                Search suppliers
              </label>
              <input
                id="supplier-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search suppliers…"
                className="w-full border border-stone bg-white px-4 py-3 text-sm outline-none transition-shadow focus:border-brass focus:shadow-[0_0_0_3px_rgba(212,176,140,0.28)]"
              />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Categories">
              {supplierCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-2 text-[10px] uppercase tracking-[0.14em] transition-all duration-300 ${
                    cat === category
                      ? "bg-primary text-ivory shadow-sm"
                      : "border border-stone text-muted hover:-translate-y-0.5 hover:border-brass hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <SpotlightGrid>
            <div className="content-grid grid sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s, i) => (
                <Reveal key={s.id} delay={i * 60} className="h-full">
                  <Link
                    to={`/suppliers/${s.slug}`}
                    className="surface-card surface-card--padded group block h-full"
                  >
                    <CardFx />
                    <div className="flex h-14 w-14 items-center justify-center bg-cream font-serif text-lg text-walnut transition-all duration-300 group-hover:scale-105 group-hover:bg-brass group-hover:text-white">
                      {s.initials}
                    </div>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-brass">
                      {s.category}
                    </p>
                    <h2 className="mt-1 font-serif text-xl font-semibold text-charcoal">
                      {s.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </SpotlightGrid>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-sm text-muted">
              No sample suppliers match your filters.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
