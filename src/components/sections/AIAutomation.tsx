"use client";

import { motion } from "framer-motion";
import { Network, Zap, Cpu, Database, MessageSquare, Workflow, ArrowRight } from "lucide-react";

const workflows = [
  {
    title: "AI Lead Routing",
    desc: "Autonomous qualification nodes that score and route leads based on behavioral signals in real-time.",
    icon: Network,
    status: "Active"
  },
  {
    title: "Voice Automation",
    desc: "Neural voice agents that handle inbound and outbound communication with human-like latency.",
    icon: MessageSquare,
    status: "Optimized"
  },
  {
    title: "CRM Intelligence",
    desc: "Self-healing CRM systems that clean data, enrich profiles, and trigger actions automatically.",
    icon: Database,
    status: "Encrypted"
  },
  {
    title: "Workflow Engine",
    desc: "End-to-end operational automation that replaces manual repetition with high-throughput logic.",
    icon: Workflow,
    status: "Redundant"
  }
];

export function AIAutomation() {
  return (
    <section className="py-80 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.2_250_/_0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-60">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              The AI Operating Layer
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] text-mask-premium">
              AUTONOMOUS <br />
              <span className="text-muted-foreground/20 italic">EXECUTION.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-xl">
              Most agencies use AI for chat. We use AI for architecture. 
              We build self-governing systems that operate without human intervention.
            </p>
          </div>

          <div className="relative aspect-square rounded-[5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden p-16 group">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
             
             {/* Dynamic Diagram Mockup */}
             <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between">
                   <div className="w-20 h-20 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center">
                      <Cpu className="text-primary w-10 h-10" />
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Protocol</span>
                      <span className="text-xl font-bold text-white italic tracking-tighter">MK-OS-AUTO</span>
                   </div>
                </div>

                <div className="flex flex-col items-center">
                   <div className="relative">
                      <div className="w-32 h-32 rounded-full border-2 border-primary/20 animate-ping absolute inset-0" />
                      <div className="w-32 h-32 rounded-full border-2 border-primary/40 flex items-center justify-center bg-black/60 relative z-10">
                        <Zap className="text-primary w-12 h-12" />
                      </div>
                   </div>
                   <div className="mt-8 flex flex-col items-center">
                      <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-pulse">Processing Flow</span>
                      <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent mt-4" />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Throughput</p>
                      <p className="text-3xl font-bold text-white tracking-tighter italic">14.2k/h</p>
                   </div>
                   <div className="p-6 rounded-2xl border border-white/10 bg-black/40">
                      <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Accuracy</p>
                      <p className="text-3xl font-bold text-primary tracking-tighter italic">99.98%</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {workflows.map((flow, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-700"
            >
              <div className="flex justify-between items-start mb-8">
                 <flow.icon className="text-white w-6 h-6 group-hover:text-primary transition-colors" />
                 <span className="text-[8px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{flow.status}</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 tracking-tighter">{flow.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium tracking-tight mb-8">
                {flow.desc}
              </p>
              <div className="flex items-center text-white/40 group-hover:text-white transition-colors cursor-pointer">
                 <span className="text-[10px] font-black tracking-widest uppercase">View Architecture</span>
                 <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
