"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RotationButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

export function RotationButton({ text, className = "", onClick }: RotationButtonProps) {
  return (
    <motion.div
      whileHover="hover"
      className={`relative perspective-1000 ${className}`}
    >
      <Button
        onClick={onClick}
        className="relative h-20 px-12 md:px-20 bg-primary text-black font-black uppercase tracking-widest rounded-full overflow-hidden group border-none"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Default State */}
        <motion.div
          variants={{
            hover: { rotateX: 90, y: -20, opacity: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4"
        >
          <span>{text}</span>
          <ArrowRight className="w-6 h-6" />
        </motion.div>

        {/* Hover State (Rotated In) */}
        <motion.div
          initial={{ rotateX: -90, y: 20, opacity: 0 }}
          variants={{
            hover: { rotateX: 0, y: 0, opacity: 1 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center space-x-4 bg-white text-black"
        >
          <span className="italic">INITIATE_SYSTEM</span>
          <ArrowRight className="w-6 h-6 animate-pulse" />
        </motion.div>
      </Button>

      {/* Shadow Lift Effect */}
      <motion.div 
        variants={{
          hover: { opacity: 0.4, scale: 1.1, filter: "blur(20px)" }
        }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-primary/20 blur-xl rounded-full opacity-0 pointer-events-none"
      />
    </motion.div>
  );
}
