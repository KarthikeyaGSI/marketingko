"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Revenue Generated", value: "$42M+" },
  { label: "Hours Saved", value: "85k+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "ROI Average", value: "12x" },
];

export function TrustBar() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-medium">
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
      title: "Built for Enterprise",
      description: "Secure, scalable architectures designed to handle complex corporate workflows.",
      icon: "🏢",
    },
    {
      title: "Outcome Driven",
      description: "We don't just build tech; we build systems that impact your bottom line.",
      icon: "📈",
    },
    {
      title: "Elite Execution",
      description: "Boutique service with global-scale results. Fast, precise, and high-fidelity.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:row items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6 leading-tight">
              WHY THE BEST <br />
              CHOOSE MARKETING KO.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between cutting-edge AI and actual business growth. 
              Our systems are built to be aggressive, reliable, and invisible.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group p-10 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all duration-500 hover:border-white/20"
            >
              <div className="text-4xl mb-6">{card.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
