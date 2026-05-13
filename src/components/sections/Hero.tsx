"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Mesh Background */}
      <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
      
      {/* Parallax Grid */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="inline-block px-4 py-1.5 mb-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
            ESTABLISHING DOMINANCE THROUGH AI
          </span>
        </motion.div>

        <div className="reveal-text">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[11rem] font-bold tracking-tight text-white mb-12 leading-[0.8] text-mask"
          >
            ENGINEERED <br />
            <span className="text-muted-foreground/30">REVENUE.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-tight tracking-tight font-medium"
        >
          We build acquisition infrastructure that compounds monthly. 
          Elite AI systems designed to out-compete, out-scale, and out-perform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
        >
          <MagneticButton>
            <Button size="lg" className="rounded-full px-12 h-16 text-lg bg-white text-black hover:bg-white/90 font-bold transition-all duration-500 hover:scale-105">
              Secure Infrastructure <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </MagneticButton>
          
          <button className="text-sm font-bold tracking-widest text-white/40 hover:text-white transition-colors uppercase py-4 px-8 border border-white/5 rounded-full hover:bg-white/5">
            Explore Capabilities
          </button>
        </motion.div>
      </div>

      {/* Signature Visual Element */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex items-center space-x-4 opacity-20">
          <div className="w-12 h-[1px] bg-white" />
          <span className="text-[10px] font-bold tracking-widest uppercase">System Status: Optimal</span>
        </div>
      </div>
    </section>
  );
}
