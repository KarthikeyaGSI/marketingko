"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Home, Zap, Info, Mail, Layout } from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigate = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[550px] p-0 bg-black border-white/10 overflow-hidden">
        <DialogHeader className="p-4 border-b border-white/10">
          <div className="flex items-center space-x-3 text-muted-foreground">
            <Search size={18} />
            <input 
              placeholder="Search or navigate..." 
              className="bg-transparent border-none focus:outline-none text-white flex-1"
            />
            <span className="text-xs bg-white/10 px-2 py-1 rounded">ESC</span>
          </div>
        </DialogHeader>
        <div className="p-2">
          <div className="px-3 py-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">Navigation</div>
          <button onClick={() => navigate("/")} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 text-white transition-colors">
            <Home size={18} /> <span>Home</span>
          </button>
          <button onClick={() => navigate("/solutions")} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 text-white transition-colors">
            <Zap size={18} /> <span>Solutions</span>
          </button>
          <button onClick={() => navigate("/case-studies")} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 text-white transition-colors">
            <Layout size={18} /> <span>Case Studies</span>
          </button>
          <button onClick={() => navigate("/about")} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 text-white transition-colors">
            <Info size={18} /> <span>About</span>
          </button>
          <button onClick={() => navigate("/contact")} className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 text-white transition-colors">
            <Mail size={18} /> <span>Contact</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
