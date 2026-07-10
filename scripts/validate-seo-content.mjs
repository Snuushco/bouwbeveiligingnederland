import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.resolve(__dirname, "../app/lib/seo-pages.json");

const requiredStringFields = [
  "slug",
  "kind",
  "canonicalIntent",
  "title",
  "metaDescription",
  "h1",
  "kicker",
  "hero",
  "localContext",
  "approach",
  "updatedAt",
];

const requiredArrayFields = [
  "risks",
  "deliverables",
  "process",
  "areaServed",
  "faqs",
  "relatedSlugs",
];

const stopWords = new Set([
  "aan",
  "als",
  "bij",
  "de",
  "een",
  "en",
  "er",
  "het",
  "in",
  "is",
  "kan",
  "met",
  "naar",
  "niet",
  "of",
  "om",
  "op",
  "te",
  "van",
  "voor",
  "waar",
  "worden",
  "wordt",
  "zijn",
  "die",
  "dit",
  "dat",
  "door",
  "ook",
  "per",
  "we",
]);

function fail(message) {
  return { level: "error", message };
}

function warn(message) {
  return { level: "warning", message };
}

function tokenize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .split(/[^a-z0-9]+/u)
    .filter((token) => token.length > 3 && !stopWords.has(token));
}

function textForSimilarity(page) {
  return [
    page.hero,
    page.localContext,
    page.approach,
    ...(page.risks ?? []),
    ...(page.deliverables ?? []),
    ...(page.process ?? []),
    ...((page.faqs ?? []).flatMap((faq) => [faq.question, faq.answer])),
  ].join(" ");
}

function jaccard(a, b) {
  const left = new Set(tokenize(a));
  const right = new Set(tokenize(b));
  const union = new Set([...left, ...right]);
  if (union.size === 0) return 0;

  let intersection = 0;
  for (const token of left) {
    if (right.has(token)) intersection += 1;
  }

  return intersection / union.size;
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

function checkUniqueness(pages, field, label) {
  const findings = [];
  const seen = new Map();

  for (const page of pages) {
    const value = page[field];
    if (seen.has(value)) {
      findings.push(fail(`${label} is niet uniek: "${value}" op ${seen.get(value)} en ${page.slug}`));
    } else {
      seen.set(value, page.slug);
    }
  }

  return findings;
}

function validatePage(page, allSlugs) {
  const findings = [];

  for (const field of requiredStringFields) {
    if (typeof page[field] !== "string" || page[field].trim().length === 0) {
      findings.push(fail(`${page.slug ?? "(zonder slug)"} mist verplicht tekstveld ${field}`));
    }
  }

  if (!["regional", "intent"].includes(page.kind)) {
    findings.push(fail(`${page.slug} heeft ongeldige kind: ${page.kind}`));
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(page.updatedAt ?? "")) {
    findings.push(fail(`${page.slug} heeft geen geldige updatedAt YYYY-MM-DD`));
  }

  for (const field of requiredArrayFields) {
    if (!Array.isArray(page[field]) || page[field].length === 0) {
      findings.push(fail(`${page.slug} mist verplichte array ${field}`));
    }
  }

  if ((page.hero ?? "").split(/\s+/).length < 30) {
    findings.push(fail(`${page.slug} heeft te korte hero`));
  }

  if ((page.localContext ?? "").split(/\s+/).length < 30) {
    findings.push(fail(`${page.slug} heeft te korte localContext`));
  }

  if ((page.approach ?? "").split(/\s+/).length < 25) {
    findings.push(fail(`${page.slug} heeft te korte approach`));
  }

  if ((page.risks ?? []).length < 5) {
    findings.push(fail(`${page.slug} moet minimaal 5 risico's hebben`));
  }

  if ((page.deliverables ?? []).length < 5) {
    findings.push(fail(`${page.slug} moet minimaal 5 deliverables hebben`));
  }

  if ((page.process ?? []).length < 5) {
    findings.push(fail(`${page.slug} moet minimaal 5 processtappen hebben`));
  }

  if ((page.faqs ?? []).length < 3) {
    findings.push(fail(`${page.slug} moet minimaal 3 FAQ's hebben`));
  }

  for (const faq of page.faqs ?? []) {
    if (!faq.question || !faq.answer) {
      findings.push(fail(`${page.slug} heeft FAQ zonder question of answer`));
    }
  }

  for (const relatedSlug of page.relatedSlugs ?? []) {
    if (!allSlugs.has(relatedSlug)) {
      findings.push(fail(`${page.slug} verwijst naar onbekende relatedSlug ${relatedSlug}`));
    }
    if (relatedSlug === page.slug) {
      findings.push(fail(`${page.slug} verwijst naar zichzelf in relatedSlugs`));
    }
  }

  if ((page.relatedSlugs ?? []).length < 3) {
    findings.push(fail(`${page.slug} moet minimaal 3 relatedSlugs hebben`));
  }

  if (page.kind === "regional" && !(page.areaServed ?? []).includes("Limburg")) {
    findings.push(fail(`${page.slug} regionale pagina mist Limburg in areaServed`));
  }

  return findings;
}

const raw = await readFile(sourcePath, "utf8");
const pages = JSON.parse(raw);
const findings = [];

if (!Array.isArray(pages)) {
  throw new Error("seo-pages.json moet een array zijn");
}

const allSlugs = new Set(pages.map((page) => page.slug));

findings.push(...checkUniqueness(pages, "slug", "Slug"));
findings.push(...checkUniqueness(pages, "title", "Title"));
findings.push(...checkUniqueness(pages, "canonicalIntent", "Canonical intent"));

for (const page of pages) {
  findings.push(...validatePage(page, allSlugs));
}

const regionalPages = pages.filter((page) => page.kind === "regional");
const pairScores = [];

for (let i = 0; i < regionalPages.length; i += 1) {
  for (let j = i + 1; j < regionalPages.length; j += 1) {
    const score = jaccard(
      textForSimilarity(regionalPages[i]),
      textForSimilarity(regionalPages[j]),
    );
    pairScores.push({
      left: regionalPages[i].slug,
      right: regionalPages[j].slug,
      score,
    });
  }
}

const medianRegionalJaccard = pairScores.length
  ? median(pairScores.map((pair) => pair.score))
  : 0;

if (medianRegionalJaccard >= 0.35) {
  findings.push(
    fail(`Regionale cluster mediane token-set Jaccard is ${medianRegionalJaccard.toFixed(3)} en moet onder 0.350 blijven`),
  );
}

for (const pair of pairScores) {
  if (pair.score >= 0.5) {
    findings.push(
      warn(`Hoge regionale similarity ${pair.score.toFixed(3)} tussen ${pair.left} en ${pair.right}`),
    );
  }
}

const errors = findings.filter((finding) => finding.level === "error");
const warnings = findings.filter((finding) => finding.level === "warning");

for (const finding of findings) {
  const prefix = finding.level === "error" ? "ERROR" : "WARN";
  console.log(`${prefix}: ${finding.message}`);
}

console.log(`SEO pages gevalideerd: ${pages.length}`);
console.log(`Regionale pagina's: ${regionalPages.length}`);
console.log(`Regionale mediane token-set Jaccard: ${medianRegionalJaccard.toFixed(3)}`);

if (warnings.length > 0) {
  console.log(`Warnings: ${warnings.length}`);
}

if (errors.length > 0) {
  console.error(`Validatie mislukt met ${errors.length} fout(en).`);
  process.exit(1);
}
