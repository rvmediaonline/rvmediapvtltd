import { motion } from "motion/react";
import { Clock, ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const posts = [
  {
    category: "SEO",
    title: "How Google's 2025 Core Update Rewrites the Rules for Ranking",
    excerpt: "The latest algorithm shift rewards E-E-A-T depth, first-hand experience signals, and content that demonstrates genuine expertise. Here's what changed and how to adapt.",
    date: "May 2, 2026",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#7C3AED",
  },
  {
    category: "PPC",
    title: "The ROAS Formula: How We Hit 9x on Meta Ads in Q1 2026",
    excerpt: "Creative testing velocity, audience signal stacking, and bid strategy sequencing — the exact playbook that took our client from 2x to 9x ROAS in 90 days.",
    date: "April 22, 2026",
    readTime: "12 min read",
    img: "https://images.unsplash.com/photo-1676285437320-aa861c6967e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#06B6D4",
  },
  {
    category: "Strategy",
    title: "Algorithm Mastery: Building Brand Dominance Across All Platforms",
    excerpt: "Understanding the signal ecosystem across Google, Meta, YouTube, and LinkedIn — and how to build a unified algorithm-first brand that dominates everywhere simultaneously.",
    date: "April 10, 2026",
    readTime: "10 min read",
    img: "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    color: "#F59E0B",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040411 0%, #070720 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4"
        >
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full mb-4"
              style={{
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(139,92,246,0.3)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem",
                color: "#A78BFA",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Insights & Thinking
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
              The{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Algorithm Digest
              </span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.7)",
              whiteSpace: "nowrap",
            }}
          >
            View All Posts
            <ArrowUpRight size={14} />
          </motion.button>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${post.color}40`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${post.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(4,4,17,0.9))" }}
                />
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full"
                  style={{
                    background: `${post.color}20`,
                    border: `1px solid ${post.color}40`,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    color: post.color,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.4,
                    marginBottom: "0.75rem",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    marginBottom: "1.2rem",
                  }}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      {post.date}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span
                      className="flex items-center gap-1"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.3)",
                      }}
                    >
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    style={{ color: post.color }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
