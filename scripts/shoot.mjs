import { mkdirSync } from "node:fs";
import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = "C:/Users/PC/AppData/Local/Temp/opencode/shots";
mkdirSync(OUT, { recursive: true });

const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const browser = await puppeteer.launch({
  executablePath: chromePath,
  headless: true,
  args: ["--hide-scrollbars", "--disable-gpu", "--no-first-run"],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 2500));

const full = path.join(OUT, "full-desktop.png");
await page.screenshot({ path: full, fullPage: true });

for (const id of ["about", "skills", "projects", "contact"]) {
  await page.evaluate((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant", block: "start" });
  }, id);
  await new Promise((r) => setTimeout(r, 1400));
  await page.screenshot({ path: path.join(OUT, `${id}.png`) });
}

// English version
await page.evaluate(() => window.scrollTo(0, 0));
await page.evaluate(() => {
  const buttons = [...document.querySelectorAll("button")];
  buttons.find((b) => b.textContent?.trim() === "EN")?.click();
});
await new Promise((r) => setTimeout(r, 1200));
const enInfo = await page.evaluate(() => ({
  lang: document.documentElement.lang,
  dir: document.documentElement.dir,
  h1: document.querySelector("h1")?.textContent,
  nav: [...document.querySelectorAll("header nav a")].map((a) => a.textContent),
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
}));
await page.screenshot({ path: path.join(OUT, "en-hero.png") });

// Mobile (Persian)
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
await page.goto("http://localhost:3000/?lang=fa", { waitUntil: "networkidle0" });
await new Promise((r) => setTimeout(r, 2500));
await page.screenshot({ path: path.join(OUT, "mobile-hero.png") });
const mobileInfo = await page.evaluate(() => ({
  lang: document.documentElement.lang,
  overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  scrollWidth: document.documentElement.scrollWidth,
  clientWidth: document.documentElement.clientWidth,
}));
await page.evaluate(() => document.getElementById("skills")?.scrollIntoView({ behavior: "instant", block: "start" }));
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: path.join(OUT, "mobile-skills.png") });

await page.evaluate(() => document.getElementById("projects")?.scrollIntoView({ behavior: "instant", block: "start" }));
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: path.join(OUT, "mobile-projects.png") });

const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});

await browser.close();
console.log(JSON.stringify({ enInfo, mobileInfo, consoleErrors, out: OUT }, null, 2));
