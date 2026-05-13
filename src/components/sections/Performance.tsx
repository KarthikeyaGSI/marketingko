"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { TrendingUp, Users, Target, Rocket } from "lucide-react";

const metrics = [
  { label: "Margin Expansion", value: "+412%", desc: "Direct reduction in operational acquisition drag." },
  { label: "Lead Velocity", value: "12.4x", desc: "Average increase in pipeline movement speed." },
  { label: "Unit Economics", value: "0.18", desc: "Current LTV:CAC efficiency ratio for top partners." },
  { label: "Autonomous Uptime", value: "99.9%", desc: "Infrastructure reliability for mission-critical nodes." },
];

export function Performance() {
  return (
    <section className="py-60 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-40">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[0.8em] text-primary uppercase"
            >
              System Performance
            </motion.div>
            <h2 className="text-5xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] text-mask-premium">
              METRICS THAT <br />
              <span className="text-muted-foreground/20">COMPOUND.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-xl">
              We focus on margin expansion, not just impressions. Our systems are engineered 
              to improve your unit economics through autonomous efficiency.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-20 bg-primary/5 blur-[120px] rounded-full" />
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((m, i) => (
                <PerspectiveCard key={i}>
                  <div className="p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl space-y-6 hover:border-primary/20 transition-all duration-700">
                    <span className="text-5xl font-bold text-white tracking-tighter italic">{m.value}</span>
                    <div className="space-y-2">
                      <p className="text-[10px] font-black tracking-widest text-primary uppercase">{m.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed font-medium">{m.desc}</p>
                    </div>
                  </div>
                </PerspectiveCard>
              ))}
            </div>
          </div>
        </div>

        {/* Simulated Dashboard UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full h-[600px] rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden p-12 relative group"
        >
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">MK-ADMIN-INFRASTRUCTURE-V2.4</span>
            </div>
            <div className="px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Live Monitoring</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 h-full">
            <div className="col-span-8 h-[400px] rounded-3xl border border-white/5 bg-black/40 p-8 relative">
              <div className="absolute top-8 left-8 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="text-primary h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Revenue Velocity</p>
                  <p className="text-2xl font-bold text-white tracking-tight">$8,241,102.00</p>
                </div>
              </div>
              
              {/* Mock Graph */}
              <svg className="w-full h-full pt-20" viewBox="0 0 100 30">
                <motion.path
                  d="M 0 30 Q 20 25 30 20 T 50 15 T 80 5 T 100 0"
                  fill="none"
                  stroke="oklch(0.6 0.2 250)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                />
                <motion.path
                  d="M 0 30 Q 20 25 30 20 T 50 15 T 80 5 T 100 0 V 30 H 0 Z"
                  fill="url(#grad)"
                  opacity="0.1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.1 }}
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.6 0.2 250)" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="col-span-4 h-[400px] space-y-4">
              <div className="p-6 rounded-3xl border border-white/5 bg-black/40 space-y-4">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">System Health</span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Neural Net v4</span>
                  <span className="text-xs text-green-500 font-bold">OPTIMAL</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "94%" }} className="h-full bg-primary" />
                </div>
              </div>
              <div className="p-6 rounded-3xl border border-white/5 bg-black/40 space-y-4">
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Active Leads</span>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-white">12,408</span>
                  <Users className="text-primary h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
