"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-bold text-foreground tracking-tighter leading-none italic"
          >
            Let's find it.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-tight max-w-3xl leading-relaxed"
          >
            Book a free 30-minute strategy call. We'll show you exactly where you can automate tasks and capture more revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
          >
            <Link href="/contact" className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto rounded-full px-16 h-20 text-xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/20 shadow-2xl transition-all duration-700 flex items-center justify-center group">
                Book Free Audit <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            
            <Link href="/solutions" className="w-full md:w-auto">
              <Button size="lg" variant="outline" className="w-full md:w-auto rounded-full px-16 h-20 text-xl border-border bg-transparent text-foreground hover:bg-foreground/[0.03] font-black transition-all duration-700 flex items-center justify-center group">
                Explore the Solutions <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.4em] italic"
          >
            No obligation. No pitch. Just clarity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
