import { useMemo, useState } from "react";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import CountUp from "../../components/fx/CountUp";
import DemoBanner from "../../components/portal/DemoBanner";
import { auditLogs } from "../../data/portalDemo";

export default function AdminAudit() {
  const [outcome, setOutcome] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return auditLogs.filter((l) => {
      const matchOutcome = outcome === "All" || l.outcome === outcome;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        l.user.toLowerCase().includes(q) ||
        l.action.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q);
      return matchOutcome && matchQ;
    });
  }, [outcome, query]);

  const allowed = auditLogs.filter((l) => l.outcome === "Allowed").length;
  const denied = auditLogs.filter((l) => l.outcome === "Denied").length;

  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Audit rows are sample events. Financial dollar amounts are never logged." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Access trail
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Reporting & Audit
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Who accessed financial modules, when, and whether access was
              allowed — without storing rebate figures.
            </p>
          </div>
          <button type="button" className="btn btn--ghost btn--md shrink-0">
            Export log
          </button>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Events shown", value: String(filtered.length) },
          { label: "Allowed (sample)", value: String(allowed) },
          { label: "Denied (sample)", value: String(denied) },
        ].map((m, i) => (
          <Reveal key={m.label} delay={i * 40}>
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

      <div className="app-toolbar">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search user, company, or action…"
          className="app-field max-w-sm"
          aria-label="Search audit log"
        />
        <div className="app-tabs">
          {["All", "Allowed", "Denied"].map((o) => (
            <button
              key={o}
              type="button"
              className={`app-tab ${outcome === o ? "is-active" : ""}`}
              onClick={() => setOutcome(o)}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <Reveal>
        <div className="app-table-wrap relative">
          <CardFx />
          <div className="overflow-x-auto">
            <table className="app-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Company</th>
                  <th>Action</th>
                  <th>Outcome</th>
                  <th>Timestamp</th>
                  <th>IP</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((l) => (
                  <tr key={l.time + l.user + l.action}>
                    <td>{l.user}</td>
                    <td>{l.company}</td>
                    <td>{l.action}</td>
                    <td>
                      <span
                        className={`app-status ${
                          l.outcome === "Allowed"
                            ? "app-status--allowed"
                            : "app-status--denied"
                        }`}
                      >
                        {l.outcome}
                      </span>
                    </td>
                    <td>{l.time}</td>
                    <td>
                      <span className="app-kbd">{l.ip}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <p className="app-empty">No events match your filters.</p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
