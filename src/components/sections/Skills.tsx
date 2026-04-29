"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"],
    color: "var(--teal)",
  },
  {
    category: "Backend",
    items: [".NET Core", "C#", "Node.js", "Express", "REST APIs", "GraphQL", "Entity Framework"],
    color: "var(--orange)",
  },
  {
    category: "Database & Tools",
    items: ["SQL Server", "PostgreSQL", "MongoDB", "Git", "Docker", "CI/CD", "Azure", "AWS"],
    color: "var(--magenta)",
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Technical Arsenal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--fg-muted)] max-w-2xl mx-auto"
          >
            Tools and technologies I use to build robust, scalable products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-8 rounded-2xl relative group overflow-hidden"
            >
              {/* Subtle hover glow background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${skillGroup.color}, transparent 70%)` }}
              />

              <h3 
                className="text-2xl font-bold mb-6 flex items-center gap-3 relative z-10"
                style={{ color: skillGroup.color }}
              >
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={item}
                    className="px-4 py-2 rounded-lg text-sm font-medium border border-[var(--glass-border)] bg-[rgba(255,255,255,0.02)] text-[var(--fg)] hover:border-white/30 transition-colors cursor-default"
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
