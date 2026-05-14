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
    <section className="py-24 md:py-40 bg-background relative overflow-hidden scene-divider">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="absolute inset-0 dot-grid opacity-15 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      <div className="glow-orb w-[350px] h-[350px] bg-primary/8 bottom-[10%] right-[-5%]" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="space-y-6 md:space-y-10 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] md:text-[11px] font-black tracking-[0.8em] text-primary uppercase"
            >
              How We Exactly Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.05em] text-foreground leading-[0.9]"
            >
              CLEAR ANSWERS. <br />
              <span className="text-muted-foreground/15 italic font-medium">NO JARGON.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium tracking-tight leading-[1.3] max-w-3xl italic"
            >
              &ldquo;We strip away the complexity. We focus on the engineering. Here is exactly how we work.&rdquo;
            </motion.p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 md:space-y-5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`rounded-2xl md:rounded-3xl border transition-all duration-700 relative overflow-hidden group ${
                openIndex === i 
                ? 'border-primary/40 bg-primary/5 shadow-[0_20px_50px_-10px_oklch(var(--primary)/0.15)]' 
                : 'border-border/50 bg-foreground/[0.01] hover:border-primary/20'
              }`}
            >
              {/* Scanning line */}
              {openIndex === i && <div className="scanning-line opacity-20 z-0" />}
              
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-8 flex items-center justify-between text-left relative z-10"
              >
                <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight italic transition-all duration-700 pr-4 ${
                  openIndex === i ? 'text-primary' : 'text-foreground group-hover:text-primary/60'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-700 shrink-0 ${
                  openIndex === i 
                  ? 'bg-primary border-primary text-primary-foreground rotate-180 shadow-[0_0_20px_oklch(var(--primary)/0.4)]' 
                  : 'bg-foreground/[0.03] border-border text-foreground/40'
                }`}>
                  {openIndex === i ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10"
                  >
                    <div className="px-5 md:px-8 pb-5 md:pb-8">
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium tracking-tight leading-[1.5] max-w-3xl italic border-l-2 border-primary/20 pl-5 md:pl-6">
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
