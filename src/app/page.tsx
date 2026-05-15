import { Hero } from "@/components/sections/Hero";
import { IndustriesMarquee } from "@/components/sections/IndustriesMarquee";
import { WOWSection } from "@/components/sections/WOWSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RevenueEngine } from "@/components/sections/RevenueEngine";
import { ROICalculator } from "@/components/ui/ROICalculator";
import { ResultsGallery } from "@/components/sections/ResultsGallery";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="glow-bleed w-[1200px] h-[600px] top-[20%] left-[-10%] opacity-20" />
      <WOWSection />
      <div className="glow-bleed w-[1000px] h-[500px] top-[40%] right-[-10%] opacity-15" />
      <ProblemSection />
      <div className="glow-bleed w-[1200px] h-[600px] top-[60%] left-[-10%] opacity-20" />
      <RevenueEngine />
      <ROICalculator />
      <ResultsGallery />
      <FAQ />
      <CTA />
    </div>
  );
}
