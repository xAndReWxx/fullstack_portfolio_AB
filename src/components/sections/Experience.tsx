"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Freelance",
    period: "2022 - Present",
    description: "Partnering with international clients to build scalable web applications. Designing premium architectures using Next.js and .NET, ensuring fast performance and seamless user experiences.",
    tech: ["React", "Next.js", ".NET Core", "Tailwind", "SQL Server"],
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions Co.",
    period: "2020 - 2022",
    description: "Developed and maintained enterprise-level web applications. Collaborated with cross-functional teams to migrate legacy monoliths into robust microservices, improving deployment speed by 40%.",
    tech: ["C#", ".NET", "React", "Docker", "Azure"],
  },
];

export default function Experience() {
  return (
    <section className="relative py-24 md:py-32" id="experience">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-[var(--glass-border)] hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center mt-1">
                  <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-[var(--cyan)] shadow-[0_0_15px_rgba(0,229,255,0.2)] relative z-10">
                    <Briefcase size={20} />
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl flex-1 premium-hover-card relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--cyan)]/5 rounded-full blur-3xl group-hover:bg-[var(--cyan)]/10 transition-colors" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--fg)]">{exp.role}</h3>
                      <p className="text-[var(--cyan)] font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="text-sm font-mono text-[var(--fg-muted)] mt-2 md:mt-0 bg-[var(--glass)] px-3 py-1 rounded-full border border-[var(--glass-border)] w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((item) => (
                      <span key={item} className="text-xs font-medium text-[var(--fg)] bg-white/5 px-3 py-1 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
