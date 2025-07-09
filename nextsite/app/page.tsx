import IntakeForm from "./components/IntakeForm";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#f5f5f5',padding:'0',margin:'0'}}>
      <section style={{position:'relative',height:'380px',width:'100%',overflow:'hidden',background:'#333',color:'#fff',padding:'0',textAlign:'center'}}>
        <Image src="/hero.jpeg" alt="Bouwplaats beveiliging" fill style={{objectFit:'cover',zIndex:0,filter:'brightness(0.6)'}} />
        <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',zIndex:1}}>
          <img src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" style={{height:'64px',marginBottom:'1rem',background:'rgba(255,255,255,0.05)',borderRadius:'8px',padding:'0.5rem'}} />
          <h1 style={{fontSize:'2.5rem',fontWeight:'bold',marginBottom:'1rem',textShadow:'0 2px 8px #000'}}>Professionele bouwplaatsbeveiliging</h1>
          <p style={{fontSize:'1.2rem',marginBottom:'0.5rem',textShadow:'0 2px 8px #000'}}>Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland</p>
          <p style={{color:'#FFD700',fontWeight:'bold',marginBottom:'1.5rem',textShadow:'0 2px 8px #000'}}>Onderdeel van Praesidion Security B.V.</p>
        </div>
      </section>
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <ContactSection />
      <section style={{padding:'2rem 1rem',maxWidth:'900px',margin:'0 auto'}}>
        <IntakeForm />
      </section>
      <Footer />
    </main>
  );
}
