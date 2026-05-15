"use client";

import { motion } from "framer-motion";

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
    <section className="py-6 bg-background relative overflow-hidden border-t border-border/10 z-20">
      <div className="container mx-auto px-4 md:px-6 mb-6">
         <motion.div 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-[10px] md:text-[11px] font-black tracking-[1.2em] md:tracking-[1.5em] text-primary uppercase text-center flex items-center justify-center space-x-4"
         >
            <div className="h-px w-8 md:w-12 bg-primary/20" />
            <span>INDUSTRIES WE SERVE</span>
            <div className="h-px w-8 md:w-12 bg-primary/20" />
         </motion.div>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-4 md:gap-6 py-3"
        >
          {[...industries, ...industries].map((industry, index) => (
            <div
              key={index}
              className="px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-border/30 bg-foreground/[0.02] text-foreground/50 text-xs md:text-sm font-bold tracking-tight italic hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-500"
            >
              {industry}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
