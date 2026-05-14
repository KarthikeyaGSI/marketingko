"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  ShoppingBag, 
  Building2, 
  ShieldCheck, 
  Stethoscope, 
  Utensils, 
  Wallet, 
  GraduationCap, 
  Users, 
  Banknote,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "ecommerce",
    title: "E-commerce",
    icon: ShoppingBag,
    subtitle: "Never Miss a Sale with Voice AI",
    description: "Handle order inquiries, product support, returns, and customer notifications with intelligent voice assistants.",
    capabilities: [
      "Order Management - Track, update, and modify orders",
      "Product Support - Troubleshooting and usage guidance",
      "Smart Returns - Smooth processing and exchange negotiation",
      "Abandoned Cart Recovery - Outbound calls to re-engage"
    ],
    blueprints: [
      "Order Status Tracker",
      "Product Inquiry Assistant",
      "Return & Exchange Handler",
      "Abandoned Cart Recovery",
      "Delivery Notifications",
      "Review Request Calls"
    ],
    personality: "Helpful, informative, reassuring, patient, and proactive.",
    callFlow: [
      "Greet and identify order number",
      "Look up order in system",
      "Provide status and tracking",
      "Address delivery concerns",
      "Offer additional assistance"
    ],
    goals: [
      "Accurate real-time information",
      "Reassure customers",
      "Resolve concerns quickly",
      "Reduce support ticket volume"
    ]
  },
  {
    id: "real-estate",
    title: "Real Estate",
    icon: Building2,
    subtitle: "Transform Property Management",
    description: "AI agents handle property inquiries, schedule site visits, and qualify buyers 24/7.",
    capabilities: [
      "Property Inquiries - Answer detailed listing questions",
      "Site Visit Booking - Automatic scheduling and management",
      "Lead Qualification - Filter by budget, timeline, and needs",
      "CRM Integration - Automatic logging of every interaction"
    ],
    blueprints: [
      "Property Inquiry Handler",
      "Site Visit Booking Agent",
      "Lead Follow-Up Agent",
      "Listing Update Calls"
    ],
    personality: "Friendly, professional, and knowledgeable about local markets.",
    callFlow: [
      "Qualify buyer intent and budget",
      "Provide specific property details",
      "Check availability for viewings",
      "Schedule site visit",
      "Sync data to CRM"
    ],
    goals: [
      "Identify serious buyers",
      "Automate viewing schedules",
      "Zero missed leads",
      "Detailed property knowledge delivery"
    ]
  },
  {
    id: "insurance",
    title: "Insurance",
    icon: ShieldCheck,
    subtitle: "Revolutionize Policy Management",
    description: "Streamline policy inquiries, renewals, and claims processing with AI-powered insurance solutions.",
    capabilities: [
      "Policy Management - Handle coverage questions and renewals",
      "Claims Processing - Guided submission and status updates",
      "Risk Assessment - Provide coverage recommendations",
      "Renewal Reminders - Proactive outbound calls for payments"
    ],
    blueprints: [
      "Policy Inquiry Assistant",
      "Claims Status Tracker",
      "Quote Request Handler",
      "Policy Renewal Support",
      "Claims Follow-Up"
    ],
    personality: "Professional, empathetic, and detail-oriented.",
    callFlow: [
      "Verify policyholder identity",
      "Process inquiry or claim intake",
      "Guide through documentation needs",
      "Provide timeline/status",
      "Offer coverage optimization tips"
    ],
    goals: [
      "Accelerate claims processing",
      "Higher renewal rates",
      "HIPAA/Industry compliance",
      "24/7 policy support"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    subtitle: "Compassionate Patient Services",
    description: "Schedule appointments, handle prescription refills, and send reminders while maintaining HIPAA compliance.",
    capabilities: [
      "Appointment Scheduling - Real-time booking and rescheduling",
      "Automated Reminders - Reduce no-shows via voice/SMS",
      "Prescription Refills - Handle intake and status inquiries",
      "Insurance Verification - Pre-check coverage details"
    ],
    blueprints: [
      "Appointment Booking Agent",
      "Prescription Refill Handler",
      "Test Results Inquiry",
      "Insurance Verification",
      "Patient Satisfaction Survey"
    ],
    personality: "Compassionate, patient, and strictly professional.",
    callFlow: [
      "Verify patient info (HIPAA)",
      "Check doctor availability",
      "Book or modify appointment",
      "Confirm insurance details",
      "Send immediate confirmation"
    ],
    goals: [
      "Reduce appointment no-shows",
      "Maintain HIPAA compliance",
      "24/7 patient access",
      "Reduce admin burnout"
    ]
  },
  {
    id: "restaurants",
    title: "Restaurants",
    icon: Utensils,
    subtitle: "Never Miss an Order Again",
    description: "Automate order taking, reservations, and customer service during peak hours effortlessly.",
    capabilities: [
      "Smart Order Taking - Natural conversation and upselling",
      "Reservation Management - Real-time availability and waitlists",
      "Delivery Coordination - Tracking and address verification",
      "Menu Information - Allergy and dietary guidance"
    ],
    blueprints: [
      "Table Reservation Agent",
      "Takeout Order Handler",
      "Catering Inquiry Assistant",
      "Special Event Promotions"
    ],
    personality: "Enthusiastic, welcoming, and efficient.",
    callFlow: [
      "Greet and take order/reservation",
      "Suggest modifiers/upsells",
      "Confirm allergies and special requests",
      "Process payment or confirmation",
      "Provide ETA"
    ],
    goals: [
      "Increase average order value",
      "Zero busy signals during peaks",
      "Perfect order accuracy",
      "Seamless POS integration"
    ]
  },
  {
    id: "finance",
    title: "Finance",
    icon: Wallet,
    subtitle: "Secure Financial Operations",
    description: "Automate loan processing, onboarding, and payment support with intelligent, compliant voice AI.",
    capabilities: [
      "Loan Processing - Intake and eligibility screening",
      "Customer Onboarding - KYC and identity verification",
      "Payment Assistance - Secure phone payments (PCI)",
      "Account Inquiries - Balance checks and transaction history"
    ],
    blueprints: [
      "Account Inquiry Handler",
      "Loan Application Support",
      "Payment Assistance",
      "Loan Recovery Calls",
      "Account Review Reminders"
    ],
    personality: "Secure, professional, and compliant.",
    callFlow: [
      "Multi-factor authentication",
      "Identify service requirement",
      "Collect necessary documents/data",
      "Process transaction or application",
      "Provide secure confirmation number"
    ],
    goals: [
      "Faster loan qualification",
      "Strict regulatory compliance",
      "Secure payment handling",
      "Reduced onboarding friction"
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    subtitle: "Transform Student Services",
    description: "Handle admissions, enrollment, financial aid, and campus tours with 24/7 intelligent assistants.",
    capabilities: [
      "Student Enrollment - Guide through applications/deadlines",
      "Financial Aid - Explain FAFSA and scholarships",
      "Campus Tours - Coordinate and schedule visits",
      "Course Registration - Help with building schedules"
    ],
    blueprints: [
      "Enrollment Inquiry Handler",
      "Course Information Assistant",
      "Application Status Follow-Up",
      "Event Invitation Calls"
    ],
    personality: "Supportive, knowledgeable, and encouraging.",
    callFlow: [
      "Identify student/prospect status",
      "Answer specific academic questions",
      "Check enrollment/tour availability",
      "Confirm dates and requirements",
      "Send follow-up resources"
    ],
    goals: [
      "Higher enrollment rates",
      "Clear financial aid communication",
      "Seamless campus experience",
      "24/7 prospective student support"
    ]
  },
  {
    id: "lead-gen",
    title: "Lead Generation",
    icon: Users,
    subtitle: "Scale Outreach Effortlessly",
    description: "Generate high-quality leads 24/7 with AI-powered calling, objection handling, and meeting booking.",
    capabilities: [
      "Outbound Cold Calling - Natural personalized outreach",
      "Inbound Qualification - BANT criteria filtering",
      "Meeting Scheduling - Direct calendar synchronization",
      "CRM Integration - Automated activity logging"
    ],
    blueprints: [
      "Lead Follow-Up Agent",
      "Cold Call Insurance Prospects",
      "Abandoned Cart Recovery",
      "Event Invitation Calls"
    ],
    personality: "Persuasive, resilient, and professional.",
    callFlow: [
      "Personalized opening pitch",
      "Identify pain points and needs",
      "Handle objections dynamically",
      "Qualify via BANT (Budget, Authority, Need, Timeline)",
      "Book demo/meeting directly"
    ],
    goals: [
      "Scale outreach without head count",
      "Higher meeting-set rates",
      "Identify high-value opportunities",
      "Consistent follow-up logic"
    ]
  },
  {
    id: "collections",
    title: "Collections",
    icon: Banknote,
    subtitle: "Automate Payment Recovery",
    description: "Improve cash flow while maintaining positive customer relationships with professional AI collections.",
    capabilities: [
      "Payment Reminders - Automated overdue notifications",
      "Payment Processing - Secure PCI-compliant intake",
      "Flexible Plans - Negotiate arrangements automatically",
      "Account Insights - Detailed communication logs"
    ],
    blueprints: [
      "Payment Reminders & Recovery",
      "Renewal Reminder Agent",
      "Follow-Up Care Calls",
      "Review Requests"
    ],
    personality: "Firm yet respectful, professional, and understanding.",
    callFlow: [
      "Verify account holder",
      "State account status and balance",
      "Identify reason for delay",
      "Offer payment or negotiation plans",
      "Secure payment or confirmation"
    ],
    goals: [
      "Improve collection rates",
      "Reduce days sales outstanding (DSO)",
      "Maintain customer relationships",
      "Accurate account management"
    ]
  }
];

export function IndustryVerticals() {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find(i => i.id === activeTab) || industries[0];

  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,oklch(0.6_0.2_250_/_0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 space-y-4">
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black tracking-[0.8em] text-primary mb-4 uppercase"
              >
                DEPLOYMENT VERTICALS
              </motion.div>
              <h2 className="text-5xl font-bold text-foreground tracking-tighter">
                INDUSTRY <br /> <span className="text-muted-foreground/40 italic">SOLUTIONS.</span>
              </h2>
            </div>
            
            <div className="flex flex-col space-y-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-500 group border ${
                    activeTab === industry.id 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : "bg-foreground/[0.02] border-border/50 text-muted-foreground hover:bg-foreground/[0.05] hover:border-border"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <industry.icon className={`h-5 w-5 ${activeTab === industry.id ? "text-primary-foreground" : "text-primary"}`} />
                    <span className="font-bold tracking-tight text-lg">{industry.title}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-500 ${activeTab === industry.id ? "translate-x-1" : "opacity-0"}`} />
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-foreground/[0.01] border border-border/50 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden backdrop-blur-3xl"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-primary">
                  <activeIndustry.icon size={200} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                      <activeIndustry.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-foreground tracking-tighter">{activeIndustry.title}</h3>
                      <p className="text-primary font-bold text-sm tracking-widest uppercase">{activeIndustry.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-2xl text-muted-foreground dark:text-muted-foreground/90 font-medium tracking-tight leading-relaxed mb-16 italic">
                    "{activeIndustry.description}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Capabilities */}
                    <div className="space-y-8">
                      <h4 className="text-xs font-black tracking-[0.4em] text-foreground/50 uppercase flex items-center gap-3">
                        <Sparkles className="h-3 w-3 text-primary" />
                        Operational Capabilities
                      </h4>
                      <ul className="space-y-4">
                        {activeIndustry.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-4 text-foreground font-medium tracking-tight leading-tight">
                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Personality & Call Flow */}
                    <div className="space-y-12">
                      <div className="space-y-6">
                        <h4 className="text-xs font-black tracking-[0.4em] text-foreground/50 uppercase">Voice Personality</h4>
                        <p className="text-lg text-muted-foreground dark:text-muted-foreground/80 font-medium leading-relaxed italic">{activeIndustry.personality}</p>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-xs font-black tracking-[0.4em] text-foreground/50 uppercase">Optimized Call Flow</h4>
                        <div className="flex flex-wrap gap-2">
                          {activeIndustry.callFlow.map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="px-3 py-1.5 rounded-lg bg-foreground/[0.05] border border-border/50 text-[10px] font-bold text-foreground/60 tracking-tight">
                                {i + 1}. {step}
                              </span>
                              {i < activeIndustry.callFlow.length - 1 && <ChevronRight className="h-3 w-3 text-white/20" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blueprints */}
                  <div className="mt-16 space-y-6">
                    <h4 className="text-xs font-black tracking-[0.4em] text-foreground/50 uppercase">Available Blueprints</h4>
                    <div className="flex flex-wrap gap-3">
                      {activeIndustry.blueprints.map((blueprint, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                          {blueprint}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-20 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-4">
                      {activeIndustry.goals.map((goal, i) => (
                        <div key={i} className="px-4 py-2 rounded-full bg-foreground/[0.02] border border-border/50 text-[10px] font-bold text-foreground/50 uppercase tracking-widest">
                          {goal}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="rounded-full px-8 py-6 border-primary/20 text-primary hover:bg-primary/10 font-bold group">
                      Sample Call Log <PhoneCall className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
