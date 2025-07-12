import "./globals.css";

export const metadata = {
  title: 'Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging',
  description: 'Bouwbeveiliging Nederland - Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland. Gediplomeerde beveiligers, portiersdiensten, camera- en lichtmasten, mobiele surveillance en alarmopvolging.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <title>Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging</title>
        <meta name="description" content="Bouwbeveiliging Nederland - Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland. Gediplomeerde beveiligers, portiersdiensten, camera- en lichtmasten, mobiele surveillance en alarmopvolging." />
        <meta property="og:title" content="Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging" />
        <meta property="og:description" content="Bouwbeveiliging Nederland - Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland. Gediplomeerde beveiligers, portiersdiensten, camera- en lichtmasten, mobiele surveillance en alarmopvolging." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nl_NL" />
        <meta name="robots" content="index, follow" />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
