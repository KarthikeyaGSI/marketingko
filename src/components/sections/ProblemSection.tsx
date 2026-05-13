"use client";

import { motion } from "framer-motion";

const pains = [
  {
    id: "01",
    title: "Leads Going Cold",
    description: "You pay for ads. Leads come in. Nobody calls back in time. 78% of customers buy from whoever responds first — by the time you respond, the deal's already gone."
  },
  {
    id: "02",
    title: "Too Much Manual Work",
    description: "Your team spends 20–40 hours a week on repetitive tasks. Data entry, scheduling, generating reports — that's 40 hours not spent on growing revenue."
  },
  {
    id: "03",
    title: "Websites That Don't Convert",
    description: "Traffic lands on your site, looks around, and leaves. Without a clear system to capture and qualify visitors, you're losing potential revenue."
  }
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 gap-12">
          <div className="space-y-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Current State Analysis
            </motion.div>
            <h2 className="text-7xl md:text-[12rem] font-bold tracking-tightest text-foreground leading-[1.1] text-mask-premium uppercase">
              DOING EVERYTHING. <br />
              <span className="text-muted-foreground/10 italic font-medium">BUT STILL LOSING.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50 border border-border overflow-hidden rounded-[4rem]">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-16 md:p-24 bg-background hover:bg-foreground/[0.02] transition-all duration-1000 group relative overflow-hidden"
            >
              <div className="flex justify-between items-start relative z-10">
                 <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic">
                   [NODE-{pain.id}: CRITICAL]
                 </span>
                 <span className="text-sm font-black text-foreground/5 tracking-tighter italic select-none">
                    MK-SYS-CORE-v4.2
                 </span>
              </div>

              <span className="text-[10rem] font-black text-foreground/[0.02] tracking-tighter italic absolute top-10 right-10 leading-none select-none group-hover:text-primary/5 transition-colors duration-1000">
                {pain.id}
              </span>
              
              <div className="relative z-10 space-y-10 pt-16">
                <h3 className="text-5xl font-bold text-foreground tracking-tighter italic leading-none group-hover:text-primary transition-colors duration-700">
                  {pain.title}
                </h3>
                <p className="text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight max-w-lg">
                  {pain.description}
                </p>
              </div>

              {/* Technical Indicator */}
              <div className="absolute bottom-10 left-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <div className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest italic">Problem Node Identified</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
