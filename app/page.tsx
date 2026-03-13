import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import UrgencyBanner from "./components/UrgencyBanner";
import DienstenOverview from "./components/DienstenOverview";
import WhySection from "./components/WhySection";
import TestimonialsSection from "./components/TestimonialsSection";
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
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
