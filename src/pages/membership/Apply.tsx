import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

const fieldClass =
  "w-full border border-stone bg-white px-4 py-3 text-sm text-charcoal outline-none placeholder:text-muted focus:border-brass";
const labelClass = "mb-2 block text-xs uppercase tracking-[0.14em] text-muted";

export default function MembershipApply() {
  return (
    <>
      <PageHero
        eyebrow="Become a Member"
        title="Membership Application"
        subtitle="Complete the form below. This is a frontend preview — submissions are not processed and no Salesforce lead is created."
        image={images.contact}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <form
            className="surface-card mx-auto max-w-3xl space-y-6 !p-6 md:!p-10"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <CardFx />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="company" className={labelClass}>
                  Company Name
                </label>
                <input id="company" name="company" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="companyType" className={labelClass}>
                  Company Type
                </label>
                <select id="companyType" name="companyType" className={fieldClass}>
                  <option value="">Select type</option>
                  <option>Residential Dealer</option>
                  <option>Commercial Contractor</option>
                  <option>Supplier Partner</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="membershipType" className={labelClass}>
                  Interested Membership Type
                </label>
                <select
                  id="membershipType"
                  name="membershipType"
                  className={fieldClass}
                >
                  <option value="">Select membership</option>
                  <option>Residential Dealer</option>
                  <option>Commercial Contractor</option>
                  <option>Supplier Partner</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact" className={labelClass}>
                  Contact Person
                </label>
                <input id="contact" name="contact" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="title" className={labelClass}>
                  Job Title
                </label>
                <input id="title" name="title" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input id="email" name="email" type="email" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className={labelClass}>
                  Business Address
                </label>
                <input id="address" name="address" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="city" className={labelClass}>
                  City
                </label>
                <input id="city" name="city" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="state" className={labelClass}>
                  State
                </label>
                <input id="state" name="state" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="zip" className={labelClass}>
                  ZIP Code
                </label>
                <input id="zip" name="zip" className={fieldClass} />
              </div>
              <div>
                <label htmlFor="website" className={labelClass}>
                  Website
                </label>
                <input id="website" name="website" type="url" className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="additional" className={labelClass}>
                  Additional Information
                </label>
                <textarea
                  id="additional"
                  name="additional"
                  rows={4}
                  className={fieldClass}
                />
              </div>
            </div>
            <button type="submit" className="btn btn--gold btn--lg w-full sm:w-auto">
              Submit Application
            </button>
            <p className="text-xs text-muted">
              UI only — form does not validate or submit. Salesforce Lead creation
              will be connected in a later phase.
            </p>
          </form>
        </Container>
      </section>
    </>
  );
}
