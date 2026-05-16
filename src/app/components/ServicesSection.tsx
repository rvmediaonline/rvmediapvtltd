import { motion } from "motion/react";
import { Search, MousePointer, Share2, FileText, Monitor, ShoppingCart, MapPin, Video, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Dominate Google rankings with our data-driven SEO strategies. From technical audits to link building, we engineer organic growth.",
    tags: ["Technical SEO", "Link Building", "Keyword Research"],
    color: "#7C3AED",
    glow: "rgba(124,58,237,0.3)",
  },
  {
    icon: MousePointer,
    title: "PPC / Google Ads",
    desc: "Maximize ROI with precision-targeted paid campaigns. Our AI-optimized bid strategies deliver leads at the lowest possible cost.",
    tags: ["Google Ads", "Meta Ads", "Remarketing"],
    color: "#2563EB",
    glow: "rgba(37,99,235,0.3)",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build an unstoppable social presence. We craft viral content strategies that convert followers into loyal brand advocates.",
    tags: ["Instagram", "LinkedIn", "YouTube"],
    color: "#EC4899",
    glow: "rgba(236,72,153,0.3)",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Algorithm-optimized content that educates, engages, and converts. Our writers speak both human and machine language.",
    tags: ["Blog Writing", "Video Scripts", "Infographics"],
    color: "#F59E0B",
    glow: "rgba(245,158,11,0.3)",
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    desc: "3D-forward, conversion-optimized websites that load in milliseconds. Built for the future, designed for results.",
    tags: ["React", "UI/UX", "CRO"],
    color: "#06B6D4",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Marketing",
    desc: "Turn your online store into a revenue machine. From product pages to cart abandonment, we optimize every touchpoint.",
    tags: ["Shopify", "Amazon SEO", "Conversion"],
    color: "#10B981",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    desc: "Own the local search results. Google Maps, local citations, and review management to drive foot traffic and local leads.",
    tags: ["Google My Business", "Citations", "Reviews"],
    color: "#EF4444",
    glow: "rgba(239,68,68,0.3)",
  },
  {
    icon: Video,
    title: "Video Marketing",
    desc: "YouTube SEO, Reels strategy, and video ad campaigns that capture attention and drive measurable conversions.",
    tags: ["YouTube SEO", "Reels", "Video Ads"],
    color: "#8B5CF6",
    glow: "rgba(139,92,246,0.3)",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #070720 0%, #040411 100%)" }}
    >
      {/* Background decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
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
            What We Do
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
            Services That{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Move the Algorithm
            </span>
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every service is engineered around how algorithms reward visibility, trust, and relevance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${service.color}60`;
                e.currentTarget.style.boxShadow = `0 20px 60px ${service.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "0.75rem",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md"
                    style={{
                      background: `${service.color}10`,
                      border: `1px solid ${service.color}25`,
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      color: service.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: service.color }}
              >
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}>
                  Explore Service
                </span>
                <ArrowRight size={14} />
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.2))",
              border: "1px solid rgba(124,58,237,0.4)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            View All Services
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
