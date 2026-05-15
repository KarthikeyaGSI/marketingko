"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SystemsMarquee } from "./SystemsMarquee";
import { IndustriesMarquee } from "./IndustriesMarquee";
import { Magnetic } from "@/components/ui/Magnetic";
import gsap from "gsap";

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

// Floating HUD Component for that "startup-elite" feel
function FloatingHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block">
      {/* HUD Top Left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-10 left-10 p-6 glass-system rounded-2xl border-primary/20 space-y-3"
      >
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[9px] font-black tracking-widest text-primary uppercase">Acquisition Node: Active</span>
        </div>
        <div className="space-y-1">
          <div className="w-32 h-1 bg-foreground/5 rounded-full overflow-hidden">
            <motion.div 
              animate={{ width: ["0%", "80%", "30%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="h-full bg-primary/40"
            />
          </div>
          <p className="text-[8px] font-mono text-foreground/40">LATENCY: 12ms</p>
        </div>
      </motion.div>

      {/* HUD Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-40 right-10 p-6 glass-system rounded-2xl border-primary/20 flex flex-col items-end space-y-2"
      >
        <div className="flex items-center space-x-3">
          <span className="text-[9px] font-black tracking-widest text-primary uppercase">Logic Stream: Synchronized</span>
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <div className="flex space-x-1 items-end h-8">
          {[...Array(8)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [10, 30, 15, 25, 10] }}
              transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
              className="w-1 bg-primary/20 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

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
        {[...Array(3)].map((_, i) => (
          <motion.circle
            key={`leak-${i}`}
            r="0.5"
            fill="oklch(var(--destructive))"
            initial={{ opacity: 0 }}
            animate={nodes[leakIndex] ? {
              cx: [nodes[leakIndex].x, nodes[leakIndex].x - 10, nodes[leakIndex].x],
              cy: [nodes[leakIndex].y, nodes[leakIndex].y + 15, nodes[leakIndex].y + 30],
              opacity: [0, 1, 0],
              r: [0.5, 0.8, 0.2]
            } : { opacity: 0 }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "easeIn"
            }}
          />
        ))}

        {/* Animated data pulse traveling along paths */}
        {[0, 2, 4].map((i) => (
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
          animate={{ 
            opacity: 1, 
            scale: (i === leakIndex) ? [1, 1.1, 1] : 1,
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 1.5 + node.delay },
            scale: (i === leakIndex) ? { duration: 1, repeat: Infinity } : { duration: 0.8, delay: 1.5 + node.delay }
          }}
        >
          {/* Glow ring */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: (node.type === 'critical' || i === leakIndex) ? [0.4, 0, 0.4] : [0.3, 0, 0.3] }}
            transition={{ duration: (node.type === 'critical' || i === leakIndex) ? 1.5 : 3, repeat: Infinity, delay: i * 0.4 }}
            className={`absolute inset-0 rounded-full border ${(node.type === 'critical' || i === leakIndex) ? 'border-destructive/50' : 'border-primary/30'}`}
            style={{ margin: '-8px' }}
          />
          
            <div className={`flex w-16 h-16 md:w-20 md:h-20 rounded-full border ${(node.type === 'critical' || i === leakIndex) ? 'border-destructive/60 bg-destructive/5' : 'border-primary/30 bg-background/80'} backdrop-blur-xl items-center justify-center shadow-[0_0_30px_oklch(var(--primary)/0.2)] group-hover:border-primary/60 group-hover:shadow-[0_0_50px_oklch(var(--primary)/0.4)] transition-all duration-700 relative overflow-hidden`}>
              {i === leakIndex && isFixing && (
                <motion.div 
                  initial={{ y: "100%" }}
                  animate={{ y: "-100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                />
              )}
              <span className={`text-[9px] md:text-[10px] font-black tracking-tight md:tracking-[0.15em] ${(node.type === 'critical' || i === leakIndex) ? 'text-destructive' : 'text-foreground'} group-hover:text-primary transition-colors duration-500 text-center leading-tight uppercase relative z-10 px-1`}>{node.label}</span>
            </div>

          {/* Leakage Badge for this specific node */}
          {i === leakIndex && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 z-20 hidden md:block"
            >
              <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${isFixing ? 'border-primary/60 bg-primary/20 text-primary' : 'border-destructive/60 bg-destructive/20 text-destructive'} backdrop-blur-md shadow-2xl whitespace-nowrap animate-in fade-in zoom-in duration-500`}>
                {isFixing ? <ShieldCheck className="w-4 h-4 animate-bounce" /> : <Activity className="w-4 h-4 animate-pulse" />}
                <span className="text-[10px] font-black uppercase tracking-widest">
                  {isFixing ? 'Fixing Leakage...' : 'Leakage Detected'}
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
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-primary bg-background shadow-[0_0_60px_oklch(var(--primary)/0.4)] flex items-center justify-center">
          <div className="text-center">
            <span className="text-[7px] md:text-[8px] font-black tracking-[0.3em] text-primary uppercase block">GROWTH</span>
            <span className="text-[9px] md:text-[11px] font-black tracking-tight text-foreground uppercase">OS</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FloatingUI() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.floating-node');
    
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-2, 2)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 hidden xl:block">
      {/* Analytics Card 1 */}
      <div className="floating-node absolute top-[25%] left-[5%] p-6 glass-system rounded-3xl border-primary/20 space-y-4 backdrop-blur-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">LIVE CONVERSION FLOW</span>
        </div>
        <div className="text-3xl font-black italic tracking-tighter text-foreground">$12.4k<span className="text-sm text-green-500 ml-2">+24%</span></div>
      </div>

      {/* Analytics Card 2 */}
      <div className="floating-node absolute bottom-[35%] right-[5%] p-6 glass-system rounded-3xl border-primary/20 space-y-4 backdrop-blur-2xl">
        <div className="flex items-center space-x-3">
          <Activity className="w-3 h-3 text-primary" />
          <span className="text-[9px] font-black tracking-widest text-foreground/40 uppercase">SYSTEM VELOCITY</span>
        </div>
        <div className="flex space-x-1 h-12 items-end">
          {[40, 70, 45, 90, 60, 85].map((h, i) => (
            <div key={i} className="w-1.5 bg-primary/20 rounded-full" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
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
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background pt-32 md:pt-48 pb-0">
      {/* ATMOSPHERIC LAYERS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 grid-infrastructure opacity-5" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        
        {/* Premium Cinematic Lighting */}
        <div className="glow-orb w-[1000px] h-[1000px] bg-primary/15 top-[-20%] right-[-10%] blur-[150px]" />
        <div className="glow-orb w-[800px] h-[800px] bg-primary/10 bottom-[-20%] left-[-10%] blur-[120px]" style={{ animationDelay: "3s" }} />
        
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
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full whitespace-nowrap text-[15rem] md:text-[28rem] font-black italic select-none pointer-events-none z-[1] text-foreground/[0.02] dark:text-foreground/[0.03] hidden md:block uppercase tracking-tighter opacity-50"
      >
        REVENUE INFRASTRUCTURE • GROWTH OS • AUTONOMOUS SCALING •
      </motion.div>

      <FloatingUI />

      <FloatingHUD />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* CONTENT — Left weighted */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            {/* Status badge & Social Proof */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="inline-flex items-center space-x-4 px-6 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl group">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_15px_oklch(var(--primary))]" />
                <span className="text-[9px] font-black tracking-[0.8em] text-foreground uppercase">
                  SYSTEMS ONLINE v2.0
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 px-5 py-3 rounded-2xl border border-border bg-black/80 backdrop-blur-md shadow-2xl">
                   <img src="/asian.webp" alt="Asian Institute of Allergy" width={120} height={32} className="h-6 w-auto object-contain brightness-0 invert opacity-80" loading="eager" />
                   <div className="w-px h-4 bg-border" />
                   <span className="text-[10px] font-black tracking-widest text-foreground uppercase">Trusted Partner</span>
                </div>
                <span className="text-[9px] font-black tracking-widest text-muted-foreground dark:text-muted-foreground/60 uppercase">
                  & much more...
                </span>
              </div>
            </motion.div>

            {/* HEADLINE — Cinematic typography */}
            <div className="space-y-4 md:space-y-8">
              <div className="overflow-visible relative">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tightest text-foreground leading-[1.1] sm:leading-[0.9] uppercase relative z-10"
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-6">
                    <motion.span variants={wordReveal} className="inline-block">
                      GROWTH
                    </motion.span>
                    <div className="relative h-[1.1em] min-w-[2ch] overflow-hidden inline-flex align-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={dynamicWords[wordIndex]}
                          initial={{ y: "100%", opacity: 0, rotateX: -40 }}
                          animate={{ y: 0, opacity: 1, rotateX: 0 }}
                          exit={{ y: "-100%", opacity: 0, rotateX: 40 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="text-primary italic font-medium leading-none whitespace-nowrap block"
                        >
                          {dynamicWords[wordIndex]}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                  <div className="flex items-baseline flex-wrap mt-2 md:mt-4 gap-x-3 md:gap-x-6">
                    <motion.span
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, x: -40, filter: "blur(15px)" },
                        visible: { 
                          opacity: 1, scale: 1, x: 0, filter: "blur(0px)", 
                          transition: { duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] } 
                        }
                      }}
                      className="text-foreground italic font-medium text-[1.8rem] sm:text-4xl md:text-6xl lg:text-8xl relative"
                    >
                      SEALING
                      {/* Animated Leak Drip */}
                      <motion.div 
                        animate={{ y: [0, 20, 40], opacity: [0, 1, 0], scale: [1, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
                        className="absolute bottom-0 left-1/2 w-1 h-4 bg-primary/40 blur-sm rounded-full"
                      />
                    </motion.span>
                    <div className="relative h-[1.1em] min-w-[3ch] overflow-hidden inline-flex align-baseline">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={resourceWords[wordIndex]}
                          initial={{ y: "100%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: "-100%", opacity: 0 }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="leading-none whitespace-nowrap block"
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
                className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground dark:text-muted-foreground/90 max-w-4xl font-medium tracking-tightest leading-tight italic"
              >
                We don&apos;t sell hours. We deploy <span className="text-primary not-italic font-black uppercase">Revenue Infrastructure</span> that identifies, qualifies, and converts targets autonomously.
              </motion.p>
            </div>

            {/* CTA ROW */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 pt-4 relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/contact">
                  <Magnetic>
                    <Button size="lg" className="rounded-[2rem] px-12 md:px-20 h-20 md:h-24 text-base md:text-xl bg-primary text-black hover:scale-105 font-black uppercase tracking-widest shadow-[0_30px_100px_-20px_oklch(var(--primary)/0.7)] transition-all duration-700 group border-none relative overflow-hidden">
                      <span className="relative z-10">Initiate Strategy Call</span>
                      <ArrowRight className="ml-4 h-6 w-6 md:h-8 md:w-8 group-hover:translate-x-3 transition-transform duration-500 relative z-10" />
                      <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Button>
                  </Magnetic>
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-[10px] font-black tracking-widest text-foreground uppercase">Live Signals Detected</span>
                </div>
                <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-foreground leading-none">
                  $1.2M+ <span className="text-muted-foreground/60 not-italic text-sm">Revenue Recaptured</span>
                </span>
              </motion.div>
            </div>
          </div>

          {/* 3D NETWORK VISUALIZATION — Right */}
          <motion.div 
            style={{ y: springY1, opacity }}
            className="lg:col-span-5 relative h-[350px] md:h-[450px] lg:h-[550px] lg:pl-32 lg:translate-x-12"
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>
      
      {/* SYSTEMS MARQUEE — High impact above fold */}
      <div className="w-full relative z-20 mt-12 md:mt-16">
        <div className="container mx-auto px-6 mb-2">
          <span className="text-[8px] font-black tracking-[1em] text-primary uppercase opacity-40">System Architecture</span>
        </div>
        <SystemsMarquee />
      </div>

      {/* INDUSTRIES MARQUEE — Also above fold */}
      <div className="w-full relative z-20">
        <IndustriesMarquee />
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div 
        style={{ opacity }}
        className="relative mt-12 mb-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none"
      >
        <span className="text-[8px] md:text-[9px] font-black tracking-[1em] text-foreground uppercase">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
