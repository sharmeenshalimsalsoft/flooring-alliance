import { publicAsset } from "./publicAsset";

export const ImageUrl = (image: string) =>
  publicAsset(`/images/${image.replace(/^\//, "")}`);
