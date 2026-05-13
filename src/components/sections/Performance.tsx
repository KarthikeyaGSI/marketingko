"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Zap, Globe, Shield } from "lucide-react";

const metrics = [
  { 
    label: "Lead Response Time", 
    value: "0.4s", 
    desc: "Infrastructure optimized for sub-second engagement triggers.",
    icon: Zap
  },
  { 
    label: "Manual Work Reduced", 
    value: "40h", 
    desc: "Average operational overhead eliminated per weekly cycle.",
    icon: Cpu
  },
  { 
    label: "Conversion Multiple", 
    value: "3.2x", 
    desc: "Measured efficiency gain across validated acquisition funnels.",
    icon: Activity
  },
];

export function Performance() {
  return (
    <section className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(var(--primary)/0.03)_0%,transparent_60%)]" />
      <div className="scanning-line opacity-20" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mb-60 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black tracking-[1em] text-primary uppercase"
          >
            Operational Telemetry
          </motion.div>
          <h2 className="text-7xl md:text-[9.5rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium">
            MEASURABLE <br />
            <span className="text-muted-foreground/10 italic font-medium">OUTCOMES.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight leading-tight max-w-4xl">
            We don't sell hours. We sell infrastructure that hits specific KPIs. Every system we deploy is monitored by the same telemetry that built it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 border border-border overflow-hidden rounded-[4rem]">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-16 bg-background group hover:bg-foreground/[0.02] transition-all duration-1000 relative"
            >
              <div className="space-y-12 relative z-10">
                <div className="flex items-center justify-between">
                   <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10">
                      <m.icon className="w-6 h-6 text-primary" />
                   </div>
                   <span className="text-[8px] font-black text-foreground/20 uppercase tracking-widest">Metric ID: MK-{i+1}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-8xl font-black text-foreground tracking-tighter italic leading-none group-hover:text-primary transition-colors duration-700">
                      {m.value}
                    </span>
                  </div>
                  <p className="text-[10px] font-black tracking-[0.4em] text-foreground/40 uppercase">
                    {m.label}
                  </p>
                </div>
                
                <p className="text-lg text-muted-foreground font-medium tracking-tight leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 w-full rounded-[4rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden p-8 md:p-16 relative group"
        >
          <div className="absolute inset-0 grid-infrastructure opacity-5 pointer-events-none" />
          
          <div className="space-y-12">
            <div className="flex items-center justify-between border-b border-border pb-10">
              <div className="flex items-center space-x-6">
                <div className="px-5 py-2 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">SYS-NODE-MASTER</span>
                </div>
                <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                   <span className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest italic">Live Architecture Active</span>
                </div>
              </div>
              <Activity className="text-primary/40 h-6 w-6" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-8 aspect-video rounded-[3rem] bg-foreground/[0.02] border border-border p-12 relative overflow-hidden">
                <div className="absolute inset-0 dot-grid opacity-10" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <p className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Neural Flow Stream</p>
                    <Globe className="w-5 h-5 text-primary/20" />
                  </div>
                  
                  <div className="flex items-center justify-center space-x-8 h-32">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          height: [20, 80, 40, 90, 30],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2 + Math.random(), 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: i * 0.1
                        }}
                        className="w-1.5 rounded-full bg-primary"
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <p className="text-[10px] font-mono text-foreground/40">[LOG] Packet routing optimized</p>
                      <p className="text-[10px] font-mono text-primary/60">[LOG] Handshake secure: 0ms jitter</p>
                    </div>
                    <div className="text-right">
                       <p className="text-4xl font-black text-foreground tracking-tighter italic leading-none">99.9%</p>
                       <span className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest">Uptime Accuracy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 space-y-8">
                <div className="p-10 rounded-[3rem] bg-foreground/[0.02] border border-border space-y-8 h-full flex flex-col justify-between">
                   <div className="space-y-4">
                      <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest">Global Reach</span>
                      <h4 className="text-5xl font-bold tracking-tighter italic leading-none">EDGE <br />NODES</h4>
                   </div>
                   <div className="space-y-6">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                         <span className="text-foreground/30">Saturation</span>
                         <span className="text-primary">84%</span>
                      </div>
                      <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: "84%" }} transition={{ duration: 2 }} className="h-full bg-primary" />
                      </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-12 rounded-[3rem] bg-primary text-primary-foreground space-y-8 shadow-2xl shadow-primary/20 relative overflow-hidden group">
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 italic">Throughput Level</span>
                    <p className="text-7xl font-black tracking-tighter italic leading-none">14,204 <span className="text-2xl opacity-40">signals/sec</span></p>
                  </div>
                  <div className="flex items-center space-x-6 px-8 py-4 rounded-full border border-primary-foreground/10 bg-primary-foreground/5">
                     <Shield className="w-5 h-5 opacity-60" />
                     <span className="text-[10px] font-black uppercase tracking-widest">Secure Protocol Enabled</span>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(1_0_0/0.1)_0%,transparent_50%)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
