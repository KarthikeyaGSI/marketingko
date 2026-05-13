"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-0"
      />

      <svg className="w-full h-full max-w-2xl opacity-60" viewBox="0 0 400 400">
        {/* Orbital Rings */}
        <motion.circle
          cx="200" cy="200" r="80"
          fill="none" stroke="oklch(0.6 0.2 250 / 0.2)" strokeWidth="0.5"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="200" cy="200" r="120"
          fill="none" stroke="oklch(0.6 0.2 250 / 0.1)" strokeWidth="0.5"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Data Points */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.circle
            key={i}
            cx={200 + Math.cos(angle * Math.PI / 180) * 120}
            cy={200 + Math.sin(angle * Math.PI / 180) * 120}
            r="2"
            fill="white"
            animate={{ 
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}

        {/* Pulsing Core Lines */}
        <motion.path
          d="M 150 200 L 250 200 M 200 150 L 200 250"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      {/* Floating UI Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 right-0 glass-premium p-4 rounded-xl border-primary/20"
      >
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Growth Vector: +312%</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 left-0 glass-premium p-4 rounded-xl border-primary/20"
      >
        <div className="flex items-center space-x-3">
          <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Active Nodes: 1,248</span>
        </div>
      </motion.div>
    </div>
  );
}
