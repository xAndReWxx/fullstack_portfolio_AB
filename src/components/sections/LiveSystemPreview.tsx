"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Server, Database } from "lucide-react";

export default function LiveSystemPreview() {
  return (
    <section className="relative py-16 md:py-24" id="system-preview">
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Fullstack <span className="text-[var(--teal)]">Architecture</span>
          </h2>
          <p className="text-[var(--fg-muted)] font-medium max-w-xl mx-auto">
            Visualizing the seamless data flow between interactive interfaces and robust backend systems.
          </p>
        </motion.div>

        <div className="relative h-[300px] md:h-[400px] glass rounded-3xl border-[var(--glass-border)] flex items-center justify-center overflow-hidden">
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal)]/5 to-[var(--magenta)]/5 opacity-50" />
          
          <div className="relative w-full max-w-3xl flex flex-col md:flex-row items-center justify-between px-8 md:px-12 z-10 gap-12 md:gap-0">
            
            {/* Node 1: Frontend */}
            <motion.div 
              className="relative flex flex-col items-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/30 flex items-center justify-center mb-4 text-[var(--teal)] shadow-[0_0_20px_rgba(0,255,198,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,198,0.4)] transition-all">
                <MonitorSmartphone size={32} />
              </div>
              <span className="font-bold text-[var(--fg)]">Frontend</span>
              <span className="text-xs text-[var(--fg-muted)] font-mono mt-1">React / Next.js</span>
            </motion.div>

            {/* Connecting Line 1 */}
            <div className="hidden md:block absolute left-[80px] right-[50%] h-0.5 top-8 md:top-10 -z-10 bg-gradient-to-r from-[var(--teal)]/20 to-[var(--orange)]/20">
              {/* Pulse animation */}
              <motion.div
                className="absolute top-0 bottom-0 w-8 bg-[var(--teal)] shadow-[0_0_15px_var(--teal)] blur-[2px]"
                animate={{ 
                  left: ["0%", "calc(100% - 32px)"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  times: [0, 0.1, 0.9, 1]
                }}
              />
            </div>

            {/* Node 2: Backend */}
            <motion.div 
              className="relative flex flex-col items-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--orange)]/10 border border-[var(--orange)]/30 flex items-center justify-center mb-4 text-[var(--orange)] shadow-[0_0_20px_rgba(255,122,24,0.2)] group-hover:shadow-[0_0_30px_rgba(255,122,24,0.4)] transition-all">
                <Server size={32} />
              </div>
              <span className="font-bold text-[var(--fg)]">Backend API</span>
              <span className="text-xs text-[var(--fg-muted)] font-mono mt-1">.NET Core</span>
            </motion.div>

            {/* Connecting Line 2 */}
            <div className="hidden md:block absolute left-[50%] right-[80px] h-0.5 top-8 md:top-10 -z-10 bg-gradient-to-r from-[var(--orange)]/20 to-[var(--magenta)]/20">
              {/* Pulse animation */}
              <motion.div
                className="absolute top-0 bottom-0 w-8 bg-[var(--orange)] shadow-[0_0_15px_var(--orange)] blur-[2px]"
                animate={{ 
                  left: ["0%", "calc(100% - 32px)"],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: 1,
                  times: [0, 0.1, 0.9, 1]
                }}
              />
            </div>

            {/* Node 3: Database */}
            <motion.div 
              className="relative flex flex-col items-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--magenta)]/10 border border-[var(--magenta)]/30 flex items-center justify-center mb-4 text-[var(--magenta)] shadow-[0_0_20px_rgba(255,60,172,0.2)] group-hover:shadow-[0_0_30px_rgba(255,60,172,0.4)] transition-all">
                <Database size={32} />
              </div>
              <span className="font-bold text-[var(--fg)]">Database</span>
              <span className="text-xs text-[var(--fg-muted)] font-mono mt-1">SQL Server</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
