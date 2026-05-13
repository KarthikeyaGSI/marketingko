"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
import { Users } from "lucide-react";

export default function LeadQualPage() {
  return (
    <SystemLayout
      title="LEAD QUALIFICATION."
      subtitle="Autonomous Ingestion Node"
      description="Identify, score, and route high-intent targets with 98% logic accuracy and zero human friction."
      outcomes={[
        "94% Reduction in Manual Qualification",
        "12.4x Increase in Lead Velocity",
        "312% Pipeline Growth within 90 Days"
      ]}
      techStack={["OpenAI", "Claude", "HubSpot", "Zapier", "Make"]}
      features={[
        { title: "Smart Ingestion", desc: "Automated capture from LinkedIn, website, and cold outreach nodes." },
        { title: "AI Scoring Logic", desc: "Proprietary pattern matching to isolate top 5% revenue targets." },
        { title: "CRM Synthesis", desc: "Direct injection of qualified data into your existing sales pipeline." },
        { title: "Instant Routing", desc: "Logic-based distribution to your top-performing sales agents." }
      ]}
      faqs={[
        { q: "How does the AI handle data accuracy?", a: "The system uses multi-model verification (OpenAI + Claude) to cross-reference lead data before CRM injection." },
        { q: "Is this compatible with HubSpot?", a: "Yes, we build native integrations for HubSpot, Salesforce, and GoHighLevel via API protocols." }
      ]}
      icon={Users}
    />
  );
}
