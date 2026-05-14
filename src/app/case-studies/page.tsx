"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { 
  TrendingUp, 
  Activity, 
  Cpu, 
  Shield, 
  Clock, 
  BarChart3, 
  Zap,
  Layers,
  Database,
  ArrowRight
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/button";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { CTA } from "@/components/sections/CTA";

const typicalImprovements = [
  { label: "Response Time", value: "-94%", desc: "Lead response reduced from hours to < 1 min via AI qualification." },
  { label: "Handling Capacity", value: "+1,200%", desc: "Simultaneous lead processing without increasing headcount." },
  { label: "Manual Elimination", value: "85%", desc: "Reduction in repetitive CRM entry and administrative tasks." },
  { label: "Pipeline Velocity", value: "4.2x", desc: "Acceleration of leads from first-touch to qualified opportunity." },
];

const techStack = [
  "OpenAI", "Claude", "HubSpot", "Slack", "Twilio", "Zapier", "Make", "Airtable", "Notion", "Salesforce"
];

export default function ResultsPage() {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,oklch(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.8em] text-primary mb-12 uppercase"
          >
            Operational Transparency
          </motion.div>
          <h1 className="text-7xl md:text-[14rem] font-bold text-foreground tracking-tighter mb-16 leading-[0.8] text-mask-premium">
            TYPICAL <br />
            <span className="text-muted-foreground/40 italic">RESULTS.</span>
          </h1>
          <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl mx-auto font-medium tracking-tighter leading-tight italic">
            "We focus on operational leverage and scalable systems. No vanity metrics. 
            Just infrastructure that works."
          </p>
        </div>

        {/* Typical Operational Improvements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-60">
          {typicalImprovements.map((item, index) => (
            <PerspectiveCard key={index}>
              <div className="p-12 rounded-[3rem] border border-border/50 bg-foreground/[0.01] backdrop-blur-3xl space-y-8 h-full flex flex-col justify-between hover:border-primary/20 transition-all duration-700">
                <div className="space-y-6">
                  <span className="text-6xl font-bold text-foreground tracking-tighter italic">{item.value}</span>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black tracking-widest text-primary uppercase">{item.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-border/50">
                  <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest">Protocol Standard</span>
                </div>
              </div>
            </PerspectiveCard>
          ))}
        </div>

        {/* System Demonstrations - Visualizing the OS */}
        <div className="space-y-32 mb-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <h2 className="text-5xl md:text-7xl font-bold text-foreground tracking-tighter">INFRASTRUCTURE <br /> <span className="text-muted-foreground/40 italic">MAPPING.</span></h2>
               <p className="text-xl text-muted-foreground font-medium tracking-tight max-w-xl">
                 Our systems don't just 'run'—they are engineered to self-heal and optimize. 
                 Behold the blueprint of a standard AI acquisition node.
               </p>
               <div className="space-y-6">
                 {[
                   { t: "Node Ingestion", d: "Aggregating data from 12+ high-intent sources." },
                   { t: "Logic Layer", d: "LLM-driven qualification with 98% accuracy." },
                   { t: "CRM Synthesis", d: "Zero-latency synchronization with your sales stack." }
                 ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <div>
                        <h4 className="text-foreground font-bold tracking-tight">{item.t}</h4>
                        <p className="text-sm text-muted-foreground">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="relative aspect-video rounded-[3rem] border border-border/50 bg-foreground/[0.01] backdrop-blur-3xl p-12 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 blur-[100px]" />
                <Layers className="h-40 w-40 text-foreground/10 animate-orbit" />
                <div className="absolute bottom-12 left-12 right-12 p-8 glass-premium rounded-2xl border-primary/20">
                   <div className="flex items-center justify-between">
                     <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">System Health: Optimal</span>
                     <span className="text-[10px] font-bold text-primary uppercase tracking-widest">100% Automation</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* System Demonstrations - Visualizing the OS */}
        <ResultsGallery />

        {/* Technology Stack */}
        <div className="text-center mb-60">
          <h2 className="text-xs font-black tracking-[1em] text-foreground/20 mb-16 uppercase">The Infrastructure Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {techStack.map((tech) => (
              <div key={tech} className="px-10 py-5 rounded-2xl border border-border/50 bg-foreground/[0.02] text-xl font-bold text-foreground tracking-tighter hover:border-primary/40 transition-all duration-500">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Build Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-60">
           <div className="p-20 rounded-[4rem] border border-border/50 bg-foreground/[0.01] backdrop-blur-3xl space-y-12">
              <h3 className="text-4xl font-bold text-foreground tracking-tighter">OUR <br /> PHILOSOPHY.</h3>
              <div className="space-y-6 text-xl text-muted-foreground font-medium tracking-tight">
                <p>We eliminate vanity metrics. If it doesn't move the revenue needle or expand your operational margin, we don't build it.</p>
                <p>Scaling a business shouldn't increase operational drag. Our goal is to make growth silent and autonomous.</p>
              </div>
           </div>
           <div className="p-20 rounded-[4rem] border border-primary/20 bg-primary/5 space-y-12 flex flex-col justify-center text-center">
              <h3 className="text-3xl font-black text-foreground tracking-widest uppercase">No Fake Promises. <br /> No Vanity Reviews.</h3>
              <p className="text-muted-foreground font-medium italic">"We let the system logs speak for themselves."</p>
           </div>
        </div>

        <CTA />
      </div>
    </div>
  );
}
