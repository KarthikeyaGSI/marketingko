"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
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
    <section ref={containerRef} id="problem" className="py-24 md:py-48 bg-background relative overflow-hidden grain-elite">
      {/* Atmospheric layers - Sharp */}
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="glow-bleed w-[600px] h-[600px] top-[10%] left-[-20%]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-24 items-start">
          
          {/* SCENE HEADER */}
          <div className="lg:col-span-12 mb-8 md:mb-16">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[10px] md:text-[11px] font-black tracking-[1em] text-primary uppercase italic mb-8"
              >
                Current State Analysis
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                className="text-emotional leading-[0.8] mb-12 text-foreground"
              >
                DOING <br /> EVERYTHING. <br />
                <span className="text-gold not-italic font-medium">BUT STILL LOSING.</span>
              </motion.h2>
          </div>

          {/* Pain cards */}
          <div className="lg:col-span-7 space-y-12">
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground dark:text-muted-foreground/90 font-medium tracking-tight leading-tight italic max-w-3xl border-l-3 border-primary/20 pl-8"
            >
              &ldquo;Most businesses aren&apos;t failing at marketing. They are failing at <span className="text-foreground not-italic font-black uppercase">infrastructure</span>. Your growth is being choked by operational drag.&rdquo;
            </motion.p>
            
            <div className="pt-6 grid grid-cols-1 gap-6 md:gap-10">
                {pains.map((pain, i) => (
                  <Magnetic key={i} strength={0.05}>
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="p-8 md:p-12 rounded-[3rem] cinematic-card group relative bg-foreground/[0.01] border-border/50"
                    >
                      <div className="absolute top-0 right-0 p-8">
                        <span className="text-3xl md:text-5xl font-black text-gold italic opacity-20 group-hover:opacity-100 transition-opacity duration-700">{pain.id}</span>
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-700 group-hover:scale-110 shrink-0">
                            {pain.icon}
                        </div>
                        <div className="space-y-4 flex-1">
                            <div className="flex flex-wrap items-center gap-4">
                              <h3 className="text-lg md:text-2xl font-black text-foreground tracking-tight italic uppercase">{pain.title}</h3>
                              <div className="px-3 py-1 rounded-lg bg-destructive/10 text-destructive text-[9px] font-black uppercase tracking-wider italic">{pain.stats}</div>
                            </div>
                            <p className="text-xs md:text-sm text-muted-foreground dark:text-muted-foreground/80 leading-relaxed font-medium tracking-tight max-w-xl">
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
             <div className="sticky top-48 space-y-12">
                <motion.div 
                  style={{ x: x1 }}
                  className="w-full aspect-square rounded-[4rem] border border-border bg-foreground/[0.02] relative overflow-hidden flex items-center justify-center shadow-2xl"
                >
                   <div className="absolute inset-0 grid-infrastructure opacity-20" />
                   <div className="relative z-10 space-y-6 text-center">
                      <div className="w-24 h-24 rounded-full bg-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                      <Activity className="w-20 h-20 text-primary mx-auto relative z-10" />
                      <p className="text-[10px] font-black tracking-[0.8em] text-primary uppercase italic relative z-10">Diagnostic Active</p>
                   </div>
                </motion.div>
                
                <motion.div 
                  style={{ x: x2 }}
                  className="p-10 md:p-12 rounded-[3rem] border border-border bg-background shadow-2xl space-y-6"
                >
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.5em]">Leak Detection v4</span>
                      <div className="w-4 h-4 rounded-full bg-destructive animate-ping" />
                   </div>
                   <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        transition={{ duration: 2.5, delay: 0.5, ease: "circOut" }}
                        className="h-full bg-destructive/60" 
                      />
                   </div>
                   <p className="text-base font-bold italic text-foreground/60 leading-relaxed">Critical operational leakage identified in <span className="text-destructive">92%</span> of evaluated systems.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
