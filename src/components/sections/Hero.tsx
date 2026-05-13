"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Zap, Activity, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ThreeDScene } from "@/components/sections/ThreeDScene";
import Link from "next/link";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Infrastructure Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.2_250_/_0.05)_0%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-8 space-y-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-3xl"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black tracking-[0.6em] text-white/60 uppercase">
                Enterprise AI Operations
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-8xl md:text-[14rem] font-bold tracking-tight text-white leading-[0.75] text-mask-premium"
              >
                AUTONOMOUS <br />
                <span className="text-muted-foreground/10 italic">INFRASTRUCTURE.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-3xl md:text-5xl text-muted-foreground max-w-5xl font-medium tracking-tighter leading-[1.1]"
            >
              We engineer scalable operational systems that automate acquisition, 
              qualification, and conversion—eliminating operational drag for modern companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-16"
            >
              <Link href="/contact">
                <MagneticButton>
                  <Button size="lg" className="rounded-full px-20 h-28 text-3xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/20 shadow-2xl transition-all duration-700 hover:scale-105 group">
                    Initiate Deployment <ArrowRight className="ml-6 h-10 w-10 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </MagneticButton>
              </Link>

              <div className="flex items-center space-x-12 opacity-40">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Protocol</span>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">MK-SYS-25</span>
                </div>
                <div className="w-[1px] h-12 bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Efficiency</span>
                  <span className="text-xs font-bold text-primary tracking-widest">+840%</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1, opacity }}
            className="lg:col-span-4 h-[600px] lg:h-[800px] hidden lg:block"
          >
            <ThreeDScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

