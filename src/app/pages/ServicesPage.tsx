import { Navbar } from "../components/Navbar";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function ServicesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#040411", overflowX: "hidden" }}>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <ServicesSection />
        <ProcessSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}
