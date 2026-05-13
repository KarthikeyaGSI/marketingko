"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Revenue Systems", href: "/revenue-systems" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (latest > 100 && direction === "down") {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(latest > 50);
    lastScrollY.current = latest;
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[5000] transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "py-4" : "py-10"}`}
    >
      <div className="container mx-auto px-6">
        <nav
          className={`relative flex items-center justify-between px-10 py-5 rounded-[2rem] border transition-all duration-1000 ${
            isScrolled
              ? "bg-black/60 backdrop-blur-3xl border-white/5 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000 shadow-primary/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Shield className="h-6 w-6 text-white relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase italic leading-none">
                Marketing Ko
              </span>
              <span className="text-[8px] font-black tracking-[0.4em] text-primary uppercase mt-1">Operational OS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[10px] font-black tracking-[0.5em] text-white/40 hover:text-white uppercase transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8">
             <Link href="/contact">
                <Button className="rounded-full px-10 h-14 bg-white text-black hover:bg-primary hover:text-white font-black text-xs uppercase tracking-[0.2em] transition-all duration-700 hover:scale-105 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Initiate Deployment <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
             </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[4999] bg-black/95 backdrop-blur-2xl pt-40 px-10 lg:hidden flex flex-col"
          >
            <div className="flex flex-col space-y-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-6xl font-bold text-white tracking-tighter"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full h-24 text-3xl bg-primary text-white rounded-[2rem] font-black mt-20 shadow-primary/20 shadow-2xl">
                    Initiate System
                  </Button>
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-auto pb-20">
              <p className="text-[10px] font-black tracking-[1em] text-white/20 uppercase text-center">Marketing Ko OS v4.2</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

