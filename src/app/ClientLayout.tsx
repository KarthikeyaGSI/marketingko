"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CinematicWrapper } from "@/components/ui/CinematicWrapper";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-choreograph]");
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 100, scale: 0.9, filter: "blur(20px)" },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
