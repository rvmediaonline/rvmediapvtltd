import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, TechNova Inc",
    avatar: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    text: "Rv Media Online didn't just run our ads — they redesigned our entire growth architecture. In 8 months, our CAC dropped by 60% while revenue tripled. These guys genuinely understand the algorithm like no one else.",
    metric: "3x Revenue in 8 months",
    color: "#7C3AED",
  },
  {
    name: "Priya Sharma",
    role: "CMO, GrowthLabs",
    avatar: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    text: "We were invisible on Google. Rv Media Online built us a content fortress in 6 months — we went from page 5 to top 3 for 200+ keywords. Our organic leads now cover 70% of our pipeline. Absolutely transformational.",
    metric: "200+ keywords on Page 1",
    color: "#06B6D4",
  },
  {
    name: "Rahul Kapoor",
    role: "CEO, UrbanLogix",
    avatar: "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    text: "I've worked with 4 digital marketing agencies before. None of them came close to the level of strategy and execution Rv Media Online brings. They think like a growth partner, not a vendor. Our ROAS went from 1.8x to 7.2x.",
    metric: "ROAS jumped from 1.8x to 7.2x",
    color: "#F59E0B",
  },
  {
    name: "Sneha Joshi",
    role: "E-Commerce Director, AlphaRetail",
    avatar: "https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    rating: 5,
    text: "We hired Rv Media for social media but got so much more — they rebuilt our entire funnel, introduced us to performance content, and our Instagram ROAS is now consistently above 9x. Total game-changer.",
    metric: "9x+ Instagram ROAS",
    color: "#10B981",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040411 0%, #06061a 100%)" }}
    >
      {/* Big quote mark */}
      <div
        className="absolute top-10 right-10 pointer-events-none"
        style={{ opacity: 0.03 }}
      >
        <Quote size={200} color="white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full mb-4"
            style={{
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.78rem",
              color: "#10B981",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Client Success Stories
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
            What Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #10B981, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Partners Say
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12 rounded-3xl relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${t.color}30`,
                boxShadow: `0 30px 80px ${t.color}15`,
              }}
            >
              {/* Gradient accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: `linear-gradient(90deg, ${t.color}, transparent)` }}
              />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div
                    className="w-20 h-20 rounded-2xl overflow-hidden"
                    style={{ border: `2px solid ${t.color}50` }}
                  >
                    <ImageWithFallback
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} style={{ color: "#F59E0B" }} fill="#F59E0B" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Quote size={32} style={{ color: t.color, opacity: 0.4, marginBottom: "1rem" }} />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.05rem",
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: 1.8,
                      marginBottom: "1.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    "{t.text}"
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: "white",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          color: "rgba(255,255,255,0.45)",
                        }}
                      >
                        {t.role}
                      </div>
                    </div>
                    <div
                      className="px-4 py-1.5 rounded-full ml-auto"
                      style={{
                        background: `${t.color}15`,
                        border: `1px solid ${t.color}30`,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: t.color,
                      }}
                    >
                      📈 {t.metric}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? t.color : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "white",
                }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: t.color,
                  color: "white",
                  boxShadow: `0 0 20px ${t.color}40`,
                }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
