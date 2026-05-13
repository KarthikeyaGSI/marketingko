"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, User, Zap, Activity, Fingerprint } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Founder() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section ref={containerRef} className="py-80 md:py-96 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,oklch(var(--primary)/0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center asymmetric-scene">
          
          {/* VISUAL SCENE: The Founder (Left Weighted) */}
          <div className="lg:col-span-5 relative group">
            <motion.div 
              style={{ scale: imgScale }}
              className="relative aspect-[4/5] rounded-[5rem] overflow-hidden border border-border bg-foreground/[0.02] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)] transition-all duration-1000 group-hover:border-primary/40 group-hover:shadow-[0_80px_160px_-40px_oklch(var(--primary)/0.2)]"
            >
              <Image
                src="/Karthikeya Thallapally.webp"
                alt="Karthikeya Thallapally - Growth Architect"
                fill
                className="object-cover transition-all duration-1000"
                priority
              />
              
              {/* Cinematic Overlay Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-12 left-12 right-12 p-10 glass-system rounded-[3rem] space-y-4 translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                 <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic">Operator_ID: KT-GS-01</span>
                    <Fingerprint className="w-8 h-8 text-primary" />
                 </div>
                 <h3 className="text-3xl font-black italic tracking-tighter text-foreground">Karthikeya Thallapally</h3>
              </div>
            </motion.div>
            
            {/* Background Atmosphere */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
          </div>

          {/* CONTENT SCENE: The Mindset (Right Weighted) */}
          <div className="lg:col-span-7 space-y-24">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-primary/20 bg-primary/5"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase italic">Human Intelligence</span>
              </motion.div>
              
              <h2 className="text-8xl md:text-[15rem] font-black tracking-tightest text-foreground leading-[0.85] text-mask-premium uppercase italic">
                THE <br />
                <span className="text-muted-foreground/10 not-italic font-medium">BUILDER.</span>
              </h2>
            </div>

            <motion.div 
              style={{ x: textX }}
              className="space-y-16 text-3xl md:text-5xl text-muted-foreground font-medium tracking-tightest leading-tight italic border-l-4 border-primary/20 pl-16"
            >
              <p>
                "I am deeply focused on <span className="text-foreground not-italic font-black">building things that last</span>. I care about sustainability, technology, automation, and creating real impact through digital systems."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
                 {[
                   { label: "Execution > Theory", icon: <Zap /> },
                   { label: "Long-term Compounding", icon: <Activity /> },
                   { label: "Systems Architecture", icon: <ShieldCheck /> },
                   { label: "Human Psychology", icon: <User /> }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center text-primary/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000">
                         {item.icon}
                      </div>
                      <span className="text-xl md:text-2xl font-bold text-foreground/40 group-hover:text-foreground transition-all duration-1000">{item.label}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
            
            <div className="pt-20 border-t border-border/50">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
                  <div className="space-y-4">
                     <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.6em] italic">Current Focus</p>
                     <p className="text-4xl font-bold italic tracking-tighter text-foreground/60 leading-none">Engineering Autonomous Growth OS.</p>
                  </div>
                  <Link href="/contact">
                    <Button className="rounded-3xl px-16 h-24 bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black uppercase tracking-widest transition-all duration-1000 shadow-2xl border-none">
                      Initialize Audit
                    </Button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
