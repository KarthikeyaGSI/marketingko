"use client";

import { motion } from "framer-motion";
import { Shield, Lock, EyeOff, Database, Globe, Scale } from "lucide-react";

const policies = [
  {
    title: "Data Sovereignty",
    icon: Lock,
    desc: "Your data remains your property. We do not use client-specific business data or proprietary lead information to train public AI models. All deployments are siloed and secure."
  },
  {
    title: "Collection Protocols",
    icon: Database,
    desc: "We collect only the essential infrastructure details, contact information, and operational metrics required to engineer and manage your growth systems."
  },
  {
    title: "Encryption Standards",
    icon: Shield,
    desc: "Every node we deploy uses enterprise-grade AES-256 encryption. API credentials and sensitive keys are stored in encrypted vaults with zero human-readable access."
  },
  {
    title: "Third-Party Nodes",
    icon: Globe,
    desc: "Our systems integrate with third-party APIs (GoHighLevel, OpenAI, n8n). Your data is subject to their respective privacy protocols only within the scope of essential processing."
  },
  {
    title: "Anonymized Analytics",
    icon: EyeOff,
    desc: "We may collect anonymized system performance data to improve our underlying automation frameworks without compromising individual business privacy."
  },
  {
    title: "Compliance Layer",
    icon: Scale,
    desc: "We adhere to global data protection standards including GDPR and CCPA, ensuring your infrastructure is built on a foundation of legal resilience."
  }
];

export default function PrivacyContent() {
  return (
    <main className="pt-40 md:pt-60 pb-40 bg-background min-h-screen relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-primary/20 bg-primary/5"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase italic">Privacy Protocol v1.0</span>
            </motion.div>

            <h1 className="text-5xl md:text-9xl font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase">
              DATA <br />
              <span className="text-muted-foreground/10 italic font-medium">SOVEREIGNTY.</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-2xl font-medium tracking-tightest leading-tight italic border-l-2 border-primary pl-8">
              We engineer for privacy. Your business intelligence is the core of your competitive advantage, and our systems are built to protect that sovereignty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-10 rounded-[3rem] border border-border bg-foreground/[0.01] space-y-8 group hover:border-primary/30 transition-all duration-700"
              >
                <div className="w-16 h-16 rounded-[2rem] bg-foreground/[0.03] border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700">
                  <policy.icon className="w-7 h-7" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground tracking-tighter uppercase italic">{policy.title}</h3>
                  <p className="text-muted-foreground font-medium tracking-tight leading-relaxed">{policy.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-12 md:p-20 rounded-[4rem] glass-system border-primary/10 text-center space-y-10">
             <h4 className="text-3xl font-bold text-foreground tracking-tighter uppercase italic">Infrastructure Security</h4>
             <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight italic max-w-3xl mx-auto">
               We do not just build systems; we build secure digital fortresses. Every byte of data flowing through our Growth OS is monitored for integrity and privacy.
             </p>
             <div className="pt-10 border-t border-border/50">
               <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em] italic">Last Updated: May 2026</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
