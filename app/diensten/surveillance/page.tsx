import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobiele Surveillance & Alarmopvolging | Bouwbeveiliging Nederland',
  description: 'Mobiele surveillance en alarmopvolging voor bouwplaatsen. Onvoorspelbare patrouilles en snelle respons bij alarmmeldingen door gediplomeerde beveiligers.',
  openGraph: {
    title: 'Mobiele Surveillance & Alarmopvolging | Bouwbeveiliging Nederland',
    description: 'Mobiele surveillance en alarmopvolging voor bouwplaatsen.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function SurveillancePage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.5rem' }}>PREVENTIEVE BEVEILIGING</p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Mobiele Surveillance & Alarmopvolging</h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Onvoorspelbare patrouilles en snelle respons — de perfecte aanvulling op uw beveiliging
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>Offerte aanvragen</Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>046 240 2401</a>
            </div>
          </div>
        </section>

        {/* Twee diensten */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Mobiele surveillance */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚗</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Mobiele Surveillance</h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Onze mobiele surveillance teams rijden <strong>onvoorspelbare patrouilles</strong> langs uw bouwplaats. Door de onregelmatige tijden en routes weten potentiële indringers nooit wanneer er gecontroleerd wordt — een krachtig afschrikmiddel.
              </p>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.75rem' }}>Wat houdt het in?</h3>
              {[
                'Regelmatige patrouilles op onvoorspelbare tijden',
                'Visuele inspectie van hekwerk, poorten en toegangspunten',
                'Controle op verdachte personen en voertuigen',
                'Terreincontroles met rapportage',
                'Direct ingrijpen bij constatering van onregelmatigheden',
                'GPS-gelogde routes voor aantoonbare bewaking',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: '#555', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Alarmopvolging */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚨</div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Alarmopvolging</h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Wanneer uw alarmsysteem of camerasysteem een melding genereert, rukken onze beveiligers <strong>direct uit</strong> voor verificatie en afhandeling. Snelle responstijden en professioneel optreden maken het verschil.
              </p>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.75rem' }}>Onze alarmopvolging omvat</h3>
              {[
                'Snelle uitruk bij alarmmelding (streeftijd < 20 minuten)',
                'Verificatie van het alarm op locatie',
                'Betreden en doorzoeken van het terrein',
                'Inschakelen van hulpdiensten indien nodig',
                'Veiligstellen van de locatie',
                'Gedetailleerde incidentrapportage',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: '#555', fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combinatie */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
              De kracht van de <span style={{ color: '#FFD700' }}>combinatie</span>
            </h2>
            <p style={{ color: '#666', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
              Mobiele surveillance en alarmopvolging zijn het sterkst wanneer ze worden gecombineerd met onze andere diensten. Camera&apos;s detecteren, surveillance patrouilleert, en bij een alarm volgen onze beveiligers direct op. Dit gelaagde model biedt maximale bescherming.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { title: 'Camera\'s', desc: 'Detectie en registratie', icon: '📹' },
                { title: 'Surveillance', desc: 'Preventie en afschrikking', icon: '🚗' },
                { title: 'Alarmopvolging', desc: 'Respons en interventie', icon: '🚨' },
              ].map((item, i) => (
                <div key={i} style={{ background: '#f9f9f9', borderRadius: '10px', padding: '1.5rem', border: '1px solid #eee' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Surveillance voor uw bouwplaats?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Vraag een vrijblijvende offerte aan voor mobiele surveillance en alarmopvolging.
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
