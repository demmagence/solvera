import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const manifest = JSON.parse(fs.readFileSync("scripts/gdrive_manifest.json", "utf-8"));
const groupFiles = manifest.group;
const outputDir = "public/group";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) SolveraGroupFetcher/1.0",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("text/html")) {
        const text = await res.text();
        const confirmMatch = text.match(/confirm=([0-9a-zA-Z_-]+)/);
        if (confirmMatch) {
          return downloadWithRetry(`${url}&confirm=${confirmMatch[1]}`, maxRetries);
        }
      }

      return Buffer.from(await res.arrayBuffer());
    } catch (e) {
      if (attempt === maxRetries) throw e;
      console.log(`    Retry ${attempt}/${maxRetries} after error: ${e.message}`);
      await new Promise((r) => setTimeout(r, 1500));
    }
  }
}

async function main() {
  console.log(`\n======================================================`);
  console.log(`  DOWNLOADING & OPTIMIZING 50 SQUAD GROUP PHOTOS     `);
  console.log(`======================================================\n`);

  const albumItems = [];

  for (let i = 0; i < groupFiles.length; i++) {
    const item = groupFiles[i];
    const safeName = item.name.replace(/\.JPG$/i, ".jpg");
    const destPath = path.join(outputDir, safeName);
    const num = (i + 1).toString().padStart(2, "0");
    const codename = `GRP-${num}`;

    console.log(`[${i + 1}/${groupFiles.length}] Processing ${item.name} (${codename})...`);

    let dimensions = { width: 1920, height: 1280 };

    if (!fs.existsSync(destPath) || fs.statSync(destPath).size < 10000) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${item.id}`;
      try {
        const rawBuf = await downloadWithRetry(downloadUrl);
        const image = sharp(rawBuf);
        const meta = await image.metadata();

        const resized = await image
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 80, mozjpeg: true, progressive: true })
          .toFile(destPath);

        dimensions.width = resized.width || 1920;
        dimensions.height = resized.height || 1280;

        const kb = (fs.statSync(destPath).size / 1024).toFixed(1);
        console.log(`  ✓ Saved & optimized to ${safeName} (${kb} KB)`);
      } catch (err) {
        console.error(`  ✗ Error downloading ${item.name}: ${err.message}`);
      }
    } else {
      const kb = (fs.statSync(destPath).size / 1024).toFixed(1);
      console.log(`  ⚡ Already downloaded: ${safeName} (${kb} KB)`);
    }

    albumItems.push({
      id: codename,
      ref: `EVD-GRP-${num}`,
      title: `OPERASIONAL SKUAD ${num}`,
      subtitle: `Dokumentasi Formasi Taktis Solvera Class XII PPLG RPL 2`,
      filename: safeName,
      src: `/group/${safeName}`,
      date: "SEPTEMBER 2026",
      classification: "DECLASSIFIED // ARCHIVE",
      camera: "LUMIX / DSLR PRO RECON",
    });
  }

  // Write TypeScript album data file
  const tsContent = `export interface GroupPhoto {
  id: string;
  ref: string;
  title: string;
  subtitle: string;
  filename: string;
  src: string;
  date: string;
  classification: string;
  camera: string;
}

export const GROUP_ALBUM_PHOTOS: GroupPhoto[] = ${JSON.stringify(albumItems, null, 2)};
`;

  fs.writeFileSync("app/data/groupAlbum.ts", tsContent);
  console.log(`\n[SUCCESS] Generated app/data/groupAlbum.ts with ${albumItems.length} photos!`);
}

main().catch(console.error);
