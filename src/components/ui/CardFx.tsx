/** Luxury sheen + optional stat aura — first child inside any `.surface-card`. */
export default function CardFx({ aura = false }: { aura?: boolean }) {
  return (
    <>
      <span className="card-shine" aria-hidden />
      {aura ? <span className="stat-aura" aria-hidden /> : null}
    </>
  );
}
