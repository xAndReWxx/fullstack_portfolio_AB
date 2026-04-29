"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Terminal, Mail, Circle } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useState, MouseEvent, useEffect } from "react";
import Counter from "@/components/ui/Counter";
/* ─── Stagger animation config ─── */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Happy Clients" },
];

const technologies = [
  { name: "React", icon: <svg viewBox="-11.5 -10.2 23 20.4" width="22" height="22" fill="currentColor"><circle cx="0" cy="0" r="2.05"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>, color: "#61DAFB" },
  { name: "Next.js", icon: <div className="font-bold text-lg leading-none tracking-tighter">N</div>, color: "#FFFFFF" },
  { name: "TypeScript", icon: <div className="bg-[#3178C6] text-white text-[12px] font-bold w-[22px] h-[22px] flex items-center justify-center rounded-sm">TS</div>, color: "#3178C6" },
  { name: "JavaScript", icon: <div className="bg-[#F7DF1E] text-black text-[12px] font-bold w-[22px] h-[22px] flex items-center justify-center rounded-sm">JS</div>, color: "#F7DF1E" },
  { name: "Tailwind", icon: <div className="text-[#38B2AC] font-bold text-xl leading-none">~</div>, color: "#38B2AC" },
  { name: ".NET", icon: <div className="text-white text-[12px] font-bold">.NET</div>, color: "#512BD4" },
  { name: "C#", icon: <div className="text-white text-[12px] font-bold bg-[#9B4993] w-[22px] h-[22px] flex items-center justify-center rounded-sm">C#</div>, color: "#9B4993" },
  { name: "PostgreSQL", icon: <div className="text-[#336791] font-bold text-[12px]">PG</div>, color: "#336791" },
  { name: "MongoDB", icon: <div className="text-[#47A248] font-bold text-[12px]">MDB</div>, color: "#47A248" },
  { name: "Docker", icon: <div className="text-[#2496ED] font-bold text-[12px]">DKR</div>, color: "#2496ED" },
];

export default function Hero() {
  const { displayed } = useTypingEffect("Fullstack Developer_", 100, 2800);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-28 pb-16 overflow-hidden" id="home">
      
      {/* 🌠 FLOATING SIDEBAR */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50 glass py-6 px-3 rounded-full border border-[var(--glass-border)] shadow-lg bg-[var(--bg)]/50 backdrop-blur-md">
        <a href="#" className="text-[var(--fg-muted)] hover:text-white transition-colors hover:scale-110"><GithubIcon /></a>
        <a href="#" className="text-[var(--fg-muted)] hover:text-white transition-colors hover:scale-110"><LinkedinIcon /></a>
        <a href="#" className="text-[var(--fg-muted)] hover:text-white transition-colors hover:scale-110"><Mail size={20} /></a>
        <div className="w-2 h-2 rounded-full bg-[var(--teal)] shadow-[0_0_8px_var(--teal)] mt-2" />
      </div>

      {/* 🌌 LAYERED BACKGROUND - REDUCED GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] opacity-80" />
        
        {/* Glow areas - Reduced */}
        <motion.div 
          className="absolute top-[0%] right-[-10%] w-[40vw] h-[40vw] rounded-full opacity-[0.03] blur-[100px] bg-[var(--magenta)]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-[0.04] blur-[100px] bg-[var(--teal)]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Particles - Reduced */}
        <div className="absolute inset-0 opacity-20">
          {mounted && [...Array(20)].map((_, i) => {
            const isOrange = i % 2 === 0;
            const color = isOrange ? "rgba(255, 122, 24, 0.3)" : "rgba(0, 255, 198, 0.3)";
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  filter: "blur(0.5px)",
                  boxShadow: `0 0 4px 1px ${color}`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 6 + Math.random() * 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 5,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center flex-grow mt-8 justify-center">
        
        {/* 🚀 CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center w-full"
        >
          <motion.div variants={fadeUp} className="mb-2 flex items-center justify-center gap-2 text-[var(--teal)]">
            <span className="text-xl tracking-wide"><span className="font-bold italic">Hi,</span> my name is</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.1] mb-2 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            <span className="animated-gradient-text block pb-2">
              Mostafa Eltalawy
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="h-10 md:h-12 flex items-center justify-center mb-6">
            <span className="text-2xl sm:text-3xl md:text-4xl font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] text-center">
              {displayed}
              <span className="animate-blink inline-block ml-1 w-3 h-[1em] bg-[var(--teal)] align-middle"></span>
            </span>
          </motion.div>

          {/* Statement Glass Card */}
          <motion.div variants={fadeUp} className="glass rounded-xl p-5 md:p-6 mb-8 w-full animate-border-pulse relative overflow-hidden group bg-black/40 backdrop-blur-xl max-w-lg mx-auto text-center">
            <p className="text-[var(--teal)] font-mono text-sm md:text-base leading-relaxed">
              "I don't just write code — I build scalable web applications that solve real problems."
            </p>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[var(--fg-muted)] text-lg leading-relaxed mb-10 max-w-lg mx-auto text-center">
            I build modern, fast and secure web applications with beautiful UI and powerful backend.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-5 w-full">
            <a 
              href="#projects" 
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="relative flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[#0B0B0F] bg-gradient-to-r from-[var(--teal)] to-[var(--orange)] hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,198,0.4)] group hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight size={18} className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1.5" />
              </span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-[var(--orange)] border border-[var(--orange)]/50 hover:bg-[var(--orange)] hover:text-[#0B0B0F] hover:border-[var(--orange)] transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(255,122,24,0.2)] group"
            >
              Contact Me <ArrowRight size={18} className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 📊 BOTTOM BAR: TECHNOLOGIES + STATS */}
      <div className="w-full max-w-7xl mx-auto px-6 mt-16 relative z-20">
        <div className="glass rounded-[2rem] p-6 md:p-8 border border-[var(--glass-border)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-2xl flex flex-col xl:flex-row items-center justify-between gap-8">
          
          {/* Technologies Left */}
          <div className="flex flex-col gap-4 w-full xl:w-3/5">
            <span className="text-[var(--fg-muted)] font-medium text-sm">Technologies I work with</span>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <div 
                  key={tech.name} 
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:scale-110 transition-transform bg-[#0B0B0F]/80 shadow-[0_0_15px_rgba(0,0,0,0.5)] group"
                  title={tech.name}
                >
                  <div className="group-hover:drop-shadow-[0_0_8px_currentColor]" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Divider */}
          <div className="hidden xl:block w-px h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Stats Right */}
          <div className="flex flex-row justify-between w-full xl:w-2/5 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--teal)] to-[var(--orange)] drop-shadow-[0_0_10px_var(--teal)]">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-[var(--fg-muted)] text-[10px] sm:text-xs font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}