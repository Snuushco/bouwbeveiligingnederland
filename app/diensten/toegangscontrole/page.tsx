import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toegangscontrole & portiersdiensten",
  description:
    "Professionele portiersdiensten met bezoekersregistratie, legitimatiecontrole en terreinbewaking.",
};

export default function ToegangscontrolePage() {
  const checklist = [
    "Legitimatie- en pascontrole",
    "Bezoekers- en leveranciersregistratie",
    "Controle op bevoegdheden en veiligheidseisen",
    "Sleutel- en toegangspuntbeheer",
  ];

  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Fysieke controle</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">Toegangscontrole & portiersdiensten</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Houd grip op wie uw bouwplaats betreedt. Professionele portiers voorkomen risico’s aan de poort.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">Offerte aanvragen</Link>
            <a href="tel:+31462402401" className="rounded-lg border border-orange-400 px-5 py-3 font-semibold text-orange-300 hover:bg-orange-500/10">046 240 2401</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
            <h2 className="text-2xl font-bold text-white">Wat onze portiers doen</h2>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex gap-3 text-gray-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-900/70 p-6">
            <h3 className="text-xl font-semibold text-white">Resultaat</h3>
            <p className="mt-3 leading-relaxed text-gray-300">
              U voorkomt ongeautoriseerde toegang, verhoogt veiligheid op de werkvloer en houdt een sluitende
              administratie voor audits en opdrachtgevers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
