import { Hero } from "@/components/sections/Hero";
import { IndustriesMarquee } from "@/components/sections/IndustriesMarquee";
import { WOWSection } from "@/components/sections/WOWSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RevenueEngine } from "@/components/sections/RevenueEngine";
import { Performance } from "@/components/sections/Performance";
import { SolutionsGrid } from "@/components/sections/SolutionsGrid";
import { InfrastructureFlow } from "@/components/sections/InfrastructureFlow";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { Founder } from "@/components/sections/Founder";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <IndustriesMarquee />
      <WOWSection />
      <ProblemSection />
      <RevenueEngine />
      <Performance />
      <SolutionsGrid />
      <InfrastructureFlow />
      <ResultsGallery />
      <Founder />
      <FAQ />
      <CTA />
    </div>
  );
}
