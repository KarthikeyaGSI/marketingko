"use client";

import { SystemLayout } from "@/components/layout/SystemLayout";
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
        "60% Reduction in Support Overhead"
      ]}
      techStack={["Twilio", "OpenAI", "Vapi", "Retell", "Airtable"]}
      features={[
        { title: "Appointment Booking", desc: "Native integration with Google Calendar and Calendly for 24/7 scheduling." },
        { title: "Sentiment Analysis", desc: "Real-time emotional tracking to adjust conversation flow dynamically." },
        { title: "Multilingual Logic", desc: "Support for 24+ languages with localized accents and cultural context." },
        { title: "Live Handoff", desc: "Seamless transition to human operators for high-complexity exceptions." }
      ]}
      faqs={[
        { q: "Do they sound robotic?", a: "No. We use advanced text-to-speech protocols like Retell and 11Labs to ensure natural inflection and prosody." },
        { q: "Can they handle outbound calls?", a: "Yes, our voice agents are designed for both inbound handling and high-intent outbound follow-up." }
      ]}
      icon={Mic2}
    />
  );
}
