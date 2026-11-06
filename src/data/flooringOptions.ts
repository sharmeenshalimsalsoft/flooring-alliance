import { publicAsset } from "../utils/publicAsset";

export type FlooringOption = {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  /** Close-up wood texture for the swatch */
  swatch: string;
  /** Living room scene with this flooring clearly visible */
  scene: string;
};

/**
 * Interactive hero options — same living-room style as the reference video,
 * with the floor finish changing per selection.
 */
export const flooringOptions: FlooringOption[] = [
  {
    id: "burmese-teak",
    name: "Burmese Teak",
    title: "Burmese Teak Flooring",
    subtitle: "A statement beneath every step.",
    swatch: publicAsset("/images/hero-floors/swatch-burmese-teak.jpg"),
    scene: publicAsset("/images/hero-floors/floor-burmese-teak.jpg"),
  },
  {
    id: "kayu-kuku",
    name: "Kayu Kuku",
    title: "Kayu Kuku Flooring",
    subtitle: "A statement beneath every step.",
    swatch: publicAsset("/images/hero-floors/swatch-kayu-kuku.jpg"),
    scene: publicAsset("/images/hero-floors/floor-kayu-kuku.jpg"),
  },
  {
    id: "merbau",
    name: "Merbau",
    title: "Merbau Flooring",
    subtitle: "A statement beneath every step.",
    swatch: publicAsset("/images/hero-floors/swatch-merbau.jpg"),
    scene: publicAsset("/images/hero-floors/floor-merbau.jpg"),
  },
  {
    id: "oak-ash",
    name: "Oak Ash",
    title: "Oak Ash Flooring",
    subtitle: "A statement beneath every step.",
    swatch: publicAsset("/images/hero-floors/swatch-oak-ash.jpg"),
    scene: publicAsset("/images/hero-floors/floor-oak-ash.jpg"),
  },
  {
    id: "sand-oak",
    name: "Sand Oak",
    title: "Sand Oak Flooring",
    subtitle: "A statement beneath every step.",
    swatch: publicAsset("/images/hero-floors/swatch-sand-oak.jpg"),
    scene: publicAsset("/images/hero-floors/floor-sand-oak.jpg"),
  },
  {
    id: "teak-herringbone",
    name: "Teak Herringbone",
    title: "Teak Herringbone Flooring",
    subtitle: "A statement beneath every step.",
    swatch: publicAsset("/images/hero-floors/swatch-teak-herringbone.jpg"),
    scene: publicAsset("/images/hero-floors/floor-teak-herringbone.jpg"),
  },
];
