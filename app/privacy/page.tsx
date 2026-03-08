export default function PrivacyPage() {
  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white">Privacyverklaring</h1>
          <p className="mt-4 text-gray-300">
            Bouwbeveiliging Nederland, onderdeel van Praesidion Security B.V., hecht veel waarde aan de
            bescherming van persoonsgegevens.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 text-gray-200 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Welke gegevens verzamelen wij?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Contactgegevens zoals naam, e-mail, telefoonnummer en bedrijfsnaam</li>
            <li>Projectinformatie zoals locatie, wensen en gewenste dienst</li>
            <li>Overige gegevens die u zelf verstrekt via formulieren of e-mail</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Waarvoor gebruiken wij uw gegevens?</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Beantwoorden van uw aanvraag of contactverzoek</li>
            <li>Opstellen van een beveiligingsvoorstel op maat</li>
            <li>Uitvoering van onze dienstverlening</li>
            <li>Voldoen aan wettelijke verplichtingen</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Uw rechten</h2>
          <p className="mt-4 leading-relaxed">
            U heeft recht op inzage, correctie en verwijdering van uw persoonsgegevens. Neem daarvoor contact
            op via <a className="text-orange-300 hover:text-orange-200" href="mailto:bouw@praesidion.nl">bouw@praesidion.nl</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
