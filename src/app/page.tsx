import { Hero } from "@/components/sections/Hero";
import { IndustriesMarquee } from "@/components/sections/IndustriesMarquee";
import { WOWSection } from "@/components/sections/WOWSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { RevenueEngine } from "@/components/sections/RevenueEngine";
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
      <FAQ />
      <CTA />
    </div>
  );
}
