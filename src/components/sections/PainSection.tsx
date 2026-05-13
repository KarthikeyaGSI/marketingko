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
    <section className="py-80 bg-background relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mb-48 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black tracking-[1em] text-primary uppercase"
          >
            The Critical Gap
          </motion.div>
          <h2 className="text-7xl md:text-[10rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium">
            MOST BRANDS <br />
            <span className="text-muted-foreground/10 italic font-medium">ARE BROKEN.</span>
          </h2>
          <p className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tight leading-tight max-w-4xl">
            They're using 2018 playbooks in a 2025 AI economy. 
            Scaling a broken system only leads to faster collapse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 border border-border overflow-hidden rounded-[4rem]">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group p-16 md:p-24 bg-background hover:bg-foreground/[0.02] transition-all duration-1000 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-start">
                   <div className="w-20 h-20 rounded-3xl border border-border bg-foreground/[0.02] flex items-center justify-center group-hover:bg-primary transition-all duration-1000">
                     <problem.icon className="w-10 h-10 text-foreground group-hover:text-white transition-colors duration-700" />
                   </div>
                   <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                     <span className="text-[8px] font-black text-primary uppercase tracking-widest">{problem.highlight}</span>
                   </div>
                </div>
                
                <div className="space-y-8">
                  <h3 className="text-4xl font-bold text-foreground tracking-tighter italic group-hover:text-primary transition-colors duration-700">{problem.title}</h3>
                  <p className="text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight max-w-lg">
                    {problem.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 flex justify-center">
           <div className="px-12 py-8 rounded-[2.5rem] border border-border bg-foreground/[0.02] backdrop-blur-2xl flex items-center space-x-8">
              <Clock className="text-primary h-6 w-6 animate-pulse" />
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] italic max-w-xl text-center md:text-left leading-relaxed">
                Manual scaling is a terminal bottleneck. You need infrastructure, not more staff.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
