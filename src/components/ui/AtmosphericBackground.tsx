"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function AtmosphericBackground() {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    
    // Ambient color drift
    gsap.to(meshRef.current, {
      backgroundPosition: "100% 100%",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Dynamic Mesh Layer */}
      <div 
        ref={meshRef}
        className="absolute inset-0 opacity-20 dark:opacity-40 transition-opacity duration-1000"
        style={{
          background: "radial-gradient(at 0% 0%, oklch(var(--primary)/0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, oklch(0.85 0.15 90 / 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, oklch(var(--primary)/0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, oklch(0.75 0.2 95 / 0.15) 0px, transparent 50%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Cinematic Lighting Nodes */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "5s" }} />
      
      {/* Structural Grid */}
      <div className="absolute inset-0 grid-infrastructure opacity-[0.03] pointer-events-none" />
    </div>
  );
}
