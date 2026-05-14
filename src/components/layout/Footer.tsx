import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/30 pt-20 md:pt-32 pb-12 md:pb-16 overflow-hidden relative">
      <div className="absolute inset-0 dot-grid opacity-8 pointer-events-none" />
      <div className="ambient-glow opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <Link href="/" className="group inline-block">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground uppercase italic leading-none transition-all duration-700 group-hover:text-primary">
                MARKETING <span className="text-primary italic">KO.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm font-medium tracking-tight italic">
              &ldquo;AI automations, voice agents, and web systems — engineered around your outcomes, not our deliverables.&rdquo;
            </p>
            <div className="text-[10px] font-black text-foreground/25 space-y-2 uppercase tracking-[0.4em] italic">
              <p>MARKETINGKO.COM</p>
              <p>@MARKETINGKO</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 md:flex md:justify-center">
            <div className="space-y-6 md:space-y-8">
              <p className="text-[10px] font-black text-foreground/15 uppercase tracking-[0.6em]">NAVIGATE</p>
              <ul className="space-y-3 md:space-y-4">
                <li><Link href="/" className="text-lg md:text-xl font-bold text-foreground/35 hover:text-primary transition-all duration-500 tracking-tight italic uppercase">Home</Link></li>
                <li><Link href="/revenue-systems" className="text-lg md:text-xl font-bold text-foreground/35 hover:text-primary transition-all duration-500 tracking-tight italic uppercase">Protocols</Link></li>
                <li><Link href="/solutions" className="text-lg md:text-xl font-bold text-foreground/35 hover:text-primary transition-all duration-500 tracking-tight italic uppercase">Solutions</Link></li>
                <li><Link href="/about" className="text-lg md:text-xl font-bold text-foreground/35 hover:text-primary transition-all duration-500 tracking-tight italic uppercase">About</Link></li>
                <li><Link href="/contact" className="text-lg md:text-xl font-bold text-foreground/35 hover:text-primary transition-all duration-500 tracking-tight italic uppercase">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-4 space-y-6 md:space-y-8">
            <p className="text-[10px] font-black text-foreground/15 uppercase tracking-[0.6em]">GET STARTED</p>
            <div className="space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight italic leading-[0.9]">Ready to <br /><span className="text-primary not-italic">ENGINEER?</span></h4>
              <div className="flex flex-col space-y-4">
                <Link href="/contact">
                  <MagneticButton>
                    <Button className="w-full h-14 md:h-16 rounded-2xl bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-[0.15em] text-sm shadow-[0_20px_50px_-10px_oklch(var(--primary)/0.3)] transition-all duration-700 group border-none relative overflow-hidden">
                      <span className="relative z-10">Start Project</span>
                      <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                      <div className="absolute inset-0 bg-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Button>
                  </MagneticButton>
                </Link>
                <div className="flex items-center space-x-4 px-5 py-3 rounded-xl border border-border/30 bg-foreground/[0.02] backdrop-blur-xl">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_oklch(var(--primary))]" />
                   <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em] italic">Systems Online v2.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-black text-foreground/15 uppercase tracking-[0.5em] italic">
            © 2026 MARKETING KO.
          </p>
          <div className="flex items-center space-x-4">
             <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em] italic">Growth Architecture</span>
             <div className="w-1 h-1 rounded-full bg-primary/20" />
             <span className="text-[9px] font-black text-foreground/20 uppercase tracking-[0.3em] italic">System OS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
