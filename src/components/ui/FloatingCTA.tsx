"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

export function FloatingCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const scale = useTransform(scrollY, [300, 500], [0.9, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-6 right-6 z-[5000] hidden md:block"
    >
      <MagneticButton>
        <Link href="/contact">
          <Button size="lg" className="h-12 px-6 rounded-xl bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black shadow-[0_20px_50px_-10px_oklch(var(--primary)/0.4)] border-none group backdrop-blur-md transition-all duration-500 relative overflow-hidden">
            <span className="text-[10px] uppercase tracking-[0.2em] relative z-10">Book Audit</span>
            <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-500 relative z-10" />
            <div className="absolute inset-0 bg-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Button>
        </Link>
      </MagneticButton>
    </motion.div>
  );
}
