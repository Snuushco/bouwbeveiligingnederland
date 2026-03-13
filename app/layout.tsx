import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bouwbeveiligingnederland.nl"),
  title: {
    default: "Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging",
    template: "%s | Bouwbeveiliging Nederland",
  },
  description:
    "Bouwbeveiliging Nederland - Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland. Gediplomeerde beveiligers, camerasystemen, surveillance en toegangscontrole.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://bouwbeveiligingnederland.nl",
    siteName: "Bouwbeveiliging Nederland",
    title: "Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging",
    description:
      "Bouwbeveiliging Nederland - Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland. Gediplomeerde beveiligers, camerasystemen, surveillance en toegangscontrole.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bouwbeveiliging Nederland",
    description:
      "Specialist in bouwplaatsbeveiliging in heel Nederland. Gediplomeerde beveiligers, camerasystemen, surveillance en toegangscontrole.",
    url: "https://bouwbeveiligingnederland.nl",
    telephone: "+31462402401",
    email: "bouw@praesidion.nl",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Praesidion Security B.V.",
      taxID: "NL868152237B01",
    },
  };

  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-navy-900 text-white">
        <NavBar />
        <main>{children}</main>
        <Footer />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
