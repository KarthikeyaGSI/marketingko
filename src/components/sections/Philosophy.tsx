"use client";

import { motion } from "framer-motion";
import { Shield, Target, Cpu, Zap, Fingerprint, Network } from "lucide-react";

const pillars = [
  { title: "Systems over Hacks", desc: "Short-term growth hacks are a liability. Long-term brand dominance is built on robust, scalable infrastructure.", icon: Network },
  { title: "AI-First Thinking", desc: "We don't 'add' AI to your business. We rebuild your operational core with AI as the primary engine.", icon: Cpu },
  { title: "Measurable Execution", desc: "If it doesn't improve the unit economics or margin, we don't build it. Growth must be profitable.", icon: Target },
];

export function Philosophy() {
  return (
    <section className="py-80 bg-background relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Operator Mindset
            </motion.div>
            <h2 className="text-6xl md:text-[10rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium">
              THE <br />
              <span className="text-muted-foreground/20 italic">PHILOSOPHY.</span>
            </h2>
            <p className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-2xl">
              Scaling a modern brand is no longer a marketing challenge. 
              It is a system engineering challenge. Those who operate at a 
              higher technical level win.
            </p>

            <div className="space-y-12 pt-12">
               {pillars.map((pillar, i) => (
                 <div key={i} className="flex items-start space-x-8 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
                       <pillar.icon className="text-primary group-hover:text-primary-foreground w-6 h-6 transition-colors" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-2xl font-bold text-foreground tracking-tighter">{pillar.title}</h4>
                       <p className="text-lg text-muted-foreground leading-relaxed font-medium tracking-tight max-w-xl">
                         {pillar.desc}
                       </p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-20 bg-primary/5 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[4/5] rounded-[5rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden p-16 flex flex-col justify-between group-hover:border-primary/20 transition-all duration-1000">
               <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-[0.5em] text-foreground/20 uppercase">Operator ID</span>
                    <span className="text-xl font-bold text-foreground tracking-tighter">MK-FOUNDER.25</span>
                  </div>
                  <Fingerprint className="text-primary w-12 h-12" />
               </div>
               
               <div className="space-y-12">
                  <p className="text-3xl md:text-5xl font-medium text-foreground tracking-tighter leading-tight italic">
                    "Growth is a science of systems. We don't guess. We engineer."
                  </p>
                  <div className="flex items-center space-x-6">
                     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-foreground/40 opacity-20" />
                     <div className="space-y-1">
                        <p className="text-2xl font-bold text-foreground tracking-tighter">Karthikeya</p>
                        <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.4em]">Systems Architect & Founder</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
