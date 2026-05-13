import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              MARKETING <span className="text-muted-foreground font-light">KO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Elite AI automation agency building high-performance systems for modern enterprises.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-muted-foreground hover:text-white text-sm">AI Automations</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white text-sm">AI Voice Agents</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white text-sm">Lead Capture</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-white text-sm">CRM Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-white text-sm">About Us</Link></li>
              <li><Link href="/process" className="text-muted-foreground hover:text-white text-sm">Our Process</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-white text-sm">Case Studies</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-white text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Stay ahead with AI insights.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-white/20 flex-1"
              />
              <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Marketing Ko. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-white text-xs">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-white text-xs">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
