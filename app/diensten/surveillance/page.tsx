import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobiele surveillance & alarmopvolging",
  description:
    "Onvoorspelbare controlerondes en snelle alarmopvolging voor bouwplaatsen in heel Nederland.",
};

export default function SurveillancePage() {
  const punten = [
    "Onregelmatige patrouilles als afschrikking",
    "Snelle uitruk bij alarmmeldingen",
    "Rapportage van controles en incidenten",
    "Schaalbaar voor korte en lange projecten",
  ];

  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Preventieve inzet</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">Mobiele surveillance & alarmopvolging</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Flexibele beveiliging met snelle respons, afgestemd op het risicoprofiel van uw bouwlocatie.
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
            <h2 className="text-2xl font-bold text-white">Kern van de dienst</h2>
            <ul className="mt-5 space-y-3">
              {punten.map((item) => (
                <li key={item} className="flex gap-3 text-gray-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-navy-700 bg-navy-900/70 p-6">
            <h3 className="text-xl font-semibold text-white">Combinatie met andere diensten</h3>
            <p className="mt-3 leading-relaxed text-gray-300">
              Surveillance werkt het sterkst samen met camera’s en toegangscontrole. U krijgt een gelaagd
              beveiligingsmodel met preventie, detectie en directe opvolging.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
