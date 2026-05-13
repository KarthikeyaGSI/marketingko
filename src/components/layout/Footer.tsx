import Link from "next/link";
import { Twitter, Linkedin, Instagram, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <div className="space-y-8">
              <p className="text-muted-foreground font-medium tracking-tight leading-relaxed">
                Start with a free 30-minute business audit. We'll show you exactly where you're losing money.
              </p>
              <Link href="/contact" className="block">
                <Button className="w-full md:w-auto px-12 h-16 rounded-2xl bg-primary text-white hover:bg-primary/90 transition-all duration-700 font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20">
                  Book Free Audit
                </Button>
              </Link>
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
