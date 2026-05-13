"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-60 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="reveal-text"
          >
            <h1 className="text-7xl md:text-[12rem] font-bold text-white tracking-tighter mb-16 leading-[0.8] text-mask">
              ENGINEERS OF <br />
              <span className="text-muted-foreground/30">CAPITAL.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl text-muted-foreground leading-tight tracking-tighter font-medium max-w-4xl mx-auto italic"
          >
            "We don't provide services. We deploy intelligence that converts human effort into scalable revenue systems."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-60 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl font-bold text-white tracking-tighter leading-none">THE <br /> PHILOSOPHY.</h2>
            <div className="space-y-8 text-xl text-muted-foreground font-medium tracking-tight leading-snug">
              <p>
                Marketing Ko was founded to solve the physics of business growth. 
                Most agencies focus on "impressions." We focus on infrastructure.
              </p>
              <p>
                In the AI era, speed is the only moats. We build the digital weapons 
                required to dominate markets, capture demand, and eliminate competition.
              </p>
            </div>
            
            <MagneticButton>
              <Button size="lg" className="rounded-full px-12 h-16 bg-white text-black font-bold">
                Join the Network <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </MagneticButton>
          </div>
          
          <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 group">
             <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
                <span className="text-[10px] font-bold tracking-[1em] text-white/20 uppercase animate-pulse">Visionary Protocol</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent group-hover:opacity-100 transition-opacity opacity-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
          {[
            { id: "01", title: "PRECISION", desc: "No fluff. Just high-fidelity engineering for enterprise-grade growth." },
            { id: "02", title: "VELOCITY", desc: "We deploy at the speed of light. Fast cycles, faster compounding." },
            { id: "03", title: "DOMINANCE", desc: "Our systems aren't designed to compete. They are designed to win." },
          ].map((item) => (
            <div key={item.id} className="p-12 border-l border-white/10 hover:bg-white/[0.02] transition-colors group">
              <span className="text-4xl font-bold text-white/10 group-hover:text-white/40 transition-colors mb-8 block">{item.id}</span>
              <h4 className="text-2xl font-bold text-white mb-6 tracking-tighter">{item.title}</h4>
              <p className="text-muted-foreground font-medium tracking-tight leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
