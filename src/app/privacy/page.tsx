import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Marketing Ko",
  description: "How we protect your business data and infrastructure sovereignty. Engineered for total privacy and security.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <PrivacyContent />
      <Footer />
    </>
  );
}
