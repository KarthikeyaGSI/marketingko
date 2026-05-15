"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Activity, Zap, ShieldCheck, Search } from "lucide-react";

const logTemplates = [
  { type: "SIGNAL", icon: Zap, color: "text-primary", msg: "Inbound signal detected from Edge_Node_04" },
  { type: "ANALYSIS", icon: Search, color: "text-gold", msg: "Behavioral pattern matching in progress... [94.2% match]" },
  { type: "STATUS", icon: Activity, color: "text-foreground/40", msg: "Growth OS CORE_LOAD optimized at 14ms" },
  { type: "SECURE", icon: ShieldCheck, color: "text-green-500", msg: "Target verified. Qualifying via Autonomous Protocol MK-v4" },
  { type: "DEPLOY", icon: Zap, color: "text-primary", msg: "CRM integration sync complete. Routing lead to Priority_Alpha" }
];

export function SystemPulse() {
  const [logs, setLogs] = useState<{ id: number; type: string; msg: string; icon: any; color: string; time: string }[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const template = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      const newLog = {
        id: Date.now(),
        ...template,
        time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      
      setLogs(prev => [...prev.slice(-12), newLog]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-black border border-border/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      {/* Terminal Header */}
      <div className="bg-foreground/[0.03] px-6 py-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Terminal className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-black tracking-[0.3em] text-foreground uppercase">SYSTEM_PULSE_LOG_V2.0</span>
        </div>
        <div className="flex items-center space-x-2">
           <div className="w-2 h-2 rounded-full bg-destructive/40" />
           <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
           <div className="w-2 h-2 rounded-full bg-green-500/40" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={logContainerRef}
        className="flex-grow p-6 font-mono text-[10px] space-y-3 overflow-y-auto scrollbar-hide relative"
      >
        <div className="scanning-line opacity-10 pointer-events-none" />
        <AnimatePresence initial={false}>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-start space-x-4 border-l-2 border-primary/20 pl-4 py-1 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-foreground/30 shrink-0">[{log.time}]</span>
              <span className={`font-black uppercase tracking-widest shrink-0 ${log.color}`}>{log.type}</span>
              <span className="text-foreground/80 leading-tight">{log.msg}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Typing Indicator */}
        <div className="flex items-center space-x-2 pl-4 opacity-50">
          <div className="w-1.5 h-3 bg-primary animate-pulse" />
          <span className="text-primary italic">Awaiting new signal...</span>
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="bg-foreground/[0.03] px-6 py-3 border-t border-border/50 flex items-center justify-between text-[8px] font-black tracking-widest text-foreground/20 uppercase">
        <span>STATUS: OPTIMAL</span>
        <span>LATENCY: 14MS</span>
        <span>UPTIME: 99.9%</span>
      </div>
    </div>
  );
}
