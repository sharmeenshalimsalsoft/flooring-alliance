import { useMemo, useState } from "react";
import { flooringOptions } from "../../data/flooringOptions";
import { images } from "../../data/images";
import SectionStage from "../fx/SectionStage";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

type Sample = {
  id: string;
  name: string;
  note: string;
  swatch: string;
  scene: string;
};

type Family = {
  id: string;
  label: string;
  blurb: string;
  samples: Sample[];
};

const families: Family[] = [
  {
    id: "hardwood",
    label: "Hardwood",
    blurb: "Warm grain underfoot — tap a finish to stage the room.",
    samples: flooringOptions.map((o) => ({
      id: o.id,
      name: o.name,
      note: "Solid & engineered looks",
      swatch: o.swatch,
      scene: o.scene,
    })),
  },
  {
    id: "tile",
    label: "Stone & Tile",
    blurb: "Cool surfaces with architectural clarity.",
    samples: [
      {
        id: "porcelain",
        name: "Porcelain Field",
        note: "Commercial & residential",
        swatch: images.customStone,
        scene: images.tileBrowse,
      },
      {
        id: "stone",
        name: "Natural Stone",
        note: "Lobby & feature floors",
        swatch: images.stone,
        scene: images.customLobby,
      },
      {
        id: "bath",
        name: "Kitchen & Bath",
        note: "Wet-area ready looks",
        swatch: images.kitchenBath,
        scene: images.kitchen,
      },
    ],
  },
  {
    id: "soft",
    label: "Soft Surface",
    blurb: "Carpet and resilient options for comfort zones.",
    samples: [
      {
        id: "carpet",
        name: "Carpet Collection",
        note: "Residential comfort",
        swatch: images.carpet,
        scene: images.residential,
      },
      {
        id: "resilient",
        name: "Resilient / LVT",
        note: "Durable everyday floors",
        swatch: images.woodSamples,
        scene: images.remodel,
      },
      {
        id: "samples",
        name: "Showroom Samples",
        note: "Board & binder ready",
        swatch: images.supplier,
        scene: images.designCenter,
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial",
    blurb: "Performance floors for workplaces and hospitality.",
    samples: [
      {
        id: "office",
        name: "Workplace",
        note: "Offices & campuses",
        swatch: images.office,
        scene: images.commercialFlooring,
      },
      {
        id: "hospitality",
        name: "Hospitality",
        note: "Hotels & lobbies",
        swatch: images.hospitality,
        scene: images.customLobby,
      },
      {
        id: "retail",
        name: "Retail",
        note: "Store & showroom traffic",
        swatch: images.retail,
        scene: images.mainStreet,
      },
    ],
  },
];

export default function FloorSampleStudio() {
  const [familyId, setFamilyId] = useState(families[0].id);
  const family = useMemo(
    () => families.find((f) => f.id === familyId) ?? families[0],
    [familyId],
  );
  const [sampleId, setSampleId] = useState(family.samples[0].id);
  const sample =
    family.samples.find((s) => s.id === sampleId) ?? family.samples[0];

  const selectFamily = (id: string) => {
    const next = families.find((f) => f.id === id) ?? families[0];
    setFamilyId(id);
    setSampleId(next.samples[0].id);
  };

  return (
    <SectionStage mood="atelier">
      <Container>
        <SectionHeading
          eyebrow="Material Studio"
          title="Touch the Floors. Stage the Room."
          description="A showroom-style sampler — different from the hero carousel. Pick a surface family, then a finish, and watch the staged room respond."
        />

        <Reveal className="floor-studio mt-14">
          <div className="floor-studio__families" role="tablist" aria-label="Flooring families">
            {families.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={f.id === familyId}
                className={`floor-studio__family ${f.id === familyId ? "is-active" : ""}`}
                onClick={() => selectFamily(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="floor-studio__stage">
            <div className="floor-studio__scene" key={sample.scene}>
              <img src={sample.scene} alt="" className="floor-studio__scene-img" />
              <div className="floor-studio__scene-veil" aria-hidden />
              <div className="floor-studio__scene-meta">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brass-soft">
                  {family.label}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-semibold text-ivory md:text-3xl">
                  {sample.name}
                </h3>
                <p className="mt-1 text-sm text-stone/90">{sample.note}</p>
              </div>
            </div>

            <div className="floor-studio__drawer">
              <p className="mb-4 text-sm leading-relaxed text-muted">{family.blurb}</p>
              <div className="floor-studio__swatches" role="list">
                {family.samples.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    role="listitem"
                    className={`floor-studio__swatch ${s.id === sample.id ? "is-active" : ""}`}
                    style={{ animationDelay: `${i * 60}ms` }}
                    onClick={() => setSampleId(s.id)}
                    aria-label={`Preview ${s.name}`}
                  >
                    <span className="floor-studio__swatch-media">
                      <img src={s.swatch} alt="" />
                    </span>
                    <span className="floor-studio__swatch-name">{s.name}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/markets" variant="secondary" size="md">
                  Explore Markets
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionStage>
  );
}
