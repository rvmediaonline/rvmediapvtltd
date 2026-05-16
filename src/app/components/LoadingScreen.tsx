import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#040411",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
            boxShadow: "0 0 40px rgba(124,58,237,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Zap size={32} color="white" fill="white" />
        </motion.div>

        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              background: "linear-gradient(90deg, #ffffff, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Rv Media Online
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              color: "#06B6D4",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            The Art of The Algorithm
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div
        style={{
          width: 220,
          height: 2,
          borderRadius: 2,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #7C3AED, #06B6D4)",
            borderRadius: 2,
            boxShadow: "0 0 10px rgba(124,58,237,0.8)",
          }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.1em",
        }}
      >
        Initializing 3D Experience...
      </motion.p>
    </motion.div>
  );
}
