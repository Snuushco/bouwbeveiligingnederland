export default function ContactSection() {
  return (
    <section style={{background:'#fff',padding:'3rem 1rem',borderRadius:'12px',margin:'2rem 0',boxShadow:'0 2px 8px rgba(0,0,0,0.03)',textAlign:'center'}}>
      <h2 style={{textAlign:'center',fontSize:'2rem',fontWeight:'bold',color:'#333',marginBottom:'1.5rem'}}>Contact & Advies</h2>
      <div style={{fontSize:'1.1rem',marginBottom:'1.5rem',color:'#444'}}>
        <p>Heeft u vragen of wilt u direct een beveiligingsvoorstel? Neem contact op:</p>
        <p><strong>Telefoon:</strong> <a href="tel:+31462402401" style={{color:'#333',textDecoration:'underline'}}>+31 46 240 2401</a></p>
        <p><strong>E-mail:</strong> <a href="mailto:bouw@praesidion.nl" style={{color:'#333',textDecoration:'underline'}}>bouw@praesidion.nl</a></p>
        <p><strong>KvK:</strong> 97640794</p>
      </div>
    </section>
  );
} 