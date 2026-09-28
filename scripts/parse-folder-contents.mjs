import fs from "node:fs";

function extractFiles(filename) {
  const content = fs.readFileSync(filename, "utf-8");
  // Find all file entries
  // Typically: [[null,"ID"],null,null,null,"image/jpeg",...[[["FILENAME",null,1]]]]
  const items = [];
  
  // Search for file IDs and filenames
  const regex = /\[\[null,"([a-zA-Z0-9_-]{25,45})"\][\s\S]*?\[\[\["([^"]+\.(?:jpe?g|png|webp|heic|JPG|PNG))"/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({ id: match[1], name: match[2] });
  }

  // Deduplicate by ID
  const unique = [];
  const seen = new Set();
  for (const item of items) {
    if (!seen.has(item.id)) {
      seen.add(item.id);
      unique.push(item);
    }
  }
  return unique;
}

const pasFotoFiles = extractFiles("scripts/pas_foto_ds4.json");
console.log(`\n=== EDIT PAS FOTO FILES (${pasFotoFiles.length}) ===`);
pasFotoFiles.forEach((f, i) => console.log(`${i + 1}. [${f.name}] -> ID: ${f.id}`));

const groupFiles = extractFiles("scripts/group_ds4.json");
console.log(`\n=== GROUP PHOTO FILES (${groupFiles.length}) ===`);
groupFiles.forEach((f, i) => console.log(`${i + 1}. [${f.name}] -> ID: ${f.id}`));

// Save manifest as JSON
fs.writeFileSync(
  "scripts/gdrive_manifest.json",
  JSON.stringify({ pasFoto: pasFotoFiles, group: groupFiles }, null, 2)
);
console.log("\nSaved manifest to scripts/gdrive_manifest.json");
