"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity, Cpu, Zap } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BusinessNetworkAnimation } from "@/components/ui/BusinessNetworkAnimation";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
      {/* CINEMATIC BACKGROUND ENVIRONMENT */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_30%,oklch(var(--primary)/0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 z-0 grid-infrastructure opacity-20" />
      <div className="absolute inset-0 z-0 dot-grid opacity-30" />
      
      {/* KINETIC TYPOGRAPHY LAYER (Background Tension) */}
      <motion.div 
        style={{ y: springY2, opacity: 0.01 }}
        className="absolute top-0 left-0 w-full whitespace-nowrap text-[25rem] font-black italic select-none pointer-events-none z-[-1]"
      >
        GROWTH ARCHITECTURE • SYSTEMS OVERGROWTH • 
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center asymmetric-scene">
          
          {/* CONTENT SCENE (Left/Center Weighted) */}
          <div className="lg:col-span-8 space-y-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-8 px-10 py-4 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-3xl shadow-2xl group cursor-none"
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_20px_oklch(var(--primary))]" />
              <span className="text-[10px] md:text-xs font-black tracking-[1.2em] text-foreground uppercase italic group-hover:tracking-[1.5em] transition-all duration-700">
                SYSTEMS OVERGROWTH v1.0
              </span>
            </motion.div>

            <div className="space-y-16">
              <div className="overflow-visible relative">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                    }
                  }}
                  className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tightest text-foreground leading-[0.95] uppercase relative z-10"
                >
                  <div className="flex flex-wrap items-baseline">
                    {["GROWTH", "SYSTEMS"].map((word, i) => (
                      <motion.span
                        key={i}
                        variants={{
                          hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                          visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block mr-4 md:mr-8 last:mr-0"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex items-center mt-2 md:mt-4">
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, filter: "blur(20px)", x: -50 },
                        visible: { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }
                      }}
                      transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-primary italic font-medium inline-block pr-6 md:pr-12 text-4xl md:text-7xl"
                    >
                      LEAKING
                    </motion.span>
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
                        visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                      }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block"
                    >
                      REVENUE.
                    </motion.span>
                  </div>
                </motion.h1>
                
                {/* Visual Tension: Overlapping Element */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2, duration: 1.5 }}
                  className="absolute -top-10 -right-20 w-40 h-40 border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow pointer-events-none hidden lg:flex"
                >
                   <div className="w-2 h-2 bg-primary rounded-full" />
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 2, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-5xl text-muted-foreground max-w-6xl font-medium tracking-tightest leading-[1.1] italic"
              >
                AI automations, voice agents, and web systems — <span className="text-primary not-italic font-black uppercase underline decoration-primary/20 underline-offset-[20px]">engineered</span> around your outcomes, not our deliverables.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center space-y-12 sm:space-y-0 sm:space-x-20 pt-20"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <MagneticButton>
                  <Button size="lg" className="w-full sm:w-auto rounded-[3.5rem] px-32 h-36 md:h-44 text-5xl bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-[0.2em] shadow-[0_50px_120px_-30px_oklch(var(--primary)/0.5)] transition-all duration-1000 group border-none relative overflow-hidden">
                    <span className="relative z-10">Book Free Audit</span>
                    <ArrowRight className="ml-10 h-16 w-16 group-hover:translate-x-8 transition-transform duration-700 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                  </Button>
                </MagneticButton>
              </Link>
              
              <div className="flex flex-col space-y-4 border-l-2 border-foreground/10 pl-12">
                <span className="text-[14px] font-black tracking-[0.8em] text-foreground/20 uppercase italic">Operational Excellence</span>
                <span className="text-4xl font-bold italic tracking-tighter text-foreground/60 leading-none">ROI-Driven Systems.</span>
              </div>
            </motion.div>
          </div>

          {/* ASYMMETRICAL VISUAL SCENE (Right Weighted) */}
          <motion.div 
            style={{ y: springY1, opacity }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="relative z-10 scale-150 translate-x-20">
               <BusinessNetworkAnimation />
            </div>

            {/* LAYERED UI ELEMENTS */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 -left-40 z-20 glass-system p-12 rounded-[3.5rem] w-96 space-y-10 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)]"
            >
               <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_oklch(var(--primary))]" />
                    <span className="text-[12px] font-black tracking-[0.4em] text-primary uppercase">Core_Analytics</span>
                  </div>
                  <Activity className="w-8 h-8 text-foreground/20" />
               </div>
               <div className="space-y-6">
                  <div className="h-4 bg-foreground/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "84%" }}
                      transition={{ duration: 3, delay: 3 }}
                      className="h-full bg-primary" 
                    />
                  </div>
                  <p className="text-2xl font-black italic tracking-tighter">Efficiency: 84.2%</p>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-20 -right-20 z-20 glass-system p-14 rounded-[4rem] w-[35rem] space-y-12 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.5)]"
            >
               <div className="flex items-center justify-between">
                 <p className="text-[14px] font-black text-primary uppercase tracking-[0.5em] italic">System_Protocol_X</p>
                 <Zap className="w-10 h-10 text-primary" />
               </div>
               <h4 className="text-5xl font-black tracking-tightest italic leading-none text-foreground">Sovereign Node</h4>
               <div className="flex space-x-4">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="flex-1 h-3 rounded-full bg-foreground/5 overflow-hidden">
                      <motion.div 
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="h-full bg-primary/40" 
                      />
                    </div>
                  ))}
               </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* SCROLL INDICATOR CINEMATOGRAPHY */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-8"
      >
        <span className="text-[10px] font-black tracking-[1.5em] text-foreground/10 uppercase italic">Initiate Sequence</span>
        <div className="w-px h-32 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
