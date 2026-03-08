export default function VoorwaardenPage() {
  return (
    <div className="bg-navy-950">
      <section className="border-b border-navy-700 pt-32 pb-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white">Algemene voorwaarden</h1>
          <p className="mt-4 text-gray-300">
            Op alle diensten van Bouwbeveiliging Nederland zijn de algemene voorwaarden van toepassing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-8 px-4 py-12 text-gray-200 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Toepasselijkheid</h2>
          <p className="mt-4 leading-relaxed">
            Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen en overeenkomsten tussen
            Praesidion Security B.V. en opdrachtgevers.
          </p>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Aansprakelijkheid</h2>
          <p className="mt-4 leading-relaxed">
            Onze aansprakelijkheid is beperkt tot het bedrag dat door de verzekering wordt gedekt. Indirecte
            schade en gevolgschade zijn uitgesloten, tenzij wettelijk anders bepaald.
          </p>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Betaling</h2>
          <p className="mt-4 leading-relaxed">
            Facturen dienen binnen 14 dagen na factuurdatum te worden voldaan, tenzij schriftelijk anders
            overeengekomen.
          </p>
        </div>

        <div className="rounded-2xl border border-navy-700 bg-navy-900 p-6">
          <h2 className="text-2xl font-bold text-white">Vragen</h2>
          <p className="mt-4 leading-relaxed">
            Voor vragen over deze voorwaarden: <a className="text-orange-300 hover:text-orange-200" href="mailto:bouw@praesidion.nl">bouw@praesidion.nl</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
