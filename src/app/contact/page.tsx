"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, Zap, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";

function ContactForm() {
  const searchParams = useSearchParams();
  const [subject, setSubject] = useState("");

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
      className="p-16 md:p-24 rounded-[4rem] md:rounded-[6rem] border border-border bg-foreground/[0.02] backdrop-blur-3xl space-y-12 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <label className="text-[12px] font-black text-foreground/40 uppercase tracking-[0.4em] ml-6 italic">Personnel_Name</label>
            <Input placeholder="John Doe" className="h-24 md:h-28 px-10 rounded-3xl bg-background border-border focus:border-primary focus:ring-primary text-xl font-bold tracking-tight shadow-inner" />
          </div>
          <div className="space-y-6">
            <label className="text-[12px] font-black text-foreground/40 uppercase tracking-[0.4em] ml-6 italic">Secure_Email</label>
            <Input placeholder="john@company.com" className="h-24 md:h-28 px-10 rounded-3xl bg-background border-border focus:border-primary focus:ring-primary text-xl font-bold tracking-tight shadow-inner" />
          </div>
        </div>

        <div className="space-y-6">
          <label className="text-[12px] font-black text-foreground/40 uppercase tracking-[0.4em] ml-6 italic">Deployment_Scope</label>
          <div className="grid grid-cols-3 gap-6">
             {['<₹5L', '₹5L - ₹20L', '₹20L+'].map((opt) => (
               <button key={opt} className="h-20 md:h-24 rounded-2xl border border-border bg-foreground/[0.03] text-[10px] md:text-xs font-black text-foreground/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-700 uppercase tracking-widest shadow-lg">
                 {opt}
               </button>
             ))}
          </div>
        </div>

        <div className="space-y-6">
          <label className="text-[12px] font-black text-foreground/40 uppercase tracking-[0.4em] ml-6 italic">System_Requirements</label>
          <Textarea 
            value={subject ? `${subject}\n\n` : ""}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="What is your biggest operational bottleneck?" 
            className="min-h-[250px] p-10 rounded-[3rem] bg-background border-border focus:border-primary focus:ring-primary text-xl font-bold tracking-tight resize-none shadow-inner leading-relaxed" 
          />
        </div>

        <MagneticButton>
          <Button className="w-full h-28 md:h-32 rounded-[3rem] bg-primary text-primary-foreground text-2xl font-black shadow-[0_40px_80px_-20px_oklch(var(--primary)/0.4)] hover:bg-foreground hover:text-background transition-all duration-1000 group border-none uppercase tracking-widest">
             Initialize System Audit <ArrowRight className="ml-6 h-10 w-10 group-hover:translate-x-4 transition-transform duration-700" />
          </Button>
        </MagneticButton>

        <p className="text-[10px] text-center text-muted-foreground/30 uppercase tracking-[0.3em] italic leading-loose">
          Deployment protocols active. By clicking initiate, you agree to our privacy architecture and data sovereignty standards.
        </p>
      </div>
    </motion.div>
  );
}

export default function ContactPage() {
  return (
    <main className="pt-60 md:pt-80 pb-40 bg-background min-h-screen relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
          <div className="space-y-20">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-6 px-10 py-4 rounded-full border border-primary/20 bg-primary/5 shadow-xl"
              >
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-[12px] font-black tracking-[1em] text-foreground uppercase italic">Contact Infrastructure</span>
              </motion.div>

              <h1 className="text-8xl md:text-[14rem] font-bold text-foreground tracking-tightest leading-[0.75] text-mask-premium uppercase">
                INITIATE<br />
                <span className="text-muted-foreground/10 italic font-medium">DEPLOYMENT.</span>
              </h1>
              
              <p className="text-3xl md:text-5xl text-muted-foreground max-w-2xl font-medium tracking-tightest leading-tight italic">
                "Ready to seal your revenue leaks? Our engineers are standing by to audit your current stack and propose a sovereign growth architecture."
              </p>
            </div>

            <div className="space-y-16">
               <div className="flex items-start space-x-10 group">
                  <div className="p-8 rounded-[2rem] bg-foreground/[0.03] border border-border group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000 shadow-xl">
                    <Mail className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.6em] italic">Access_Terminal</p>
                    <p className="text-3xl md:text-5xl font-bold text-foreground tracking-tightest italic leading-none transition-colors duration-700 group-hover:text-primary lowercase">business.marketingko@gmail.com</p>
                  </div>
               </div>

               <div className="flex items-start space-x-10 group">
                  <div className="p-8 rounded-[2rem] bg-foreground/[0.03] border border-border group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-1000 shadow-xl">
                    <Zap className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.6em] italic">Response_Efficiency</p>
                    <p className="text-3xl md:text-5xl font-bold text-foreground tracking-tightest italic leading-none transition-colors duration-700 group-hover:text-primary uppercase">&lt; 12HR Guaranteed</p>
                  </div>
               </div>
            </div>
          </div>

          <Suspense fallback={<div className="h-[800px] w-full rounded-[4rem] bg-foreground/[0.02] animate-pulse" />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,oklch(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
    </main>
  );
}
