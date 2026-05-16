import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "#040411" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(37,99,235,0.1) 50%, rgba(6,182,212,0.1) 100%)",
            border: "1px solid rgba(124,58,237,0.3)",
          }}
        >
          {/* Animated background circles */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(124,58,237,0.3), transparent)" }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(6,182,212,0.2), transparent)" }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, #7C3AED, #06B6D4, #7C3AED)" }}
          />

          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
              boxShadow: "0 0 40px rgba(124,58,237,0.5)",
            }}
          >
            <Zap size={32} color="white" fill="white" />
          </motion.div>

          <h2
            className="relative z-10"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Your Competitors Are
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #F59E0B, #EF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Already Growing.
            </span>
          </h2>

          <p
            className="relative z-10 mx-auto mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Every day without a strategy is revenue left on the table. Let's fix that — starting today with a free, no-obligation growth audit worth ₹15,000.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-10 py-4 rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                boxShadow: "0 0 40px rgba(124,58,237,0.5)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              Claim My Free Audit Now
              <ArrowRight size={18} />
            </motion.button>

            <button
              onClick={() => scrollTo("#services")}
              className="px-8 py-4 rounded-xl text-white/70 hover:text-white transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              Explore Services First
            </button>
          </div>

          <p
            className="mt-6 relative z-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            No contract. No credit card. Response guaranteed within 2 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
