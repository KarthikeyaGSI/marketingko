"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
import { IndustryVerticals } from "@/components/sections/IndustryVerticals";
import { Mic2 } from "lucide-react";

export default function VoiceAgentsPage() {
  return (
    <SystemLayout
      title="VOICE INFRASTRUCTURE."
      subtitle="Autonomous Audio Node"
      description="24/7 autonomous sales and support agents that handle thousands of simultaneous calls with natural prosody."
      outcomes={[
        "100% Inbound Call Coverage",
        "0.02s Decision Latency",
        "60% Reduction in Support Overhead",
        "PCI & HIPAA Compliant Handling"
      ]}
      techStack={["Twilio", "OpenAI", "Vapi", "Retell", "Airtable", "11Labs"]}
      features={[
        { title: "Dynamic Logic", desc: "Agents that adapt to user sentiment and handle objections in real-time." },
        { title: "Seamless Integration", desc: "Native connections with CRMs, POS systems, and calendar tools." },
        { title: "Secure Transactions", desc: "Safe handling of payments and sensitive data over the phone." },
        { title: "Live Handoff", desc: "Intelligent routing to human agents for high-complexity exceptions." }
      ]}
      faqs={[
        { q: "Do they sound robotic?", a: "No. We use advanced text-to-speech protocols like Retell and 11Labs to ensure natural inflection and prosody, indistinguishable from human speech in most contexts." },
        { q: "Can they handle complex order inquiries?", a: "Yes. Our agents can track orders, provide real-time shipping updates, handle modifications, and even negotiate return/exchange solutions dynamically." },
        { q: "Does it integrate with my existing systems?", a: "Absolutely. We build native bridges to HubSpot, Salesforce, Shopify, and proprietary POS or CRM systems via secure API protocols." },
        { q: "Can the AI handle outbound cold calling?", a: "Yes, our outbound agents are engineered for high-intent lead generation, meeting scheduling, and automated payment reminders with natural objection handling." },
        { q: "Is the data secure and compliant?", a: "We implement enterprise-grade security including SOC2, HIPAA, and PCI-DSS compliance to ensure all sensitive customer and financial data is protected." },
        { q: "Does it support multiple languages?", a: "Yes. Our systems support 24+ languages with localized accents and cultural context, allowing for seamless global deployment." }
      ]}
      icon={Mic2}
    >
      <IndustryVerticals />
    </SystemLayout>
  );
}
