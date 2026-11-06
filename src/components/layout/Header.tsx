import { useEffect, useId, useState, type CSSProperties } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { brand } from "../../config/brand";
import { navLinks } from "../../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Floating brand — top left */}
      <div className="site-nav__brand-wrap pointer-events-none fixed left-0 top-0 z-50 p-4 sm:p-5 md:p-6">
        <Link
          to="/"
          className="site-nav__brand pointer-events-auto group inline-flex items-center gap-2.5"
          aria-label={`${brand.temporaryName} home`}
        >
          <span className="site-nav__mark" aria-hidden>
            <span className="site-nav__mark-inner" />
          </span>
          <span className="font-serif text-[1.15rem] font-semibold tracking-[0.08em] text-charcoal transition-colors group-hover:text-primary sm:text-[1.3rem]">
            {brand.logoText}
          </span>
        </Link>
      </div>

      <aside
        className={`site-nav pointer-events-none fixed inset-y-0 right-0 z-50 ${
          open ? "site-nav--open" : ""
        }`}
        aria-label="Site navigation"
      >
        {/* Compact edge dock */}
        <div className="site-nav__dock pointer-events-auto">
          <div className="site-nav__dock-card">
            <span className="site-nav__dock-monogram" aria-hidden>
              {brand.logoText}
            </span>

            <button
              type="button"
              className={`site-nav__orb ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="site-nav__orb-ring" aria-hidden />
              <span className={`site-nav__orb-icon ${open ? "is-open" : ""}`} aria-hidden>
                <span />
                <span />
                <span />
              </span>
            </button>

            <div className="site-nav__dock-meta">
              <span className="site-nav__dock-caption">
                {open ? "Close" : "Menu"}
              </span>
              <Link to="/membership/apply" className="site-nav__dock-join">
                Join
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          className={`site-nav__backdrop ${open ? "is-open" : ""}`}
          aria-label="Close navigation"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        />

        <div
          id={panelId}
          className={`site-nav__panel pointer-events-auto ${open ? "is-open" : ""}`}
          aria-hidden={!open}
        >
          <div className="site-nav__panel-sheen" aria-hidden />

          <div className="site-nav__panel-head">
            <div>
              <p className="site-nav__panel-eyebrow">Flooring & Surfaces</p>
              <p className="site-nav__panel-title">{brand.temporaryShortName}</p>
            </div>
            <button
              type="button"
              className="site-nav__panel-close"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden>×</span>
            </button>
          </div>

          <nav className="site-nav__panel-nav" aria-label="Primary">
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.href} style={{ "--i": i } as CSSProperties}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    className={({ isActive }) =>
                      `site-nav__link ${isActive ? "is-active" : ""}`
                    }
                  >
                    <span className="site-nav__link-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="site-nav__link-label">{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-nav__panel-foot">
            <Link to="/portal/login" className="site-nav__panel-outline">
              Member Login
            </Link>
            <Link to="/membership/apply" className="site-nav__panel-cta">
              Become a Member
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
