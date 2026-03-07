"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
  const [dienstenOpen, setDienstenOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: '#222', color: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '0.5rem 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#fff' }}>
          <Image src="/logo-bouwbeveiliging.svg" alt="Bouwbeveiliging Nederland Logo" width={40} height={40} style={{ background: '#fff', borderRadius: '8px', padding: '2px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#fff' }}>Bouwbeveiliging Nederland</span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {/* Diensten dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDienstenOpen(true)}
            onMouseLeave={() => setDienstenOpen(false)}
          >
            <Link href="/diensten" style={{ color: '#ccc', padding: '0.6rem 0.8rem', textDecoration: 'none', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              Diensten <span style={{ fontSize: '0.7rem' }}>▼</span>
            </Link>
            {dienstenOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, background: '#333', borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)', padding: '0.5rem 0', minWidth: '240px', zIndex: 200,
              }}>
                {[
                  { href: '/diensten/bouwplaatsbeveiliging', label: 'Bouwplaatsbeveiliging' },
                  { href: '/diensten/camerasystemen', label: 'Camerasystemen & Lichtmasten' },
                  { href: '/diensten/toegangscontrole', label: 'Toegangscontrole & Portiers' },
                  { href: '/diensten/surveillance', label: 'Surveillance & Alarmopvolging' },
                ].map((item) => (
                  <Link key={item.href} href={item.href} style={{
                    display: 'block', padding: '0.6rem 1.2rem', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem',
                  }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" style={{ color: '#ccc', padding: '0.6rem 0.8rem', textDecoration: 'none', fontSize: '0.95rem' }}>
            Blog
          </Link>

          <Link href="/regio/maastricht" style={{ color: '#ccc', padding: '0.6rem 0.8rem', textDecoration: 'none', fontSize: '0.95rem' }}>
            Regio&apos;s
          </Link>

          <Link href="/over-ons" style={{ color: '#ccc', padding: '0.6rem 0.8rem', textDecoration: 'none', fontSize: '0.95rem' }}>
            Over ons
          </Link>

          <Link href="/#intakeform" style={{
            background: '#FFD700', color: '#222', padding: '0.6rem 1.2rem', borderRadius: '4px',
            fontWeight: 'bold', textDecoration: 'none', marginLeft: '0.5rem', transition: 'background 0.2s', cursor: 'pointer',
          }}>
            Contact
          </Link>
        </div>
      </div>

      <style>{`
        nav a:hover { color: #FFD700 !important; }
        nav div[style*="position: absolute"] a:hover { background: #444 !important; color: #FFD700 !important; }
      `}</style>
    </nav>
  );
}
