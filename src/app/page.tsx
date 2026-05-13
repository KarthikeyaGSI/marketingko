"use client";

import { Hero } from "@/components/sections/Hero";
import { IndustriesMarquee } from "@/components/sections/IndustriesMarquee";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <IndustriesMarquee />
      <ProblemSection />
      <FAQ />
      <CTA />
    </div>
  );
}
