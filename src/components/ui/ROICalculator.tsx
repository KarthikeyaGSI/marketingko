"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calculator, RefreshCcw, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";
import gsap from "gsap";

export function ROICalculator() {
  const [leads, setLeads] = useState(500);
  const [value, setValue] = useState(2000);
  const [leakage, setLeakage] = useState(0);
  const [recovery, setRecovery] = useState(0);
  
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Standard industry leakage is roughly 60-70% for manual systems
    const calculatedLeakage = leads * value * 0.65;
    // Growth OS recovers roughly 85% of that leakage
    const calculatedRecovery = calculatedLeakage * 0.85;
    
    setLeakage(calculatedLeakage);
    setRecovery(calculatedRecovery);

    if (displayRef.current) {
      gsap.fromTo(displayRef.current, 
        { scale: 0.98, opacity: 0.8 }, 
        { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [leads, value]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-32 md:py-60 bg-background relative overflow-hidden mesh-premium">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* CONTENT SIDER */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Revenue Auditor
            </motion.div>
            <h2 className="text-emotional leading-[0.8]">
              CALCULATE <br />
              <span className="text-gold not-italic">THE LEAK.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-xl italic">
              Most businesses lose 60% of their revenue to "silent friction"—slow responses, unqualified leads, and manual drag. See what your business is currently leaving on the table.
            </p>
            
            <div className="space-y-12 pt-8">
              {/* SLIDER 1 */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black tracking-widest text-foreground/40 uppercase italic">Monthly Lead Volume</span>
                  <span className="text-3xl font-black text-foreground italic">{leads}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="5000" 
                  step="50"
                  value={leads}
                  onChange={(e) => setLeads(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-foreground/10 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>

              {/* SLIDER 2 */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-black tracking-widest text-foreground/40 uppercase italic">Avg. Customer Value</span>
                  <span className="text-3xl font-black text-foreground italic">{formatCurrency(value)}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={value}
                  onChange={(e) => setValue(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-foreground/10 rounded-full appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>
          </div>

          {/* CALCULATOR DISPLAY */}
          <div className="lg:col-span-7">
            <motion.div 
              ref={displayRef}
              className="p-12 md:p-20 rounded-[4rem] border border-border bg-foreground/[0.01] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-infrastructure opacity-10" />
              
              <div className="relative z-10 space-y-16">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-destructive uppercase tracking-widest italic">Est. Annual Revenue Leakage</span>
                    <p className="text-4xl md:text-6xl font-black text-destructive tracking-tighter italic">
                      -{formatCurrency(leakage)}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                    <RefreshCcw className="w-8 h-8 text-destructive animate-spin-slow" />
                  </div>
                </div>

                <div className="h-px w-full bg-border/50" />

                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-gold uppercase tracking-widest italic">Growth OS Recoverable Revenue</span>
                    <p className="text-5xl md:text-8xl font-black text-gold tracking-tighter italic">
                      {formatCurrency(recovery)}
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-3xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-primary" />
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/contact">
                    <Magnetic>
                      <Button className="w-full h-24 rounded-3xl bg-primary text-black font-black uppercase tracking-widest text-xl hover:scale-[1.02] transition-all duration-700 shadow-[0_40px_120px_-20px_oklch(var(--primary)/0.6)] group border-none relative overflow-hidden">
                        <span className="relative z-10">Claim Your Recovery Audit</span>
                        <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-3 transition-transform duration-500 relative z-10" />
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      </Button>
                    </Magnetic>
                  </Link>
                  <p className="text-center text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em] mt-8 italic">
                    Infrastructure-level audit. Zero initial cost. Pure execution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
