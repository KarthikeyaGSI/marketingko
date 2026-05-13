"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Preloader } from "@/components/ui/Preloader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Marketing Ko",
  "url": "https://marketingko.vercel.app",
  "logo": "https://marketingko.vercel.app/logo.png",
  "description": "Growth systems engineered for modern brands. We build AI-powered operational infrastructure.",
  "sameAs": [
    "https://twitter.com/marketingko",
    "https://linkedin.com/company/marketingko"
  ]
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
        { opacity: 0, y: 80, scale: 0.95, filter: "blur(10px)" },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
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
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>Top AI Automation & Voice Agent Agency in India | Marketing Ko</title>
          <meta name="description" content="We engineer high-converting digital architectures and AI-powered growth infrastructure for elite brands. The era of manual acquisition is over." />
          <meta property="og:title" content="Marketing Ko | AI Growth Infrastructure" />
          <meta property="og:description" content="Growth systems engineered for modern brands. Eliminate operational drag with autonomous acquisition." />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Marketing Ko | AI Growth Infrastructure" />
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={`${interTight.variable} font-sans antialiased selection:bg-primary selection:text-white cursor-none bg-background text-foreground overflow-x-hidden`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
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
          </ThemeProvider>
        </body>
      </html>
    </ReactLenis>
  );
}


