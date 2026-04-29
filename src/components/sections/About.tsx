"use client";

import { motion, Variants } from "framer-motion";
import { Terminal, Code2, Server } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function About() {
  return (
    <section className="relative py-24 md:py-32 flex flex-col items-center" id="about">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center w-full"
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Building <span className="text-[var(--cyan)]">systems</span> that scale.
          </motion.h2>
          
          <motion.div variants={fadeUp} className="space-y-6 text-[var(--fg-muted)] text-lg md:text-xl leading-relaxed max-w-3xl mb-16 font-medium">
            <p>
              My journey into software engineering started with a simple curiosity: <span className="text-[var(--fg)] text-white">how do complex products actually work under the hood?</span>
            </p>
            <p>
              Over the past 4 years, I've transitioned from building simple interfaces to architecting full-stack solutions. I specialize in bridging the gap between beautiful frontends (React, Next.js) and robust, scalable backends (.NET, Node).
            </p>
            <p>
              I don't just write code. I solve problems. Whether it's optimizing database queries, building real-time collaboration tools, or designing premium landing pages, my focus is always on delivering <span className="text-[var(--fg)] text-white">tangible business value</span> through clean, maintainable architecture.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
            {/* Card 1 */}
            <div className="h-full">
              <div className="glass h-full p-8 rounded-3xl flex flex-col items-center text-center group relative overflow-hidden premium-hover-card">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--cyan)]/0 to-transparent group-hover:from-[var(--cyan)]/5 transition-colors duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-[var(--cyan)]/10 text-[var(--cyan)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_var(--cyan)] group-hover:bg-[var(--cyan)]/20 transition-all duration-500 relative z-10">
                  <Terminal size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[var(--fg)] relative z-10">Problem Solving</h3>
                <p className="text-[var(--fg-muted)] relative z-10">Breaking down complex requirements into elegant technical solutions.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="h-full md:-translate-y-6">
              <div className="glass h-full p-8 rounded-3xl flex flex-col items-center text-center group relative overflow-hidden premium-hover-card">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--blue)]/0 to-transparent group-hover:from-[var(--blue)]/5 transition-colors duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-[var(--blue)]/10 text-[var(--blue)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_var(--blue)] group-hover:bg-[var(--blue)]/20 transition-all duration-500 relative z-10">
                  <Code2 size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[var(--fg)] relative z-10">Clean Code</h3>
                <p className="text-[var(--fg-muted)] relative z-10">Writing readable, maintainable, and well-documented software.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-full">
              <div className="glass h-full p-8 rounded-3xl flex flex-col items-center text-center group relative overflow-hidden premium-hover-card">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--purple)]/0 to-transparent group-hover:from-[var(--purple)]/5 transition-colors duration-500" />
                <div className="w-16 h-16 rounded-2xl bg-[var(--purple)]/10 text-[var(--purple)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_25px_var(--purple)] group-hover:bg-[var(--purple)]/20 transition-all duration-500 relative z-10">
                  <Server size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-[var(--fg)] relative z-10">Scalable Architecture</h3>
                <p className="text-[var(--fg-muted)] relative z-10">Designing systems that grow seamlessly with your user base.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
