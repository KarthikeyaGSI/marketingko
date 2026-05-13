"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Clock, Target } from "lucide-react";

const cases = [
  {
    client: "Global Logistics Corp",
    title: "Saving 15,000 Hours with AI Voice Dispatch",
    results: "85% reduction in manual dispatching",
    metric: "12x ROI",
    icon: Clock,
  },
  {
    client: "TechFlow Systems",
    title: "Scaling Lead Gen by 400% with AI Sales Pipelines",
    results: "Zero manual data entry in 6 months",
    metric: "$2.4M Growth",
    icon: TrendingUp,
  },
  {
    client: "Luxe Realty Group",
    title: "AI Property Matchmaker: Closing Deals 3x Faster",
    results: "98% accuracy in lead qualification",
    metric: "300% Conversion",
    icon: Target,
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-6">
        <div className="mb-32">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8"
          >
            PROVEN <br />
            <span className="text-muted-foreground">OUTCOMES.</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-xl">
            Real data. Real growth. Explore how we've helped forward-thinking enterprises 
            dominate their industries through AI infrastructure.
          </p>
        </div>

        <div className="space-y-12 mb-32">
          {cases.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-12 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-all overflow-hidden"
            >
              <div className="flex flex-col md:row items-start justify-between gap-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <span className="text-xs font-bold uppercase tracking-widest">{c.client}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                    {c.title}
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {c.results}
                  </p>
                  <Button variant="ghost" className="text-white p-0 hover:bg-transparent group-hover:translate-x-2 transition-transform">
                    View Case Study <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="w-full md:w-80 p-8 rounded-2xl bg-black border border-white/10 flex flex-col items-center justify-center text-center space-y-4">
                  <c.icon className="h-10 w-10 text-white mb-2" />
                  <span className="text-4xl font-bold text-white">{c.metric}</span>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Impact Measured</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
