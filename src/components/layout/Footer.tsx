import Link from "next/link";
import { Twitter, Linkedin, Instagram, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-40">
          <div className="lg:col-span-2 space-y-12">
            <Link href="/" className="flex items-center space-x-6 group">
              <div className="w-16 h-16 rounded-[2rem] bg-primary flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-1000 shadow-primary/30 shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Shield className="h-8 w-8 text-white relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none">
                  Marketing Ko
                </span>
                <span className="text-[10px] font-black tracking-[0.4em] text-primary uppercase mt-2">Operational OS</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm font-medium tracking-tight italic">
              AI automations, voice agents, and web systems — engineered around your outcomes, not our deliverables.
            </p>
            <div className="flex flex-col space-y-4">
               <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">Direct Access</p>
               <a href="mailto:business.marketingko@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors tracking-tighter italic underline underline-offset-8 decoration-primary/20 hover:decoration-primary">
                 business.marketingko@gmail.com
               </a>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-10">Navigation</p>
            <ul className="space-y-6">
              <li><Link href="/" className="text-white/40 hover:text-white transition-colors font-bold tracking-tighter italic">Home</Link></li>
              <li><Link href="/#revenue-systems" className="text-white/40 hover:text-white transition-colors font-bold tracking-tighter italic">Revenue Systems</Link></li>
              <li><Link href="/#solutions" className="text-white/40 hover:text-white transition-colors font-bold tracking-tighter italic">Solutions</Link></li>
              <li><Link href="/#about" className="text-white/40 hover:text-white transition-colors font-bold tracking-tighter italic">About</Link></li>
              <li><Link href="/contact" className="text-white/40 hover:text-white transition-colors font-bold tracking-tighter italic">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] mb-10">Connect</p>
              <div className="flex items-center space-x-6">
                <Link href="#" className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/20 transition-all">
                  <Linkedin size={20} />
                </Link>
                <Link href="#" className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/20 transition-all">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/20 transition-all">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className="block">
              <Button className="w-full h-16 rounded-2xl bg-white text-black hover:bg-primary hover:text-white transition-all duration-500 font-bold uppercase tracking-widest group">
                Get Started <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-8 opacity-30">
            <p className="text-[10px] font-bold text-white uppercase tracking-widest">© 2026 Marketing Ko</p>
            <div className="w-[1px] h-4 bg-white/20" />
            <p className="text-[10px] font-bold text-white uppercase tracking-widest italic">AI Solutions & Web Development</p>
          </div>
          
          <div className="flex items-center space-x-12">
            <Link href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
