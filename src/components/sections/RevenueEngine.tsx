"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Droplet, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Target, 
  Users, 
  Clock,
  Layers,
  ChevronRight
} from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";

const leakages = [
  {
    title: "Unqualified Noise",
    description: "Sales teams wasting 60% of their time on leads that will never convert.",
    icon: Users,
    impact: "CRITICAL",
    loss: "40%"
  },
  {
    title: "Manual Follow-up",
    description: "Lead response time > 5 mins reduces conversion probability by 80%.",
    icon: Clock,
    impact: "HIGH",
    loss: "25%"
  },
  {
    title: "Information Gaps",
    description: "Disjointed data across CRM and ads leading to wasted ad spend.",
    icon: Layers,
    impact: "SEVERE",
    loss: "15%"
  }
];

const solutions = [
  {
    title: "AI Qualification",
    description: "Autonomous agents qualify every lead in real-time before they reach your sales team.",
    icon: Target,
    outcome: "PRECISE",
    gain: "95%"
  },
  {
    title: "Instant Response",
    description: "Zero-latency engagement ensures every high-intent target is captured instantly.",
    icon: Zap,
    outcome: "SPEED",
    gain: "8x"
  },
  {
    title: "Unified OS",
    description: "Seamless data flow between tracking, qualification, and closing.",
    icon: ShieldCheck,
    outcome: "FLOW",
    gain: "100%"
  }
];

const stagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.1 } 
  }
};

export function RevenueEngine() {
  return (
    <section className="py-40 bg-background relative overflow-hidden mesh-premium grain-elite">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Content */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black tracking-[1em] text-primary uppercase mb-8"
          >
            Infrastructure Integrity
          </motion.div>
          <motion.h2 
            variants={stagger}
            className="text-emotional leading-[0.8] mb-12"
          >
            STOP THE <br />
            <span className="text-gold not-italic font-medium">LEAKAGE.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-tighter leading-tight italic">
            "Your business doesn't need more leads. It needs a sealed environment where no revenue can escape."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* THE LEAK (Before) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-destructive/30" />
              <span className="text-xs font-black tracking-widest text-destructive uppercase">Existing Infrastructure</span>
            </div>
            
            {leakages.map((leak, i) => (
              <Magnetic key={i} strength={0.03}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 rounded-[2.5rem] border border-destructive/10 bg-destructive/5 relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                        <leak.icon className="h-5 w-5 text-destructive" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground tracking-tight">{leak.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl md:text-3xl font-black text-destructive tracking-tighter">-{leak.loss}</span>
                      <span className="text-[10px] font-black text-destructive/40 uppercase tracking-widest italic">{leak.impact} Risk</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-md">
                    {leak.description}
                  </p>
                  <motion.div 
                    animate={{ y: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-0 right-0 p-8 text-destructive opacity-10"
                  >
                    <Droplet size={80} />
                  </motion.div>
                </motion.div>
              </Magnetic>
            ))}
          </div>

          {/* THE SEAL (After) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">The Autonomous Solution</span>
            </div>
            
            {solutions.map((sol, i) => (
              <Magnetic key={i} strength={0.03}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                        <sol.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground tracking-tight">{sol.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="block text-2xl md:text-3xl font-black text-primary tracking-tighter">+{sol.gain}</span>
                      <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest italic">{sol.outcome} Gain</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-md">
                    {sol.description}
                  </p>
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-0 right-0 p-8 text-primary opacity-10"
                  >
                    <ShieldCheck size={80} />
                  </motion.div>
                </motion.div>
              </Magnetic>
            ))}
          </div>

        </div>

        {/* Conversion Bridge */}
        <div className="mt-40 text-center">
          <PerspectiveCard className="max-w-5xl mx-auto">
            <div className="p-20 rounded-[4rem] border border-white/5 bg-white/[0.02] relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 -z-10" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              
              <h3 className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter mb-10">
                Turn your leakage into <span className="text-primary italic">Autonomous Velocity.</span>
              </h3>
              
              <Link href="/contact">
                <Magnetic>
                  <Button className="rounded-full px-16 h-20 text-lg bg-primary text-black hover:scale-105 transition-all duration-700 font-black uppercase tracking-widest shadow-[0_20px_80px_-10px_oklch(var(--primary)/0.5)] border-none">
                    Seal My Infrastructure Now
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Magnetic>
              </Link>
            </div>
          </PerspectiveCard>
        </div>

      </div>
    </section>
  );
}
