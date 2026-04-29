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

        <div className="relative glass rounded-3xl border border-[var(--glass-border)] flex items-center justify-center overflow-hidden py-16 md:py-0 md:h-[400px]">
          {/* Animated Background Pulse */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--teal)]/5 to-[var(--magenta)]/5 opacity-50 pointer-events-none" />
          
          <div className="relative w-full max-w-4xl flex flex-col md:flex-row items-stretch md:items-center justify-between px-8 md:px-12 z-10">
            
            {/* Node 1: Frontend */}
            <motion.div 
              className="relative flex flex-col items-center group shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--teal)]/10 border border-[var(--teal)]/30 flex items-center justify-center mb-4 text-[var(--teal)] shadow-[0_0_20px_rgba(0,255,198,0.2)] group-hover:shadow-[0_0_30px_rgba(0,255,198,0.4)] transition-all">
                <MonitorSmartphone size={32} />
              </div>
              <span className="font-bold text-[var(--fg)]">Frontend</span>
              <span className="text-xs text-[var(--fg-muted)] font-mono mt-1 text-center">React / Next.js</span>
            </motion.div>

            {/* Connecting Line 1 */}
            <div className="relative flex-1 w-0.5 md:w-auto md:h-0.5 h-16 md:h-auto mx-auto md:mx-4 my-2 md:my-0 bg-gradient-to-b md:bg-gradient-to-r from-[var(--teal)]/30 to-[var(--orange)]/30 rounded-full md:mt-[-40px]">
              <style>{`
                @media (max-width: 767px) {
                  .pulse-1 { animation: pulse-v 2s linear infinite; }
                }
                @media (min-width: 768px) {
                  .pulse-1 { animation: pulse-h 2s linear infinite; }
                }
              `}</style>
              <div className="pulse-1 absolute w-full h-8 md:w-8 md:h-full bg-[var(--teal)] shadow-[0_0_15px_var(--teal)] blur-[2px] rounded-full" />
            </div>

            {/* Node 2: Backend */}
            <motion.div 
              className="relative flex flex-col items-center group shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--orange)]/10 border border-[var(--orange)]/30 flex items-center justify-center mb-4 text-[var(--orange)] shadow-[0_0_20px_rgba(255,122,24,0.2)] group-hover:shadow-[0_0_30px_rgba(255,122,24,0.4)] transition-all">
                <Server size={32} />
              </div>
              <span className="font-bold text-[var(--fg)]">Backend API</span>
              <span className="text-xs text-[var(--fg-muted)] font-mono mt-1 text-center">.NET Core</span>
            </motion.div>

            {/* Connecting Line 2 */}
            <div className="relative flex-1 w-0.5 md:w-auto md:h-0.5 h-16 md:h-auto mx-auto md:mx-4 my-2 md:my-0 bg-gradient-to-b md:bg-gradient-to-r from-[var(--orange)]/30 to-[var(--magenta)]/30 rounded-full md:mt-[-40px]">
              <style>{`
                @keyframes pulse-v {
                  0% { top: 0%; transform: translateY(0%); opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { top: 100%; transform: translateY(-100%); opacity: 0; }
                }
                @keyframes pulse-h {
                  0% { left: 0%; transform: translateX(0%); opacity: 0; }
                  10% { opacity: 1; }
                  90% { opacity: 1; }
                  100% { left: 100%; transform: translateX(-100%); opacity: 0; }
                }
                @media (max-width: 767px) {
                  .pulse-2 { animation: pulse-v 2s linear infinite 1s; }
                }
                @media (min-width: 768px) {
                  .pulse-2 { animation: pulse-h 2s linear infinite 1s; }
                }
              `}</style>
              <div className="pulse-2 absolute w-full h-8 md:w-8 md:h-full bg-[var(--orange)] shadow-[0_0_15px_var(--orange)] blur-[2px] rounded-full opacity-0" />
            </div>

            {/* Node 3: Database */}
            <motion.div 
              className="relative flex flex-col items-center group shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--magenta)]/10 border border-[var(--magenta)]/30 flex items-center justify-center mb-4 text-[var(--magenta)] shadow-[0_0_20px_rgba(255,60,172,0.2)] group-hover:shadow-[0_0_30px_rgba(255,60,172,0.4)] transition-all">
                <Database size={32} />
              </div>
              <span className="font-bold text-[var(--fg)]">Database</span>
              <span className="text-xs text-[var(--fg-muted)] font-mono mt-1 text-center">SQL Server</span>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
