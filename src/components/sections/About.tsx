"use client";

import { motion } from "framer-motion";
import { Shield, Target, Cpu, Zap } from "lucide-react";

export function About() {
  return (
    <section className="py-80 bg-background relative border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[0.8em] text-primary uppercase"
            >
              Operational Philosophy
            </motion.div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-foreground tracking-tightest leading-[1] sm:leading-[0.85] text-mask-premium uppercase">
              SYSTEMS OVER <br />
              <span className="text-muted-foreground/10 italic font-medium">SERVICES.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-2xl italic">
              Marketing Ko is an AI infrastructure studio. We don't focus on creative vanity or generic campaigns. 
              We engineer the underlying operational architectures that allow companies to automate acquisition at enterprise scale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-16">
              <div className="space-y-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover/item:bg-primary transition-all duration-700">
                  <Cpu className="text-primary h-8 w-8 group-hover/item:text-white transition-colors duration-700" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-bold text-foreground tracking-tighter italic uppercase">Infrastructure First</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium tracking-tight">Everything we build is designed as a scalable node within your business stack.</p>
                </div>
              </div>
              <div className="space-y-6 group/item">
                <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover/item:bg-primary transition-all duration-700">
                  <Zap className="text-primary h-8 w-8 group-hover/item:text-white transition-colors duration-700" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-bold text-foreground tracking-tighter italic uppercase">Velocity Driven</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium tracking-tight">We measure success in decision speed and revenue throughput, not just leads.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-20 bg-primary/5 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[4/5] rounded-[4rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden p-16 flex flex-col justify-between group-hover:border-primary/20 transition-all duration-1000">
               <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black tracking-[0.5em] text-foreground/20 uppercase">Core Philosophy v4.0</span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Shield className="text-primary h-6 w-6" />
                  </div>
               </div>
               
               <div className="space-y-16">
                 <h3 className="text-5xl md:text-6xl font-bold text-foreground tracking-tighter leading-[0.9] italic">
                   Scale should be <span className="text-primary not-italic">engineered</span>, not just managed.
                 </h3>
                 <div className="space-y-4">
                    <p className="text-2xl text-foreground font-bold tracking-tighter italic">Karthikeya</p>
                    <p className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em]">Founder & Systems Architect</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
