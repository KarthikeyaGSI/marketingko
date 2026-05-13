"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
import { MessageSquare } from "lucide-react";

export default function ChatSystemsPage() {
  return (
    <SystemLayout
      title="CHAT INTELLIGENCE."
      subtitle="Interactive Logic Node"
      description="Advanced LLM-driven chat systems that provide 24/7 support, capture leads, and assist onboarding."
      outcomes={[
        "92% Instant Query Resolution",
        "3.1x Increase in Web Lead Capture",
        "70% Lower Support Ticket Volume"
      ]}
      techStack={["OpenAI", "Intercom", "Chatbase", "Voiceflow", "Slack"]}
      features={[
        { title: "Knowledge Base Sync", desc: "Native integration with Notion or Zendesk to provide accurate, real-time answers." },
        { title: "Proactive Engagement", desc: "Triggers based on user behavior (e.g., spending 2 mins on pricing page)." },
        { title: "Onboarding Assist", desc: "Interactive step-by-step guidance for new platform users." },
        { title: "Human Escalation", desc: "Seamless handoff to Slack or Intercom for high-value sales conversations." }
      ]}
      faqs={[
        { q: "Can it handle complex technical questions?", a: "Yes. By syncing with your documentation, the AI can provide deep technical assistance based on your actual data." },
        { q: "How long is the training process?", a: "Initial deployment takes < 48 hours once the knowledge base is connected." }
      ]}
      icon={MessageSquare}
    />
  );
}
