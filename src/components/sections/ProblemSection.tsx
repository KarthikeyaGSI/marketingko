"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, AlertTriangle, ShieldX, TrendingDown } from "lucide-react";

const pains = [
  {
    id: "01",
    title: "Leads Going Cold",
    description: "You pay for ads. Leads come in. Nobody calls back in time. 78% of customers buy from whoever responds first — by the time you respond, the deal's already gone.",
    icon: <AlertTriangle className="w-12 h-12" />,
    stats: "78% Decay Rate"
  },
  {
    id: "02",
    title: "Manual Overload",
    description: "Your team spends 20–40 hours a week on repetitive tasks. Data entry, scheduling, generating reports — that's 40 hours not spent on growing revenue.",
    icon: <TrendingDown className="w-12 h-12" />,
    stats: "40hr/wk Loss"
  },
  {
    id: "03",
    title: "Conversion Gaps",
    description: "Traffic lands on your site, looks around, and leaves. Without a clear system to capture and qualify visitors, you're losing potential revenue every second.",
    icon: <ShieldX className="w-12 h-12" />,
    stats: "2.4x Multiplier Missed"
  }
];

export function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} id="problem" className="py-60 md:py-96 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,oklch(var(--primary)/0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start asymmetric-scene">
          
          {/* SCENE HEADER (Aggressive Typography) */}
          <div className="lg:col-span-12 mb-40">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[12px] font-black tracking-[1.2em] text-primary uppercase italic mb-12"
              >
                Current State Analysis
              </motion.div>
              <h2 className="text-7xl sm:text-[9rem] md:text-[14rem] font-black tracking-tightest text-foreground leading-[0.85] text-mask-premium uppercase relative">
                DOING EVERYTHING. <br />
                <span className="text-muted-foreground/5 italic font-medium">BUT STILL LOSING.</span>
                
                {/* Asymmetrical Detail */}
                <div className="absolute -top-20 right-0 w-60 h-60 border border-foreground/5 rounded-full animate-spin-slow hidden md:block" />
              </h2>
          </div>

          {/* LAYERED STACKING (The "Pains") */}
          <div className="lg:col-span-7 space-y-12">
            <p className="text-4xl md:text-6xl text-muted-foreground font-medium tracking-tightest leading-tight italic max-w-4xl border-l-4 border-primary/20 pl-12">
              "Most businesses aren't failing at marketing. They are failing at <span className="text-foreground not-italic font-black">infrastructure</span>. Your growth is being choked by operational drag."
            </p>
            
            <div className="pt-20 grid grid-cols-1 gap-12">
               {pains.map((pain, i) => (
                 <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="p-16 rounded-[4rem] glass-system group relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 p-10">
                       <span className="text-8xl font-black text-foreground/[0.03] italic">{pain.id}</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-12 relative z-10">
                       <div className="w-24 h-24 rounded-3xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000 group-hover:scale-110">
                          {pain.icon}
                       </div>
                       <div className="space-y-4 flex-1">
                          <div className="flex items-center space-x-6">
                            <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tightest italic uppercase">{pain.title}</h3>
                            <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">{pain.stats}</div>
                          </div>
                          <p className="text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight max-w-2xl">
                            {pain.description}
                          </p>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* VISUAL TENSION (Right Side) */}
          <div className="lg:col-span-5 relative hidden lg:block h-full">
             <div className="sticky top-40 space-y-12">
                <motion.div 
                  style={{ x: x1 }}
                  className="w-full aspect-square rounded-[5rem] border border-foreground/5 bg-foreground/[0.01] relative overflow-hidden flex items-center justify-center"
                >
                   <div className="absolute inset-0 grid-infrastructure opacity-20" />
                   <div className="relative z-10 space-y-8 text-center">
                      <div className="w-32 h-32 rounded-full bg-primary/20 blur-[60px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                      <Activity className="w-32 h-32 text-primary mx-auto relative z-10" />
                      <p className="text-[12px] font-black tracking-[1em] text-primary uppercase italic relative z-10">Diagnostic Active</p>
                   </div>
                </motion.div>
                
                <motion.div 
                  style={{ x: x2 }}
                  className="p-12 rounded-[4rem] glass-system space-y-8"
                >
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">Leak_Detection_v4</span>
                      <div className="w-4 h-4 rounded-full bg-red-500 animate-ping" />
                   </div>
                   <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        className="h-full bg-red-500/50" 
                      />
                   </div>
                   <p className="text-xl font-bold italic text-foreground/40">Critical operational leakage identified in 92% of evaluated systems.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
