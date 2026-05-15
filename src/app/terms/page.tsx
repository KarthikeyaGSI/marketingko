import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Marketing Ko",
  description: "Our operational protocols and legal framework for client engagements. Transparency in engineering and delivery.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <TermsContent />
      <Footer />
    </>
  );
}
