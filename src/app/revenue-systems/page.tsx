import { Metadata } from "next";
import { RevenueSystemsContent } from "./RevenueSystemsContent";

export const metadata: Metadata = {
  title: "Revenue Systems",
  description: "End-to-end autonomous revenue infrastructure. We deploy the 'Big Three' systems: Voice Agents, CRM Automation, and Operational Workflows.",
  openGraph: {
    title: "Revenue Systems Engineering | Marketing Ko",
    description: "The Big Three: Three of the most expensive problems in any growing business — each one fixed completely.",
    url: "https://marketingko.vercel.app/revenue-systems",
    images: ["/og-systems.png"],
  },
  twitter: {
    title: "Revenue Systems Engineering | Marketing Ko",
    description: "Autonomous growth systems for elite global brands.",
    images: ["/og-systems.png"],
  },
  alternates: {
    canonical: "/revenue-systems",
  },
};

export default function RevenueSystemsPage() {
  return <RevenueSystemsContent />;
}
