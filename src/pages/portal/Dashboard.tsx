import { Link } from "react-router";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import CountUp from "../../components/fx/CountUp";
import DemoBanner from "../../components/portal/DemoBanner";
import {
  announcements,
  demoMember,
  portalMetrics,
  teamMembers,
  upcoming,
} from "../../data/portalDemo";

const actions = [
  { label: "Community", href: "/portal/community" },
  { label: "Offers", href: "/portal/offers" },
  { label: "Documents", href: "/portal/documents" },
  { label: "Learning", href: "/portal/learning" },
  { label: "Financial", href: "/portal/financial" },
  { label: "Public Site", href: "/" },
];

export default function PortalDashboard() {
  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Personalized member home with sample company, tasks, and announcements." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Welcome back, {demoMember.name.split(" ")[0]}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Member Dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {demoMember.company} · {demoMember.role} · Account {demoMember.accountId}
            </p>
            <div className="app-meta-row">
              <span>Region: {demoMember.region}</span>
              <span>Member since {demoMember.memberSince}</span>
              <span>AM: {demoMember.accountManager}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/portal/offers" className="btn btn--ghost btn--md">
              Browse Offers
            </Link>
            <Link to="/portal/financial" className="btn btn--gold btn--md">
              Financial Center
            </Link>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {portalMetrics.map((c, i) => (
          <Reveal key={c.title} delay={i * 60}>
            <Link
              to={c.href}
              className="app-card app-card--padded app-card--metric block h-full"
            >
              <CardFx />
              <p className="app-card__label">{c.title}</p>
              <p className="app-card__value">
                {/\d/.test(c.value) ? <CountUp value={c.value} /> : c.value}
              </p>
              <p className="app-card__meta">{c.meta}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Reveal variant="slide-left" className="xl:col-span-5">
          <section className="app-card app-card--panel h-full">
            <CardFx />
            <div className="flex items-center justify-between gap-3">
              <h2 className="app-card__title">Company profile</h2>
              <span className="app-status app-status--active">Active</span>
            </div>
            <dl className="app-detail-grid mt-5">
              <div>
                <dt>Membership</dt>
                <dd>{demoMember.membership}</dd>
              </div>
              <div>
                <dt>Company type</dt>
                <dd>{demoMember.companyType}</dd>
              </div>
              <div>
                <dt>Renewal</dt>
                <dd>{demoMember.renewal}</dd>
              </div>
              <div>
                <dt>Team seats</dt>
                <dd>{demoMember.teamSize} users</dd>
              </div>
            </dl>
            <div className="mt-6 border-t border-stone/80 pt-5">
              <p className="app-card__label">Team on this account</p>
              <ul className="mt-3 space-y-3">
                {teamMembers.map((m) => (
                  <li key={m.name} className="flex items-center gap-3">
                    <span className="app-avatar">
                      {m.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-charcoal">{m.name}</p>
                      <p className="text-xs text-muted">
                        {m.role} · {m.access}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Reveal>

        <Reveal className="xl:col-span-4">
          <section className="app-card app-card--panel h-full">
            <CardFx />
            <div className="flex items-center justify-between gap-3">
              <h2 className="app-card__title">Announcements</h2>
              <span className="app-chip">{announcements.length} new</span>
            </div>
            <ul className="mt-4">
              {announcements.map((a) => (
                <li key={a.title} className="app-feed-item items-start">
                  <span className="app-feed-dot" aria-hidden />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="app-status app-status--pending">{a.tag}</span>
                      <span className="text-xs text-muted">{a.date}</span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-charcoal">{a.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{a.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal variant="slide-right" className="xl:col-span-3">
          <div className="flex h-full flex-col gap-5">
            <section className="app-card app-card--panel">
              <CardFx />
              <h2 className="app-card__title">Coming up</h2>
              <ul className="mt-4">
                {upcoming.map((u) => (
                  <li key={u.label} className="app-feed-item justify-between gap-3">
                    <div>
                      <p className="text-sm text-charcoal">{u.label}</p>
                      <p className="mt-0.5 text-xs text-muted">{u.type}</p>
                    </div>
                    <span className="app-chip shrink-0">{u.when}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="app-card app-card--panel flex-1">
              <CardFx />
              <h2 className="app-card__title">Quick actions</h2>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {actions.map((a) => (
                  <Link key={a.href} to={a.href} className="app-action">
                    {a.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
