"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Mail, Zap, ArrowRight, CheckCircle2, Loader2, Sparkles, Phone, User, Building2, MessageSquare, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
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

type FormStatus = "idle" | "submitting" | "success" | "error";

function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    businessSize: "",
    challenge: ""
  });

  useEffect(() => {
    const solutionId = searchParams.get("solution");
    const protocolId = searchParams.get("protocol");
    
    // Auto-fill challenge if coming from a specific solution/protocol
    if (solutionId) {
      setFormData(prev => ({ ...prev, challenge: `Inquiry regarding System Module: ${solutionId.toUpperCase()}` }));
    } else if (protocolId) {
      setFormData(prev => ({ ...prev, challenge: `Inquiry regarding Core Protocol: ${protocolId.toUpperCase()}` }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      // Reform Headless Integration
      // Using the provided ID as the form ID for headless submission
      const formId = "aea77d87-81c5-4e0f-b122-e4944574b17e";
      const response = await fetch(`https://api.reform.app/v1/forms/${formId}/submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          answers: {
            "full_name": formData.fullName,
            "business_name": formData.businessName,
            "email": formData.email,
            "phone": formData.phone,
            "business_type": formData.businessType,
            "business_size": formData.businessSize,
            "challenge": formData.challenge
          }
        })
      });

      if (!response.ok) throw new Error("Transmission failed");
      
      setStatus("success");
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
      // Fallback success for demo/dev if API fails due to CORS or wrong ID
      // setStatus("success"); 
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        className="p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] border border-primary/20 bg-primary/5 backdrop-blur-3xl flex flex-col items-center text-center space-y-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.1),transparent)] pointer-events-none" />
        
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_40px_oklch(var(--primary)/0.5)]"
          >
            <CheckCircle2 className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-primary/30"
          />
        </div>

        <div className="space-y-4 relative z-10">
          <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tightest uppercase italic">
            Audit Initialized.
          </h3>
          <p className="text-xl text-muted-foreground font-medium tracking-tight max-w-md mx-auto">
            Our systems have captured your data. An engineer will review your infrastructure and reach out within 24 hours.
          </p>
        </div>

        <Button 
          variant="outline" 
          onClick={() => setStatus("idle")}
          className="rounded-2xl px-10 h-16 border-border/50 hover:bg-foreground hover:text-background transition-all duration-700 font-bold uppercase tracking-widest italic"
        >
          Send Another Signal
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-border bg-foreground/[0.02] backdrop-blur-3xl space-y-10 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
            <User className="w-3 h-3 text-primary" /> Full Name *
          </label>
          <Input 
            required
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            placeholder="Karthikeya" 
            className="h-16 md:h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
            <Building2 className="w-3 h-3 text-primary" /> Business Name *
          </label>
          <Input 
            required
            value={formData.businessName}
            onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
            placeholder="Marketing Ko" 
            className="h-16 md:h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
            <Mail className="w-3 h-3 text-primary" /> Secure Email *
          </label>
          <Input 
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="you@company.com" 
            className="h-16 md:h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight shadow-inner transition-all duration-500" 
          />
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
            <Phone className="w-3 h-3 text-primary" /> Phone or WhatsApp Preferred *
          </label>
          <div className="phone-input-container">
            <PhoneInput
              defaultCountry="in"
              value={formData.phone}
              onChange={(phone) => setFormData(prev => ({ ...prev, phone }))}
              inputClassName="!h-16 md:!h-20 !w-full !px-8 !rounded-2xl !bg-background !border-border focus:!border-primary focus:!ring-primary !text-lg !font-bold !tracking-tight !shadow-inner !transition-all !duration-500 !text-foreground"
              containerClassName="!w-full"
              countrySelectorStyleProps={{
                buttonClassName: "!h-16 md:!h-20 !rounded-2xl !bg-background !border-border !px-4 hover:!bg-primary/5 transition-all !mr-2",
                dropdownClassName: "!bg-background !border-border !rounded-2xl !shadow-2xl !z-50",
              }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="space-y-3">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
            <Briefcase className="w-3 h-3 text-primary" /> Business Type *
          </label>
          <div className="relative">
            <select 
              required
              value={formData.businessType}
              onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
              className="w-full h-16 md:h-20 px-8 rounded-2xl bg-background border border-border focus:border-primary focus:outline-none text-lg font-bold tracking-tight shadow-inner appearance-none cursor-pointer pr-16 transition-all duration-500"
            >
              <option value="" disabled>Select Type</option>
              {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <ArrowRight className="h-5 w-5 rotate-90" />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
            <Zap className="w-3 h-3 text-primary" /> Business Size *
          </label>
          <div className="relative">
            <select 
              required
              value={formData.businessSize}
              onChange={(e) => setFormData(prev => ({ ...prev, businessSize: e.target.value }))}
              className="w-full h-16 md:h-20 px-8 rounded-2xl bg-background border border-border focus:border-primary focus:outline-none text-lg font-bold tracking-tight shadow-inner appearance-none cursor-pointer pr-16 transition-all duration-500"
            >
              <option value="" disabled>Select Size</option>
              {businessSizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
              <ArrowRight className="h-5 w-5 rotate-90" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.3em] ml-4 italic flex items-center gap-2">
          <MessageSquare className="w-3 h-3 text-primary" /> Biggest Challenge *
        </label>
        <Textarea 
          required
          value={formData.challenge}
          onChange={(e) => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
          placeholder="What is the biggest operational or growth challenge your business faces right now?" 
          className="min-h-[150px] p-8 rounded-[1.5rem] md:rounded-[2rem] bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight resize-none shadow-inner leading-relaxed transition-all duration-500" 
        />
      </div>

      <MagneticButton>
        <Button 
          disabled={status === "submitting"}
          className="w-full h-20 md:h-24 rounded-2xl md:rounded-3xl bg-primary text-primary-foreground text-lg md:text-xl font-black shadow-[0_30px_60px_-15px_oklch(var(--primary)/0.4)] hover:bg-foreground hover:text-background transition-all duration-1000 group border-none uppercase tracking-widest relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === "submitting" ? (
              <motion.div 
                key="submitting"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-4"
              >
                <Loader2 className="w-8 h-8 animate-spin" /> Transmitting Signal...
              </motion.div>
            ) : (
              <motion.div 
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-4"
              >
                Initialize Audit <ArrowRight className="ml-4 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-3 transition-transform duration-700" />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
        </Button>
      </MagneticButton>

      <p className="text-[9px] text-center text-muted-foreground/30 uppercase tracking-[0.3em] italic">
        Response efficiency guaranteed within 24 hours.
      </p>
    </motion.form>
  );
}

export function ContactContent() {
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

              <h1 className="text-5xl md:text-[8rem] font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase">
                BOOK YOUR FREE<br />
                <span className="text-muted-foreground/10 italic font-medium">BUSINESS AUDIT.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl font-medium tracking-tightest leading-tight italic">
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
               <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.6em] italic mb-4">Direct Line</p>
               <p className="text-xl md:text-3xl font-bold text-foreground tracking-tightest italic lowercase hover:text-primary transition-colors cursor-pointer">business.marketingko@gmail.com</p>
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
