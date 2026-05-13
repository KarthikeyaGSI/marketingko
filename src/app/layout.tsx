import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { CommandMenu } from "@/components/ui/CommandMenu";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketing Ko | AI Growth Infrastructure",
  description: "We engineer revenue systems that compound monthly. Acquisition infrastructure powered by AI.",
  openGraph: {
    title: "Marketing Ko | AI Growth Infrastructure",
    description: "We engineer revenue systems that compound monthly.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black cursor-none`}>
        <div className="noise-overlay" />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <CommandMenu />
            <main className="flex-1">{children}</main>
            <FloatingCTA />
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
