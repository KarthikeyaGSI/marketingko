"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { 
  Users, 
  Mic2, 
  Database, 
  TrendingUp, 
  MessageSquare, 
  Cpu, 
  UserPlus, 
  Activity 
} from "lucide-react";

const systems = [
  {
    title: "Lead Qualification",
    icon: Users,
    desc: "Autonomous pattern matching and intent analysis to isolate high-value revenue targets with zero human friction.",
    id: "SYS-01"
  },
  {
    title: "Voice Infrastructure",
    icon: Mic2,
    desc: "24/7 autonomous sales and support nodes capable of processing thousands of concurrent voice streams.",
    id: "SYS-02"
  },
  {
    title: "CRM Architecture",
    icon: Database,
    desc: "End-to-end operational pipelines that automate data orchestration and eliminate manual bottlenecks.",
    id: "SYS-03"
  },
  {
    title: "Acquisition Systems",
    icon: TrendingUp,
    desc: "Autonomous growth engines that identify, qualify, and convert opportunities at enterprise scale.",
    id: "SYS-04"
  },
  {
    title: "Engagement Loops",
    icon: MessageSquare,
    desc: "Advanced LLM-driven response protocols that drive decision momentum and user conversion.",
    id: "SYS-05"
  },
  {
    title: "Workflow Intelligence",
    icon: Cpu,
    desc: "Custom-engineered operational protocols designed for maximum margin expansion and processing speed.",
    id: "SYS-06"
  },
  {
    title: "Sovereign Onboarding",
    icon: UserPlus,
    desc: "Self-healing deployment systems that automate client success and maximize lifecycle value.",
    id: "SYS-07"
  },
  {
    title: "Operational Audits",
    icon: Activity,
    desc: "Continuous infrastructure monitoring and node optimization for mission-critical business units.",
    id: "SYS-08"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-60 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-48 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.8em] text-primary uppercase"
          >
            System Categories
          </motion.div>
          <h2 className="text-6xl md:text-[11rem] font-bold text-white tracking-tighter leading-[0.85] text-mask-premium">
            ENGINEERED <br />
            <span className="text-muted-foreground/10 italic">INFRASTRUCTURE.</span>
          </h2>
          <p className="text-3xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-5xl">
            We deploy sovereign acquisition architectures and operational protocols 
            that operate autonomously, compounding your competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((sys, i) => (
            <PerspectiveCard key={i}>
              <div className="p-12 rounded-[3rem] border border-white/5 bg-white/[0.01] h-full flex flex-col justify-between group hover:border-primary/30 transition-all duration-700">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-700">
                      <sys.icon className="h-8 w-8" />
                    </div>
                    <span className="text-[10px] font-black text-white/10 group-hover:text-primary transition-colors tracking-widest">{sys.id}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tighter leading-none">{sys.title}</h3>
                  <p className="text-lg text-muted-foreground font-medium leading-relaxed tracking-tight">{sys.desc}</p>
                </div>
                
                <div className="mt-12 flex items-center space-x-6 pt-10 border-t border-white/5">
                  <div className="h-[1px] flex-1 bg-white/10 group-hover:bg-primary/30 transition-all" />
                  <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Node Active</span>
                </div>
              </div>
            </PerspectiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="py-80 bg-black relative border-t border-white/5">
       <div className="container mx-auto px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            <div className="space-y-16">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[10px] font-black tracking-[0.8em] text-primary uppercase"
              >
                Implementation Protocol
              </motion.div>
              <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.9]">
                HOW SYSTEMS <br />
                <span className="text-muted-foreground/20 italic">DEPLOY.</span>
              </h2>
              <div className="space-y-16">
                {[
                  { step: "01", title: "Infrastructure Audit", desc: "We map operational drag and isolate high-velocity revenue opportunities within your current stack." },
                  { step: "02", title: "Architecture Design", desc: "Custom engineering of AI protocols and system integrations specific to your proprietary unit economics." },
                  { step: "03", title: "Autonomous Deployment", desc: "Direct integration of sovereign agents and automated workflows into your primary infrastructure." },
                  { step: "04", title: "Continuous Optimization", desc: "Real-time monitoring and node tuning to ensure maximum margin expansion and system resilience." }
                ].map((p, i) => (
                  <div key={i} className="flex space-x-12 group">
                    <span className="text-5xl font-bold text-white/5 group-hover:text-primary transition-colors">{p.step}</span>
                    <div className="space-y-6">
                      <h4 className="text-3xl font-bold text-white tracking-tighter">{p.title}</h4>
                      <p className="text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-xl">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square">
               <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse-slow" />
               <div className="relative h-full w-full border border-white/5 bg-white/[0.01] rounded-[5rem] p-24 overflow-hidden flex items-center justify-center">
                  <Cpu className="h-80 w-80 text-white/5 animate-orbit" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Core Engine</span>
                      <p className="text-8xl font-bold text-white tracking-tighter">MK-02</p>
                    </div>
                  </div>
               </div>
            </div>
         </div>
       </div>
    </section>
  );
}

