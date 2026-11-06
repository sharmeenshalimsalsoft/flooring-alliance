import { useState } from "react";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import {
  applications,
  invitations,
  memberCompanies,
} from "../../data/portalDemo";

type Tab = "companies" | "applications" | "invitations";

export default function AdminMembers() {
  const [tab, setTab] = useState<Tab>("companies");
  const [status, setStatus] = useState("All");
  const statuses = ["All", "Active", "Pending", "Invited"];

  const companies =
    status === "All"
      ? memberCompanies
      : memberCompanies.filter((m) => m.status === status);

  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Approvals, invitations, and role changes are not wired — buttons are demo UI." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Companies & access
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Member Management
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              {memberCompanies.length} companies · {applications.length} applications
              · {invitations.length} open invitations
            </p>
          </div>
          <div className="app-inline-actions">
            <button type="button" className="btn btn--ghost btn--md">
              Export roster
            </button>
            <button type="button" className="btn btn--primary btn--md">
              Invite Member
            </button>
          </div>
        </div>
      </Reveal>

      <div className="app-toolbar">
        <div className="app-tabs" role="tablist">
          {(
            [
              ["companies", "Companies"],
              ["applications", "Applications"],
              ["invitations", "Invitations"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`app-tab ${tab === id ? "is-active" : ""}`}
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>
        {tab === "companies" && (
          <div className="app-tabs">
            {statuses.map((s) => (
              <button
                key={s}
                type="button"
                className={`app-tab ${status === s ? "is-active" : ""}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {tab === "companies" && (
        <Reveal>
          <div className="app-table-wrap relative">
            <CardFx />
            <div className="overflow-x-auto">
              <table className="app-table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Type</th>
                    <th>Region</th>
                    <th>Status</th>
                    <th>Users</th>
                    <th>Joined</th>
                    <th>Last active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((m) => (
                    <tr key={m.company}>
                      <td>{m.company}</td>
                      <td>{m.type}</td>
                      <td>{m.region}</td>
                      <td>
                        <span
                          className={`app-status ${
                            m.status === "Active"
                              ? "app-status--active"
                              : "app-status--pending"
                          }`}
                        >
                          {m.status}
                        </span>
                      </td>
                      <td>{m.users}</td>
                      <td>{m.joined}</td>
                      <td>{m.lastActive}</td>
                      <td>
                        <div className="app-inline-actions">
                          <button type="button" className="app-link-quiet">
                            Manage
                          </button>
                          <button type="button" className="app-link-quiet">
                            Users
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      )}

      {tab === "applications" && (
        <div className="space-y-4">
          {applications.map((a, i) => (
            <Reveal key={a.company} delay={i * 50}>
              <article className="app-card app-card--panel flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <CardFx />
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="app-status app-status--pending">Pending review</span>
                    <span className="app-chip">{a.type}</span>
                  </div>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-charcoal">
                    {a.company}
                  </h2>
                  <div className="app-meta-row">
                    <span>Contact: {a.contact}</span>
                    <span>Submitted {a.submitted}</span>
                    <span>{a.notes}</span>
                  </div>
                </div>
                <div className="app-inline-actions shrink-0">
                  <button type="button" className="btn btn--ghost btn--md">
                    Decline
                  </button>
                  <button type="button" className="btn btn--primary btn--md">
                    Approve
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      {tab === "invitations" && (
        <Reveal>
          <div className="app-table-wrap relative">
            <CardFx />
            <div className="overflow-x-auto">
              <table className="app-table">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Sent</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invitations.map((inv) => (
                    <tr key={inv.email}>
                      <td>{inv.email}</td>
                      <td>{inv.company}</td>
                      <td>{inv.sent}</td>
                      <td>
                        <span
                          className={`app-status ${
                            inv.status === "Expiring"
                              ? "app-status--denied"
                              : "app-status--pending"
                          }`}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td>
                        <div className="app-inline-actions">
                          <button type="button" className="app-link-quiet">
                            Resend
                          </button>
                          <button type="button" className="app-link-quiet">
                            Revoke
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}
