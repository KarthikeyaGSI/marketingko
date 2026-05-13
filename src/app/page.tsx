"use client";

import { Hero } from "@/components/sections/Hero";
import { IndustriesMarquee } from "@/components/sections/IndustriesMarquee";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RevenueSystems } from "@/components/sections/RevenueSystems";
import { Process } from "@/components/sections/Process";
import { Performance } from "@/components/sections/Performance";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { WhyMarketingKo } from "@/components/sections/WhyMarketingKo";
import { Founder } from "@/components/sections/Founder";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <IndustriesMarquee />
      <ProblemSection />
      <RevenueSystems />
      <Process />
      <Performance />
      <SolutionsGrid />
      <WhyMarketingKo />
      <Founder />
      <FAQ />
      <CTA />
    </div>
  );
}
