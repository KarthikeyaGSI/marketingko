"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

const stats = [
  { label: "System Throughput", value: "2.4M/hr" },
  { label: "Decision Latency", value: "<12ms" },
  { label: "Uptime Reliability", value: "99.99%" },
  { label: "Capital Compound", value: "14.2x" },
];

export function TrustBar() {
  return (
    <section className="py-32 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
      <div className="absolute inset-0 bg-white/[0.01]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.5em] text-primary font-black">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ValueProp() {
  const cards = [
    {
      title: "Sovereign Intelligence",
      description: "Custom-trained models deployed on your proprietary data clusters to ensure absolute market dominance.",
      icon: "🧠",
    },
    {
      title: "Scale Infrastructure",
      description: "Operational architectures engineered to handle exponential load without human intervention or performance degradation.",
      icon: "💎",
    },
    {
      title: "Revenue Protocols",
      description: "Algorithmic acquisition systems designed to compound capital while systematically eliminating operational drag.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-60">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-48 gap-16">
          <div className="max-w-5xl">
            <h2 className="text-6xl md:text-[11rem] font-bold text-white tracking-tighter mb-16 leading-[0.8] text-mask">
              ENGINEERING <br />
              <span className="text-muted-foreground/30">AUTHORITY.</span>
            </h2>
            <p className="text-3xl text-muted-foreground font-medium tracking-tighter max-w-3xl leading-tight">
              We don't bridge gaps. We build entire highways for your revenue to travel at the speed of autonomous intelligence.
            </p>
          </div>
          <div className="pb-12">
            <p className="text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase">Intelligence Layer v2.0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <PerspectiveCard key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-20 rounded-[4rem] border border-white/10 bg-white/[0.02] transition-all duration-700 hover:border-primary/30 h-full"
              >
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="text-6xl mb-16 opacity-80 group-hover:scale-110 transition-transform duration-700">{card.icon}</div>
                <h3 className="text-4xl font-bold text-white mb-8 tracking-tighter">{card.title}</h3>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight">
                  {card.description}
                </p>
              </motion.div>
            </PerspectiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

