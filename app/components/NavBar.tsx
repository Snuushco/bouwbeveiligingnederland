"use client";
import Image from "next/image";
import Link from 'next/link';

export default function NavBar() {
  function scrollToIntakeForm(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById('intakeform');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <nav style={{position:'sticky',top:0,zIndex:100,background:'#222',color:'#fff',boxShadow:'0 2px 8px rgba(0,0,0,0.04)',padding:'0.5rem 0'}}>
      <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0.5rem 1rem'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'0.75rem',textDecoration:'none',color:'#fff'}}>
          <Image src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" width={40} height={40} style={{background:'#fff',borderRadius:'8px',padding:'2px'}} />
          <span style={{fontWeight:'bold',fontSize:'1.1rem',color:'#fff'}}>Bouwbeveiliging Nederland</span>
        </Link>
        <div style={{display:'flex',alignItems:'center'}}>
          <a href="#intakeform" onClick={scrollToIntakeForm} style={{background:'#FFD700',color:'#222',padding:'0.6rem 1.2rem',borderRadius:'4px',fontWeight:'bold',textDecoration:'none',marginLeft:'1rem',transition:'background 0.2s',cursor:'pointer'}}>Contact</a>
        </div>
      </div>
    </nav>
  );
} 