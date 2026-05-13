import Link from "next/link";
import { Twitter, Linkedin, Instagram, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-40">
          <div className="md:col-span-4 space-y-12">
            <Link href="/" className="group inline-block">
              <span className="text-4xl font-black tracking-tighter text-foreground uppercase italic leading-none transition-colors group-hover:text-primary">
                Marketing <span className="text-primary italic">Ko.</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm font-medium tracking-tight">
              AI automations, voice agents, and web systems — engineered around your outcomes, not our deliverables.
            </p>
            <div className="text-xs font-bold text-foreground/40 space-y-2 uppercase tracking-widest">
              <p>marketingko.com</p>
              <p>@marketingko</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4 md:flex md:justify-center">
            <div className="space-y-12">
              <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">Navigation</p>
              <ul className="space-y-6">
                <li><Link href="/" className="text-foreground/60 hover:text-foreground transition-colors font-bold tracking-tighter italic">Home</Link></li>
                <li><Link href="/revenue-systems" className="text-foreground/60 hover:text-foreground transition-colors font-bold tracking-tighter italic">Revenue Systems</Link></li>
                <li><Link href="/solutions" className="text-foreground/60 hover:text-foreground transition-colors font-bold tracking-tighter italic">Solutions</Link></li>
                <li><Link href="/about" className="text-foreground/60 hover:text-foreground transition-colors font-bold tracking-tighter italic">About</Link></li>
                <li><Link href="/contact" className="text-foreground/60 hover:text-foreground transition-colors font-bold tracking-tighter italic">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-4 space-y-12">
            <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em]">Get Started</p>
            <div className="space-y-12">
              <h4 className="text-4xl font-bold text-foreground tracking-tighter italic">Ready to engineer <br /><span className="text-primary not-italic">your growth?</span></h4>
              <div className="flex flex-col space-y-8">
                <Link href="/contact">
                  <MagneticButton>
                    <Button className="w-full h-20 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all duration-700 hover:scale-105 group">
                      <span>Initialize Build</span> <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-3 transition-transform" />
                    </Button>
                  </MagneticButton>
                </Link>
                <div className="flex items-center space-x-6 px-8 py-4 rounded-2xl border border-border bg-foreground/[0.02]">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                   <span className="text-[10px] font-black text-foreground/30 uppercase tracking-widest italic">All Nodes Active: 14/14</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-foreground/20 uppercase tracking-widest italic">
            © 2026 MARKETING KO. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 opacity-20">
             <span className="text-[10px] font-bold text-foreground uppercase tracking-widest italic">AI Solutions & Web Development</span>
             <div className="w-1 h-1 rounded-full bg-foreground" />
             <span className="text-[10px] font-bold text-foreground uppercase tracking-widest italic">2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
