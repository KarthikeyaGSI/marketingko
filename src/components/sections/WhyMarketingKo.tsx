"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Business First, Tech Second",
    description: "We don't build tech for the sake of it. If an automation won't save you time or make you money, we won't recommend it.",
    icon: <Zap className="w-8 h-8 text-primary" />
  },
  {
    title: "Clear, Measurable ROI",
    description: "Every system we deploy is measured by the hours it saves and the revenue it generates.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />
  },
  {
    title: "Fast Deployment",
    description: "We don't drag out projects. We identify your biggest operational bottleneck and launch the solution in weeks, not months.",
    icon: <Clock className="w-8 h-8 text-primary" />
  },
  {
    title: "Zero Technical Headaches",
    description: "You run your business. We build, integrate, and maintain the infrastructure. You get a working system, not another tool to manage.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />
  }
];

export function WhyMarketingKo() {
  return (
    <section id="why" className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-infrastructure opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 gap-12">
          <div className="space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Strategic Differentiation
            </motion.div>
            <h2 className="text-7xl md:text-[11rem] font-bold tracking-tighter text-foreground leading-[0.8] text-mask-premium">
              OPERATIONAL <br />
              <span className="text-muted-foreground/10 italic">EDGE.</span>
            </h2>
          </div>
          <div className="pb-12">
             <p className="text-2xl text-muted-foreground font-medium tracking-tighter max-w-sm">
               We don't sell tools. We deploy infrastructure. Every system is built to survive the scale of your next 10x.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/50 border border-border overflow-hidden rounded-[4rem]">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-16 md:p-24 bg-background hover:bg-foreground/[0.02] transition-all duration-1000 group relative overflow-hidden"
            >
              <div className="absolute top-10 right-10 text-[10rem] font-black text-foreground/[0.02] leading-none select-none italic group-hover:text-primary/5 transition-colors duration-1000">
                0{i + 1}
              </div>
              
              <div className="relative z-10 space-y-12">
                <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:rotate-[360deg] transition-all duration-1000">
                  <div className="group-hover:text-white transition-colors duration-1000">
                    {reason.icon}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-5xl font-bold text-foreground tracking-tighter italic leading-tight group-hover:translate-x-4 transition-transform duration-700">{reason.title}</h3>
                  <p className="text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight max-w-lg">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Technical Detail Corner */}
              <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                   <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">System Validated</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
