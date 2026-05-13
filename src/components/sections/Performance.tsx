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
    <section className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center text-center mb-48 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-black tracking-[1.5em] text-primary uppercase"
          >
            Operational Telemetry
          </motion.div>
          <h2 className="text-7xl md:text-[11rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium">
            MEASURABLE <br />
            <span className="text-muted-foreground/10 italic">OUTCOMES.</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-3xl">
            We don't sell hours. We sell infrastructure that hits specific KPIs. Every system we deploy is monitored by the same telemetry that built it.
          </p>
        </div>

        {/* The Outpero-style Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full rounded-[4rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden p-16 md:p-24 relative group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {systemNodes.map((m, i) => (
              <div key={i} className="space-y-8 group/stat relative">
                <div className="flex flex-col">
                   <div className="flex items-baseline space-x-2">
                      <span className="text-[10rem] font-black text-foreground tracking-tighter leading-none group-hover/stat:text-primary transition-colors duration-700 italic">
                        {m.value.split(' ')[0]}
                      </span>
                      <span className="text-4xl font-bold text-primary uppercase tracking-widest leading-none">
                        {m.value.split(' ')[1] || m.value.slice(-1) === 'x' ? m.value.slice(-1) : ''}
                      </span>
                   </div>
                   <p className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase mt-4">
                     {m.label}
                   </p>
                </div>
                <p className="text-lg text-muted-foreground font-medium tracking-tight leading-relaxed max-w-[200px]">
                  {m.desc}
                </p>
                
                {/* Connector Line for desktop */}
                {i < 3 && <div className="hidden lg:block absolute -right-10 top-1/2 w-px h-20 bg-border -translate-y-1/2" />}
              </div>
            ))}
          </div>

          {/* Technical Decoration */}
          <div className="absolute top-8 right-12 flex items-center space-x-4">
             <div className="flex space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
             </div>
             <span className="text-[8px] font-black text-foreground/20 uppercase tracking-widest">Global Telemetry ACTIVE</span>
          </div>
        </motion.div>

        {/* Dashboard Frame (Refined) */}
        <div className="mt-32 w-full rounded-[4rem] border border-border bg-foreground/[0.01] overflow-hidden p-1 p-md-4">
           <div className="p-8 md:p-16 space-y-12">
              <div className="flex items-center justify-between border-b border-border pb-10">
                 <div className="flex items-center space-x-6">
                    <div className="px-5 py-2 rounded-xl bg-primary/10 border border-primary/20">
                       <span className="text-[10px] font-black text-primary uppercase tracking-widest">MK-CORE-v4.2</span>
                    </div>
                    <span className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest italic">Load Balancer: Optimal</span>
                 </div>
                 <Activity className="text-primary/40 h-6 w-6" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                 <div className="md:col-span-8 h-[400px] rounded-[2.5rem] bg-foreground/[0.02] border border-border p-12 relative overflow-hidden group/viz">
                    <div className="absolute inset-0 dot-grid opacity-10" />
                    <div className="relative z-10 flex flex-col justify-between h-full">
                       <p className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Neural Flow Visualization</p>
                       
                       <div className="flex items-center justify-center space-x-12 h-32">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 20 }}
                              animate={{ height: [20, 80, 40, 60, 20] }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                              className="w-1.5 rounded-full bg-primary/30"
                            />
                          ))}
                       </div>

                       <div className="flex justify-between items-end">
                          <div className="space-y-1">
                             <p className="text-[10px] font-mono text-foreground/40">[2026-05-13 14:21:05] Lead node healthy</p>
                             <p className="text-[10px] font-mono text-primary/60">[2026-05-13 14:21:09] API Handshake 200 OK</p>
                          </div>
                          <p className="text-2xl font-bold tracking-tighter italic">MK-X90 ENGINE</p>
                       </div>
                    </div>
                 </div>
                 <div className="md:col-span-4 space-y-8">
                    <div className="p-10 rounded-[2.5rem] bg-foreground/[0.02] border border-border space-y-6 hover:bg-primary/[0.03] transition-colors duration-700">
                       <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest">Operational Uptime</span>
                       <div className="space-y-4">
                          <p className="text-5xl font-bold tracking-tighter italic leading-none">99.98%</p>
                          <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                             <motion.div initial={{ width: 0 }} whileInView={{ width: "99.98%" }} transition={{ duration: 2 }} className="h-full bg-primary" />
                          </div>
                       </div>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-primary text-white space-y-6 shadow-2xl shadow-primary/20 group hover:rotate-1 transition-transform duration-700">
                       <span className="text-[10px] font-black uppercase tracking-widest opacity-60">System Throughput</span>
                       <p className="text-5xl font-bold tracking-tighter italic leading-none">14,204<span className="text-2xl opacity-60 ml-2">REQ/S</span></p>
                       <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Scaled to Global Infrastructure</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

