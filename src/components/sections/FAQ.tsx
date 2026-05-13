"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What exactly do you build?",
    answer: "We build custom AI operational infrastructure. This includes autonomous voice agents, WhatsApp automation systems, internal workflow engines (n8n/Make), and high-converting landing systems. We focus on sealing revenue leaks and eliminating manual work."
  },
  {
    question: "Will I need to replace my existing software?",
    answer: "Almost never. Our systems are designed to sit on top of your existing stack. We integrate with your CRM (GoHighLevel, HubSpot, Salesforce), your email providers, and your calendar systems seamlessly."
  },
  {
    question: "How long does implementation take?",
    answer: "We focus on speed. Most individual solutions are deployed in 7-10 days. Full revenue systems are typically live within 2-3 weeks from the moment we finalize the scope."
  },
  {
    question: "What if the AI gives the wrong information to a customer?",
    answer: "Our AI systems are constrained by strict guardrails and specific knowledge bases provided by you. We use 'Agentic' workflows that check for accuracy before responding. We also include a human-in-the-loop fallback for complex queries."
  },
  {
    question: "How do you charge for your services?",
    answer: "We use a transparent 'Build + Management' model. You pay a one-time setup fee for the engineering and a monthly management fee for maintenance, optimization, and support. Infrastructure costs (API usage) are billed at cost."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-80 bg-background relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 gap-12">
          <div className="space-y-12 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black tracking-[1em] text-primary uppercase"
            >
              System Documentation
            </motion.div>
            <h2 className="text-7xl md:text-[9.5rem] font-bold tracking-tighter text-foreground leading-[0.8] text-mask-premium">
              CLEAR ANSWERS. <br />
              <span className="text-muted-foreground/10 italic font-medium">NO JARGON.</span>
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-[3.5rem] border border-border bg-foreground/[0.01] overflow-hidden group hover:border-primary/20 transition-all duration-1000"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-12 md:p-16 flex items-center justify-between text-left"
              >
                <span className="text-2xl md:text-4xl font-bold text-foreground tracking-tighter italic transition-colors group-hover:text-primary duration-700">
                  {faq.question}
                </span>
                <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-700 ${openIndex === i ? 'bg-primary border-primary text-primary-foreground rotate-180' : 'bg-foreground/[0.05] border-border text-foreground/40'}`}>
                  {openIndex === i ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-12 md:px-16 pb-12 md:pb-16">
                      <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-4xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
