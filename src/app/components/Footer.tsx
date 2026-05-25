import { motion } from "motion/react";
import { Zap, Twitter, Instagram, Linkedin, Youtube, Facebook, ArrowUpRight, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNewsletter } from "../../hooks/useNewsletter";

const footerLinks = {
  Services: [
    "SEO Services",
    "PPC / Google Ads",
    "Meta Ads",
    "SaaS B2B",
    "Tech Solutions",
    "Ai Business Integration",
    "Social Media Marketing",
    "Content Marketing",
    "Web Design & Dev",
    "E-commerce Marketing",
    "Local SEO",
    "Video Marketing",
  ],
  Company: ["About Us", "Our Team", "Careers", "Partners", "Press & Media", "Awards"],
  Resources: ["Case Studies", "Blog", "Free SEO Audit", "Marketing Tools", "Academy", "Webinars"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"],
};

const socials = [
  { icon: Twitter, label: "Twitter", color: "#1DA1F2" },
  { icon: Instagram, label: "Instagram", color: "#E1306C" },
  { icon: Linkedin, label: "LinkedIn", color: "#0A66C2" },
  { icon: Youtube, label: "YouTube", color: "#FF0000" },
  { icon: Facebook, label: "Facebook", color: "#1877F2" },
];

export function Footer() {
  const { email, setEmail, loading, success, error, subscribe } = useNewsletter();

  if (error) toast.error(error);
  if (success && email === "") toast.success("You're subscribed to The Algorithm Digest! 🎉");
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #06061a 0%, #020210 100%)",
        borderTop: "1px solid rgba(124,58,237,0.15)",
      }}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.4)",
                }}
              >
                <Zap size={20} className="text-white" fill="white" />
              </div>
              <div>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #ffffff, #A78BFA)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Rv Media Technologies
                </span>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    color: "#06B6D4",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  The Art of The Algorithm + Code
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
                maxWidth: "280px",
              }}
            >
              India's premier algorithm-driven digital marketing & Tech agency. We engineer brands for visibility, authority, and compounding growth.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 flex-wrap mb-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = s.color;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = `${s.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {["Google Partner", "Meta Partner", "ISO 9001"].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h4
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group flex items-center gap-1 transition-colors"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.83rem",
                        color: "rgba(255,255,255,0.35)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
            <div>
              <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>
                The Algorithm Digest — Weekly Newsletter
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.35)" }}>
                Algorithm updates, growth tactics, and case studies. 12,000+ marketers subscribed.
              </p>
            </div>
            {success ? (
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.9rem", color: "#10B981", fontWeight: 600, padding: "10px 20px", borderRadius: 12, background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)" }}>
                ✓ You're subscribed!
              </div>
            ) : (
              <form onSubmit={subscribe} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 rounded-xl text-white placeholder:text-white/20"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", outline: "none" }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: loading ? 1 : 1.05 }}
                  whileTap={{ scale: loading ? 1 : 0.95 }}
                  disabled={loading}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white"
                  style={{ background: "linear-gradient(135deg, #7C3AED, #2563EB)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.85rem", fontWeight: 600, whiteSpace: "nowrap", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.75 : 1 }}
                >
                  {loading ? <Loader2 size={14} className="animate-spin" /> : <><span>Subscribe</span><ArrowUpRight size={14} /></>}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © 2021 Rv Media Technologies Pvt. Ltd. All rights reserved. | "The Art of The Algorithm & Code"111
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.2)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.2)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
