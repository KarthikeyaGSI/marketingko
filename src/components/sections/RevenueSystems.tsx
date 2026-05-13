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
    <section id="revenue-systems" className="py-40 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">Revenue Systems</span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
              THREE SYSTEMS.<br />
              <span className="text-muted-foreground/20 italic">ONE FIX.</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-xl">
              Three of the most expensive problems in any growing business — each one fixed completely.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative group p-12 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl overflow-hidden flex flex-col h-full ${
                system.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative z-10 space-y-10 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">System {system.id}</span>
                    {system.tag && (
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[8px] font-black uppercase tracking-widest w-fit">
                        {system.tag}
                      </span>
                    )}
                  </div>
                  {system.icon}
                </div>

                <div className="space-y-4">
                  <h3 className="text-5xl font-bold text-white tracking-tighter leading-none italic">{system.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{system.description}</p>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Key Features</p>
                  <ul className="space-y-4">
                    {system.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-white/80 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    <li className="text-xs font-bold text-primary italic pt-2">+ 2 more systems...</li>
                  </ul>
                </div>

                <div className="pt-10 border-t border-white/5 mt-auto">
                   <div className="mb-8">
                     <p className="text-4xl font-bold text-white tracking-tighter italic">From {system.price}</p>
                     <p className="text-[10px] font-bold text-muted-foreground mt-2 uppercase tracking-widest">{system.mgmt}</p>
                   </div>
                   
                   <Link href="/contact" className="block">
                    <Button variant="outline" className="w-full h-16 rounded-2xl border-white/10 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group/btn">
                      Explore <ArrowRight className="ml-3 w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                   </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-white/[0.01] border border-white/5 text-center">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-[0.2em]">
            All fees cover build and management. Platforms (Meta API, hosting, voice infra) billed separately at cost. Full estimate provided before any project starts.
          </p>
        </div>
      </div>
    </section>
  );
}
