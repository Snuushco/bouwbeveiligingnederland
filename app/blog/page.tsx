import Link from 'next/link';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { blogPosts } from '../lib/blog-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Bouwbeveiliging Nederland',
  description: 'Lees onze artikelen over bouwplaatsbeveiliging, trends in de beveiligingssector, regelgeving en praktische tips voor aannemers en bouwbedrijven.',
  openGraph: {
    title: 'Blog | Bouwbeveiliging Nederland',
    description: 'Artikelen over bouwplaatsbeveiliging, trends en regelgeving.',
    type: 'website',
    locale: 'nl_NL',
  },
};

export default function BlogOverview() {
  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Blog <span style={{ color: '#FFD700' }}>& Nieuws</span>
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Actuele artikelen over bouwplaatsbeveiliging, regelgeving en trends in de sector
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{
                  display: 'block',
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: '#333',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ background: '#222', padding: '2rem 1.5rem', minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                  <span style={{ background: '#FFD700', color: '#333', fontSize: '0.8rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '0.75rem' }}>
                    {post.category}
                  </span>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                    {post.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#999', fontSize: '0.85rem' }}>
                    <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span>{post.readTime} leestijd</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Heeft u een vraag over bouwbeveiliging?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Onze specialisten helpen u graag. Neem vrijblijvend contact op voor advies op maat.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                Contact opnemen
              </Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                046 240 2401
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
