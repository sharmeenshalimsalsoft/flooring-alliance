import { useRef, useState } from "react";

export type MarketCard = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  markets: MarketCard[];
};

/** Horizontal snap deck with active market detail — unique from home grids. */
export default function MarketDeck({ markets }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    setActive(i);
    const el = scroller.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="market-deck">
      <div className="market-deck__meta">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Market {String(active + 1).padStart(2, "0")} /{" "}
          {String(markets.length).padStart(2, "0")}
        </p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
          {markets[active]?.title}
        </h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted">
          {markets[active]?.description}
        </p>
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            className="market-deck__nav"
            aria-label="Previous market"
            onClick={() => scrollTo((active - 1 + markets.length) % markets.length)}
          >
            ←
          </button>
          <button
            type="button"
            className="market-deck__nav"
            aria-label="Next market"
            onClick={() => scrollTo((active + 1) % markets.length)}
          >
            →
          </button>
        </div>
      </div>

      <div className="market-deck__track" ref={scroller}>
        {markets.map((m, i) => (
          <button
            key={m.title}
            type="button"
            className={`market-deck__card ${i === active ? "is-active" : ""}`}
            onClick={() => scrollTo(i)}
          >
            <img src={m.image} alt="" className="h-full w-full object-cover" />
            <span className="market-deck__caption">{m.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
