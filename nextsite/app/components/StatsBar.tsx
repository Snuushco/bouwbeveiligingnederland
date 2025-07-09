import React from 'react';

const PRIMARY = '#FFD700'; // Geel
const SECONDARY = '#333333'; // Donkergrijs
const BG = '#f5f5f5'; // Lichtgrijs

export default function StatsBar() {
  return (
    <section style={{background:BG, borderBottom:`2px solid ${PRIMARY}11`, padding:'2.2rem 0 1.2rem 0', width:'100%'}}>
      <div style={{display:'flex',justifyContent:'center',gap:'3.5rem',flexWrap:'wrap',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{textAlign:'center',minWidth:120,margin:'0 0.5rem'}}>
          <div style={{color:PRIMARY,fontWeight:700,fontSize:'2rem',marginBottom:2}}>500+</div>
          <div style={{color:SECONDARY,opacity:0.7,fontSize:'1.05rem'}}>Tevreden klanten</div>
        </div>
        <div style={{textAlign:'center',minWidth:120,margin:'0 0.5rem'}}>
          <div style={{color:PRIMARY,fontWeight:700,fontSize:'2rem',marginBottom:2}}>24/7</div>
          <div style={{color:SECONDARY,opacity:0.7,fontSize:'1.05rem'}}>Beschikbaarheid</div>
        </div>
        <div style={{textAlign:'center',minWidth:120,margin:'0 0.5rem'}}>
          <div style={{color:PRIMARY,fontWeight:700,fontSize:'2rem',marginBottom:2}}>15+</div>
          <div style={{color:SECONDARY,opacity:0.7,fontSize:'1.05rem'}}>Jaar ervaring</div>
        </div>
        <div style={{textAlign:'center',minWidth:120,margin:'0 0.5rem'}}>
          <div style={{color:PRIMARY,fontWeight:700,fontSize:'2rem',marginBottom:2}}>ND 6250</div>
          <div style={{color:SECONDARY,opacity:0.7,fontSize:'1.05rem'}}>Vergunningnummer</div>
        </div>
      </div>
    </section>
  );
} 