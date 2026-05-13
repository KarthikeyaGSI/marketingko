"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const businessTypes = [
  "E-commerce / D2C",
  "SaaS / Tech",
  "Professional Services",
  "Education / Coaching",
  "Real Estate / Local",
  "Other"
];

const businessSizes = [
  "Solopreneur",
  "2-10 Employees",
  "11-50 Employees",
  "51-200 Employees",
  "200+ Employees"
];

function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("");
  const [type, setType] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const solutionId = searchParams.get("solution");
    const protocolId = searchParams.get("protocol");
    
    if (solutionId) {
      setSubject(`Inquiry: System Module [${solutionId.toUpperCase()}]`);
    } else if (protocolId) {
      setSubject(`Inquiry: Core Protocol [${protocolId.toUpperCase()}]`);
    }
  }, [searchParams]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="p-12 md:p-20 rounded-[4rem] border border-border bg-foreground/[0.02] backdrop-blur-3xl space-y-12 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="space-y-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Full_Name *</label>
            <Input placeholder="Karthikeya" className="h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner" />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Business_Name *</label>
            <Input placeholder="Marketing Ko" className="h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Secure_Email *</label>
            <Input placeholder="you@company.com" className="h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner" />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Phone_WhatsApp *</label>
            <Input placeholder="+91 98765 43210" className="h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Business_Type *</label>
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full h-20 px-8 rounded-2xl bg-background border border-border focus:border-primary focus:outline-none text-lg font-bold tracking-tight shadow-inner appearance-none cursor-pointer"
            >
              <option value="" disabled>Select type</option>
              {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Business_Size *</label>
            <select 
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full h-20 px-8 rounded-2xl bg-background border border-border focus:border-primary focus:outline-none text-lg font-bold tracking-tight shadow-inner appearance-none cursor-pointer"
            >
              <option value="" disabled>Select size</option>
              {businessSizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic">Biggest_Challenge *</label>
          <Textarea 
            placeholder="What is the biggest operational or growth challenge your business faces right now?" 
            className="min-h-[180px] p-8 rounded-[2rem] bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight resize-none shadow-inner leading-relaxed" 
          />
        </div>

        <MagneticButton>
          <Button className="w-full h-24 rounded-3xl bg-primary text-primary-foreground text-xl font-black shadow-[0_30px_60px_-15px_oklch(var(--primary)/0.4)] hover:bg-foreground hover:text-background transition-all duration-1000 group border-none uppercase tracking-widest">
             Initialize Audit <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-3 transition-transform duration-700" />
          </Button>
        </MagneticButton>

        <p className="text-[9px] text-center text-muted-foreground/30 uppercase tracking-[0.3em] italic">
          Response efficiency guaranteed within 24 hours.
        </p>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <main className="pt-40 md:pt-60 pb-40 bg-background min-h-screen relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Content Side */}
          <div className="lg:col-span-5 space-y-20 pt-10">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-primary/20 bg-primary/5"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase italic">Access Terminal Open</span>
              </motion.div>

              <h1 className="text-6xl md:text-[8rem] font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase">
                BOOK YOUR FREE<br />
                <span className="text-muted-foreground/10 italic font-medium">BUSINESS AUDIT.</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-muted-foreground max-w-xl font-medium tracking-tightest leading-tight italic">
                "Start with a free 30-minute audit. We'll show you exactly where you're losing money and what to build first. No obligation. No pitch. Just clarity."
              </p>
            </div>

            <div className="space-y-12">
               <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic border-l-2 border-primary pl-6">What to expect:</p>
               <ul className="space-y-8">
                  {[
                    "We review your current workflows or website",
                    "Identify 2–3 immediate quick wins",
                    "Map out the highest-ROI system for your business",
                    "Give you a estimate of the solution",
                    "We respond within 24 hours"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center space-x-6 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-foreground/[0.03] border border-border flex items-center justify-center group-hover:border-primary/50 transition-all duration-700">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg md:text-xl font-bold text-foreground/60 italic tracking-tight group-hover:text-foreground transition-colors">{item}</span>
                    </motion.li>
                  ))}
               </ul>
            </div>
            
            <div className="pt-10 border-t border-border/50">
               <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.6em] italic mb-4">Direct_Line</p>
               <p className="text-2xl md:text-4xl font-bold text-foreground tracking-tightest italic lowercase hover:text-primary transition-colors cursor-pointer">business.marketingko@gmail.com</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-[800px] w-full rounded-[4rem] bg-foreground/[0.02] animate-pulse" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
    </main>
  );
}
