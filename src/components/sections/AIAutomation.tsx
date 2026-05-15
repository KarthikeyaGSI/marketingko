"use client";

import { motion } from "framer-motion";
import { Network, Zap, Cpu, Database, MessageSquare, Workflow, ArrowRight, Shield, Globe } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const workflows = [
  {
    title: "AI Lead Routing",
    desc: "Autonomous qualification nodes that score and route leads based on behavioral signals in real-time.",
    icon: Network,
    status: "Active"
  },
  {
    title: "Voice Automation",
    desc: "Neural voice agents that handle inbound and outbound communication with human-like latency.",
    icon: MessageSquare,
    status: "Optimized"
  },
  {
    title: "CRM Intelligence",
    desc: "Self-healing CRM systems that clean data, enrich profiles, and trigger actions automatically.",
    icon: Database,
    status: "Encrypted"
  },
  {
    title: "Workflow Engine",
    desc: "End-to-end operational automation that replaces manual repetition with high-throughput logic.",
    icon: Workflow,
    status: "Redundant"
  }
];

export function AIAutomation() {
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

    // Ambient floating for the main visual
    gsap.to(".visual-float", {
      y: -20,
      rotation: 1,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 grid-infrastructure opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center mb-40 md:mb-60">
          <div className="lg:col-span-7 space-y-12">
            <div className="reveal-item inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase">The AI Operating Layer</span>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-6xl md:text-9xl font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase reveal-item">
                AUTONOMOUS <br />
                <span className="text-primary italic font-medium">EXECUTION.</span>
              </h2>
              <p className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tightest leading-tight max-w-2xl italic border-l-4 border-primary/20 pl-8 reveal-item">
                "Most agencies use AI for chat. We use AI for architecture. 
                We build self-governing systems that operate without human intervention."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal-item">
            <div className="visual-float aspect-square rounded-[4rem] md:rounded-[5rem] border border-border/50 bg-foreground/[0.02] backdrop-blur-3xl overflow-hidden p-10 md:p-16 group shadow-2xl">
               <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
               
               {/* High-End Visual Layout */}
               <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                     <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shadow-[0_0_30px_oklch(var(--primary)/0.2)]">
                        <Cpu className="text-primary w-8 h-8 md:w-12 md:h-12" />
                     </div>
                     <div className="flex flex-col items-end space-y-1">
                        <span className="text-[8px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest">Protocol_ID</span>
                        <span className="text-lg md:text-2xl font-bold text-foreground italic tracking-tightest uppercase">MK-OS-AUTO-v2</span>
                     </div>
                  </div>

                  <div className="flex flex-col items-center py-10">
                     <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/20 animate-pulse absolute inset-0" />
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/40 flex items-center justify-center bg-background/80 backdrop-blur-xl relative z-10 shadow-2xl">
                          <Zap className="text-primary w-10 h-10 md:w-14 md:h-14" />
                        </div>
                     </div>
                     <div className="mt-8 flex flex-col items-center space-y-2">
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.6em] animate-shimmer">Processing_Flow</span>
                        <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:gap-8">
                     <div className="p-4 md:p-8 rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-xl group-hover:border-primary/40 transition-colors duration-700">
                        <p className="text-[8px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">Throughput</p>
                        <p className="text-2xl md:text-4xl font-bold text-foreground tracking-tightest italic">14.2k<span className="text-primary/60">/h</span></p>
                     </div>
                     <div className="p-4 md:p-8 rounded-[2rem] border border-border/50 bg-background/50 backdrop-blur-xl group-hover:border-primary/40 transition-colors duration-700">
                        <p className="text-[8px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-2">Efficiency</p>
                        <p className="text-2xl md:text-4xl font-bold text-primary tracking-tightest italic">99.9%</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflows.map((flow, i) => (
            <div
              key={i}
              className="reveal-item group p-10 rounded-[3rem] border border-border/50 bg-foreground/[0.01] hover:border-primary/40 transition-all duration-1000 glass-system relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-start">
                   <div className="w-14 h-14 rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-all duration-700">
                      <flow.icon className="text-foreground w-6 h-6 group-hover:text-primary transition-colors duration-500" />
                   </div>
                   <span className="text-[8px] font-black text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">{flow.status}</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground tracking-tightest uppercase italic">{flow.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium tracking-tightest italic">
                    {flow.desc}
                  </p>
                </div>

                <div className="flex items-center text-foreground/40 group-hover:text-primary transition-all duration-700 cursor-pointer group/link pt-4">
                   <span className="text-[9px] font-black tracking-[0.4em] uppercase">Initialize Protocol</span>
                   <ArrowRight className="ml-4 h-4 w-4 group-hover/link:translate-x-3 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
