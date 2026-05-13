"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.2_250_/_0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Aggressive Copy */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-3 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                Infrastructure for Dominance
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[10rem] font-bold tracking-tight text-white leading-[0.8] text-glow"
              >
                AUTONOMOUS <br />
                <span className="text-muted-foreground/30">REVENUE.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-3xl text-muted-foreground max-w-2xl font-medium tracking-tight leading-tight"
            >
              We engineer AI acquisition systems that identify, qualify, and convert at scale. 
              Built for enterprises that move faster than the market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8"
            >
              <MagneticButton>
                <Button size="lg" className="rounded-full px-12 h-20 text-xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/20 shadow-2xl transition-all duration-500 hover:scale-105">
                  Deploy System <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </MagneticButton>
              
              <button className="text-xs font-black tracking-[0.4em] text-white/40 hover:text-white transition-colors uppercase py-6 px-10 border border-white/5 rounded-full hover:bg-white/5">
                View Infrastructure
              </button>
            </motion.div>
          </div>

          {/* Right Column: Signature Visual */}
          <motion.div 
            style={{ y: y1, scale }}
            className="lg:col-span-5 h-[400px] lg:h-[600px] relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:100px_100px]" />
    </section>
  );
}
