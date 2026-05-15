"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BlindsTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function BlindsText({ text, className = "", once = true }: BlindsTextProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once, amount: 0.5 });

  // Split text into lines if it has newlines, or just wrap it
  const lines = text.split("\n");

  return (
    <div ref={containerRef} className={`relative space-y-2 ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className="relative overflow-hidden inline-block w-full">
          {/* The Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.1, delay: i * 0.15 + 0.3 }}
            className="block"
          >
            {line}
          </motion.div>

          {/* The Blind/Strip */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { 
              scaleX: [0, 1, 0],
              originX: [0, 0, 1]
            } : { scaleX: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "circInOut", 
              delay: i * 0.15 
            }}
            className="absolute inset-0 bg-primary z-10"
            style={{ originX: 0 }}
          />
        </div>
      ))}
    </div>
  );
}
