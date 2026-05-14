import { Metadata } from "next";
import { SolutionsContent } from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Marketing Ko's catalogue of AI automations, voice agents, and custom web systems designed to eliminate growth bottlenecks.",
  openGraph: {
    title: "AI Growth Solutions | Marketing Ko",
    description: "19 standalone growth modules. Each one engineered to eliminate a specific operational bottleneck.",
    url: "https://marketingko.vercel.app/solutions",
    images: ["/og-solutions.png"],
  },
  twitter: {
    title: "AI Growth Solutions | Marketing Ko",
    description: "Drop-in protocols for autonomous scaling.",
    images: ["/og-solutions.png"],
  },
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
