"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CinematicWrapper } from "@/components/ui/CinematicWrapper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Cinematic Section Transitions
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <AtmosphericBackground />
        <CustomCursor />
        <CinematicWrapper>
          <div className="noise-overlay" />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <CommandMenu />
            <main className="flex-1">{children}</main>
            <FloatingCTA />
            <Footer />
          </div>
        </CinematicWrapper>
      </ThemeProvider>
    </ReactLenis>
  );
}
