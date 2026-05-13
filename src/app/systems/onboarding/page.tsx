"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
import { UserPlus } from "lucide-react";

export default function OnboardingPage() {
  return (
    <SystemLayout
      title="ONBOARDING SYSTEMS."
      subtitle="Client Retention Node"
      description="Self-healing onboarding protocols that maximize client success and retention with automated document collection."
      outcomes={[
        "100% Onboarding Consistency",
        "75% Reduction in Time-to-Value",
        "Zero Missed Documents/Assets"
      ]}
      techStack={["HubSpot", "PandaDoc", "Slack", "Notion", "Tally"]}
      features={[
        { title: "Automated Document Collection", desc: "AI-driven reminders and verification for contracts and brand assets." },
        { title: "Dynamic Client Portals", desc: "Self-service Notion or custom dashboards for real-time project tracking." },
        { title: "Instant Team Alerts", desc: "Automated project kickoff tasks assigned to your internal delivery nodes." },
        { title: "Nurture Sequences", desc: "The first 30 days of the client relationship, managed entirely by autonomous workflows." }
      ]}
      faqs={[
        { q: "Can it handle custom contract logic?", a: "Yes, via PandaDoc or DocuSign API integrations, we can automate variable-based contract generation." },
        { q: "Does this sync with Slack?", a: "Absolutely. Every client milestone can be mirrored to a dedicated internal Slack channel." }
      ]}
      icon={UserPlus}
    />
  );
}
