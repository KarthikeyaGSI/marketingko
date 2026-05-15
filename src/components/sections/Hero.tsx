"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SystemsMarquee } from "./SystemsMarquee";
import { IndustriesMarquee } from "./IndustriesMarquee";
import { Magnetic } from "@/components/ui/Magnetic";
import gsap from "gsap";

// Cinematic stagger config
const stagger: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: "circOut",
      staggerChildren: 0.1
    } 
  }
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

function HeroNetwork() {
  return (
    <div className="absolute inset-0 z-0">
      <svg className="w-full h-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connection paths */}
        <motion.path
          d="M10,20 L50,50 L90,20"
          stroke="oklch(var(--primary))"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M10,80 L50,50 L90,80"
          stroke="oklch(var(--primary))"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Nodes */}
        {[
          { x: 10, y: 20, label: "AD_TRAFFIC" },
          { x: 90, y: 20, label: "LANDING_PAGE" },
          { x: 50, y: 50, label: "GROWTH_OS" },
          { x: 10, y: 80, label: "QUAL_QUAL" },
          { x: 90, y: 80, label: "REVENUE" }
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r="0.5" fill="oklch(var(--primary))" />
            <text x={node.x + 1} y={node.y} fontSize="1" fill="oklch(var(--primary)/0.5)" className="font-mono">{node.label}</text>
          </g>
        ))}
      </svg>

      {/* Center Core HUD */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
        />
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-primary bg-background shadow-[0_0_60px_oklch(var(--primary)/0.4)] flex items-center justify-center">
          <div className="text-center">
            <span className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-primary uppercase block">GROWTH</span>
            <span className="text-[9px] md:text-[11px] font-black tracking-tight text-foreground uppercase">OS</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FloatingUI() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.floating-node');
    
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-2, 2)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 hidden xl:block">
      {/* Analytics Card 1 */}
      <div className="floating-node absolute top-[25%] left-[5%] p-6 glass-system rounded-3xl border-primary/20 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">LIVE CONVERSION FLOW</span>
        </div>
        <div className="text-2xl font-black italic tracking-tighter text-foreground">$12.4k<span className="text-xs text-green-500 ml-2">+24%</span></div>
      </div>

      {/* Analytics Card 2 */}
      <div className="floating-node absolute bottom-[35%] right-[5%] p-6 glass-system rounded-3xl border-primary/20 space-y-4">
        <div className="flex items-center space-x-3">
          <Activity className="w-3 h-3 text-primary" />
          <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">SYSTEM VELOCITY</span>
        </div>
        <div className="flex space-x-1 h-12 items-end">
          {[40, 70, 45, 90, 60, 85].map((h, i) => (
            <div key={i} className="w-1.5 bg-primary/20 rounded-full" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const dynamicWords = ["OS", "SYSTEMS", "INFRASTRUCTURE", "ENGINE"];
const resourceWords = ["LEAKAGE", "FRICTION", "DRAG", "LOSS"];

function FloatingHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* HUD Elements */}
      <div className="absolute top-1/4 right-[10%] p-4 rounded-xl border border-border bg-foreground/[0.02] flex items-center space-x-4">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-[8px] font-black tracking-[0.4em] text-foreground/40 uppercase">CORE_LOAD: 94%</span>
      </div>
      <div className="absolute bottom-1/4 left-[10%] p-4 rounded-xl border border-border bg-foreground/[0.02] flex items-center space-x-4">
        <ShieldCheck className="w-3 h-3 text-primary" />
        <span className="text-[8px] font-black tracking-[0.4em] text-foreground/40 uppercase">SECURE_TUNNEL_ACTIVE</span>
      </div>
    </div>
  );
}

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [wordIndex, setWordIndex] = useState(0);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-32 pb-16 grain-elite">
      {/* KINETIC TYPOGRAPHY (Background) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full whitespace-nowrap text-[8rem] md:text-[15rem] font-black italic select-none pointer-events-none z-[1] text-foreground/[0.01] dark:text-foreground/[0.02] hidden md:block uppercase tracking-tighter"
      >
        REVENUE INFRASTRUCTURE • GROWTH OS • AUTONOMOUS SCALING •
      </motion.div>

      <FloatingUI />

      <FloatingHUD />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* CONTENT — Left side */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-6 mb-12"
            >
              <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 flex items-center space-x-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-black tracking-widest text-primary uppercase">
                  V2.0_DEPLOYED
                </span>
              </div>
              <div className="flex items-center space-x-4 px-5 py-3 rounded-2xl border border-border bg-black/90 dark:bg-black/80 shadow-2xl">
                 <img src="/asian.webp" alt="Asian Institute of Allergy" width={120} height={32} className="h-6 w-auto object-contain brightness-0 invert opacity-100" loading="eager" />
                 <div className="w-px h-4 bg-white/20" />
                 <span className="text-[10px] font-black tracking-widest text-white uppercase">Trusted Partner</span>
              </div>
            </motion.div>

            {/* HEADLINE — Cinematic typography */}
            <div className="space-y-4 md:space-y-8">
              <div className="overflow-visible relative">
                <motion.h1 
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  className="text-emotional leading-[0.8] text-foreground"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-6">
                    <motion.span variants={wordReveal} className="inline-block">
                      GROWTH
                    </motion.span>
                    <div className="relative h-[1.1em] min-w-[2ch] overflow-hidden inline-flex align-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={dynamicWords[wordIndex]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.8, ease: "circOut" }}
                          className="text-gold italic font-medium leading-none whitespace-nowrap block"
                        >
                          {dynamicWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex items-baseline flex-wrap mt-2 md:mt-4 gap-x-3 md:gap-x-6">
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, x: -40 },
                        visible: { 
                          opacity: 1, x: 0,
                          transition: { duration: 1, ease: "easeOut" } 
                        }
                      }}
                      className="text-foreground italic font-medium text-[1.5rem] sm:text-3xl md:text-5xl lg:text-7xl relative"
                    >
                      SEALING
                    </motion.span>
                    <div className="relative h-[1.1em] min-w-[3ch] overflow-hidden inline-flex align-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={resourceWords[wordIndex]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.8, ease: "circOut" }}
                          className="text-gold leading-none whitespace-nowrap block"
                        >
                          {resourceWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.h1>
              </div>
              
              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground dark:text-muted-foreground/90 max-w-4xl font-medium tracking-tight leading-tight italic"
              >
                We don&apos;t sell hours. We deploy <span className="text-primary not-italic font-black uppercase">Revenue Infrastructure</span> that identifies, qualifies, and converts targets autonomously.
              </motion.p>
            </div>

            {/* CTA ROW */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-4 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                <Link href="/contact">
                  <Magnetic>
                    <Button size="lg" className="rounded-[2rem] px-12 md:px-20 h-20 md:h-24 text-base md:text-xl bg-primary text-black hover:scale-105 font-black uppercase tracking-widest shadow-[0_30px_100px_-20px_oklch(var(--primary)/0.7)] transition-all duration-700 group border-none relative overflow-hidden">
                      <span className="relative z-10">Initiate Strategy Call</span>
                      <ArrowRight className="ml-4 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-3 transition-transform duration-500 relative z-10" />
                      <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Button>
                  </Magnetic>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col space-y-2"
              >
                 <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-foreground/10 flex items-center justify-center overflow-hidden">
                        <div className="w-full h-full bg-primary/20" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-black text-black">+24</div>
                 </div>
                 <span className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Global Partners Scaling Now</span>
              </motion.div>
            </div>
          </div>

          {/* 3D NETWORK VISUALIZATION — Right */}
          <motion.div 
            style={{ y: springY1, opacity }}
            className="lg:col-span-5 relative h-[350px] md:h-[450px] lg:h-[550px] lg:pl-32 lg:translate-x-24"
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>
      
      {/* SYSTEMS MARQUEE — High impact above fold */}
      <div className="w-full relative z-20 mt-12 md:mt-16">
        <div className="container mx-auto px-6 mb-2">
          <span className="text-[8px] font-black tracking-[1em] text-primary uppercase opacity-40">System Architecture</span>
        </div>
        <SystemsMarquee />
      </div>

      {/* INDUSTRIES MARQUEE — Also above fold */}
      <div className="w-full relative z-20">
        <IndustriesMarquee />
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[8px] font-black tracking-[1em] text-foreground/20 uppercase">SCROLL_FOR_INTEL</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
