import { Hero } from "@/components/sections/Hero";
import { TrustBar, ValueProp } from "@/components/sections/ValueProp";
import { ServicesGrid, Process } from "@/components/sections/Services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <ValueProp />
      <ServicesGrid />
      <Process />
      
      {/* Testimonials Placeholder Section */}
      <section className="py-32 bg-white/[0.02]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-20">
            WHAT THE VISIONARIES SAY.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-12 rounded-2xl border border-white/10 bg-black text-left">
              <p className="text-xl text-white mb-8 italic">
                "Marketing Ko transformed our sales pipeline. We saw a 300% increase in lead conversion within the first 60 days."
              </p>
              <div>
                <p className="font-bold text-white">Alex Rivera</p>
                <p className="text-muted-foreground text-sm">CEO, TechFlow Systems</p>
              </div>
            </div>
            <div className="p-12 rounded-2xl border border-white/10 bg-black text-left">
              <p className="text-xl text-white mb-8 italic">
                "The most professional AI team we've worked with. Their systems are clean, robust, and actually drive growth."
              </p>
              <div>
                <p className="font-bold text-white">Sarah Chen</p>
                <p className="text-muted-foreground text-sm">COO, Global Retail Hub</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[150px] animate-pulse" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none">
            READY TO <br />
            OUTPERFORM?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Secure your slot for a strategic AI audit. Limited capacity for new partners each month.
          </p>
          <Button size="lg" className="rounded-full px-12 h-16 text-lg bg-white text-black hover:bg-white/90">
            Book Your Call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
