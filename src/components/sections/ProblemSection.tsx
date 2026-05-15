"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, AlertTriangle, ShieldX, TrendingDown } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

const pains = [
  {
    id: "01",
    title: "Leads Going Cold",
    description: "You pay for ads. Leads come in. Nobody calls back in time. 78% of customers buy from whoever responds first — by the time you respond, the deal's already gone.",
    icon: <AlertTriangle className="w-8 h-8 md:w-10 md:h-10" />,
    stats: "78% Decay Rate"
  },
  {
    id: "02",
    title: "Manual Overload",
    description: "Your team spends 20–40 hours a week on repetitive tasks. Data entry, scheduling, generating reports — that's 40 hours not spent on growing revenue.",
    icon: <TrendingDown className="w-8 h-8 md:w-10 md:h-10" />,
    stats: "40hr/wk Loss"
  },
  {
    id: "03",
    title: "Conversion Gaps",
    description: "Traffic lands on your site, looks around, and leaves. Without a clear system to capture and qualify visitors, you're losing potential revenue every second.",
    icon: <ShieldX className="w-8 h-8 md:w-10 md:h-10" />,
    stats: "2.4x Multiplier Missed"
  }
];

export function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} id="problem" className="py-16 md:py-24 bg-background relative overflow-hidden scene-divider">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="glow-orb w-[400px] h-[400px] bg-primary/8 top-[20%] left-[-10%]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,oklch(var(--primary)/0.04)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* SCENE HEADER */}
          <div className="lg:col-span-12 mb-8 md:mb-16">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[10px] md:text-[11px] font-black tracking-[0.8em] md:tracking-[1em] text-primary dark:text-primary uppercase italic mb-6 md:mb-8"
              >
                Current State Analysis
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                className="text-emotional leading-[0.8] mb-12"
              >
                DOING <br /> EVERYTHING. <br />
                <span className="text-gold not-italic font-medium">BUT STILL LOSING.</span>
              </motion.h2>
          </div>

          {/* Pain cards */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium tracking-tight leading-[1.3] italic max-w-3xl border-l-3 border-primary/20 pl-6 md:pl-8"
            >
              &ldquo;Most businesses aren&apos;t failing at marketing. They are failing at <span className="text-foreground not-italic font-black">infrastructure</span>. Your growth is being choked by operational drag.&rdquo;
            </motion.p>
            
            <div className="pt-6 md:pt-10 grid grid-cols-1 gap-4 md:gap-6">
                {pains.map((pain, i) => (
                  <Magnetic key={i} strength={0.05}>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true }}
                      className="p-6 md:p-10 rounded-2xl md:rounded-3xl cinematic-card group relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 md:p-6">
                        <span className="text-4xl md:text-6xl font-black text-gold italic">{pain.id}</span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 relative z-10">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 group-hover:scale-105 shrink-0">
                            {pain.icon}
                        </div>
                        <div className="space-y-2 flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-foreground tracking-tight italic uppercase">{pain.title}</h3>
                              <div className="px-3 py-1 rounded-lg bg-primary/20 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-wider">{pain.stats}</div>
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed font-medium tracking-tight max-w-xl">
                              {pain.description}
                            </p>
                        </div>
                      </div>
                    </motion.div>
                  </Magnetic>
                ))}
            </div>
          </div>

          {/* VISUAL TENSION — Right side */}
          <div className="lg:col-span-5 relative hidden lg:block h-full">
             <div className="sticky top-32 space-y-6">
                <motion.div 
                  style={{ x: x1 }}
                  className="w-full aspect-square rounded-3xl border border-foreground/5 bg-foreground/[0.01] relative overflow-hidden flex items-center justify-center"
                >
                   <div className="absolute inset-0 grid-infrastructure opacity-15" />
                   <div className="relative z-10 space-y-4 text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                      <Activity className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto relative z-10" />
                      <p className="text-[10px] font-black tracking-[0.6em] text-primary uppercase italic relative z-10">Diagnostic Active</p>
                   </div>
                </motion.div>
                
                <motion.div 
                  style={{ x: x2 }}
                  className="p-6 md:p-8 rounded-2xl md:rounded-3xl glass-system space-y-4"
                >
                   <div className="flex items-center justify-between">
                      <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em]">Leak Detection v4</span>
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                   </div>
                   <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="h-full bg-red-500/50" 
                      />
                   </div>
                   <p className="text-sm font-bold italic text-foreground/40">Critical operational leakage identified in 92% of evaluated systems.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
