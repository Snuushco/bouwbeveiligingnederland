import Link from 'next/link';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons | Bouwbeveiliging Nederland — Praesidion Security B.V.',
  description: 'Leer meer over Bouwbeveiliging Nederland, onderdeel van Praesidion Security B.V. Erkend beveiligingsbedrijf met vergunningnummer ND 8969.',
  openGraph: {
    title: 'Over Ons | Bouwbeveiliging Nederland',
    description: 'Praesidion Security B.V. — erkend beveiligingsbedrijf met jarenlange ervaring.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function OverOnsPage() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Over <span style={{ color: '#FFD700' }}>Bouwbeveiliging Nederland</span>
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Onderdeel van Praesidion Security B.V. — uw partner in professionele bouwplaatsbeveiliging
            </p>
          </div>
        </section>

        {/* Verhaal */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Ons verhaal</h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                Bouwbeveiliging Nederland is opgericht vanuit een duidelijke missie: de Nederlandse bouwsector voorzien van <strong>professionele, betrouwbare beveiliging</strong>. Als onderdeel van <strong>Praesidion Security B.V.</strong> combineren wij de kracht van een erkend beveiligingsbedrijf met specialistische kennis van de bouwsector.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1rem' }}>
                Wij geloven dat beveiliging meer is dan een slot op het hek. Het gaat om het beschermen van investeringen, het voorkomen van vertragingen en het creëren van een veilige werkomgeving voor iedereen op de bouwplaats. Daarom bieden wij een <strong>geïntegreerde aanpak</strong> die fysieke beveiliging, technologische oplossingen en preventief advies combineert.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                Vanuit onze thuisbasis in Limburg bedienen wij klanten in heel Nederland. Van kleine verbouwingen tot megaprojecten — wij leveren altijd dezelfde kwaliteit en toewijding.
              </p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', alignSelf: 'start' }}>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>Bedrijfsgegevens</h3>
              <div style={{ color: '#555', lineHeight: 2 }}>
                <p><strong>Bedrijf:</strong> Praesidion Security B.V.</p>
                <p><strong>Handelsnaam:</strong> Bouwbeveiliging Nederland</p>
                <p><strong>Vergunning:</strong> ND 8969</p>
                <p><strong>KvK:</strong> 97640794</p>
                <p><strong>BTW:</strong> NL868152237B01</p>
                <p><strong>Telefoon:</strong> <a href="tel:+31462402401" style={{ color: '#FFD700' }}>046 240 2401</a></p>
                <p><strong>Email:</strong> <a href="mailto:bouw@praesidion.nl" style={{ color: '#FFD700' }}>bouw@praesidion.nl</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* Vergunningen */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
              Vergunningen & Certificeringen
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  title: 'Beveiligingsvergunning ND 8969',
                  desc: 'Praesidion Security B.V. beschikt over een beveiligingsvergunning afgegeven door de Dienst Justis. Dit betekent dat wij voldoen aan alle wettelijke eisen voor het uitvoeren van beveiligingswerkzaamheden, inclusief screening van personeel en bedrijfsvoering.',
                  icon: '🏛️',
                },
                {
                  title: 'Gediplomeerd personeel',
                  desc: 'Al onze beveiligers zijn in het bezit van een geldig beveiligingsdiploma en een legitimatiebewijs van de Dienst Justis. Zij worden regelmatig bijgeschoold en getraind in relevante vaardigheden zoals EHBO, conflictbeheersing en brandpreventie.',
                  icon: '🎓',
                },
                {
                  title: 'Verzekerd en aansprakelijk',
                  desc: 'Praesidion Security B.V. is volledig verzekerd voor bedrijfs- en beroepsaansprakelijkheid. U kunt erop vertrouwen dat eventuele schade gedekt is en dat wij onze verantwoordelijkheden serieus nemen.',
                  icon: '📋',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#f9f9f9', borderRadius: '10px', padding: '2rem', border: '1px solid #eee' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kernwaarden */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
            Onze kernwaarden
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Professionaliteit', desc: 'Wij leveren kwaliteit in alles wat wij doen — van de eerste intake tot de dagelijkse uitvoering.', icon: '⭐' },
              { title: 'Betrouwbaarheid', desc: 'Afspraak is afspraak. Onze klanten kunnen blind op ons vertrouwen, 24 uur per dag, 7 dagen per week.', icon: '🤝' },
              { title: 'Maatwerk', desc: 'Elke bouwplaats is uniek. Wij luisteren, analyseren en leveren een oplossing die past bij uw situatie.', icon: '🔧' },
              { title: 'Transparantie', desc: 'Heldere communicatie, eerlijke tarieven en open rapportage. Geen verrassingen, geen verborgen kosten.', icon: '💎' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem', textAlign: 'center' }}>
              Ons team
            </h2>
            <p style={{ textAlign: 'center', color: '#666', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
              Ons team bestaat uit ervaren beveiligingsprofessionals met een passie voor veiligheid. Van onze directie tot onze beveiligers op locatie — iedereen deelt dezelfde toewijding aan kwaliteit en klanttevredenheid.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  title: 'Directie & Management',
                  desc: 'Ervaren directie met achtergrond in de beveiligingssector. Strategische visie gecombineerd met operationele kennis.',
                },
                {
                  title: 'Operationeel team',
                  desc: 'Gediplomeerde beveiligers met ervaring in bouwplaatsbeveiliging. Getraind, gemotiveerd en professioneel.',
                },
                {
                  title: 'Technisch team',
                  desc: 'Specialisten in camerasystemen, detectie en monitoring. Verantwoordelijk voor installatie en onderhoud van technische beveiligingssystemen.',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: '#f9f9f9', borderRadius: '10px', padding: '1.5rem', border: '1px solid #eee' }}>
                  <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Klaar om samen te werken?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Neem contact op voor een vrijblijvend gesprek over de beveiliging van uw bouwproject.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>
                Contact opnemen
              </Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>
                046 240 2401
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
