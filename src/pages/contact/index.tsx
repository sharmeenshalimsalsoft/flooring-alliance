import PageHero from "../../components/ui/PageHero";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { brand } from "../../config/brand";
import { images } from "../../data/images";
import CardFx from "../../components/ui/CardFx";

const field =
  "w-full border border-stone bg-white px-4 py-3 text-sm outline-none transition-shadow focus:border-brass focus:shadow-[0_0_0_3px_rgba(185,154,104,0.18)]";
const label = "mb-2 block text-xs uppercase tracking-[0.14em] text-muted";

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="split"
        eyebrow="Contact"
        title="We Would Love to Hear From You"
        subtitle="Reach the membership team with questions about joining, partnerships or the platform."
        image={images.contact}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <Reveal variant="slide-left" className="space-y-5 lg:col-span-2">
              <div className="surface-card surface-card--padded">
                <CardFx />
                <p className="text-[10px] uppercase tracking-[0.16em] text-brass">
                  Email
                </p>
                <p className="mt-2 text-charcoal">{brand.contactEmail}</p>
              </div>
              <div className="surface-card surface-card--padded">
                <CardFx />
                <p className="text-[10px] uppercase tracking-[0.16em] text-brass">
                  Phone
                </p>
                <p className="mt-2 text-charcoal">{brand.contactPhone}</p>
              </div>
              <div className="surface-card surface-card--padded">
                <CardFx />
                <p className="text-[10px] uppercase tracking-[0.16em] text-brass">
                  Network
                </p>
                <p className="mt-2 text-charcoal">{brand.address}</p>
              </div>
            </Reveal>
            <Reveal variant="slide-right" className="lg:col-span-3">
              <form
                className="surface-card space-y-5 !p-6 md:!p-8"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <CardFx />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>
                      Name
                    </label>
                    <input id="name" className={field} />
                  </div>
                  <div>
                    <label htmlFor="email" className={label}>
                      Email
                    </label>
                    <input id="email" type="email" className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={label}>
                    Subject
                  </label>
                  <input id="subject" className={field} />
                </div>
                <div>
                  <label htmlFor="message" className={label}>
                    Message
                  </label>
                  <textarea id="message" rows={5} className={field} />
                </div>
                <button type="submit" className="btn btn--gold btn--lg">
                  Send Message
                </button>
                <p className="text-xs text-muted">
                  Frontend preview — messages are not delivered.
                </p>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
