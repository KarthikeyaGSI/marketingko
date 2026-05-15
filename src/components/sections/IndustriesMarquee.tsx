"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const industries = [
  "Coaches & Consultants",
  "D2C Brands",
  "Legal Firms",
  "E-commerce",
  "SaaS Startups",
  "Real Estate",
  "Clinics & Healthcare",
  "Solar Installers",
  "Luxury Retail",
  "Hospitality Groups",
  "Educational Platforms"
];

export function IndustriesMarquee() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden border-y border-border/50 -mt-20 md:-mt-40 z-30 grain-system">
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12">
         <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
               <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
               <div className="flex items-center space-x-3">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-[10px] md:text-[12px] font-black tracking-[1em] text-primary uppercase italic">Deployment Verticals</span>
               </div>
               <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
         </div>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-6 md:gap-10 py-6"
        >
          {[...industries, ...industries, ...industries].map((industry, index) => (
            <div
              key={index}
              className="px-10 md:px-16 py-6 md:py-8 rounded-2xl md:rounded-[2.5rem] border border-border/50 bg-foreground/[0.01] backdrop-blur-3xl text-foreground/20 text-2xl md:text-5xl font-black tracking-tightest uppercase italic group-hover:text-primary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-1000 shadow-sm flex items-center space-x-4"
            >
              <span>{industry}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Cinematic Gradient Fades */}
        <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
      </div>
      
      <div className="container mx-auto px-6 mt-12">
         <p className="text-center text-[10px] font-black text-foreground/20 tracking-[1.5em] uppercase italic">Engineered for Specific Outcome Node Complexity</p>
      </div>
    </section>
  );
}
