"use client";

import { useEffect, useRef } from "react";

export function CinematicWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      containerRef.current.style.setProperty("--mouse-x", `${x}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y}%`);
      containerRef.current.style.setProperty("--velocity-x", `${e.movementX}px`);
      containerRef.current.style.setProperty("--velocity-y", `${e.movementY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Noise texture */}
      <div className="noise-overlay" />
      
      {/* Dynamic atmospheric grid */}
      <div className="fixed inset-0 grid-infrastructure opacity-5 pointer-events-none z-[0]" />
      
      {/* Mouse-reactive premium glow */}
      <div className="cinematic-glow fixed inset-0 pointer-events-none z-[1] opacity-40 mix-blend-soft-light" />
      
      {/* High-fidelity atmospheric orbs */}
      <div className="glow-orb w-[800px] h-[800px] bg-primary/10 top-[-20%] left-[-20%] fixed z-[0] blur-[120px]" style={{ animationDuration: "15s" }} />
      <div className="glow-orb w-[600px] h-[600px] bg-primary/8 bottom-[-15%] right-[-15%] fixed z-[0] blur-[100px]" style={{ animationDelay: "5s", animationDuration: "20s" }} />
      <div className="glow-orb w-[400px] h-[400px] bg-primary/5 top-[40%] right-[10%] fixed z-[0] blur-[80px]" style={{ animationDelay: "2s", animationDuration: "12s" }} />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
