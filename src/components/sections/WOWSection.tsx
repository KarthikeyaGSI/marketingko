"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { Zap, Shield, Cpu, Activity, Database, Search } from "lucide-react";

const nodes = [
  { id: 1, label: "Data Ingestion", icon: Database, x: "10%", y: "20%" },
  { id: 2, label: "Intent Matching", icon: Search, x: "40%", y: "15%" },
  { id: 3, label: "Margin Optimization", icon: Activity, x: "75%", y: "25%" },
  { id: 4, label: "Autonomous Outreach", icon: Cpu, x: "20%", y: "65%" },
  { id: 5, label: "Algorithmic Scaling", icon: Zap, x: "55%", y: "75%" },
  { id: 6, label: "Sovereign Security", icon: Shield, x: "85%", y: "60%" },
];

export function WOWSection() {
  return (
    <section className="py-60 relative overflow-hidden bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-3xl"
            >
              <span className="text-[10px] font-black tracking-[0.6em] text-primary uppercase">The Architecture</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-[10rem] font-bold tracking-tighter text-white leading-[0.8] text-mask-premium">
              THE OPERATING <br />
              <span className="text-muted-foreground/30 italic">SYSTEM.</span>
            </h2>
            
            <p className="text-2xl text-muted-foreground leading-tight max-w-2xl font-medium tracking-tighter">
              We don't provide "services". We deploy a full-stack growth infrastructure 
              that identifies, qualifies, and converts revenue at the speed of autonomous logic.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5">
              <div className="space-y-6">
                <span className="text-5xl font-bold text-white tracking-tighter">99.99%</span>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-black">Runtime Stability</p>
              </div>
              <div className="space-y-6">
                <span className="text-5xl font-bold text-white tracking-tighter">&lt;1ms</span>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-black">Execution Jitter</p>
              </div>
            </div>
          </div>

          <div className="relative h-[700px] perspective-elite">
            <PerspectiveCard className="w-full h-full">
              <div className="w-full h-full rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden relative p-12">
                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
                  <motion.path 
                    d="M 10 20 L 40 15 L 75 25 L 85 60 L 55 75 L 20 65 Z" 
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
                {nodes.map((node) => (
                  <motion.div
                    key={node.id}
                    className="absolute p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-3xl flex items-center space-x-4 group hover:border-primary/50 transition-all duration-700 shadow-2xl"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: node.id * 0.1 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-700">
                      <node.icon className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-black text-white tracking-[0.2em] uppercase hidden md:block">{node.label}</span>
                  </motion.div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12 right-12 text-center">
                  <p className="text-[10px] font-black tracking-[0.8em] text-white/30 uppercase">Infrastructure Layer v4.0</p>
                </div>
              </div>
            </PerspectiveCard>
          </div>
        </div>
      </div>
    </section>
  );
}

