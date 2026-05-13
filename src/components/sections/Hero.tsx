"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BusinessNetworkAnimation } from "@/components/ui/BusinessNetworkAnimation";
import Link from "next/link";

const industries = [
  "Real Estate", "Clinics & Healthcare", "Coaches & Consultants", 
  "D2C Brands", "Legal Firms", "E-commerce", "SaaS Startups"
];

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-60 pb-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,oklch(var(--primary)/0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 z-0 dot-grid opacity-30" />
      
      {/* Floating System Nodes (Ambient) */}
      <motion.div style={{ y: y2 }} className="absolute top-1/4 right-[10%] w-64 h-64 glass-system rounded-[3rem] opacity-20 blur-sm pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute bottom-1/4 left-[5%] w-48 h-48 glass-system rounded-full opacity-10 blur-md pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl shadow-xl"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] md:text-xs font-black tracking-[1em] text-foreground uppercase italic">
                Systems Overgrowth v1.0
              </span>
            </motion.div>

            <div className="space-y-12">
              <div className="overflow-visible">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.3
                      }
                    }
                  }}
                  className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[13rem] font-bold tracking-tightest text-foreground leading-[0.95] text-mask-premium uppercase"
                >
                  <div className="mb-4 md:mb-12">
                    {["YOUR", "SYSTEM", "IS"].map((word, i) => (
                      <motion.span key={i} className="inline-block mr-6 last:mr-0">
                        {word.split("").map((char, j) => (
                          <motion.span
                            key={j}
                            variants={{
                              hidden: { opacity: 0, y: 150, rotateX: -90, filter: "blur(20px)" },
                              visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
                            }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-block origin-bottom"
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, filter: "blur(30px)", x: -50 },
                        visible: { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }
                      }}
                      transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="text-primary italic font-medium inline-block pr-6"
                    >
                      LEAKING
                    </motion.span>
                    {"REVENUE.".split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 150, rotateX: -90, filter: "blur(20px)" },
                          visible: { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block origin-bottom"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </motion.h1>
              </div>
              
              <motion.p
                initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-6xl text-muted-foreground max-w-5xl font-medium tracking-tightest leading-tight italic"
              >
                AI automations, voice agents, and web systems — <span className="text-primary not-italic font-black uppercase">engineered</span> around your outcomes, not our deliverables.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-16 pt-16"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <MagneticButton>
                  <Button size="lg" className="w-full sm:w-auto rounded-[3rem] px-24 h-32 md:h-36 text-4xl bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-widest shadow-[0_40px_100px_-20px_oklch(var(--primary)/0.4)] transition-all duration-1000 group border-none">
                    Book Free Audit <ArrowRight className="ml-8 h-12 w-12 group-hover:translate-x-6 transition-transform duration-700" />
                  </Button>
                </MagneticButton>
              </Link>
              
              <div className="flex flex-col space-y-2">
                <span className="text-[12px] font-black tracking-[0.5em] text-foreground/20 uppercase italic">Operational Baseline</span>
                <span className="text-3xl font-bold italic tracking-tighter text-foreground/40">ROI focused. Systems driven.</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1, opacity }}
            className="hidden lg:block relative"
          >
            {/* Technical Dashboards / Floating UI Overlay */}
            <div className="absolute -top-20 -left-20 z-20 glass-system p-10 rounded-[3rem] w-96 space-y-8 animate-float shadow-2xl">
               <div className="flex items-center justify-between">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_oklch(var(--primary))]" />
                  <span className="text-[12px] font-black tracking-[0.4em] text-primary uppercase">Live_Telemetry</span>
               </div>
               <div className="h-16 bg-foreground/[0.03] rounded-2xl overflow-hidden relative border border-border/50">
                  <div className="absolute inset-0 bg-primary/20 w-3/4 animate-shimmer" />
               </div>
               <p className="text-[12px] font-black opacity-40 uppercase tracking-[0.2em] italic">Leak_Detected: 24.3% Optimization Opportunity</p>
            </div>

            <div className="absolute -bottom-10 -right-10 z-20 glass-system p-12 rounded-[4rem] w-[30rem] space-y-10 animate-float shadow-2xl" style={{ animationDelay: "1.5s" }}>
               <div className="space-y-4">
                 <p className="text-[12px] font-black text-primary uppercase tracking-[0.4em] italic">Autonomous_Core_v1</p>
                 <h4 className="text-4xl font-bold tracking-tightest italic leading-none">System Sovereign</h4>
               </div>
               <div className="grid grid-cols-4 gap-6">
                  {[1,2,3,4].map(n => (
                    <div key={n} className="aspect-square rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                       <div className="w-2 h-2 rounded-full bg-primary/40" />
                    </div>
                  ))}
               </div>
               <div className="flex items-center justify-between">
                 <p className="text-[12px] font-black opacity-30 uppercase tracking-widest italic">Health: 99.9% Uptime</p>
                 <div className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest">Active</div>
               </div>
            </div>

            <div className="relative z-10 scale-125 origin-center">
              <BusinessNetworkAnimation />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
