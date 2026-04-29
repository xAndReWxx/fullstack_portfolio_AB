"use client";

import { motion } from "framer-motion";
import { AppWindow, Database, LayoutDashboard, Zap } from "lucide-react";

const services = [
  {
    icon: AppWindow,
    title: "Fullstack Applications",
    description: "End-to-end web applications built with React/Next.js and robust .NET backends.",
    color: "var(--cyan)",
  },
  {
    icon: Database,
    title: "API Development",
    description: "Scalable, secure, and well-documented REST & GraphQL APIs using .NET Core.",
    color: "var(--purple)",
  },
  {
    icon: LayoutDashboard,
    title: "Complex Dashboards",
    description: "Data-rich, interactive admin panels and analytics dashboards with real-time updates.",
    color: "var(--blue)",
  },
  {
    icon: Zap,
    title: "System Optimization",
    description: "Refactoring legacy code, optimizing database queries, and improving Core Web Vitals.",
    color: "var(--cyan)",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-32" id="services">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--fg-muted)] max-w-2xl mx-auto"
          >
            Delivering high-performance digital products from concept to deployment.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-6 group premium-hover-card"
              >
                <div 
                  className="p-4 rounded-xl shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:shadow-[0_0_15px_currentColor]"
                  style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
                >
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-3 group-hover:text-[var(--teal)] transition-colors">{svc.title}</h3>
                  <p className="text-[var(--fg-muted)] leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
