"use client";

import React from "react";
import { motion } from "framer-motion";

interface LetterLiftProps {
  text: string;
  className?: string;
}

export function LetterLift({ text, className = "" }: LetterLiftProps) {
  const letters = text.split("");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {letters.map((letter, i) => (
        <motion.div
          key={i}
          whileHover="hover"
          className="relative inline-block"
        >
          {/* Stacked layers for depth */}
          {[...Array(4)].map((_, j) => (
            <motion.span
              key={j}
              variants={{
                hover: { 
                  y: -j * 4, 
                  x: j * 2,
                  opacity: 1 - j * 0.2,
                  color: j === 0 ? "oklch(var(--primary))" : "oklch(var(--foreground)/0.1)"
                }
              }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className={`absolute top-0 left-0 ${j === 0 ? "relative" : "pointer-events-none"}`}
              style={{ 
                zIndex: -j,
                color: j === 0 ? "inherit" : "transparent"
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
