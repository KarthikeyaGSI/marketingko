"use client";

import { motion } from "framer-motion";
import { PerspectiveCard } from "@/components/ui/PerspectiveCard";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

interface SystemPageProps {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  techStack: string[];
  features: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  icon: any;
  children?: React.ReactNode;
}

export function SystemLayout({ 
  title, 
  subtitle, 
  description, 
  outcomes, 
  techStack, 
  features, 
  faqs, 
  icon: Icon,
  children
}: SystemPageProps) {
  return (
    <div className="pt-40 pb-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,oklch(0.6_0.2_250_/_0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mb-60">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black tracking-[0.8em] text-primary mb-12 uppercase"
          >
            {subtitle}
          </motion.div>
          <h1 className="text-7xl md:text-[13rem] font-bold text-white tracking-tighter leading-[0.8] mb-16 text-mask-premium">
            {title.split(" ").map((word, i) => (
              <span key={i} className={i === title.split(" ").length - 1 ? "text-muted-foreground/10 italic" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-2xl md:text-4xl text-muted-foreground font-medium tracking-tighter leading-tight max-w-4xl italic">
            "{description}"
          </p>
        </div>

        {/* Features & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-60">
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-5xl font-bold text-white tracking-tighter">OPERATIONAL CAPABILITIES.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="p-10 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group">
                  <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">{f.title}</h4>
                  <p className="text-muted-foreground font-medium leading-relaxed text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-12">
            <div className="p-12 rounded-[3rem] border border-primary/20 bg-primary/5 backdrop-blur-3xl">
              <h3 className="text-xs font-black tracking-[0.4em] text-white/40 mb-8 uppercase">Validated Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-[10px] font-bold text-white uppercase tracking-widest">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xs font-black tracking-[0.4em] text-white/40 uppercase">Projected Outcomes</h3>
              <ul className="space-y-4">
                {outcomes.map((o, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-white tracking-tight">
                    <CheckCircle2 className="h-4 w-4 text-primary mr-3" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Custom Content Injection */}
        {children}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-60">
          <h2 className="text-5xl font-bold text-white mb-20 text-center tracking-tighter">TECHNICAL AUDIT.</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 bg-white/[0.01] rounded-2xl px-8 hover:bg-white/[0.03] transition-colors">
                <AccordionTrigger className="text-white text-xl font-bold py-8 hover:no-underline tracking-tighter text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg pb-8 font-medium tracking-tight leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div className="text-center py-40 bg-white/[0.02] rounded-[4rem] border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10" />
          <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-12">DEPLOY THIS <br /> <span className="text-muted-foreground/20 italic">PROTOCOL.</span></h3>
          <MagneticButton>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-16 h-20 text-2xl bg-primary text-white hover:bg-primary/90 font-black shadow-2xl transition-all duration-700 hover:scale-105">
                Initiate Deployment <ArrowRight className="ml-4 h-6 w-6" />
              </Button>
            </Link>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
