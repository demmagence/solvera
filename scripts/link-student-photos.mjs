import fs from "node:fs";

let content = fs.readFileSync("app/data/students.ts", "utf-8");

// For each student id AGT-01 to AGT-35 (except AGT-20)
for (let i = 1; i <= 35; i++) {
  const numStr = i.toString().padStart(2, "0");
  const agtId = `AGT-${numStr}`;
  const photoFile = `public/students/agt-${numStr}.jpg`;

  if (fs.existsSync(photoFile)) {
    // Add photo property before status or inside the block
    const idRegex = new RegExp(`(id:\\s*"${agtId}"[\\s\\S]*?status:\\s*"ACTIVE",)`);
    if (idRegex.test(content) && !content.includes(`photo: "/students/agt-${numStr}.jpg"`)) {
      content = content.replace(idRegex, `$1\n    photo: "/students/agt-${numStr}.jpg",`);
    }
  }
}

fs.writeFileSync("app/data/students.ts", content);
console.log("Updated app/data/students.ts with student photos!");
