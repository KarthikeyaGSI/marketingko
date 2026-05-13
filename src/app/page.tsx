"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { TrustBar, ValueProp } from "@/components/sections/ValueProp";
import { ServicesGrid, Process } from "@/components/sections/Services";
import { WOWSection } from "@/components/sections/WOWSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      
      <TrustBar />
      
      <WOWSection />

      <ValueProp />
      
      <ServicesGrid />
      
      <Process />
      
      {/* Testimonials Section - Premium Redesign */}
      <section className="py-40 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-32">
            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-12">
              VISIONARY <br />
              <span className="text-muted-foreground/30">VALIDATION.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium tracking-tight">
              We partner with industry leaders who prioritize speed, precision, and exponential growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="p-16 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 font-serif italic">"</div>
              <p className="text-2xl text-white mb-12 font-medium tracking-tight leading-snug">
                "Marketing Ko didn't just build an automation; they deployed a revenue system that 
                compounded our growth by 300% in 90 days."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10" />
                <div>
                  <p className="font-bold text-white tracking-tight">Alex Rivera</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">CEO, TechFlow Systems</p>
                </div>
              </div>
            </div>
            
            <div className="p-16 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl text-white/5 font-serif italic">"</div>
              <p className="text-2xl text-white mb-12 font-medium tracking-tight leading-snug">
                "The most aggressive AI infrastructure we've ever integrated. They understand 
                the physics of revenue growth better than anyone."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10" />
                <div>
                  <p className="font-bold text-white tracking-tight">Sarah Chen</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">COO, Global Retail Hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Aggressive Upgrade */}
      <section className="py-60 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[150px] animate-pulse-slow" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <h2 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter mb-8 leading-[0.8] text-mask">
              READY TO <br />
              <span className="text-muted-foreground/30">DOMINATE?</span>
            </h2>
            <p className="text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto font-medium tracking-tight">
              We engineer the future of your revenue. Don't fall behind the AI curve. 
              Secure your infrastructure audit today.
            </p>
            
            <MagneticButton>
              <Button size="lg" className="rounded-full px-16 h-20 text-2xl bg-white text-black hover:bg-white/90 font-bold shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500 hover:scale-105">
                Initiate Audit <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
