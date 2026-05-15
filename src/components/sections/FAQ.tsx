"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Plus, Minus, HelpCircle, Shield } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const faqs = [
  {
    question: "What exactly do you build?",
    answer: "We engineer custom AI operational infrastructure. Unlike 'GPT-wrappers', we deploy autonomous logic layers that manage your revenue pipeline. This includes sub-second voice agents, deep-flow WhatsApp automations, and self-healing internal workflows (n8n/Make/Python). We focus on sealing revenue leaks, not just adding features."
  },
  {
    question: "Will I need to replace my existing software?",
    answer: "No. Our Growth OS is designed to be 'stack-agnostic'. We sit on top of your existing CRM (GoHighLevel, HubSpot, Salesforce) and legacy tools. We act as the neural fabric that connects your disparate systems into a unified, autonomous engine."
  },
  {
    question: "How long until I see a measurable ROI?",
    answer: "Our 'Time-to-Value' is engineered for speed. Individual nodes are deployed in 7-10 days. Most clients see significant recaptured revenue (often covering the setup cost) within the first 14-21 days of full system deployment."
  },
  {
    question: "Is my proprietary data secure?",
    answer: "Security is built into our core architecture. We use enterprise-grade AES-256 encryption for data at rest and in transit. Your AI is trained on a siloed, private instance. We are fully compliant with HIPAA, GDPR, and PCI-DSS protocols where required."
  },
  {
    question: "How are you different from a standard AI agency?",
    answer: "Agencies sell hours and deliverables. We sell Infrastructure and Outcomes. Most agencies use standard templates; we write custom logic and deploy redundant systems with live telemetry monitoring. We are engineers, not marketers with GPT subscriptions."
  },
  {
    question: "Do you handle my specific industry?",
    answer: "We focus on high-intent sectors where leads have high lifetime value. This includes Real Estate, Insurance, Healthcare, Finance, and E-commerce. If your revenue depends on qualifying and converting human intent, our system will work for you."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 60,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-40 md:py-80 bg-background relative overflow-hidden grain-system">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-40 md:mb-60 gap-12">
          <div className="space-y-12 max-w-5xl">
            <div className="reveal-item inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
              <HelpCircle className="w-3 h-3 text-primary" />
              <span className="text-[10px] font-black tracking-[1em] text-primary uppercase italic">Protocols & Logic</span>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-6xl md:text-9xl font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase reveal-item">
                CLEAR ANSWERS. <br />
                <span className="text-primary italic font-medium">NO JARGON.</span>
              </h2>
              <p className="text-xl md:text-3xl text-muted-foreground font-medium tracking-tightest leading-tight italic border-l-4 border-primary/20 pl-8 reveal-item">
                "We strip away the complexity. We focus on the engineering. Here is exactly how we work."
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal-item rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-1000 relative overflow-hidden group ${
                openIndex === i 
                ? 'border-primary/40 bg-primary/5 shadow-[0_40px_80px_-20px_oklch(var(--primary)/0.15)]' 
                : 'border-border/50 bg-foreground/[0.01] hover:border-primary/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-12 flex items-center justify-between text-left relative z-10"
              >
                <span className={`text-2xl md:text-4xl font-black tracking-tightest uppercase italic transition-all duration-1000 pr-8 ${
                  openIndex === i ? 'text-primary' : 'text-foreground/40 group-hover:text-foreground'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border flex items-center justify-center transition-all duration-1000 shrink-0 ${
                  openIndex === i 
                  ? 'bg-primary border-primary text-black rotate-180 shadow-[0_0_30px_oklch(var(--primary)/0.4)]' 
                  : 'bg-foreground/[0.03] border-border text-foreground/20'
                }`}>
                  {openIndex === i ? <Minus size={24} strokeWidth={4} /> : <Plus size={24} strokeWidth={4} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10"
                  >
                    <div className="px-8 md:px-12 pb-12">
                      <p className="text-lg md:text-2xl text-muted-foreground font-medium tracking-tightest leading-relaxed italic border-l-2 border-primary/20 pl-8">
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
