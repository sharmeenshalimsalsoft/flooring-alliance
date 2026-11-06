import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import {
  demoMember,
  financialSummary,
  purchasingReports,
  rebateStatements,
} from "../../data/portalDemo";

export default function PortalFinancial() {
  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Financial figures are fictional. No live Salesforce data is loaded." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Secure workspace
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Financial Center
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Rebates, purchasing reports, and account details for{" "}
              {demoMember.company}. MFA-gated in the full product.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="app-chip">MFA verified</span>
            <span className="app-chip app-chip--ghost">Company isolated</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={30}>
        <div className="app-notice">
          UI shell only — authorization, MFA enforcement, audit logging, and
          company isolation ship in the backend phase. Dollar amounts below are
          sample placeholders.
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {financialSummary.map((m, i) => (
          <Reveal key={m.label} delay={i * 50}>
            <div className="app-card app-card--padded app-card--metric">
              <CardFx />
              <p className="app-card__label">{m.label}</p>
              <p className="app-card__value">{m.value}</p>
              <p className="app-card__meta">{m.meta}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal variant="slide-left" className="lg:col-span-2">
          <section className="app-table-wrap relative">
            <CardFx />
            <div className="flex items-center justify-between gap-3 border-b border-stone/70 px-5 py-4 md:px-6">
              <h2 className="app-card__title">Rebate statements</h2>
              <button type="button" className="btn btn--ghost btn--sm">
                Export CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="app-table">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Supplier</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rebateStatements.map((r) => (
                    <tr key={r.period + r.supplier}>
                      <td>{r.period}</td>
                      <td>{r.supplier}</td>
                      <td className="font-medium text-charcoal">{r.amount}</td>
                      <td>
                        <span
                          className={`app-status ${
                            r.status === "Available"
                              ? "app-status--active"
                              : "app-status--pending"
                          }`}
                        >
                          {r.status}
                        </span>
                      </td>
                      <td>
                        <button type="button" className="app-link-quiet">
                          Open
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </Reveal>

        <Reveal variant="slide-right">
          <section className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Account information</h2>
            <dl className="app-detail-grid mt-5">
              <div>
                <dt>Company</dt>
                <dd>{demoMember.company}</dd>
              </div>
              <div>
                <dt>Account ID</dt>
                <dd>{demoMember.accountId}</dd>
              </div>
              <div>
                <dt>Account manager</dt>
                <dd>{demoMember.accountManager}</dd>
              </div>
              <div>
                <dt>Access role</dt>
                <dd>Full + Financial</dd>
              </div>
            </dl>
            <button type="button" className="btn btn--ghost btn--md mt-6 w-full">
              Request access change
            </button>
          </section>
        </Reveal>
      </div>

      <Reveal>
        <section className="app-card app-card--panel">
          <CardFx />
          <div className="flex items-center justify-between gap-3">
            <h2 className="app-card__title">Purchasing reports</h2>
            <span className="app-chip">Sample</span>
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {purchasingReports.map((r) => (
              <li
                key={r.title}
                className="rounded-xl border border-stone/80 bg-[rgba(255,253,251,0.7)] p-4 transition hover:border-brass/50"
              >
                <p className="font-medium text-charcoal">{r.title}</p>
                <p className="mt-1 text-xs text-muted">{r.detail}</p>
                <p className="mt-3 text-xs text-muted">Updated {r.updated}</p>
                <button type="button" className="app-link-quiet mt-3">
                  Open report
                </button>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  );
}
