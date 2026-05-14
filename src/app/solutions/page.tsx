"use client";

import { InfrastructureFlow } from "@/components/sections/InfrastructureFlow";
import { Performance } from "@/components/sections/Performance";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { CTA } from "@/components/sections/CTA";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      <SolutionsGrid />
      <Performance />
      <InfrastructureFlow />
      
      {/* Revenue Systems Promo */}
      <section className="py-40 bg-foreground text-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-[10px] font-black tracking-[1em] text-primary uppercase">Revenue Systems</span>
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none italic">
                  NEED A COMPLETE <br />
                  <span className="text-primary">TRANSFORMATION?</span>
                </h2>
              </div>
              <p className="text-xl md:text-2xl opacity-60 font-medium tracking-tight leading-tight max-w-xl">
                Stop stitching tools together. We offer fully integrated, end-to-end systems that eliminate operational bottlenecks and scale seamlessly.
              </p>
              <Link href="/revenue-systems">
                <button className="group flex items-center space-x-6 text-background bg-primary px-12 py-6 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">
                  <span>View All Systems</span>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="relative aspect-square rounded-[4rem] border border-background/10 bg-background/5 p-12 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(var(--primary)/0.2)_0%,transparent_70%)] animate-pulse" />
               <p className="text-[10rem] font-black opacity-5 tracking-tighter italic">GROWTH</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
