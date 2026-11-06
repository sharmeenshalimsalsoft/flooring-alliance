import type { FlooringOption } from "./flooringOptions";
import { publicAsset } from "../utils/publicAsset";

/**
 * Commercial flooring showcase — floor-surface photography only (no interiors).
 */
export const commercialFlooringOptions: FlooringOption[] = [
  {
    id: "polished-concrete",
    name: "Polished Concrete",
    title: "Polished Concrete Flooring",
    subtitle: "Built for high-traffic commercial spaces.",
    swatch: publicAsset("/images/hero-floors/commercial-polished-concrete.jpg"),
    scene: publicAsset("/images/hero-floors/commercial-polished-concrete.jpg"),
  },
  {
    id: "commercial-lvt",
    name: "Commercial LVT",
    title: "Commercial LVT Flooring",
    subtitle: "Durable luxury vinyl for demanding workplaces.",
    swatch: publicAsset("/images/hero-floors/commercial-lvt.jpg"),
    scene: publicAsset("/images/hero-floors/commercial-lvt.jpg"),
  },
  {
    id: "porcelain-tile",
    name: "Porcelain Tile",
    title: "Porcelain Tile Flooring",
    subtitle: "Clean lines for lobbies, corridors and retail.",
    swatch: publicAsset("/images/hero-floors/commercial-porcelain.jpg"),
    scene: publicAsset("/images/hero-floors/commercial-porcelain.jpg"),
  },
  {
    id: "terrazzo",
    name: "Terrazzo",
    title: "Terrazzo Flooring",
    subtitle: "Statement surfaces for public and institutional spaces.",
    swatch: publicAsset("/images/hero-floors/commercial-terrazzo.jpg"),
    scene: publicAsset("/images/hero-floors/commercial-terrazzo.jpg"),
  },
  {
    id: "epoxy-resin",
    name: "Epoxy Resin",
    title: "Epoxy Resin Flooring",
    subtitle: "Seamless performance for commercial and industrial floors.",
    swatch: publicAsset("/images/hero-floors/commercial-epoxy.jpg"),
    scene: publicAsset("/images/hero-floors/commercial-epoxy.jpg"),
  },
  {
    id: "commercial-hardwood",
    name: "Commercial Hardwood",
    title: "Commercial Hardwood Flooring",
    subtitle: "Warmth and presence for hospitality and corporate suites.",
    swatch: publicAsset("/images/hero-floors/commercial-hardwood.jpg"),
    scene: publicAsset("/images/hero-floors/commercial-hardwood.jpg"),
  },
];
