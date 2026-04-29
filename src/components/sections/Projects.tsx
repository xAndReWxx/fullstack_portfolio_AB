"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "Fullstack App",
    imageColor: "var(--cyan)",
    summary: "A high-performance financial analytics dashboard for real-time portfolio tracking.",
    problem: "Financial analysts needed a centralized, real-time dashboard to monitor complex portfolios across multiple exchanges without lagging.",
    solution: "Built a highly optimized Next.js frontend with WebSockets for real-time data, backed by a robust .NET Core API and Redis caching.",
    stack: ["Next.js", "React", ".NET 8", "Redis", "SignalR", "Tailwind"],
    results: "Reduced data latency by 60% and supported 10k+ concurrent connections without performance degradation.",
  },
  {
    id: 2,
    title: "E-Commerce Architecture",
    category: "Backend System",
    imageColor: "var(--blue)",
    summary: "Microservices-based backend for a large-scale e-commerce platform.",
    problem: "The client's monolithic architecture was crashing during peak holiday sales events.",
    solution: "Migrated the critical checkout and inventory services to a scalable microservices architecture using .NET, RabbitMQ, and Docker.",
    stack: [".NET Core", "RabbitMQ", "SQL Server", "Docker", "Stripe API"],
    results: "Achieved 99.99% uptime during Black Friday, processing 5,000+ orders per minute.",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    category: "Frontend & Design",
    imageColor: "var(--purple)",
    summary: "Premium, animated marketing site for an AI startup.",
    problem: "The startup needed a visually stunning web presence to attract early investors and signups.",
    solution: "Designed and developed an immersive landing page utilizing Framer Motion, custom WebGL effects, and premium typography.",
    stack: ["React", "Framer Motion", "GSAP", "Vanilla CSS"],
    results: "Increased conversion rate by 140% and secured features on major design inspiration galleries.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const activeProject = projects.find((p) => p.id === selectedProject);

  return (
    <section className="relative py-24 md:py-32" id="projects">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Featured Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--fg-muted)] max-w-2xl text-lg"
          >
            A selection of complex systems and premium interfaces I've built.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project.id)}
              className="glass p-6 rounded-2xl cursor-pointer group flex flex-col h-full relative overflow-hidden premium-hover-card"
            >
              {/* Fake Image Placeholder with dynamic color */}
              <div 
                className="w-full h-48 rounded-xl mb-6 relative overflow-hidden bg-black/40 border border-[var(--glass-border)]"
              >
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
                  style={{ background: project.imageColor }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[var(--fg-muted)] font-mono text-xs tracking-widest uppercase opacity-50">Project View</span>
                </div>
              </div>

              <span className="text-xs font-mono mb-2" style={{ color: project.imageColor }}>
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-3">{project.title}</h3>
              <p className="text-[var(--fg-muted)] text-sm flex-grow mb-6">
                {project.summary}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-[var(--fg)] mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
                Read Case Study
                <motion.span className="inline-block" group-hover={{ x: 5 }}>→</motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass bg-[var(--bg)] border border-[var(--glass-border)] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-mono border border-[var(--glass-border)]" style={{ color: activeProject.imageColor }}>
                    {activeProject.category}
                  </span>
                  <div className="flex gap-3 text-[var(--fg-muted)]">
                    <a href="#" className="hover:text-[var(--fg)] transition-colors"><GithubIcon /></a>
                    <a href="#" className="hover:text-[var(--fg)] transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                  {activeProject.title}
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-[var(--fg)]">The Problem</h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed">{activeProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-[var(--fg)]">The Solution</h4>
                      <p className="text-[var(--fg-muted)] leading-relaxed">{activeProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-[var(--cyan)]">The Results</h4>
                      <div className="p-4 rounded-xl bg-[var(--cyan)]/10 border border-[var(--cyan)]/20">
                        <p className="text-[var(--fg)] font-medium">{activeProject.results}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4 text-[var(--fg)]">Tech Stack</h4>
                    <div className="flex flex-col gap-2">
                      {activeProject.stack.map(tech => (
                        <div key={tech} className="px-4 py-2 glass rounded-lg text-sm text-[var(--fg-muted)] border-l-2" style={{ borderLeftColor: activeProject.imageColor }}>
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
