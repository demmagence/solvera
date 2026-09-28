#!/usr/bin/env node

/**
 * Solvera Class - Tactical Image Compression Utility
 * Compresses oversized photos in public/squad using sharp.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const squadDir = path.join(rootDir, "public", "squad");

async function main() {
  console.log(`[+] Starting image compression in: ${squadDir}`);
  
  let sharp;
  try {
    const sharpModule = await import("sharp");
    sharp = sharpModule.default;
  } catch (err) {
    console.error(`[!] sharp is not available: ${err.message}`);
    process.exit(1);
  }

  const files = fs.readdirSync(squadDir).filter((f) => /\.(jpe?g|png)$/i.test(f));
  let totalSaved = 0;

  for (const file of files) {
    const filePath = path.join(squadDir, file);
    const origSize = fs.statSync(filePath).size;
    
    // Only compress if larger than 500KB
    if (origSize > 500 * 1024) {
      console.log(`\nCompressing: ${file} (${(origSize / 1024 / 1024).toFixed(2)} MB)...`);
      const tempPath = path.join(squadDir, `temp_${file}`);

      try {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 82, progressive: true, mozjpeg: true })
          .toFile(tempPath);

        const newSize = fs.statSync(tempPath).size;
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);

        const saved = origSize - newSize;
        totalSaved += saved;
        console.log(`✓ Reduced to ${(newSize / 1024 / 1024).toFixed(2)} MB (Saved: ${(saved / 1024 / 1024).toFixed(2)} MB)`);
      } catch (err) {
        console.error(`Failed to compress ${file}:`, err.message);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    } else {
      console.log(`Skipping: ${file} (Already optimized: ${(origSize / 1024).toFixed(1)} KB)`);
    }
  }

  console.log(`\n========================================`);
  console.log(`[SUCCESS] Total bandwidth saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log(`========================================`);
}

main().catch(console.error);
