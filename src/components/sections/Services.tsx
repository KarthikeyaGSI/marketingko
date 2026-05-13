"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Mic2, MessageSquare, Globe, Workflow, Search, BarChart3 } from "lucide-react";

const services = [
  { title: "AI Automations", icon: Zap, desc: "End-to-end workflow optimization." },
  { title: "AI Voice Agents", icon: BarChart3, desc: "24/7 human-like voice interaction." },
  { title: "Lead Capture", icon: Search, desc: "Automated high-intent lead systems." },
  { title: "CRM Automation", icon: Workflow, desc: "Sync and scale your customer data." },
  { title: "AI Chatbots", icon: MessageSquare, desc: "Intelligent conversational sales." },
  { title: "Web Systems", icon: Globe, desc: "High-performance agency sites." },
  { title: "Workflow Scaling", icon: CheckCircle2, desc: "Operational efficiency at scale." },
  { title: "Sales Pipelines", icon: BarChart3, desc: "Automated revenue generation." },
];

export function ServicesGrid() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            ELITE SOLUTIONS.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Engineered for high-output enterprises looking to dominate their market through AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-all group"
            >
              <service.icon className="h-8 w-8 text-white mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    { title: "AUDIT", desc: "Deep dive into your current workflows and leakage points." },
    { title: "STRATEGY", desc: "Custom AI blueprint designed for maximum ROI." },
    { title: "BUILD", desc: "Precision engineering and deployment of your systems." },
    { title: "SCALE", desc: "Continuous optimization and expansion of AI power." },
  ];

  return (
    <section className="py-32 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <span className="text-6xl font-black text-white/5 absolute -top-8 -left-4">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{step.title}</h3>
              <div className="w-full h-[1px] bg-white/10 mb-6" />
              <p className="text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
