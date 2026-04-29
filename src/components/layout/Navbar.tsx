"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // Close mobile menu first
      setMobileOpen(false);
      
      // Small delay to let the menu close so the DOM is stable before scrolling
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 2.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "glass bg-[var(--nav-bg)] border-b border-[var(--border)] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-start z-20">
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="group flex items-center gap-3"
          >
            {/* The Icon Box */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--teal)]/10 text-[var(--teal)] border border-[var(--teal)]/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,198,0.3)] group-hover:bg-[var(--teal)]/20 transition-all duration-500">
              <span className="font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>&lt;/&gt;</span>
            </div>
            
            {/* The Text */}
            <div className="flex flex-col justify-center">
              <span className="font-bold tracking-tight text-xl text-[var(--fg)] group-hover:text-white transition-colors duration-300 leading-none" style={{ fontFamily: "var(--font-heading)" }}>
                Andrew B.
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center gap-6 z-20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`text-sm transition-all duration-300 relative group px-2 py-1 hover:scale-105 ${
                  isActive ? "text-[var(--teal)] font-semibold" : "text-[var(--fg-muted)] hover:text-[var(--fg)]"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
                {isActive && (
                  <motion.span 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--teal)] to-[var(--orange)] shadow-[0_0_10px_var(--teal)] rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[var(--teal)] to-[var(--orange)] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_10px_var(--teal)] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right side balance & Mobile toggle */}
        <div className="flex-1 flex justify-end relative z-50 pointer-events-auto">
          <button
            className="lg:hidden text-[var(--fg)] p-2 active:scale-95 transition-transform"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen(!mobileOpen);
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-[rgba(255,255,255,0.06)] overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`text-base font-medium transition-colors p-2 rounded-lg ${
                      isActive ? "bg-[var(--teal)]/10 text-[var(--teal)]" : "text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--glass)]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

