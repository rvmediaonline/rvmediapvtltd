import { motion } from "motion/react";
import { Search, Lightbulb, Rocket, BarChart3, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Deep Discovery & Audit",
    desc: "We begin with a full-spectrum audit — SEO health, competitor analysis, audience mapping, and funnel diagnostics to understand exactly where you stand and where to go.",
    color: "#7C3AED",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Algorithm Strategy Blueprint",
    desc: "Our strategists build a custom algorithm-first growth roadmap — channel selection, content pillars, keyword universe, and budget allocation across every touchpoint.",
    color: "#2563EB",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Creative Execution",
    desc: "Our in-house creatives, copywriters, and tech teams execute with surgical precision. From ad creatives to landing pages — everything is built to convert.",
    color: "#06B6D4",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Launch, Track & Optimize",
    desc: "Campaigns go live with real-time tracking dashboards. We run continuous A/B tests, bid adjustments, and creative iterations to maximize every rupee spent.",
    color: "#F59E0B",
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Scale & Compound Growth",
    desc: "Once we find the winning formula, we scale aggressively. Winning campaigns get reinvested into — compounding your growth month over month.",
    color: "#10B981",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #06061a 0%, #040411 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.3)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#06B6D4",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Our Process
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            How We{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06B6D4, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Architect Your Growth
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            A battle-tested 5-step framework refined over 15 years and 500+ client engagements.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-12 left-0 right-0 h-px hidden lg:block"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 10%, rgba(6,182,212,0.4) 50%, rgba(16,185,129,0.4) 90%, transparent)",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                {/* Circle Icon */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-6 relative"
                  style={{
                    background: `radial-gradient(circle, ${step.color}20 0%, rgba(0,0,0,0.5) 100%)`,
                    border: `2px solid ${step.color}50`,
                    boxShadow: `0 0 30px ${step.color}30`,
                  }}
                >
                  <step.icon size={32} style={{ color: step.color }} />
                  {/* Number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: step.color,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "white",
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
