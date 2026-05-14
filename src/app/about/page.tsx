import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Marketing Ko's mission to build sovereignty through autonomous revenue infrastructure and systems engineering.",
  openGraph: {
    title: "About Marketing Ko | Systems Over Services",
    description: "We engineer the underlying operational architectures that allow companies to automate acquisition at enterprise scale.",
    url: "https://marketingko.vercel.app/about",
    images: ["/og-about.png"],
  },
  twitter: {
    title: "About Marketing Ko | Systems Over Services",
    description: "Engineering sovereignty through autonomous systems.",
    images: ["/og-about.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
