import { useMemo, useState } from "react";
import { locations } from "../../data/content";
import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import CardFx from "../ui/CardFx";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const states = [
  "WA", "OR", "CA", "NV", "AZ", "UT", "CO", "NM",
  "TX", "OK", "KS", "NE", "SD", "ND", "MN", "IA",
  "MO", "AR", "LA", "MS", "AL", "GA", "FL", "SC",
  "NC", "TN", "KY", "VA", "WV", "OH", "IN", "IL",
  "WI", "MI", "PA", "NY", "VT", "NH", "ME", "MA",
  "RI", "CT", "NJ", "DE", "MD", "DC",
];

export default function LocationsPreview() {
  const covered = useMemo(
    () => new Set(locations.map((l) => l.state)),
    [],
  );
  const [selected, setSelected] = useState<string | null>(
    locations[0]?.state ?? null,
  );

  const matches = locations.filter((l) =>
    selected ? l.state === selected : true,
  );

  return (
    <SectionStage mood="cartography">
      <Container>
        <SectionHeading
          eyebrow="Locations"
          title="A Nationwide Network. Closer Than You Think."
          description="Tap a highlighted state to filter sample members — an interactive coverage preview before the full map arrives."
        />
        <div className="split-panel mt-14 !items-start">
          <Reveal variant="slide-left">
            <div className="surface-card surface-card--padded">
              <CardFx />
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                  Coverage Preview
                </p>
                {selected && (
                  <button
                    type="button"
                    className="text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
                    onClick={() => setSelected(null)}
                  >
                    Clear · {selected}
                  </button>
                )}
              </div>
              <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-10">
                {states.map((st) => {
                  const hasMembers = covered.has(st);
                  const isSelected = selected === st;
                  return (
                    <button
                      key={st}
                      type="button"
                      disabled={!hasMembers}
                      title={st}
                      onClick={() => hasMembers && setSelected(st)}
                      className={`loc-cell flex aspect-square items-center justify-center text-[9px] font-medium ${
                        isSelected
                          ? "loc-cell--selected"
                          : hasMembers
                            ? "loc-cell--hot"
                            : "loc-cell--dim"
                      }`}
                    >
                      {st}
                    </button>
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-muted">
                Highlighted states include sample member locations. Click to filter.
              </p>
            </div>
          </Reveal>
          <Reveal variant="slide-right">
            <div className="flex h-full flex-col">
              <ul className="space-y-3">
                {matches.slice(0, 4).map((loc) => (
                  <li
                    key={loc.id}
                    className={`surface-card surface-card--padded flex items-start justify-between gap-4 transition-all duration-300 ${
                      selected === loc.state ? "ring-1 ring-brass/50" : ""
                    }`}
                  >
                    <CardFx />
                    <div className="min-w-0">
                      <p className="card-title text-[1.05rem]">{loc.company}</p>
                      <p className="card-copy mt-1.5 !text-[0.88rem]">
                        {loc.city}, {loc.state} {loc.zip}
                      </p>
                    </div>
                    <span className="card-meta shrink-0 pt-1">{loc.type}</span>
                  </li>
                ))}
                {matches.length === 0 && (
                  <li className="py-6 text-sm text-muted">
                    No sample members in this state yet.
                  </li>
                )}
              </ul>
              <div className="mt-8">
                <Button href="/locations" variant="secondary">
                  Explore Member Locations
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionStage>
  );
}
