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
  "Real Estate Agencies",
  "Solar Installers",
  "Luxury Retail",
  "Hospitality Groups",
  "Educational Platforms"
];

export function IndustriesMarquee() {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-y border-border/50">
      <div className="container mx-auto px-6 mb-12">
         <div className="text-[10px] font-black tracking-[1.5em] text-foreground/20 uppercase text-center">
            Systems Built For
         </div>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1035],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-8 py-4"
        >
          {[...industries, ...industries].map((industry, index) => (
            <div
              key={index}
              className="px-10 py-5 rounded-[2rem] border border-border/50 bg-foreground/[0.02] backdrop-blur-md text-foreground/60 text-sm font-bold tracking-tight italic hover:border-primary/40 hover:text-primary transition-all duration-700"
            >
              {industry}
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for smooth fading */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
