/**
 * Prefix public/ asset paths with Vite's base URL so images, lottie, and
 * videos resolve under /flooring-alliance/ on customdev.
 */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}
