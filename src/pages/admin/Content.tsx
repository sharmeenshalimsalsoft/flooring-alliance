import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import { contentAreas, scheduledContent } from "../../data/portalDemo";

export default function AdminContent() {
  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="CMS areas are shells — create/edit workflows are not connected." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              CMS workspace
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Content Management
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {contentAreas.reduce((n, a) => n + a.items, 0)} total items across{" "}
              {contentAreas.length} content areas · {scheduledContent.length}{" "}
              scheduled publishes
            </p>
          </div>
          <button type="button" className="btn btn--primary btn--md shrink-0">
            New draft
          </button>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contentAreas.map((a, i) => (
          <Reveal key={a.name} delay={i * 40}>
            <div className="app-card app-card--padded flex h-full flex-col">
              <CardFx />
              <p className="app-card__label">
                Area {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-serif text-xl font-semibold text-charcoal">
                {a.name}
              </h2>
              <div className="app-meta-row">
                <span>{a.items} items</span>
                <span>Updated {a.updated}</span>
              </div>
              <p className="mt-3">
                <span
                  className={`app-status ${
                    a.status.includes("Draft") || a.status.includes("draft")
                      ? "app-status--pending"
                      : "app-status--active"
                  }`}
                >
                  {a.status}
                </span>
              </p>
              <div className="app-inline-actions mt-auto pt-5">
                <button type="button" className="btn btn--ghost btn--sm">
                  Open
                </button>
                <button type="button" className="btn btn--ghost btn--sm">
                  History
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <section className="app-card app-card--panel">
          <CardFx />
          <div className="flex items-center justify-between gap-3">
            <h2 className="app-card__title">Scheduled publishes</h2>
            <span className="app-chip">Calendar</span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="app-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Goes live</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {scheduledContent.map((s) => (
                  <tr key={s.title}>
                    <td>{s.title}</td>
                    <td>{s.type}</td>
                    <td>{s.when}</td>
                    <td>
                      <div className="app-inline-actions">
                        <button type="button" className="app-link-quiet">
                          Edit
                        </button>
                        <button type="button" className="app-link-quiet">
                          Unschedule
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
