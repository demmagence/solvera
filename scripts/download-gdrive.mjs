#!/usr/bin/env node

/**
 * Solvera Class - Google Drive Photo Importer
 * 
 * Penggunaan:
 *   node scripts/download-gdrive.mjs "<LINK_GOOGLE_DRIVE>" [output_dir]
 * 
 * Contoh:
 *   node scripts/download-gdrive.mjs "https://drive.google.com/drive/folders/1xyzABC..."
 *   node scripts/download-gdrive.mjs "https://drive.google.com/file/d/1abcXYZ/view" public/squad
 * 
 * Opsi tambahan dengan Google Drive API Key (di .env.local):
 *   GDRIVE_API_KEY=AIzaSy...
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

// Load .env or .env.local if exists
function loadEnv() {
  const envFiles = [".env.local", ".env"];
  for (const envFile of envFiles) {
    const fullPath = path.join(rootDir, envFile);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, "utf-8");
      for (const line of content.split("\n")) {
        const match = line.trim().match(/^([^#=]+)=(.*)$/);
        if (match) {
          const key = match[1].trim();
          const val = match[2].trim().replace(/^["']|["']$/g, "");
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    }
  }
}

loadEnv();

function printBanner() {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║  SOLVERA CLASS INTEL - GOOGLE DRIVE PHOTO FETCHER (CLI)          ║
║  Classified Asset Retrieval Subsystem                            ║
╚══════════════════════════════════════════════════════════════════╝
`);
}

// Extract ID from any Google Drive link format
function parseDriveUrl(urlOrId) {
  if (!urlOrId) return null;
  const input = urlOrId.trim();

  // Pure ID
  if (/^[a-zA-Z0-9_-]{20,}$/.test(input)) {
    return { type: "unknown", id: input };
  }

  // Folder link
  const folderMatch = input.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) {
    return { type: "folder", id: folderMatch[1] };
  }

  // File / view link
  const fileMatch = input.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) {
    return { type: "file", id: fileMatch[1] };
  }

  // Open?id=...
  const idMatch = input.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch) {
    return { type: "file", id: idMatch[1] };
  }

  // u/0/folders/...
  const uFolder = input.match(/folders\/([a-zA-Z0-9_-]+)/);
  if (uFolder) {
    return { type: "folder", id: uFolder[1] };
  }

  return null;
}

// Download direct binary stream with redirect following
async function downloadFile(url, destPath) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) SolveraFetcher/1.0",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  }

  // Check if response is Google virus scan confirmation page
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    const htmlText = await res.text();
    // Look for confirm token
    const confirmMatch = htmlText.match(/confirm=([0-9a-zA-Z_-]+)/);
    if (confirmMatch) {
      const confirmUrl = `${url}&confirm=${confirmMatch[1]}`;
      return downloadFile(confirmUrl, destPath);
    }
  }

  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(arrayBuffer));
}

// Fetch files from folder using Drive API v3
async function fetchFolderViaApi(folderId, apiKey) {
  console.log(`[*] Connecting via Google Drive API with key...`);
  const query = encodeURIComponent(`'${folderId}' in parents and trashed = false and mimeType contains 'image/'`);
  const apiUrl = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,mimeType,size)&key=${apiKey}`;

  const res = await fetch(apiUrl);
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Google API Error (${res.status}): ${err}`);
  }

  const data = await res.json();
  return data.files || [];
}

async function main() {
  printBanner();

  const driveInput = process.argv[2];
  const targetDirName = process.argv[3] || "public/squad";
  const outputDir = path.resolve(rootDir, targetDirName);

  if (!driveInput) {
    console.log(`
Petunjuk Penggunaan:
  node scripts/download-gdrive.mjs "<LINK_GOOGLE_DRIVE>" [folder_tujuan]

Contoh:
  node scripts/download-gdrive.mjs "https://drive.google.com/drive/folders/1xyzABC..." public/squad
  node scripts/download-gdrive.mjs "https://drive.google.com/file/d/1AbCDeFgHi/view" public/squad

Keterangan:
  - folder_tujuan opsional, default: "public/squad"
  - Jika Anda memiliki GDRIVE_API_KEY, masukkan ke file .env.local untuk download folder otomatis:
    GDRIVE_API_KEY=AIzaSyYourApiKeyHere
`);
    process.exit(1);
  }

  const parsed = parseDriveUrl(driveInput);
  if (!parsed) {
    console.error(`[!] ERROR: Link Google Drive tidak valid: ${driveInput}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`[+] ID Terdeteksi: ${parsed.id} (Tipe: ${parsed.type})`);
  console.log(`[+] Direktori Tujuan: ${outputDir}\n`);

  const apiKey = process.env.GDRIVE_API_KEY;

  if (parsed.type === "folder" || parsed.type === "unknown") {
    if (apiKey) {
      try {
        const files = await fetchFolderViaApi(parsed.id, apiKey);
        console.log(`[+] Ditemukan ${files.length} foto di dalam folder Drive.\n`);

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const ext = path.extname(file.name) || ".jpg";
          const safeName = `${i + 1}${ext}`;
          const destPath = path.join(outputDir, safeName);

          console.log(`[${i + 1}/${files.length}] Mengunduh: ${file.name} -> ${safeName}...`);
          const downloadUrl = `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media&key=${apiKey}`;
          await downloadFile(downloadUrl, destPath);
          console.log(`    ✓ Selesai (${(fs.statSync(destPath).size / 1024 / 1024).toFixed(2)} MB)`);
        }
        console.log(`\n[SUCCESS] Seluruh foto (${files.length}) berhasil diunduh ke ${targetDirName}!`);
        return;
      } catch (err) {
        console.warn(`[!] API Download gagal: ${err.message}`);
        console.log(`[*] Mencoba metode download publik alternatif...`);
      }
    }

    // Public export method
    console.log(`[*] Mengunduh file dari folder publik via export URL...`);
    const directUrl = `https://drive.google.com/uc?export=download&id=${parsed.id}`;
    const destPath = path.join(outputDir, `drive-asset-${Date.now()}.jpg`);
    try {
      await downloadFile(directUrl, destPath);
      console.log(`[✓] File berhasil diunduh ke: ${destPath}`);
    } catch (e) {
      console.log(`
[INFO] Untuk mendownload satu folder penuh otomatis tanpa API key:
  1. Buat API key gratis di Google Cloud Console (Drive API enabled)
  2. Tambahkan ke .env.local:
     GDRIVE_API_KEY=AIzaSy...
  Atau berikan link per file individual foto kelas.`);
    }
  } else {
    // Single file download
    const directUrl = `https://drive.google.com/uc?export=download&id=${parsed.id}`;
    const fileName = `drive-photo-${parsed.id.slice(0, 6)}.jpg`;
    const destPath = path.join(outputDir, fileName);

    console.log(`[*] Mengunduh foto: ${directUrl}...`);
    try {
      await downloadFile(directUrl, destPath);
      console.log(`[✓] Selesai! Tersimpan di: ${destPath} (${(fs.statSync(destPath).size / 1024 / 1024).toFixed(2)} MB)`);
    } catch (err) {
      console.error(`[!] Gagal mengunduh file: ${err.message}`);
    }
  }
}

main().catch((err) => {
  console.error(`[FATAL]`, err);
  process.exit(1);
});
