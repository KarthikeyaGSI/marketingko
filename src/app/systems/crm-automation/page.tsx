"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
import { Database } from "lucide-react";

export default function CRMAutomationPage() {
  return (
    <SystemLayout
      title="CRM INFRASTRUCTURE."
      subtitle="Operational Data Node"
      description="Eliminate manual data bottlenecks with self-healing CRM workflows and automated sales triggers."
      outcomes={[
        "85% Reduction in Administrative Tasks",
        "100% Data Integrity across Pipelines",
        "4.2x Faster Deal Velocity"
      ]}
      techStack={["HubSpot", "Salesforce", "Zapier", "Make", "Airtable"]}
      features={[
        { title: "Pipeline Automation", desc: "Automated stage transitions based on behavioral data and AI scoring." },
        { title: "Self-Healing Data", desc: "AI-driven cleanup of duplicate leads and inconsistent data entries." },
        { title: "Sales Triggers", desc: "Instant notifications for high-intent actions like pricing page visits." },
        { title: "Automated Follow-ups", desc: "Multi-channel sequences triggered by lead movement through the CRM." }
      ]}
      faqs={[
        { q: "Which CRMs do you support?", a: "We specialize in HubSpot, Salesforce, and Pipedrive, but can build custom middleware for any API-enabled CRM." },
        { q: "Does this include data migration?", a: "We provide full data cleanup and infrastructure planning before deployment to ensure a clean transition." }
      ]}
      icon={Database}
    />
  );
}
