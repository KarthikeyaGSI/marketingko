"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, 
  MessageSquare, 
  UserCheck, 
  Calendar, 
  Workflow, 
  RefreshCcw, 
  CreditCard, 
  Layers, 
  Database, 
  PhoneCall, 
  PhoneForwarded, 
  Mic, 
  Globe, 
  Layout, 
  MonitorSmartphone, 
  Zap, 
  ShoppingCart, 
  Code2, 
  Search, 
  FileSearch,
  Settings,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";

const categories = ["All", "AI & Automation", "AI Voice", "Web", "Audit & Strategy"];

const solutions = [
  {
    id: "whatsapp-automation",
    category: "AI & Automation",
    title: "WhatsApp Business Automation",
    description: "End-to-end automated WhatsApp interactions. Customer support, lead capture, and notifications handled 24/7.",
    icon: MessageSquare
  },
  {
    id: "lead-qualification",
    category: "AI & Automation",
    title: "AI Lead Qualification",
    description: "Automatic scoring and filtering for every lead. Focus your sales team only on high-intent prospects.",
    icon: UserCheck
  },
  {
    id: "appointment-automation",
    category: "AI & Automation",
    title: "Appointment Booking Automation",
    description: "Zero-touch scheduling and reminders. Syncs with your calendar to eliminate manual back-and-forth.",
    icon: Calendar
  },
  {
    id: "follow-up-automation",
    category: "AI & Automation",
    title: "Follow-up Sequence Automation",
    description: "Multi-channel automated engagement sequences. Never let a lead go cold again.",
    icon: Workflow
  },
  {
    id: "cart-recovery",
    category: "AI & Automation",
    title: "Cart Abandonment Recovery",
    description: "Automated recovery sequences for lost sales. Capture revenue that would otherwise be gone.",
    icon: RefreshCcw
  },
  {
    id: "payment-reminder",
    category: "AI & Automation",
    title: "Invoice & Payment Reminder",
    description: "Hands-free payment collection systems. Automated follow-ups until the bill is cleared.",
    icon: CreditCard
  },
  {
    id: "internal-workflow",
    category: "AI & Automation",
    title: "Internal Workflow Automation",
    description: "Seamless data bridging across your daily tools. No more manual data entry between platforms.",
    icon: Layers
  },
  {
    id: "custom-ai-automation",
    category: "AI & Automation",
    title: "Custom AI & Automation",
    description: "Bespoke systems engineered perfectly for your specific operational bottleneck.",
    icon: Database
  },
  {
    id: "inbound-voice",
    category: "AI Voice",
    title: "Inbound AI Voice Agent",
    description: "24/7 intelligent answering and lead routing. Never miss a potential customer call again.",
    icon: PhoneCall
  },
  {
    id: "outbound-voice",
    category: "AI Voice",
    title: "Outbound AI Voice Agent",
    description: "Scalable proactive calling and engagement. Qualify leads and set appointments at scale.",
    icon: PhoneForwarded
  },
  {
    id: "custom-voice",
    category: "AI Voice",
    title: "Custom Voice Agent",
    description: "Complex voice logic and deep system integrations for specialized business needs.",
    icon: Mic
  },
  {
    id: "business-website",
    category: "Web",
    title: "Business Website",
    description: "Professional, conversion-focused online presence built for modern startups.",
    icon: Globe
  },
  {
    id: "landing-page",
    category: "Web",
    title: "Landing Page",
    description: "High-velocity standalone pages for specific marketing campaigns and lead gen.",
    icon: Layout
  },
  {
    id: "website-redesign",
    category: "Web",
    title: "Website Redesign",
    description: "Total overhaul of speed, structure, and conversion flow for existing platforms.",
    icon: MonitorSmartphone
  },
  {
    id: "website-lead-pipeline",
    category: "Web",
    title: "Website + Lead Pipeline",
    description: "High-converting site fully wired into automated CRM follow-up systems.",
    icon: Zap
  },
  {
    id: "ecommerce-store",
    category: "Web",
    title: "E-commerce Store",
    description: "Optimized storefront with integrated recovery systems and inventory sync.",
    icon: ShoppingCart
  },
  {
    id: "custom-web-solution",
    category: "Web",
    title: "Custom Web Solution",
    description: "Tailored portals, dashboards, and complex booking platforms engineered from scratch.",
    icon: Code2
  },
  {
    id: "automation-audit",
    category: "Audit & Strategy",
    title: "Business Automation Audit",
    description: "Comprehensive mapping of operational leaks and ROI-focused fix roadmap.",
    icon: Search
  },
  {
    id: "conversion-audit",
    category: "Audit & Strategy",
    title: "Conversion & Website Audit",
    description: "Deep structural analysis of digital friction points and conversion leaks.",
    icon: FileSearch
  }
];

export function SolutionsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSolutions = activeCategory === "All" 
    ? solutions 
    : solutions.filter(s => s.category === activeCategory);

  return (
    <section id="solutions" className="py-32 md:py-80 bg-background relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mb-48 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-[10px] md:text-xs font-black tracking-[1em] text-primary uppercase"
          >
            System Infrastructure Catalogue
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold text-foreground tracking-tightest leading-[0.8] text-mask-premium uppercase">
            DROP-IN <br />
            <span className="text-muted-foreground/10 italic font-medium">PROTOCOLS.</span>
          </h2>
          <p className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tightest leading-tight max-w-4xl italic">
            19 standalone growth modules. Each one engineered to eliminate a specific operational bottleneck.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-24">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-10 py-5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.3em] transition-all duration-700 border ${
                activeCategory === cat 
                ? "bg-primary border-primary text-primary-foreground shadow-[0_20px_40px_-10px_oklch(var(--primary)/0.3)]" 
                : "bg-foreground/[0.02] border-border text-foreground/40 hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full group"
              >
                <PerspectiveCard className="h-full rounded-[3rem] md:rounded-[4rem]">
                  <div className="p-12 md:p-16 h-full flex flex-col justify-between space-y-16">
                    <div className="space-y-12">
                      <div className="flex justify-between items-start">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-1000">
                          <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <span className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">{item.category}</span>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-bold text-foreground tracking-tightest italic leading-[0.9] group-hover:text-primary transition-colors duration-1000 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight leading-relaxed line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-12 flex items-center justify-between border-t border-border/50">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-foreground/20 uppercase tracking-widest mb-1">Pricing</span>
                        <span className="text-2xl md:text-3xl font-black text-foreground tracking-tightest italic">Custom Quote</span>
                      </div>
                      <Link href={`/contact?solution=${item.id}`} className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center group/link hover:bg-primary transition-all duration-700">
                        <ArrowRight className="w-6 h-6 text-primary group-hover/link:text-primary-foreground transition-colors group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </PerspectiveCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-32 p-16 md:p-24 rounded-[4rem] md:rounded-[6rem] glass-system relative overflow-hidden group shadow-2xl">
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <span className="text-[10px] font-black text-primary uppercase tracking-[1em]">Logistics Note</span>
                <p className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tightest leading-tight italic">
                  All fees cover industrial-grade build and 12-month management. Cloud infrastructure and third-party APIs are billed at cost with 100% transparency.
                </p>
              </div>
              <div className="flex justify-end">
                <Link href="/contact">
                  <Button className="rounded-3xl px-16 h-24 text-xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black uppercase tracking-widest transition-all duration-1000 shadow-2xl border-none">
                    Request Full Catalogue
                  </Button>
                </Link>
              </div>
           </div>
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(var(--primary)/0.05)_0%,transparent_70%)]" />
        </div>
      </div>
    </section>
  );
}
