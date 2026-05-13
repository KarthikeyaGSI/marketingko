"use client";

import { motion } from "framer-motion";
import { Philosophy } from "@/components/sections/Philosophy";
import { WhyMarketingKo } from "@/components/sections/WhyMarketingKo";
import { Founder } from "@/components/sections/Founder";
import { ShieldCheck, Cpu, Zap, Activity } from "lucide-react";
import { CTA } from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <main className="pt-40 bg-background min-h-screen">
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.05)_0%,transparent_70%)]" />
        <div className="absolute inset-0 z-0 dot-grid opacity-10" />
        
        <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase">Operational Philosophy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-[12rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium uppercase"
            >
              WE BUILD<br />
              <span className="text-muted-foreground/10 italic">SOVEREIGNTY.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tighter leading-tight italic"
            >
              "Marketing Ko was founded on a single premise: Most businesses aren't growing because they have a 'marketing' problem. They aren't growing because they have a 'system' problem."
            </motion.p>
        </div>
      </section>

      <Founder />
      <Philosophy />
      <WhyMarketingKo />
      <CTA />
    </main>
  );
}
