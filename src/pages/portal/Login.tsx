import { Link } from "react-router";
import { brand } from "../../config/brand";
import { images } from "../../data/images";

export default function PortalLogin() {
  return (
    <div className="app-auth-shell">
      <div className="relative hidden min-h-[40vh] overflow-hidden lg:block lg:min-h-screen">
        <img
          src={images.login}
          alt="Architectural interior with warm wood flooring"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3a2e26]/85 via-[#3a2e26]/35 to-transparent" />
        <div className="relative z-10 flex h-full items-end p-12">
          <div>
            <p className="font-serif text-3xl text-ivory">{brand.temporaryName}</p>
            <p className="mt-2 text-sm text-stone">Member Portal Preview</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-16">
        <div className="app-auth-panel w-full max-w-md">
          <Link to="/" className="font-serif text-2xl text-primary">
            {brand.logoText}
          </Link>
          <h1 className="mt-8 font-serif text-3xl font-semibold text-charcoal">
            Member Login
          </h1>
          <p className="mt-2 text-sm text-muted">
            UI only — credentials are not authenticated in this frontend build.
          </p>
          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted"
              >
                Email
              </label>
              <input id="email" type="email" className="app-field" />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs uppercase tracking-[0.14em] text-muted"
              >
                Password
              </label>
              <input id="password" type="password" className="app-field" />
            </div>
            <div className="flex justify-between text-sm">
              <Link
                to="/portal/forgot-password"
                className="text-muted transition hover:text-primary"
              >
                Forgot password?
              </Link>
              <Link
                to="/portal/mfa"
                className="text-muted transition hover:text-primary"
              >
                MFA screen
              </Link>
            </div>
            <Link to="/portal" className="btn btn--secondary btn--lg w-full">
              Continue to Portal Preview
            </Link>
          </form>
          <p className="mt-8 text-center text-sm text-muted">
            Not a member?{" "}
            <Link
              to="/membership/apply"
              className="text-primary transition hover:text-brass"
            >
              Apply here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
