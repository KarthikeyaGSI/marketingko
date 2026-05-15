"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], .magnetic-target');
      
      if (isClickable) {
        setIsHovering(true);
        if (target.closest('.cta-target')) setHoverType('cta');
        else if (target.closest('a')) setHoverType('link');
        else setHoverType('default');
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Outer Ring - High Inertia */}
      <motion.div
        ref={cursorRef}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-12 h-12 border border-primary/30 rounded-full flex items-center justify-center transition-transform duration-500 ease-out"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 1,
        }}
      >
        {/* Glow Core */}
        <motion.div 
          animate={{
            scale: isHovering ? 0.5 : 1,
            backgroundColor: isHovering ? "oklch(var(--primary))" : "transparent"
          }}
          className="w-1 h-1 rounded-full bg-primary shadow-[0_0_15px_oklch(var(--primary))]" 
        />
      </motion.div>

      {/* Inner Dot - Low Inertia (Direct) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-2 h-2 bg-primary rounded-full z-10"
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />

      {/* Atmospheric Glow */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-64 h-64 bg-primary/5 rounded-full pointer-events-none -z-10"
        animate={{
          scale: isHovering ? 1.2 : 1,
        }}
      />
    </div>
  );
}
