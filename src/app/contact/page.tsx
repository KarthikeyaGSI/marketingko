"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                LET'S <br />
                <span className="text-muted-foreground">CONNECT.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Ready to automate your growth? Reach out for a strategy session or a custom AI audit.
              </p>

              <div className="space-y-6 pt-12">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email Us</p>
                    <p className="text-white font-medium">hello@marketingko.ai</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Call Us</p>
                    <p className="text-white font-medium">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">First Name</label>
                    <Input placeholder="John" className="bg-black/50 border-white/10 h-12 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Last Name</label>
                    <Input placeholder="Doe" className="bg-black/50 border-white/10 h-12 rounded-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-black/50 border-white/10 h-12 rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Service Interested In</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-lg h-12 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20">
                    <option>AI Automations</option>
                    <option>AI Voice Agents</option>
                    <option>Custom AI Systems</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea placeholder="Tell us about your goals..." className="bg-black/50 border-white/10 min-h-[150px] rounded-lg" />
                </div>
                <Button className="w-full h-14 bg-white text-black font-bold text-lg hover:bg-white/90 rounded-xl">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
