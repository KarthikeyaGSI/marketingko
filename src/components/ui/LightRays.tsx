"use client";

import { motion } from "framer-motion";

export function LightRays() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30 dark:opacity-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotate: -20 + i * 10 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scaleY: [1, 1.2, 1],
              rotate: [-20 + i * 10, -15 + i * 10, -20 + i * 10]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute top-[-20%] left-1/2 origin-top w-32 h-[150%] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-[80px]"
            style={{
              left: `${50 + (i - 2) * 15}%`
            }}
          />
        ))}
      </div>
    </div>
  );
}
