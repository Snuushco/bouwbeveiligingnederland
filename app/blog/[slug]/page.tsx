import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { blogPosts, getBlogPost, getAllSlugs } from '../../lib/blog-data';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Artikel niet gevonden' };

  return {
    title: `${post.title} | Bouwbeveiliging Nederland`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'nl_NL',
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', color: '#444', lineHeight: 1.8 }}>
          {listItems.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  }

  function formatInline(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={key++} style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginTop: '2.5rem', marginBottom: '1rem' }}>
          {trimmed.replace('## ', '')}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={key++} style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333', marginTop: '2rem', marginBottom: '0.75rem' }}>
          {trimmed.replace('### ', '')}
        </h3>
      );
    } else if (trimmed.startsWith('---')) {
      flushList();
      elements.push(<hr key={key++} style={{ border: 'none', borderTop: '2px solid #FFD700', margin: '2rem 0' }} />);
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      listItems.push(trimmed.replace(/^[-*]\s/, ''));
    } else if (/^\d+\.\s/.test(trimmed)) {
      listItems.push(trimmed.replace(/^\d+\.\s/, ''));
    } else {
      flushList();
      elements.push(
        <p key={key++} style={{ color: '#444', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.05rem' }} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
      );
    }
  }
  flushList();
  return elements;
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Link href="/blog" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '0.95rem', marginBottom: '1rem', display: 'inline-block' }}>
              ← Terug naar blog
            </Link>
            <span style={{ background: '#FFD700', color: '#333', fontSize: '0.8rem', fontWeight: 'bold', padding: '0.25rem 0.75rem', borderRadius: '4px', marginLeft: '1rem' }}>
              {post.category}
            </span>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginTop: '1rem', lineHeight: 1.3 }}>
              {post.title}
            </h1>
            <div style={{ marginTop: '1rem', color: '#ccc', fontSize: '0.95rem' }}>
              <span>{new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span style={{ margin: '0 1rem' }}>•</span>
              <span>{post.readTime} leestijd</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '3rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            {renderMarkdown(post.content)}
          </div>
        </article>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Uw bouwplaats professioneel beveiligd?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Neem vrijblijvend contact op voor een offerte of risicoanalyse op maat.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                Offerte aanvragen
              </Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                046 240 2401
              </a>
            </div>
          </div>
        </section>

        {/* Andere artikelen */}
        {otherPosts.length > 0 && (
          <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#333' }}>Andere artikelen</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ background: '#fff', borderRadius: '10px', padding: '1.5rem', textDecoration: 'none', color: '#333', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <span style={{ background: '#FFD700', color: '#333', fontSize: '0.75rem', fontWeight: 'bold', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>{p.category}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginTop: '0.75rem', lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>{p.readTime} leestijd</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
