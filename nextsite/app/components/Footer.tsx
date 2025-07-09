import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{background:'#222',color:'#fff',padding:'2.5rem 1rem 1.5rem 1rem',marginTop:'3rem'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center',gap:'1.2rem'}}>
        <Image src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" width={48} height={48} style={{marginBottom:'0.5rem'}} />
        <div style={{fontWeight:'bold',fontSize:'1.2rem'}}>Bouwbeveiliging Nederland</div>
        <div style={{color:'#FFD700',fontSize:'1rem',marginBottom:'0.5rem'}}>Onderdeel van Praesidion Security B.V.</div>
        <div style={{color:'#ccc',fontSize:'1rem',marginBottom:'0.5rem'}}>
          <span style={{marginRight:'1.5rem'}}><b>Telefoon:</b> <a href="tel:+31462402401" style={{color:'#FFD700',textDecoration:'underline'}}>+31 46 240 2401</a></span>
          <span style={{marginRight:'1.5rem'}}><b>E-mail:</b> <a href="mailto:bouw@praesidion.nl" style={{color:'#FFD700',textDecoration:'underline'}}>bouw@praesidion.nl</a></span>
          <span><b>KvK:</b> 97640794</span>
        </div>
        <div style={{color:'#888',fontSize:'0.95rem',marginTop:'0.5rem'}}>
          &copy; 2025 Bouwbeveiliging Nederland. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
} 