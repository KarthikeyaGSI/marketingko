"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export const CinematicCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState("default");

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });

    const xFollowerTo = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const yFollowerTo = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xFollowerTo(e.clientX);
      yFollowerTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("button, a, select, input, textarea, .magnetic-wrap");
      const isHeading = target.closest("h1, h2, h3");

      if (isClickable) {
        setCursorType("pointer");
        setIsHovering(true);
        gsap.to(follower, {
          scale: 2.5,
          backgroundColor: "rgba(var(--primary-rgb), 0.15)",
          borderWidth: "1px",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 0.5,
          duration: 0.4,
        });
      } else if (isHeading) {
        setCursorType("heading");
        setIsHovering(true);
        gsap.to(follower, {
          scale: 4,
          backgroundColor: "transparent",
          borderWidth: "1px",
          borderColor: "rgba(var(--primary-rgb), 0.3)",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        setCursorType("default");
        setIsHovering(false);
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderWidth: "2px",
          borderColor: "rgba(var(--primary-rgb), 0.5)",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
        });
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
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block">
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full z-[10000]"
      />
      {/* Follower Ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/50 rounded-full z-[9999] backdrop-blur-[2px]"
        style={{ transition: "transform 0.1s ease-out" }}
      />
      
      {/* Velocity Trail Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
         {/* Could add GSAP trail here */}
      </div>
    </div>
  );
};
