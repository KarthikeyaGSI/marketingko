"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { BarChart3, Activity, Zap, Layers, Network, Terminal } from "lucide-react";
import { SystemPulse } from "@/components/ui/SystemPulse";
import { BlindsText } from "@/components/ui/BlindsText";

const systemBenchmarks = [
  {
    title: "Response Latency",
    value: "< 12s",
    label: "Lead-to-Contact Velocity",
    icon: <Zap className="w-6 h-6" />,
    color: "text-gold"
  },
  {
    title: "Qualification Depth",
    value: "94%",
    label: "Autonomous Target Selection",
    icon: <Layers className="w-6 h-6" />,
    color: "text-primary"
  },
  {
    title: "Conversion Lift",
    value: "2.4x",
    label: "Avg. Pipeline Efficiency",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-gold"
  }
];

export function ResultsGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <section ref={containerRef} className="py-24 md:py-60 bg-background relative overflow-hidden grain-elite">
      {/* Background Infrastructure - Sharp */}
      <div className="absolute inset-0 grid-infrastructure opacity-10 pointer-events-none" />
      <div className="glow-bleed w-[800px] h-[800px] bottom-[-20%] right-[-10%]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* CONTENT — Left side */}
          <div className="w-full lg:w-1/2 space-y-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[10px] md:text-[11px] font-black tracking-[1em] text-primary uppercase italic"
              >
                System Proof
              </motion.div>
              <BlindsText 
                text="INFRASTRUCTURE\nTHAT SCALES."
                className="text-emotional leading-[0.8] text-foreground font-black"
              />
              <p className="text-lg md:text-2xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-xl italic">
                Our benchmarks aren&apos;t metrics. They are operational standards. We engineer for maximum revenue throughput and zero-friction execution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:gap-8">
               {systemBenchmarks.map((bench, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                   className="p-8 md:p-10 rounded-[2.5rem] border border-border bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-all duration-700 flex items-center justify-between group"
                 >
                    <div className="flex items-center space-x-6 md:space-x-8">
                      <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-foreground/[0.03] flex items-center justify-center transition-all duration-700 group-hover:bg-primary group-hover:text-black ${bench.color}`}>
                        {bench.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-foreground/40 uppercase mb-1">{bench.title}</h4>
                        <p className="text-xs md:text-sm text-muted-foreground font-bold italic">{bench.label}</p>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className={`text-4xl md:text-6xl font-black italic tracking-tightest ${bench.color}`}>{bench.value}</span>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* SYSTEM VISUALIZATION — Right side */}
          <motion.div 
            style={{ rotate }}
            className="w-full lg:w-1/2 group relative z-20 lg:-ml-24"
          >
             <div className="relative p-2 rounded-[4rem] glass-system shadow-3xl overflow-hidden">
                <div className="absolute inset-0 grid-infrastructure opacity-20" />
                
                <div className="relative p-8 md:p-12 space-y-12">
                   <div className="flex justify-between items-center">
                     <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase italic">Autonomous Core</span>
                     </div>
                     <div className="flex flex-col text-right">
                       <span className="text-2xl md:text-4xl font-bold text-foreground tracking-tighter uppercase italic">Qualified</span>
                       <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest">Signal Processing</span>
                     </div>
                   </div>

                   <div className="relative aspect-[4/3] lg:aspect-video rounded-[3rem] border border-border bg-black overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-1000">
                      <SystemPulse />
                   </div>
                   
                   <div className="pt-6 border-t border-border/50 flex justify-between items-end">
                      <div className="space-y-2">
                        <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.5em]">Network Integrity</span>
                        <div className="flex space-x-1 h-8 items-end">
                          {[30, 80, 45, 90, 60, 100, 75, 85].map((h, i) => (
                            <motion.div 
                              key={i}
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="w-1.5 md:w-2 bg-primary/20 rounded-full" 
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="text-xs md:text-sm font-black text-gold italic">MK_SYSTEM_RECOVERY_ALPHA</p>
                        <p className="text-[9px] font-black text-foreground/20 uppercase tracking-widest">Uptime: 99.99%</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
