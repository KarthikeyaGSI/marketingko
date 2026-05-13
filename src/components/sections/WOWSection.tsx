"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { Zap, Shield, Cpu, Activity, Database, Search } from "lucide-react";

const nodes = [
  { id: 1, label: "Data Ingestion", icon: Database, x: "10%", y: "20%" },
  { id: 2, label: "AI Pattern Matching", icon: Search, x: "40%", y: "15%" },
  { id: 3, label: "Revenue Optimization", icon: Activity, x: "75%", y: "25%" },
  { id: 4, label: "Automated Outreach", icon: Cpu, x: "20%", y: "65%" },
  { id: 5, label: "Predictive Scaling", icon: Zap, x: "55%", y: "75%" },
  { id: 6, label: "Security Layer", icon: Shield, x: "85%", y: "60%" },
];

export function WOWSection() {
  return (
    <section className="py-40 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5"
            >
              <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">The Architecture</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
              THE OPERATING <br />
              <span className="text-muted-foreground/30">SYSTEM.</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl font-medium tracking-tight">
              We don't provide "services". We deploy a full-stack growth infrastructure 
              that identifies, qualifies, and converts revenue with zero human friction.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <span className="text-4xl font-bold text-white tracking-tight">99.9%</span>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Uptime Reliability</p>
              </div>
              <div className="space-y-4">
                <span className="text-4xl font-bold text-white tracking-tight">0.02s</span>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Decision Latency</p>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] perspective-container">
            <PerspectiveCard className="w-full h-full">
              <div className="w-full h-full rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden relative p-8">
                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                  <motion.path 
                    d="M 10 20 L 40 15 L 75 25 L 85 60 L 55 75 L 20 65 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="0.5"
                    strokeDasharray="2,2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                  <motion.div
                    key={node.id}
                    className="absolute p-4 rounded-xl border border-white/10 bg-black/50 backdrop-blur-xl flex items-center space-x-3 group hover:border-white/40 transition-colors"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: node.id * 0.1 }}
                  >
                    <node.icon className="h-4 w-4 text-white group-hover:scale-125 transition-transform" />
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase hidden md:block">{node.label}</span>
                  </motion.div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <p className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">Core Infrastructure Layer</p>
                </div>
              </div>
            </PerspectiveCard>
          </div>
        </div>
      </div>
    </section>
  );
}
