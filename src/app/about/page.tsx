"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-40 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-12"
          >
            BORN TO <br />
            <span className="text-muted-foreground">AUTOMATE.</span>
          </motion.h1>
          <p className="text-2xl text-muted-foreground leading-relaxed italic">
            "We believe that human potential is wasted on repetitive tasks. 
            Our mission is to build the digital infrastructure that frees visionaries to focus on what matters."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8 tracking-tighter">OUR PHILOSOPHY</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Marketing Ko was founded on the principle of extreme efficiency. In a world 
                cluttered with "AI experts," we focus on the boring, high-impact details that 
                actually move the needle.
              </p>
              <p>
                We don't build toys. We build assets. Every line of code and every AI 
                prompt we write is designed with a single goal: Revenue.
              </p>
            </div>
          </div>
          <div className="relative aspect-video bg-white/5 rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center">
            <span className="text-white/20 font-bold tracking-widest uppercase">Cinematic Brand Video</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
          <div className="p-10 border-l border-white/10">
            <h3 className="text-6xl font-bold text-white mb-4">01</h3>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Precision</h4>
            <p className="text-muted-foreground">No fluff. No filler. Just high-precision engineering for elite results.</p>
          </div>
          <div className="p-10 border-l border-white/10">
            <h3 className="text-6xl font-bold text-white mb-4">02</h3>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Speed</h4>
            <p className="text-muted-foreground">We move at the speed of AI. Rapid deployment and instant optimization.</p>
          </div>
          <div className="p-10 border-l border-white/10">
            <h3 className="text-6xl font-bold text-white mb-4">03</h3>
            <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Growth</h4>
            <p className="text-muted-foreground">Every system is an engine designed for one thing: Scaling your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
