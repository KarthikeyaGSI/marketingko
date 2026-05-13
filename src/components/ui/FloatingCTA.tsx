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
          <Button size="lg" className="h-16 px-8 rounded-2xl bg-white text-black hover:bg-white/90 font-black shadow-2xl border border-white/20 group">
            <MessageSquare className="mr-3 h-5 w-5 text-primary" />
            <span className="mr-2">Initiate Strategy Audit</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </MagneticButton>
    </motion.div>
  );
}
