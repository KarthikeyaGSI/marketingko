"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Mic2, 
  Database, 
  TrendingUp, 
  MessageSquare, 
  Cpu, 
  UserPlus, 
  Activity 
} from "lucide-react";

const systems = [
  { title: "Lead Qualification", icon: Users },
  { title: "Voice Infrastructure", icon: Mic2 },
  { title: "CRM Architecture", icon: Database },
  { title: "Acquisition Systems", icon: TrendingUp },
  { title: "Engagement Loops", icon: MessageSquare },
  { title: "Workflow Intelligence", icon: Cpu },
  { title: "Sovereign Onboarding", icon: UserPlus },
  { title: "Operational Audits", icon: Activity }
];

export function SystemsMarquee() {
  return (
    <section className="py-4 md:py-6 bg-background/50 backdrop-blur-sm relative overflow-hidden border-y border-border/10 z-20">
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1800] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-8 md:gap-16 py-2 items-center"
        >
          {[...systems, ...systems, ...systems].map((sys, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 px-4 py-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <sys.icon className="w-4 h-4" />
              </div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-foreground/40 group-hover:text-primary uppercase transition-colors duration-500">
                {sys.title}
              </span>
              <div className="w-1 h-1 rounded-full bg-primary/20" />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
