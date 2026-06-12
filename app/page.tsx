import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import UrgencyBanner from "./components/UrgencyBanner";
import DienstenOverview from "./components/DienstenOverview";
import WhySection from "./components/WhySection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <UrgencyBanner />
      <DienstenOverview />
      <WhySection />
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                Professionele onderbouwing
              </span>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Geen verzonnen reviews of vaste prijsclaims — wel een controleerbare aanpak.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Bouwplaatsbeveiliging is afhankelijk van projectfase, locatie, toegangspunten,
                werktijden, materiaalwaarde en gewenste rapportage. Daarom tonen we geen
                standaardtarieven of testimonials zonder aantoonbare toestemming.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
              <h3 className="text-xl font-bold">Wat u wel krijgt</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Risico-inventarisatie per bouwplaats</li>
                <li>• Postinstructies, sluitrondes en escalatieafspraken</li>
                <li>• Advies over beveiligers, camera’s, toegang en surveillance</li>
                <li>• Offerte op basis van echte inzet en projectomstandigheden</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
      <ContactSection />
    </>
  );
}
