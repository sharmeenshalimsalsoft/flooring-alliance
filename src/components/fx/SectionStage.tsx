import type { ReactNode } from "react";
import { flooringReels } from "../../data/sectionMedia";
import { publicAsset } from "../../utils/publicAsset";
import AmbientPieces, { type AmbientVariant } from "./AmbientPieces";
import FlooringBackdrop from "./FlooringBackdrop";
import LottieAccent from "./LottieAccent";

export type SectionMood =
  | "cinematic"
  | "network"
  | "atelier"
  | "gallery"
  | "parchment"
  | "cartography"
  | "studio"
  | "editorial"
  | "broadcast"
  | "velvet"
  | "summit";

const moodConfig: Record<
  SectionMood,
  {
    shell: string;
    reel?: readonly string[];
    reelOpacity?: number;
    ambient: AmbientVariant;
    lottie?: string;
    lottieClass?: string;
    veil?: string;
  }
> = {
  /* Pathways — residential/commercial showroom walk */
  cinematic: {
    shell: "section-stage section-stage--cinematic",
    reel: flooringReels.showroom,
    reelOpacity: 0.34,
    ambient: "showroom-light",
    veil: "section-stage__veil section-stage__veil--warm",
  },
  /* Network stats — national coverage / floor-plan blueprint */
  network: {
    shell: "section-stage section-stage--network",
    ambient: "blueprint",
    lottie: publicAsset("/lottie/location-pin.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--tr",
    veil: "section-stage__veil section-stage__veil--espresso",
  },
  /* About — hardwood craft & grain */
  atelier: {
    shell: "section-stage section-stage--atelier",
    reel: flooringReels.hardwood,
    reelOpacity: 0.26,
    ambient: "grain",
    lottie: publicAsset("/lottie/hardwood-planks.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--bl",
    veil: "section-stage__veil section-stage__veil--cream",
  },
  /* Suppliers — material samples & finishes */
  gallery: {
    shell: "section-stage section-stage--gallery",
    reel: flooringReels.materials,
    reelOpacity: 0.2,
    ambient: "swatches",
    lottie: publicAsset("/lottie/sample-swatches.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--tr opacity-50",
    veil: "section-stage__veil section-stage__veil--pearl",
  },
  /* Benefits — refined plank field */
  parchment: {
    shell: "section-stage section-stage--parchment",
    ambient: "planks",
    lottie: publicAsset("/lottie/hardwood-planks.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--tr opacity-30",
    veil: "section-stage__veil section-stage__veil--paper",
  },
  /* Locations — floor-plan / coverage map */
  cartography: {
    shell: "section-stage section-stage--cartography",
    ambient: "blueprint",
    lottie: publicAsset("/lottie/location-pin.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--map",
    veil: "section-stage__veil section-stage__veil--map",
  },
  /* Services — commercial floors & tile */
  studio: {
    shell: "section-stage section-stage--studio",
    reel: flooringReels.commercial,
    reelOpacity: 0.36,
    ambient: "tile-grid",
    lottie: publicAsset("/lottie/tile-mosaic.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--tr opacity-40",
    veil: "section-stage__veil section-stage__veil--slate",
  },
  /* News — project photography editorial */
  editorial: {
    shell: "section-stage section-stage--editorial",
    reel: flooringReels.editorial,
    reelOpacity: 0.16,
    ambient: "herringbone",
    veil: "section-stage__veil section-stage__veil--ink",
  },
  /* Podcast What’s Underfoot — wood rings */
  broadcast: {
    shell: "section-stage section-stage--broadcast",
    reel: flooringReels.podcast,
    reelOpacity: 0.22,
    ambient: "tree-rings",
    lottie: publicAsset("/lottie/underfoot-rings.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--wave",
    veil: "section-stage__veil section-stage__veil--night",
  },
  /* Testimonials — dark walnut showroom */
  velvet: {
    shell: "section-stage section-stage--velvet",
    reel: flooringReels.hardwood,
    reelOpacity: 0.18,
    ambient: "grain",
    lottie: publicAsset("/lottie/underfoot-rings.json"),
    lottieClass: "section-stage__lottie section-stage__lottie--center opacity-25",
    veil: "section-stage__veil section-stage__veil--velvet",
  },
  /* Membership CTA — lived-in luxury floors */
  summit: {
    shell: "section-stage section-stage--summit",
    reel: flooringReels.living,
    reelOpacity: 0.58,
    ambient: "sawdust",
    veil: "section-stage__veil section-stage__veil--cinema",
  },
};

type Props = {
  mood: SectionMood;
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

export default function SectionStage({
  mood,
  children,
  className = "",
  id,
  "aria-labelledby": labelledBy,
}: Props) {
  const cfg = moodConfig[mood];

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${cfg.shell} section-shell ${className}`}
    >
      <div className="section-stage__fx" aria-hidden>
        {cfg.reel ? (
          <FlooringBackdrop images={[...cfg.reel]} opacity={cfg.reelOpacity} />
        ) : null}
        {cfg.veil ? <div className={cfg.veil} /> : null}
        <AmbientPieces variant={cfg.ambient} />
        {cfg.lottie ? (
          <LottieAccent src={cfg.lottie} className={cfg.lottieClass} />
        ) : null}
      </div>
      <div className="section-stage__content relative z-10">{children}</div>
    </section>
  );
}
