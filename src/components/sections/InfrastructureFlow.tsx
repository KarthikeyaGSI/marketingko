"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Cpu, Database, MessageSquare, Zap, Activity, TrendingUp } from "lucide-react";

const nodes = [
  { icon: TrendingUp, label: "Traffic Source", desc: "Omnichannel Data Ingestion", color: "from-blue-500 to-cyan-400" },
  { icon: Cpu, label: "AI Qualification", desc: "Real-time Intent Analysis", color: "from-cyan-400 to-primary" },
  { icon: Database, label: "CRM Routing", desc: "Dynamic Lead Allocation", color: "from-primary to-purple-500" },
  { icon: MessageSquare, label: "Auto Follow-Up", desc: "Sovereign Engagement Loops", color: "from-purple-500 to-pink-500" },
  { icon: Activity, label: "Pipeline Optimization", desc: "Self-healing Conversion Paths", color: "from-pink-500 to-red-500" },
  { icon: Zap, label: "Revenue Tracking", desc: "Closed-loop Attribution", color: "from-red-500 to-orange-500" },
];

export function InfrastructureFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="py-32 md:py-80 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-48 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[1em] text-primary uppercase"
          >
            System Architecture
          </motion.div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase italic">
            THE REVENUE <br />
            <span className="text-muted-foreground/60 dark:text-muted-foreground/40 italic font-medium">OPERATING SYSTEM.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block" />
          
          <div className="space-y-40 relative">
            {nodes.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-12`}
              >
                {/* Node Visual */}
                <div className="flex-1 flex justify-center">
                  <div className={`relative group w-48 h-48`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${node.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700`} />
                    <div className="relative w-full h-full border border-border bg-foreground/[0.01] backdrop-blur-3xl rounded-3xl flex items-center justify-center group-hover:border-primary/40 transition-all duration-700">
                      <node.icon className="w-16 h-16 text-foreground group-hover:scale-110 transition-transform duration-700 group-hover:text-primary" />
                      
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 border border-primary/20 rounded-3xl animate-ping opacity-20" />
                    </div>
                  </div>
                </div>

                {/* Connector Node */}
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(0,102,255,0.8)]" />
                </div>

                {/* Content */}
                <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} space-y-4`}>
                  <span className={`text-[24px] sm:text-4xl font-bold tracking-tight sm:tracking-tightest text-foreground uppercase italic`}>{node.label}</span>
                  <p className="text-lg sm:text-xl text-muted-foreground font-medium tracking-tightest uppercase leading-none opacity-60 italic">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
