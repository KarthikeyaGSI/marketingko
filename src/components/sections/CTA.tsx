"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-60 md:py-96 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="ambient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-24 max-w-7xl mx-auto">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[12px] font-black tracking-[1.5em] text-primary uppercase"
            >
              Initialize Strategy
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-8xl md:text-[14rem] font-bold text-foreground tracking-tightest leading-[0.8] italic uppercase"
            >
              Your revenue leak <br />
              <span className="text-muted-foreground/10 not-italic">HAS A FIX.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12 max-w-5xl"
          >
            <p className="text-3xl md:text-6xl text-muted-foreground font-medium tracking-tightest leading-tight italic">
              "Let's find it. Book a free 30-minute strategy call. We'll show you exactly where you can automate tasks and capture more revenue."
            </p>
            <p className="text-[12px] font-black text-foreground/30 uppercase tracking-[1em] italic">
              No obligation. No pitch. Just engineering clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-12 w-full"
          >
            <Link href="/contact" className="w-full md:w-auto">
              <MagneticButton>
                <Button className="w-full md:w-auto rounded-3xl px-20 h-24 md:h-32 text-2xl bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-widest shadow-[0_40px_100px_-20px_oklch(var(--primary)/0.4)] transition-all duration-1000 flex items-center justify-center group border-none">
                  <span>Initialize Audit</span> <ArrowRight className="ml-6 h-8 w-8 group-hover:translate-x-4 transition-transform duration-700" />
                </Button>
              </MagneticButton>
            </Link>
            
            <Link href="/solutions" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-auto rounded-3xl px-20 h-24 md:h-32 text-2xl border-border bg-transparent text-foreground hover:bg-foreground/[0.05] font-black uppercase tracking-widest transition-all duration-1000 flex items-center justify-center group">
                <span>View Catalogue</span> <ArrowRight className="ml-6 h-8 w-8 group-hover:translate-x-4 transition-transform duration-700" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Background Detail */}
      <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-primary/5 rounded-full blur-[120px] opacity-30" />
    </section>
  );
}
