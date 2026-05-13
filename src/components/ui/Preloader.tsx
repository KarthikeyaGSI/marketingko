"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center flex-col overflow-hidden"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                className="text-3xl md:text-5xl font-black tracking-[0.5em] text-white uppercase italic leading-none"
              >
                Marketing Ko
              </motion.h2>
            </div>
            
            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-primary h-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: counter / 100 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <div className="mt-8 flex flex-col items-center space-y-4">
              <span className="text-8xl md:text-9xl font-black text-white/5 tracking-tighter leading-none">
                {counter}%
              </span>
              <span className="text-[10px] font-black tracking-[0.8em] text-primary uppercase animate-pulse">
                Initializing Systems
              </span>
            </div>
          </div>

          <div className="absolute bottom-12 left-12 right-12 flex justify-between">
            <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em]">Protocol MK-SYS-INIT</span>
            <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em]">Node: PRIMARY-AUTO</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

