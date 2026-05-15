"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity, Globe, Database, Cpu, Zap } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SystemsMarquee } from "./SystemsMarquee";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const nodes = [
  { label: "LEADS", x: 50, y: 8, delay: 0 },
  { label: "AI QUALIFY", x: 88, y: 30, delay: 0.3 },
  { label: "NURTURE", x: 80, y: 70, delay: 0.6 },
  { label: "CONVERT", x: 50, y: 90, delay: 0.9 },
  { label: "REVENUE", x: 15, y: 65, delay: 1.2 },
  { label: "ANALYZE", x: 12, y: 25, delay: 1.5 },
  { label: "LIMITS", x: 75, y: 15, delay: 1.8, type: 'critical' },
];

const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
  [0,2],[1,3],[2,4],[3,5],[4,0],[5,1],
  [6,0],
];

function FloatingHUD() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".hud-item", {
      x: (i) => (i === 0 ? -100 : 100),
      opacity: 0,
      duration: 2,
      delay: 1,
      stagger: 0.5,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block z-20">
      <div className="hud-item absolute top-20 left-10 p-8 glass-premium rounded-[2rem] border-primary/20 space-y-4 min-w-[280px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_oklch(var(--primary))]" />
            <span className="text-[10px] font-black tracking-widest text-primary uppercase">Engine_Status</span>
          </div>
          <span className="text-[10px] font-mono text-primary/60">v4.0.1</span>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <p className="text-[9px] font-mono text-foreground/40 uppercase">Processing_Load</p>
            <p className="text-[11px] font-mono text-primary">84.2%</p>
          </div>
          <div className="w-full h-1 bg-foreground/5 rounded-full overflow-hidden">
            <div className="h-full bg-primary/40 w-[84%] animate-shimmer" />
          </div>
          <div className="flex space-x-1 h-12 items-end">
             {[...Array(20)].map((_, i) => (
               <div key={i} className="flex-1 bg-primary/10 rounded-full" style={{ height: `${Math.random() * 100}%` }} />
             ))}
          </div>
        </div>
      </div>

      <div className="hud-item absolute bottom-40 right-10 p-8 glass-premium rounded-[2rem] border-primary/20 space-y-6 min-w-[320px]">
        <div className="flex items-center space-x-3">
          <Globe className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-black tracking-widest text-primary uppercase italic">Global_Signal_Map</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
           {[
             { label: "LATENCY", val: "12ms" },
             { label: "THROUGHPUT", val: "1.2GB/s" },
             { label: "NODES", val: "142" },
             { label: "UPTIME", val: "99.9%" }
           ].map((item, i) => (
             <div key={i} className="p-3 bg-foreground/[0.03] border border-border/50 rounded-xl space-y-1">
               <p className="text-[8px] font-black text-muted-foreground uppercase">{item.label}</p>
               <p className="text-sm font-bold text-foreground">{item.val}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function HeroNetwork() {
  const [leakIndex, setLeakIndex] = useState(6);
  const [isFixing, setIsFixing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFixing(true);
      setTimeout(() => {
        setLeakIndex((prev) => (prev === 6 ? Math.floor(Math.random() * 6) : 6));
        setIsFixing(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.to(".network-path", {
      strokeDashoffset: 0,
      opacity: 0.3,
      duration: 3,
      stagger: 0.1,
      ease: "power2.inOut"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[400px] lg:min-h-[600px] perspective-1000">
      <div className="absolute inset-0 bg-radial-gradient from-primary/10 to-transparent blur-[120px] animate-pulse-slow" />
      
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="oklch(var(--primary)/0.2)" />
            <stop offset="50%" stopColor="oklch(var(--primary))" />
            <stop offset="100%" stopColor="oklch(var(--primary)/0.2)" />
          </linearGradient>
        </defs>
        
        {connections.map(([a, b], i) => (
          <path
            key={i}
            d={`M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}`}
            className="network-path fill-none stroke-[0.2]"
            stroke={nodes[a].type === 'critical' ? "oklch(var(--destructive))" : "url(#pathGradient)"}
            strokeDasharray="100 100"
            strokeDashoffset="100"
            opacity="0"
          />
        ))}

        {/* Data pulse particles */}
        {[...Array(8)].map((_, i) => (
          <circle key={i} r="0.8" fill="oklch(var(--primary))">
            <animateMotion
              dur={`${2 + Math.random() * 3}s`}
              repeatCount="indefinite"
              path={`M ${nodes[i % 6].x} ${nodes[i % 6].y} L ${nodes[(i + 1) % 6].x} ${nodes[(i + 1) % 6].y}`}
            />
            <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
          </circle>
        ))}
      </svg>

      {nodes.map((node, i) => (
        <div
          key={i}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className={`w-12 h-12 md:w-20 md:h-20 rounded-full border border-border/50 bg-background/80 backdrop-blur-2xl flex items-center justify-center transition-all duration-700 group-hover:border-primary group-hover:scale-110 group-hover:shadow-[0_0_40px_oklch(var(--primary)/0.3)] ${node.type === 'critical' ? 'border-destructive/40 shadow-[0_0_20px_oklch(var(--destructive)/0.2)]' : ''}`}>
             <div className="text-center">
               <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-tighter ${node.type === 'critical' ? 'text-destructive' : 'text-foreground'}`}>{node.label}</span>
             </div>
          </div>
          {i === leakIndex && (
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full glass-premium border-primary/40 whitespace-nowrap animate-bounce">
               <span className="text-[8px] font-black text-primary uppercase tracking-widest">{isFixing ? 'REPAIRING...' : 'LEAK_DETECTED'}</span>
             </div>
          )}
        </div>
      ))}

      {/* Center OS Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
         <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-primary/20 bg-background/50 backdrop-blur-3xl flex items-center justify-center relative group">
            <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-spin-slow" />
            <div className="absolute -inset-4 rounded-full border border-primary/10 animate-spin-reverse" />
            <div className="text-center">
              <span className="text-[10px] font-black tracking-[0.5em] text-primary block mb-1">GROWTH</span>
              <span className="text-4xl font-black italic tracking-tightest">OS v4</span>
            </div>
            {/* Visual Tension Particles around core */}
            <div className="absolute inset-0 pointer-events-none">
               {[...Array(12)].map((_, i) => (
                 <div 
                   key={i} 
                   className="absolute w-1 h-1 bg-primary/40 rounded-full" 
                   style={{ 
                     top: '50%', left: '50%', 
                     transform: `rotate(${i * 30}deg) translateY(-80px)`,
                     opacity: Math.random()
                   }} 
                 />
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}

const dynamicTitles = ["Growth Engines", "Revenue Infrastructures", "Conversion Systems", "Autonomous Pipelines"];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % dynamicTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".reveal-up", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.5,
      ease: "power4.out",
      filter: "blur(20px)"
    });

    tl.from(".hero-visual", {
      scale: 0.8,
      opacity: 0,
      duration: 2,
      ease: "expo.out",
      filter: "blur(30px)"
    }, "-=1");

    // Scroll parallax
    gsap.to(".parallax-bg", {
      y: (i, target) => -target.offsetHeight * 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center bg-background pt-32 overflow-hidden grain-system">
      {/* ATMOSPHERIC DEPTH */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 grid-infrastructure opacity-5" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" />
        <div className="parallax-bg absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.03)_0%,transparent_70%)]" />
      </div>

      <FloatingHUD />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* CONTENT - ASYMMETRICAL COMPOSITION */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div className="space-y-6">
              <div className="reveal-up inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-3xl group">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase italic">System_Init: 100%_Functional</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tightest leading-[0.85] uppercase reveal-up text-mask-premium">
                  WE BUILD<br />
                  <span className="text-primary italic font-medium">REVENUE</span><br />
                  MACHINES.
                </h1>
                
                <div className="h-12 overflow-hidden reveal-up">
                   <div 
                     className="transition-transform duration-1000 ease-[0.16,1,0.3,1]"
                     style={{ transform: `translateY(-${titleIndex * 100}%)` }}
                   >
                     {dynamicTitles.map((title, i) => (
                       <p key={i} className="text-2xl md:text-4xl font-bold italic text-muted-foreground/60 h-12 flex items-center">
                         {title}
                       </p>
                     ))}
                   </div>
                </div>
              </div>

              <p className="text-xl md:text-3xl text-muted-foreground/80 max-w-2xl font-medium tracking-tightest italic leading-tight reveal-up border-l-4 border-primary/20 pl-8">
                "We don't sell hours. We deploy <span className="text-foreground not-italic font-black">Autonomous Infrastructure</span> that identifies, qualifies, and converts targets while you sleep."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 reveal-up pt-6">
              <Link href="/contact">
                <MagneticButton>
                  <Button size="lg" className="rounded-2xl px-16 h-20 text-lg bg-primary text-black hover:scale-105 font-black uppercase tracking-widest shadow-[0_30px_90px_-20px_oklch(var(--primary)/0.6)] transition-all duration-700 group border-none relative overflow-hidden">
                    <span className="relative z-10">Initialize Audit</span>
                    <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-3 transition-transform duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                </MagneticButton>
              </Link>
              
              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-[10px] font-black tracking-widest text-foreground/40 uppercase">Global Acquisition Active</span>
                </div>
                <p className="text-2xl font-black italic tracking-tightest">
                  $1.2M+ <span className="text-muted-foreground/40 not-italic text-sm">Revenue Recovered</span>
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL - 3D ANALYTICS / DASHBOARD FEEL */}
          <div className="lg:col-span-5 relative hero-visual">
            <HeroNetwork />
            
            {/* Layered Floating Elements for Depth */}
            <div className="absolute -top-10 -right-10 p-6 glass-premium rounded-2xl border-primary/10 space-y-2 animate-float hidden xl:block">
               <p className="text-[8px] font-black text-primary uppercase">Conversion_Rate</p>
               <p className="text-2xl font-bold italic tracking-tighter text-foreground">+240%</p>
               <div className="w-32 h-1 bg-primary/20 rounded-full" />
            </div>
            
            <div className="absolute -bottom-10 -left-10 p-6 glass-premium rounded-2xl border-primary/10 flex items-center space-x-4 animate-float delay-1000 hidden xl:block">
               <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
               </div>
               <div>
                  <p className="text-[8px] font-black text-muted-foreground uppercase">Realtime_Flow</p>
                  <p className="text-sm font-bold text-foreground">Optimizing...</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER MARQUEE */}
      <div className="w-full mt-auto relative z-20 border-t border-border/50 bg-background/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
           <span className="text-[9px] font-black tracking-[1em] text-primary uppercase">Operational_Core</span>
           <span className="text-[9px] font-black tracking-[1em] text-foreground/20 uppercase">A.I. Systems</span>
        </div>
        <SystemsMarquee />
      </div>

      {/* CINEMATIC SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-20 hover:opacity-100 transition-opacity duration-1000">
         <span className="text-[8px] font-black tracking-[1em] text-foreground uppercase vertical-text">Scroll</span>
         <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </div>
    </section>
  );
}
