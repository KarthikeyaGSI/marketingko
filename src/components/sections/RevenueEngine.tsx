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
    <section className="py-24 md:py-60 bg-background relative overflow-hidden grain-elite">
       {/* Background Infrastructure - Sharp */}
      <div className="absolute inset-0 grid-infrastructure opacity-10 pointer-events-none" />
      <div className="glow-bleed w-[800px] h-[800px] top-[20%] left-[-10%]" />
      
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emotional leading-[0.8] mb-12 text-foreground"
          >
            STOP THE <br />
            <span className="text-gold not-italic font-medium">LEAKAGE.</span>
          </motion.h2>
          <p className="text-xl md:text-3xl text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-tighter leading-tight italic max-w-2xl">
            &ldquo;Your business doesn&apos;t need more leads. It needs a sealed environment where no revenue can escape.&rdquo;
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* THE LEAK (Before) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-destructive/30" />
              <span className="text-[10px] font-black tracking-widest text-destructive uppercase italic">Existing Infrastructure</span>
            </div>
            
            {leakages.map((leak, i) => (
              <Magnetic key={i} strength={0.03}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                  className="group p-10 md:p-12 rounded-[3rem] border border-destructive/10 bg-destructive/[0.02] dark:bg-destructive/[0.03] relative overflow-hidden transition-all duration-700 hover:border-destructive/40"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-6">
                      <div className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 group-hover:bg-destructive group-hover:text-white transition-all duration-700">
                        <leak.icon className="h-6 w-6 text-destructive group-hover:text-white" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black text-foreground tracking-tight italic uppercase">{leak.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="block text-3xl md:text-5xl font-black text-destructive tracking-tighter italic">-{leak.loss}</span>
                      <span className="text-[10px] font-black text-destructive/40 uppercase tracking-widest italic">{leak.impact} Risk</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-md">
                    {leak.description}
                  </p>
                </motion.div>
              </Magnetic>
            ))}
          </div>

          {/* THE SEAL (After) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-[10px] font-black tracking-widest text-primary uppercase italic">The Autonomous Solution</span>
            </div>
            
            {solutions.map((sol, i) => (
              <Magnetic key={i} strength={0.03}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 1, ease: "easeOut" }}
                  className="group p-10 md:p-12 rounded-[3rem] border border-primary/20 bg-primary/[0.02] dark:bg-primary/[0.03] relative overflow-hidden transition-all duration-700 hover:border-primary"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-6">
                      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-700">
                        <sol.icon className="h-6 w-6 text-primary group-hover:text-black" />
                      </div>
                      <h4 className="text-xl md:text-2xl font-black text-foreground tracking-tight italic uppercase">{sol.title}</h4>
                    </div>
                    <div className="text-right">
                      <span className="block text-3xl md:text-5xl font-black text-primary tracking-tighter italic">+{sol.gain}</span>
                      <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest italic">{sol.outcome} Gain</span>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed max-w-md">
                    {sol.description}
                  </p>
                </motion.div>
              </Magnetic>
            ))}
          </div>

        </div>

        {/* Conversion Bridge */}
        <div className="mt-48 text-center">
          <PerspectiveCard className="max-w-5xl mx-auto">
            <div className="p-20 md:p-32 rounded-[4rem] border border-border bg-foreground/[0.01] relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 grid-infrastructure opacity-10" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <h3 className="text-3xl md:text-6xl font-black text-foreground tracking-tighter mb-16 italic uppercase leading-tight">
                Turn your leakage into <br />
                <span className="text-gold">Autonomous Velocity.</span>
              </h3>
              
              <Link href="/contact">
                <Magnetic>
                  <Button className="rounded-[2.5rem] px-16 md:px-24 h-24 md:h-32 text-xl md:text-2xl bg-primary text-black hover:scale-105 transition-all duration-700 font-black uppercase tracking-widest shadow-[0_40px_120px_-20px_oklch(var(--primary)/0.6)] border-none relative overflow-hidden group">
                    <span className="relative z-10">Seal My Infrastructure Now</span>
                    <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-4 transition-transform duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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
