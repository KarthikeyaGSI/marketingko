"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Phone, Globe, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const solutions = [
  {
    category: "AI & Automation",
    title: "Instant Lead Follow-Up",
    description: "When a lead submits a form, they instantly receive personalized WhatsApp and Email engagements.",
    icon: <MessageSquare className="w-6 h-6 text-primary" />,
    href: "/solutions"
  },
  {
    category: "AI Voice",
    title: "Inbound AI Receptionist",
    description: "Human-like AI answers every inbound call immediately, routes requests, and schedules meetings 24/7.",
    icon: <Phone className="w-6 h-6 text-primary" />,
    href: "/solutions"
  },
  {
    category: "Web",
    title: "High-Converting Landing Pages",
    description: "A lightning-fast, single-page funnel precision-built to capture leads and book calls.",
    icon: <Globe className="w-6 h-6 text-primary" />,
    href: "/solutions"
  },
  {
    category: "AI & Automation",
    title: "Appointment Booking Bot",
    description: "Let prospects book themselves automatically across WhatsApp, SMS, or web — zero manual scheduling.",
    icon: <Calendar className="w-6 h-6 text-primary" />,
    href: "/solutions"
  },
  {
    category: "Audit & Strategy",
    title: "Business Process Teardown",
    description: "A complete technical audit of your workflows with an exact mapped roadmap for automation.",
    icon: <Search className="w-6 h-6 text-primary" />,
    href: "/solutions"
  }
];

export function IndividualSolutions() {
  return (
    <section id="solutions" className="py-60 md:py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(var(--primary)/0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-40 gap-12">
          <div className="space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              Componentized Growth
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground leading-[0.8] text-mask-premium uppercase">
              MODULAR <br />
              <span className="text-muted-foreground/10 italic font-medium">SOLUTIONS.</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-2xl font-medium tracking-tighter leading-tight italic">
              Start with what hurts most. We've modularized 19+ specific operational workflows into high-performance assets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30 border border-border overflow-hidden rounded-[3rem]">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="p-16 bg-background hover:bg-foreground/[0.02] transition-all duration-1000 group relative overflow-hidden"
            >
              <div className="relative z-10 space-y-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.4em]">{solution.category}</span>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                    <div className="group-hover:text-primary-foreground transition-colors">
                      {solution.icon}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-foreground tracking-tighter italic leading-none group-hover:text-primary transition-colors duration-700 uppercase">{solution.title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium tracking-tight line-clamp-2">{solution.description}</p>
                </div>

                <Link href={solution.href} className="inline-flex items-center text-[10px] font-black text-primary uppercase tracking-[0.3em] pt-6 group/link">
                  System Specs <ArrowRight className="ml-3 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>

              {/* Grid Decorative Detail */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-foreground/[0.02] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            </motion.div>
          ))}

          {/* Explore All Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="p-16 bg-primary/[0.03] border-l border-primary/20 flex flex-col justify-between group relative overflow-hidden"
          >
             <div className="space-y-8 relative z-10">
                <div className="w-16 h-16 rounded-full border border-primary/30 flex items-center justify-center">
                   <ArrowRight className="text-primary w-8 h-8 group-hover:rotate-[-45deg] transition-transform duration-700" />
                </div>
                <h3 className="text-5xl font-bold text-foreground tracking-tighter italic leading-none uppercase">THE FULL <br /><span className="text-primary not-italic">CATALOGUE.</span></h3>
                <p className="text-xl text-muted-foreground font-medium tracking-tight">Access 19+ pre-built operational modules for every bottleneck.</p>
             </div>
             
             <Link href="/solutions" className="relative z-10 pt-10">
                <Button className="w-full h-20 rounded-2xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-700 font-black uppercase tracking-[0.2em]">
                  View All Modules
                </Button>
             </Link>

             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(var(--primary)/0.1)_0%,transparent_50%)]" />
          </motion.div>
        </div>

        <div className="mt-20 flex justify-center">
           <div className="px-8 py-3 rounded-full border border-border bg-foreground/[0.02] flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">
                Enterprise-Grade Performance | Custom Scoping Available
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}
