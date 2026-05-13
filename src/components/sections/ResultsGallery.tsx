"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { BarChart3, Activity, Zap, Layers, Network, Terminal } from "lucide-react";

const systemBenchmarks = [
  {
    title: "Autonomous Pathfinding",
    desc: "A self-healing acquisition architecture that identifies and qualifies signals with sub-millisecond precision.",
    icon: Network,
    benchmark: "Protocol: MK-QUAL-v4",
    color: "from-primary to-foreground/40"
  },
  {
    title: "Operational Logic",
    desc: "Real-time decision engine orchestrating high-density workflows across decoupled CRM layers.",
    icon: Terminal,
    benchmark: "ID: LOGIC-LAYER-08",
    color: "from-foreground/20 to-primary"
  },
  {
    title: "Response Latency",
    desc: "Infrastructure protocols engineered to reduce lead-to-outreach jitter across global edge nodes.",
    icon: Zap,
    benchmark: "Jitter: <10ms",
    color: "from-primary to-foreground"
  }
];

export function ResultsGallery() {
  return (
    <section className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="mb-48 space-y-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black tracking-[1em] text-primary uppercase"
          >
            Operational Benchmarks
          </motion.div>
          <h2 className="text-7xl md:text-[9.5rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium">
            MEASURABLE <br />
            <span className="text-muted-foreground/10 italic font-medium">AUTHORITY.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight leading-tight max-w-3xl">
            We replace generic testimonials with technical artifacts and operational benchmarks. 
            These represent the baseline performance of our deployed AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50 border border-border overflow-hidden rounded-[4rem]">
          {systemBenchmarks.map((item, i) => (
            <PerspectiveCard key={i}>
              <div className="group h-full p-16 md:p-24 bg-background hover:bg-foreground/[0.02] transition-all duration-1000 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <div className="space-y-16 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="relative w-20 h-20 rounded-3xl border border-border bg-foreground/[0.02] flex items-center justify-center group-hover:bg-primary transition-all duration-1000">
                      <item.icon className="w-10 h-10 text-foreground group-hover:text-primary-foreground group-hover:rotate-12 transition-all duration-700" />
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10">
                       <span className="text-[8px] font-black text-primary uppercase tracking-widest italic">{item.benchmark}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-4xl font-bold text-foreground tracking-tighter italic leading-none group-hover:text-primary transition-colors duration-700">{item.title}</h3>
                    <p className="text-2xl text-muted-foreground font-medium tracking-tight leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-border/50 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.4em]">Audit Baseline</span>
                    <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                       <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">Validated</span>
                    </div>
                  </div>
                </div>
              </div>
            </PerspectiveCard>
          ))}
        </div>

        {/* Technical Artifact - Large Display */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-48 rounded-[4rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden p-16 md:p-24 relative group hover:border-primary/20 transition-all duration-1000"
        >
          <div className="absolute inset-0 grid-infrastructure opacity-10 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-16">
               <div className="flex items-center space-x-6">
                 <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Architecture Pattern</span>
                 <div className="h-px flex-1 bg-border/50" />
               </div>
               <h3 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter leading-none italic">MK-SYS-CORE-QUAL.04</h3>
               <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight max-w-xl">
                 An automated qualification engine pattern. Orchestrating thousands of 
                 behavioral signals into deterministic routing decisions with 
                 zero human intervention.
               </p>
               
               <div className="flex flex-wrap items-center gap-12 pt-8">
                 <div className="flex flex-col">
                   <span className="text-4xl font-bold text-foreground tracking-tighter uppercase italic">Redundant</span>
                   <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Node Topology</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-4xl font-bold text-primary tracking-tighter uppercase italic">Optimized</span>
                   <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Decision Path</span>
                 </div>
               </div>
            </div>

            <div className="relative aspect-video rounded-[3rem] border border-border bg-background/50 backdrop-blur-2xl overflow-hidden p-12 shadow-2xl group-hover:scale-[1.02] transition-transform duration-1000">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.1)_0%,transparent_70%)]" />
              <div className="relative flex flex-col justify-between h-full z-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-4">
                    <div className="h-3 w-48 bg-primary/20 rounded-full overflow-hidden">
                       <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="h-full w-1/3 bg-primary" />
                    </div>
                    <div className="h-2 w-32 bg-foreground/10 rounded-full" />
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 flex items-center space-x-3">
                     <Activity className="text-primary w-4 h-4 animate-pulse" />
                     <span className="text-[10px] font-black text-primary uppercase tracking-widest">Live Flow</span>
                  </div>
                </div>

                <div className="space-y-8">
                   <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "94%" }} transition={{ duration: 2, delay: 0.5 }} className="h-full bg-primary" />
                   </div>
                   <div className="flex justify-between items-end">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Deployment Logic</span>
                        <p className="text-5xl font-black text-foreground tracking-tighter italic">94% ACCURACY</p>
                      </div>
                      <div className="text-right">
                         <span className="text-[10px] font-black text-primary uppercase tracking-widest">Status: Optimal</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

