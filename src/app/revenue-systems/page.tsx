"use client";

import { motion } from "framer-motion";
import { RevenueSystems } from "@/components/sections/RevenueSystems";
import { IndividualSolutions } from "@/components/sections/IndividualSolutions";
import { CTA } from "@/components/sections/CTA";

export default function RevenueSystemsPage() {
  return (
    <main className="pt-20">
      <section className="py-40 bg-black relative">
        <div className="container mx-auto px-6 text-center space-y-8">
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <span className="text-[10px] font-black tracking-[0.8em] text-white uppercase">Growth Architecture</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl md:text-[12rem] font-bold text-white tracking-tighter leading-[0.8] text-mask-premium"
            >
              REVENUE<br />
              <span className="text-muted-foreground/10 italic">SYSTEMS.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium tracking-tight italic"
            >
              "The Big Three: Three of the most expensive problems in any growing business — each one fixed completely."
            </motion.p>
        </div>
      </section>

      <RevenueSystems />
      <IndividualSolutions />
      <CTA />
    </main>
  );
}
