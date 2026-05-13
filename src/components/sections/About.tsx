"use client";

import { motion } from "framer-motion";
import { Shield, Target, Cpu, Zap } from "lucide-react";

export function About() {
  return (
    <section className="py-80 bg-black relative border-t border-white/5">
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
            <h2 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] text-mask-premium">
              SYSTEMS OVER <br />
              <span className="text-muted-foreground/20">SERVICES.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-xl">
              Marketing Ko is an AI infrastructure studio. We don't focus on creative vanity or generic campaigns. 
              We engineer the underlying operational architectures that allow companies to automate acquisition at enterprise scale.
            </p>
            
            <div className="grid grid-cols-2 gap-12 pt-12">
              <div className="space-y-4">
                <Cpu className="text-primary h-8 w-8" />
                <h4 className="text-2xl font-bold text-white tracking-tighter">Infrastructure First</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">Everything we build is designed as a scalable node within your business stack.</p>
              </div>
              <div className="space-y-4">
                <Zap className="text-primary h-8 w-8" />
                <h4 className="text-2xl font-bold text-white tracking-tighter">Velocity Driven</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">We measure success in decision speed and revenue throughput, not just leads.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-20 bg-primary/5 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[4/5] rounded-[5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden p-16 flex flex-col justify-between">
               <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">Core Philosophy v4.0</span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Shield className="text-primary h-6 w-6" />
                  </div>
               </div>
               
               <div className="space-y-12">
                 <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">
                   "Scale should be <span className="text-primary italic">engineered</span>, not just managed."
                 </h3>
                 <div className="space-y-4">
                    <p className="text-xl text-white font-bold tracking-tighter">Karthikeya</p>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Founder & Systems Architect</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
