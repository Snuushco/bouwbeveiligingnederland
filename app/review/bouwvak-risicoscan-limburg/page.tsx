import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bouwfase Risicoscan Limburg | Reviewconcept",
  description:
    "Reviewconcept voor een vaste bouwplaats-risicoscan bij stilstand, herstart of faseoverdracht: locatiebezoek, actieplan en uitvoeringsvoorstel.",
  robots: { index: false, follow: false, noarchive: true },
};

const deliverables = [
  "Voorbespreking van 30 minuten over projectfase, planning, levermomenten en waardevolle materialen.",
  "Locatieronde van maximaal 90 minuten op één bouwplaats in Limburg.",
  "Controle van toegangspunten, opslag, verlichting, sluitronde en escalatieafspraken.",
  "Beknopt top-10 actieplan: per maatregel de urgentie, eerstvolgende actie en verantwoordelijke rol.",
  "Bespreking van het actieplan en een apart voorstel voor eventuele uitvoering.",
];

const preparationItems = [
  "Actuele bouwfase en geplande start, herstart of overdracht.",
  "Leveringen en materialen met verhoogde waarde in de komende veertien dagen.",
  "Toegangspunten, sleutel- of pasbeheer en afspraken buiten werktijd.",
  "Bestaande camera-, licht-, hekwerk-, sluitronde- en escalatiemaatregelen.",
];

const boundaries = [
  "Eén bouwlocatie in Limburg; extra locaties vallen buiten de vaste scope.",
  "Geen formele RI&E, verzekeringsadvies, technische keuring of garantie dat incidenten uitblijven.",
  "Installaties, beveiligers, surveillance en camera-opvolging zijn niet inbegrepen.",
  "Uitvoering start alleen na een afzonderlijke opdracht en operationele haalbaarheidscontrole.",
];

const fitChecks = [
  "Er is één concrete bouwlocatie in Limburg met een komende stilstand, herstart of faseoverdracht.",
  "De projectverantwoordelijke kan toegang geven en de huidige maatregelen toelichten.",
  "Er blijven materialen, machines of installaties achter, of er komen nieuwe waarden binnen, waarvoor toegang, opslag of opvolging moet worden beoordeeld.",
  "De vraag is eerst een afzonderlijk locatiebeeld; directe inzet of installatie valt buiten deze scan.",
];

const fixedFeeValue = [
  "Een vooraf begrensde locatieronde en een concreet top-10 actieplan voor de afgesproken vaste prijs.",
  "Acties blijven bruikbaar wanneer u de uitvoering zelf organiseert of bij een andere partij onderbrengt.",
  "Geen verplichte vervolgafname van beveiligers, surveillance, camera-opvolging of installaties.",
];

const decisionMoments = [
  [
    "Vóór start of herstart",
    "Toets toegang, tijdelijke verkeersstromen, nieuwe leveringen en afspraken voor de eerste avond of het eerste weekend.",
  ],
  [
    "Bij faseoverdracht",
    "Leg vast welke hekken, sleutels, zones, materialen en escalatieafspraken veranderen tussen uitvoerende partijen.",
  ],
  [
    "Vóór stilstand",
    "Bepaal wat achterblijft, wie sluit en controleert, en welke afwijking direct opvolging nodig heeft.",
  ],
];

export default function BouwvakRisicoscanReviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-navy-950 px-4 pb-16 pt-32 text-white sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-200">
            Reviewconcept · niet indexeren · nog niet boekbaar
          </p>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">
            Bouwfase Risicoscan Limburg
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Leg risico’s bij stilstand, herstart of faseoverdracht praktisch vast.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Een vaste locatiecheck voor aannemers en projectverantwoordelijken die na een
            rustige periode herstarten, nieuwe materialen ontvangen of een overdracht tussen
            bouwfasen voorbereiden.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/15 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-300">Prijs-hypothese</p>
              <p className="mt-2 text-3xl font-black">€495 excl. btw</p>
              <p className="mt-2 text-sm text-slate-300">Vast bedrag voor de hieronder beschreven scope.</p>
            </div>
            <div className="border border-white/15 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-300">Doorlooptijd-concept</p>
              <p className="mt-2 text-3xl font-black">3 werkdagen</p>
              <p className="mt-2 text-sm text-slate-300">Actieplan na het locatiebezoek, afhankelijk van capaciteit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Inbegrepen</p>
            <h2 className="mt-3 text-3xl font-black">Van locatiebeeld naar uitvoerbare acties</h2>
            <ol className="mt-7 space-y-4">
              {deliverables.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.25rem_1fr] gap-3 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 items-center justify-center bg-orange-500 font-black text-white">
                    {index + 1}
                  </span>
                  <span className="pt-1 leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="bg-slate-900 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-300">Duidelijke grens</p>
            <h2 className="mt-3 text-2xl font-black">Wat deze scan niet is</h2>
            <ul className="mt-6 space-y-4 text-slate-200">
              {boundaries.map((item) => (
                <li key={item} className="border-l-4 border-orange-500 pl-4 leading-7">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Route naar uitvoering</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Scan", "Locatie, kwetsbare momenten en bestaande maatregelen worden vastgelegd."],
              ["2", "Besluit", "U kiest welke maatregelen direct, tijdelijk of later nodig zijn."],
              ["3", "Uitvoeringsvoorstel", "Praesidion maakt desgewenst een aparte offerte voor inzet, rondes, toegang of camera-opvolging."],
            ].map(([number, title, copy]) => (
              <div key={number} className="border border-slate-200 p-5">
                <span className="text-3xl font-black text-orange-500">{number}</span>
                <h2 className="mt-3 text-xl font-black">{title}</h2>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Kies het juiste scanmoment</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black">Maak de fasewissel concreet vóór de situatie verandert</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            De scan is het bruikbaarst wanneer de eerstvolgende wijziging in toegang, levering of bezetting al bekend is.
          </p>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {decisionMoments.map(([title, copy]) => (
              <article key={title} className="border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Voorbereiding zonder rapportenbundel</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-black">Vier punten die de locatieronde versnellen</h2>
              <p className="mt-4 leading-7 text-slate-700">
                Een mondelinge toelichting en beschikbare projectinformatie volstaan. Deel geen
                persoonsgegevens of beveiligingscodes via het openbare intakeformulier.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {preparationItems.map((item) => (
                <li key={item} className="border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Waarde van de vaste scan</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-black">Een betaald locatiebeeld zonder verplichte vervolgafname</h2>
              <p className="mt-4 leading-7 text-slate-700">
                De scan levert een afzonderlijk besluitdocument op. Een eventueel uitvoeringsvoorstel
                volgt pas op verzoek en staat los van de scanopdracht.
              </p>
            </div>
            <ul className="grid gap-3">
              {fixedFeeValue.map((item) => (
                <li key={item} className="flex gap-3 border border-slate-200 bg-slate-50 p-4">
                  <span aria-hidden="true" className="font-black text-orange-600">✓</span>
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-600">Past deze scan?</p>
            <h2 className="mt-3 text-3xl font-black">Vier checks vóór een aanvraag</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-700">
              De vaste scope is bedoeld om snel tot een bruikbaar locatiebesluit te komen. Als één
              van deze punten niet geldt, is eerst een maatwerkintake nodig.
            </p>
            <ul className="mt-7 grid gap-3">
              {fitChecks.map((item) => (
                <li key={item} className="flex gap-3 border border-slate-200 bg-white p-4 shadow-sm">
                  <span aria-hidden="true" className="font-black text-orange-600">✓</span>
                  <span className="leading-7 text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="border-2 border-orange-500 bg-orange-50 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">Acceptatie vóór start</p>
            <h2 className="mt-3 text-2xl font-black">Geen automatische boeking</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Praesidion bevestigt eerst locatie, bereikbaarheid, scope en capaciteit. De scan start
              pas na een afzonderlijke opdrachtbevestiging en aantoonbare betaling via de
              goedgekeurde zakelijke route.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Een intake, reactie of gedeelde betaalroute is nog geen opdracht of betaalbewijs.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-navy-950 px-4 py-14 text-white sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-300">Reviewactie</p>
          <h2 className="mt-3 text-3xl font-black">Maak dit aanbod pas live na prijs- en capaciteitsgoedkeuring.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-200">
            Na akkoord kan deze pagina worden omgezet naar een publieke aanbodpagina met een
            intakeknop. Tot dat moment blijft de bestaande vrijblijvende intake de publieke route.
          </p>
          <Link
            href="/bouwplaatsbeveiliging-limburg"
            className="mt-7 inline-flex rounded-lg border border-orange-300 px-5 py-3 font-semibold text-orange-100 hover:bg-white/10"
          >
            Bekijk huidige Limburg-pagina
          </Link>
        </div>
      </section>
    </main>
  );
}
