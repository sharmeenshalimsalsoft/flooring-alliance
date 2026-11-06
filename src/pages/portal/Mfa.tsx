import { Link } from "react-router";
import { brand } from "../../config/brand";

export default function MfaPage() {
  return (
    <div className="app-auth-shell place-items-center px-6 py-16">
      <div className="app-auth-panel w-full max-w-md text-center">
        <Link to="/" className="font-serif text-xl text-primary">
          {brand.logoText}
        </Link>
        <h1 className="mt-6 font-serif text-2xl font-semibold text-charcoal">
          Verify Your Identity
        </h1>
        <p className="mt-2 text-sm text-muted">
          MFA verification UI preview. Mandatory for Financial Access users in
          the full build.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <input
              key={i}
              aria-label={`Digit ${i + 1}`}
              maxLength={1}
              className="app-otp"
            />
          ))}
        </div>
        <Link to="/portal" className="btn btn--secondary btn--md mt-8 w-full">
          Verify & Continue
        </Link>
      </div>
    </div>
  );
}
