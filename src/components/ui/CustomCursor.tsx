"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Main dot - instant
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Follower - delayed & elastic
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.6,
        ease: "power3.out"
      });
    };

    const onMouseDown = () => {
      gsap.to(follower, { scale: 0.8, duration: 0.3 });
      gsap.to(cursor, { scale: 2, duration: 0.3 });
    };

    const onMouseUp = () => {
      gsap.to(follower, { scale: 1, duration: 0.3 });
      gsap.to(cursor, { scale: 1, duration: 0.3 });
    };

    // Hover states
    const onMouseEnterLink = (e: any) => {
      const target = e.currentTarget;
      const isMagnetic = target.hasAttribute('data-magnetic');
      
      gsap.to(follower, {
        scale: isMagnetic ? 4 : 2.5,
        backgroundColor: "oklch(var(--primary)/0.15)",
        borderColor: "oklch(var(--primary)/0.5)",
        duration: 0.4,
        ease: "power3.out"
      });
      
      if (target.getAttribute('data-cursor-label')) {
        if (labelRef.current) {
          labelRef.current.innerText = target.getAttribute('data-cursor-label');
          gsap.to(labelRef.current, { opacity: 1, y: 0, duration: 0.3 });
        }
      }
    };

    const onMouseLeaveLink = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "oklch(var(--primary)/0.2)",
        duration: 0.4,
        ease: "power3.out"
      });
      
      if (labelRef.current) {
        gsap.to(labelRef.current, { opacity: 0, y: 10, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const links = document.querySelectorAll('a, button, [data-cursor]');
    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Follower / Ring */}
      <div 
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 -ml-6 -mt-6 rounded-full border border-primary/20 backdrop-blur-[2px] transition-colors duration-500 will-change-transform"
      />
      
      {/* Main Core */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-primary shadow-[0_0_15px_oklch(var(--primary))] will-change-transform"
      />

      {/* Label */}
      <div 
        ref={labelRef}
        className="fixed top-0 left-0 mt-8 ml-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-0 transition-opacity duration-300 pointer-events-none"
      />
    </div>
  );
}
