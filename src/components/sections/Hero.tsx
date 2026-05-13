"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevenueLeak } from "@/components/ui/RevenueLeak";
import Link from "next/link";

const industries = [
  "Real Estate", "Clinics & Healthcare", "Coaches & Consultants", 
  "D2C Brands", "Legal Firms", "E-commerce", "SaaS Startups"
];

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-[120vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-40 pb-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-[10px] font-black tracking-[0.8em] text-white uppercase">
                Top AI Automation & Voice Agent Agency
              </span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-[11rem] font-bold tracking-tighter text-white leading-[0.8] text-mask-premium"
              >
                SYSTEMS THAT <br />
                <span className="text-muted-foreground/10 italic">OUTPERFORM.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-2xl md:text-4xl text-muted-foreground max-w-2xl font-medium tracking-tighter leading-tight"
              >
                Your business is leaking revenue. <span className="text-white">We seal it.</span> <br />
                AI automations, voice agents, and web solutions — engineered around your outcomes, not our deliverables.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center space-y-10 sm:space-y-0 sm:space-x-12"
            >
              <Link href="/contact">
                <MagneticButton>
                  <Button size="lg" className="rounded-full px-20 h-28 text-3xl bg-primary text-white hover:bg-primary/90 font-black shadow-primary/20 shadow-2xl transition-all duration-700 hover:scale-105 group">
                    Book Free Audit <ArrowRight className="ml-6 h-10 w-10 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>

          <motion.div 
            style={{ y: y1, opacity }}
            className="hidden lg:block relative"
          >
            <RevenueLeak />
          </motion.div>
        </div>
      </div>

      {/* Industry Marquee */}
      <div className="mt-auto w-full pt-40 pb-20 overflow-hidden relative">
        <div className="flex flex-col items-center mb-10">
          <span className="text-[10px] font-black tracking-[0.8em] text-white/20 uppercase">Systems Built For</span>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause-marquee py-6">
            {[...industries, ...industries, ...industries].map((industry, i) => (
              <div
                key={i}
                className="mx-8 px-10 py-5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl text-lg font-bold text-white/40 hover:text-primary hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



