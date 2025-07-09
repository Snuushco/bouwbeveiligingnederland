import Image from 'next/image';

const sectors = [
  {
    title: 'Bouwplaatsbeveiliging',
    description: 'Beveiliging voor bouwplaatsen en projecten in heel Nederland',
    url: '/',
    current: true,
    features: ['Bouwplaatsbeveiliging', 'Materieelbescherming', 'Toegangscontrole', 'Surveillance']
  },
  {
    title: 'Zorgbewaking',
    description: 'Professionele beveiliging voor zorginstellingen in Limburg en Nederland',
    url: 'https://zorgbewaking.nl',
    current: false,
    features: ['Vaste beveiligers', 'Zorginzicht', 'Discrete aanpak', '24/7 beschikbaarheid']
  },
  {
    title: 'Evenementenbeveiliging',
    description: 'Beveiliging voor evenementen, festivals en bijeenkomsten',
    url: '#',
    current: false,
    features: ['Crowd management', 'Toegangscontrole', 'Incidentenbeheer', 'Flexibele inzet']
  },
  {
    title: 'Objectbeveiliging',
    description: 'Beveiliging voor kantoren, bedrijfspanden en objecten',
    url: '#',
    current: false,
    features: ['Receptie', 'Toegangscontrole', 'Surveillance', 'Noodhulp']
  },
  {
    title: 'Industriële beveiliging',
    description: 'Beveiliging voor fabrieken en industriële locaties',
    url: '#',
    current: false,
    features: ['Perimetertoegang', 'Brandpreventie', 'Veiligheidscontroles', 'Noodprocedures']
  },
  {
    title: 'Logistiek',
    description: 'Beveiliging voor logistieke centra, magazijnen en distributie',
    url: '#',
    current: false,
    features: ['Magazijnbeveiliging', 'Transportbegeleiding', 'Goederencontrole', 'Perimetertoegang']
  }
];

export default function DienstenPage() {
  return (
    <main style={{minHeight:'100vh',background:'#fff'}}>
      {/* Header */}
      <div style={{background:'#222',color:'#FFD700',padding:'2.5rem 0 1.5rem 0'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 1rem'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div>
              <h1 style={{fontSize:'2.2rem',fontWeight:'bold'}}>Overige diensten & sectoren</h1>
              <p style={{color:'#fff',marginTop:'0.5rem'}}>bouwbeveiligingnederland.nl - Onderdeel van Praesidion Security B.V.</p>
            </div>
            <a href="/" style={{background:'#FFD700',color:'#222',padding:'0.7rem 1.5rem',borderRadius:'4px',fontWeight:'bold',textDecoration:'none',fontSize:'1rem'}}>← Terug naar home</a>
          </div>
        </div>
      </div>
      {/* Intro Section */}
      <div style={{maxWidth:'1100px',margin:'0 auto',padding:'3rem 1rem'}}>
        <div style={{textAlign:'center',marginBottom:'2.5rem'}}>
          <h2 style={{fontSize:'2rem',fontWeight:'bold',color:'#222',marginBottom:'1rem'}}>Praesidion Security B.V. - Uw partner in beveiliging</h2>
          <p style={{fontSize:'1.15rem',color:'#444',maxWidth:'700px',margin:'0 auto'}}>Naast bouwbeveiligingnederland.nl biedt Praesidion Security B.V. professionele beveiligingsdiensten voor diverse sectoren. Ontdek hieronder onze andere specialisaties en sectoren.</p>
        </div>
        {/* Company Info */}
        <div style={{background:'#f5f5f5',borderRadius:'12px',padding:'2.5rem',marginBottom:'2.5rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2.5rem'}}>
            <div>
              <h3 style={{fontSize:'1.3rem',fontWeight:'bold',color:'#222',marginBottom:'1rem'}}>Over Praesidion Security B.V.</h3>
              <p style={{color:'#444',marginBottom:'1rem'}}>Praesidion Security B.V. is een toonaangevend beveiligingsbedrijf met jarenlange ervaring in diverse sectoren. Wij leveren hoogwaardige beveiligingsdiensten met aandacht voor klanttevredenheid en professionele uitvoering.</p>
              <div style={{color:'#444',fontSize:'1rem',lineHeight:'1.7'}}>
                <p><strong>Vergunningnummer:</strong> ND 6250</p>
                <p><strong>KvK:</strong> 97640794</p>
                <p><strong>BTW:</strong> NL002280171B48</p>
                <p><strong>IBAN:</strong> NL23 KNAB 0616 6155 90</p>
              </div>
            </div>
            <div>
              <h3 style={{fontSize:'1.3rem',fontWeight:'bold',color:'#222',marginBottom:'1rem'}}>Onze kernwaarden</h3>
              <ul style={{color:'#444',fontSize:'1rem',lineHeight:'1.7',paddingLeft:'1.2rem'}}>
                <li style={{marginBottom:'0.5rem'}}><span style={{color:'#FFD700',marginRight:'0.5rem'}}>✓</span><strong>Professionaliteit:</strong> Hoogopgeleide en ervaren beveiligers</li>
                <li style={{marginBottom:'0.5rem'}}><span style={{color:'#FFD700',marginRight:'0.5rem'}}>✓</span><strong>Betrouwbaarheid:</strong> Altijd beschikbaar en punctueel</li>
                <li style={{marginBottom:'0.5rem'}}><span style={{color:'#FFD700',marginRight:'0.5rem'}}>✓</span><strong>Discretie:</strong> Vertrouwelijke behandeling van alle informatie</li>
                <li style={{marginBottom:'0.5rem'}}><span style={{color:'#FFD700',marginRight:'0.5rem'}}>✓</span><strong>Klantgerichtheid:</strong> Maatwerk en persoonlijke aandacht</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Sectors Grid */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'2rem'}}>
          {sectors.map((sector, index) => (
            <a
              key={index}
              href={sector.url}
              target={sector.current ? undefined : '_blank'}
              rel={sector.current ? undefined : 'noopener noreferrer'}
              style={{display:'block',textDecoration:'none',color:'#222',background:sector.current ? '#FFD70022' : '#fff',borderRadius:'10px',boxShadow:sector.current ? '0 0 0 2px #FFD700' : '0 2px 8px rgba(0,0,0,0.04)',transition:'box-shadow 0.2s',padding:'2rem',border:sector.current ? '2px solid #FFD700' : '1px solid #eee',cursor:'pointer'}}
            >
              <div style={{fontWeight:'bold',fontSize:'1.2rem',marginBottom:'0.5rem'}}>{sector.title}</div>
              <div style={{color:'#444',marginBottom:'1rem'}}>{sector.description}</div>
              <div style={{marginBottom:'1rem'}}>
                <span style={{background:'#FFD700',color:'#222',fontWeight:'bold',fontSize:'0.95rem',padding:'0.2rem 0.7rem',borderRadius:'4px'}}>{sector.current ? 'Huidige pagina' : 'Meer info'}</span>
              </div>
              <ul style={{color:'#444',fontSize:'0.98rem',paddingLeft:'1.2rem'}}>
                {sector.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{marginBottom:'0.3rem'}}><span style={{color:'#FFD700',marginRight:'0.5rem'}}>•</span>{feature}</li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
} 