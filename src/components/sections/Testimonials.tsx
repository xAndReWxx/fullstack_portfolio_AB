"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CTO, FinTech Innovators",
    text: "Andrew is a rare breed of developer who understands both elegant UI design and deep backend architecture. He entirely transformed our slow legacy portal into a lightning-fast React/.NET application.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, StartupX",
    text: "Working with Andrew was the best decision we made for our MVP. His ability to anticipate edge cases and deliver a polished, scalable product ahead of schedule was incredible.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Lead Designer, CreativAgency",
    text: "I rarely find developers who can translate my Figma designs pixel-perfectly while also adding their own layer of premium motion design. The result exceeded my expectations.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-[var(--teal)]/5 blur-[120px] rounded-full w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Client <span className="text-[var(--teal)]">Feedback</span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-20">
            <button onClick={prev} className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-20">
            <button onClick={next} className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="overflow-hidden px-4 md:px-12 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass p-8 md:p-12 rounded-3xl relative"
              >
                <Quote className="absolute top-6 left-6 md:top-8 md:left-8 text-[var(--glass-border)] w-16 h-16 md:w-24 md:h-24 -z-10 rotate-180 opacity-50" />
                
                <p className="text-lg md:text-2xl text-[var(--fg)] leading-relaxed mb-8 relative z-10 font-medium">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[var(--teal)] to-[var(--magenta)] p-[2px]">
                    <div className="w-full h-full rounded-full bg-[var(--bg)] flex items-center justify-center text-sm font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--fg)]">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-[var(--fg-muted)]">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-[var(--teal)] w-8" : "bg-[var(--glass-border)] hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
