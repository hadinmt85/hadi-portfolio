import { writeFileSync, mkdirSync } from "node:fs";

const lines = [
  ["F1", 22, 60, 770, "Hadi Nemati"],
  ["F2", 11, 60, 750, "Front-end Developer  |  React / Next.js / TypeScript"],
  ["F2", 10, 60, 730, "Ardabil, Iran  |  0992 343 5142  |  namatihadi7@gmail.com"],
  ["F2", 10, 60, 716, "github.com/hadinmt85  |  t.me/hadinmt85"],
  ["F1", 12, 60, 680, "Profile"],
  ["F2", 10, 60, 662, "Front-end developer with 3+ years of focus on building fast, accessible and"],
  ["F2", 10, 60, 648, "maintainable web interfaces. Focused on React, Next.js and design systems."],
  ["F1", 12, 60, 610, "Skills"],
  ["F2", 10, 60, 592, "React, Next.js, TypeScript, JavaScript, Tailwind CSS, CSS/SCSS,"],
  ["F2", 10, 60, 578, "Motion & Animation, Figma, Git, Node.js, Vitest, Playwright, Vercel."],
  ["F1", 12, 60, 540, "Experience"],
  ["F2", 10, 60, 522, "Senior Front-end Developer - Product team (2023 - now)"],
  ["F2", 10, 60, 508, "Front-end Developer - Design studio (2021 - 2023)"],
  ["F2", 10, 60, 494, "Junior Front-end Developer - Agency (2019 - 2021)"],
  ["F1", 12, 60, 450, "Selected work"],
  ["F2", 10, 60, 432, "Product Store, License Market Landing, Personal Portfolio (all on GitHub)"],
  ["F2", 9, 60, 80, "This is a placeholder CV. Replace public/resume.pdf with your real file."],
];

let content = "";
for (const [font, size, x, y, text] of lines) {
  content += `BT /${font} ${size} Tf ${x} ${y} Td (${String(text).replace(/([()\\])/g, "\\$1")}) Tj ET\n`;
}

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}endstream`,
];

let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
const offsets = [0];
objects.forEach((body, index) => {
  offsets.push(Buffer.byteLength(pdf, "latin1"));
  pdf += `${index + 1} 0 obj\n${body}\nendobj\n`;
});

const startxref = Buffer.byteLength(pdf, "latin1");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

mkdirSync("public", { recursive: true });
writeFileSync("public/resume.pdf", Buffer.from(pdf, "latin1"));
console.log("resume.pdf written:", Buffer.byteLength(pdf, "latin1"), "bytes");
