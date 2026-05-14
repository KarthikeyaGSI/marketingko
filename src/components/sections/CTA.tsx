"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-30" />
      <div className="glow-orb w-[800px] h-[800px] bg-primary/15 bottom-[-20%] left-[-15%] blur-[120px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-primary/10 top-[15%] right-[-10%] blur-[80px]" style={{ animationDelay: "3s" }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-5xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] md:text-[11px] font-black tracking-[1em] md:tracking-[1.2em] text-primary uppercase"
            >
              Initialize Strategy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-[-0.05em] leading-[0.85] italic uppercase"
            >
              Your revenue leak <br />
              <span className="text-muted-foreground/60 not-italic">HAS A FIX.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 md:space-y-6 max-w-3xl"
          >
            <p className="text-lg sm:text-xl md:text-3xl text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-tight leading-[1.2] italic">
              &ldquo;We don&apos;t ask for trust. We earn it through execution. We&apos;ll identify your revenue leaks in 30 minutes, or we won&apos;t take the project.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-8 pt-4">
               <div className="flex flex-col items-center">
                  <span className="text-4xl font-black text-primary tracking-tighter">14 DAYS</span>
                  <span className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.4em]">To Initial ROI</span>
               </div>
               <div className="w-px h-12 bg-border/40" />
               <div className="flex flex-col items-center">
                  <span className="text-4xl font-black text-primary tracking-tighter">ZERO</span>
                  <span className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.4em]">Setup Jitter</span>
               </div>
            </div>
            <p className="text-[10px] md:text-[11px] font-black text-foreground/80 uppercase tracking-[0.6em] italic pt-8">
              Guaranteed outcomes. No retained risk. Just engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full pt-4"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <MagneticButton>
                <Button className="w-full sm:w-auto rounded-2xl px-8 md:px-12 h-14 md:h-16 text-sm md:text-base bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-[0.15em] shadow-[0_20px_60px_-10px_oklch(var(--primary)/0.4)] transition-all duration-700 flex items-center justify-center group border-none relative overflow-hidden">
                  <span className="relative z-10">Book Free Audit</span>
                  <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                  <div className="absolute inset-0 bg-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </MagneticButton>
            </Link>
            
            <Link href="/solutions" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto rounded-2xl px-8 md:px-12 h-14 md:h-16 text-sm md:text-base border-border bg-transparent text-foreground hover:bg-foreground/[0.05] font-black uppercase tracking-[0.15em] transition-all duration-700 flex items-center justify-center group">
                <span>View Systems</span>
                <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-500" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
