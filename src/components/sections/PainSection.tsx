"use client";

import { motion } from "framer-motion";
import { AlertCircle, ZapOff, TrendingDown, Clock, Ghost } from "lucide-react";

const problems = [
  {
    title: "Operational Friction",
    desc: "Your growth is throttled by manual processes that don't scale. Every new lead creates more work, not more profit.",
    icon: ZapOff,
    highlight: "Operational Drag"
  },
  {
    title: "Data Silos",
    desc: "Your customer data is fragmented across 5 different platforms. You're flying blind while your competitors use AI to see the whole board.",
    icon: Ghost,
    highlight: "Information Decay"
  },
  {
    title: "Leaking Pipelines",
    desc: "60% of your qualified leads are lost in the 'gap' between marketing and sales due to slow response times and poor routing.",
    icon: TrendingDown,
    highlight: "Revenue Leakage"
  },
  {
    title: "Agency Fatigue",
    desc: "Traditional agencies sell you 'impressions' and 'reach' while ignoring the underlying unit economics of your business.",
    icon: AlertCircle,
    highlight: "Vanity Metrics"
  }
];

export function PainSection() {
  return (
    <section className="py-80 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.4_0.1_25_/_0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-48 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black tracking-[1em] text-red-500 uppercase"
          >
            The Critical Gap
          </motion.div>
          <h2 className="text-6xl md:text-[12rem] font-bold text-white tracking-tighter leading-[0.8] text-mask-premium">
            MOST BRANDS <br />
            <span className="text-red-500/20 italic">ARE BROKEN.</span>
          </h2>
          <p className="text-3xl md:text-5xl text-muted-foreground font-medium tracking-tighter leading-[1.1] max-w-5xl">
            They're using 2018 playbooks in a 2025 AI economy. 
            Scaling a broken system only leads to faster collapse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-16 rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl hover:border-red-500/20 transition-all duration-1000 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-start">
                   <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-red-500/40 transition-colors duration-700">
                     <problem.icon className="w-8 h-8 text-white group-hover:text-red-500 transition-colors" />
                   </div>
                   <span className="text-[10px] font-black text-red-500/40 uppercase tracking-widest">{problem.highlight}</span>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-white tracking-tighter">{problem.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                    {problem.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 flex justify-center">
           <div className="px-12 py-6 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-2xl flex items-center space-x-6">
              <Clock className="text-red-500 h-5 w-5 animate-pulse" />
              <p className="text-sm font-bold text-white/40 uppercase tracking-widest italic">
                Manual scaling is a terminal bottleneck. You need infrastructure, not more staff.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
