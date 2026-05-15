"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CinematicCursor } from "@/components/ui/CinematicCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CinematicWrapper } from "@/components/ui/CinematicWrapper";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Cinematic Reveal Choreography for all sections
    const sections = document.querySelectorAll("section");
    
    sections.forEach((section) => {
      // Scene-based animation timing
      gsap.from(section.querySelectorAll(".reveal-scene"), {
        y: 60,
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Ambient movement for cards within sections
      gsap.to(section.querySelectorAll(".ambient-float"), {
        y: -20,
        rotation: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Global reveal of children
    gsap.from(containerRef.current, {
      opacity: 0,
      filter: "blur(40px)",
      duration: 2,
      ease: "power3.inOut"
    });

  }, { scope: containerRef });

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <div ref={containerRef} className="relative min-h-screen">
          <CinematicCursor />
          <CinematicWrapper>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <CommandMenu />
              <main className="flex-1">{children}</main>
              <FloatingCTA />
              <Footer />
            </div>
          </CinematicWrapper>
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}
