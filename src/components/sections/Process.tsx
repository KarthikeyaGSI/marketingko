"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Code2, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "We understand your business",
    description: "30-minute call. We learn your business, find where money is leaking, and decide what to build.",
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
  },
  {
    id: "02",
    title: "We Scope & Price It",
    description: "You get exact deliverables, timeline, and cost in writing. No surprises before we start or after.",
    icon: <FileText className="w-10 h-10 text-primary" />,
  },
  {
    id: "03",
    title: "We Build It",
    description: "We handle the entire build and setup. You stay focused on your business.",
    icon: <Code2 className="w-10 h-10 text-primary" />,
  },
  {
    id: "04",
    title: "Goes Live. You See Results.",
    description: "System goes live in 2 weeks. You see hours saved, and revenue retained within 30 days.",
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
  }
];

export function Process() {
  return (
    <section id="process" className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">Our Process</span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
              FROM CALL TO<br />
              <span className="text-muted-foreground/20 italic">LIVE SYSTEM.</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-xl">
              In 2 weeks. Fixed scope. Fixed price. No surprises.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 space-y-12"
            >
              <div className="flex items-center justify-between">
                <span className="text-6xl font-black text-white/5 tracking-tighter italic">{step.id}</span>
                <div className="p-5 rounded-[2rem] bg-primary/5">
                   {step.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white tracking-tighter italic leading-none">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
