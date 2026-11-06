import { useState, type CSSProperties } from "react";

export type ValueItem = {
  title: string;
  text: string;
};

type Props = {
  values: ValueItem[];
};

/** Mission values as an interactive orbit selector. */
export default function ValueOrbit({ values }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="value-orbit">
      <div className="value-orbit__ring">
        {values.map((v, i) => {
          const angle = (360 / values.length) * i - 90;
          return (
            <button
              key={v.title}
              type="button"
              className={`value-orbit__node ${i === active ? "is-active" : ""}`}
              style={{ "--angle": `${angle}deg` } as CSSProperties}
              onClick={() => setActive(i)}
              aria-label={v.title}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          );
        })}
        <div className="value-orbit__core">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            Value
          </p>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-charcoal">
            {values[active]?.title}
          </h3>
        </div>
      </div>
      <p className="value-orbit__text" key={values[active]?.title}>
        {values[active]?.text}
      </p>
    </div>
  );
}
