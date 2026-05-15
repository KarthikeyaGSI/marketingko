"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Mail, Zap, ArrowRight, CheckCircle2, Phone, Send, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const solutionId = searchParams.get("solution");
    const protocolId = searchParams.get("protocol");
    
    if (solutionId) {
      setSubject(`Inquiry: System Module [${solutionId.toUpperCase()}]`);
    } else if (protocolId) {
      setSubject(`Inquiry: Core Protocol [${protocolId.toUpperCase()}]`);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with cinematic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Cinematic success animation
      gsap.to(formRef.current, {
        scale: 0.95,
        opacity: 0,
        filter: "blur(20px)",
        duration: 0.8,
        ease: "power4.inOut"
      });
    }, 2500);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        className="p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] border border-primary/30 bg-primary/5 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 text-center min-h-[600px]"
      >
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shadow-[0_0_50px_oklch(var(--primary)/0.3)]">
          <CheckCircle2 className="w-12 h-12 text-primary" />
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tightest">Submission Received</h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto italic">
            "Your growth audit has been initialized. Our systems are analyzing your request. A strategist will contact you within 24 hours."
          </p>
        </div>
        <div className="pt-8 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 px-6 py-2 rounded-full border border-primary/20 bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black tracking-widest text-primary uppercase">Analyzing_Parameters: 100%</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => window.location.href = '/'}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/40 hover:text-primary transition-colors"
          >
            Return to Command Center
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={formRef}
      initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 md:p-16 lg:p-20 rounded-[3rem] md:rounded-[4rem] border border-border bg-foreground/[0.02] backdrop-blur-3xl space-y-12 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic">Full Name</label>
            <Input 
              required
              placeholder="e.g. John Doe" 
              className="h-16 md:h-20 px-8 rounded-2xl bg-background/50 border-border/50 focus:border-primary/50 focus:ring-0 text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
            />
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic">Business Name</label>
            <Input 
              required
              placeholder="e.g. Acme Corp" 
              className="h-16 md:h-20 px-8 rounded-2xl bg-background/50 border-border/50 focus:border-primary/50 focus:ring-0 text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic">Work Email</label>
            <Input 
              required
              type="email"
              placeholder="john@acme.com" 
              className="h-16 md:h-20 px-8 rounded-2xl bg-background/50 border-border/50 focus:border-primary/50 focus:ring-0 text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
            />
          </div>
          <div className="space-y-4 relative">
            <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic flex items-center justify-between">
              <span>Phone Number</span>
              <span className="text-[8px] text-primary/60">WhatsApp Preferred</span>
            </label>
            <div className="relative group/phone">
              <Input 
                required
                placeholder="+91 00000 00000" 
                className="h-16 md:h-20 px-8 rounded-2xl bg-background/50 border-border/50 focus:border-primary/50 focus:ring-0 text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
              />
              <Phone className="absolute right-8 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/40 group-focus-within/phone:text-primary transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic">Business Type</label>
            <div className="relative group/select">
              <select 
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full h-16 md:h-20 px-8 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none text-lg font-bold tracking-tight shadow-inner appearance-none cursor-pointer pr-16 transition-all duration-500"
              >
                <option value="" disabled>Select category</option>
                {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within/select:text-primary transition-colors">
                <ArrowRight className="h-5 w-5 rotate-90" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic">Monthly Revenue</label>
            <div className="relative group/select">
              <select 
                required
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full h-16 md:h-20 px-8 rounded-2xl bg-background/50 border border-border/50 focus:border-primary/50 focus:outline-none text-lg font-bold tracking-tight shadow-inner appearance-none cursor-pointer pr-16 transition-all duration-500"
              >
                <option value="" disabled>Select range</option>
                {businessSizes.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-focus-within/select:text-primary transition-colors">
                <ArrowRight className="h-5 w-5 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-[10px] font-black text-foreground/60 uppercase tracking-[0.3em] ml-4 italic">Current Challenges</label>
          <Textarea 
            required
            placeholder="Tell us about your current operational bottlenecks or growth goals..." 
            className="min-h-[150px] md:min-h-[180px] p-8 rounded-[1.5rem] md:rounded-[2rem] bg-background/50 border-border/50 focus:border-primary/50 focus:ring-0 text-lg font-bold tracking-tight resize-none shadow-inner leading-relaxed transition-all duration-500" 
          />
        </div>

        <div className="pt-4">
          <MagneticButton>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-20 md:h-24 rounded-2xl md:rounded-3xl bg-primary text-primary-foreground text-lg md:text-xl font-black shadow-[0_30px_60px_-15px_oklch(var(--primary)/0.4)] hover:bg-foreground hover:text-background transition-all duration-1000 group border-none uppercase tracking-widest relative overflow-hidden"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-4">
                  <Loader2 className="w-8 h-8 animate-spin" />
                  <span>Processing_Data...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  Initialize Revenue Audit 
                  <Send className="ml-4 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-700" />
                </div>
              )}
              {/* Button light sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
            </Button>
          </MagneticButton>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
          <p className="text-[9px] text-muted-foreground/30 uppercase tracking-[0.3em] italic">
            Secure_Encryption_Active (AES-256)
          </p>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-3 h-3 text-primary/40" />
            <span className="text-[9px] text-muted-foreground/30 uppercase tracking-[0.3em] italic">Data Privacy Guaranteed</span>
          </div>
        </div>
      </form>
    </motion.div>
  );
}

export function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.out",
      filter: "blur(20px)"
    });

    gsap.from(".reveal-item", {
      x: -50,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="pt-40 md:pt-60 pb-40 bg-background min-h-screen relative overflow-hidden grain-system">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* Content Side */}
          <div className="lg:col-span-5 space-y-20 pt-10">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-xl"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase italic">Terminal: Active_Session</span>
              </motion.div>

              <div className="space-y-8">
                <h1 className="text-5xl md:text-[8rem] font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase reveal-text">
                  SECURE YOUR<br />
                  <span className="text-primary italic font-medium">REVENUE AUDIT.</span>
                </h1>
                
                <p className="text-xl md:text-3xl text-muted-foreground max-w-xl font-medium tracking-tightest leading-tight italic reveal-text">
                  "The gap between your current revenue and your potential is a <strong>Systems Issue</strong>. Let's fix it."
                </p>
              </div>
            </div>

            <div className="space-y-12">
               <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] italic border-l-2 border-primary pl-6 reveal-item">Audit Protocol:</p>
               <ul className="space-y-8">
                  {[
                    "Structural analysis of current funnels",
                    "Identification of 'Leakage Points'",
                    "ROI projection for autonomous systems",
                    "Implementation roadmap development",
                    "24-hour response throughput"
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-center space-x-6 group reveal-item"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-foreground/[0.03] border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-700 shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-lg md:text-2xl font-bold text-foreground/60 italic tracking-tight group-hover:text-foreground transition-all duration-500">{item}</span>
                    </div>
                  ))}
               </ul>
            </div>
            
            <div className="pt-10 border-t border-border/50 reveal-item">
               <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.6em] italic mb-4">Direct Communication</p>
               <a 
                 href="mailto:business.marketingko@gmail.com"
                 className="text-xl md:text-3xl font-bold text-foreground tracking-tightest italic lowercase hover:text-primary transition-all duration-500 inline-block group"
               >
                 business.marketingko@gmail.com
                 <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />
               </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-[800px] w-full rounded-[4rem] bg-foreground/[0.02] animate-pulse border border-border/50" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </main>
  );
}
