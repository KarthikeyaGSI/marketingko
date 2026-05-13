"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

export function FloatingCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [200, 400], [0, 1]);
  const scale = useTransform(scrollY, [200, 400], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-10 right-10 z-[5000] hidden md:block"
    >
      <MagneticButton>
        <Link href="/contact">
          <Button size="lg" className="h-14 px-6 rounded-2xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-black shadow-2xl border border-foreground/10 group backdrop-blur-md opacity-90 hover:opacity-100 transition-all duration-500">
            <MessageSquare className="mr-2 h-4 w-4 text-primary" />
            <span className="text-xs uppercase tracking-widest">Audit Terminal</span>
            <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </MagneticButton>
    </motion.div>
  );
}
