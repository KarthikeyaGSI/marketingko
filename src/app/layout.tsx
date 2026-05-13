"use client";

import { useEffect } from "react";
import ReactLenis from "@studio-freight/react-lenis";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Reveal animation for elements with data-choreograph
    const elements = document.querySelectorAll("[data-choreograph]");
    
    elements.forEach((el) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 100, filter: "blur(20px)" },
        { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <html lang="en" className="dark">
        <body className="antialiased selection:bg-primary selection:text-white cursor-none bg-black overflow-x-hidden font-sans">
          <div className="noise-overlay" />
          <Preloader />
          <CustomCursor />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <CommandMenu />
            <main className="flex-1">{children}</main>
            <FloatingCTA />
            <Footer />
          </div>
        </body>
      </html>
    </ReactLenis>
  );
}
