import { Link } from "react-router";
import { brand } from "../../config/brand";
import Container from "../ui/Container";

const columns = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/mission" },
      { label: "Markets Served", href: "/markets" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Membership",
    links: [
      { label: "Explore Membership", href: "/membership" },
      { label: "Residential Dealers", href: "/membership/residential" },
      { label: "Commercial Contractors", href: "/membership/commercial" },
      { label: "Supplier Partners", href: "/membership/supplier" },
      { label: "Membership Benefits", href: "/membership/benefits" },
      { label: "Become a Member", href: "/membership/apply" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Supplier Directory", href: "/suppliers" },
      { label: "Locations", href: "/locations" },
      { label: "Member Services", href: "/resources" },
      { label: "Training & Education", href: "/training" },
      { label: "News & Events", href: "/news" },
      { label: "Annual Summit", href: "/events/summit" },
      { label: "Podcast", href: "/podcast" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-stone bg-cream text-charcoal before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_70%_50%_at_10%_0%,rgba(197,187,168,0.28),transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_100%,rgba(138,133,144,0.08),transparent_50%)]">
      <Container className="relative z-10 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <Link
              to="/"
              className="font-serif text-2xl tracking-wide text-primary"
            >
              {brand.logoText}
            </Link>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted">
              Temporary Brand Mark
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Uniting Commercial USA and AHSG into one platform for independent
              dealers, commercial contractors and supplier partners — without
              taking away their brand independence.
            </p>
            <Link
              to="/podcast"
              className="mt-5 inline-flex text-[11px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-charcoal"
            >
              What’s Underfoot Podcast →
            </Link>
            <div className="mt-6 flex gap-3" aria-label="Social media">
              {["LinkedIn", "Facebook", "Instagram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center border border-stone text-[10px] uppercase tracking-wider text-muted transition-colors hover:border-brass hover:text-primary"
                  aria-label={s}
                  onClick={(e) => e.preventDefault()}
                >
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted transition-colors hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              Newsletter
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Stay informed on membership news, events and industry updates.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email address"
                className="w-full border border-stone bg-white px-4 py-3 text-sm text-charcoal outline-none placeholder:text-muted focus:border-brass"
              />
              <button type="submit" className="btn btn--gold btn--md w-full">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-muted">
              Frontend preview only — submissions are not processed.
            </p>
          </div>
        </div>
      </Container>

      <div className="relative z-10 border-t border-stone">
        <Container className="flex flex-col gap-4 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.temporaryName}. All rights
            reserved. Brand identity pending client approval.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link to="/portal/login" className="transition-colors hover:text-primary">
              Member Login
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms of Use
            </Link>
            <Link
              to="/accessibility"
              className="transition-colors hover:text-primary"
            >
              Accessibility
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
