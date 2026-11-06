import { Link } from "react-router";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import CountUp from "../../components/fx/CountUp";
import DemoBanner from "../../components/portal/DemoBanner";
import {
  adminActivity,
  adminMetrics,
  adminQueue,
  scheduledContent,
} from "../../data/portalDemo";

export default function AdminOverview() {
  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Staff console with fictional ops metrics, queues, and activity." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Operations pulse · Friday demo
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Administration Overview
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Approvals, content schedule, moderation flags, and financial access
              events — one calm workspace for Alliance staff demos.
            </p>
          </div>
          <div className="app-inline-actions">
            <Link to="/admin/members" className="btn btn--primary btn--md">
              Review Applications
            </Link>
            <Link to="/admin/audit" className="btn btn--ghost btn--md">
              Audit Logs
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {adminMetrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 50}>
            <Link
              to={m.href}
              className="app-card app-card--padded app-card--metric block h-full"
            >
              <CardFx />
              <p className="app-card__label">{m.label}</p>
              <p className="app-card__value">
                <CountUp value={m.value} />
              </p>
              <p className="app-stat-delta">{m.delta}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Reveal variant="slide-left" className="xl:col-span-5">
          <section className="app-card app-card--panel h-full">
            <CardFx />
            <div className="flex items-center justify-between gap-3">
              <h2 className="app-card__title">Action queue</h2>
              <span className="app-chip">{adminQueue.length} items</span>
            </div>
            <ul className="mt-4">
              {adminQueue.map((item) => (
                <li key={item.title} className="app-feed-item items-start justify-between gap-3">
                  <div className="flex gap-3">
                    <span className="app-feed-dot" aria-hidden />
                    <div>
                      <p className="text-sm font-medium text-charcoal">{item.title}</p>
                      <p className="mt-1 text-xs text-muted">{item.meta}</p>
                      <Link to={item.href} className="app-link-quiet mt-2 inline-block">
                        Open
                      </Link>
                    </div>
                  </div>
                  <span className="app-status app-status--pending shrink-0">
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal className="xl:col-span-4">
          <section className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Staff activity</h2>
            <ul className="mt-4">
              {adminActivity.map((a) => (
                <li key={a.what + a.when} className="app-feed-item items-start">
                  <span className="app-avatar">
                    {a.who
                      .split(" ")
                      .map((p) => p[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm text-charcoal">
                      <span className="font-medium">{a.who}</span> {a.what}
                    </p>
                    <p className="mt-1 text-xs text-muted">{a.when}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal variant="slide-right" className="xl:col-span-3">
          <section className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Publish calendar</h2>
            <ul className="mt-4">
              {scheduledContent.map((s) => (
                <li key={s.title} className="app-feed-item">
                  <span className="app-feed-dot" aria-hidden />
                  <div>
                    <p className="text-sm font-medium text-charcoal">{s.title}</p>
                    <p className="mt-1 text-xs text-muted">
                      {s.type} · {s.when}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/admin/content" className="btn btn--ghost btn--md mt-5 w-full">
              Open CMS
            </Link>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
