import PageHero from "../../components/ui/PageHero";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import Reveal from "../../components/ui/Reveal";
import { images } from "../../data/images";

export default function SupplierPartnership() {
  return (
    <>
      <PageHero
        eyebrow="Supplier Partners"
        title="Reach a Nationwide Network of Professionals"
        subtitle="Connect with residential dealers and commercial flooring professionals through structured supplier partnership programs."
        image={images.supplier}
      />
      <section className="section-shell section-shell--ivory">
        <Container>
          <Reveal className="max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold text-charcoal">
              Partner With an Established Network
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              Supplier partnership provides a channel to introduce products,
              training and promotions to qualified members across residential
              and commercial markets. Placeholder content pending final partner
              program details from the client.
            </p>
          </Reveal>
          <div className="content-grid mt-12 grid md:grid-cols-3">
            {[
              {
                title: "Member Reach",
                text: "Engage dealers and contractors across a national footprint.",
              },
              {
                title: "Education Channel",
                text: "Deliver product training through the Learning Center.",
              },
              {
                title: "Offer Distribution",
                text: "Share member-only promotions through the offers portal.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-t border-stone pt-6">
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/membership/apply" variant="gold">
              Become a Supplier Partner
            </Button>
            <Button href="/suppliers" variant="ghost">
              View Directory Preview
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
