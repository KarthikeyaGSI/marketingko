"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Cpu, MousePointer2, Activity, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const systems = [
  {
    id: "01",
    title: "Revenue Capture",
    description: "Contact, qualify, and book leads in seconds. This system calls and texts every new inbound lead within 60 seconds, 24/7.",
    mgmt: "Performance-Based Management",
    features: ["AI Voice Agent (24/7)", "WhatsApp & SMS Bot", "Instant CRM Sync", "Automated Follow-ups"],
    icon: <Zap className="w-10 h-10" />,
    alignment: "start"
  },
  {
    id: "02",
    tag: "Flagship",
    title: "Ops Efficiency",
    description: "Eliminate 20–40 hours of manual tasks weekly. We audit your workflows and automate repetitive tasks like onboarding and CRM updates.",
    mgmt: "Custom scoped after discovery",
    features: ["Workflow Process Mapping", "3–5 Core Automations", "Custom n8n/Make Logic", "Team Training"],
    icon: <Cpu className="w-10 h-10" />,
    featured: true,
    alignment: "center"
  },
  {
    id: "03",
    title: "Web Capture",
    description: "Turn passive website visitors into qualified leads. We replace outdated websites with landing systems built to capture intent.",
    mgmt: "ROI-Focused Management",
    features: ["High-Converting Pages", "Frictionless Capture", "WhatsApp Triggers", "Auto Follow-ups"],
    icon: <MousePointer2 className="w-10 h-10" />,
    alignment: "end"
  }
];

export function RevenueSystems() {
  return (
    <section id="revenue-systems" className="py-60 md:py-80 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 grid-infrastructure opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(var(--primary)/0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* SCENE HEADER (Asymmetrical Composition) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-48 gap-16">
          <div className="space-y-12 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[12px] font-black tracking-[1.5em] text-primary uppercase italic"
            >
              Infrastructure Protocols
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tightest text-foreground leading-[0.85] text-mask-premium uppercase">
              CORE <br />
              <span className="text-muted-foreground/10 italic font-medium">SYSTEMS.</span>
            </h2>
            <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl font-medium tracking-tightest leading-tight italic border-l-4 border-primary/20 pl-16">
              "Three foundational growth engines. Engineered for the modern AI economy."
            </p>
          </div>
          
          <div className="hidden lg:block relative w-96 h-96">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 border border-primary/20 rounded-full border-dashed"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <Terminal className="w-20 h-20 text-primary/40 animate-pulse" />
             </div>
          </div>
        </div>

        {/* BROKEN GRID (Layered Stacking) */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24 relative">
          {systems.map((system, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`w-full lg:w-1/3 group relative ${
                i === 1 ? 'lg:-mt-20 z-20' : i === 2 ? 'lg:mt-40 z-10' : 'z-10'
              }`}
            >
              <PerspectiveCard className={`rounded-[4rem] md:rounded-[6rem] ${system.featured ? 'shadow-[0_100px_200px_-40px_oklch(var(--primary)/0.25)]' : ''}`}>
                <div className={`p-16 md:p-20 h-full flex flex-col justify-between space-y-20 relative overflow-hidden transition-all duration-1000 ${system.featured ? 'bg-primary/5 border-primary/30' : 'bg-foreground/[0.01]'}`}>
                  
                  {/* Interaction Detail: Glow Reaction */}
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  <div className="space-y-16 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="space-y-4">
                        <span className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic">Protocol {system.id}</span>
                        {system.tag && (
                          <div className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-[0.3em] w-fit shadow-2xl">
                            {system.tag}
                          </div>
                        )}
                      </div>
                      <div className="w-24 h-24 rounded-[3rem] bg-foreground/[0.03] border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000 shadow-2xl">
                         {system.icon}
                      </div>
                    </div>

                    <div className="space-y-10">
                      <h3 className="text-6xl md:text-7xl font-black text-foreground tracking-tightest leading-[0.9] italic group-hover:text-primary transition-colors duration-1000 uppercase">
                        {system.title}
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight">
                        {system.description}
                      </p>
                    </div>

                    <div className="space-y-10 py-16 border-y border-border/50">
                      <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.6em] italic">System Architecture</p>
                      <ul className="space-y-6">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-6 text-xl font-bold tracking-tight text-foreground/60 group-hover:text-foreground transition-colors">
                            <CheckCircle2 className="w-6 h-6 text-primary opacity-60" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-10">
                       <div className="mb-16">
                         <div className="flex items-baseline space-x-6">
                           <p className="text-6xl md:text-7xl font-black text-foreground tracking-tightest italic leading-none">Quote</p>
                           <span className="text-sm font-black text-foreground/20 uppercase italic">On_Request</span>
                         </div>
                         <p className="text-[13px] font-black text-primary mt-8 uppercase tracking-[0.4em] italic opacity-80">{system.mgmt}</p>
                       </div>
                       
                       <Link href={`/contact?protocol=${system.id}`} className="block">
                        <MagneticButton>
                          <Button className={`w-full h-24 md:h-28 rounded-[3rem] transition-all duration-1000 font-black uppercase tracking-[0.3em] text-xl flex items-center justify-center space-x-8 border-none ${
                            system.featured 
                              ? 'bg-primary text-primary-foreground hover:bg-foreground hover:text-background shadow-2xl' 
                              : 'bg-foreground text-background hover:bg-primary hover:text-primary-foreground shadow-2xl'
                          }`}>
                            <span>Initialize Protocol</span> <ArrowRight className="w-8 h-8 group-hover:translate-x-6 transition-transform duration-700" />
                          </Button>
                        </MagneticButton>
                       </Link>
                    </div>
                  </div>
                </div>
              </PerspectiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
