"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "aea77d87-81c5-4e0f-b122-e4944574b17e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setIsSuccess(true);
      setIsSubmitting(false);
    } else {
      console.error("Error", data);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[150px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter leading-[0.8] text-mask">
                SECURE YOUR <br />
                <span className="text-muted-foreground/30">SLOT.</span>
              </h1>
              <p className="text-2xl text-muted-foreground max-w-md leading-tight font-medium tracking-tight">
                Our infrastructure is built for scale, but our capacity for new partners is finite. 
                Apply for an audit.
              </p>

              <div className="space-y-10 pt-12">
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Infrastructure Support</p>
                    <p className="text-xl text-white font-bold">hello@marketingko.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Global HQ</p>
                    <p className="text-xl text-white font-bold">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <CheckCircle2 size={64} className="text-green-500 animate-bounce" />
                <h2 className="text-3xl font-bold text-white">Transmission Received</h2>
                <p className="text-muted-foreground">Our systems are analyzing your data. We will reach out within 12 hours.</p>
                <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full">Send Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Full Name</label>
                    <Input name="name" required placeholder="John Doe" className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-1 focus:ring-white/20" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Organization</label>
                    <Input name="company" required placeholder="Acme Corp" className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-1 focus:ring-white/20" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <Input name="email" type="email" required placeholder="john@acme.com" className="bg-white/5 border-white/10 h-14 rounded-xl focus:ring-1 focus:ring-white/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Objective</label>
                  <select name="objective" className="w-full bg-white/5 border border-white/10 rounded-xl h-14 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 appearance-none">
                    <option className="bg-black">Revenue Infrastructure</option>
                    <option className="bg-black">AI Voice Systems</option>
                    <option className="bg-black">Custom Automations</option>
                    <option className="bg-black">Scale Audit</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Message</label>
                  <Textarea name="message" required placeholder="Tell us about your growth targets..." className="bg-white/5 border-white/10 min-h-[120px] rounded-xl focus:ring-1 focus:ring-white/20" />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-16 bg-white text-black font-bold text-xl hover:bg-white/90 rounded-2xl transition-all duration-500 hover:scale-[1.02] active:scale-95"
                >
                  {isSubmitting ? "Transmitting..." : "Initiate Audit"} <Send className="ml-3 h-5 w-5" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
