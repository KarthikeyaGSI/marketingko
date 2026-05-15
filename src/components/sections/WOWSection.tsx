"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { Zap, Shield, Cpu, Activity, Database, Search, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const nodes = [
  { id: 1, label: "Data Ingestion", icon: Database, x: "10%", y: "20%" },
  { id: 2, label: "Intent Matching", icon: Search, x: "40%", y: "15%" },
  { id: 3, label: "Margin Optimization", icon: Activity, x: "75%", y: "25%" },
  { id: 4, label: "Autonomous Outreach", icon: Cpu, x: "20%", y: "65%" },
  { id: 5, label: "Algorithmic Scaling", icon: Zap, x: "55%", y: "75%" },
  { id: 6, label: "Sovereign Security", icon: Shield, x: "85%", y: "60%" },
];

export function WOWSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 60,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // Animate nodes with floating effect
    gsap.to(".node-float", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
        from: "random"
      },
      ease: "sine.inOut"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          
          {/* CONTENT SIDE */}
          <div className="lg:col-span-7 space-y-16">
            <div className="reveal-item inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Cpu className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">The Operating System</span>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-6xl md:text-9xl font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase reveal-item">
                THE GROWTH <br />
                <span className="text-primary italic font-medium">ARCHITECT.</span>
              </h2>
              
              <p className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tightest leading-tight max-w-3xl italic border-l-4 border-primary/20 pl-8 reveal-item">
                "We don't provide services. We deploy a full-stack growth infrastructure 
                that identifies, qualifies, and converts revenue at the speed of autonomous logic."
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border/50 reveal-item">
              <div className="space-y-4 group">
                <span className="text-6xl md:text-8xl font-black text-foreground tracking-tightest italic leading-none group-hover:text-primary transition-colors">99.9%</span>
                <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-black italic">Runtime Stability</p>
              </div>
              <div className="space-y-4 group">
                <span className="text-6xl md:text-8xl font-black text-foreground tracking-tightest italic leading-none group-hover:text-primary transition-colors">&lt;1ms</span>
                <p className="text-[10px] uppercase tracking-[0.5em] text-muted-foreground font-black italic">Execution Latency</p>
              </div>
            </div>
            
            <div className="reveal-item pt-10">
               <button className="flex items-center space-x-4 text-[10px] font-black tracking-[0.5em] text-primary uppercase italic group hover:tracking-[0.6em] transition-all duration-700">
                  <span>View Core Protocols</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-4 transition-transform" />
               </button>
            </div>
          </div>

          {/* VISUAL SIDE */}
          <div className="lg:col-span-5 relative h-[600px] md:h-[800px] reveal-item">
            <PerspectiveCard className="w-full h-full">
              <div className="w-full h-full rounded-[4rem] border border-border/50 bg-foreground/[0.01] backdrop-blur-3xl overflow-hidden relative p-12 shadow-2xl">
                <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
                
                {/* Connection Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
                  <motion.path 
                    d="M 10 20 L 40 15 L 75 25 L 85 60 L 55 75 L 20 65 Z" 
                    fill="none" 
                    stroke="oklch(var(--primary))" 
                    strokeWidth="0.1"
                    strokeDasharray="1,1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 4, ease: "easeInOut" }}
                  />
                  {/* Glowing pulses on path */}
                  {[...Array(6)].map((_, i) => (
                    <circle key={i} r="0.5" fill="oklch(var(--primary))">
                      <animateMotion
                        dur={`${3 + i}s`}
                        repeatCount="indefinite"
                        path="M 10 20 L 40 15 L 75 25 L 85 60 L 55 75 L 20 65 Z"
                      />
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  ))}
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                  <div
                    key={node.id}
                    className="absolute p-4 md:p-8 rounded-2xl md:rounded-3xl border border-border/50 bg-background/80 backdrop-blur-3xl flex items-center space-x-6 group hover:border-primary/50 transition-all duration-700 shadow-2xl node-float"
                    style={{ left: node.x, top: node.y }}
                  >
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-700 shadow-sm">
                      <node.icon className="h-5 w-5 md:h-8 md:w-8 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="hidden md:block space-y-1">
                      <span className="text-[10px] font-black text-muted-foreground tracking-widest uppercase italic group-hover:text-primary transition-colors">Node_0{node.id}</span>
                      <p className="text-sm font-bold text-foreground uppercase tracking-tightest leading-none">{node.label}</p>
                    </div>
                  </div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center">
                  <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-premium border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black tracking-[1em] text-foreground/40 uppercase italic">Infrastructure Layer v4.0</span>
                  </div>
                </div>
              </div>
            </PerspectiveCard>
          </div>
        </div>
      </div>
    </section>
  );
}
