"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CinematicWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add subtle environmental drift to global elements
      gsap.to(".glow-orb", {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: "random(10, 20)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-primary-foreground mesh-premium grain-elite">
      {/* Dynamic atmospheric grid */}
      <div className="fixed inset-0 grid-infrastructure opacity-5 pointer-events-none z-[0]" />
      
      {/* Mouse-reactive premium glow - Sharp but subtle */}
      <div className="cinematic-glow fixed inset-0 pointer-events-none z-[1] opacity-40 mix-blend-soft-light" />
      
      {/* High-fidelity atmospheric orbs - Sharp & High Contrast Yellow */}
      <div className="glow-orb w-[800px] h-[800px] bg-[oklch(0.85_0.15_90/0.05)] top-[-20%] left-[-20%] fixed z-[0] animate-[breathing_15s_ease-in-out_infinite]" />
      <div className="glow-orb w-[600px] h-[600px] bg-[oklch(0.85_0.15_90/0.03)] bottom-[-15%] right-[-15%] fixed z-[0] animate-[breathing_20s_ease-in-out_infinite_5s]" />
      <div className="glow-orb w-[400px] h-[400px] bg-[oklch(0.85_0.15_90/0.02)] top-[40%] right-[10%] fixed z-[0] animate-[breathing_12s_ease-in-out_infinite_2s]" />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
