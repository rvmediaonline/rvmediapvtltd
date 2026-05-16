import { motion } from "motion/react";
import { Brain, Target, BarChart3, Shield, Rocket, Clock } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI + Human Intelligence",
    desc: "We combine machine learning algorithms with human creativity to build campaigns that outsmart the competition.",
    color: "#7C3AED",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    desc: "Laser-focused audience segmentation ensures your message reaches exactly the right person at the right moment.",
    color: "#06B6D4",
  },
  {
    icon: BarChart3,
    title: "Data-First Decisions",
    desc: "Every strategy is backed by real-time data. No guesswork — only measurable, reportable, scalable results.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    desc: "Live dashboards, weekly reports, and zero hidden fees. You always know exactly where your money is going.",
    color: "#10B981",
  },
  {
    icon: Rocket,
    title: "Speed to Market",
    desc: "We launch in days, not months. Agile sprints and dedicated team pods ensure your campaigns go live fast.",
    color: "#EF4444",
  },
  {
    icon: Clock,
    title: "24/7 Campaign Monitoring",
    desc: "Our automated alert system and dedicated account managers watch your campaigns around the clock.",
    color: "#8B5CF6",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040411 0%, #06061a 100%)" }}
    >
      {/* Big background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ opacity: 0.025 }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "20vw",
            fontWeight: 800,
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          WHY US
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
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
              Why Rv Media Online
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
              We Don't Just Run{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Campaigns
              </span>
              <br />
              We Engineer Growth
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Most agencies copy-paste strategies. We reverse-engineer algorithms. Our team of data scientists, creative directors, and growth hackers decode exactly what each platform rewards — then build your brand around that signal.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                fontStyle: "italic",
              }}
            >
              "The Art of The Algorithm" isn't a tagline — it's our operating system.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3">
              {["Google Premier Partner", "Meta Business Partner", "ISO Certified", "350+ Team Members"].map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  ✓ {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Reason Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-5 rounded-xl group"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${reason.color}40`;
                  e.currentTarget.style.background = `${reason.color}08`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${reason.color}15`, border: `1px solid ${reason.color}30` }}
                >
                  <reason.icon size={18} style={{ color: reason.color }} />
                </div>
                <h4
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "0.4rem",
                  }}
                >
                  {reason.title}
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.6,
                  }}
                >
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
