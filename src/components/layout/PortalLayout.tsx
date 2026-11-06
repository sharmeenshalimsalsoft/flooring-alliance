import { Link, NavLink, Outlet } from "react-router";
import { brand } from "../../config/brand";

const links = [
  { label: "Dashboard", href: "/portal" },
  { label: "Community", href: "/portal/community" },
  { label: "Offers", href: "/portal/offers" },
  { label: "Documents", href: "/portal/documents" },
  { label: "Learning", href: "/portal/learning" },
  { label: "Financial Center", href: "/portal/financial" },
];

export default function PortalLayout() {
  return (
    <div className="app-shell app-shell--portal">
      <aside className="app-sidebar" aria-label="Member portal navigation">
        <div className="app-sidebar__glow" aria-hidden />
        <div className="app-sidebar__brand">
          <Link to="/" className="app-sidebar__logo">
            {brand.logoText}
          </Link>
          <p className="app-sidebar__eyebrow">Member Portal</p>
          <p className="app-sidebar__note">
            Design preview — sample member experience
          </p>
        </div>
        <nav className="app-nav">
          {links.map((link, i) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/portal"}
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
          <Link to="/admin">Admin Dashboard</Link>
          <Link to="/">Back to Website</Link>
        </div>
      </aside>

      <div className="app-main">
        <header className="app-topbar">
          <div>
            <p className="app-topbar__eyebrow">Member Portal · Demo</p>
            <p className="app-topbar__title">Welcome, Jordan Hale</p>
          </div>
          <div className="app-topbar__actions">
            <nav className="app-mobile-nav" aria-label="Portal sections">
              {links.slice(0, 4).map((l) => (
                <Link key={l.href} to={l.href}>
                  {l.label}
                </Link>
              ))}
            </nav>
            <span className="app-chip hidden md:inline-flex">
              Heritage Home Floors
            </span>
            <span className="app-chip app-chip--ghost hidden lg:inline-flex">
              Dealer · SE
            </span>
            <Link to="/portal/login" className="app-chip app-chip--ghost">
              Sign Out
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
