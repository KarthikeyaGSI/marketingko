"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Activity, AlertTriangle, ShieldX, TrendingDown, Zap, Shield, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const pains = [
  {
    id: "01",
    title: "Leads Going Cold",
    description: "You pay for ads. Leads come in. Nobody calls back in time. 78% of customers buy from whoever responds first — by the time you respond, the deal's already gone.",
    icon: AlertTriangle,
    stats: "78% Decay Rate"
  },
  {
    id: "02",
    title: "Manual Overload",
    description: "Your team spends 20–40 hours a week on repetitive tasks. Data entry, scheduling, generating reports — that's 40 hours not spent on growing revenue.",
    icon: TrendingDown,
    stats: "40hr/wk Loss"
  },
  {
    id: "03",
    title: "Conversion Gaps",
    description: "Traffic lands on your site, looks around, and leaves. Without a clear system to capture and qualify visitors, you're losing potential revenue every second.",
    icon: ShieldX,
    stats: "2.4x Multiplier Missed"
  }
];

export function ProblemSection() {
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

    // Parallax movement for background elements
    gsap.to(".parallax-bg", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="problem" className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(var(--primary)/0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start">
          
          {/* CONTENT SIDE */}
          <div className="lg:col-span-7 space-y-12">
            <div className="reveal-item inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Activity className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">Current State Analysis</span>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-6xl md:text-9xl font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase reveal-item">
                DOING EVERYTHING. <br />
                <span className="text-primary italic font-medium">BUT STILL LOSING.</span>
              </h2>
              <p className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tightest leading-tight max-w-2xl italic border-l-4 border-primary/20 pl-8 reveal-item">
                "Most businesses aren't failing at marketing. They are failing at <span className="text-foreground not-italic font-black">infrastructure</span>. Your growth is being choked by operational drag."
              </p>
            </div>

            <div className="pt-10 grid grid-cols-1 gap-8">
               {pains.map((pain, i) => (
                 <div
                    key={i}
                    className="reveal-item p-10 rounded-[3rem] border border-border/50 bg-foreground/[0.01] hover:border-primary/40 transition-all duration-1000 glass-system group relative overflow-hidden shadow-2xl"
                 >
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                       <span className="text-8xl md:text-[10rem] font-black text-foreground italic leading-none">{pain.id}</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-10 relative z-10">
                       <div className="w-20 h-20 rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-700 shadow-sm shrink-0">
                          <pain.icon className="w-10 h-10" />
                       </div>
                       <div className="space-y-4 flex-1">
                          <div className="flex flex-wrap items-center gap-6">
                            <h3 className="text-3xl font-black text-foreground tracking-tightest italic uppercase leading-none">{pain.title}</h3>
                            <div className="px-5 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20 shadow-[0_0_15px_oklch(var(--primary)/0.2)]">{pain.stats}</div>
                          </div>
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium tracking-tightest italic max-w-xl">
                            {pain.description}
                          </p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* VISUAL TENSION SIDE */}
          <div className="lg:col-span-5 relative hidden lg:block">
             <div className="sticky top-40 space-y-12">
                <div className="parallax-bg w-full aspect-square rounded-[4rem] border border-border/50 bg-foreground/[0.02] backdrop-blur-3xl relative overflow-hidden flex items-center justify-center shadow-2xl">
                   <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
                   
                   <div className="relative z-10 text-center space-y-6">
                      <div className="w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center relative">
                         <div className="absolute inset-0 rounded-full border border-dashed border-primary/40 animate-spin-slow" />
                         <Activity className="w-16 h-16 text-primary animate-pulse" />
                      </div>
                      <p className="text-[10px] font-black tracking-[0.8em] text-primary uppercase italic animate-shimmer">Diagnostic_Protocol: Active</p>
                   </div>
                   
                   {/* Spinning Decoration */}
                   <div className="absolute -top-20 -right-20 w-80 h-80 border border-primary/5 rounded-full animate-spin-slow" />
                   <div className="absolute -bottom-20 -left-20 w-60 h-60 border border-primary/5 rounded-full animate-spin-reverse" />
                </div>
                
                <div className="reveal-item p-10 rounded-[3rem] glass-premium space-y-6 border-primary/20 shadow-2xl transform hover:scale-105 transition-transform duration-700">
                   <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] italic">Leak_Detection_Active</span>
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-ping shadow-[0_0_15px_#ef4444]" />
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between text-[12px] font-black text-foreground uppercase tracking-widest italic">
                        <span>Revenue_Leakage</span>
                        <span className="text-red-500">92%</span>
                      </div>
                      <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          transition={{ duration: 2.5, ease: "expo.out" }}
                          className="h-full bg-red-500 shadow-[0_0_20px_#ef4444]" 
                        />
                      </div>
                   </div>
                   <p className="text-base font-bold italic text-muted-foreground/60 leading-tight">Critical operational leakage identified in 92% of evaluated systems. Acquisition-to-Revenue bridge is failing.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
