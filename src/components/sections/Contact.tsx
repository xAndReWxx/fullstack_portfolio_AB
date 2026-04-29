"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

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

export default function Contact() {
  return (
    <section className="relative py-24 md:py-32 border-t border-[var(--glass-border)]" id="contact">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Let's Build Something <span className="gradient-text block mt-2">Extraordinary.</span>
          </h2>
          
          <p className="text-[var(--fg-muted)] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently available for freelance opportunities. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>

          <a 
            href="mailto:hello@example.com" 
            className="shimmer-btn inline-flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-lg bg-[var(--fg)] text-[var(--bg)] hover:bg-white transition-colors shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-16"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors group"
            >
              <GithubIcon />
              <span className="font-mono text-sm uppercase tracking-widest">GitHub</span>
              <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors group"
            >
              <LinkedinIcon />
              <span className="font-mono text-sm uppercase tracking-widest">LinkedIn</span>
              <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-[var(--fg-muted)] text-xs font-mono opacity-50">
          © {new Date().getFullYear()} created by Andrew Bahgat. Designed & Built with precision.
        </p>
      </div>
    </section>
  );
}
