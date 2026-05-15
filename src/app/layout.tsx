import { Inter_Tight } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";
import type { Metadata } from "next";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://marketingko.vercel.app/#organization",
      "name": "Marketing Ko",
      "url": "https://marketingko.vercel.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marketingko.vercel.app/logo.png"
      },
      "description": "Growth systems engineered for modern brands. We build AI-powered operational infrastructure, voice agents, and high-converting digital architectures.",
      "founder": {
        "@type": "Person",
        "name": "Karthikeya Thallapally",
        "jobTitle": "Growth Architect & Systems Engineer",
        "url": "https://marketingko.vercel.app/about"
      },
      "knowsAbout": ["AI Automation", "Revenue Engineering", "Growth OS", "Autonomous Systems"],
      "sameAs": [
        "https://linkedin.com/company/marketingko",
        "https://x.com/marketingko"
      ]
    },
    {
      "@type": "Service",
      "name": "AI Voice Agents",
      "provider": { "@id": "https://marketingko.vercel.app/#organization" },
      "description": "Autonomous inbound and outbound voice agents for high-intent lead qualification.",
      "areaServed": "Global"
    },
    {
      "@type": "Service",
      "name": "Revenue Systems Engineering",
      "provider": { "@id": "https://marketingko.vercel.app/#organization" },
      "description": "Custom CRM and marketing automation infrastructure designed for maximum revenue throughput.",
      "areaServed": "Global"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://marketingko.vercel.app" },
        { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://marketingko.vercel.app/solutions" },
        { "@type": "ListItem", "position": 3, "name": "Revenue Systems", "item": "https://marketingko.vercel.app/revenue-systems" }
      ]
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://marketingko.vercel.app"),
  title: {
    default: "Marketing Ko | AI Growth Infrastructure & Autonomous Systems",
    template: "%s | Marketing Ko"
  },
  description: "Marketing Ko engineers high-converting digital architectures, AI voice agents, and autonomous growth systems for elite global brands. Based in India, serving the world.",
  keywords: ["AI Automation Agency India", "AI Voice Agents", "WhatsApp Business Automation", "Marketing Ko", "Karthikeya Thallapally", "Growth Systems", "n8n Automation", "Lead Generation Systems India", "B2B AI Automation", "AEO Optimization", "GEO Optimization"],
  openGraph: {
    title: "Marketing Ko | AI Growth Infrastructure",
    description: "Growth systems engineered for modern brands. Eliminate operational drag with autonomous acquisition.",
    url: "https://marketingko.vercel.app",
    siteName: "Marketing Ko",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Marketing Ko - Growth OS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Ko | AI Growth Infrastructure",
    description: "Growth systems engineered for modern brands. Eliminate operational drag with autonomous acquisition.",
    images: ["/og-image.png"],
    creator: "@marketingko"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${interTight.variable}`}>
      <head>
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
      <body className="font-sans antialiased selection:bg-primary selection:text-primary-foreground cursor-none bg-background text-foreground overflow-x-hidden">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGWLHLJT"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
