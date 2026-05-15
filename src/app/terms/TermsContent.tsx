"use client";

import { motion } from "framer-motion";
import { Shield, FileText, CheckCircle2, AlertCircle, Clock, CreditCard, Zap } from "lucide-react";

const terms = [
  {
    id: "01",
    title: "Financial Protocol",
    icon: CreditCard,
    points: [
      "50% advance payment is mandatory to initialize the system architecture and secure engineering resources.",
      "The advance payment is strictly non-refundable once the project initialization phase begins.",
      "The remaining 50% balance is due in full prior to the final delivery and handover of system credentials."
    ]
  },
  {
    id: "02",
    title: "Deployment Timeline",
    icon: Clock,
    points: [
      "All delivery timelines are subject to the timely provision of required resources, content, and credentials by the client.",
      "Timelines are established assuming a sub-24h feedback loop from the client side.",
      "Delays caused by late responses or missing client-side resources will extend the final delivery deadline accordingly."
    ]
  },
  {
    id: "03",
    title: "Intellectual Property",
    icon: Shield,
    points: [
      "Upon final payment, the client is granted a perpetual license to use the custom-engineered systems for their business operations.",
      "Marketing Ko retains ownership of proprietary underlying logic layers and core automation frameworks used across multiple deployments."
    ]
  },
  {
    id: "04",
    title: "System Maintenance",
    icon: Zap,
    points: [
      "Post-delivery maintenance is subject to the agreed-upon management retainer.",
      "Marketing Ko is not responsible for system failures caused by third-party API changes beyond our immediate control."
    ]
  }
];

export default function TermsContent() {
  return (
    <main className="pt-40 md:pt-60 pb-40 bg-background min-h-screen relative overflow-hidden mesh-animate">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />
      <div className="ambient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-6 px-8 py-3 rounded-full border border-primary/20 bg-primary/5"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.8em] text-foreground uppercase italic">Operational Framework v2.0</span>
            </motion.div>

            <h1 className="text-5xl md:text-9xl font-bold text-foreground tracking-tightest leading-[0.85] text-mask-premium uppercase">
              TERMS OF <br />
              <span className="text-muted-foreground/10 italic font-medium">SERVICE.</span>
            </h1>
            
            <p className="text-2xl text-muted-foreground max-w-2xl font-medium tracking-tightest leading-tight italic border-l-2 border-primary pl-8">
              Transparency is our primary protocol. These terms define our commitment to engineering excellence and the client&apos;s role in a successful deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {terms.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="p-10 md:p-16 rounded-[3rem] border border-border bg-foreground/[0.01] backdrop-blur-3xl space-y-10 group hover:border-primary/20 transition-all duration-700"
              >
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700">
                    <section.icon className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-black text-foreground/10 uppercase tracking-widest group-hover:text-primary transition-colors">Section {section.id}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground tracking-tighter uppercase italic">{section.title}</h3>
                
                <ul className="space-y-6">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-4 group/item">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                      <p className="text-lg text-muted-foreground font-medium tracking-tight leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="p-12 md:p-20 rounded-[4rem] glass-system border-primary/10 space-y-10">
             <div className="flex items-center space-x-6">
                <AlertCircle className="w-10 h-10 text-primary" />
                <h4 className="text-3xl font-bold text-foreground tracking-tighter uppercase italic">Legal Note</h4>
             </div>
             <p className="text-xl text-muted-foreground font-medium leading-relaxed tracking-tight italic max-w-4xl">
               By initializing a project with Marketing Ko, you acknowledge and agree to these operational protocols. 
               We build for scale and speed, and these terms ensure the infrastructure is deployed with maximum reliability.
             </p>
             <div className="pt-10 border-t border-border/50">
               <p className="text-[10px] font-black text-foreground/20 uppercase tracking-[0.5em] italic">Last Synchronized: May 2026</p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
