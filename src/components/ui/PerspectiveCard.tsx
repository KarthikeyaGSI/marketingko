"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export function PerspectiveCard({ 
  children, 
  className = "",
  glowColor = "oklch(var(--primary) / 0.15)"
}: { 
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-elite group relative ${className}`}
    >
      {/* Glow Layer */}
      <div 
        className="absolute -inset-1 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl z-0"
        style={{ backgroundColor: glowColor }}
      />
      
      {/* Content Container */}
      <div 
        style={{ transform: "translateZ(80px)" }}
        className="relative z-10 h-full w-full glass-system rounded-[inherit] overflow-hidden edge-light"
      >
        {/* Dynamic Light Reflection */}
        <motion.div 
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), white, transparent 400px)`,
            opacity: 0.05
          }}
          className="absolute inset-0 pointer-events-none"
        />
        
        {children}
      </div>
      
      {/* Background Shadow Layer */}
      <div className="absolute inset-4 bg-black/40 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
    </motion.div>
  );
}
