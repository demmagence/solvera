import fs from "node:fs";

async function run() {
  const url = "https://drive.google.com/drive/folders/1TXy0pOyPPk7-PyroQPt42R39LoeDQ3iV";
  console.log("Fetching Google Drive folder:", url);
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
  });

  const html = await res.text();
  console.log("Response status:", res.status);
  console.log("HTML length:", html.length);
  fs.writeFileSync("scripts/gdrive_page.html", html);

  console.log("Contains 'edit pas foto'?", html.toLowerCase().includes("edit pas foto"));
  console.log("Contains 'group'?", html.toLowerCase().includes("group"));

  // Check for embedded JSON state in Drive
  // Often in _DRIVE_ivd or window['_initData']
  const ivdMatch = html.match(/_DRIVE_ivd\s*=\s*'([^']+)'/);
  if (ivdMatch) {
    console.log("Found _DRIVE_ivd data!");
    try {
      const decoded = ivdMatch[1].replace(/\\x([0-9A-Fa-f]{2})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
      fs.writeFileSync("scripts/gdrive_ivd.txt", decoded);
      console.log("Saved _DRIVE_ivd decoded, length:", decoded.length);
    } catch (e) {
      console.error("Decode error:", e.message);
    }
  }

  // Look for any string occurrences of subfolders/files
  const regex = /"([a-zA-Z0-9_-]{28,35})",\[.*?\],"(.*?)"/g;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    console.log(`Item: ID=${match[1]} Name=${match[2]}`);
    count++;
    if (count > 20) break;
  }
}

run().catch(console.error);
