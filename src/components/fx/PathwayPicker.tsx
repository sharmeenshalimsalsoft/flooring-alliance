import { useState } from "react";
import { Link } from "react-router";
import Button from "../ui/Button";

export type Pathway = {
  id: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
};

type Props = {
  pathways: Pathway[];
};

/** Membership-style interactive pathway selector with live preview. */
export default function PathwayPicker({ pathways }: Props) {
  const [active, setActive] = useState(0);
  const current = pathways[active];

  return (
    <div className="pathway-picker">
      <div className="pathway-picker__list" role="list">
        {pathways.map((p, i) => (
          <button
            key={p.id}
            type="button"
            role="listitem"
            className={`pathway-picker__item ${i === active ? "is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="pathway-picker__num">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pathway-picker__title">{p.title}</span>
            <span className="pathway-picker__hint" aria-hidden>
              →
            </span>
          </button>
        ))}
      </div>

      <div className="pathway-picker__preview" key={current.id}>
        <div className="pathway-picker__image">
          <img src={current.image} alt="" className="h-full w-full object-cover" />
          <div className="pathway-picker__veil" aria-hidden />
        </div>
        <div className="pathway-picker__body">
          <h2 className="font-serif text-2xl font-semibold text-charcoal md:text-3xl">
            {current.title}
          </h2>
          <p className="mt-3 leading-relaxed text-muted">{current.description}</p>
          <div className="mt-6">
            <Button href={current.href} variant="primary">
              {current.cta}
            </Button>
          </div>
          <Link
            to="/membership/benefits"
            className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-primary"
          >
            Compare all benefits →
          </Link>
        </div>
      </div>
    </div>
  );
}
