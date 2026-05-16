import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ClientsStrip } from "../components/ClientsStrip";
import { StatsSection } from "../components/StatsSection";
import { ServicesSection } from "../components/ServicesSection";
import { WhyUsSection } from "../components/WhyUsSection";
import { ProcessSection } from "../components/ProcessSection";
import { ResultsSection } from "../components/ResultsSection";
import { IndustriesSection } from "../components/IndustriesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { PricingSection } from "../components/PricingSection";
import { BlogSection } from "../components/BlogSection";
import { CTASection } from "../components/CTASection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        background: "#040411",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <HeroSection />
      <ClientsStrip />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
      <ResultsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <BlogSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
