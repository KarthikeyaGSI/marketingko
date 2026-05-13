import Link from "next/link";
import { Twitter, Linkedin, Instagram, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-60 pb-32 overflow-hidden relative mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-32 mb-60">
          <div className="md:col-span-4 space-y-16">
            <Link href="/" className="group inline-block">
              <span className="text-5xl font-black tracking-tightest text-foreground uppercase italic leading-none transition-all duration-700 group-hover:text-primary">
                MARKETING <span className="text-primary italic">KO.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-2xl leading-relaxed max-w-sm font-medium tracking-tightest italic">
              "AI automations, voice agents, and web systems — engineered around your outcomes, not our deliverables."
            </p>
            <div className="text-[12px] font-black text-foreground/30 space-y-4 uppercase tracking-[0.6em] italic">
              <p>MARKETINGKO.COM</p>
              <p>@MARKETINGKO</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 md:flex md:justify-center">
            <div className="space-y-16">
              <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[1em]">SYSTEM_NAV</p>
              <ul className="space-y-8">
                <li><Link href="/" className="text-4xl font-bold text-foreground/40 hover:text-primary transition-all duration-700 tracking-tightest italic uppercase">Home</Link></li>
                <li><Link href="/#revenue-systems" className="text-4xl font-bold text-foreground/40 hover:text-primary transition-all duration-700 tracking-tightest italic uppercase">Protocols</Link></li>
                <li><Link href="/#solutions" className="text-4xl font-bold text-foreground/40 hover:text-primary transition-all duration-700 tracking-tightest italic uppercase">Solutions</Link></li>
                <li><Link href="/#why" className="text-4xl font-bold text-foreground/40 hover:text-primary transition-all duration-700 tracking-tightest italic uppercase">About</Link></li>
                <li><Link href="/contact" className="text-4xl font-bold text-foreground/40 hover:text-primary transition-all duration-700 tracking-tightest italic uppercase">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-4 space-y-16">
            <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[1em]">INITIALIZE_PHASE</p>
            <div className="space-y-16">
              <h4 className="text-6xl md:text-7xl font-bold text-foreground tracking-tightest italic leading-[0.8]">Ready to <br /><span className="text-primary not-italic">ENGINEER?</span></h4>
              <div className="flex flex-col space-y-10">
                <Link href="/contact">
                  <MagneticButton>
                    <Button className="w-full h-24 md:h-32 rounded-3xl bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-[0.3em] text-xl shadow-[0_40px_100px_-20px_oklch(var(--primary)/0.3)] transition-all duration-1000 group border-none">
                      <span>Start Project</span> <ArrowRight className="ml-6 h-8 w-8 group-hover:translate-x-4 transition-transform duration-700" />
                    </Button>
                  </MagneticButton>
                </Link>
                <div className="flex items-center space-x-8 px-10 py-6 rounded-3xl border border-border/50 bg-foreground/[0.03] backdrop-blur-xl transition-all duration-1000 hover:border-primary/20">
                   <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                   <span className="text-[12px] font-black text-foreground/40 uppercase tracking-[0.5em] italic">Operational Baseline: v1.0.4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-12">
          <p className="text-[12px] font-black text-foreground/20 uppercase tracking-[0.8em] italic">
            © 2026 MARKETING KO.
          </p>
          <div className="flex items-center space-x-6">
             <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.4em] italic">Growth Architecture</span>
             <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
             <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.4em] italic">System OS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
