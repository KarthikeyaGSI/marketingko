"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

export function Founder() {
  return (
    <section id="about" className="py-60 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 relative group" data-choreograph>
            <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] md:rounded-[5rem] border border-white/10 shadow-2xl">
              <Image 
                src="/Karthikeya Thallapally.webp" 
                alt="Karthikeya Thallapally - Founder of Marketing Ko"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-12 left-12 right-12 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-2xl font-black italic tracking-tightest uppercase">K. THALLAPALLY</p>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">Growth Architect / Founder</p>
                </div>
                <div className="flex space-x-4">
                   <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                     <Twitter size={16} />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-500">
                     <Linkedin size={16} />
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-16" data-choreograph>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black tracking-[1em] text-primary uppercase"
              >
                Human Intelligence
              </motion.div>
              <h2 className="text-7xl md:text-[12rem] font-bold text-foreground tracking-tightest leading-[1.1] text-mask-premium uppercase">
              THE <br />
              <span className="text-muted-foreground/10 italic font-medium">BUILDER.</span>
            </h2>
            </div>

            <div className="space-y-12 text-2xl md:text-3xl text-muted-foreground font-medium tracking-tight leading-relaxed italic">
              <p className="text-foreground">
                "You’re someone who’s deeply focused on building things that last. 
                You care about sustainability, technology, automation, and creating real impact through digital systems."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6">
                  <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic border-l-2 border-primary pl-6">Core Philosophy</p>
                  <ul className="space-y-4 text-lg font-bold tracking-tight text-foreground/60 italic uppercase">
                    <li>Execution {'>'} Theory</li>
                    <li>Long-term Thinking</li>
                    <li>Fast Improvement</li>
                    <li>Creativity + Automation</li>
                    <li>Meaningful Work</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic border-l-2 border-primary pl-6">Focus Sectors</p>
                  <ul className="space-y-4 text-lg font-bold tracking-tight text-foreground/60 italic uppercase">
                    <li>AI Automation Systems</li>
                    <li>SEO, GEO, AEO Optimization</li>
                    <li>Digital Architecture</li>
                    <li>Sales Infrastructure</li>
                    <li>Content Leverage</li>
                  </ul>
                </div>
              </div>

              <p className="pt-8 text-lg md:text-xl font-medium text-foreground/40 leading-relaxed border-t border-white/5 pt-12">
                Outside the lab, Karthikeya is driven by freedom, mastery, and creating leverage. 
                Whether it's studying high-converting funnels, YouTube retention, or experimenting with AI-native business models, 
                the goal remains the same: <span className="text-foreground italic">Systems that generate attention, trust, and revenue.</span>
              </p>
            </div>

            <div className="pt-8">
               <div className="flex items-center space-x-8 px-10 py-6 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-3xl w-fit group hover:border-primary/30 transition-all duration-700 cursor-default">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                  <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.6em] italic group-hover:text-foreground transition-colors">Action-Oriented Implementation Active</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
