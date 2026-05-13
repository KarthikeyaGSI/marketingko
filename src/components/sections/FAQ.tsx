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
    <section className="py-40 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <div className="space-y-6 max-w-3xl">
            <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase">FAQ</span>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.8]">
              CLEAR ANSWERS.<br />
              <span className="text-muted-foreground/20 italic">NO JARGON.</span>
            </h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-[2.5rem] border border-white/5 bg-white/[0.01] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-10 flex items-center justify-between text-left group"
              >
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter italic transition-colors group-hover:text-primary">
                  {faq.question}
                </span>
                <div className={`p-3 rounded-full border transition-all duration-500 ${openIndex === i ? 'bg-primary border-primary text-white rotate-180' : 'bg-white/5 border-white/10 text-white/40'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-10 pb-10">
                      <p className="text-xl text-muted-foreground font-medium tracking-tight leading-relaxed max-w-3xl">
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
