"use client";

import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RevenueSystems } from "@/components/sections/RevenueSystems";
import { Process } from "@/components/sections/Process";
import { Performance } from "@/components/sections/Performance";
import { IndividualSolutions } from "@/components/sections/IndividualSolutions";
import { WhyMarketingKo } from "@/components/sections/WhyMarketingKo";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemSection />
      <RevenueSystems />
      <Process />
      <Performance />
      <IndividualSolutions />
      <WhyMarketingKo />
      <FAQ />
      <CTA />
    </div>
  );
}
