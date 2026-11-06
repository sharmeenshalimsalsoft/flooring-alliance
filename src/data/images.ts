import { publicAsset } from "../utils/publicAsset";

/**
 * Site imagery — mix of custom-generated flooring photography
 * and assets sourced from Commercial USA / AHSG client sites.
 * Interactive hero floor frames remain under /images/hero-floors/.
 */
export const images = {
  // Pathways & membership
  residential: publicAsset("/images/site/residential-showroom.jpg"),
  commercial: publicAsset("/images/site/client-elevate-hero.jpg"),
  supplier: publicAsset("/images/site/client-flooring-samples.jpg"),

  // Story & brand
  about: publicAsset("/images/site/about-alliance.jpg"),
  membershipCta: publicAsset("/images/site/membership-cta.jpg"),
  hardwood: publicAsset("/images/site/client-wood-slider.jpg"),
  stone: publicAsset("/images/site/client-browsing-tile.jpg"),
  hospitality: publicAsset("/images/site/hospitality-floor.jpg"),
  retail: publicAsset("/images/site/client-retail.jpg"),
  office: publicAsset("/images/site/office-flooring.jpg"),
  training: publicAsset("/images/site/training-workshop.jpg"),

  // Editorial
  news1: publicAsset("/images/site/news-flooring-1.jpg"),
  news2: publicAsset("/images/site/client-kitchen.jpg"),
  news3: publicAsset("/images/site/client-remodel.jpg"),
  summit: publicAsset("/images/site/summit-event.jpg"),
  podcast: publicAsset("/images/site/client-podcast.webp"),
  contact: publicAsset("/images/site/contact-showroom.jpg"),
  login: publicAsset("/images/site/portal-login.jpg"),

  // Extra client photography (markets / detail pages)
  commercialHero: publicAsset("/images/site/client-commercial-hero.jpg"),
  commercialFlooring: publicAsset("/images/site/client-commercial-flooring.jpg"),
  woodSamples: publicAsset("/images/site/client-wood-samples.jpg"),
  tileBrowse: publicAsset("/images/site/client-tile-slider.jpg"),
  carpet: publicAsset("/images/site/client-carpet-slider.jpg"),
  designCenter: publicAsset("/images/site/client-design-center.jpg"),
  newHome: publicAsset("/images/site/client-new-home.jpg"),
  remodel: publicAsset("/images/site/client-remodel.jpg"),
  multifamily: publicAsset("/images/site/client-multifamily.jpg"),
  mainStreet: publicAsset("/images/site/client-main-street.jpg"),
  kitchenBath: publicAsset("/images/site/client-kitchen-bath.jpg"),
  tenant: publicAsset("/images/site/client-tenant.jpg"),
  kitchen: publicAsset("/images/site/client-kitchen.jpg"),
  stairs: publicAsset("/images/site/client-stairs.png"),
  partners: publicAsset("/images/site/client-partners.jpg"),
  customLobby: publicAsset("/images/site/commercial-lobby.jpg"),
  customSupplier: publicAsset("/images/site/supplier-materials.jpg"),
  customStone: publicAsset("/images/site/stone-tile.jpg"),
  customHardwood: publicAsset("/images/site/hardwood-detail.jpg"),
  customPodcast: publicAsset("/images/site/podcast-studio.jpg"),
} as const;
