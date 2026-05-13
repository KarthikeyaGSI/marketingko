"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { TrustBar, ValueProp } from "@/components/sections/ValueProp";
import { ServicesGrid, Process } from "@/components/sections/Services";
import { WOWSection } from "@/components/sections/WOWSection";
import { SystemVisualization } from "@/components/sections/SystemVisualization";
import { Performance } from "@/components/sections/Performance";
import { InfrastructureFlow } from "@/components/sections/InfrastructureFlow";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { About } from "@/components/sections/About";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <TrustBar />

      <InfrastructureFlow />
      
      <ValueProp />

      <Performance />
      
      <WOWSection />

      <ResultsGallery />
      
      <ServicesGrid />
      
      <div id="process">
        <Process />
      </div>

      <About />
      
      {/* Massive Final CTA — Sovereign Framing */}
      <section className="py-96 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.2_250_/_0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-24"
          >
            <div className="flex justify-center">
              <div className="px-6 py-2 rounded-full border border-primary/20 bg-primary/5 flex items-center space-x-4">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black tracking-[0.5em] text-primary uppercase">Systems are online.</span>
              </div>
            </div>

            <h2 className="text-8xl md:text-[18rem] font-bold text-white tracking-tighter mb-8 leading-[0.75] text-mask-premium">
              INITIATE <br />
              <span className="text-muted-foreground/30 italic">DEPLOYMENT.</span>
            </h2>
            
            <p className="text-3xl md:text-5xl text-muted-foreground mb-24 max-w-6xl mx-auto font-medium tracking-tighter leading-tight italic opacity-60">
              "Build the growth infrastructure your competitors cannot replicate. 
              The era of manual acquisition is over."
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              <MagneticButton>
                <Button size="lg" className="rounded-full px-24 h-32 text-4xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/40 shadow-[0_0_80px_-20px_rgba(0,102,255,0.8)] transition-all duration-1000 hover:scale-105 group">
                  Begin Strategy Call <ArrowRight className="ml-8 h-12 w-12 group-hover:translate-x-4 transition-transform" />
                </Button>
              </MagneticButton>

              <div className="flex items-center space-x-8 opacity-20">
                <div className="h-[1px] w-24 bg-white" />
                <span className="text-[10px] font-black tracking-[0.8em] text-white uppercase">Sovereign OS v4</span>
                <div className="h-[1px] w-24 bg-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


