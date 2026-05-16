import { motion } from "motion/react";
import { Check, Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    tagline: "Perfect for early-stage brands",
    price: "₹29,999",
    period: "/month",
    color: "#06B6D4",
    features: [
      "SEO Audit & Strategy",
      "On-Page Optimization (up to 20 pages)",
      "Google My Business Setup",
      "Monthly Keyword Tracking (50 KW)",
      "2x Blog Posts / Month",
      "Basic Google Ads Management",
      "Monthly Performance Report",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Star,
    name: "Growth",
    tagline: "For brands ready to scale fast",
    price: "₹79,999",
    period: "/month",
    color: "#7C3AED",
    features: [
      "Everything in Starter",
      "Advanced Technical SEO",
      "Link Building (10 high-DA links/month)",
      "Meta & Google Ads Management",
      "Social Media (3 platforms, 20 posts/month)",
      "Content Calendar & 8 Blogs/month",
      "Landing Page Design & CRO",
      "Weekly Reports + Dedicated Manager",
      "Quarterly Strategy Sessions",
    ],
    cta: "Start Growing",
    popular: true,
  },
  {
    icon: Crown,
    name: "Enterprise",
    tagline: "Full-stack growth for market leaders",
    price: "Custom",
    period: "",
    color: "#F59E0B",
    features: [
      "Everything in Growth",
      "Full-Funnel Marketing Strategy",
      "360° Omnichannel Campaigns",
      "Dedicated 10-Member Team Pod",
      "Custom Dashboard & Live Reporting",
      "PR & Influencer Marketing",
      "Video Production & YouTube SEO",
      "CRM Integration & Automation",
      "Priority 24/7 Support + CMO Access",
    ],
    cta: "Let's Talk",
    popular: false,
  },
];

export function PricingSection() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #070720 0%, #040411 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(124,58,237,0.3)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#A78BFA",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Transparent Pricing
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
            Choose Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Growth Plan
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
            No lock-in contracts. No hidden fees. Cancel anytime. Just pure, compounding growth.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl p-6 sm:p-8 overflow-hidden"
              style={{
                background: plan.popular
                  ? `linear-gradient(135deg, rgba(124,58,237,0.15), rgba(37,99,235,0.1))`
                  : "rgba(255,255,255,0.02)",
                border: plan.popular
                  ? "1px solid rgba(124,58,237,0.5)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: plan.popular ? "0 30px 80px rgba(124,58,237,0.2)" : "none",
                marginTop: plan.popular ? 0 : "0",
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center"
                  style={{
                    background: "linear-gradient(90deg, #7C3AED, #2563EB)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "white",
                    letterSpacing: "0.1em",
                  }}
                >
                  ⚡ MOST POPULAR — 60% of clients choose this
                </div>
              )}

              <div style={{ marginTop: plan.popular ? "2rem" : 0 }}>
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}30` }}
                  >
                    <plan.icon size={20} style={{ color: plan.color }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      {plan.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {plan.tagline}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: plan.color,
                      filter: `drop-shadow(0 0 20px ${plan.color}50)`,
                    }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.4)",
                        marginLeft: "4px",
                      }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${plan.color}20` }}
                      >
                        <Check size={12} style={{ color: plan.color }} />
                      </div>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.83rem",
                          color: "rgba(255,255,255,0.65)",
                          lineHeight: 1.5,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToContact}
                  className="w-full py-3.5 rounded-xl text-white"
                  style={{
                    background: plan.popular
                      ? `linear-gradient(135deg, #7C3AED, #2563EB)`
                      : `${plan.color}15`,
                    border: plan.popular ? "none" : `1px solid ${plan.color}40`,
                    color: plan.popular ? "white" : plan.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    boxShadow: plan.popular ? `0 0 30px rgba(124,58,237,0.4)` : "none",
                  }}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          All plans include a free 14-day onboarding sprint. 30-day satisfaction guarantee. GST applicable.
        </motion.p>
      </div>
    </section>
  );
}
