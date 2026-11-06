import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import CountUp from "../../components/fx/CountUp";
import DemoBanner from "../../components/portal/DemoBanner";
import { certificates, courses } from "../../data/portalDemo";

export default function PortalLearning() {
  const inProgress = courses.filter((c) => c.status === "In Progress").length;

  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Course progress and certificates are sample UI — no playback connected." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Grow your team
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Learning Center
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Installation, sales, and merchandising paths tailored for Alliance
              dealer teams.
            </p>
          </div>
          <button type="button" className="btn btn--primary btn--md shrink-0">
            Browse Catalog
          </button>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Courses assigned", value: String(courses.length) },
          { label: "In progress", value: String(inProgress) },
          { label: "Certificates", value: String(certificates.length) },
        ].map((m, i) => (
          <Reveal key={m.label} delay={i * 50}>
            <div className="app-card app-card--padded app-card--metric">
              <CardFx />
              <p className="app-card__label">{m.label}</p>
              <p className="app-card__value">
                <CountUp value={m.value} />
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {courses.map((c, i) => (
            <Reveal key={c.title} delay={i * 50}>
              <article className="app-card app-card--panel">
                <CardFx />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`app-status ${
                          c.status === "Completed"
                            ? "app-status--active"
                            : "app-status--pending"
                        }`}
                      >
                        {c.status}
                      </span>
                      <span className="text-xs text-muted">
                        {c.completed}/{c.modules} modules · {c.duration}
                      </span>
                    </div>
                    <h2 className="mt-2 font-serif text-xl font-semibold text-charcoal">
                      {c.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted">
                      Instructor: {c.instructor}
                    </p>
                    <p className="mt-2 text-sm text-charcoal">
                      Next: <span className="text-muted">{c.next}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-2xl font-semibold text-primary">
                      {c.progress}%
                    </p>
                    <button type="button" className="btn btn--ghost btn--sm mt-3">
                      {c.progress === 100 ? "Review" : c.progress === 0 ? "Start" : "Continue"}
                    </button>
                  </div>
                </div>
                <div className="app-progress" aria-hidden>
                  <div
                    className="app-progress__bar"
                    style={{ width: `${c.progress}%` }}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="slide-right">
          <aside className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Certificates</h2>
            {certificates.length === 0 ? (
              <p className="app-empty">No certificates yet.</p>
            ) : (
              <ul className="mt-4">
                {certificates.map((cert) => (
                  <li key={cert.id} className="app-feed-item items-start">
                    <span className="app-feed-dot" aria-hidden />
                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        {cert.title}
                      </p>
                      <p className="mt-1 text-xs text-muted">
                        Earned {cert.earned} · ID {cert.id}
                      </p>
                      <button type="button" className="app-link-quiet mt-2">
                        Download PDF
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 rounded-xl border border-dashed border-brass/40 bg-[rgba(247,232,216,0.35)] p-4">
              <p className="text-sm font-medium text-charcoal">Recommended next</p>
              <p className="mt-1 text-xs text-muted">
                Tile & Stone Merchandising — unlock after Sales Excellence.
              </p>
              <button type="button" className="btn btn--ghost btn--sm mt-3">
                Add to plan
              </button>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
