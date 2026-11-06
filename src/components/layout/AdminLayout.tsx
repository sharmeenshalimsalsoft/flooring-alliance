import { Link, NavLink, Outlet } from "react-router";
import { brand } from "../../config/brand";

const links = [
  { label: "Overview", href: "/admin" },
  { label: "Members", href: "/admin/members" },
  { label: "Content", href: "/admin/content" },
  { label: "Moderation", href: "/admin/moderation" },
  { label: "Audit Logs", href: "/admin/audit" },
];

export default function AdminLayout() {
  return (
    <div className="app-shell app-shell--admin">
      <aside className="app-sidebar" aria-label="Admin navigation">
        <div className="app-sidebar__glow" aria-hidden />
        <div className="app-sidebar__brand">
          <Link to="/" className="app-sidebar__logo">
            {brand.logoText}
          </Link>
          <p className="app-sidebar__eyebrow">Administration</p>
          <p className="app-sidebar__note">Staff console · UI preview only</p>
        </div>
        <nav className="app-nav">
          {links.map((link, i) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/admin"}
              className={({ isActive }) =>
                `app-nav__link ${isActive ? "is-active" : ""}`
              }
            >
              <span className="app-nav__index">
                {String(i + 1).padStart(2, "0")}
              </span>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="app-sidebar__foot">
          <Link to="/portal">Member Portal</Link>
          <Link to="/">Exit to Website</Link>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <div>
            <p className="app-topbar__eyebrow">Admin Console · Demo</p>
            <h1 className="app-topbar__title">Staff Dashboard</h1>
          </div>
          <div className="app-topbar__actions">
            <nav className="app-mobile-nav" aria-label="Admin sections">
              {links.map((l) => (
                <Link key={l.href} to={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <span className="app-chip hidden md:inline-flex">Avery Brooks</span>
            <span className="app-chip app-chip--ghost hidden lg:inline-flex">
              Ops Admin
            </span>
            <Link to="/" className="app-chip app-chip--ghost">
              Exit
            </Link>
          </div>
        </header>
        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
