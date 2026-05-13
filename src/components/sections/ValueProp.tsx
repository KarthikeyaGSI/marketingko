"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

const stats = [
  { label: "Revenue Systems", value: "$42M+" },
  { label: "Hours Automated", value: "85k+" },
  { label: "Execution Precision", value: "99.9%" },
  { label: "Capital Efficiency", value: "12x" },
];

export function TrustBar() {
  return (
    <section className="py-24 border-y border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden relative">
      <div className="absolute inset-0 bg-white/[0.01]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-none">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black">
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
      title: "Revenue Compounding",
      description: "Systems designed to generate capital while reducing operational friction.",
      icon: "⚡",
    },
    {
      title: "Scale Infrastructure",
      description: "Architectures that handle exponential load without human intervention.",
      icon: "💎",
    },
    {
      title: "Elite Intelligence",
      description: "Custom AI models trained on your proprietary data for market dominance.",
      icon: "🧠",
    },
  ];

  return (
    <section className="py-48">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-4xl">
            <h2 className="text-5xl md:text-[8rem] font-bold text-white tracking-tighter mb-12 leading-[0.85] text-mask">
              ENGINEERING <br />
              <span className="text-muted-foreground/30">AUTHORITY.</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium tracking-tight max-w-2xl">
              We don't bridge gaps. We build entire highways for your revenue to travel at the speed of AI.
            </p>
          </div>
          <div className="pb-8">
            <p className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">Intelligence Layer</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <PerspectiveCard key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-16 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl transition-all duration-700 hover:border-white/30 h-full"
              >
                <div className="text-5xl mb-12 opacity-80 group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{card.title}</h3>
                <p className="text-lg text-muted-foreground font-medium leading-tight tracking-tight">
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
