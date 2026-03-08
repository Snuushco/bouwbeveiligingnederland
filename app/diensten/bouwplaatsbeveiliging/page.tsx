import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bouwplaatsbeveiliging | Bouwbeveiliging Nederland',
  description: 'Professionele bouwplaatsbeveiliging door gediplomeerde beveiligers. 24/7 bewaking, toegangscontrole en materieelbescherming op uw bouwplaats.',
  openGraph: {
    title: 'Bouwplaatsbeveiliging | Bouwbeveiliging Nederland',
    description: 'Professionele bouwplaatsbeveiliging door gediplomeerde beveiligers.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function BouwplaatsbeveiligingPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.5rem' }}>ONZE KERNDIENST</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Bouwplaatsbeveiliging</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Bescherm uw bouwplaats met gediplomeerde beveiligers, 24/7 beschikbaar in heel Nederland
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>Offerte aanvragen</Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>046 240 2401</a>
            </div>
          </div>
        </section>

        {/* Probleem */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Het probleem: onbeveiligde bouwplaatsen</h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                Jaarlijks wordt er voor <strong>€300 miljoen</strong> gestolen van bouwplaatsen in Nederland. Gereedschap, materialen, koper, machines — alles wat waarde heeft is een doelwit. Maar de directe schade is slechts het begin: projectvertragingen, hogere verzekeringspremies en reputatieschade kosten nog veel meer.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Veel bouwplaatsen vertrouwen op hekwerk en een slot. Dat is niet genoeg. Professionele dieven zijn georganiseerd, snel en ervaren. Zonder professionele beveiliging is uw bouwplaats een makkelijk doelwit.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>Veelvoorkomende risico&apos;s</h3>
              {['Diefstal van materieel en materialen', 'Vandalisme en vernieling', 'Ongeautoriseerde toegang', 'Sabotage van werkzaamheden', 'Brand en brandstichting', 'Illegale stort en dumping'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ color: '#e74c3c', fontSize: '1.2rem' }}>⚠</span>
                  <span style={{ color: '#555' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oplossing */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem', textAlign: 'center' }}>
              Onze oplossing: <span style={{ color: '#FFD700' }}>professionele bouwplaatsbeveiliging</span>
            </h2>
            <p style={{ textAlign: 'center', color: '#666', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Wij bieden een complete beveiligingsoplossing die is afgestemd op uw project
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Gediplomeerde beveiligers', desc: 'Alle beveiligers zijn in het bezit van een geldig beveiligingsdiploma en legitimatiebewijs. Zij zijn getraind in conflictbeheersing, EHBO en rapportage.', icon: '🛡️' },
                { title: '24/7 beschikbaarheid', desc: 'Dag en nacht, weekenden en feestdagen. Uw bouwplaats is altijd beveiligd, ongeacht het tijdstip.', icon: '⏰' },
                { title: 'Toegangscontrole', desc: 'Professionele portiersdiensten met pasregistratie, bezoekersadministratie en controle op legitimatie.', icon: '🚧' },
                { title: 'Flexibele inzet', desc: 'Opschalen en afschalen op basis van de projectfase. U betaalt alleen voor wat u nodig heeft.', icon: '📊' },
                { title: 'Rapportage', desc: 'Dagelijkse rapportages over bevindingen, incidenten en bezoekers. Altijd inzicht in de veiligheidssituatie.', icon: '📋' },
                { title: 'Incidentafhandeling', desc: 'Bij een incident handelen onze beveiligers direct en professioneel. Politie wordt ingeschakeld waar nodig.', icon: '🚨' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#f9f9f9', borderRadius: '10px', padding: '1.5rem', border: '1px solid #eee' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USPs */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
            Waarom Bouwbeveiliging Nederland?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Erkend beveiligingsbedrijf', desc: 'Vergunningnummer ND 8968, volledig gecertificeerd en verzekerd' },
              { title: 'Ervaring in de bouw', desc: 'Jarenlange ervaring met bouwplaatsbeveiliging bij kleine en grote projecten' },
              { title: 'Lokale kennis', desc: 'Gevestigd in Limburg, actief in heel Nederland. Wij kennen de regio' },
              { title: 'Maatwerk', desc: 'Elke bouwplaats is anders. Wij leveren een oplossing die past bij uw project en budget' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#FFD700', fontSize: '1.5rem', fontWeight: 'bold' }}>✓</span>
                <div>
                  <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Bescherm uw bouwplaats vandaag nog
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Vraag een vrijblijvende offerte aan of bel ons direct voor advies op maat.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>
                Gratis offerte aanvragen
              </Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>
                Direct bellen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
