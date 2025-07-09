export default function TestimonialsSection() {
  return (
    <section style={{background:'#f5f5f5',padding:'3rem 1rem',borderRadius:'12px',margin:'2rem 0',boxShadow:'0 2px 8px rgba(0,0,0,0.03)'}}>
      <h2 style={{textAlign:'center',fontSize:'2rem',fontWeight:'bold',color:'#333',marginBottom:'2rem'}}>Wat onze klanten zeggen</h2>
      <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center'}}>
        <div style={{background:'#fff',borderRadius:'8px',padding:'2rem',maxWidth:'340px',minWidth:'220px',boxShadow:'0 2px 8px rgba(0,0,0,0.04)',fontSize:'1rem',color:'#333'}}>
          “Sinds Bouwbeveiliging Nederland onze bouwplaatsen beveiligt, zijn incidenten verleden tijd. Professioneel en betrouwbaar!”
          <div style={{marginTop:'1rem',fontWeight:'bold',color:'#FFD700'}}>– Projectleider</div>
        </div>
        <div style={{background:'#fff',borderRadius:'8px',padding:'2rem',maxWidth:'340px',minWidth:'220px',boxShadow:'0 2px 8px rgba(0,0,0,0.04)',fontSize:'1rem',color:'#333'}}>
          “Snelle service, duidelijke communicatie en altijd een passende oplossing. Aanrader voor elk bouwproject.”
          <div style={{marginTop:'1rem',fontWeight:'bold',color:'#FFD700'}}>– Uitvoerder</div>
        </div>
        <div style={{background:'#fff',borderRadius:'8px',padding:'2rem',maxWidth:'340px',minWidth:'220px',boxShadow:'0 2px 8px rgba(0,0,0,0.04)',fontSize:'1rem',color:'#333'}}>
          “De mobiele surveillance en camera’s geven ons 24/7 een veilig gevoel. Topbedrijf!”
          <div style={{marginTop:'1rem',fontWeight:'bold',color:'#FFD700'}}>– Projectmanager</div>
        </div>
      </div>
    </section>
  );
} 