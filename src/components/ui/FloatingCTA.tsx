"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export function FloatingCTA() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [300, 500], [0, 1]);
  const scale = useTransform(scrollY, [300, 500], [0.8, 1]);

  return (
    <motion.div
      style={{ opacity, scale }}
      className="fixed bottom-8 right-8 z-40 hidden md:block"
    >
      <Link href="/contact">
        <Button className="rounded-full h-16 px-8 bg-white text-black font-bold shadow-2xl hover:bg-white/90 group">
          Book Strategy Call 
          <MessageSquare className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  );
}
