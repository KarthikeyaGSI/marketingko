"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Set initial state
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const followerXTo = gsap.quickTo(follower, "x", { duration: 0.4, ease: "power2.out" });
    const followerYTo = gsap.quickTo(follower, "y", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
      followerXTo(e.clientX);
      followerYTo(e.clientY);
      
      // Update global glow variable
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .interactive, input, textarea")) {
        gsap.to(cursor, { scale: 1.5, backgroundColor: "oklch(var(--primary))", duration: 0.3 });
        gsap.to(follower, { 
          scale: 1.2,
          rotate: 90,
          borderColor: "oklch(var(--primary) / 0.5)",
          duration: 0.4,
          ease: "back.out(2)"
        });
        const label = follower.querySelector(".cursor-label");
        if (label) gsap.to(label, { opacity: 1, y: -10, duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: "currentColor", duration: 0.3 });
        gsap.to(follower, { 
          scale: 1,
          rotate: 0,
          borderColor: "currentColor",
          opacity: 0.3,
          duration: 0.4 
        });
        const label = follower.querySelector(".cursor-label");
        if (label) gsap.to(label, { opacity: 0, y: 0, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      {/* Target Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1 h-1 bg-foreground rounded-full" 
      />
      
      {/* Infrastructure Brackets */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border-foreground/30 flex items-center justify-center"
      >
        {/* The Brackets (4 corners) */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current" />
        
        {/* Micro Label */}
        <span className="cursor-label absolute whitespace-nowrap text-[8px] font-black tracking-[0.2em] uppercase text-primary opacity-0 pointer-events-none">
          SYSTEM_READY
        </span>

        {/* Inner scan line */}
        <div className="w-full h-[1px] bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      </div>

      {/* Atmospheric Glow */}
      <div 
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--cursor-x,50%)_var(--cursor-y,50%),oklch(var(--primary)/0.04)_0%,transparent_40%)]" 
      />
    </div>
  );
}

