"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, Zap } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function ContactPage() {
  return (
    <main className="pt-40 pb-20 bg-background min-h-screen relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-0 z-0 dot-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
              >
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase">Contact Infrastructure</span>
              </motion.div>

              <h1 className="text-7xl md:text-[10rem] font-bold text-foreground tracking-tighter leading-[0.8] text-mask-premium">
                INITIATE<br />
                <span className="text-muted-foreground/10 italic">DEPLOYMENT.</span>
              </h1>
              
              <p className="text-2xl text-muted-foreground max-w-xl font-medium tracking-tight italic">
                "Ready to seal your revenue leaks? Our engineers are standing by to audit your current stack and propose a sovereign growth architecture."
              </p>
            </div>

            <div className="space-y-12">
               <div className="flex items-start space-x-8 group">
                  <div className="p-5 rounded-2xl bg-foreground/[0.03] border border-border group-hover:border-primary/20 transition-colors">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">Email Access</p>
                    <p className="text-2xl font-bold text-foreground tracking-tighter italic">business.marketingko@gmail.com</p>
                  </div>
               </div>

               <div className="flex items-start space-x-8 group">
                  <div className="p-5 rounded-2xl bg-foreground/[0.03] border border-border group-hover:border-primary/20 transition-colors">
                    <Zap className="text-primary w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">Response Time</p>
                    <p className="text-2xl font-bold text-foreground tracking-tighter italic">&lt; 12 Hours Guaranteed</p>
                  </div>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-[4rem] border border-border bg-foreground/[0.02] backdrop-blur-3xl space-y-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="space-y-8 relative z-10">
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-4">Full Name</label>
                  <Input placeholder="John Doe" className="h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-4">Work Email</label>
                  <Input placeholder="john@company.com" className="h-20 px-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-4">Monthly Revenue</label>
                <div className="grid grid-cols-3 gap-4">
                   {['<₹5L', '₹5L - ₹20L', '₹20L+'].map((opt) => (
                     <button key={opt} className="h-16 rounded-xl border border-border bg-foreground/[0.03] text-xs font-bold text-foreground/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                       {opt}
                     </button>
                   ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black text-foreground/40 uppercase tracking-[0.2em] ml-4">Project Brief</label>
                <Textarea placeholder="What is your biggest bottleneck?" className="min-h-[200px] p-8 rounded-2xl bg-background border-border focus:border-primary focus:ring-primary text-lg font-bold tracking-tight resize-none" />
              </div>

              <MagneticButton>
                <Button className="w-full h-24 rounded-2xl bg-primary text-primary-foreground text-2xl font-black shadow-primary/20 shadow-2xl hover:scale-[1.02] transition-transform group">
                   Initiate System Audit <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </MagneticButton>

              <p className="text-[10px] text-center text-muted-foreground/40 uppercase tracking-[0.2em]">
                By clicking initiate, you agree to our privacy protocol and data handling standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
