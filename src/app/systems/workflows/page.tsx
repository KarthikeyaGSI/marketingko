"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
import { Cpu } from "lucide-react";

export default function WorkflowsPage() {
  return (
    <SystemLayout
      title="WORKFLOW ENGINEERING."
      subtitle="Operational Logic Node"
      description="Sovereign operational protocols that eliminate human friction across Slack, Zapier, and Make."
      outcomes={[
        "2,400+ Hours Saved Annually",
        "Zero-Error Data Distribution",
        "Real-Time Operational Reporting"
      ]}
      techStack={["Zapier", "Make", "Slack", "G-Suite", "Airtable"]}
      features={[
        { title: "Cross-Platform Sync", desc: "Real-time data flow between G-Suite, Slack, and your operational hub." },
        { title: "Automated Reporting", desc: "Daily KPI snapshots pushed directly to management Slack channels." },
        { title: "Slack Workflows", desc: "Custom internal triggers for approvals, task creation, and client updates." },
        { title: "Error Guardrails", desc: "Self-healing logic that notifies the team if a critical automation node fails." }
      ]}
      faqs={[
        { q: "Do we need a Zapier subscription?", a: "Yes, we build on top of your existing tools, though we often recommend Make for complex, low-cost operations." },
        { q: "What if an automation breaks?", a: "We build redundant paths and 'Dead-Letter Queues' to ensure no data is ever lost during a node failure." }
      ]}
      icon={Cpu}
    />
  );
}
