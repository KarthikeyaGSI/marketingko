"use client";

import { motion } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Database, Mic2, Search, Layout } from "lucide-react";

const solutions = [
  {
    title: "AI Automations",
    icon: Zap,
    description: "End-to-end workflow optimization that eliminates repetitive tasks and human error.",
    features: ["CRM Sync", "Auto-responding", "Data Extraction", "Notification Systems"],
  },
  {
    title: "AI Voice Agents",
    icon: Mic2,
    description: "24/7 outbound and inbound voice agents that sound and act exactly like your best sales reps.",
    features: ["Appointment Setting", "Customer Support", "Cold Calling", "Lead Qualification"],
  },
  {
    title: "Lead Capture Systems",
    icon: Search,
    description: "High-intent lead generation systems that identify and capture your ideal customers automatically.",
    features: ["Scraping Tools", "Verification", "Direct Outreach", "Pipeline Integration"],
  },
  {
    title: "Web Systems",
    icon: Layout,
    description: "High-performance, AI-integrated web platforms designed for maximum conversion.",
    features: ["Next.js Speed", "Interactive UI", "AI Chat Integration", "SEO Optimization"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8"
          >
            SYSTEMS THAT <br />
            <span className="text-muted-foreground">OUTPERFORM.</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't sell tools. We build custom-engineered infrastructures that solve specific 
            revenue leakage problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-12 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all group"
            >
              <item.icon className="h-12 w-12 text-white mb-8 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold text-white mb-6">{item.title}</h2>
              <p className="text-muted-foreground mb-8 text-lg">{item.description}</p>
              <ul className="space-y-4 mb-10">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mr-3" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="rounded-full w-full h-14 border-white/20 hover:bg-white hover:text-black text-lg">
                Explore Solution
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="text-white text-xl py-6 hover:no-underline">How long does implementation take?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6">
                Most systems are designed, built, and deployed within 4-6 weeks, depending on complexity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="text-white text-xl py-6 hover:no-underline">Do you integrate with our existing CRM?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6">
                Yes, we specialize in seamless integrations with Salesforce, HubSpot, GoHighLevel, and custom databases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="text-white text-xl py-6 hover:no-underline">What is the expected ROI?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg pb-6">
                Our clients typically see a 5x-12x ROI within the first 6 months through saved man-hours and increased conversion rates.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
