"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "circOut" } }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center flex-col"
        >
          <div className="relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-1/2 left-0 h-[1px] bg-primary z-10"
            />
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase italic"
            >
              Marketing Ko
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1 }}
            className="mt-8 text-[10px] font-bold tracking-[0.5em] text-white uppercase"
          >
            Initializing Revenue Infrastructure
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
