"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 z-0 mesh-gradient opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-4 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl shimmer-text"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">
                Revenue Infrastructure Layer
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[13rem] font-bold tracking-tight text-white leading-[0.8] text-mask-premium"
              >
                ELIMINATE <br />
                <span className="text-muted-foreground/20 italic">DRAG.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-2xl md:text-4xl text-muted-foreground max-w-4xl font-medium tracking-tighter leading-tight"
            >
              We engineer autonomous acquisition systems that compound monthly. 
              Eliminate operational friction and deploy margin-expanding infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12"
            >
              <MagneticButton>
                <Button size="lg" className="rounded-full px-16 h-24 text-2xl bg-primary text-white hover:bg-primary/90 font-black glow-primary transition-all duration-700 hover:scale-105 group">
                  Initiate System <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </Button>
              </MagneticButton>
              
              <button className="text-xs font-black tracking-[0.5em] text-white/30 hover:text-white transition-all uppercase group">
                View Architecture <span className="block h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-700" />
              </button>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1, opacity }}
            className="lg:col-span-4 h-[500px] lg:h-[700px] hidden lg:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Persistent Background Identifier */}
      <div className="absolute bottom-20 left-10 hidden xl:block">
        <div className="flex flex-col space-y-4 opacity-10">
          <div className="text-[10px] font-black tracking-[1em] text-white uppercase">Protocol: MK-02</div>
          <div className="w-40 h-[1px] bg-white" />
        </div>
      </div>
    </section>
  );
}
