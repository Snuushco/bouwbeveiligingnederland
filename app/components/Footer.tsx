import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '2.5rem 0 1.5rem 0', marginTop: '3rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5rem' }}>
          {/* Bedrijfsgegevens */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <Image src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" width={44} height={44} style={{ height: '44px', width: '44px', background: '#fff', borderRadius: '8px', padding: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }} />
              <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#fff', letterSpacing: '0.01em' }}>Bouwbeveiliging Nederland</span>
            </div>
            <small style={{ color: '#FFD700' }}>Bouwbeveiliging Nederland is een onderdeel van</small>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', margin: '0.5rem 0 1rem 0' }}>Praesidion Security B.V.</h3>
            <div style={{ fontSize: '1rem', color: '#ccc', lineHeight: '1.7' }}>
              <p style={{ margin: '0' }}>Vergunningnummer: ND 8968</p>
              <p style={{ margin: '0' }}>KvK: 97640794</p>
              <p style={{ margin: '0' }}>Tel: <a href="tel:+31462402401" style={{ color: '#FFD700' }}>046 240 2401</a></p>
            </div>
          </div>
          {/* Diensten */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '1rem' }}>Diensten</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/diensten/bouwplaatsbeveiliging" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Bouwplaatsbeveiliging</Link>
              <Link href="/diensten/camerasystemen" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Camerasystemen & Lichtmasten</Link>
              <Link href="/diensten/toegangscontrole" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Toegangscontrole & Portiers</Link>
              <Link href="/diensten/surveillance" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Surveillance & Alarmopvolging</Link>
            </div>
          </div>
          {/* Links */}
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 'bold', marginBottom: '1rem' }}>Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/over-ons" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Over ons</Link>
              <Link href="/blog" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Blog</Link>
              <Link href="/diensten" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Alle diensten</Link>
              <Link href="/privacy" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Privacyverklaring</Link>
              <Link href="/voorwaarden" style={{ color: '#ccc', fontSize: '0.95rem', textDecoration: 'none' }}>Algemene voorwaarden</Link>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', marginTop: '2.5rem', paddingTop: '2rem', textAlign: 'center', color: '#aaa' }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.2rem' }}>bouwbeveiligingnederland.nl</p>
          <span style={{ fontSize: '1rem' }}>
            &copy; {new Date().getFullYear()} bouwbeveiligingnederland.nl | Onderdeel van <a href="https://praesidion.nl" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700', textDecoration: 'underline' }}>Praesidion Security B.V.</a> &#39;Uw veiligheid, onze zorg&#39;
          </span>
        </div>
      </div>
      <style>{`
        footer a:hover { color: #FFD700 !important; }
      `}</style>
    </footer>
  );
}
