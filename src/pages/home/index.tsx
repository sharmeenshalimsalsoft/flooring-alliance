import AboutAlliance from "../../components/home/AboutAlliance";
import AudiencePathways from "../../components/home/AudiencePathways";
import FloorSampleStudio from "../../components/home/FloorSampleStudio";
import Hero from "../../components/home/Hero";
import LocationsPreview from "../../components/home/LocationsPreview";
import MembershipBenefits from "../../components/home/MembershipBenefits";
import MembershipCta from "../../components/home/MembershipCta";
import NetworkStats from "../../components/home/NetworkStats";
import NewsPreview from "../../components/home/NewsPreview";
import PlankPulseBand from "../../components/home/PlankPulseBand";
import PodcastPreview from "../../components/home/PodcastPreview";
import ServicesPreview from "../../components/home/ServicesPreview";
import SupplierPreview from "../../components/home/SupplierPreview";
import Testimonials from "../../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AudiencePathways />
      <NetworkStats />
      <PlankPulseBand />
      <FloorSampleStudio />
      <AboutAlliance />
      <SupplierPreview />
      <MembershipBenefits />
      <LocationsPreview />
      <ServicesPreview />
      <NewsPreview />
      <PodcastPreview />
      <MembershipCta />
      <Testimonials />
    </>
  );
}
