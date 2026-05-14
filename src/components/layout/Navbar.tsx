"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Revenue Systems", href: "/revenue-systems" },
  { name: "Solutions", href: "/solutions" },
  { name: "Results", href: "/case-studies" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/ui/Magnetic";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    lastScrollY.current = latest;
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "py-4 md:py-6" : "py-6 md:py-12"}`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`relative flex items-center justify-between px-6 md:px-12 py-6 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-1000 ${
            isScrolled
              ? "bg-background/40 md:bg-background/80 backdrop-blur-3xl border-border/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-black tracking-tightest text-foreground uppercase italic leading-none transition-all duration-700 group-hover:text-primary">
              MARKETING <span className="text-primary italic">KO.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-16">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.2}>
                <Link
                  href={link.href}
                  className="relative text-[10px] font-black tracking-[0.7em] text-foreground/60 hover:text-foreground uppercase transition-all duration-700 group px-6 py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-primary group-hover:w-[calc(100%-32px)] transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)]" />
                </Link>
              </Magnetic>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-10">
             <ThemeToggle />
             <Link href="/contact">
                <Button className="rounded-2xl px-12 h-16 bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black text-[11px] uppercase tracking-[0.4em] transition-all duration-1000 shadow-[0_20px_40px_-10px_oklch(var(--primary)/0.3)] border-none">
                  Book Free Audit
                </Button>
             </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-6">
            <ThemeToggle />
            <button
              className="w-16 h-16 rounded-2xl bg-foreground/[0.03] flex items-center justify-center text-foreground border border-border/50 transition-all duration-700 hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[4999] bg-background/98 backdrop-blur-3xl pt-60 px-12 lg:hidden flex flex-col"
          >
             {/* Background Atmosphere for Mobile Menu */}
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />

            <div className="flex flex-col space-y-16 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    className="text-8xl md:text-9xl font-black text-foreground tracking-tightest italic uppercase"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="pt-20"
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-32 text-4xl bg-primary text-primary-foreground rounded-[3rem] font-black uppercase tracking-widest shadow-[0_40px_80px_-20px_oklch(var(--primary)/0.4)] border-none">
                    Start Project
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-auto pb-32 relative z-10">
              <p className="text-[12px] font-black tracking-[1.5em] text-foreground/20 uppercase text-center">SYSTEM OVERGROWTH v1.0</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

