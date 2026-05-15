"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, Globe } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 60,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Ambient glow pulse
    gsap.to(".cta-glow", {
      scale: 1.2,
      opacity: 0.4,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      {/* Cinematic Atmosphere */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-16 md:space-y-24 max-w-6xl mx-auto">
          
          <div className="space-y-8">
            <div className="reveal-item inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">Initialize Acquisition</span>
            </div>
            
            <h2 className="text-6xl md:text-9xl lg:text-[11rem] font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase italic reveal-item">
              YOUR REVENUE LEAK <br />
              <span className="text-primary not-italic font-medium">HAS A FIX.</span>
            </h2>
          </div>
          
          <div className="space-y-12 max-w-4xl reveal-item">
            <p className="text-xl md:text-4xl text-muted-foreground font-medium tracking-tightest leading-tight italic border-l-4 border-primary/20 pl-8 mx-auto text-left">
              "We don't ask for trust. We earn it through execution. We'll identify your revenue leaks in 30 minutes, or we won't take the project."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 md:gap-20 py-10">
               <div className="flex flex-col items-center group cursor-none">
                  <span className="text-5xl md:text-7xl font-black text-primary tracking-tightest italic group-hover:scale-110 transition-transform">14 DAYS</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] italic">To Initial ROI</span>
               </div>
               <div className="hidden sm:block w-px h-16 bg-border/40" />
               <div className="flex flex-col items-center group cursor-none">
                  <span className="text-5xl md:text-7xl font-black text-foreground tracking-tightest italic group-hover:scale-110 transition-transform group-hover:text-primary">ZERO</span>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] italic">Setup Jitter</span>
               </div>
            </div>
            
            <div className="pt-10 flex flex-col items-center space-y-4">
              <p className="text-[10px] md:text-[12px] font-black text-foreground/40 uppercase tracking-[0.8em] italic">
                Guaranteed outcomes. No retained risk. Just engineering.
              </p>
              <div className="flex items-center space-x-4">
                 <Shield className="w-3 h-3 text-primary/40" />
                 <Globe className="w-3 h-3 text-primary/40" />
                 <Zap className="w-3 h-3 text-primary/40" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full reveal-item">
            <Link href="/contact" className="w-full sm:w-auto">
              <MagneticButton>
                <Button className="w-full sm:w-auto h-20 md:h-24 rounded-2xl md:rounded-3xl px-16 md:px-20 text-lg md:text-xl bg-primary text-black font-black uppercase tracking-widest shadow-[0_40px_80px_-20px_oklch(var(--primary)/0.6)] transition-all duration-1000 border-none relative overflow-hidden group">
                  <span className="relative z-10">Initialize Audit</span>
                  <ArrowRight className="ml-6 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-4 transition-transform duration-700 relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </MagneticButton>
            </Link>
            
            <Link href="/solutions" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto h-20 md:h-24 rounded-2xl md:rounded-3xl px-16 md:px-20 text-lg md:text-xl border-border bg-transparent text-foreground hover:bg-foreground/[0.05] font-black uppercase tracking-widest transition-all duration-1000 flex items-center justify-center group">
                <span>View Systems</span>
                <ArrowRight className="ml-6 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-4 transition-transform duration-700" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
