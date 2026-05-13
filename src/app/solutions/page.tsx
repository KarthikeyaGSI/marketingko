"use client";

import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Mic2, Search, Layout, Database, ShieldCheck } from "lucide-react";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const solutions = [
  {
    title: "Acquisition Infra",
    icon: Search,
    description: "Automated high-intent lead identification and capture engines with zero human lag.",
    features: ["Predictive Scoring", "Direct Outreach", "Pipeline Sync", "Intent Mapping"],
  },
  {
    title: "Voice Operations",
    icon: Mic2,
    description: "24/7 autonomous sales and support agents that handle thousands of calls simultaneously.",
    features: ["Natural Prosody", "Live Integration", "Infinite Scale", "Sentiment Analysis"],
  },
  {
    title: "Revenue Workflows",
    icon: Database,
    description: "End-to-end operational architectures that eliminate manual bottlenecks and friction.",
    features: ["CRM Synthesis", "Auto-Billing", "Self-Healing Data", "Logic Guardrails"],
  },
  {
    title: "Security Shield",
    icon: ShieldCheck,
    description: "Enterprise-grade AI security and logic compliance for mission-critical systems.",
    features: ["PII Protection", "GDPR Native", "Redundancy Layer", "Audit Logs"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-10 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-60">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="reveal-text"
          >
            <h1 className="text-8xl md:text-[14rem] font-bold text-white tracking-tighter mb-16 leading-[0.8] text-mask-premium">
              SOVEREIGN <br />
              <span className="text-muted-foreground/10 italic">SYSTEMS.</span>
            </h1>
          </motion.div>
          <p className="text-2xl md:text-4xl text-muted-foreground max-w-5xl mx-auto font-medium tracking-tighter leading-tight italic">
            "We engineer autonomous acquisition systems that eliminate operational drag 
            and deploy infrastructure that compounds monthly."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-60">
          {solutions.map((item, index) => (
            <PerspectiveCard key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-16 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <item.icon className="h-8 w-8" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-8 tracking-tighter leading-none">{item.title}</h2>
                <p className="text-xl text-muted-foreground mb-12 font-medium tracking-tight leading-snug">{item.description}</p>
                <ul className="space-y-6 mb-12">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center text-white/60 font-bold text-xs tracking-widest">
                      <div className="w-1 h-1 rounded-full bg-white/40 mr-4" />
                      {f.toUpperCase()}
                    </li>
                  ))}
                </ul>
                <MagneticButton className="w-full">
                  <Button variant="outline" className="rounded-full w-full h-16 border-white/20 hover:bg-white hover:text-black text-xl font-bold">
                    View Architecture
                  </Button>
                </MagneticButton>
              </motion.div>
            </PerspectiveCard>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mb-40">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-20 text-center tracking-tighter">PROTOCOL QUESTIONS.</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "How fast is implementation?", a: "Deployment cycles typically range from 4 to 6 weeks. We prioritize velocity to ensure immediate compounding." },
              { q: "Is the infrastructure secure?", a: "Every layer is built with enterprise-grade security, redundancy, and full PII protection protocols." },
              { q: "What is the expected ROI?", a: "Our partners typically experience 5x to 12x capital efficiency within the first 180 days of deployment." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-white/[0.01] rounded-2xl px-8 hover:bg-white/[0.03] transition-colors">
                <AccordionTrigger className="text-white text-2xl font-bold py-8 hover:no-underline tracking-tighter">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xl pb-8 font-medium tracking-tight leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
