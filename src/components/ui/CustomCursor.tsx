"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Velocity tracking
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;
    if (!cursor || !follower) return;

    // Set initial state
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const followerXTo = gsap.quickTo(follower, "x", { duration: 0.5, ease: "expo.out" });
    const followerYTo = gsap.quickTo(follower, "y", { duration: 0.5, ease: "expo.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // Velocity calculation
      const dx = e.clientX - pos.current.x;
      const dy = e.clientY - pos.current.y;
      vel.current = { x: dx, y: dy };
      pos.current = { x: e.clientX, y: e.clientY };

      const speed = Math.min(Math.sqrt(dx * dx + dy * dy), 100);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      xTo(e.clientX);
      yTo(e.clientY);
      followerXTo(e.clientX);
      followerYTo(e.clientY);
      
      // Dynamic scaling based on velocity
      gsap.to(follower, {
        scaleX: 1 + speed * 0.005,
        scaleY: 1 - speed * 0.002,
        rotation: angle,
        duration: 0.4,
        ease: "power2.out"
      });

      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("button, a, .interactive, input, textarea, .magnetic");
      
      if (isInteractive) {
        gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.3 });
        gsap.to(follower, { 
          width: 80,
          height: 80,
          borderRadius: "1rem",
          borderColor: "oklch(var(--primary))",
          backgroundColor: "oklch(var(--primary) / 0.05)",
          borderWidth: "1px",
          opacity: 1,
          duration: 0.5,
          ease: "expo.out"
        });
        if (label) gsap.to(label, { opacity: 1, y: -20, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(follower, { 
          width: 32,
          height: 32,
          borderRadius: "50%",
          borderColor: "oklch(var(--foreground) / 0.2)",
          backgroundColor: "transparent",
          borderWidth: "1px",
          opacity: 0.3,
          duration: 0.5,
          ease: "expo.out"
        });
        if (label) gsap.to(label, { opacity: 0, y: 0, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseenter", () => setIsVisible(true));
    window.addEventListener("mouseleave", () => setIsVisible(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] hidden lg:block transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Precision Core */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full blur-[1px]" 
      />
      
      {/* Infrastructure Frame */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-foreground/20 rounded-full flex items-center justify-center mix-blend-difference"
      >
        {/* Corner Brackets */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />
        </div>
        
        {/* Scan Line */}
        <div className="absolute inset-x-0 h-[1px] bg-primary/20 animate-scan-line pointer-events-none" />
        
        {/* Context Label */}
        <span ref={labelRef} className="absolute whitespace-nowrap text-[8px] font-black tracking-[0.3em] uppercase text-primary opacity-0 pointer-events-none translate-y-10">
          SYSTEM_ACCESS
        </span>
      </div>

      {/* Trailing Atmospheric Light */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at var(--cursor-x) var(--cursor-y), oklch(var(--primary) / 0.03), transparent 80%)`
        }}
      />
    </div>
  );
}

