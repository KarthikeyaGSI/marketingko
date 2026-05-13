"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logs = [
  "INITIALIZING GROWTH OS v1.0.4...",
  "CONNECTING SOVEREIGN NODES...",
  "LOADING AI INFRASTRUCTURE...",
  "INJECTING REVENUE PROTOCOLS...",
  "OPTIMIZING DATA THROUGHPUT...",
  "SYSTEMS INTEGRITY: 100%",
  "TERMINAL READY."
];

export function Preloader() {
  const [currentLog, setCurrentLog] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (currentLog < logs.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLog(prev => prev + 1);
      }, 250 + Math.random() * 300);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setComplete(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentLog]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center p-6"
        >
          {/* Background Atmosphere */}
          <div className="absolute inset-0 grid-infrastructure opacity-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(var(--primary)/0.05)_0%,transparent_50%)]" />

          <div className="w-full max-w-2xl space-y-12 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black text-primary tracking-[0.8em] uppercase italic">System Boot Sequence</span>
                <span className="text-[10px] font-mono text-foreground/40">{Math.round(((currentLog + 1) / logs.length) * 100)}%</span>
              </div>
              <div className="h-px bg-foreground/10 w-full relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentLog + 1) / logs.length) * 100}%` }}
                  className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_15px_oklch(var(--primary))]"
                />
              </div>
            </div>

            <div className="font-mono text-xs md:text-sm space-y-2 h-40 overflow-hidden">
              {logs.slice(0, currentLog + 1).map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`${i === currentLog ? 'text-primary' : 'text-foreground/40'}`}
                >
                  <span className="mr-4 opacity-20">[{new Date().toLocaleTimeString()}]</span>
                  {log}
                </motion.div>
              ))}
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary ml-2 translate-y-1"
              />
            </div>

            <div className="pt-12 flex justify-center">
               <motion.div
                 animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                 transition={{ repeat: Infinity, duration: 4 }}
                 className="text-[8px] font-black tracking-[1.5em] text-foreground/10 uppercase"
               >
                 Marketing Ko Engineering
               </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
