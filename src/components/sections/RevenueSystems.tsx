"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Cpu, MousePointer2, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

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
    <section id="revenue-systems" className="py-60 md:py-96 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="ambient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-60 gap-16">
          <div className="space-y-16 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] md:text-xs font-black tracking-[1em] text-primary uppercase"
            >
              Infrastructure Protocols
            </motion.div>
            <h2 className="text-8xl md:text-[13rem] font-bold tracking-tightest text-foreground leading-[0.85] text-mask-premium uppercase">
              CORE <br />
              <span className="text-muted-foreground/10 italic font-medium">SYSTEMS.</span>
            </h2>
            <p className="text-2xl md:text-5xl text-muted-foreground max-w-5xl font-medium tracking-tightest leading-tight italic">
              "Three foundational growth engines. Fixed scope. Fixed price. Optimized for the modern AI economy."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="h-full group"
            >
              <PerspectiveCard className={`h-full rounded-[4rem] md:rounded-[6rem] ${system.featured ? 'shadow-[0_64px_128px_-32px_oklch(var(--primary)/0.2)]' : ''}`}>
                <div className={`p-16 md:p-24 h-full flex flex-col justify-between space-y-20 relative overflow-hidden ${system.featured ? 'bg-primary/5' : ''}`}>
                  
                  {/* Technical Signal Overlay */}
                  <div className="absolute top-10 right-10 opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-1000">
                    <Activity className="w-10 h-10 animate-pulse" />
                  </div>

                  <div className="space-y-16 relative z-10 flex-1">
                    <div className="flex items-center justify-between">
                      <div className="space-y-4">
                        <span className="text-[12px] font-black text-primary uppercase tracking-[0.5em]">Protocol {system.id}</span>
                        {system.tag && (
                          <div className="px-6 py-2 rounded-full bg-primary border border-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] w-fit shadow-[0_10px_20px_-5px_oklch(var(--primary)/0.4)]">
                            {system.tag}
                          </div>
                        )}
                      </div>
                      <div className="w-20 h-20 rounded-[2.5rem] bg-foreground/[0.03] border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-1000 shadow-xl">
                        <div className="group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-700">
                          {system.icon}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-6xl md:text-7xl font-bold text-foreground tracking-tightest leading-[0.8] italic group-hover:text-primary transition-colors duration-1000 uppercase">
                        {system.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                        {system.description}
                      </p>
                    </div>

                    <div className="space-y-10 py-16 border-y border-border/50">
                      <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.6em] italic">System Architecture</p>
                      <ul className="space-y-6">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-6 text-base md:text-lg font-bold tracking-tight text-foreground/60 group-hover:text-foreground transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-primary opacity-60" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-10 mt-auto">
                       <div className="mb-12">
                         <div className="flex items-baseline space-x-4">
                           <p className="text-7xl md:text-8xl font-black text-foreground tracking-tightest italic leading-none">{system.price}</p>
                           <span className="text-sm font-black text-foreground/20 uppercase">Baseline</span>
                         </div>
                         <p className="text-[12px] font-black text-muted-foreground mt-6 uppercase tracking-[0.4em] italic opacity-60">{system.mgmt}</p>
                       </div>
                       
                       <Link href={`/contact?protocol=${system.id}`} className="block">
                        <Button className={`w-full h-24 md:h-32 rounded-3xl transition-all duration-1000 font-black uppercase tracking-[0.3em] text-xl flex items-center justify-center space-x-6 border-none ${
                          system.featured 
                            ? 'bg-primary text-primary-foreground hover:bg-foreground hover:text-background shadow-[0_30px_60px_-15px_oklch(var(--primary)/0.4)]' 
                            : 'bg-foreground text-background hover:bg-primary hover:text-primary-foreground shadow-2xl'
                        }`}>
                          <span>Initialize Protocol</span> <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-700" />
                        </Button>
                       </Link>
                    </div>
                  </div>
                  
                  {/* Background Detail */}
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
              </PerspectiveCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-16 md:p-32 rounded-[5rem] md:rounded-[8rem] glass-system relative overflow-hidden group shadow-2xl">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-20 items-center">
              <div className="md:col-span-8 space-y-12">
                <div className="flex items-center space-x-6">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                  <span className="text-[12px] font-black text-primary uppercase tracking-[1em]">Operational Status: Deployment Ready</span>
                </div>
                <p className="text-3xl md:text-6xl text-muted-foreground font-medium tracking-tightest leading-tight italic">
                  "Timeline: 14 days post-audit. All infrastructure engineered for 100% transparency. Your systems. Your ownership. Our expertise."
                </p>
              </div>
              <div className="md:col-span-4 flex justify-end">
                <Link href="/contact" className="w-full">
                  <Button className="w-full rounded-3xl px-16 h-24 md:h-32 text-2xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black uppercase tracking-widest transition-all duration-1000 shadow-2xl border-none">
                    Start Discovery
                  </Button>
                </Link>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(var(--primary)/0.08)_0%,transparent_70%)]" />
           <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
