// Generates web-sized WebP copies of the source images. Originals are left untouched.
// Run with: npm run images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "src/assets/images";
const OUT = "src/assets/images/optimized";

const jobs = [
  { file: "white_bg.jpg", width: 900, quality: 82 },
  { file: "motobike.jpg", width: 1200, quality: 78 },
  { file: "sms_ui.png", width: 1200, quality: 78 },
  { file: "myport.png", width: 1200, quality: 78 },
  { file: "icon.jpg", width: 180, quality: 80 },
];

await mkdir(OUT, { recursive: true });

for (const { file, width, quality } of jobs) {
  const out = `${OUT}/${file.replace(/\.(jpg|png)$/, ".webp")}`;
  const info = await sharp(`${SRC}/${file}`)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(out);
  console.log(`${file} -> ${out}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}
