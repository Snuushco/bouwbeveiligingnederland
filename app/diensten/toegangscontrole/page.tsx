import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toegangscontrole & Portiersdiensten | Bouwbeveiliging Nederland',
  description: 'Professionele portiersdiensten en toegangscontrole voor bouwplaatsen. Pascontrole, bezoekersregistratie en legitimatiecontrole door gediplomeerde beveiligers.',
  openGraph: {
    title: 'Toegangscontrole & Portiersdiensten | Bouwbeveiliging Nederland',
    description: 'Toegangscontrole en portiersdiensten voor bouwplaatsen.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function ToegangscontrolePage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.5rem' }}>FYSIEKE BEVEILIGING</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Toegangscontrole & Portiersdiensten</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Weet wie er op uw bouwplaats is. Altijd. Professionele portiers voor pascontrole en bezoekersregistratie.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>Offerte aanvragen</Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>046 240 2401</a>
            </div>
          </div>
        </section>

        {/* Probleem */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Waarom toegangscontrole op de bouwplaats?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                Op een grote bouwplaats werken dagelijks tientallen tot honderden mensen: eigen personeel, onderaannemers, leveranciers, inspecteurs en bezoekers. Zonder professionele toegangscontrole weet u niet wie er op uw terrein is — en dat is een risico.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                Ongecontroleerde toegang leidt tot <strong>diefstal</strong>, <strong>veiligheidsincidenten</strong> en <strong>aansprakelijkheidsproblemen</strong>. Een professionele portier bij de ingang is de eerste en belangrijkste verdedigingslinie van uw bouwplaats.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Bovendien eisen steeds meer opdrachtgevers en toezichthouders een <strong>sluitende bezoekersregistratie</strong> als onderdeel van het veiligheidsplan.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Onze portiersdiensten omvatten</h3>
              {[
                'Legitimatie- en pascontrole',
                'Bezoekersregistratie en -administratie',
                'Controle op bevoegdheid en certificaten (VCA, BHV)',
                'Voertuigcontrole en -registratie',
                'Sleutelbeheer',
                'Eerste aanspreekpunt bij vragen en incidenten',
                'Dagelijkse rapportage van bezoekers en voorvallen',
                'Controle op veiligheidsmiddelen (helm, schoenen, hesje)',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: '#555', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* USPs */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
              Waarom kiezen voor onze portiersdiensten?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Gediplomeerd personeel', desc: 'Al onze portiers zijn in het bezit van een geldig beveiligingsdiploma en worden regelmatig bijgeschoold.', icon: '🎓' },
                { title: 'Representatief optreden', desc: 'Onze portiers zijn het visitekaartje van uw project. Professioneel, klantvriendelijk en correct.', icon: '👔' },
                { title: 'Digitale registratie', desc: 'Moderne registratiesystemen voor een sluitende bezoekersadministratie. Altijd inzicht in wie er op het terrein is.', icon: '📱' },
                { title: 'Flexibele tijden', desc: 'Van dagdiensten tijdens werkuren tot 24/7 portiersdiensten. Wij passen ons aan op uw behoefte.', icon: '🕐' },
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

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Portiersdiensten nodig?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Vraag een vrijblijvende offerte aan voor toegangscontrole op uw bouwplaats.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>Offerte aanvragen</Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>Direct bellen</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
