import IntakeForm from "./components/IntakeForm";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main style={{minHeight:'100vh',background:'#f5f5f5',padding:'0',margin:'0'}}>
        <section style={{position:'relative',height:'380px',width:'100%',overflow:'hidden',background:'#333',color:'#fff',padding:'0',textAlign:'center'}}>
          <Image src="/hero.jpeg" alt="Bouwplaats beveiliging" fill style={{objectFit:'cover',zIndex:0,filter:'brightness(0.6)'}} />
          <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',zIndex:1}}>
            <Image src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" width={200} height={64} style={{height:'64px',marginBottom:'1rem',background:'rgba(255,255,255,0.05)',borderRadius:'8px',padding:'0.5rem'}} />
            <h1 style={{fontSize:'2.5rem',fontWeight:'bold',marginBottom:'1rem',textShadow:'0 2px 8px #000'}}>Professionele bouwplaatsbeveiliging</h1>
            <p style={{fontSize:'1.2rem',marginBottom:'0.5rem',textShadow:'0 2px 8px #000'}}>Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland</p>
            <p style={{color:'#FFD700',fontWeight:'bold',marginBottom:'1.5rem',textShadow:'0 2px 8px #000'}}>Onderdeel van Praesidion Security B.V.</p>
            <div style={{marginTop:'1rem',marginBottom:'1.5rem'}}>
              <a href="#intakeform" style={{display:'inline-block',background:'#FFD700',color:'#333',fontWeight:'bold',padding:'1rem 2rem',borderRadius:'8px',textDecoration:'none',fontSize:'1.2rem',boxShadow:'0 4px 12px rgba(255,215,0,0.3)',border:'2px solid #FFD700',transition:'all 0.3s ease'}}>Gratis offerte aanvragen</a>
            </div>
            <div style={{color:'#fff',fontWeight:'bold',fontSize:'1.1rem'}}>
              <span style={{marginRight:'1.5rem'}}><a href="tel:+31462402401" style={{color:'#FFD700',textDecoration:'underline'}}>+31 46 240 2401</a></span>
              <span><a href="mailto:bouw@praesidion.nl" style={{color:'#FFD700',textDecoration:'underline'}}>bouw@praesidion.nl</a></span>
            </div>
          </div>
        </section>
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <section style={{background:'#333',color:'#fff',padding:'3rem 1rem',textAlign:'center',margin:'2rem 0'}}>
          <div style={{maxWidth:'800px',margin:'0 auto'}}>
            <h2 style={{fontSize:'2.2rem',fontWeight:'bold',marginBottom:'1rem',color:'#FFD700'}}>Klaar om uw bouwplaats te beveiligen?</h2>
            <p style={{fontSize:'1.2rem',marginBottom:'2rem',opacity:0.9}}>Bescherm uw investering en voorkom kostbare vertragingen. Onze gediplomeerde beveiligers staan 24/7 voor u klaar.</p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="#intakeform" style={{display:'inline-block',background:'#FFD700',color:'#333',fontWeight:'bold',padding:'1rem 2rem',borderRadius:'8px',textDecoration:'none',fontSize:'1.1rem',boxShadow:'0 4px 12px rgba(255,215,0,0.3)',border:'2px solid #FFD700'}}>Gratis offerte aanvragen</a>
              <a href="tel:+31462402401" style={{display:'inline-block',background:'transparent',color:'#FFD700',fontWeight:'bold',padding:'1rem 2rem',borderRadius:'8px',textDecoration:'none',fontSize:'1.1rem',border:'2px solid #FFD700'}}>Direct bellen</a>
            </div>
          </div>
        </section>
        <ContactSection />
        <section id="intakeform" style={{padding:'2rem 1rem',maxWidth:'900px',margin:'0 auto'}}>
          <IntakeForm />
        </section>
        <Footer />
      </main>
    </>
  );
}
