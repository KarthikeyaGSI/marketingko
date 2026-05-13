"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Cpu, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const systems = [
  {
    id: "01",
    title: "Revenue Capture",
    description: "Contact, qualify, and book leads in seconds. Every minute matters. This system calls and texts every new inbound lead within 60 seconds, 24/7.",
    price: "₹60,000",
    mgmt: "₹15,000/mo management (optional)",
    features: [
      "AI Voice Agent (24/7)",
      "WhatsApp & SMS Bot",
      "Instant CRM Sync",
      "Automated Follow-ups",
      "Live Analytics Dashboard"
    ],
    bestFor: "Real Estate, Clinics, Service Businesses",
    icon: <Zap className="w-8 h-8 text-primary" />,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "02",
    tag: "Flagship",
    title: "Ops Efficiency",
    description: "Eliminate 20–40 hours of manual tasks weekly. We audit your workflows and automate repetitive tasks like onboarding, data entry, and CRM updates.",
    price: "₹1,00,000",
    mgmt: "Custom scoped after discovery",
    features: [
      "Workflow Process Mapping",
      "3–5 Core Automations",
      "Custom n8n/Make Logic",
      "Team Onboarding & Training",
      "30-Day Check-in"
    ],
    bestFor: "Agencies, Legal, B2B Services",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    color: "from-purple-500/20 to-blue-500/20",
    featured: true
  },
  {
    id: "03",
    title: "Web Capture",
    description: "Turn passive website visitors into qualified leads. We replace outdated websites with landing systems built to capture intent and drive immediate bookings.",
    price: "₹50,000",
    mgmt: "₹8,000/mo management (optional)",
    features: [
      "High-Converting Landing Pages",
      "Frictionless Lead Capture",
      "Automated WhatsApp Triggers",
      "Instant Auto Follow-ups",
      "Full CRM Integration"
    ],
    bestFor: "Outdated sites, Low-conversion pages",
    icon: <MousePointer2 className="w-8 h-8 text-primary" />,
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export function RevenueSystems() {
  return (
    <section id="revenue-systems" className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,oklch(var(--primary)/0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 gap-12">
          <div className="space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Infrastructure Protocols
            </motion.div>
            <h2 className="text-7xl md:text-[11rem] font-bold tracking-tighter text-foreground leading-[0.8] text-mask-premium">
              THREE SYSTEMS. <br />
              <span className="text-muted-foreground/10 italic">ONE FIX.</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-2xl font-medium tracking-tighter leading-tight">
              We've engineered three foundational growth engines. Fixed scope. Fixed price. Optimized for the modern AI economy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group p-12 lg:p-16 rounded-[4rem] border transition-all duration-1000 flex flex-col h-full overflow-hidden ${
                system.featured 
                  ? 'bg-foreground/[0.03] border-primary/20 shadow-2xl shadow-primary/5' 
                  : 'bg-background border-border hover:border-primary/20'
              }`}
            >
              {/* Technical Detail Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="100" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </div>

              <div className="relative z-10 space-y-12 flex-1">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Protocol {system.id}</span>
                    {system.tag && (
                      <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[8px] font-black uppercase tracking-widest w-fit">
                        {system.tag}
                      </div>
                    )}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-foreground/[0.02] border border-border flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                    <div className="group-hover:text-white transition-colors duration-700">
                      {system.icon}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-5xl font-bold text-foreground tracking-tighter leading-none italic group-hover:translate-x-4 transition-transform duration-700">{system.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">{system.description}</p>
                </div>

                <div className="space-y-8 py-10 border-y border-border/50">
                  <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">System Architecture</p>
                  <ul className="space-y-5">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-4 text-sm font-semibold tracking-tight text-foreground/70 group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-10 mt-auto">
                   <div className="mb-10">
                     <p className="text-5xl font-bold text-foreground tracking-tighter italic leading-none">{system.price}</p>
                     <p className="text-[10px] font-bold text-muted-foreground mt-4 uppercase tracking-[0.4em] italic">{system.mgmt}</p>
                   </div>
                   
                   <Link href="/contact" className="block">
                    <Button className={`w-full h-20 rounded-2xl transition-all duration-700 font-black uppercase tracking-[0.2em] flex items-center justify-center space-x-4 ${
                      system.featured 
                        ? 'bg-primary text-white hover:bg-primary/90' 
                        : 'bg-foreground text-background hover:bg-primary hover:text-white'
                    }`}>
                      <span>Initialize Build</span> <ArrowRight className="w-5 h-5" />
                    </Button>
                   </Link>
                </div>
              </div>

              {/* Background Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 rounded-[3rem] bg-foreground/[0.01] border border-border flex flex-col md:flex-row items-center justify-between gap-12">
          <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em] max-w-2xl text-center md:text-left leading-relaxed italic">
            Deployment timeline: 14 days post-audit. All fees cover infrastructure engineering and operational management. Platform overheads (API usage, high-volume voice compute) handled separately via direct transparency.
          </p>
          <div className="flex items-center space-x-4 px-8 py-4 rounded-2xl border border-primary/20 bg-primary/5">
             <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-[10px] font-black text-primary uppercase tracking-widest italic leading-none">All Systems GO.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
