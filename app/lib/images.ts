import fs from "fs";
import path from "path";

/**
 * Scans public/products/[folder] and returns all image paths.
 * Supports .jpg, .jpeg, .png, .webp — any casing.
 * Falls back to [] if folder doesn't exist or is empty.
 */
export function getProductImages(folder: string): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "products", folder);
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir)
      .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    return files.map(f => `/products/${folder}/${f}`);
  } catch {
    return [];
  }
}
