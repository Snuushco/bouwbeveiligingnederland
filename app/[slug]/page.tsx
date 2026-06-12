
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { seoPages } from "../lib/seo-pages";

export function generateStaticParams() { return seoPages.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) return { title: "Niet gevonden" };
  return { title: page.title, description: page.description, alternates: { canonical: `https://${page.site}/${page.slug}/` }, robots: { index: true, follow: true }, openGraph: { title: page.title, description: page.description, type: "website", locale: "nl_NL" } };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoPages.find((p) => p.slug === slug);
  if (!page) notFound();
  const serviceSchema = { "@context":"https://schema.org", "@type":"Service", name: page.h1, description: page.description, provider: { "@type":"Organization", name:"Praesidion Security", url:"https://www.praesidion.eu/" }, areaServed:["Limburg","Maastricht","Venlo","Roermond","Sittard-Geleen","Heerlen","Weert"] };
  const faqSchema = { "@context":"https://schema.org", "@type":"FAQPage", mainEntity: page.faqs.map((f) => ({ "@type":"Question", name:f.q, acceptedAnswer:{ "@type":"Answer", text:f.a } })) };
  return <main style={{fontFamily:"Inter, system-ui, sans-serif", color:"#172033", lineHeight:1.65}}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqSchema)}} />
    <section style={{background:`linear-gradient(135deg, ${page.color}, #111827)`, color:"white", padding:"5rem 1rem"}}><div style={{maxWidth:1120, margin:"0 auto"}}>
      <p style={{fontWeight:800, opacity:.9}}>Specialistische beveiliging door Praesidion Security</p><h1 style={{fontSize:"clamp(2.2rem,5vw,4rem)", lineHeight:1.05, margin:".5rem 0 1rem"}}>{page.h1}</h1><p style={{fontSize:"1.2rem", maxWidth:860}}>{page.intro}</p><a href="mailto:info@praesidion.nl" style={{display:"inline-block", background:"#ffd700", color:"#111", fontWeight:900, padding:"1rem 1.25rem", borderRadius:12, textDecoration:"none", marginTop:"1rem"}}>Vraag voorstel aan</a>
    </div></section>
    <section style={{padding:"3rem 1rem"}}><div style={{maxWidth:1120, margin:"0 auto", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"1rem"}}>{["Wanneer nodig?","Aanpak","Regio Limburg"].map((h,i)=><article key={h} style={{border:"1px solid #e5e7eb", borderRadius:18, padding:"1.4rem", boxShadow:"0 10px 30px rgba(15,23,42,.06)"}}><h2>{h}</h2><p>{i===0?page.description:i===1?"Praesidion combineert passende inzet, heldere instructies, toegangscontrole, rapportage en snelle opschaling.":"Inzet mogelijk in Maastricht, Venlo, Roermond, Sittard-Geleen, Heerlen, Weert en omliggende regio's."}</p></article>)}</div></section>
    <section style={{background:"#f6f8fb", padding:"3rem 1rem"}}><div style={{maxWidth:1120, margin:"0 auto"}}><h2>Wat regelen we concreet?</h2><ul>{page.bullets.map((b)=><li key={b}>{b}</li>)}</ul></div></section>
    <section style={{padding:"3rem 1rem"}}><div style={{maxWidth:900, margin:"0 auto"}}><h2>Veelgestelde vragen</h2>{page.faqs.map((f)=><details key={f.q} style={{border:"1px solid #e5e7eb", borderRadius:12, padding:"1rem", margin:".7rem 0"}}><summary style={{fontWeight:800}}>{f.q}</summary><p>{f.a}</p></details>)}</div></section>
    <section style={{background:"#111827", color:"white", padding:"3rem 1rem"}}><div style={{maxWidth:900, margin:"0 auto"}}><h2>AI- en zoekmachinecontext</h2><p>Deze pagina is opgezet als AIEO-landingspagina: duidelijke dienst, regio, doelgroep, uitvoerder, FAQ en structured data zodat zoekmachines en AI-antwoordsystemen Praesidion correct kunnen koppelen aan deze beveiligingsvraag.</p></div></section>
  </main>
}
