import { useMemo, useState } from "react";
import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import { locations } from "../../data/content";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

export default function LocationsPage() {
  const [stateFilter, setStateFilter] = useState("");
  const [zipFilter, setZipFilter] = useState("");

  const filtered = useMemo(() => {
    return locations.filter((loc) => {
      const stateOk =
        !stateFilter ||
        loc.state.toLowerCase().includes(stateFilter.toLowerCase());
      const zipOk = !zipFilter || loc.zip.includes(zipFilter);
      return stateOk && zipOk;
    });
  }, [stateFilter, zipFilter]);

  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Find Members Near You"
        subtitle="Sample location records for demonstration. Interactive map markers will use verified data in a future release."
        image={images.mainStreet}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <form
            className="mb-10 grid gap-4 sm:grid-cols-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="state"
                className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted"
              >
                Search by State
              </label>
              <input
                id="state"
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                placeholder="e.g. TX"
                className="w-full border border-stone bg-white px-4 py-3 text-sm outline-none focus:border-brass"
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted"
              >
                Search by ZIP
              </label>
              <input
                id="zip"
                value={zipFilter}
                onChange={(e) => setZipFilter(e.target.value)}
                placeholder="e.g. 75201"
                className="w-full border border-stone bg-white px-4 py-3 text-sm outline-none focus:border-brass"
              />
            </div>
            <div className="flex items-end">
              <button
                type="button"
                onClick={() => {
                  setStateFilter("");
                  setZipFilter("");
                }}
                className="w-full border border-stone px-4 py-3 text-xs uppercase tracking-[0.14em] text-muted hover:border-brass hover:text-brass"
              >
                Clear Filters
              </button>
            </div>
          </form>

          <div className="split-panel !items-start">
            <div
              className="surface-card flex min-h-[320px] items-center justify-center p-8"
              role="img"
              aria-label="Map placeholder for United States member locations"
            >
                <CardFx />
              <div className="text-center">
                <p className="font-serif text-2xl text-walnut">
                  Interactive Map Preview
                </p>
                <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
                  A full interactive U.S. map with member markers will be added
                  when verified location data is available. Filtering below uses
                  sample records only.
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {filtered.length === 0 && (
                <li className="py-8 text-sm text-muted">
                  No sample locations match your filters.
                </li>
              )}
              {filtered.map((loc) => (
                <li
                  key={loc.id}
                  className="surface-card surface-card--padded flex justify-between gap-4"
                >
                <CardFx />
                  <div>
                    <p className="font-medium text-charcoal">{loc.company}</p>
                    <p className="mt-1 text-sm text-muted">
                      {loc.city}, {loc.state} {loc.zip}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-brass">
                    {loc.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
