"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { TrustBar, ValueProp } from "@/components/sections/ValueProp";
import { ServicesGrid, Process } from "@/components/sections/Services";
import { WOWSection } from "@/components/sections/WOWSection";
import { Enterprise } from "@/components/sections/Enterprise";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <TrustBar />
      
      <Enterprise />
      
      <WOWSection />

      <ValueProp />
      
      <ServicesGrid />
      
      <Process />
      
      {/* Testimonials Section - Premium Redesign */}
      <section className="py-60 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-48">
            <h2 className="text-5xl md:text-9xl font-bold text-white tracking-tighter leading-none mb-12">
              PROVEN <br />
              <span className="text-muted-foreground/30">VALIDATION.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tight">
              We deploy the systems your competitors can't replicate. 
              Sovereign infrastructure for world-class enterprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-20 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-700">
              <div className="absolute top-0 right-0 p-8 text-8xl text-white/[0.02] font-serif italic">"</div>
              <p className="text-3xl text-white mb-16 font-bold tracking-tighter leading-[1.1]">
                "Marketing Ko didn't just automate our sales; they engineered a revenue engine that 
                scaled our acquisition 12x in a single quarter."
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20" />
                <div>
                  <p className="font-bold text-white tracking-tight text-xl">Marcus Aurelius</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">CTO, Nexus Corp</p>
                </div>
              </div>
            </div>
            
            <div className="p-20 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden group hover:border-primary/20 transition-all duration-700">
              <div className="absolute top-0 right-0 p-8 text-8xl text-white/[0.02] font-serif italic">"</div>
              <p className="text-3xl text-white mb-16 font-bold tracking-tighter leading-[1.1]">
                "The most aggressive AI architecture in the market. They don't bridge gaps; they 
                eliminate human friction entirely."
              </p>
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20" />
                <div>
                  <p className="font-bold text-white tracking-tight text-xl">Elena Vance</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-black">CEO, Vance Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Emotional & Aggressive */}
      <section className="py-80 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-primary/10 blur-[200px] animate-pulse-slow" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-16"
          >
            <h2 className="text-7xl md:text-[14rem] font-bold text-white tracking-tighter mb-8 leading-[0.8] text-mask-hero">
              BECOME <br />
              <span className="text-muted-foreground/30">INEVITABLE.</span>
            </h2>
            <p className="text-2xl md:text-4xl text-muted-foreground mb-20 max-w-4xl mx-auto font-medium tracking-tighter leading-tight">
              Build the growth infrastructure your competitors can't replicate. 
              The era of manual acquisition is over.
            </p>
            
            <MagneticButton>
              <Button size="lg" className="rounded-full px-20 h-24 text-3xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/30 shadow-2xl transition-all duration-700 hover:scale-105">
                Initiate Deployment <ArrowRight className="ml-6 h-8 w-8" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
