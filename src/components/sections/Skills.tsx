"use client";

import { motion, Variants } from "framer-motion";
import { Code2, ServerCog, Database } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 size={24} />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"],
    color: "var(--teal)",
    bgGlow: "from-[var(--teal)]/40 to-transparent",
  },
  {
    category: "Backend",
    icon: <ServerCog size={24} />,
    items: [".NET Core", "C#", "Node.js", "Express", "REST APIs", "GraphQL", "Entity Framework"],
    color: "var(--orange)",
    bgGlow: "from-[var(--orange)]/40 to-transparent",
  },
  {
    category: "Database & Tools",
    icon: <Database size={24} />,
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Git", "Docker", "CI/CD", "Azure", "AWS"],
    color: "var(--magenta)",
    bgGlow: "from-[var(--magenta)]/40 to-transparent",
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section className="relative py-24 md:py-32 bg-[var(--glass)]" id="skills">
      {/* Top/bottom borders for depth */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      {/* Premium Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[var(--teal)]/5 via-[var(--magenta)]/5 to-[var(--orange)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--teal)] to-[var(--magenta)]">Arsenal</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--fg-muted)] max-w-2xl mx-auto text-lg"
          >
            A curated stack of modern technologies I use to build scalable, high-performance web applications.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-8 md:p-10 rounded-3xl relative group overflow-hidden premium-hover-card flex flex-col h-full border border-[var(--glass-border)]"
            >
              {/* Premium Top Glow Line */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skillGroup.bgGlow} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Glowing Orb Background */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundColor: skillGroup.color }}
              />

              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-[var(--bg)] border border-[var(--glass-border)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 relative z-10"
                style={{ color: skillGroup.color, boxShadow: `0 10px 30px -10px ${skillGroup.color}40` }}
              >
                {skillGroup.icon}
              </div>

              <h3 
                className="text-2xl font-bold mb-6 relative z-10 tracking-tight text-[var(--fg)] group-hover:text-white transition-colors"
              >
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2 md:gap-3 relative z-10 mt-auto">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    className="px-4 py-2 rounded-xl text-sm font-medium border border-[var(--glass-border)] bg-black/20 text-[var(--fg-muted)] hover:text-white transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg"
                    style={{ 
                       // Quick inline hack for hover border color without complex classes
                       WebkitTapHighlightColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = skillGroup.color;
                      e.currentTarget.style.boxShadow = `0 4px 15px -5px ${skillGroup.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
