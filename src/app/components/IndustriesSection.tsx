import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingBag, Building2, Heart, GraduationCap, Utensils,
  Car, Home, Briefcase, Plane, Dumbbell
} from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    name: "E-Commerce & Retail",
    desc: "From D2C brands to large retailers — we build omnichannel growth engines that drive sales on every platform.",
    metrics: ["340% avg revenue growth", "₹500Cr+ GMV managed", "7x avg ROAS"],
    color: "#7C3AED",
  },
  {
    icon: Building2,
    name: "Real Estate",
    desc: "Hyperlocal SEO, Google Maps dominance, and high-intent lead generation for developers and brokers.",
    metrics: ["10,000+ leads/month", "#1 local rankings", "60% lower CPL"],
    color: "#2563EB",
  },
  {
    icon: Heart,
    name: "Healthcare & Wellness",
    desc: "HIPAA-compliant digital marketing for clinics, hospitals, and wellness brands that builds trust and patient volume.",
    metrics: ["200% patient acquisition", "4.8★ avg GMB rating", "5x organic traffic"],
    color: "#EF4444",
  },
  {
    icon: GraduationCap,
    name: "EdTech & Education",
    desc: "Student acquisition campaigns, SEO for course keywords, and enrollment funnel optimization at scale.",
    metrics: ["3x enrollment growth", "₹80 avg lead cost", "15x ROAS on ads"],
    color: "#F59E0B",
  },
  {
    icon: Utensils,
    name: "Food & Restaurants",
    desc: "Local SEO, Google Maps optimization, and social media strategies that put restaurants on the map.",
    metrics: ["180% walk-in increase", "400+ reviews/month", "#1 in city rankings"],
    color: "#10B981",
  },
  {
    icon: Briefcase,
    name: "B2B & SaaS",
    desc: "Account-based marketing, LinkedIn ads, and long-tail SEO strategies that generate high-value enterprise leads.",
    metrics: ["850+ SQLs/month", "300% organic growth", "65% lower CPL"],
    color: "#06B6D4",
  },
  {
    icon: Car,
    name: "Automotive",
    desc: "Digital showroom strategies, test drive lead generation, and local SEO for dealerships and auto brands.",
    metrics: ["500+ test drives/month", "8x PPC ROAS", "4x website traffic"],
    color: "#8B5CF6",
  },
  {
    icon: Plane,
    name: "Travel & Hospitality",
    desc: "Seasonal campaign management, review building, and SEO strategies for hotels, travel agencies, and OTAs.",
    metrics: ["250% booking growth", "9x summer ROAS", "5★ reputation building"],
    color: "#EC4899",
  },
  {
    icon: Home,
    name: "Home Services",
    desc: "Google Local Services Ads, hyperlocal SEO, and reputation management for service businesses.",
    metrics: ["12x local leads", "#1 local pack", "90% retention rate"],
    color: "#14B8A6",
  },
  {
    icon: Dumbbell,
    name: "Fitness & Sports",
    desc: "Membership acquisition, brand ambassador campaigns, and app marketing for fitness brands.",
    metrics: ["500+ memberships/month", "6x ROAS on Meta", "40% lower CAC"],
    color: "#F97316",
  },
];

export function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #070720 0%, #040411 100%)" }}
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
            Industries We Serve
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Deep Expertise Across{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #F59E0B, #EF4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Vertical
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4 lg:gap-8">
          {/* Industry Tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
            {industries.map((industry, i) => (
              <motion.button
                key={industry.name}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left w-full flex-shrink-0 lg:flex-shrink transition-all"
                style={{
                  background: active === i ? `${industry.color}15` : "rgba(255,255,255,0.02)",
                  border: active === i
                    ? `1px solid ${industry.color}40`
                    : "1px solid rgba(255,255,255,0.06)",
                  minWidth: active === i ? "auto" : "160px",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: active === i ? `${industry.color}20` : "rgba(255,255,255,0.05)",
                  }}
                >
                  <industry.icon
                    size={16}
                    style={{ color: active === i ? industry.color : "rgba(255,255,255,0.4)" }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.83rem",
                    fontWeight: active === i ? 600 : 400,
                    color: active === i ? "white" : "rgba(255,255,255,0.4)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {industry.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl h-full"
                style={{
                  background: `linear-gradient(135deg, ${industries[active].color}10, rgba(255,255,255,0.02))`,
                  border: `1px solid ${industries[active].color}25`,
                  minHeight: "280px",
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `${industries[active].color}20`,
                      border: `1px solid ${industries[active].color}40`,
                      boxShadow: `0 0 30px ${industries[active].color}30`,
                    }}
                  >
                    {(() => {
                      const Icon = industries[active].icon;
                      return <Icon size={28} style={{ color: industries[active].color }} />;
                    })()}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {industries[active].name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: industries[active].color,
                      }}
                    >
                      Specialized Growth Strategy
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                  }}
                >
                  {industries[active].desc}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {industries[active].metrics.map((metric) => (
                    <div
                      key={metric}
                      className="p-4 rounded-xl text-center"
                      style={{
                        background: `${industries[active].color}10`,
                        border: `1px solid ${industries[active].color}20`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: industries[active].color,
                          display: "block",
                          lineHeight: 1.4,
                        }}
                      >
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
