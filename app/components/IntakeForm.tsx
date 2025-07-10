"use client";
import React, { useState } from 'react';

export default function IntakeForm() {
  const [formData, setFormData] = useState({ naam: '', bedrijf: '', email: '', telefoon: '', locatie: '', dienst: '', startdatum: '', bericht: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // hier zou de submit logica komen
  };
  return (
    <form onSubmit={handleSubmit} style={{maxWidth:'520px',margin:'2.5rem auto',background:'#f8fafc',padding:'2.5rem 1.5rem',borderRadius:'14px',boxShadow:'0 4px 24px rgba(0,0,0,0.07)',display:'flex',flexDirection:'column',gap:'1.5rem',border:'1px solid #eee'}}>
      <h2 style={{textAlign:'center',fontSize:'1.7rem',fontWeight:'bold',marginBottom:'0.2rem',color:'#222',letterSpacing:'-0.5px'}}>Vrijblijvend beveiligingsvoorstel aanvragen</h2>
      <p style={{textAlign:'center',color:'#666',marginTop:'-1rem',marginBottom:'0.5rem',fontSize:'1.05rem'}}>Vul het formulier in en ontvang snel een persoonlijk voorstel.</p>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="naam" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Naam *</label>
        <input type="text" id="naam" name="naam" value={formData.naam} onChange={handleChange} required style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="bedrijf" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Bedrijf *</label>
        <input type="text" id="bedrijf" name="bedrijf" value={formData.bedrijf} onChange={handleChange} required style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="email" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>E-mailadres *</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="telefoon" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Telefoonnummer</label>
        <input type="tel" id="telefoon" name="telefoon" value={formData.telefoon} onChange={handleChange} style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="locatie" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Projectlocatie *</label>
        <input type="text" id="locatie" name="locatie" value={formData.locatie} onChange={handleChange} required placeholder="Bijv. Maastricht, Limburg" style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="dienst" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Gewenste Dienst *</label>
        <select id="dienst" name="dienst" value={formData.dienst} onChange={handleChange} required style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}}>
          <option value="" style={{color:'#666'}}>Selecteer een dienst</option>
          <option value="bouwplaatsbeveiliging" style={{color:'#333'}}>Bouwplaatsbeveiliging</option>
          <option value="portiersdiensten" style={{color:'#333'}}>Portiersdiensten</option>
          <option value="camera-lichtmasten" style={{color:'#333'}}>Camera- en Lichtmasten</option>
          <option value="mobiele-surveillance" style={{color:'#333'}}>Mobiele Surveillance</option>
          <option value="alarmopvolging" style={{color:'#333'}}>Alarmopvolging</option>
          <option value="meerdere-diensten" style={{color:'#333'}}>Meerdere diensten</option>
        </select>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="startdatum" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Startdatum Project</label>
        <input type="date" id="startdatum" name="startdatum" value={formData.startdatum} onChange={handleChange} style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s'}} />
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'0.5rem'}}>
        <label htmlFor="bericht" style={{fontWeight:'bold',color:'#222',fontSize:'1.05rem'}}>Extra Informatie</label>
        <textarea id="bericht" name="bericht" value={formData.bericht} onChange={handleChange} placeholder="Beschrijf uw project, specifieke wensen of vragen..." style={{padding:'1rem',fontSize:'1.05rem',borderRadius:'6px',border:'1.5px solid #ddd',background:'#fff',color:'#333',outlineColor:'#FFD700',transition:'border 0.2s',minHeight:'90px',resize:'vertical'}} />
      </div>
      <button type="submit" style={{background:'#FFD700',color:'#222',padding:'1.1rem',border:'none',borderRadius:'6px',fontWeight:'bold',fontSize:'1.15rem',marginTop:'0.5rem',cursor:'pointer',transition:'background 0.2s',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>Verstuur Intake</button>
      {submitted && <div style={{color:'#4caf50',textAlign:'center',marginTop:'1rem'}}>Uw aanvraag is ontvangen!</div>}
      <style>{`
        @media (max-width: 600px) {
          form { padding: 1.2rem 0.3rem !important; }
          h2 { font-size: 1.15rem !important; }
          button { font-size: 1rem !important; }
        }
        form input:focus, form select:focus, form textarea:focus {
          border-color: #FFD700 !important;
          outline: 2px solid #FFD700 !important;
        }
        form input::placeholder, form textarea::placeholder {
          color: #999 !important;
        }
        form select option {
          color: #333 !important;
          background: #fff !important;
        }
      `}</style>
    </form>
  );
} 