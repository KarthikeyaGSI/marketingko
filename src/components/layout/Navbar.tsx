"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/ui/Magnetic";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Protocols", href: "/revenue-systems" },
  { name: "Solutions", href: "/solutions" },
  { name: "Results", href: "/case-studies" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerRef = useRef<HTMLElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useGSAP(() => {
    gsap.from(".nav-reveal", {
      y: -20,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: "power4.out"
    });
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isScrolled ? "py-4 md:py-6" : "py-8 md:py-16"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`relative flex items-center justify-between px-6 md:px-12 py-6 rounded-full border transition-all duration-1000 ${
            isScrolled
              ? "bg-background/40 backdrop-blur-3xl border-border/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo - Cinematic Branding */}
          <Link href="/" className="nav-reveal flex items-center space-x-3 group shrink-0" aria-label="Marketing Ko Home">
            <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_oklch(var(--primary)/0.4)] transition-all duration-700">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tightest text-foreground uppercase italic leading-none transition-all duration-700 group-hover:text-primary">
              MARKETING <span className="text-primary not-italic">KO.</span>
            </span>
          </Link>

          {/* Desktop Nav - High-End Tracking */}
          <div className="hidden lg:flex items-center space-x-12 xl:space-x-16">
            {navLinks.map((link) => (
              <Magnetic key={link.name} strength={0.2}>
                <Link
                  href={link.href}
                  className="nav-reveal relative text-[10px] font-black tracking-[0.6em] text-foreground/40 hover:text-foreground uppercase transition-all duration-700 group px-4 py-2"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-4 w-0 h-[1px] bg-primary group-hover:w-[calc(100%-32px)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </Link>
              </Magnetic>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 nav-reveal">
             <ThemeToggle />
             <Link href="/contact">
                <MagneticButton>
                  <Button className="rounded-2xl px-12 h-14 bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black text-[10px] uppercase tracking-[0.4em] transition-all duration-1000 shadow-[0_20px_40px_-10px_oklch(var(--primary)/0.3)] border-none relative overflow-hidden group">
                    <span className="relative z-10">Initialize Audit</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                </MagneticButton>
             </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center space-x-6 nav-reveal">
            <ThemeToggle />
            <button
              className="w-14 h-14 rounded-2xl bg-foreground/[0.03] flex items-center justify-center text-foreground border border-border/50 transition-all duration-700 hover:bg-primary hover:text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu - Cinematic Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[4999] bg-background/95 backdrop-blur-3xl pt-48 px-12 lg:hidden flex flex-col"
          >
            <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="flex flex-col space-y-12 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-5xl font-black text-foreground tracking-tightest italic uppercase leading-none hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="pt-12">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-20 text-lg bg-primary text-primary-foreground rounded-3xl font-black uppercase tracking-widest shadow-[0_30px_60px_-10px_oklch(var(--primary)/0.4)]">
                    Book Free Audit
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="mt-auto pb-20 text-center relative z-10">
              <p className="text-[10px] font-black tracking-[1em] text-foreground/20 uppercase italic">Growth_OS v4.0</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
