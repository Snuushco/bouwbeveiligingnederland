import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Regio niet beschikbaar",
  robots: { index: false, follow: true },
};

export function generateStaticParams() {
  return [];
}

export default function RegioPage() {
  notFound();
}
