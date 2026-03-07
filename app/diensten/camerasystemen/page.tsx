import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Camerasystemen & Lichtmasten | Bouwbeveiliging Nederland',
  description: 'Camera- en lichtmasten voor bouwplaatsbeveiliging. Remote monitoring, bewegingsdetectie en 24/7 bewaking van uw bouwplaats.',
  openGraph: {
    title: 'Camerasystemen & Lichtmasten | Bouwbeveiliging Nederland',
    description: 'Camera- en lichtmasten met remote monitoring voor bouwplaatsen.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function CamerasystemenPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.5rem' }}>TECHNISCHE BEVEILIGING</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Camerasystemen & Lichtmasten</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              24/7 bewaking met slimme camera&apos;s, bewegingsdetectie en remote monitoring
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>Offerte aanvragen</Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>046 240 2401</a>
            </div>
          </div>
        </section>

        {/* Probleem */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Waarom camerasystemen op uw bouwplaats?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                Een bouwplaats is &apos;s nachts en in het weekend het meest kwetsbaar. Zonder bewaking is uw materieel en materiaal een makkelijk doelwit voor dieven en vandalen. Fysieke beveiliging op elk moment van de dag is kostbaar — camerasystemen bieden een <strong>kosteneffectief alternatief</strong> dat 24/7 werkt.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Onze camera- en lichtmasten combineren <strong>slimme detectie</strong> met <strong>directe alarmopvolging</strong>, zodat incidenten worden voorkomen of snel worden afgehandeld.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Voordelen van camerabewaking</h3>
              {['24/7 bewaking zonder permanent personeel', 'Preventieve werking door zichtbare camera\'s', 'Directe alarmmelding bij bewegingsdetectie', 'Bewijsmateriaal bij incidenten', 'Kosteneffectiever dan permanente bemanning', 'Op afstand te monitoren via beveiligde verbinding'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: '#555', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oplossing */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
              Onze camerasystemen
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Camera- en lichtmasten', desc: 'Mobiele masten van 6 tot 9 meter hoog, uitgerust met HD-camera\'s en krachtige LED-verlichting. Snel te plaatsen, flexibel te verplaatsen.', icon: '📹' },
                { title: 'Bewegingsdetectie', desc: 'Geavanceerde AI-gestuurde detectie die onderscheid maakt tussen mens, dier en voertuig. Minder valse meldingen, snellere respons.', icon: '🔍' },
                { title: 'Remote monitoring', desc: 'Onze meldkamer bewaakt uw camera\'s op afstand. Bij een alarm wordt direct geverifieerd en actie ondernomen.', icon: '🖥️' },
                { title: 'Nachtzicht', desc: 'Infrarood en thermische camera\'s voor helder beeld, ook in volledige duisternis. Geen blinde vlekken op uw bouwplaats.', icon: '🌙' },
                { title: 'Alarmopvolging', desc: 'Bij een geverifieerd alarm wordt direct een beveiligingsteam aangestuurd en wordt de politie ingeschakeld indien nodig.', icon: '🚨' },
                { title: 'Flexibele huur', desc: 'Camerasystemen op huurbasis, inclusief plaatsing, onderhoud en monitoring. Geen grote investering vooraf.', icon: '💰' },
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

        {/* Hoe het werkt */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>Hoe het werkt</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { step: '1', title: 'Inventarisatie', desc: 'Wij bekijken uw bouwplaats en bepalen de optimale cameraposities' },
              { step: '2', title: 'Installatie', desc: 'Plaatsing van masten en camera\'s, doorgaans binnen 24 uur operationeel' },
              { step: '3', title: 'Monitoring', desc: 'Onze meldkamer bewaakt uw camera\'s 24/7 met directe alarmopvolging' },
              { step: '4', title: 'Rapportage', desc: 'Periodieke rapportages over meldingen, incidenten en beeldmateriaal' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#FFD700', color: '#333', fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>{item.step}</div>
                <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Camera&apos;s op uw bouwplaats?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Vraag een vrijblijvende offerte aan voor camerabewaking op uw bouwplaats.
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
