"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 md:py-60 bg-background relative overflow-hidden grain-elite">
      {/* Infrastructure Layers - Sharp */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="glow-bleed w-[800px] h-[800px] bottom-[-20%] left-[-15%]" />
      <div className="glow-bleed w-[400px] h-[400px] top-[15%] right-[-10%] opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 md:space-y-20 max-w-5xl mx-auto">
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[10px] md:text-[11px] font-black tracking-[1.2em] text-primary uppercase"
            >
              Initialize Strategy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="text-emotional leading-[0.8] mb-12 text-foreground"
            >
              Your revenue leak <br />
              <span className="text-gold not-italic font-medium">HAS A FIX.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1, ease: "easeOut" }}
            className="space-y-10 max-w-3xl"
          >
            <p className="text-xl md:text-3xl text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-tight leading-tight italic">
              &ldquo;We don&apos;t ask for trust. We earn it through execution. We&apos;ll identify your revenue leaks in 30 minutes, or we won&apos;t take the project.&rdquo;
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 pt-8">
               <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-7xl font-black text-primary tracking-tighter italic">14 DAYS</span>
                  <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.5em] mt-2">To Initial ROI</span>
               </div>
               <div className="hidden md:block w-px h-20 bg-border/40" />
               <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-7xl font-black text-primary tracking-tighter italic">ZERO</span>
                  <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.5em] mt-2">Setup Jitter</span>
               </div>
            </div>
            
            <div className="pt-12">
               <p className="text-[10px] md:text-[12px] font-black text-foreground/30 uppercase tracking-[0.8em] italic">
                 Guaranteed outcomes. No retained risk. Just engineering.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "circOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full pt-8"
          >
            <Link href="/contact" className="w-full sm:w-auto cta-target" aria-label="Book a free revenue audit">
              <Magnetic strength={0.02}>
                <Button className="w-full sm:w-auto rounded-[3rem] px-16 md:px-24 h-24 md:h-32 text-xl md:text-2xl bg-primary text-black hover:scale-105 transition-all duration-700 font-black uppercase tracking-widest shadow-[0_40px_120px_-20px_oklch(var(--primary)/0.6)] border-none relative overflow-hidden group">
                  <span className="relative z-10">Book Free Audit</span>
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-4 transition-transform duration-500 relative z-10" />
                  <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </Magnetic>
            </Link>
            
            <Link href="/solutions" className="w-full sm:w-auto" aria-label="View our autonomous growth systems">
              <Magnetic strength={0.01}>
                <Button variant="outline" className="w-full sm:w-auto rounded-[2.5rem] px-16 md:px-24 h-24 md:h-32 text-xl md:text-2xl border-border bg-transparent text-foreground hover:bg-foreground/[0.05] font-black uppercase tracking-widest transition-all duration-700 flex items-center justify-center group">
                  <span>View Systems</span>
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-4 transition-transform duration-500" />
                </Button>
              </Magnetic>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
