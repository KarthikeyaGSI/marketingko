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
import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CinematicWrapper } from "@/components/ui/CinematicWrapper";

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
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://marketingko.vercel.app/#organization",
      "name": "Marketing Ko",
      "url": "https://marketingko.vercel.app",
      "logo": "https://marketingko.vercel.app/logo.png",
      "description": "Growth systems engineered for modern brands. We build AI-powered operational infrastructure, voice agents, and high-converting digital architectures.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India",
        "addressRegion": "Telangana"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "areaServed": "Global",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "Person",
      "@id": "https://marketingko.vercel.app/#founder",
      "name": "Karthikeya Thallapally",
      "jobTitle": "Growth Architect & Founder",
      "image": "https://marketingko.vercel.app/Karthikeya Thallapally.webp",
      "description": "Obsessed with sustainable technology, automation, and creating real impact through digital systems."
    },
    {
      "@type": "WebSite",
      "@id": "https://marketingko.vercel.app/#website",
      "url": "https://marketingko.vercel.app",
      "name": "Marketing Ko | Growth OS",
      "publisher": { "@id": "https://marketingko.vercel.app/#organization" }
    }
  ]
};

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
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>Marketing Ko | AI Growth Infrastructure & Autonomous Systems</title>
          <meta name="description" content="Marketing Ko engineers high-converting digital architectures, AI voice agents, and autonomous growth systems for elite global brands. Based in India, serving the world." />
          <meta name="keywords" content="AI Automation Agency India, AI Voice Agents, WhatsApp Business Automation, Marketing Ko, Karthikeya Thallapally, Growth Systems, n8n Automation, Lead Generation Systems India" />
          <meta property="og:title" content="Marketing Ko | AI Growth Infrastructure" />
          <meta property="og:description" content="Growth systems engineered for modern brands. Eliminate operational drag with autonomous acquisition." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://marketingko.vercel.app/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Marketing Ko | AI Growth Infrastructure" />
          
          {/* Google Tag Manager */}
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WGWLHLJT');`}
          </Script>
          
          {/* Microsoft Clarity */}
          <Script id="clarity" strategy="afterInteractive">
            {` (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wqfooypbhb");`}
          </Script>

          <Script
            id="json-ld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body className={`${interTight.variable} font-sans antialiased selection:bg-primary selection:text-primary-foreground cursor-none bg-background text-foreground overflow-x-hidden`}>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-WGWLHLJT"
              height="0" 
              width="0" 
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
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
        </body>
      </html>
    </ReactLenis>
  );
}
