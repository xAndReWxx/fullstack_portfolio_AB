"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

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
  const [theme, setTheme] = useState("dark"); // simple toggle state for visual

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

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
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.4,
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
    const target = document.querySelector(href) as HTMLElement;
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
      setMobileOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass bg-[var(--nav-bg)] border-b border-[var(--border)] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="font-heading text-2xl tracking-tight font-bold group flex items-center gap-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-[var(--teal)] group-hover:text-[var(--orange)] transition-colors duration-500">&lt;/&gt;</span>
          <span className="text-[var(--fg)]">Mostafa</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
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

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-black/10 dark:bg-black/40 border border-[var(--border)] flex items-center p-1 cursor-pointer transition-colors shadow-inner"
            aria-label="Toggle theme"
          >
            {/* Sliding Circle */}
            <motion.div 
              className="absolute w-6 h-6 rounded-full shadow-[0_0_10px_var(--teal)] z-10"
              animate={{ 
                left: theme === "dark" ? "4px" : "34px",
                backgroundColor: theme === "dark" ? "var(--teal)" : "var(--orange)"
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            {/* Icons */}
            <div className="w-full flex justify-between px-1 z-0 relative">
              <Moon size={14} className={theme === "dark" ? "text-transparent" : "text-[var(--fg-muted)]"} />
              <Sun size={14} className={theme === "dark" ? "text-[var(--fg-muted)]" : "text-transparent"} />
            </div>
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full bg-black/10 dark:bg-black/40 border border-[var(--border)] flex items-center p-1 cursor-pointer transition-colors shadow-inner"
            aria-label="Toggle theme"
          >
            <motion.div 
              className="absolute w-5 h-5 rounded-full shadow-[0_0_10px_var(--teal)] z-10"
              animate={{ 
                left: theme === "dark" ? "4px" : "28px",
                backgroundColor: theme === "dark" ? "var(--teal)" : "var(--orange)"
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <div className="w-full flex justify-between px-0.5 z-0 relative">
              <Moon size={12} className={theme === "dark" ? "text-transparent" : "text-[var(--fg-muted)]"} />
              <Sun size={12} className={theme === "dark" ? "text-[var(--fg-muted)]" : "text-transparent"} />
            </div>
          </button>
          <button
            className="text-[var(--fg)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            <div className="px-6 py-6 flex flex-col gap-4">
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

