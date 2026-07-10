import seoPagesJson from "./seo-pages.json";

export type SeoPageKind = "regional" | "intent";

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoPage {
  slug: string;
  kind: SeoPageKind;
  canonicalIntent: string;
  title: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  hero: string;
  localContext: string;
  risks: string[];
  approach: string;
  deliverables: string[];
  process: string[];
  areaServed: string[];
  updatedAt: string;
  faqs: SeoFaq[];
  relatedSlugs: string[];
}

export const SITE_URL = "https://bouwbeveiligingnederland.nl";
export const EXECUTOR = {
  name: "Praesidion Security B.V.",
  url: "https://www.praesidion.eu/",
} as const;

export const seoPages: SeoPage[] = seoPagesJson as SeoPage[];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}

export function getRelatedSeoPages(page: SeoPage): SeoPage[] {
  return page.relatedSlugs
    .map((slug) => getSeoPage(slug))
    .filter((related): related is SeoPage => Boolean(related));
}
