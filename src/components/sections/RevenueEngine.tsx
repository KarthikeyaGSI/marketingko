"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Droplet, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  BarChart3,
  Target,
  Shield,
  Activity
} from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const leakages = [
  { 
    title: "Lead Drop-off", 
    loss: "42%", 
    impact: "High",
    description: "60% of leads are never followed up within the first hour, resulting in immediate decay.",
    icon: Droplet
  },
  { 
    title: "Manual Qualification", 
    loss: "28%", 
    impact: "Medium",
    description: "Sales teams spend 40% of their time talking to unqualified prospects.",
    icon: Target
  },
  { 
    title: "Process Friction", 
    loss: "15%", 
    impact: "Strategic",
    description: "Fragmented systems create silos where data is lost between acquisition and closing.",
    icon: TrendingUp
  }
];

const solutions = [
  { 
    title: "Autonomous Response", 
    gain: "98%", 
    outcome: "Immediate",
    description: "Sub-second AI engagement ensures no lead is left behind. 100% coverage.",
    icon: Zap
  },
  { 
    title: "AI Logic Filtering", 
    gain: "95%", 
    outcome: "Precision",
    description: "Deep-layer qualification filters for high-intent revenue targets only.",
    icon: ShieldCheck
  },
  { 
    title: "Growth OS Layer", 
    gain: "100%", 
    outcome: "Continuity",
    description: "End-to-end infrastructure that bridges every gap in your revenue pipeline.",
    icon: BarChart3
  }
];

export function RevenueEngine() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 60,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      stagger: 0.15,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // Animate the bridge line
    gsap.from(".bridge-line", {
      scaleX: 0,
      duration: 2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".bridge-container",
        start: "top 70%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-40 md:mb-60 space-y-12">
          <div className="reveal-item inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
            <Shield className="w-3 h-3 text-primary" />
            <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">Infrastructure Integrity</span>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl lg:text-[10rem] font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase reveal-item">
              SEALING THE <br />
              <span className="text-primary italic font-medium">LEAKAGE.</span>
            </h2>
            <p className="text-xl md:text-4xl text-muted-foreground font-medium tracking-tightest leading-tight italic max-w-4xl mx-auto reveal-item">
              "Your business doesn't need more leads. It needs a sealed environment where no revenue can escape."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start relative bridge-container">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />
          
          {/* THE LEAKAGE (Before) */}
          <div className="space-y-16">
            <div className="reveal-item flex items-center justify-between mb-8 px-6">
              <span className="text-[12px] font-black tracking-[0.6em] text-red-500 uppercase italic">The Revenue Leak</span>
              <div className="h-px flex-grow mx-8 bg-red-500/20" />
              <Activity className="w-6 h-6 text-red-500 animate-pulse" />
            </div>
            
            {leakages.map((leak, i) => (
              <div
                key={i}
                className="reveal-item group p-10 rounded-[3rem] border border-red-500/10 bg-red-500/[0.02] backdrop-blur-3xl relative overflow-hidden transition-all duration-1000 hover:border-red-500/30 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                      <leak.icon className="h-6 w-6 text-red-500" />
                    </div>
                    <h4 className="text-2xl font-black text-foreground tracking-tightest italic uppercase">{leak.title}</h4>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-black text-red-500 tracking-tightest italic">-{leak.loss}</span>
                    <span className="text-[10px] font-black text-red-500/40 uppercase tracking-widest italic">{leak.impact} Risk</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground font-medium italic tracking-tightest leading-relaxed max-w-md">
                  {leak.description}
                </p>
                <div className="absolute -bottom-10 -right-10 p-10 text-red-500 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Droplet size={120} />
                </div>
              </div>
            ))}
          </div>

          {/* THE SEAL (After) */}
          <div className="space-y-16">
            <div className="reveal-item flex items-center justify-between mb-8 px-6">
              <Zap className="w-6 h-6 text-primary animate-shimmer" />
              <div className="h-px flex-grow mx-8 bg-primary/20" />
              <span className="text-[12px] font-black tracking-[0.6em] text-primary uppercase italic">The Autonomous Solution</span>
            </div>
            
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="reveal-item group p-10 rounded-[3rem] border border-primary/10 bg-primary/[0.02] backdrop-blur-3xl relative overflow-hidden transition-all duration-1000 hover:border-primary/40 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all duration-700">
                      <sol.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <h4 className="text-2xl font-black text-foreground tracking-tightest italic uppercase">{sol.title}</h4>
                  </div>
                  <div className="text-right">
                    <span className="block text-4xl font-black text-primary tracking-tightest italic">+{sol.gain}</span>
                    <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest italic">{sol.outcome} Gain</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground font-medium italic tracking-tightest leading-relaxed max-w-md">
                  {sol.description}
                </p>
                <div className="absolute -bottom-10 -right-10 p-10 text-primary opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={120} />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Conversion Bridge */}
        <div className="mt-40 md:mt-80 text-center reveal-item">
          <PerspectiveCard className="max-w-6xl mx-auto">
            <div className="p-20 md:p-32 rounded-[4rem] border border-border/50 bg-foreground/[0.01] backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.1)_0%,transparent_70%)] -z-10" />
              <div className="bridge-line absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              <div className="space-y-12">
                <h3 className="text-5xl md:text-8xl font-black text-foreground tracking-tightest leading-[0.9] uppercase italic">
                  TRANSFORM YOUR <br />
                  <span className="text-primary not-italic">INFRASTRUCTURE.</span>
                </h3>
                
                <p className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tightest leading-tight italic max-w-3xl mx-auto mb-16">
                  Stop chasing leads and start building systems. Our Growth OS maps your entire revenue journey and seals every point of friction.
                </p>
                
                <button className="px-16 h-20 md:h-24 rounded-2xl md:rounded-3xl bg-primary text-black font-black uppercase tracking-widest hover:scale-105 transition-all duration-1000 shadow-[0_40px_80px_-20px_oklch(var(--primary)/0.6)] flex items-center mx-auto group border-none relative overflow-hidden">
                  <span className="relative z-10">Initialize Sealing Protocol</span>
                  <ArrowRight className="ml-6 h-8 w-8 group-hover:translate-x-4 transition-transform duration-700 relative z-10" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            </div>
          </PerspectiveCard>
        </div>
      </div>
    </section>
  );
}
