"use client";

import { MessageSquare, FileText, Code2, TrendingUp, Zap, ArrowRight, Shield } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const steps = [
  {
    id: "01",
    title: "Core Discovery",
    description: "30-minute deep-dive. We audit your architecture, identify revenue leaks, and define the high-ROI nodes.",
    icon: MessageSquare,
  },
  {
    id: "02",
    title: "System Scoping",
    description: "Deterministic roadmap. You receive exact technical deliverables, timeline, and ROI projection. Zero ambiguity.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Rapid Assembly",
    description: "Our engineers build the entire autonomous infrastructure. You maintain focus on your core operations.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Active Deployment",
    description: "Systems go live in 14 days. You witness immediate efficiency gains and revenue retention within cycle 01.",
    icon: TrendingUp,
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".process-reveal", {
      y: 80,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    // Timeline line drawing
    gsap.from(".timeline-line", {
      scaleX: 0,
      duration: 2,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top 60%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="process" className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 grid-infrastructure opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,oklch(var(--primary)/0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 md:mb-60 gap-12">
          <div className="space-y-12 max-w-4xl">
            <div className="process-reveal inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-3xl">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">Deployment Lifecycle</span>
            </div>
            <h2 className="text-6xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tightest text-foreground leading-[0.8] text-mask-premium uppercase italic process-reveal">
              THE 2-WEEK <br />
              <span className="text-primary italic font-medium">PROTOCOL.</span>
            </h2>
          </div>
          <div className="pb-12 process-reveal">
             <p className="text-xl md:text-3xl text-muted-foreground max-w-md font-medium tracking-tightest leading-tight italic border-r-4 border-primary/20 pr-8 text-right">
               "We've engineered a precision-timed protocol to take your business from manual drag to automated scale in exactly 14 days."
             </p>
          </div>
        </div>

        <div className="timeline-container relative pt-20">
          {/* Horizontal Timeline Line */}
          <div className="timeline-line hidden lg:block absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className="process-reveal relative p-12 lg:p-16 space-y-12 group hover:bg-foreground/[0.01] transition-colors duration-1000"
              >
                {/* Connector Node */}
                <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center pointer-events-none">
                   <div className="w-6 h-6 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors duration-700 relative z-20">
                      <div className="absolute inset-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_20px_oklch(var(--primary))]" />
                   </div>
                </div>

                <div className="space-y-10 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-8xl font-black text-foreground/[0.05] tracking-tightest italic leading-none group-hover:text-primary/10 transition-all duration-1000 select-none">{step.id}</span>
                    <div className="w-20 h-20 rounded-2xl bg-foreground/[0.03] border border-border/50 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-1000 shadow-sm">
                       <step.icon className="w-10 h-10 text-foreground group-hover:text-primary transition-colors duration-1000" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tightest italic leading-none group-hover:translate-x-4 transition-transform duration-700 uppercase">{step.title}</h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium tracking-tightest italic">{step.description}</p>
                  </div>

                  <div className="flex items-center space-x-2 text-primary/0 group-hover:text-primary transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                     <span className="text-[10px] font-black tracking-widest uppercase">Phase_Initialized</span>
                     <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 flex justify-center process-reveal">
           <div className="relative group cursor-none">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative px-16 py-8 glass-premium rounded-full border border-primary/20 flex items-center space-x-10 shadow-2xl">
                 <div className="text-3xl md:text-4xl font-black tracking-tightest italic uppercase">Day 14: <span className="text-primary">System_Online.</span></div>
                 <div className="w-px h-10 bg-primary/20" />
                 <div className="flex items-center space-x-3">
                   <Zap className="w-5 h-5 text-primary animate-pulse" />
                   <div className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em] italic">Protocol Fully Deployed</div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
