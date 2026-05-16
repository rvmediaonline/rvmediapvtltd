import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Play, TrendingUp, Users, Award, Globe } from "lucide-react";
import { Scene3DHero } from "./3d/Scene3DHero";

const rotatingWords = ["SEO", "PPC", "Social Media", "Content", "Branding", "E-Commerce"];

const floatingStats = [
  { icon: TrendingUp, label: "Revenue Generated", value: "₹10B+", color: "#7C3AED" },
  { icon: Users, label: "Happy Clients", value: "500+", color: "#06B6D4" },
  { icon: Award, label: "Awards Won", value: "120+", color: "#F59E0B" },
  { icon: Globe, label: "Countries Served", value: "25+", color: "#10B981" },
];

function Particle({ x, y, size, duration }: { x: number; y: number; size: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: Math.random() > 0.5 ? "#7C3AED" : "#06B6D4",
        opacity: 0.4,
        filter: "blur(1px)",
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 3,
      }}
    />
  );
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [particles] = useState(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 4 + 3,
    }))
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Draw animated grid
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let offset = 0;

    const draw = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 60;
      ctx.strokeStyle = "rgba(124, 58, 237, 0.1)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = (offset % spacing) - spacing; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      // Horizontal lines
      for (let y = (offset % spacing) - spacing; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      offset += 0.3;
      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animFrame);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #040411 0%, #0a0520 50%, #040815 100%)" }}
    >
      {/* Animated Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Gradient Orbs */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <Particle key={p.id} x={p.x} y={p.y} size={p.size} duration={p.duration} />
        ))}
      </div>

      {/* Real 3D Scene */}
      <Scene3DHero />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(124, 58, 237, 0.1)",
              border: "1px solid rgba(124, 58, 237, 0.4)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#06B6D4", boxShadow: "0 0 8px #06B6D4" }}
            />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#A78BFA",
                letterSpacing: "0.1em",
              }}
            >
              India's #1 Algorithm-First Marketing Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 8vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            Scale Your Brand With{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Algorithm-Driven
            </span>{" "}
            <br />
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "linear-gradient(90deg, #F59E0B, #EF4444)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  minWidth: "auto",
                  display: "inline-flex",
                  justifyContent: "center",
                }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
              <span>Marketing</span>
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: "580px",
              marginBottom: "2.5rem",
            }}
          >
            <em style={{ color: "#A78BFA", fontStyle: "italic" }}>The Art of The Algorithm</em> — We blend data science, creative storytelling, and algorithmic precision to put your brand exactly where your customers are looking.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white relative overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              <span className="relative z-10">Get Free Strategy Call</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#results")}
              className="flex items-center gap-2 px-8 py-4 rounded-xl text-white group"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              <Play size={18} style={{ color: "#06B6D4" }} />
              View Our Results
            </motion.button>
          </motion.div>

          {/* Floating Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {floatingStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <stat.icon size={20} style={{ color: stat.color, marginBottom: "8px" }} />
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #040411)" }}
      />
    </section>
  );
}
