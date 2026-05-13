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

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    
    const followerXTo = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power2.out" });
    const followerYTo = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
      followerXTo(e.clientX);
      followerYTo(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .interactive")) {
        gsap.to(cursor, { scale: 0, duration: 0.3 });
        gsap.to(follower, { 
          scale: 3, 
          backgroundColor: "oklch(0.6 0.2 250 / 0.1)", 
          borderColor: "oklch(0.6 0.2 250 / 0.5)",
          duration: 0.3 
        });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(follower, { 
          scale: 1, 
          backgroundColor: "transparent", 
          borderColor: "rgba(255,255,255,0.2)",
          duration: 0.3 
        });
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
      {/* Main Cursor Point */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full -ml-0.75 -mt-0.75 mix-blend-difference" 
      />
      
      {/* Outer Follower */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full -ml-4 -mt-4 flex items-center justify-center transition-transform duration-75"
      >
        <div className="w-1 h-1 bg-primary/40 rounded-full blur-[2px]" />
      </div>

      {/* Global Glow */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(0,102,255,0.03)_0%,transparent_50%)]" style={{ "--x": "0px", "--y": "0px" } as any} />
    </div>
  );
}

