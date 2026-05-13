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
    href: "/solutions/lead-followup"
  },
  {
    category: "AI Voice",
    title: "Inbound AI Receptionist",
    description: "Human-like AI answers every inbound call immediately, routes requests, and schedules meetings 24/7.",
    icon: <Phone className="w-6 h-6 text-primary" />,
    href: "/solutions/voice-receptionist"
  },
  {
    category: "Web",
    title: "High-Converting Landing Pages",
    description: "A lightning-fast, single-page funnel precision-built to capture leads and book calls.",
    icon: <Globe className="w-6 h-6 text-primary" />,
    href: "/solutions/landing-pages"
  },
  {
    category: "AI & Automation",
    title: "Appointment Booking Bot",
    description: "Let prospects book themselves automatically across WhatsApp, SMS, or web — zero manual scheduling.",
    icon: <Calendar className="w-6 h-6 text-primary" />,
    href: "/solutions/booking-bot"
  },
  {
    category: "Audit & Strategy",
    title: "Business Process Teardown",
    description: "A complete technical audit of your workflows with an exact mapped roadmap for automation.",
    icon: <Search className="w-6 h-6 text-primary" />,
    href: "/solutions/audit"
  }
];

export function IndividualSolutions() {
  return (
    <section id="solutions" className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">Individual Solutions</span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
              NOT READY FOR<br />
              <span className="text-muted-foreground/20 italic">A FULL SYSTEM?</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-xl">
              Not everything needs a full system. Start with what hurts most. Explore our catalogue of 19 pre-built solutions. Starting from ₹14,999.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 group"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">{solution.category}</span>
                  <div className="p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/20 transition-colors">
                    {solution.icon}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white tracking-tighter italic leading-none">{solution.title}</h3>
                  <p className="text-muted-foreground line-clamp-2">{solution.description}</p>
                </div>

                <Link href={solution.href} className="flex items-center text-xs font-black text-primary uppercase tracking-widest pt-4 group/link">
                  View Details <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Explore All Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 flex flex-col items-center justify-center text-center space-y-6 group"
          >
             <h3 className="text-4xl font-bold text-white tracking-tighter italic">Explore All 19 Solutions</h3>
             <p className="text-sm text-muted-foreground">View our complete catalogue to find exactly what hurts most.</p>
             <Link href="/solutions">
                <Button className="rounded-full px-10 h-14 bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase tracking-widest">
                  View Catalogue
                </Button>
             </Link>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
           <p className="text-xs text-muted-foreground/40 uppercase tracking-[0.2em]">
            Pricing shown is baseline for build. Custom logic, complex integrations, or high-volume workflows may require custom scoping.
           </p>
        </div>
      </div>
    </section>
  );
}
