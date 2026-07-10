import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  EXECUTOR,
  SITE_URL,
  getRelatedSeoPages,
  getSeoPage,
  seoPages,
  type SeoPage,
} from "../lib/seo-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return { title: "Niet gevonden" };
  }

  const canonical = `${SITE_URL}/${page.slug}`;

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: canonical,
      type: "website",
      locale: "nl_NL",
      siteName: "Bouwbeveiliging Nederland",
    },
  };
}

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00.000Z`));
}

function buildSchemas(page: SeoPage) {
  const pageUrl = `${SITE_URL}/${page.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.metaDescription,
      serviceType: page.canonicalIntent,
      provider: {
        "@type": "Organization",
        name: EXECUTOR.name,
        url: EXECUTOR.url,
      },
      areaServed: page.areaServed.map((area) => ({
        "@type": "Place",
        name: area,
      })),
      url: pageUrl,
      dateModified: page.updatedAt,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: pageUrl,
        },
      ],
    },
  ];
}

export default async function SeoLandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const relatedPages = getRelatedSeoPages(page);
  const schemas = buildSchemas(page);

  return (
    <div className="bg-slate-50 text-slate-900">
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(schema) }}
        />
      ))}

      <section className="bg-navy-950 pt-28 text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-300">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-orange-300">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{page.h1}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
                {page.kicker}
              </p>
              <h1 className="mt-4 max-w-4xl break-words text-[2.1rem] font-black leading-tight text-white sm:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                {page.hero}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-950/20 transition-colors hover:bg-orange-600"
                >
                  Intake aanvragen
                </Link>
                <a
                  href="tel:+31462402401"
                  className="rounded-lg border border-orange-300 px-5 py-3 font-semibold text-orange-100 transition-colors hover:bg-white/10"
                >
                  046 240 2401
                </a>
              </div>
            </div>

            <aside className="border border-white/15 bg-white/8 p-6 shadow-2xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-200">
                Uitvoering
              </p>
              <p className="mt-3 text-xl font-bold">{EXECUTOR.name}</p>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Praesidion Security verzorgt de locatie-intake, planning en
                operationele uitvoering van de bouwplaatsbeveiliging.
              </p>
              <p className="mt-5 text-sm text-slate-300">
                Laatst bijgewerkt:{" "}
                <time dateTime={page.updatedAt}>{formatDate(page.updatedAt)}</time>
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">
              Context
            </p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">
              Wat maakt deze aanvraag specifiek?
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">{page.localContext}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                Operationele risico&apos;s
              </h2>
              <ul className="mt-6 space-y-4">
                {page.risks.map((risk) => (
                  <li key={risk} className="border-l-4 border-orange-500 bg-white p-4 text-slate-700 shadow-sm">
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-navy-950 p-6 text-white">
              <h2 className="text-2xl font-black">Aanpak</h2>
              <p className="mt-5 leading-8 text-slate-200">{page.approach}</p>
              <div className="mt-8 border-t border-white/15 pt-6">
                <h3 className="font-bold text-orange-200">Werkgebied</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {page.areaServed.map((area) => (
                    <span key={area} className="border border-white/15 px-3 py-1 text-sm text-slate-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-slate-950">
              Concrete deliverables
            </h2>
            <ul className="mt-6 space-y-3">
              {page.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-orange-500" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-950">
              Intake en werkwijze
            </h2>
            <ol className="mt-6 space-y-3">
              {page.process.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-3 text-slate-700">
                  <span className="flex h-9 w-9 items-center justify-center bg-orange-500 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-950">
            Veelgestelde vragen
          </h2>
          <div className="mt-6 space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer font-bold text-slate-950">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">
              Volgende stap
            </p>
            <h2 className="mt-3 text-3xl font-black">Bespreek de bouwfase en risico&apos;s</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Deel locatie, planning, toegangspunten, waardevolle goederen en
              gewenste rapportage. Dan kan Praesidion Security beoordelen welke
              inzet, instructie en rapportage bij de bouwfase passen.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Plan intake
            </Link>
          </div>

          <div>
            <h2 className="text-2xl font-black">Gerelateerde pagina&apos;s</h2>
            <div className="mt-5 grid gap-3">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="border border-white/15 p-4 transition-colors hover:border-orange-300 hover:bg-white/5"
                >
                  <span className="block text-sm uppercase tracking-[0.12em] text-orange-200">
                    {related.kind === "regional" ? "Regio" : "Beveiligingsvraag"}
                  </span>
                  <span className="mt-1 block font-bold text-white">{related.h1}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
