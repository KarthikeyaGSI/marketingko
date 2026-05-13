"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-60 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto p-20 md:p-40 rounded-[5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl text-center space-y-16 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black tracking-[0.8em] text-white uppercase">Initiate Deployment</span>
            </motion.div>

            <h2 className="text-7xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.8] text-mask-premium">
              YOUR REVENUE LEAK<br />
              <span className="text-muted-foreground/10 italic">HAS A FIX.</span>
            </h2>
            
            <p className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tighter max-w-4xl mx-auto leading-tight italic">
              "Book a free 30-minute strategy call. We'll show you exactly where you can automate tasks and capture more revenue. No obligation. No pitch. Just clarity."
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center space-y-10 relative z-10"
          >
            <Link href="/contact">
              <MagneticButton>
                <Button size="lg" className="rounded-full px-20 h-28 text-3xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/20 shadow-2xl transition-all duration-700 hover:scale-105 group">
                  Book Free Audit <ArrowRight className="ml-6 h-10 w-10 group-hover:translate-x-3 transition-transform" />
                </Button>
              </MagneticButton>
            </Link>
            
            <div className="flex items-center space-x-8 opacity-40">
               <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">Global Capacity</span>
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-xs font-bold text-white tracking-tighter italic">Currently Accepting 2 New Systems</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
