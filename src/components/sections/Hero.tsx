"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SystemsMarquee } from "./SystemsMarquee";

// Cinematic stagger config
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const wordReveal = {
  hidden: { opacity: 0, y: 80, rotateX: 40, filter: "blur(12px)" },
  visible: { 
    opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as const }
  }
};

const nodes = [
  { label: "LEADS", x: 50, y: 8, delay: 0 },
  { label: "AI QUALIFY", x: 88, y: 30, delay: 0.3 },
  { label: "NURTURE", x: 80, y: 70, delay: 0.6 },
  { label: "CONVERT", x: 50, y: 90, delay: 0.9 },
  { label: "REVENUE", x: 15, y: 65, delay: 1.2 },
  { label: "ANALYZE", x: 12, y: 25, delay: 1.5 },
  { label: "LIMITS", x: 75, y: 15, delay: 1.8, type: 'critical' },
];

const connections = [
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,0],
  [0,2],[1,3],[2,4],[3,5],[4,0],[5,1],
  [6,0],
];

// Animated 3D Network Visualization — inline for hero
function HeroNetwork() {
  const [leakIndex, setLeakIndex] = useState(6);
  const [isFixing, setIsFixing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFixing(true);
      setTimeout(() => {
        setLeakIndex((prev) => (prev === 6 ? Math.floor(Math.random() * 6) : 6));
        setIsFixing(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[350px]">
      {/* Ambient glow core */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-[100px]"
      />

      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke={nodes[a].type === 'critical' ? "oklch(var(--destructive))" : "oklch(var(--primary))"}
            strokeWidth="0.3"
            strokeDasharray={nodes[a].type === 'critical' ? "1 1" : "2 3"}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: nodes[a].type === 'critical' ? [0.1, 0.4, 0.1] : 0.2 
            }}
            transition={{ 
              duration: 2, 
              delay: 0.5 + i * 0.1, 
              ease: "easeOut",
              opacity: nodes[a].type === 'critical' ? { duration: 1, repeat: Infinity } : {}
            }}
          />
        ))}
        
        {/* Animated leakage particles from LIMITS connection */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`leak-${i}`}
            r="0.5"
            fill="oklch(var(--destructive))"
            initial={{ opacity: 0 }}
            animate={{
              cx: [nodes[leakIndex].x, nodes[leakIndex].x - 10, nodes[leakIndex].x],
              cy: [nodes[leakIndex].y, nodes[leakIndex].y + 15, nodes[leakIndex].y + 30],
              opacity: [0, 1, 0],
              r: [0.5, 0.8, 0.2]
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Animated data pulse traveling along paths */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="1"
            fill="oklch(var(--primary))"
            initial={{ opacity: 0 }}
            animate={{
              cx: [nodes[i].x, nodes[(i+1)%6].x],
              cy: [nodes[i].y, nodes[(i+1)%6].y],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute group"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 + node.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow ring */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: (node.type === 'critical' || i === leakIndex) ? [0.4, 0, 0.4] : [0.3, 0, 0.3] }}
            transition={{ duration: (node.type === 'critical' || i === leakIndex) ? 1.5 : 3, repeat: Infinity, delay: i * 0.4 }}
            className={`absolute inset-0 rounded-full border ${(node.type === 'critical' || i === leakIndex) ? 'border-destructive/50' : 'border-primary/30'}`}
            style={{ margin: '-8px' }}
          />
          
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border ${(node.type === 'critical' || i === leakIndex) ? 'border-destructive/40' : 'border-primary/30'} bg-background/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_oklch(var(--primary)/0.2)] group-hover:border-primary/60 group-hover:shadow-[0_0_50px_oklch(var(--primary)/0.4)] transition-all duration-700`}>
            <span className={`text-[6px] md:text-[8px] font-black tracking-[0.15em] ${(node.type === 'critical' || i === leakIndex) ? 'text-destructive' : 'text-foreground'} group-hover:text-primary transition-colors duration-500 text-center leading-tight uppercase`}>{node.label}</span>
          </div>

          {/* Leakage Badge for this specific node */}
          {i === leakIndex && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 z-20"
            >
              <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border ${isFixing ? 'border-primary/40 bg-primary/10 text-primary' : 'border-destructive/40 bg-destructive/10 text-destructive'} backdrop-blur-md shadow-xl whitespace-nowrap`}>
                {isFixing ? <ShieldCheck className="w-3 h-3 animate-bounce" /> : <Activity className="w-3 h-3 animate-pulse" />}
                <span className="text-[8px] font-black uppercase tracking-widest">
                  {isFixing ? 'Resolving Leak...' : 'Leakage Detected'}
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Center hub (GROWTH OS) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 rounded-full border border-dashed border-primary/20"
        />
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-primary bg-background shadow-[0_0_60px_oklch(var(--primary)/0.4)] flex items-center justify-center">
          <div className="text-center">
            <span className="text-[6px] md:text-[7px] font-black tracking-[0.3em] text-primary uppercase block">GROWTH</span>
            <span className="text-[8px] md:text-[9px] font-black tracking-tight text-foreground">OS</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const dynamicWords = ["OS", "SYSTEMS", "INFRASTRUCTURE", "ENGINE"];
const resourceWords = ["REVENUE.", "LEADS.", "MARGINS.", "OPPORTUNITY."];

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  
  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });

  const [wordIndex, setWordIndex] = useState(0);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 3000);
    
    // Generate particles only on client to avoid hydration mismatch
    setParticles([...Array(12)].map(() => ({
      x: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 10,
      drift: (Math.random() - 0.5) * 20
    })));

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background pt-24 md:pt-28 pb-0 scene-divider">
      {/* ATMOSPHERIC LAYERS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-infrastructure opacity-15" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="glow-orb w-[500px] h-[500px] bg-primary/10 top-[-10%] right-[-10%]" />
        <div className="glow-orb w-[400px] h-[400px] bg-primary/8 bottom-[10%] left-[-5%]" style={{ animationDelay: "3s" }} />
        
        {/* LEAKAGE PARTICLES (Environmental) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{ 
                x: `${p.x}%`, 
                y: -20, 
                opacity: 0 
              }}
              animate={{ 
                y: "110vh",
                opacity: [0, 0.4, 0],
                x: [`${p.x}%`, `${p.x + p.drift}%`]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <motion.div 
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,oklch(var(--primary)/0.15)_0%,transparent_50%)]" 
        />
      </div>
      
      {/* KINETIC TYPOGRAPHY (Background) */}
      <motion.div 
        style={{ y: y2, opacity: 0.025 }}
        className="absolute top-0 left-0 w-full whitespace-nowrap text-[15rem] md:text-[22rem] font-black italic select-none pointer-events-none z-[1] text-foreground/50 dark:text-foreground/30"
      >
        GROWTH ARCHITECTURE • SYSTEMS • REVENUE •
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* CONTENT — Left weighted */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center space-x-4 md:space-x-6 px-5 md:px-8 py-3 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl group"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.8em] md:tracking-[1em] text-foreground uppercase">
                SYSTEMS ONLINE v2.0
              </span>
            </motion.div>

            {/* HEADLINE — Cinematic typography */}
            <div className="space-y-4 md:space-y-8">
              <div className="overflow-visible relative">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="text-[2.8rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.06em] text-foreground leading-[0.9] uppercase relative z-10"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-5">
                    <motion.span variants={wordReveal} className="inline-block">
                      GROWTH
                    </motion.span>
                    <div className="relative h-[1em] w-[180px] sm:w-[300px] md:w-[400px] lg:w-[450px] overflow-hidden inline-block align-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={dynamicWords[wordIndex]}
                          initial={{ y: 50, opacity: 0, rotateX: -40 }}
                          animate={{ y: 0, opacity: 1, rotateX: 0 }}
                          exit={{ y: -50, opacity: 0, rotateX: 40 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 text-primary"
                        >
                          {dynamicWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex items-baseline flex-wrap mt-1 md:mt-2 gap-x-3 md:gap-x-5">
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, x: -40, filter: "blur(15px)" },
                        visible: { 
                          opacity: 1, scale: 1, x: 0, filter: "blur(0px)", 
                          transition: { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] } 
                        }
                      }}
                      className="text-primary italic font-medium text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl relative"
                    >
                      LEAKING
                      {/* Animated Leak Drip */}
                      <motion.div 
                        animate={{ y: [0, 20, 40], opacity: [0, 1, 0], scale: [1, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
                        className="absolute bottom-0 left-1/2 w-1 h-4 bg-primary/40 blur-sm rounded-full"
                      />
                    </motion.span>
                    <div className="relative h-[1em] min-w-[150px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[400px] overflow-hidden inline-block align-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={resourceWords[wordIndex]}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -50, opacity: 0 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0"
                        >
                          {resourceWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.h1>
              </div>
              
              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, filter: "blur(15px)", y: 40 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl font-medium tracking-tight leading-[1.3] italic"
              >
                AI automations, voice agents, and web systems — <span className="text-primary not-italic font-black uppercase">engineered</span> around your outcomes, not our deliverables.
              </motion.p>
            </div>

            {/* CTA ROW */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-8 pt-2 md:pt-4"
            >
              <Link href="/contact">
                <MagneticButton>
                  <Button size="lg" className="rounded-2xl px-8 md:px-12 h-14 md:h-16 text-sm md:text-base bg-primary text-primary-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-[0.15em] shadow-[0_20px_60px_-10px_oklch(var(--primary)/0.5)] transition-all duration-700 group border-none relative overflow-hidden">
                    <span className="relative z-10">Book Free Audit</span>
                    <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                    <div className="absolute inset-0 bg-foreground/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </Button>
                </MagneticButton>
              </Link>
              
              <div className="flex flex-col space-y-1 border-l-2 border-foreground/10 pl-6">
                <span className="text-[9px] font-black tracking-[0.5em] text-foreground uppercase">ROI-DRIVEN</span>
                <span className="text-base md:text-lg font-bold italic tracking-tight text-foreground leading-none">Systems that pay for themselves.</span>
              </div>
            </motion.div>
          </div>

          {/* 3D NETWORK VISUALIZATION — Right */}
          <motion.div 
            style={{ y: springY1, opacity }}
            className="lg:col-span-5 relative h-[350px] md:h-[450px] lg:h-[550px]"
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>
      
      {/* SYSTEMS MARQUEE — Above the fold */}
      <div className="w-full mt-auto relative z-20">
        <div className="container mx-auto px-6 mb-2">
          <span className="text-[8px] font-black tracking-[1em] text-primary uppercase opacity-40">Core Infrastructure Nodes</span>
        </div>
        <SystemsMarquee />
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none"
      >
        <span className="text-[8px] md:text-[9px] font-black tracking-[1em] text-foreground uppercase">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
