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
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Operational Logic",
    desc: "Real-time decision engine orchestrating high-density workflows across decoupled CRM layers.",
    icon: Terminal,
    benchmark: "ID: LOGIC-LAYER-08",
    color: "from-cyan-500 to-primary"
  },
  {
    title: "Response Latency",
    desc: "Infrastructure protocols engineered to reduce lead-to-outreach jitter across global edge nodes.",
    icon: Zap,
    benchmark: "Jitter: <10ms",
    color: "from-primary to-purple-600"
  }
];

export function ResultsGallery() {
  return (
    <section className="py-80 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.6_0.2_250_/_0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <div className="mb-48 space-y-12 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[1em] text-primary uppercase"
          >
            Operational Benchmarks
          </motion.div>
          <h2 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.8] text-mask-premium">
            MEASURABLE <br />
            <span className="text-muted-foreground/10 italic">AUTHORITY.</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-2xl">
            We replace generic testimonials with technical artifacts and operational benchmarks. 
            These represent the baseline performance of our deployed AI infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {systemBenchmarks.map((item, i) => (
            <PerspectiveCard key={i}>
              <div className="group h-full p-16 rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl hover:border-primary/30 transition-all duration-1000 flex flex-col justify-between">
                <div className="space-y-12">
                  <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${item.color} opacity-20 blur-2xl absolute`} />
                  <div className="relative w-20 h-20 rounded-[2rem] border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-primary/40 transition-all duration-700">
                    <item.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-4xl font-bold text-white tracking-tighter leading-none">{item.title}</h3>
                    <p className="text-xl text-muted-foreground font-medium tracking-tighter leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Audit Baseline</span>
                    <span className="text-xl font-bold text-primary tracking-tighter italic">{item.benchmark}</span>
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
          className="mt-40 rounded-[5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden p-16 relative"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
               <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Architecture Pattern</span>
               <h3 className="text-5xl font-bold text-white tracking-tighter leading-none">MK-SYS-CORE-QUAL.04</h3>
               <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                 An automated qualification engine pattern. Orchestrating thousands of 
                 behavioral signals into deterministic routing decisions with 
                 zero human intervention.
               </p>
               
               <div className="flex items-center space-x-12 pt-8">
                 <div className="flex flex-col">
                   <span className="text-3xl font-bold text-white tracking-tighter uppercase italic">Redundant</span>
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Node Topology</span>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-3xl font-bold text-primary tracking-tighter uppercase italic">Optimized</span>
                   <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">Decision Path</span>
                 </div>
               </div>
            </div>

            <div className="relative aspect-video rounded-3xl border border-white/10 bg-black/60 overflow-hidden p-8 shadow-2xl">
              {/* Complex Node Visualization */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                 <Layers className="w-80 h-80 text-primary animate-pulse-slow" />
              </div>
              <div className="relative flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="h-2 w-32 bg-primary/20 rounded-full" />
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                  </div>
                  <Activity className="text-primary/40 animate-pulse" />
                </div>
                <div className="space-y-4">
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "94%" }} transition={{ duration: 2 }} className="h-full bg-primary" />
                   </div>
                   <div className="flex justify-between text-[10px] font-bold text-white/20 uppercase tracking-widest">
                     <span>Deployment Logic</span>
                     <span>94% Accuracy</span>
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

