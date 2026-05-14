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
    <section id="process" className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 gap-12">
          <div className="space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Deployment Lifecycle
            </motion.div>
            <h2 className="text-7xl md:text-[11rem] font-bold tracking-tighter text-foreground leading-[0.8] text-mask-premium">
              THE 2-WEEK <br />
              <span className="text-muted-foreground/40 italic">PROTOCOL.</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-2xl font-medium tracking-tighter leading-tight">
              We've engineered a precision-timed protocol to take your business from manual drag to automated scale in exactly 14 days.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border/50 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative p-12 lg:p-20 space-y-12 group"
              >
                {/* Connector Node */}
                <div className="hidden lg:flex absolute top-1/2 left-0 w-full justify-center -translate-y-1/2 pointer-events-none">
                   <div className="w-10 h-10 rounded-full bg-background border-4 border-border group-hover:border-primary transition-colors duration-700 relative z-20">
                      <div className="absolute inset-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-primary shadow-[0_0_20px_rgba(0,102,255,0.8)]" />
                   </div>
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-8xl font-black text-foreground/[0.03] tracking-tighter italic leading-none group-hover:text-primary/5 transition-colors duration-1000">{step.id}</span>
                    <div className="p-6 rounded-3xl bg-foreground/[0.02] border border-border group-hover:bg-primary group-hover:border-primary transition-all duration-1000">
                       <div className="group-hover:text-primary-foreground transition-colors duration-1000">
                        {step.icon}
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6 pt-10">
                    <h3 className="text-4xl font-bold text-foreground tracking-tighter italic leading-none group-hover:translate-x-4 transition-transform duration-700">{step.title}</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-32 flex justify-center">
           <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-12 py-6 bg-background rounded-full border border-primary/20 flex items-center space-x-6">
                 <div className="text-3xl font-bold tracking-tighter italic">Day 14: <span className="text-primary uppercase">Active Ops.</span></div>
                 <div className="w-[1px] h-8 bg-border" />
                 <div className="text-[10px] font-black text-foreground/60 uppercase tracking-widest">Protocol Fully Deployed</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
