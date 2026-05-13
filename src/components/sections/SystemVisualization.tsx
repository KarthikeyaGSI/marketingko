"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Zap, Cpu, Activity, Shield, Layers, Workflow, Share2 } from "lucide-react";

const systemSteps = [
  { id: "INGEST", icon: Database, label: "Traffic Ingestion", x: "10%", y: "20%", desc: "Sourcing high-intent data nodes from across the global network." },
  { id: "QUALIFY", icon: Cpu, label: "AI Qualification", x: "35%", y: "15%", desc: "Autonomous pattern matching to isolate high-value revenue targets." },
  { id: "ROUTE", icon: Share2, label: "Intelligent Routing", x: "65%", y: "25%", desc: "Directing nodes into optimized CRM pipelines with zero latency." },
  { id: "NURTURE", icon: Workflow, label: "Autonomous Nurture", x: "85%", y: "15%", desc: "LLM-driven engagement loops that drive decision momentum." },
  { id: "CONVERT", icon: Zap, label: "Revenue Conversion", x: "90%", y: "65%", desc: "Closing the loop with integrated autonomous sales agents." },
  { id: "MONITOR", icon: Activity, label: "Performance Audit", x: "50%", y: "80%", desc: "Continuous infrastructure optimization for margin expansion." },
];

export function SystemVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="py-80 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.8em] text-primary mb-12 uppercase"
          >
            The Operating System
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.8] mb-12 text-mask-premium">
            HOW REVENUE <br />
            <span className="text-muted-foreground/20">OPERATES.</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-medium tracking-tighter max-w-3xl mx-auto leading-tight">
            We don't provide marketing. We deploy a proprietary AI Growth OS that converts 
            human effort into autonomous acquisition infrastructure.
          </p>
        </div>

        <div className="relative h-[800px] w-full perspective-elite">
          <div className="absolute inset-0 bg-white/[0.01] rounded-[4rem] border border-white/5 backdrop-blur-3xl overflow-hidden p-20">
            {/* SVG Connection Map */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
              <motion.path
                d="M 10 20 Q 20 10 35 15 T 65 25 T 85 15 T 90 65 T 50 80 T 10 20"
                fill="none"
                stroke="white"
                strokeWidth="0.2"
                strokeDasharray="1,1"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </svg>

            {/* Nodes */}
            {systemSteps.map((node, i) => (
              <motion.div
                key={node.id}
                className="absolute group"
                style={{ left: node.x, top: node.y }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="system-node w-20 h-20 md:w-32 md:h-32 mb-6">
                  <node.icon className="h-6 w-6 md:h-10 md:w-10 text-white group-hover:text-primary group-hover:scale-125 transition-all duration-700" />
                  
                  {/* Glow Ring */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-700" />
                </div>
                
                <div className="max-w-[200px] space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <span className="text-[10px] font-black tracking-widest text-primary uppercase">{node.label}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">{node.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Central Infrastructure Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-96 h-96 bg-primary rounded-full blur-[150px]"
              />
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-black tracking-[0.6em] text-white/40 uppercase">System Core</span>
                <h3 className="text-4xl font-bold text-white tracking-tighter">MARKETING KO V2</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
