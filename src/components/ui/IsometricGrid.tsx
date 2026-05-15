"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function IsometricGrid() {
  const [cells, setCells] = useState<{ id: number; color: string; opacity: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    "oklch(var(--primary))",
    "oklch(0.85 0.15 90)", // Gold-ish
    "oklch(var(--foreground)/0.2)"
  ];

  useEffect(() => {
    // Generate 20x20 grid
    const totalCells = 400;
    setCells(Array.from({ length: totalCells }, (_, i) => ({
      id: i,
      color: colors[0],
      opacity: 0
    })));
  }, []);

  const handleHover = (id: number) => {
    setCells(prev => prev.map(cell => 
      cell.id === id 
        ? { ...cell, opacity: 1, color: colors[Math.floor(Math.random() * colors.length)] }
        : cell
    ));
    
    // Fade out after a delay
    setTimeout(() => {
      setCells(prev => prev.map(cell => 
        cell.id === id ? { ...cell, opacity: 0 } : cell
      ));
    }, 1000);
  };

  return (
    <div 
      className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-40"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <div 
        className="grid grid-cols-20 gap-px w-[150%] h-[150%] -translate-x-1/4 -translate-y-1/4"
        style={{
          transform: "rotateX(60deg) rotateZ(-35deg)",
          background: "oklch(var(--foreground)/0.05)"
        }}
      >
        {cells.map((cell) => (
          <div
            key={cell.id}
            onMouseEnter={() => handleHover(cell.id)}
            className="aspect-square relative pointer-events-auto cursor-crosshair border-[0.5px] border-foreground/5"
          >
            <motion.div 
              animate={{ 
                backgroundColor: cell.color,
                opacity: cell.opacity 
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            />
            {/* Minimal Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-foreground/10 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
