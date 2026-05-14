"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Droplet, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  BarChart3,
  Users,
  Target
} from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

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
  return (
    <section className="py-40 md:py-80 bg-background relative overflow-hidden grain-bg">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid-infrastructure" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.8em] text-primary mb-12 uppercase"
          >
            Infrastructure Integrity
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-bold text-foreground tracking-tighter leading-[0.8] mb-16 text-mask-premium uppercase">
            SEALING THE <br />
            <span className="text-muted-foreground/40 italic">LEAKAGE.</span>
          </h2>
          <p className="text-2xl md:text-4xl text-muted-foreground dark:text-muted-foreground/80 font-medium tracking-tighter leading-tight italic">
            "Your business doesn't need more leads. It needs a sealed environment where no revenue can escape."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* THE LEAKAGE (Before) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-destructive/30" />
              <span className="text-xs font-black tracking-widest text-destructive uppercase">The Revenue Leak</span>
            </div>
            
            {leakages.map((leak, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] border border-destructive/10 bg-destructive/5 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20">
                      <leak.icon className="h-5 w-5 text-destructive" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground tracking-tight">{leak.title}</h4>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-destructive tracking-tighter">-{leak.loss}</span>
                    <span className="text-[10px] font-black text-destructive/40 uppercase tracking-widest italic">{leak.impact} Risk</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed max-w-md">
                  {leak.description}
                </p>
                <motion.div 
                  animate={{ y: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-0 right-0 p-8 text-destructive opacity-10"
                >
                  <Droplet size={80} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* THE SEAL (After) */}
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary/30" />
              <span className="text-xs font-black tracking-widest text-primary uppercase">The Autonomous Solution</span>
            </div>
            
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                      <sol.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground tracking-tight">{sol.title}</h4>
                  </div>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-primary tracking-tighter">+{sol.gain}</span>
                    <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest italic">{sol.outcome} Gain</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-medium text-sm leading-relaxed max-w-md">
                  {sol.description}
                </p>
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-0 right-0 p-8 text-primary opacity-10"
                >
                  <ShieldCheck size={80} />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Conversion Bridge */}
        <div className="mt-40 text-center">
          <PerspectiveCard className="max-w-5xl mx-auto">
            <div className="p-20 rounded-[4rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              
              <h3 className="text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-10">
                TRANSFORM YOUR <br />
                <span className="text-muted-foreground/40 italic">INFRASTRUCTURE.</span>
              </h3>
              
              <p className="text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-2xl mx-auto mb-16">
                Stop chasing leads and start building systems. Our Growth OS maps your entire revenue journey and seals every point of friction.
              </p>
              
              <button className="px-12 py-6 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-[0_30px_60px_-15px_oklch(var(--primary)/0.5)] flex items-center mx-auto">
                Initiate Sealing Protocol <ArrowRight className="ml-4 h-5 w-5" />
              </button>
            </div>
          </PerspectiveCard>
        </div>
      </div>
    </section>
  );
}
