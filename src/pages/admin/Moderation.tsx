import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import { moderationHistory, moderationQueue } from "../../data/portalDemo";

export default function AdminModeration() {
  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Reported posts and actions are sample data for the moderation demo." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Community health
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Community Moderation
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {moderationQueue.length} open reports · review, remove, or dismiss
              without leaving this queue.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="app-chip">{moderationQueue.length} open</span>
            <span className="app-chip app-chip--ghost">
              {moderationHistory.length} recent actions
            </span>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {moderationQueue.map((r, i) => (
            <Reveal key={r.id} delay={i * 60}>
              <article className="app-card app-card--panel">
                <CardFx />
                <div className="flex flex-wrap items-center gap-2">
                  <span className="app-status app-status--denied">{r.reason}</span>
                  <span className="app-chip">{r.group}</span>
                  <span className="text-xs text-muted">{r.id}</span>
                </div>
                <h2 className="mt-3 font-serif text-xl font-semibold text-charcoal">
                  Reported in {r.group}
                </h2>
                <p className="mt-2 rounded-xl bg-[rgba(247,232,216,0.4)] px-4 py-3 text-sm italic text-muted">
                  “{r.excerpt}”
                </p>
                <div className="app-meta-row">
                  <span>Author: {r.author}</span>
                  <span>Reporter: {r.reporter}</span>
                  <span>{r.when}</span>
                </div>
                <div className="app-inline-actions mt-5">
                  <button type="button" className="btn btn--ghost btn--md">
                    Dismiss
                  </button>
                  <button type="button" className="btn btn--ghost btn--md">
                    Warn author
                  </button>
                  <button type="button" className="btn btn--primary btn--md">
                    Remove post
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal variant="slide-right">
          <aside className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Recent history</h2>
            <ul className="mt-4">
              {moderationHistory.map((h) => (
                <li key={h.id} className="app-feed-item items-start">
                  <span className="app-feed-dot" aria-hidden />
                  <div>
                    <p className="text-sm text-charcoal">
                      <span className="font-medium">{h.id}</span> · {h.action}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {h.by} · {h.when}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" className="btn btn--ghost btn--md mt-5 w-full">
              Export moderation log
            </button>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
