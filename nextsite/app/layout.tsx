import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging',
  description: 'Bouwbeveiliging Nederland - Specialist in bouwplaatsbeveiliging in Limburg en heel Nederland. Gediplomeerde beveiligers, portiersdiensten, camera- en lichtmasten, mobiele surveillance en alarmopvolging.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <title>Bouwbeveiliging Nederland | Specialist in Bouwplaatsbeveiliging</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
