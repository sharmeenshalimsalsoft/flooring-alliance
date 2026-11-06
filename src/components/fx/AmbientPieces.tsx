import type { CSSProperties } from "react";

export type AmbientVariant =
  | "planks"
  | "herringbone"
  | "swatches"
  | "blueprint"
  | "grain"
  | "showroom-light"
  | "sawdust"
  | "tile-grid"
  | "tree-rings";

type Props = {
  variant: AmbientVariant;
  className?: string;
};

export default function AmbientPieces({ variant, className = "" }: Props) {
  return (
    <div
      className={`ambient ambient--${variant} pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {variant === "planks" && (
        <div className="ambient__planks">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              style={{ animationDelay: `${i * 0.55}s` } as CSSProperties}
            />
          ))}
        </div>
      )}

      {variant === "herringbone" && <span className="ambient__herringbone" />}

      {variant === "swatches" &&
        Array.from({ length: 7 }).map((_, i) => (
          <span
            key={i}
            className={`ambient__swatch ambient__swatch--${i % 5}`}
            style={
              {
                left: `${10 + ((i * 13) % 75)}%`,
                top: `${15 + ((i * 19) % 60)}%`,
                animationDelay: `${i * 0.7}s`,
              } as CSSProperties
            }
          />
        ))}

      {variant === "blueprint" && (
        <>
          <span className="ambient__blueprint" />
          <span className="ambient__blueprint-cross ambient__blueprint-cross--h" />
          <span className="ambient__blueprint-cross ambient__blueprint-cross--v" />
        </>
      )}

      {variant === "grain" && <span className="ambient__woodgrain" />}

      {variant === "showroom-light" && (
        <>
          <span className="ambient__skylight ambient__skylight--a" />
          <span className="ambient__skylight ambient__skylight--b" />
        </>
      )}

      {variant === "sawdust" &&
        Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="ambient__mote"
            style={
              {
                left: `${(i * 17) % 100}%`,
                animationDelay: `${(i % 8) * 0.5}s`,
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
              } as CSSProperties
            }
          />
        ))}

      {variant === "tile-grid" && <span className="ambient__tile-grid" />}

      {variant === "tree-rings" && (
        <div className="ambient__tree-rings">
          <span />
          <span />
          <span />
          <span />
        </div>
      )}

      <span className="ambient__grain" />
    </div>
  );
}
