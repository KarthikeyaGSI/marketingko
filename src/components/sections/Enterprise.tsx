"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Activity, Shield, Cpu, BarChart } from "lucide-react";

const metrics = [
  { label: "Systems Deployed", value: "2.4k+", icon: Cpu },
  { label: "Capital Optimized", value: "$1.2B", icon: BarChart },
  { label: "Execution Uptime", value: "99.99%", icon: Shield },
  { label: "Network Latency", value: "12ms", icon: Activity },
];

export function Enterprise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-60 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-40 gap-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] font-black tracking-[0.5em] text-primary mb-12 uppercase"
            >
              Enterprise Validation
            </motion.div>
            <h2 className="text-5xl md:text-9xl font-bold text-white tracking-tighter leading-[0.8] mb-12">
              MONITORING <br />
              <span className="text-muted-foreground/30">SCALE.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tight max-w-2xl leading-tight">
              We deploy sovereign acquisition architectures that operate without human intervention. 
              Our systems don't just "market"—they engineer market capture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 glass-premium rounded-3xl border-primary/10 flex flex-col items-center text-center space-y-4"
              >
                <m.icon className="h-6 w-6 text-primary" />
                <span className="text-4xl font-bold text-white tracking-tighter">{m.value}</span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Horizontal Scroll Experience */}
        <div className="relative -mx-6 lg:-mx-20">
          <motion.div style={{ x }} className="flex space-x-8 px-6 lg:px-20">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="min-w-[400px] lg:min-w-[600px] h-[400px] rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 flex flex-col justify-between group hover:border-primary/30 transition-all duration-700">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Shield className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tighter">Autonomous Node {item}</h3>
                  <p className="text-muted-foreground font-medium leading-snug">
                    Deployed infrastructure managing $4.2M monthly acquisition spend with 0.02s decision latency.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-primary/20 transition-colors" />
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Active Status</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
