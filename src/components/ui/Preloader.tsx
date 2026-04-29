"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 10) + 5;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
        }, 500); // small delay at 100% before animating out
      }
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)] text-[var(--fg)]"
        >
          {/* Background blurred glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[var(--teal)]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Centered Content */}
          <div className="flex flex-col items-center relative z-10 w-full max-w-sm px-8">
            <div className="flex justify-between w-full mb-2 font-mono text-sm tracking-widest text-[var(--fg-muted)]">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-1 bg-[var(--glass-border)] rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--teal)] to-[var(--magenta)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
            
            <div className="mt-8 font-heading text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-[var(--fg)] opacity-50 text-center" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-sm font-medium tracking-normal text-[var(--fg-muted)] lowercase">created by</span><br/>
              Andrew Bahgat
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
