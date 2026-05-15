"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black text-white"
        >
          {/* Central Logo/Text */}
          <div className="relative overflow-hidden mb-8">
            <motion.h1 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tightest italic"
            >
              MARKETING <span className="text-primary">KO</span>
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "circInOut" }}
              className="absolute bottom-0 left-0 w-full h-1 bg-primary origin-left"
            />
          </div>

          {/* Progress Counter */}
          <div className="flex flex-col items-center space-y-4">
            <div className="text-[10px] font-black tracking-[1em] text-white/30 uppercase">
              Initializing_Revenue_OS
            </div>
            <div className="text-6xl md:text-8xl font-black italic tabular-nums text-white/10">
              {counter.toString().padStart(3, '0')}
            </div>
          </div>

          {/* Infrastructure Grid Overlay */}
          <div className="absolute inset-0 grid-infrastructure opacity-5 pointer-events-none" />
          
          {/* Ambient Glow */}
          <div className="absolute bottom-[-10%] left-[-10%] w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
