import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{background:'#222',color:'#fff',padding:'2.5rem 0 1.5rem 0',marginTop:'3rem'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 1rem'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2.5rem',alignItems:'end'}}>
          {/* Bedrijfsgegevens */}
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1rem'}}>
              <Image src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" width={44} height={44} style={{height:'44px',width:'44px',background:'#fff',borderRadius:'8px',padding:'4px',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}} />
              <span style={{fontWeight:'bold',fontSize:'1.25rem',color:'#fff',letterSpacing:'0.01em'}}>Bouwbeveiliging Nederland</span>
            </div>
            <small style={{color:'#FFD700'}}>Bouwbeveiliging Nederland is een onderdeel van</small>
            <h3 style={{fontSize:'1.15rem',fontWeight:'bold',margin:'0.5rem 0 1rem 0'}}>Praesidion Security B.V.</h3>
            <div style={{fontSize:'1rem',color:'#ccc',lineHeight:'1.7'}}>
              <p style={{margin:'0'}}>Vergunningnummer: ND 6250</p>
              <p style={{margin:'0'}}>KvK: 97640794</p>
              <p style={{margin:'0'}}>BTW: NL002280171B48</p>
              <p style={{margin:'0'}}>IBAN: NL23 KNAB 0616 6155 90</p>
            </div>
          </div>
          {/* Links */}
          <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start'}}>
            <h3 style={{fontSize:'1.15rem',fontWeight:'bold',marginBottom:'1rem'}}>Links</h3>
            <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <a href="/privacy" style={{color:'#ccc',fontSize:'1rem',textDecoration:'none',transition:'color 0.2s'}}>Privacyverklaring</a>
              <a href="/voorwaarden" style={{color:'#ccc',fontSize:'1rem',textDecoration:'none',transition:'color 0.2s'}}>Algemene voorwaarden</a>
              <a href="/diensten" style={{color:'#ccc',fontSize:'1rem',textDecoration:'none',transition:'color 0.2s'}}>Onze diensten</a>
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid #333',marginTop:'2.5rem',paddingTop:'2rem',textAlign:'center',color:'#aaa'}}>
          <p style={{fontSize:'1.1rem',fontWeight:'bold',color:'#fff',marginBottom:'0.2rem'}}>bouwbeveiligingnederland.nl</p>
          <span style={{fontSize:'1rem'}}>
            &copy; {new Date().getFullYear()} bouwbeveiligingnederland.nl | Onderdeel van <a href="https://praesidion.nl" target="_blank" rel="noopener noreferrer" style={{color:'#FFD700',textDecoration:'underline'}}>Praesidion Security B.V.</a> &#39;Uw veiligheid, onze zorg&#39;
          </span>
        </div>
      </div>
      <style>{`
        footer a:hover { color: #FFD700 !important; }
      `}</style>
    </footer>
  );
} 