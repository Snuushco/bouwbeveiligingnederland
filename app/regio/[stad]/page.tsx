import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ stad: string }>;
};

interface RegioData {
  naam: string;
  slug: string;
  provincie: string;
  intro: string;
  context: string;
  projecten: string[];
  features: string[];
}

const regios: RegioData[] = [
  {
    naam: "Maastricht",
    slug: "maastricht",
    provincie: "Limburg",
    intro:
      "Als hoofdstad van Limburg kent Maastricht een bloeiende bouwsector. Van het MUMC+ tot woningbouwprojecten in Belvédère — Maastricht bouwt.",
    context:
      "Maastricht is een bruisende stad met veel bouwactiviteit. Het Belvédère-gebied wordt getransformeerd tot een moderne stadswijk, het MUMC+ breidt uit, en in diverse wijken worden woningbouwprojecten gerealiseerd. Deze bouwactiviteit vraagt om professionele beveiliging.",
    projecten: [
      "Gebiedsontwikkeling Belvédère",
      "Uitbreiding MUMC+",
      "Woningbouw Randwyck",
      "Kantoorontwikkeling Céramique",
      "Infrastructuurwerken A2-tunnel",
    ],
    features: [
      "Korte aanrijtijden vanuit ons kantoor in Limburg",
      "Kennis van lokale regelgeving en vergunningen",
      "Samenwerking met Maastrichtse bouwbedrijven",
      "Ervaring met binnenstedelijke projecten",
    ],
  },
  {
    naam: "Heerlen",
    slug: "heerlen",
    provincie: "Limburg",
    intro:
      "Heerlen transformeert. Van de IBA Parkstad projecten tot herstructurering van de binnenstad — er wordt volop gebouwd en dat vraagt om beveiliging.",
    context:
      "De regio Parkstad Limburg, met Heerlen als centrum, ondergaat een grote transformatie. Internationale Bau Ausstellung (IBA) projecten, de herstructurering van de binnenstad en nieuwe woningbouwprojecten zorgen voor veel bouwactiviteit. Deze projecten, vaak in stedelijk gebied, vragen om zorgvuldige beveiliging.",
    projecten: [
      "IBA Parkstad projecten",
      "Herstructurering binnenstad Heerlen",
      "Maankwartier fase 2",
      "Woningbouw Hoensbroek",
      "Bedrijventerrein Avantis",
    ],
    features: [
      "Ervaring met IBA-gerelateerde projecten",
      "Kennis van de Parkstad-regio",
      "Snelle inzetbaarheid in heel Parkstad",
      "Samenwerking met lokale stakeholders",
    ],
  },
  {
    naam: "Sittard",
    slug: "sittard",
    provincie: "Limburg",
    intro:
      "Sittard-Geleen is een dynamische gemeente met grote industrie en groeiende woningbouw. Van Chemelot tot de binnenstad — beveiliging is essentieel.",
    context:
      "De gemeente Sittard-Geleen combineert industriële bedrijvigheid rondom Chemelot met stedelijke ontwikkeling. Het Chemelot-terrein, een van de grootste chemieterreinen van Europa, genereert veel bouwactiviteit. Daarnaast worden in Sittard en Geleen diverse woning- en kantoorprojecten gerealiseerd.",
    projecten: [
      "Uitbreidingen Chemelot Campus",
      "Woningbouw Sittard-centrum",
      "Herontwikkeling Geleen-Zuid",
      "Bedrijventerrein Holtum-Noord",
      "Infrastructuurwerken A2/A76",
    ],
    features: [
      "Ervaring met industriële beveiliging (Chemelot)",
      "Kennis van veiligheidseisen in de chemiesector",
      "Snelle inzetbaarheid in Westelijke Mijnstreek",
      "Combinatie van bouw- en industriebeveiliging",
    ],
  },
  {
    naam: "Roermond",
    slug: "roermond",
    provincie: "Limburg",
    intro:
      "Roermond groeit. Met grote retailprojecten, woningbouw en infrastructuurwerken is professionele bouwbeveiliging onmisbaar.",
    context:
      "Roermond is een groeiende stad aan de Maas met significante bouwactiviteit. Van uitbreidingen bij het Designer Outlet tot nieuwe woonwijken en de dijkversterkingsprojecten langs de Maas — Roermond bouwt op vele fronten. De combinatie van retail, woningbouw en waterwerken maakt de stad bijzonder interessant voor bouwbeveiliging.",
    projecten: [
      "Uitbreiding Designer Outlet Roermond",
      "Dijkversterking langs de Maas",
      "Woningbouw ECI-gebied",
      "Bedrijventerrein Roerstreek",
      "Herontwikkeling stationsgebied",
    ],
    features: [
      "Strategische ligging in Midden-Limburg",
      "Ervaring met dijkversterkingsprojecten",
      "Kennis van retail-bouwbeveiliging",
      "Snelle uitruk voor alarmopvolging",
    ],
  },
  {
    naam: "Venlo",
    slug: "venlo",
    provincie: "Limburg",
    intro:
      "Venlo is het logistieke hart van Limburg. Grote distributiecentra, Greenport en grensoverschrijdende projecten vragen om professionele beveiliging.",
    context:
      "Venlo en omgeving is een van de belangrijkste logistieke hubs van Nederland. De bouw van distributiecentra, de ontwikkeling van Greenport Venlo en diverse woningbouwprojecten zorgen voor continue bouwactiviteit. De grensligging brengt extra beveiligingsuitdagingen met zich mee.",
    projecten: [
      "Distributiecentra Trade Port Noord",
      "Greenport Venlo ontwikkeling",
      "Kazernekwartier",
      "Dijkversterking Well",
      "Woningbouw Venlo-Noord",
    ],
    features: [
      "Ervaring met logistieke bouwprojecten",
      "Kennis van grensoverschrijdende problematiek",
      "Samenwerking met Greenport stakeholders",
      "Snelle inzetbaarheid in Noord-Limburg",
    ],
  },
  {
    naam: "Eindhoven",
    slug: "eindhoven",
    provincie: "Noord-Brabant",
    intro:
      "Eindhoven, de technologiehoofdstad van Nederland, kent een explosieve groei in bouwprojecten. Van Brainport tot woonwijken — beveiliging is cruciaal.",
    context:
      "Eindhoven is een van de snelst groeiende steden van Nederland. De Brainport-regio trekt enorme investeringen aan, wat resulteert in grootschalige bouwprojecten: van het ASML-district tot nieuwe woonwijken en de transformatie van Strijp-S. Deze projecten vertegenwoordigen grote waarden en vragen om professionele beveiliging.",
    projecten: [
      "ASML district en campus uitbreiding",
      "Transformatie Strijp-S",
      "Woningbouw Meerhoven",
      "Eindhoven Airport uitbreiding",
      "District-E ontwikkeling",
    ],
    features: [
      "Ervaring met high-tech bouwprojecten",
      "Kennis van Brainport beveiligingseisen",
      "Inzetbaarheid vanuit Limburg naar Eindhoven",
      "Combinatie van fysieke en technische beveiliging",
    ],
  },
  {
    naam: "Amsterdam",
    slug: "amsterdam",
    provincie: "Noord-Holland",
    intro:
      "Amsterdam is de grootste bouwplaats van Nederland. Van Haven-Stad tot de Noord/Zuidlijn — de hoofdstad bouwt non-stop en heeft beveiliging nodig.",
    context:
      "Amsterdam kent de grootste bouwopgave van Nederland. Tienduizenden woningen worden gebouwd in Haven-Stad, Sluisbuurt en andere ontwikkelgebieden. Daarnaast worden kantoren, hotels en infrastructuur gerealiseerd. De schaal en waarde van deze projecten maken professionele beveiliging essentieel.",
    projecten: [
      "Haven-Stad gebiedsontwikkeling",
      "Sluisbuurt IJburg",
      "Zuidas verdere ontwikkeling",
      "Woningbouw Amsterdam-Noord",
      "Schiphol Trade Park",
    ],
    features: [
      "Landelijke dekking vanuit Limburg",
      "Ervaring met grootstedelijke projecten",
      "Flexibele inzet voor langlopende projecten",
      "Combinatie van alle beveiligingsdiensten",
    ],
  },
  {
    naam: "Rotterdam",
    slug: "rotterdam",
    provincie: "Zuid-Holland",
    intro:
      "Rotterdam bouwt de stad van de toekomst. Van de Merwe-Vierhavens tot Feyenoord City — professionele bouwbeveiliging is onmisbaar.",
    context:
      "Rotterdam is na Amsterdam de stad met de meeste bouwactiviteit in Nederland. De transformatie van havengebieden, grote woningbouwprojecten en infrastructuurwerken creëren een enorme vraag naar beveiligingsdiensten. De havenomgeving brengt extra uitdagingen met zich mee op het gebied van beveiliging.",
    projecten: [
      "Merwe-Vierhavens transformatie",
      "Feyenoord City gebiedsontwikkeling",
      "Woningbouw Hart van Zuid",
      "Rotterdam The Hague Airport",
      "Rijnhaven herontwikkeling",
    ],
    features: [
      "Ervaring met havengebied-beveiliging",
      "Landelijke dekking voor grote projecten",
      "Kennis van maritieme beveiligingseisen",
      "Schaalbare oplossingen voor lange trajecten",
    ],
  },
];

function getRegioData(stad: string): RegioData | undefined {
  return regios.find((r) => r.slug === stad);
}

export function generateStaticParams() {
  return regios.map((r) => ({ stad: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stad } = await params;
  const regio = getRegioData(stad);
  if (!regio) return { title: "Regio niet gevonden" };

  return {
    title: `Bouwbeveiliging ${regio.naam}`,
    description: `Professionele bouwplaatsbeveiliging in ${regio.naam} en omgeving.`,
  };
}

export default async function RegioPage({ params }: Props) {
  const { stad } = await params;
  const regio = getRegioData(stad);
  if (!regio) notFound();

  const andereRegios = regios.filter((r) => r.slug !== stad).slice(0, 6);

  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Bouwbeveiliging in {regio.provincie}
          </p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">{regio.naam}</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">{regio.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">
              Offerte aanvragen
            </Link>
            <a href="tel:+31462402401" className="rounded-lg border border-orange-400 px-5 py-3 font-semibold text-orange-300 hover:bg-orange-500/10">
              046 240 2401
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Context in {regio.naam}</h2>
          <p className="mt-4 leading-relaxed text-gray-300">{regio.context}</p>
          <ul className="mt-6 space-y-2">
            {regio.features.map((f) => (
              <li key={f} className="flex gap-3 text-gray-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900/70 p-6">
          <h3 className="text-xl font-semibold text-white">Relevante projecten</h3>
          <ul className="mt-4 space-y-3">
            {regio.projecten.map((p) => (
              <li key={p} className="rounded-lg border border-navy-700 bg-navy-900 px-4 py-3 text-gray-200">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy-700 bg-navy-900/60 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white">Ook actief in andere regio&apos;s</h2>
          <div className="flex flex-wrap gap-2">
            {andereRegios.map((r) => (
              <Link key={r.slug} href={`/regio/${r.slug}`} className="rounded-full border border-navy-700 bg-navy-900 px-4 py-2 text-sm text-gray-200 hover:border-orange-400 hover:text-orange-300">
                {r.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
