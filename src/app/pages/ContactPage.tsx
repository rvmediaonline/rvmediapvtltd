import { Navbar } from "../components/Navbar";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#040411", overflowX: "hidden" }}>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
