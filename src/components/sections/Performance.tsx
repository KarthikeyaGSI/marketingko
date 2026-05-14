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
    <section className="py-60 md:py-96 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(var(--primary)/0.08)_0%,transparent_60%)]" />
      <div className="ambient-glow opacity-30" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mb-60 space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] md:text-xs font-black tracking-[1em] text-primary uppercase"
          >
            Operational Telemetry
          </motion.div>
          <h2 className="text-8xl md:text-[14rem] font-bold text-foreground tracking-tightest leading-[0.75] text-mask-premium">
            MEASURABLE <br />
            <span className="text-muted-foreground/30 dark:text-muted-foreground/40 italic font-medium">OUTCOMES.</span>
          </h2>
          <p className="text-2xl md:text-5xl text-muted-foreground font-medium tracking-tightest leading-tight max-w-5xl italic">
            "We don't sell hours. We sell infrastructure that hits specific KPIs. Every system we deploy is monitored by live telemetry."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20 border border-border overflow-hidden rounded-[4rem] shadow-2xl">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="p-16 md:p-24 bg-background group hover:bg-foreground/[0.02] transition-all duration-1000 relative overflow-hidden"
            >
              <div className="space-y-16 relative z-10">
                <div className="flex items-center justify-between">
                   <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-700">
                      <m.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                   </div>
                   <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest">M-ID: {i+1042}</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-9xl md:text-[12rem] font-black text-foreground tracking-tightest italic leading-none group-hover:text-primary transition-colors duration-1000">
                      {m.value}
                    </span>
                  </div>
                  <p className="text-xs font-black tracking-[0.5em] text-foreground/40 uppercase">
                    {m.label}
                  </p>
                </div>
                
                <p className="text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-sm">
                  {m.desc}
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* Cinematic Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40 w-full rounded-[4rem] md:rounded-[6rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden p-10 md:p-24 relative group shadow-[0_64px_128px_-32px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute inset-0 grid-infrastructure opacity-10 pointer-events-none" />
          <div className="ambient-glow opacity-20" />
          
          <div className="space-y-20">
            <div className="flex items-center justify-between border-b border-border/50 pb-16">
              <div className="flex items-center space-x-10">
                <div className="px-8 py-3 rounded-2xl bg-primary/10 border border-primary/20">
                  <span className="text-[12px] font-black text-primary uppercase tracking-[0.5em]">SYSTEM_CORE_V2.5</span>
                </div>
                <div className="flex items-center space-x-4">
                   <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                   <span className="text-[12px] font-bold text-foreground/40 uppercase tracking-widest italic">NEURAL FABRIC ACTIVE</span>
                </div>
              </div>
              <Activity className="text-primary/40 h-8 w-8 animate-pulse" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-8 aspect-video rounded-[4rem] bg-background/40 border border-border p-16 relative overflow-hidden group/screen">
                <div className="absolute inset-0 dot-grid opacity-20" />
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.4em]">Sub-latency Neural Stream</p>
                    <div className="flex items-center space-x-4">
                      <Globe className="w-6 h-6 text-primary/30" />
                      <span className="text-[10px] font-mono text-foreground/40">LON:01:SEQ</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-12 h-64">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          height: [40, 160, 80, 200, 60],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{ 
                          duration: 1.5 + Math.random(), 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: i * 0.05
                        }}
                        className="w-2.5 rounded-full bg-primary shadow-[0_0_20px_oklch(var(--primary)/0.3)]"
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-end pt-10">
                    <div className="space-y-2">
                      <p className="text-xs font-mono text-foreground/40">[SEC] Handshake protocol: verified</p>
                      <p className="text-xs font-mono text-primary/60">[OPS] Node clusters healthy: 12/12</p>
                    </div>
                    <div className="text-right">
                       <p className="text-6xl md:text-8xl font-black text-foreground tracking-tightest italic leading-none">99.99%</p>
                       <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">Signal Continuity</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 space-y-12">
                <div className="p-16 rounded-[4rem] bg-foreground/[0.02] border border-border space-y-12 h-full flex flex-col justify-between group-hover:border-primary/20 transition-all duration-1000 shadow-xl">
                   <div className="space-y-6">
                      <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.5em]">Saturation Index</span>
                      <h4 className="text-6xl font-bold tracking-tightest italic leading-none">EDGE<br />NODES</h4>
                   </div>
                   <div className="space-y-10">
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                         <span className="text-foreground/40">Operational Density</span>
                         <span className="text-primary">84.2%</span>
                      </div>
                      <div className="w-full h-2 bg-border/40 rounded-full overflow-hidden">
                         <motion.div initial={{ width: 0 }} whileInView={{ width: "84.2%" }} transition={{ duration: 2.5, ease: "circOut" }} className="h-full bg-primary shadow-[0_0_15px_oklch(var(--primary))]" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                        Redundant clusters active across 4 geolocations. Zero fail-rate on primary acquisition loops.
                      </p>
                   </div>
                </div>
              </div>
            </div>

            {/* High Impact Signal Bar */}
            <div className="p-16 rounded-[4rem] bg-primary text-primary-foreground space-y-12 shadow-[0_40px_100px_-20px_oklch(var(--primary)/0.3)] relative overflow-hidden group/bar">
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12">
                  <div className="space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.6em] opacity-50 italic">System Throughput</span>
                    <p className="text-8xl md:text-9xl font-black tracking-tightest italic leading-none">14,204 <span className="text-3xl opacity-40 not-italic">signals/sec</span></p>
                  </div>
                  <div className="flex items-center space-x-8 px-10 py-6 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/10 backdrop-blur-xl">
                     <Shield className="w-8 h-8 opacity-70 animate-pulse" />
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest">Secure Handshake</span>
                        <span className="text-sm font-bold opacity-60">PROTOCOL:AES-256</span>
                     </div>
                  </div>
               </div>
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(1_0_0/0.15)_0%,transparent_50%)]" />
               <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 animate-shimmer" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
