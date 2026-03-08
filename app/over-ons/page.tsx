import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Bouwbeveiliging Nederland is onderdeel van Praesidion Security B.V. Erkend beveiligingsbedrijf met vergunning ND 8968.",
};

export default function OverOnsPage() {
  const kernwaarden = [
    "Professionaliteit in uitvoering en communicatie",
    "Betrouwbaarheid in planning en bezetting",
    "Maatwerk per projectfase en risicoprofiel",
    "Transparante rapportage en duidelijke afspraken",
  ];

  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Over ons</p>
          <h1 className="text-4xl font-black text-white sm:text-5xl">Bouwbeveiliging Nederland</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-300">
            Specialist in bouwplaatsbeveiliging, onderdeel van Praesidion Security B.V.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Wie wij zijn</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Wij helpen bouwbedrijven om projecten veilig, beheersbaar en volgens planning uit te voeren.
            Met een combinatie van fysieke beveiliging, techniek en operationele discipline beperken we
            risico’s op diefstal, stilstand en incidenten.
          </p>
          <p className="mt-4 leading-relaxed text-gray-300">
            Vanuit Limburg werken we landelijk aan bouwprojecten van klein tot grootschalig.
          </p>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900/70 p-6">
          <h2 className="text-2xl font-bold text-white">Bedrijfsgegevens</h2>
          <dl className="mt-4 space-y-3 text-gray-200">
            <div className="flex justify-between gap-4 border-b border-navy-700 pb-2"><dt>Vergunning</dt><dd className="font-semibold">ND 8968</dd></div>
            <div className="flex justify-between gap-4 border-b border-navy-700 pb-2"><dt>KvK</dt><dd className="font-semibold">97640794</dd></div>
            <div className="flex justify-between gap-4 border-b border-navy-700 pb-2"><dt>BTW</dt><dd className="font-semibold">NL868152237B01</dd></div>
            <div className="flex justify-between gap-4 border-b border-navy-700 pb-2"><dt>Telefoon</dt><dd><a href="tel:+31462402401" className="text-orange-300 hover:text-orange-200">046 240 2401</a></dd></div>
            <div className="flex justify-between gap-4"><dt>Email</dt><dd><a href="mailto:bouw@praesidion.nl" className="text-orange-300 hover:text-orange-200">bouw@praesidion.nl</a></dd></div>
          </dl>
        </div>
      </section>

      <section className="border-t border-navy-700 bg-navy-900/60 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Onze kernwaarden</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {kernwaarden.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl border border-navy-700 bg-navy-900 p-4 text-gray-200">
                <span className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/#contact" className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
