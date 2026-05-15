"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Target, ArrowUpRight, BarChart3, Database, Workflow, Zap } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const studies = [
  {
    title: "D2C Scaling Infrastructure",
    category: "Consumer Goods",
    metrics: { rev: "+342%", roas: "6.8x", time: "90 Days" },
    desc: "Replaced a team of 4 manual media buyers with an autonomous AI bidding and creative optimization system.",
    color: "primary"
  },
  {
    title: "SaaS Pipeline Automation",
    category: "B2B Enterprise",
    metrics: { rev: "+180%", leads: "12.4x", time: "45 Days" },
    desc: "Engineered a zero-lag lead qualification and routing engine that eliminated lead leakage for a Tier-1 SaaS provider.",
    color: "primary"
  },
  {
    title: "Global Lead Infrastructure",
    category: "Professional Services",
    metrics: { rev: "+210%", efficiency: "+85%", time: "120 Days" },
    desc: "Deployed a multi-region AI communication layer handling 40k+ leads/mo with sub-5ms routing latency.",
    color: "primary"
  }
];

export function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".study-reveal", {
      y: 100,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    gsap.to(".parallax-visual", {
      y: -50,
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
    <section ref={sectionRef} className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-40 md:mb-60 gap-12">
          <div className="space-y-12 max-w-4xl">
            <div className="study-reveal inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">Proven Protocols</span>
            </div>
            <h2 className="text-6xl md:text-[10rem] font-bold text-foreground tracking-tightest leading-[0.8] text-mask-premium uppercase study-reveal">
              DEPLOYMENT <br />
              <span className="text-primary italic font-medium">AUTHORITY.</span>
            </h2>
          </div>
          <div className="pb-12 study-reveal">
             <p className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tightest max-w-md italic border-r-4 border-primary/20 pr-8 text-right">
               "We don't show testimonials. We show technical outcomes. Audit-validated results from real infrastructure deployments."
             </p>
          </div>
        </div>

        <div className="space-y-40 md:space-y-60">
          {studies.map((study, i) => (
            <div
              key={i}
              className={`study-reveal grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-7 space-y-12 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                 <div className="flex items-center space-x-8">
                    <span className="text-[10px] md:text-[12px] font-black tracking-[0.6em] text-primary uppercase italic">{study.category}</span>
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/40 to-transparent" />
                 </div>
                 
                 <div className="space-y-8">
                   <h3 className="text-5xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tightest leading-[0.9] uppercase group-hover:text-primary transition-all duration-700">
                     {study.title}
                   </h3>
                   <p className="text-xl md:text-3xl text-muted-foreground leading-tight font-medium tracking-tightest italic max-w-2xl">
                     {study.desc}
                   </p>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-8 md:gap-16 pt-12">
                    {Object.entries(study.metrics).map(([key, val], idx) => (
                      <div key={idx} className="space-y-4 group/metric">
                         <p className="text-[10px] md:text-[12px] font-black text-muted-foreground uppercase tracking-[0.4em] italic group-hover/metric:text-primary transition-colors">{key}</p>
                         <p className="text-4xl md:text-6xl font-black text-foreground tracking-tightest italic group-hover/metric:scale-110 transition-transform origin-left">{val}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className={`lg:col-span-5 relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="parallax-visual aspect-[4/5] rounded-[3rem] md:rounded-[4rem] border border-border/50 bg-foreground/[0.02] backdrop-blur-3xl p-12 overflow-hidden relative group hover:border-primary/40 transition-all duration-1000 shadow-2xl">
                   <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                   
                   {/* High-End Visual Content */}
                   <div className="relative h-full flex flex-col justify-between z-10">
                      <div className="flex justify-between items-start">
                         <div className="flex space-x-3">
                            <div className="w-3 h-3 rounded-full bg-primary/40 shadow-[0_0_10px_oklch(var(--primary)/0.4)]" />
                            <div className="w-3 h-3 rounded-full bg-foreground/10" />
                            <div className="w-3 h-3 rounded-full bg-foreground/10" />
                         </div>
                         <div className="p-3 rounded-xl bg-foreground/[0.03] border border-border/50">
                           <BarChart3 className="text-primary w-6 h-6" />
                         </div>
                      </div>
                      
                      <div className="space-y-12">
                         <div className="space-y-4">
                           <div className="flex justify-between text-[10px] font-black text-primary uppercase tracking-widest">
                             <span>System_Optimization</span>
                             <span>98.2%</span>
                           </div>
                           <div className="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "98%" }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="h-full bg-primary shadow-[0_0_20px_oklch(var(--primary))]" 
                              />
                           </div>
                         </div>
                         
                         <div className="flex justify-between items-end">
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Node_Status</p>
                               <p className="text-3xl md:text-5xl font-black text-foreground italic tracking-tightest uppercase">Accelerated</p>
                            </div>
                            <div className="w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-700 cursor-none">
                              <ArrowUpRight className="w-10 h-10 group-hover:scale-125 transition-transform" />
                            </div>
                         </div>
                      </div>
                   </div>
                   
                   {/* Background Decorative Elements */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent rotate-45 pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
