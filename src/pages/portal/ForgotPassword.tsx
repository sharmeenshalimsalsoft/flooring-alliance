import { Link } from "react-router";
import { brand } from "../../config/brand";

export default function ForgotPassword() {
  return (
    <div className="app-auth-shell place-items-center px-6 py-16">
      <div className="app-auth-panel w-full max-w-md">
        <Link to="/" className="font-serif text-xl text-primary">
          {brand.logoText}
        </Link>
        <h1 className="mt-6 font-serif text-2xl font-semibold text-charcoal">
          Reset Password
        </h1>
        <p className="mt-2 text-sm text-muted">
          Frontend shell only — no email will be sent.
        </p>
        <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.14em] text-muted"
          >
            Email
          </label>
          <input id="email" type="email" className="app-field" />
          <button type="submit" className="btn btn--secondary btn--md w-full">
            Send Reset Link
          </button>
        </form>
        <Link to="/portal/login" className="app-link-quiet mt-6 inline-block">
          ← Back to login
        </Link>
      </div>
    </div>
  );
}
