import { useRef } from "react";
import type { MouseEvent } from "react";
import { flooringOptions } from "../../data/flooringOptions";

/** Full-bleed interactive plank ribbon — mouse light sweeps across real swatches. */
export default function PlankPulseBand() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    el.style.setProperty("--pulse-x", `${x}%`);
  };

  return (
    <div
      ref={ref}
      className="plank-pulse"
      onMouseMove={onMove}
      aria-hidden
    >
      <div className="plank-pulse__glow" />
      <div className="plank-pulse__row">
        {[...flooringOptions, ...flooringOptions].map((opt, i) => (
          <div key={`${opt.id}-${i}`} className="plank-pulse__board">
            <img src={opt.swatch} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
