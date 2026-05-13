"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Mic2, MessageSquare, Globe, Workflow, Search, BarChart3 } from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

const services = [
  { title: "Acquisition Infra", icon: Zap, desc: "AI-powered lead engines that compound daily." },
  { title: "Voice Operations", icon: Mic2, desc: "24/7 autonomous sales and support agents." },
  { title: "Revenue Systems", icon: BarChart3, desc: "End-to-end conversion infrastructures." },
  { title: "CRM Intelligence", icon: Workflow, desc: "Data synchronization with zero human lag." },
];

export function ServicesGrid() {
  return (
    <section className="py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none">
              CORE <br />
              <span className="text-muted-foreground/30">CAPABILITIES.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium tracking-tight">
              We engineer growth infrastructure for companies that demand scale without the overhead.
            </p>
          </div>
          
          <div className="pb-4">
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">Market Dominance Layer</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <PerspectiveCard key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{service.desc}</p>
              </motion.div>
            </PerspectiveCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { title: "AUDIT", desc: "Identifying infrastructure leakage and growth bottlenecks." },
    { title: "BLUEPRINT", desc: "Engineering the custom AI architecture for your scale." },
    { title: "DEPLOY", desc: "Precision integration with zero operational downtime." },
    { title: "OPTIMIZE", desc: "Continuous improvement of revenue compounding loops." },
  ];

  return (
    <section className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-12 group hover:bg-white/[0.02] transition-colors rounded-3xl"
            >
              <span className="text-[10px] font-black text-white/10 tracking-[0.5em] mb-12 block">PHASE 0{index + 1}</span>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter group-hover:translate-x-2 transition-transform">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                {step.desc}
              </p>
              <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-white/5 group-hover:bg-white/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
