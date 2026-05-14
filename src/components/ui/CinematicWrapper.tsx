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
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-background overflow-hidden">
      {/* Noise texture */}
      <div className="noise-overlay" />
      
      {/* Mouse-reactive glow */}
      <div className="cinematic-glow fixed inset-0 pointer-events-none z-[1] opacity-30" />
      
      {/* Floating atmospheric orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-primary/6 top-[-15%] left-[-10%] fixed z-[0]" style={{ animationDuration: "8s" }} />
      <div className="glow-orb w-[500px] h-[500px] bg-primary/5 bottom-[-10%] right-[-10%] fixed z-[0]" style={{ animationDelay: "4s", animationDuration: "10s" }} />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
