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
    <section id="problem" className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6 max-w-4xl">
            <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">Current State</span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
              YOU'RE DOING EVERYTHING RIGHT.<br />
              <span className="text-muted-foreground/20 italic">BUT STILL LOSING.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 space-y-12 group"
            >
              <span className="text-6xl font-black text-white/5 tracking-tighter italic group-hover:text-primary/10 transition-colors">
                {pain.id}
              </span>
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-white tracking-tighter italic leading-tight group-hover:text-primary transition-colors">
                  {pain.title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
