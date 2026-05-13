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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-60 md:py-96 bg-background relative overflow-hidden mesh-animate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="ambient-glow opacity-25" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-60 gap-16">
          <div className="space-y-16 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] md:text-xs font-black tracking-[1em] text-primary uppercase"
            >
              System Documentation
            </motion.div>
            <h2 className="text-8xl md:text-[14rem] font-bold tracking-tightest text-foreground leading-[0.75] text-mask-premium">
              CLEAR ANSWERS. <br />
              <span className="text-muted-foreground/10 italic font-medium">NO JARGON.</span>
            </h2>
            <p className="text-2xl md:text-5xl text-muted-foreground font-medium tracking-tightest leading-tight max-w-5xl italic">
              "We strip away the complexity. We focus on the engineering. Here is exactly how we work."
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`rounded-[4rem] md:rounded-[6rem] border transition-all duration-1000 relative overflow-hidden group ${
                openIndex === i 
                ? 'border-primary/40 bg-primary/5 shadow-[0_40px_80px_-20px_oklch(var(--primary)/0.2)]' 
                : 'border-border bg-foreground/[0.01] hover:border-primary/20'
              }`}
            >
              {/* Dynamic Scanning Line for Open State */}
              {openIndex === i && <div className="scanning-line opacity-30 z-0" />}
              
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-16 md:p-24 flex items-center justify-between text-left relative z-10"
              >
                <span className={`text-4xl md:text-7xl font-bold tracking-tightest italic transition-all duration-1000 ${
                  openIndex === i ? 'text-primary' : 'text-foreground group-hover:text-primary/60'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border flex items-center justify-center transition-all duration-1000 shrink-0 ml-8 ${
                  openIndex === i 
                  ? 'bg-primary border-primary text-primary-foreground rotate-180 shadow-[0_0_30px_oklch(var(--primary)/0.5)]' 
                  : 'bg-foreground/[0.05] border-border text-foreground/40'
                }`}>
                  {openIndex === i ? <Minus size={32} strokeWidth={3} /> : <Plus size={32} strokeWidth={3} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10"
                  >
                    <div className="px-16 md:px-24 pb-16 md:pb-24">
                      <p className="text-2xl md:text-5xl text-muted-foreground font-medium tracking-tightest leading-[1.1] max-w-6xl italic border-l-2 border-primary/20 pl-12">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
