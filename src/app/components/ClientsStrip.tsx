import { motion } from "motion/react";

const clients = [
  "TechNova Inc", "GrowthLabs", "BrandPeak", "DigitalForge", "NexGen Media",
  "AlphaRetail", "CloudVentures", "PulseBrands", "ZenithCo", "RapidScale",
  "MetroFinance", "UrbanLogix", "SwiftCommerce", "SkylineGroup", "DataVerse",
];

export function ClientsStrip() {
  return (
    <section
      className="py-14 relative overflow-hidden"
      style={{ background: "#040411", borderTop: "1px solid rgba(124,58,237,0.15)", borderBottom: "1px solid rgba(124,58,237,0.15)" }}
    >
      <div className="text-center mb-8">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Trusted by 150+ Growing Brands Worldwide
        </p>
      </div>

      {/* Scrolling marquee */}
      <div className="relative overflow-hidden max-w-full">
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #040411, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #040411, transparent)" }}
        />

        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
        >
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: `hsl(${(i * 37) % 360}, 70%, 50%)`,
                  opacity: 0.7,
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 500,
                }}
              >
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
