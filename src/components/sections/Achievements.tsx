"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Cloud, PenTool } from "lucide-react";

const certifications = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    description: "Advanced React, UI/UX principles, and scalable frontend architectures.",
    icon: <ShieldCheck size={32} />,
    color: "var(--teal)",
  },
  {
    title: "Microsoft .NET Developer",
    issuer: "Microsoft",
    description: "Enterprise backend development, Entity Framework, and REST APIs.",
    icon: <Award size={32} />,
    color: "var(--orange)",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Cloud infrastructure, deployment pipelines, and serverless architectures.",
    icon: <Cloud size={32} />,
    color: "var(--magenta)",
  },
  {
    title: "Google UX Design",
    issuer: "Coursera / Google",
    description: "User research, wireframing, and premium interaction design.",
    icon: <PenTool size={32} />,
    color: "var(--fg)",
  },
];

export default function Achievements() {
  return (
    <section className="relative py-24 bg-[var(--glass)]" id="achievements">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glass-border)] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--fg-muted)] max-w-2xl text-lg"
          >
            Continuous learning to stay at the cutting edge of modern technology.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl flex items-start gap-6 group premium-hover-card"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-[0_0_15px_currentColor]"
                style={{ 
                  backgroundColor: `${cert.color}15`,
                  color: cert.color,
                }}
              >
                {cert.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[var(--fg)] mb-1 group-hover:text-[var(--teal)] transition-colors">{cert.title}</h3>
                <p className="text-sm font-mono text-[var(--fg-muted)] mb-3" style={{ color: cert.color }}>
                  {cert.issuer}
                </p>
                <p className="text-[var(--fg-muted)] leading-relaxed text-sm md:text-base group-hover:text-[var(--fg)] transition-colors">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
