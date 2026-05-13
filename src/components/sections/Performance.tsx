"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { TrendingUp, Users, Shield, Cpu, Activity, Database } from "lucide-react";

const systemNodes = [
  { label: "Lead Response Time", value: "0 sec", desc: "System triggers within milliseconds of lead submission." },
  { label: "Manual Work Eliminated", value: "40 hrs", desc: "Repetitive tasks removed from your weekly schedule." },
  { label: "Average Conversion Lift", value: "3x", desc: "Significant multiplier on existing traffic performance." },
  { label: "Tech Headache for You", value: "Zero", desc: "We handle the infrastructure. You run the business." },
];

export function Performance() {
  return (
    <section className="py-60 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-48">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              System Performance
            </motion.div>
            <h2 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.8] text-mask-premium">
              SYSTEMS THAT <br />
              <span className="text-muted-foreground/10 italic">SCALE ROI.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-2xl">
              We replace generic growth claims with live infrastructure artifacts. 
              Our systems are monitored through high-fidelity telemetry to ensure 
              absolute operational precision.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-20 bg-primary/5 blur-[150px] rounded-full" />
            <div className="grid grid-cols-2 gap-8">
              {systemNodes.map((m, i) => (
                <PerspectiveCard key={i}>
                  <div className="p-12 rounded-[3.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl space-y-8 hover:border-primary/40 transition-all duration-1000 flex flex-col justify-between h-full">
                    <span className="text-6xl font-bold text-white tracking-tighter italic">{m.value}</span>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">{m.label}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium tracking-tight">{m.desc}</p>
                    </div>
                  </div>
                </PerspectiveCard>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Terminal / Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full rounded-[5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden p-16 relative group shadow-2xl"
        >
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-10">
              <div className="flex space-x-3">
                <div className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/20" />
                <div className="w-4 h-4 rounded-full bg-yellow-500/10 border border-yellow-500/20" />
                <div className="w-4 h-4 rounded-full bg-green-500/10 border border-green-500/20" />
              </div>
              <span className="text-[10px] font-black tracking-[0.8em] text-white/20 uppercase">MK-SYS-CORE-MONITOR-v4.2.0</span>
            </div>
            <div className="flex items-center space-x-8">
              <div className="px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-pulse">Live Protocol</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
            <div className="md:col-span-8 h-[500px] rounded-[3rem] border border-white/10 bg-black/40 p-12 relative overflow-hidden">
               {/* Grid Background */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
               
               <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                       <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Node Path Visualization</p>
                       <p className="text-3xl font-bold text-white tracking-tighter">MK-PRIMARY-LOAD-BALANCER</p>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-xs font-bold text-primary tracking-widest">STATUS: OPTIMAL</span>
                       <span className="text-[10px] font-medium text-white/20 uppercase tracking-widest">v4.0.8</span>
                    </div>
                  </div>

                  {/* Flow Animation */}
                  <div className="relative h-40 flex items-center justify-center">
                     <svg className="w-full h-full opacity-20" viewBox="0 0 100 20">
                        <motion.path 
                          d="M 0 10 Q 25 5 50 10 T 100 10" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="0.5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Activity className="text-primary/40 h-20 w-20 animate-pulse" />
                     </div>
                  </div>

                  <div className="flex justify-between items-end border-t border-white/5 pt-8">
                     <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                           <div className="w-2 h-2 rounded-full bg-primary" />
                           <span className="text-[10px] font-black text-white uppercase tracking-widest">System Logs: </span>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] text-white/30 font-mono">[14:21:02] Lead Ingestion Node Activated</p>
                           <p className="text-[10px] text-primary/50 font-mono">[14:21:05] Intent Analysis: Score 0.94</p>
                        </div>
                     </div>
                     <div className="text-right">
                        <p className="text-4xl font-bold text-white tracking-tighter italic">MK-X90</p>
                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Core Engine</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="md:col-span-4 space-y-8">
               <div className="p-10 rounded-[3rem] border border-white/10 bg-black/40 space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Neural Load</span>
                    <Shield className="text-primary h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                       <span className="text-5xl font-bold text-white tracking-tighter italic">98.2%</span>
                       <span className="text-xs text-green-500 font-bold uppercase tracking-widest">Healthy</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: "98.2%" }} transition={{ duration: 1.5 }} className="h-full bg-primary shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
                    </div>
                  </div>
               </div>

               <div className="p-10 rounded-[3rem] border border-white/10 bg-black/40 space-y-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Active Requests</span>
                    <Database className="text-primary h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-5xl font-bold text-white tracking-tighter italic">14,204/s</span>
                    <p className="text-xs text-white/30 font-medium tracking-tight">Real-time processing throughput across global nodes.</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none opacity-40" />
        </motion.div>
      </div>
    </section>
  );
}

