"use client";
import React, { useState } from 'react';

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    locatie: '',
    dienst: '',
    startdatum: '',
    bericht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/verstuur-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ naam: '', bedrijf: '', email: '', telefoon: '', locatie: '', dienst: '', startdatum: '', bericht: '' });
      } else {
        const res = await response.json();
        setSubmitError(res.error || 'Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } catch (e) {
      setSubmitError('Er is een technische fout opgetreden.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div style={{background:'#e6ffe6',padding:'2rem',borderRadius:'8px',textAlign:'center',color:'#256029'}}>
        <h2>Bedankt voor uw aanvraag!</h2>
        <p>We nemen zo snel mogelijk contact met u op.</p>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    background: '#fff',
    color: '#222',
    fontSize: '1rem',
    marginBottom: 0,
    boxSizing: 'border-box' as const
  };
  const labelStyle = {
    color: '#222',
    fontWeight: 500,
    marginBottom: '0.3rem',
    display: 'block'
  };
  const textareaStyle = {
    ...inputStyle,
    height: '100px',
    resize: 'vertical' as const
  };
  const selectStyle = inputStyle;

  return (
    <form onSubmit={handleSubmit} style={{maxWidth:'600px',margin:'2rem auto',background:'#fff',padding:'2rem',borderRadius:'8px',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
      <h2 style={{textAlign:'center',marginBottom:'2rem',color:'#333'}}>Vrijblijvend beveiligingsvoorstel aanvragen</h2>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Naam *</label>
        <input name="naam" value={formData.naam} onChange={handleChange} required style={inputStyle} autoComplete="name" />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Bedrijf *</label>
        <input name="bedrijf" value={formData.bedrijf} onChange={handleChange} required style={inputStyle} autoComplete="organization" />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>E-mailadres *</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required style={inputStyle} autoComplete="email" />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Telefoonnummer</label>
        <input name="telefoon" value={formData.telefoon} onChange={handleChange} style={inputStyle} autoComplete="tel" />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Projectlocatie *</label>
        <input name="locatie" value={formData.locatie} onChange={handleChange} required placeholder="Bijv. Maastricht, Limburg" style={inputStyle} />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Gewenste Dienst *</label>
        <select name="dienst" value={formData.dienst} onChange={handleChange} required style={selectStyle}>
          <option value="">Selecteer een dienst</option>
          <option value="bouwplaatsbeveiliging">Bouwplaatsbeveiliging</option>
          <option value="portiersdiensten">Portiersdiensten</option>
          <option value="camera-lichtmasten">Camera- en Lichtmasten</option>
          <option value="mobiele-surveillance">Mobiele Surveillance</option>
          <option value="alarmopvolging">Alarmopvolging</option>
          <option value="meerdere-diensten">Meerdere diensten</option>
        </select>
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Startdatum project</label>
        <input name="startdatum" type="date" value={formData.startdatum} onChange={handleChange} style={inputStyle} />
      </div>
      <div style={{marginBottom:'1rem'}}>
        <label style={labelStyle}>Extra Informatie</label>
        <textarea name="bericht" value={formData.bericht} onChange={handleChange} placeholder="Beschrijf uw project, specifieke wensen of vragen..." style={textareaStyle} />
      </div>
      <button type="submit" className="submit-btn" disabled={isSubmitting} style={{background:'#FFD700',color:'#333',padding:'1rem 2rem',border:'none',borderRadius:'4px',fontWeight:'bold',fontSize:'1rem',width:'100%',cursor:'pointer'}}>
        {isSubmitting ? 'Verzenden...' : 'Verstuur Intake'}
      </button>
      {submitError && <div style={{color:'red',marginTop:'1rem'}}>{submitError}</div>}
    </form>
  );
} 