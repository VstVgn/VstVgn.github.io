import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, "..");
const siteJsPath = path.join(rootDir, "site.js");
const reportPath = path.join(scriptDir, "journal-metrics-review.json");
const applyMode = process.argv.includes("--apply");

const journals = [
  { name: "Optica", source: "https://www.ablesci.com/journal/detail?id=rA1ZMr" },
  { name: "Optics Letters", source: "https://www.ablesci.com/journal/detail?id=Dbljyp" },
  { name: "High Power Laser Science and Engineering", source: "https://www.ablesci.com/journal/detail?id=pB4gxD" },
  { name: "Physics of Plasmas", source: "https://www.ablesci.com/journal/detail?id=rRQbKD" },
  { name: "Ultrafast Science", source: "https://www.ablesci.com/journal/detail?id=pBoyX5" },
  { name: "ACS Applied Materials & Interfaces", source: "https://www.ablesci.com/journal/detail?id=95EBBD" }
];

const decodeHtml = value => value
  .replace(/&nbsp;|&#160;/gi, " ")
  .replace(/&amp;/gi, "&")
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/&lt;/gi, "<")
  .replace(/&gt;/gi, ">");

function htmlToText(html) {
  return decodeHtml(html)
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(?:div|p|tr|td|th|li|h\d)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s+/g, "\n")
    .trim();
}

function parseJournalPage(html, expectedName) {
  const text = htmlToText(html);
  if (!text.includes(expectedName)) throw new Error("journal name was not found in the response");

  const impactMatch = text.match(/(20\d{2})最新影响因子[\s\S]{0,260}?与上一年的差值\s*\|?\s*([0-9]+(?:\.[0-9]+)?)/);
  const risingMatch = text.match(/(20\d{2})年新锐分区[\s\S]{0,1200}?(?=20\d{2}年WOS期刊分区)/);
  const jcrMatch = text.match(/20\d{2}年WOS期刊分区[\s\S]{0,1200}?SCIE\s+(Q[1-4])/i);
  if (!impactMatch || !risingMatch || !jcrMatch) throw new Error("one or more metrics could not be parsed");

  const risingBlock = risingMatch[0];
  const risingZone = risingBlock.match(/([1-4])区[^\n|]*(?:\||\n)/)?.[1]
    || risingBlock.match(/([1-4])区/)?.[1];
  if (!risingZone) throw new Error("new-rising quartile could not be parsed");

  return {
    impact: impactMatch[2],
    jcr: jcrMatch[1].toUpperCase(),
    rising: `Q${risingZone}`,
    top: /TOP期刊[\s\S]{0,500}?\b是\b/.test(risingBlock) || /\n是(?:\s|\||$)/.test(risingBlock),
    dataYear: Number(impactMatch[1])
  };
}

function readCurrentMetrics(source) {
  const block = source.match(/const journalMetrics = \{([\s\S]*?)\n  \};/);
  if (!block) throw new Error("journalMetrics block was not found in site.js");
  const entries = {};
  const pattern = /^\s*(?:"([^"]+)"|([A-Za-z][\w ]*)):\s*\{\s*impact:\s*"([^"]+)",\s*jcr:\s*"([^"]+)",\s*rising:\s*"([^"]+)",\s*top:\s*(true|false)\s*\},?$/gm;
  for (const match of block[1].matchAll(pattern)) {
    entries[match[1] || match[2].trim()] = { impact: match[3], jcr: match[4], rising: match[5], top: match[6] === "true" };
  }
  return entries;
}

function renderMetrics(metrics) {
  const rows = journals.map(({ name }) => {
    const value = metrics[name];
    const key = /^[A-Za-z_$][\w$]*$/.test(name) ? name : JSON.stringify(name);
    return `    ${key}: { impact: ${JSON.stringify(value.impact)}, jcr: ${JSON.stringify(value.jcr)}, rising: ${JSON.stringify(value.rising)}, top: ${value.top} }`;
  });
  return `const journalMetrics = {\n${rows.join(",\n")}\n  };`;
}

async function fetchCandidate({ name, source }) {
  const response = await fetch(source, {
    headers: { "User-Agent": "ZiyaoSuAcademicWebsite/1.0 (+https://vstvgn.github.io/)" },
    redirect: "follow",
    signal: AbortSignal.timeout(20000)
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return { ...parseJournalPage(await response.text(), name), source };
}

async function createReview() {
  const siteSource = await readFile(siteJsPath, "utf8");
  const current = readCurrentMetrics(siteSource);
  const results = {};

  for (const journal of journals) {
    process.stdout.write(`Checking ${journal.name} ... `);
    try {
      const candidate = await fetchCandidate(journal);
      const existing = current[journal.name];
      const changed = ["impact", "jcr", "rising", "top"].some(key => existing?.[key] !== candidate[key]);
      results[journal.name] = { current: existing, candidate, changed };
      console.log(changed ? "change found" : "unchanged");
    } catch (error) {
      results[journal.name] = { current: current[journal.name], candidate: null, changed: false, error: error.message };
      console.log(`failed: ${error.message}`);
    }
  }

  const report = { generatedAt: new Date().toISOString(), results };
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(`\nReview file written to ${path.relative(rootDir, reportPath)}`);
  console.log("Check every candidate value, then run: node scripts/update-journal-metrics.mjs --apply");
}

async function applyReview() {
  const report = JSON.parse(await readFile(reportPath, "utf8"));
  const missing = journals.filter(({ name }) => !report.results?.[name]?.candidate);
  if (missing.length) throw new Error(`review is incomplete; missing candidates: ${missing.map(item => item.name).join(", ")}`);

  const metrics = Object.fromEntries(journals.map(({ name }) => {
    const { impact, jcr, rising, top } = report.results[name].candidate;
    return [name, { impact, jcr, rising, top }];
  }));
  let siteSource = await readFile(siteJsPath, "utf8");
  siteSource = siteSource.replace(/const journalMetrics = \{[\s\S]*?\n  \};/, renderMetrics(metrics));
  await writeFile(siteJsPath, siteSource, "utf8");

  const now = new Date();
  const enDate = new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(now);
  const zhDate = `${now.getFullYear()} 年 ${now.getMonth() + 1} 月 ${now.getDate()} 日`;
  const stamp = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0"), String(now.getHours()).padStart(2, "0"), String(now.getMinutes()).padStart(2, "0")].join("");

  for (const page of ["index.html", "publications.html", "life.html"]) {
    const pagePath = path.join(rootDir, page);
    let html = await readFile(pagePath, "utf8");
    html = html.replace(/site\.js\?v=[^"']+/g, `site.js?v=${stamp}`);
    if (page === "index.html") {
      html = html.replace(/data-en="Last updated · [^"]+" data-zh="最近更新 · [^"]+">[^<]+<\/p>/, `data-en="Last updated · ${enDate}" data-zh="最近更新 · ${zhDate}">Last updated · ${enDate}</p>`);
    }
    await writeFile(pagePath, html, "utf8");
  }
  console.log("Metrics, cache versions, and the homepage update date were updated.");
}

try {
  if (applyMode) await applyReview();
  else await createReview();
} catch (error) {
  console.error(`Update failed: ${error.message}`);
  process.exitCode = 1;
}
