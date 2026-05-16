import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useContactForm } from "../../hooks/useContactForm";

export function ContactSection() {
  const { form, setForm, loading, submitted, error, handleSubmit } = useContactForm();

  // Show error toast when error changes
  if (error) toast.error(error);

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.82rem",
    color: "rgba(255,255,255,0.5)",
    marginBottom: "6px",
    display: "block",
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040411 0%, #06061a 100%)" }}
    >
      {/* Background orbs */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.3)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "#A78BFA",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Ready to Master{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The Algorithm?
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Book your free 30-minute strategy call. We'll audit your current digital presence, identify your biggest growth opportunities, and present a custom roadmap — completely free, zero obligation.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: "Call Us", value: "+91 9508786003", color: "#7C3AED" },
                { icon: Mail, label: "Email Us", value: "Info.rvmediaonline.com", color: "#06B6D4" },
                { icon: MapPin, label: "Visit Us", value: "Noida, Uttar Pradesh, India", color: "#F59E0B" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.95rem",
                        color: "white",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free audit promise */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.08))",
                border: "1px solid rgba(124,58,237,0.25)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "0.5rem",
                }}
              >
                🎁 Free Website & SEO Audit (₹15,000 value)
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                }}
              >
                Every inquiry gets a comprehensive free audit — technical SEO, competitor gap analysis, and paid media opportunities. No sales pressure, just pure value.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl text-center"
                style={{
                  background: "rgba(16,185,129,0.05)",
                  border: "1px solid rgba(16,185,129,0.3)",
                }}
              >
                <CheckCircle size={60} style={{ color: "#10B981", margin: "0 auto 1.5rem" }} />
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  We'll Be In Touch Within 2 Hours!
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  Our strategy team is reviewing your details. Expect a call from us with your free audit report and a tailored growth proposal.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl space-y-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Rahul Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    >
                      <option value="" style={{ background: "#040411" }}>Select a service</option>
                      <option value="seo" style={{ background: "#040411" }}>SEO Services</option>
                      <option value="ppc" style={{ background: "#040411" }}>PPC / Google Ads</option>
                      <option value="social" style={{ background: "#040411" }}>Social Media Marketing</option>
                      <option value="content" style={{ background: "#040411" }}>Content Marketing</option>
                      <option value="web" style={{ background: "#040411" }}>Web Design & Dev</option>
                      <option value="ecommerce" style={{ background: "#040411" }}>E-commerce Marketing</option>
                      <option value="full" style={{ background: "#040411" }}>Full-Stack Digital Marketing</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Monthly Budget</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#040411" }}>Select budget range</option>
                    <option value="under30k" style={{ background: "#040411" }}>Under ₹30,000/month</option>
                    <option value="30-75k" style={{ background: "#040411" }}>₹30,000 – ₹75,000/month</option>
                    <option value="75-150k" style={{ background: "#040411" }}>₹75,000 – ₹1.5L/month</option>
                    <option value="150k+" style={{ background: "#040411" }}>₹1.5L+/month</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell Us About Your Goals</label>
                  <textarea
                    rows={4}
                    placeholder="What are your biggest growth challenges? What does success look like for your brand in 12 months?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.6)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white"
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                    boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    opacity: loading ? 0.75 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <><Loader2 size={18} className="animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={18} /> Get My Free Strategy Call</>
                  )}
                </motion.button>

                <p
                  className="text-center"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  100% confidential. No spam. We respond within 2 business hours.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
