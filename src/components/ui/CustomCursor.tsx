"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const glow = glowRef.current;
    if (!cursor || !glow) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" });
    
    const glowXTo = gsap.quickTo(glow, "x", { duration: 0.8, ease: "power2" });
    const glowYTo = gsap.quickTo(glow, "y", { duration: 0.8, ease: "power2" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX - 10);
      yTo(e.clientY - 10);
      glowXTo(e.clientX - 150);
      glowYTo(e.clientY - 150);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, .interactive")) {
        gsap.to(cursor, { scale: 3, backgroundColor: "var(--primary)", duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, backgroundColor: "white", duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className="fixed w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-[9998] hidden md:block" />
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
    </>
  );
}
