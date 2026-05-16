import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navLinks = [
  {
    label: "Services",
    href: "#services",
    children: [
      "SEO Services",
      "PPC / Google Ads",
      "Social Media Marketing",
      "Content Marketing",
      "Web Design & Dev",
      "E-commerce Marketing",
      "Local SEO",
      "Video Marketing",
    ],
  },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "rgba(5, 5, 20, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(124, 58, 237, 0.2)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Rv Media Online Logo" 
              className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => !link.children && scrollTo(link.href)}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-white/80 hover:text-white transition-all group"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  )}
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "linear-gradient(90deg, #7C3AED, #06B6D4)" }}
                  />
                </button>

                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 py-2 rounded-xl min-w-48"
                      style={{
                        background: "rgba(10, 10, 30, 0.95)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(124, 58, 237, 0.3)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      }}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#services"
                          className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/5 transition-all"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}
                          onClick={(e) => { e.preventDefault(); scrollTo("#services"); }}
                        >
                          {child}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2.5 rounded-xl text-white/80 hover:text-white transition-all border border-white/10 hover:border-white/20"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem" }}
            >
              Free Audit
            </button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollTo("#contact")}
              className="px-5 py-2.5 rounded-xl text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 600,
              }}
            >
              Grow My Business
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "rgba(5, 5, 20, 0.98)",
              borderTop: "1px solid rgba(124, 58, 237, 0.2)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 pb-2 space-y-3">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-3 rounded-xl text-white border border-white/20 hover:border-purple-500 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Free Website Audit
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-3 rounded-xl text-white"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Grow My Business
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
