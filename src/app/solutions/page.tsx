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
  Activity,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const systems = [
  {
    title: "Lead Qualification",
    icon: Users,
    desc: "Identify, score, and route high-intent targets with 98% accuracy.",
    id: "SYS-01",
    href: "/systems/lead-qual"
  },
  {
    title: "Voice Infrastructure",
    icon: Mic2,
    desc: "24/7 autonomous sales and support agents with natural prosody.",
    id: "SYS-02",
    href: "/systems/voice-agents"
  },
  {
    title: "CRM Automation",
    icon: Database,
    desc: "Self-healing operational protocols that eliminate manual drag.",
    id: "SYS-03",
    href: "/systems/crm-automation"
  },
  {
    title: "Chat Intelligence",
    icon: MessageSquare,
    desc: "Advanced LLM-driven engagement loops for 24/7 conversion.",
    id: "SYS-04",
    href: "/systems/chat-systems"
  },
  {
    title: "Workflow Engineering",
    icon: Cpu,
    desc: "Sovereign operational logic nodes across your entire stack.",
    id: "SYS-05",
    href: "/systems/workflows"
  },
  {
    title: "Client Onboarding",
    icon: UserPlus,
    desc: "Automated document collection and retention-first protocols.",
    id: "SYS-06",
    href: "/systems/onboarding"
  }
];

export default function SystemsPage() {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.2_250_/_0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.8em] text-primary mb-12 uppercase"
          >
            The Operating System
          </motion.div>
          <h1 className="text-7xl md:text-[14rem] font-bold text-white tracking-tighter mb-16 leading-[0.8] text-mask-premium">
            SOVEREIGN <br />
            <span className="text-muted-foreground/10 italic">SYSTEMS.</span>
          </h1>
          <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl mx-auto font-medium tracking-tighter leading-tight italic">
            "We build AI-powered operational infrastructure that automates 
            acquisition and eliminates administrative friction."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-60">
          {systems.map((sys, i) => (
            <PerspectiveCard key={i}>
              <Link href={sys.href}>
                <div className="p-16 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl h-full flex flex-col justify-between group hover:border-primary/30 transition-all duration-700">
                  <div className="space-y-12">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                        <sys.icon className="h-8 w-8" />
                      </div>
                      <span className="text-[10px] font-black text-white/10 group-hover:text-primary transition-colors tracking-widest">{sys.id}</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-tighter leading-none">{sys.title}</h3>
                    <p className="text-xl text-muted-foreground font-medium tracking-tight leading-snug">{sys.desc}</p>
                  </div>
                  
                  <div className="mt-16 flex items-center space-x-4 pt-8 border-t border-white/5">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest group-hover:text-primary transition-colors">Audit Protocol</span>
                    <ArrowRight className="h-4 w-4 text-white/10 group-hover:translate-x-2 group-hover:text-primary transition-all" />
                  </div>
                </div>
              </Link>
            </PerspectiveCard>
          ))}
        </div>
      </div>
    </div>
  );
}
