"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { TrendingUp, Users, Target, ArrowUpRight, BarChart3, Database } from "lucide-react";

const studies = [
  {
    title: "D2C Scaling Infrastructure",
    category: "Consumer Goods",
    metrics: { rev: "+342%", roas: "6.8x", time: "90 Days" },
    desc: "Replaced a team of 4 manual media buyers with an autonomous AI bidding and creative optimization system.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "SaaS Pipeline Automation",
    category: "B2B Enterprise",
    metrics: { rev: "+180%", leads: "12.4x", time: "45 Days" },
    desc: "Engineered a zero-lag lead qualification and routing engine that eliminated lead leakage for a Tier-1 SaaS provider.",
    color: "from-purple-600 to-pink-500"
  },
  {
    title: "Global Lead Infrastructure",
    category: "Professional Services",
    metrics: { rev: "+210%", efficiency: "+85%", time: "120 Days" },
    desc: "Deployed a multi-region AI communication layer handling 40k+ leads/mo with sub-5ms routing latency.",
    color: "from-orange-600 to-red-500"
  }
];

export function CaseStudies() {
  return (
    <section className="py-80 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-48 gap-12">
          <div className="space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Proven Protocols
            </motion.div>
            <h2 className="text-6xl md:text-[10rem] font-bold text-white tracking-tighter leading-[0.8] text-mask-premium">
              DEPLOYMENT <br />
              <span className="text-muted-foreground/10 italic">HISTORY.</span>
            </h2>
          </div>
          <div className="pb-12">
             <p className="text-2xl text-muted-foreground font-medium tracking-tighter max-w-sm">
               We don't show testimonials. We show technical outcomes. Audit-validated results from real infrastructure deployments.
             </p>
          </div>
        </div>

        <div className="space-y-32">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 space-y-12">
                   <div className="flex items-center space-x-6">
                      <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">{study.category}</span>
                      <div className="h-[1px] w-20 bg-white/10" />
                   </div>
                   <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none group-hover:text-primary transition-colors duration-700">
                     {study.title}
                   </h3>
                   <p className="text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight max-w-2xl">
                     {study.desc}
                   </p>
                   
                   <div className="grid grid-cols-3 gap-12 pt-12">
                      {Object.entries(study.metrics).map(([key, val], idx) => (
                        <div key={idx} className="space-y-2">
                           <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">{key}</p>
                           <p className="text-4xl font-bold text-white tracking-tighter italic">{val}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="lg:col-span-5 aspect-[4/3] rounded-[4rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl p-12 overflow-hidden relative group-hover:border-primary/40 transition-all duration-1000">
                   <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                   
                   {/* Mock UI Artifact */}
                   <div className="relative h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                         <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                         </div>
                         <BarChart3 className="text-white/20" />
                      </div>
                      
                      <div className="space-y-8">
                         <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: "80%" }}
                              transition={{ duration: 2, delay: 0.5 }}
                              className="h-full bg-primary" 
                            />
                         </div>
                         <div className="flex justify-between items-end">
                            <div className="space-y-2">
                               <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Growth Velocity</p>
                               <p className="text-4xl font-bold text-white italic tracking-tighter">Accelerated</p>
                            </div>
                            <ArrowUpRight className="text-primary w-12 h-12 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
