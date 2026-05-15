"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { 
  Cpu, 
  MessageSquare, 
  Database, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Activity,
  Network,
  Layers,
  LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = ["All", "Core Infra", "Growth AI", "Data Flow"];

const solutions = [
  {
    id: "01",
    title: "Autonomous Voice OS",
    description: "Sub-second latency voice agents that handle outbound qualification and inbound triage with human-level nuance.",
    category: "Growth AI",
    icon: Cpu,
    tags: ["Real-time", "Sub-12s Latency"]
  },
  {
    id: "02",
    title: "Leakage Triage",
    description: "Self-healing conversion paths that identify where leads are dropping and re-engages them automatically.",
    category: "Core Infra",
    icon: Activity,
    tags: ["Anti-Churn", "Automation"]
  },
  {
    id: "03",
    title: "Neural CRM Sync",
    description: "Deep-layer integration that turns your static database into a living, breathing qualified asset.",
    category: "Data Flow",
    icon: Database,
    tags: ["Data Integrity", "API-First"]
  },
  {
    id: "04",
    title: "Predictive Intent",
    description: "ML-driven scoring that predicts lead intent before the first touch, prioritizing your high-value targets.",
    category: "Growth AI",
    icon: TrendingUp,
    tags: ["ML Scoring", "Priority"]
  },
  {
    id: "05",
    title: "Sovereign Funnels",
    description: "End-to-end customer journeys that operate entirely without human intervention until the final close.",
    category: "Core Infra",
    icon: Network,
    tags: ["Hands-Free", "Scale"]
  },
  {
    id: "06",
    title: "Telemetry Dash",
    description: "Real-time visibility into every signal in your revenue pipeline. Total transparency at the unit level.",
    category: "Data Flow",
    icon: LineChart,
    tags: ["Live Data", "BI Sync"]
  }
];

export function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSolutions = activeCategory === "All" 
    ? solutions 
    : solutions.filter(s => s.category === activeCategory);

  return (
    <section id="solutions" className="py-24 md:py-60 bg-background relative overflow-hidden grain-elite">
      <div className="absolute inset-0 grid-infrastructure opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-32 gap-12">
          <div className="space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[10px] md:text-[11px] font-black tracking-[1em] text-primary uppercase italic"
            >
              System Capabilities
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className="text-emotional leading-[0.8] text-foreground"
            >
              SELECT <br />
              <span className="text-gold not-italic font-medium">INFRASTRUCTURE.</span>
            </motion.h2>
          </div>

          <p className="text-lg md:text-2xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-xl italic border-l-2 border-primary/20 pl-8">
            Each node we deploy is custom-engineered to solve a specific revenue bottleneck. No templates. No generic automation. Only precision infrastructure.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-24 max-w-full overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 md:px-10 py-3 md:py-5 rounded-full text-[9px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-700 border ${
                activeCategory === cat 
                ? "bg-primary border-primary text-primary-foreground shadow-[0_20px_40px_-10px_oklch(var(--primary)/0.3)]" 
                : "bg-foreground/[0.02] border-border text-foreground/40 hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full group"
              >
                <PerspectiveCard className="h-full rounded-[3rem] md:rounded-[4rem]">
                  <div className="p-12 md:p-16 h-full flex flex-col justify-between space-y-16 cinematic-card border-none bg-transparent">
                    <div className="space-y-12">
                      <div className="flex justify-between items-start">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-1000">
                          <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">{item.category}</span>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest italic leading-[0.9] group-hover:text-primary transition-colors duration-1000 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-12 flex items-center justify-between border-t border-border/50">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest mb-1">Pricing</span>
                        <span className="text-2xl md:text-3xl font-black text-foreground tracking-tightest italic">Custom Quote</span>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] flex items-center justify-center text-foreground/20 group-hover:text-primary transition-colors duration-700">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </PerspectiveCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-40 w-full rounded-[4rem] md:rounded-[6rem] border border-border bg-foreground/[0.01] overflow-hidden p-10 md:p-24 relative group shadow-[0_64px_128px_-32px_rgba(0,0,0,0.2)]">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <span className="text-[10px] font-black text-primary uppercase tracking-[1em]">Logistics Note</span>
                <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tightest leading-[0.9] uppercase italic">
                  Systems are <br /> <span className="text-gold">Tailor-Made.</span>
                </h3>
                <p className="text-lg md:text-2xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-xl italic">
                  We don&apos;t force your business into our tools. We build the tools that fit your business. Every deployment starts with a deep architectural audit.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="rounded-2xl px-12 h-20 bg-primary text-black font-black uppercase tracking-widest hover:scale-105 transition-transform duration-700 border-none">
                    Request Architectural Audit
                  </Button>
                </Link>
              </div>
              
              <div className="relative aspect-video rounded-[3rem] border border-border bg-black overflow-hidden group-hover:scale-[1.02] transition-transform duration-1000">
                 <div className="absolute inset-0 grid-infrastructure opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Layers className="w-48 h-48 text-primary/10 animate-pulse" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
