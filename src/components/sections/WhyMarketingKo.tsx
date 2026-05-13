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
    <section id="why" className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">Why Marketing Ko</span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
              WHY WORK<br />
              <span className="text-muted-foreground/20 italic">WITH US?</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 flex flex-col md:flex-row md:items-start gap-10 group"
            >
              <div className="p-6 rounded-[2rem] bg-primary/5 group-hover:bg-primary/20 transition-all duration-700 shrink-0">
                {reason.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-bold text-white tracking-tighter italic leading-none">{reason.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
