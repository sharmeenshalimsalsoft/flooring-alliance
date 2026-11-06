import { useState } from "react";
import Reveal from "../../components/ui/Reveal";
import CardFx from "../../components/ui/CardFx";
import DemoBanner from "../../components/portal/DemoBanner";
import {
  communityFeed,
  communityGroups,
  directory,
} from "../../data/portalDemo";

export default function PortalCommunity() {
  const [group, setGroup] = useState("All");
  const filters = ["All", ...communityGroups.map((g) => g.name)];

  const feed =
    group === "All"
      ? communityFeed
      : communityFeed.filter((p) => p.group === group);

  return (
    <div className="space-y-7 md:space-y-8">
      <DemoBanner context="Forums, directory, and engagement metrics are static UI for demos." />

      <Reveal>
        <div className="app-hero-banner flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              Private network
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-charcoal md:text-4xl">
              Community
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Discuss installs, share showroom ideas, and find peers by region —
              messaging and posts are preview-only.
            </p>
          </div>
          <div className="app-inline-actions">
            <button type="button" className="btn btn--ghost btn--md">
              New Discussion
            </button>
            <button type="button" className="btn btn--primary btn--md">
              Message Member
            </button>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {communityGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 50}>
            <button
              type="button"
              onClick={() => setGroup(g.name)}
              className={`app-card app-card--padded block w-full text-left ${
                group === g.name ? "ring-2 ring-brass/50" : ""
              }`}
            >
              <CardFx />
              <p className="app-card__label">Group</p>
              <p className="mt-2 font-serif text-xl font-semibold text-charcoal">
                {g.name}
              </p>
              <p className="app-card__meta">
                {g.members} members · {g.posts} posts this month
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      <div className="app-toolbar">
        <div className="app-tabs" role="tablist" aria-label="Community filters">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={group === f}
              className={`app-tab ${group === f ? "is-active" : ""}`}
              onClick={() => setGroup(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search discussions…"
          className="app-field max-w-xs"
          aria-label="Search discussions"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal variant="slide-left" className="lg:col-span-2">
          <section className="app-card app-card--panel">
            <CardFx />
            <div className="flex items-center justify-between gap-3">
              <h2 className="app-card__title">Activity feed</h2>
              <span className="app-chip">{feed.length} posts</span>
            </div>
            <div className="mt-2">
              {feed.map((p) => (
                <article key={p.title} className="app-post">
                  <div className="app-post__head">
                    <span className="app-avatar">{p.initials}</span>
                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        {p.author}{" "}
                        <span className="font-normal text-muted">in {p.group}</span>
                      </p>
                      <p className="text-xs text-muted">{p.time}</p>
                    </div>
                  </div>
                  <h3 className="app-post__title">{p.title}</h3>
                  <p className="app-post__excerpt">{p.excerpt}</p>
                  <div className="app-post__foot">
                    <button type="button" className="app-chip app-chip--ghost">
                      {p.likes} likes
                    </button>
                    <button type="button" className="app-chip app-chip--ghost">
                      {p.replies} replies
                    </button>
                    <button type="button" className="app-link-quiet ml-auto">
                      Open thread
                    </button>
                  </div>
                </article>
              ))}
              {feed.length === 0 && (
                <p className="app-empty">No posts in this group yet.</p>
              )}
            </div>
          </section>
        </Reveal>

        <Reveal variant="slide-right">
          <aside className="app-card app-card--panel h-full">
            <CardFx />
            <h2 className="app-card__title">Member directory</h2>
            <p className="mt-1 text-xs text-muted">
              {directory.length} peers · filter by region in full build
            </p>
            <ul className="mt-5 space-y-3">
              {directory.map((n) => (
                <li
                  key={n.name}
                  className="flex items-start gap-3 rounded-xl px-2 py-2 transition hover:bg-[rgba(247,232,216,0.4)]"
                >
                  <span className="app-avatar">
                    {n.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-charcoal">{n.name}</p>
                    <p className="text-xs text-muted">{n.role}</p>
                    <p className="text-xs text-muted">
                      {n.company} · {n.region}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
