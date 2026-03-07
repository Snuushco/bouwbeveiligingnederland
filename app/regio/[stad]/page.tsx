import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ stad: string }>;
};

interface RegioData {
  naam: string;
  slug: string;
  provincie: string;
  intro: string;
  context: string;
  projecten: string[];
  features: string[];
}

const regios: RegioData[] = [
  {
    naam: 'Maastricht',
    slug: 'maastricht',
    provincie: 'Limburg',
    intro: 'Als hoofdstad van Limburg kent Maastricht een bloeiende bouwsector. Van het MUMC+ tot woningbouwprojecten in Belvédère — Maastricht bouwt.',
    context: 'Maastricht is een bruisende stad met veel bouwactiviteit. Het Belvédère-gebied wordt getransformeerd tot een moderne stadswijk, het MUMC+ breidt uit, en in diverse wijken worden woningbouwprojecten gerealiseerd. Deze bouwactiviteit vraagt om professionele beveiliging.',
    projecten: ['Gebiedsontwikkeling Belvédère', 'Uitbreiding MUMC+', 'Woningbouw Randwyck', 'Kantoorontwikkeling Céramique', 'Infrastructuurwerken A2-tunnel'],
    features: ['Korte aanrijtijden vanuit ons kantoor in Limburg', 'Kennis van lokale regelgeving en vergunningen', 'Samenwerking met Maastrichtse bouwbedrijven', 'Ervaring met binnenstedelijke projecten'],
  },
  {
    naam: 'Heerlen',
    slug: 'heerlen',
    provincie: 'Limburg',
    intro: 'Heerlen transformeert. Van de IBA Parkstad projecten tot herstructurering van de binnenstad — er wordt volop gebouwd en dat vraagt om beveiliging.',
    context: 'De regio Parkstad Limburg, met Heerlen als centrum, ondergaat een grote transformatie. Internationale Bau Ausstellung (IBA) projecten, de herstructurering van de binnenstad en nieuwe woningbouwprojecten zorgen voor veel bouwactiviteit. Deze projecten, vaak in stedelijk gebied, vragen om zorgvuldige beveiliging.',
    projecten: ['IBA Parkstad projecten', 'Herstructurering binnenstad Heerlen', 'Maankwartier fase 2', 'Woningbouw Hoensbroek', 'Bedrijventerrein Avantis'],
    features: ['Ervaring met IBA-gerelateerde projecten', 'Kennis van de Parkstad-regio', 'Snelle inzetbaarheid in heel Parkstad', 'Samenwerking met lokale stakeholders'],
  },
  {
    naam: 'Sittard',
    slug: 'sittard',
    provincie: 'Limburg',
    intro: 'Sittard-Geleen is een dynamische gemeente met grote industrie en groeiende woningbouw. Van Chemelot tot de binnenstad — beveiliging is essentieel.',
    context: 'De gemeente Sittard-Geleen combineert industriële bedrijvigheid rondom Chemelot met stedelijke ontwikkeling. Het Chemelot-terrein, een van de grootste chemieterreinen van Europa, genereert veel bouwactiviteit. Daarnaast worden in Sittard en Geleen diverse woning- en kantoorprojecten gerealiseerd.',
    projecten: ['Uitbreidingen Chemelot Campus', 'Woningbouw Sittard-centrum', 'Herontwikkeling Geleen-Zuid', 'Bedrijventerrein Holtum-Noord', 'Infrastructuurwerken A2/A76'],
    features: ['Ervaring met industriële beveiliging (Chemelot)', 'Kennis van veiligheidseisen in de chemiesector', 'Snelle inzetbaarheid in Westelijke Mijnstreek', 'Combinatie van bouw- en industriebeveiliging'],
  },
  {
    naam: 'Roermond',
    slug: 'roermond',
    provincie: 'Limburg',
    intro: 'Roermond groeit. Met grote retailprojecten, woningbouw en infrastructuurwerken is professionele bouwbeveiliging onmisbaar.',
    context: 'Roermond is een groeiende stad aan de Maas met significante bouwactiviteit. Van uitbreidingen bij het Designer Outlet tot nieuwe woonwijken en de dijkversterkingsprojecten langs de Maas — Roermond bouwt op vele fronten. De combinatie van retail, woningbouw en waterwerken maakt de stad bijzonder interessant voor bouwbeveiliging.',
    projecten: ['Uitbreiding Designer Outlet Roermond', 'Dijkversterking langs de Maas', 'Woningbouw ECI-gebied', 'Bedrijventerrein Roerstreek', 'Herontwikkeling stationsgebied'],
    features: ['Strategische ligging in Midden-Limburg', 'Ervaring met dijkversterkingsprojecten', 'Kennis van retail-bouwbeveiliging', 'Snelle uitruk voor alarmopvolging'],
  },
  {
    naam: 'Venlo',
    slug: 'venlo',
    provincie: 'Limburg',
    intro: 'Venlo is het logistieke hart van Limburg. Grote distributiecentra, Greenport en grensoverschrijdende projecten vragen om professionele beveiliging.',
    context: 'Venlo en omgeving is een van de belangrijkste logistieke hubs van Nederland. De bouw van distributiecentra, de ontwikkeling van Greenport Venlo en diverse woningbouwprojecten zorgen voor continue bouwactiviteit. De grensligging brengt extra beveiligingsuitdagingen met zich mee.',
    projecten: ['Distributiecentra Trade Port Noord', 'Greenport Venlo ontwikkeling', 'Kazernekwartier', 'Dijkversterking Well', 'Woningbouw Venlo-Noord'],
    features: ['Ervaring met logistieke bouwprojecten', 'Kennis van grensoverschrijdende problematiek', 'Samenwerking met Greenport stakeholders', 'Snelle inzetbaarheid in Noord-Limburg'],
  },
  {
    naam: 'Eindhoven',
    slug: 'eindhoven',
    provincie: 'Noord-Brabant',
    intro: 'Eindhoven, de technologiehoofdstad van Nederland, kent een explosieve groei in bouwprojecten. Van Brainport tot woonwijken — beveiliging is cruciaal.',
    context: 'Eindhoven is een van de snelst groeiende steden van Nederland. De Brainport-regio trekt enorme investeringen aan, wat resulteert in grootschalige bouwprojecten: van het ASML-district tot nieuwe woonwijken en de transformatie van Strijp-S. Deze projecten vertegenwoordigen grote waarden en vragen om professionele beveiliging.',
    projecten: ['ASML district en campus uitbreiding', 'Transformatie Strijp-S', 'Woningbouw Meerhoven', 'Eindhoven Airport uitbreiding', 'District-E ontwikkeling'],
    features: ['Ervaring met high-tech bouwprojecten', 'Kennis van Brainport beveiligingseisen', 'Inzetbaarheid vanuit Limburg naar Eindhoven', 'Combinatie van fysieke en technische beveiliging'],
  },
  {
    naam: 'Amsterdam',
    slug: 'amsterdam',
    provincie: 'Noord-Holland',
    intro: 'Amsterdam is de grootste bouwplaats van Nederland. Van Haven-Stad tot de Noord/Zuidlijn — de hoofdstad bouwt non-stop en heeft beveiliging nodig.',
    context: 'Amsterdam kent de grootste bouwopgave van Nederland. Tienduizenden woningen worden gebouwd in Haven-Stad, Sluisbuurt en andere ontwikkelgebieden. Daarnaast worden kantoren, hotels en infrastructuur gerealiseerd. De schaal en waarde van deze projecten maken professionele beveiliging essentieel.',
    projecten: ['Haven-Stad gebiedsontwikkeling', 'Sluisbuurt IJburg', 'Zuidas verdere ontwikkeling', 'Woningbouw Amsterdam-Noord', 'Schiphol Trade Park'],
    features: ['Landelijke dekking vanuit Limburg', 'Ervaring met grootstedelijke projecten', 'Flexibele inzet voor langlopende projecten', 'Combinatie van alle beveiligingsdiensten'],
  },
  {
    naam: 'Rotterdam',
    slug: 'rotterdam',
    provincie: 'Zuid-Holland',
    intro: 'Rotterdam bouwt de stad van de toekomst. Van de Merwe-Vierhavens tot Feyenoord City — professionele bouwbeveiliging is onmisbaar.',
    context: 'Rotterdam is na Amsterdam de stad met de meeste bouwactiviteit in Nederland. De transformatie van havengebieden, grote woningbouwprojecten en infrastructuurwerken creëren een enorme vraag naar beveiligingsdiensten. De havenomgeving brengt extra uitdagingen met zich mee op het gebied van beveiliging.',
    projecten: ['Merwe-Vierhavens transformatie', 'Feyenoord City gebiedsontwikkeling', 'Woningbouw Hart van Zuid', 'Rotterdam The Hague Airport', 'Rijnhaven herontwikkeling'],
    features: ['Ervaring met havengebied-beveiliging', 'Landelijke dekking voor grote projecten', 'Kennis van maritieme beveiligingseisen', 'Schaalbare oplossingen voor lange trajecten'],
  },
];

function getRegioData(stad: string): RegioData | undefined {
  return regios.find(r => r.slug === stad);
}

export function generateStaticParams() {
  return regios.map((r) => ({ stad: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stad } = await params;
  const regio = getRegioData(stad);
  if (!regio) return { title: 'Regio niet gevonden' };

  return {
    title: `Bouwbeveiliging ${regio.naam} | Bouwbeveiliging Nederland`,
    description: `Professionele bouwplaatsbeveiliging in ${regio.naam} en omgeving. Gediplomeerde beveiligers, camerasystemen en surveillance voor uw bouwproject in ${regio.provincie}.`,
    openGraph: {
      title: `Bouwbeveiliging ${regio.naam}`,
      description: `Bouwplaatsbeveiliging in ${regio.naam} door Praesidion Security B.V.`,
      type: 'website',
      locale: 'nl_NL',
    },
  };
}

export default async function RegioPage({ params }: Props) {
  const { stad } = await params;
  const regio = getRegioData(stad);
  if (!regio) notFound();

  const andereRegios = regios.filter(r => r.slug !== stad);

  return (
    <>
      <NavBar />
      <main style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Hero */}
        <section style={{ background: '#333', color: '#fff', padding: '4rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
              BOUWBEVEILIGING IN {regio.provincie.toUpperCase()}
            </p>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Bouwbeveiliging {regio.naam}
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{regio.intro}</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                Offerte aanvragen
              </Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none' }}>
                046 240 2401
              </a>
            </div>
          </div>
        </section>

        {/* Context + projecten */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
                Bouwbeveiliging in {regio.naam}
              </h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '1.5rem' }}>{regio.context}</p>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.75rem' }}>Waarom Bouwbeveiliging Nederland in {regio.naam}?</h3>
              {regio.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#FFD700', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: '#555' }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <h3 style={{ fontWeight: 'bold', color: '#333', marginBottom: '1rem' }}>
                Projecten in {regio.naam} en omgeving
              </h3>
              {regio.projecten.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', padding: '0.5rem 0', borderBottom: i < regio.projecten.length - 1 ? '1px solid #eee' : 'none' }}>
                  <span style={{ color: '#FFD700', fontSize: '1.2rem' }}>📍</span>
                  <span style={{ color: '#555' }}>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diensten */}
        <section style={{ background: '#fff', padding: '3rem 1rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#333', marginBottom: '2rem', textAlign: 'center' }}>
              Onze diensten in {regio.naam}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {[
                { title: 'Bouwplaatsbeveiliging', desc: 'Gediplomeerde beveiligers op uw bouwplaats, 24/7 beschikbaar', href: '/diensten/bouwplaatsbeveiliging', icon: '🛡️' },
                { title: 'Camerasystemen', desc: 'Camera- en lichtmasten met remote monitoring en detectie', href: '/diensten/camerasystemen', icon: '📹' },
                { title: 'Toegangscontrole', desc: 'Portiersdiensten, pascontrole en bezoekersregistratie', href: '/diensten/toegangscontrole', icon: '🚧' },
                { title: 'Surveillance', desc: 'Mobiele patrouilles en alarmopvolging', href: '/diensten/surveillance', icon: '🚗' },
              ].map((item, i) => (
                <Link key={i} href={item.href} style={{ background: '#f9f9f9', borderRadius: '10px', padding: '1.5rem', border: '1px solid #eee', textDecoration: 'none', color: '#333' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h3 style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#333', color: '#fff', padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFD700' }}>
              Bouwproject in {regio.naam}?
            </h2>
            <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
              Neem contact op voor een vrijblijvende offerte voor bouwbeveiliging in {regio.naam} en omgeving.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#intakeform" style={{ background: '#FFD700', color: '#333', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>Offerte aanvragen</Link>
              <a href="tel:+31462402401" style={{ border: '2px solid #FFD700', color: '#FFD700', fontWeight: 'bold', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem' }}>Direct bellen</a>
            </div>
          </div>
        </section>

        {/* Andere regio's */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333', marginBottom: '1.5rem' }}>
            Ook actief in andere regio&apos;s
          </h2>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {andereRegios.map((r) => (
              <Link key={r.slug} href={`/regio/${r.slug}`} style={{ background: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', color: '#333', border: '1px solid #ddd', fontSize: '0.95rem' }}>
                📍 {r.naam}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
