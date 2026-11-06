import { images } from "./images";

/** On-brand flooring photography reels for section atmospheres */
export const flooringReels = {
  showroom: [
    images.residential,
    images.designCenter,
    images.hardwood,
    images.tileBrowse,
  ],
  hardwood: [
    images.customHardwood,
    images.hardwood,
    images.woodSamples,
    images.stairs,
  ],
  materials: [
    images.supplier,
    images.woodSamples,
    images.customStone,
    images.customSupplier,
    images.carpet,
  ],
  commercial: [
    images.customLobby,
    images.commercialFlooring,
    images.office,
    images.hospitality,
    images.retail,
  ],
  living: [
    images.membershipCta,
    images.kitchen,
    images.newHome,
    images.remodel,
    images.kitchenBath,
  ],
  editorial: [
    images.news1,
    images.news2,
    images.news3,
    images.summit,
  ],
  podcast: [images.podcast, images.customPodcast, images.hardwood],
} as const;
