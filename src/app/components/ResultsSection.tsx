import { motion } from "motion/react";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const caseStudies = [
  {
    category: "E-commerce",
    title: "D2C Fashion Brand",
    challenge: "Stuck at ₹5L/month revenue with poor ROAS and high CAC.",
    result: "Scaled to ₹1.2Cr/month in 6 months",
    metrics: [
      { label: "Revenue Growth", value: "24x" },
      { label: "ROAS Improved", value: "640%" },
      { label: "CAC Reduced", value: "-72%" },
    ],
    color: "#7C3AED",
    img: "https://images.unsplash.com/photo-1676285437320-aa861c6967e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    category: "B2B SaaS",
    title: "HR Tech Platform",
    challenge: "Zero organic traffic, relying 100% on paid with high CPL.",
    result: "300% organic traffic growth in 9 months",
    metrics: [
      { label: "Organic Growth", value: "300%" },
      { label: "Leads from SEO", value: "850+" },
      { label: "CPL Reduction", value: "-65%" },
    ],
    color: "#06B6D4",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    category: "Local Business",
    title: "Multi-Location Restaurant",
    challenge: "Invisible on Google Maps, losing customers to competitors.",
    result: "#1 on Google Maps in 45 days",
    metrics: [
      { label: "Walk-in Increase", value: "180%" },
      { label: "Reviews Generated", value: "400+" },
      { label: "Map Ranking", value: "#1" },
    ],
    color: "#F59E0B",
    img: "https://images.unsplash.com/photo-1762267122021-6b507c925abc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export function ResultsSection() {
  return (
    <section
      id="results"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040411 0%, #070720 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(245,158,11,0.1)",
              border: "1px solid rgba(245,158,11,0.3)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#F59E0B",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Case Studies
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
            Real Brands.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #F59E0B, #EF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Real Results.
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
            Every number below is a real client result. No projections. No estimates. Just proof.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                border: `1px solid rgba(255,255,255,0.07)`,
                background: "rgba(255,255,255,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cs.color}50`;
                e.currentTarget.style.boxShadow = `0 20px 60px ${cs.color}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={cs.img}
                  alt={cs.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent, rgba(4,4,17,0.8))`,
                  }}
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full"
                  style={{
                    background: `${cs.color}20`,
                    border: `1px solid ${cs.color}50`,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    color: cs.color,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {cs.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "white",
                    marginBottom: "0.5rem",
                  }}
                >
                  {cs.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: "1rem",
                    lineHeight: 1.6,
                  }}
                >
                  {cs.challenge}
                </p>

                {/* Result highlight */}
                <div
                  className="px-4 py-3 rounded-xl mb-5 flex items-center gap-2"
                  style={{ background: `${cs.color}10`, border: `1px solid ${cs.color}25` }}
                >
                  <TrendingUp size={16} style={{ color: cs.color }} />
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: cs.color,
                    }}
                  >
                    {cs.result}
                  </span>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: cs.color,
                        }}
                      >
                        {m.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          color: "rgba(255,255,255,0.35)",
                          lineHeight: 1.4,
                          marginTop: "2px",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Read more */}
                <div
                  className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ color: cs.color }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem" }}>
                    Read Full Case Study
                  </span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
