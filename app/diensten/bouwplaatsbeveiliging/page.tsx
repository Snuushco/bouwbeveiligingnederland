import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bouwplaatsbeveiliging",
  description:
    "Professionele bouwplaatsbeveiliging door gediplomeerde beveiligers. 24/7 bewaking, toegangscontrole en materieelbescherming.",
};

export default function BouwplaatsbeveiligingPage() {
  const voordelen = [
    "Gediplomeerde beveiligers met ervaring op bouwlocaties",
    "24/7 inzetbaar in dag, avond en nacht",
    "Toegangscontrole en bezoekersregistratie",
    "Dagelijkse rapportages en incidentregistratie",
  ];

  const diensten = [
    {
      title: "Toezicht op terrein en materiaal",
      desc: "Actieve bewaking van gereedschap, machines en kritieke zones.",
    },
    {
      title: "Rondes en preventie",
      desc: "Onregelmatige controlerondes om diefstal en vandalisme te voorkomen.",
    },
    {
      title: "Escalatie en opvolging",
      desc: "Directe opvolging bij incidenten met duidelijke communicatielijnen.",
    },
  ];

  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Kerndienst
          </p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">Bouwplaatsbeveiliging</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Bescherm uw bouwproject tegen diefstal, vandalisme en ongeautoriseerde toegang.
            Wij leveren professionele beveiliging op maat voor elke fase van uw project.
          </p>
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
          <h2 className="text-2xl font-bold text-white">Waarom deze dienst</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Jaarlijks lopen bouwbedrijven grote schade op door diefstal en stilstand. Met een
            professioneel beveiligingsplan houdt u grip op risico&apos;s, planning en kosten.
          </p>
          <ul className="mt-6 space-y-3">
            {voordelen.map((voordeel) => (
              <li key={voordeel} className="flex gap-3 text-gray-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span>{voordeel}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {diensten.map((item) => (
            <div key={item.title} className="rounded-2xl border border-navy-700 bg-navy-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-navy-700 bg-navy-900/60 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">Vergunningnummer ND 8968 · KvK 97640794 · BTW NL868152237B01</p>
        </div>
      </section>
    </div>
  );
}
