import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Kleurenschema bouwbeveiligingnederland.nl
const PRIMARY = '#FFD700'; // Geel
const SECONDARY = '#333333'; // Donkergrijs
const LIGHT = '#fff';

export default function ContactSection() {
  return (
    <section id="contact" style={{background:PRIMARY,padding:'3.5rem 0 3rem 0',borderRadius:'0',margin:'0 0 2rem 0',boxShadow:'0 2px 8px rgba(0,0,0,0.03)'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 1rem'}}>
        <h2 style={{textAlign:'center',fontSize:'2.2rem',fontWeight:'bold',color:SECONDARY,marginBottom:'0.7rem'}}>Neem direct contact op</h2>
        <p style={{textAlign:'center',color:SECONDARY,opacity:0.85,fontSize:'1.15rem',marginBottom:'2.5rem'}}>Klaar om uw bouwproject veiliger te maken? Neem contact op voor een vrijblijvend gesprek.</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',justifyContent:'center'}}>
          {/* Telefoon */}
          <div style={{background:LIGHT,border:`1.5px solid ${PRIMARY}` ,borderRadius:'18px',padding:'2.2rem 1.5rem',minWidth:'260px',flex:'1 1 260px',maxWidth:'340px',display:'flex',flexDirection:'column',alignItems:'center',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
            <FaPhoneAlt size={32} color={PRIMARY} style={{marginBottom:'0.7rem'}} />
            <div style={{fontWeight:'bold',color:SECONDARY,fontSize:'1.1rem',marginBottom:'0.2rem'}}>Telefoon</div>
            <div style={{fontSize:'1.45rem',fontWeight:'bold',color:SECONDARY,marginBottom:'0.2rem'}}>+31 046 240 2401</div>
            <div style={{color:SECONDARY,opacity:0.7,fontSize:'1rem',marginBottom:'1.2rem'}}>24/7 bereikbaar voor spoed</div>
            <a href="tel:+31462402401" style={{display:'block',width:'100%',background:PRIMARY,color:SECONDARY,fontWeight:'bold',padding:'0.7rem 0',borderRadius:'8px',textAlign:'center',textDecoration:'none',fontSize:'1.05rem',boxShadow:`0 2px 8px ${PRIMARY}22`,border:`1.5px solid ${PRIMARY}`}}>Nu bellen</a>
          </div>
          {/* E-mail */}
          <div style={{background:LIGHT,border:`1.5px solid ${PRIMARY}` ,borderRadius:'18px',padding:'2.2rem 1.5rem',minWidth:'260px',flex:'1 1 260px',maxWidth:'340px',display:'flex',flexDirection:'column',alignItems:'center',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
            <FaEnvelope size={32} color={SECONDARY} style={{marginBottom:'0.7rem'}} />
            <div style={{fontWeight:'bold',color:SECONDARY,fontSize:'1.1rem',marginBottom:'0.2rem'}}>E-mail</div>
            <div style={{fontSize:'1.15rem',fontWeight:'bold',color:SECONDARY,marginBottom:'0.2rem'}}>bouw@praesidion.nl</div>
            <div style={{color:SECONDARY,opacity:0.7,fontSize:'1rem',marginBottom:'1.2rem'}}>Reactie binnen 2 uur</div>
            <a href="mailto:bouw@praesidion.nl" style={{display:'block',width:'100%',background:PRIMARY,color:SECONDARY,fontWeight:'bold',padding:'0.7rem 0',borderRadius:'8px',textAlign:'center',textDecoration:'none',fontSize:'1.05rem',boxShadow:`0 2px 8px ${PRIMARY}22`,border:`1.5px solid ${PRIMARY}`}}>E-mail versturen</a>
          </div>
          {/* Vestigingen */}
          <div style={{background:LIGHT,border:`1.5px solid ${PRIMARY}` ,borderRadius:'18px',padding:'2.2rem 1.5rem',minWidth:'260px',flex:'1 1 260px',maxWidth:'340px',display:'flex',flexDirection:'column',alignItems:'center',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
            <FaMapMarkerAlt size={32} color={PRIMARY} style={{marginBottom:'0.7rem'}} />
            <div style={{fontWeight:'bold',color:SECONDARY,fontSize:'1.1rem',marginBottom:'0.2rem'}}>Vestigingen</div>
            <div style={{fontSize:'1.15rem',fontWeight:'bold',color:SECONDARY,marginBottom:'0.2rem'}}>Limburg</div>
            <div style={{color:SECONDARY,opacity:0.7,fontSize:'1rem',marginBottom:'1.2rem'}}>Maastricht • Sittard • Roermond • Heerlen</div>
            <a href="#intakeform" style={{display:'block',width:'100%',background:PRIMARY,color:SECONDARY,fontWeight:'bold',padding:'0.7rem 0',borderRadius:'8px',textAlign:'center',textDecoration:'none',fontSize:'1.05rem',boxShadow:`0 2px 8px ${PRIMARY}22`,border:`1.5px solid ${PRIMARY}`}}>Intakegesprek plannen</a>
          </div>
        </div>
      </div>
    </section>
  );
} 