"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)] via-[#0B0B0F] to-[#1a0b2e] opacity-90" />
      
      {/* Glow areas */}
      <motion.div 
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-10 blur-[150px] bg-[var(--purple)]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-10 blur-[150px] bg-[var(--cyan)]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      {mounted && (
        <div className="absolute inset-0 opacity-40">
          {[...Array(40)].map((_, i) => {
            const isPurple = i % 2 === 0;
            const color = isPurple ? "rgba(123, 97, 255, 0.8)" : "rgba(0, 229, 255, 0.8)";
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: "blur(1px)",
                  boxShadow: `0 0 10px 2px ${color}`
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 4 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            );
          })}
        </div>
      )}

      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div 
          className="absolute top-[20%] left-[10%] w-16 h-16 border border-[var(--cyan)]/30 rounded-lg shadow-[0_0_15px_rgba(0,229,255,0.2)] backdrop-blur-md bg-[var(--cyan)]/5"
          animate={{ y: [0, 50, 0], rotate: [0, 45, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-[30%] right-[5%] w-24 h-24 border border-[var(--purple)]/30 rounded-full shadow-[0_0_20px_rgba(123,97,255,0.2)] backdrop-blur-md bg-[var(--purple)]/5"
          animate={{ y: [0, -60, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-[60%] left-[40%] w-12 h-12 border border-[var(--blue)]/20 rounded-md rotate-45 backdrop-blur-sm shadow-[0_0_15px_rgba(0,82,255,0.15)] bg-[var(--blue)]/5"
          animate={{ y: [0, -40, 0], rotate: [45, 90, 135] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Perspective Grid */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(transparent 95%, rgba(0,229,255,0.3) 100%), linear-gradient(90deg, transparent 95%, rgba(123,97,255,0.2) 100%)",
          backgroundSize: "60px 60px",
          transform: "perspective(1000px) rotateX(75deg) scale(2.5)",
          transformOrigin: "bottom center",
          boxShadow: "inset 0 100px 100px var(--bg)"
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-var(--bg) to-transparent z-0" />
      
      {/* SVG Noise Grain Overlay */}
      <svg className="noise-overlay w-full h-full opacity-[0.03] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
