"use client";

import { motion } from "framer-motion";

export function BusinessNetworkAnimation() {
  const nodes = [
    { label: 'Leads', x: '12%', y: '12%' },
    { label: 'Follow-up', x: '88%', y: '12%' },
    { label: 'Bookings', x: '92%', y: '52%' },
    { label: 'WhatsApp', x: '50%', y: '88%' },
    { label: '24/7 Calls', x: '8%', y: '52%' },
  ]

  const center = { x: '50%', y: '50%' }

  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-auto md:h-[800px] overflow-hidden bg-transparent flex items-center justify-center rounded-[4rem]">
      {/* Background Glow */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />

      {/* Circular Rings */}
      <div className="absolute w-[85%] h-[85%] rounded-full border border-primary/10 animate-spin-slow" />
      <div className="absolute w-[60%] h-[60%] rounded-full border border-primary/10 animate-spin-reverse" />

      {/* SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.map((node, index) => (
          <g key={index}>
            <line
              x1={center.x}
              y1={center.y}
              x2={node.x}
              y2={node.y}
              stroke="oklch(var(--primary))"
              strokeWidth="1.5"
              strokeDasharray="10 18"
              className="animate-dash opacity-40"
            />
          </g>
        ))}

        {/* Outer Connection Lines */}
        <line x1="12%" y1="12%" x2="88%" y2="12%" stroke="oklch(var(--primary))" strokeWidth="1.5" strokeDasharray="10 18" className="animate-dash opacity-30" />
        <line x1="88%" y1="12%" x2="92%" y2="52%" stroke="oklch(var(--primary))" strokeWidth="1.5" strokeDasharray="10 18" className="animate-dash opacity-30" />
        <line x1="92%" y1="52%" x2="50%" y2="88%" stroke="oklch(var(--primary))" strokeWidth="1.5" strokeDasharray="10 18" className="animate-dash opacity-30" />
        <line x1="50%" y1="88%" x2="8%" y2="52%" stroke="oklch(var(--primary))" strokeWidth="1.5" strokeDasharray="10 18" className="animate-dash opacity-30" />
        <line x1="8%" y1="52%" x2="12%" y2="12%" stroke="oklch(var(--primary))" strokeWidth="1.5" strokeDasharray="10 18" className="animate-dash opacity-30" />
      </svg>

      {/* Center Node */}
      <div className="absolute z-20 flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-full border-2 border-primary shadow-[0_0_80px_rgba(var(--primary),0.8)] bg-background">
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
        <div className="text-center text-foreground font-black tracking-widest leading-tight text-sm sm:text-xl md:text-3xl uppercase">
          YOUR<br />
          BUSINESS
        </div>
      </div>

      {/* Outer Nodes */}
      {nodes.map((node, index) => (
        <div
          key={index}
          className="absolute z-20 flex items-center justify-center"
          style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
        >
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full border border-primary/20 animate-ping" />

          <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-foreground/10 bg-background/80 backdrop-blur-xl shadow-[0_0_35px_rgba(var(--primary),0.3)] overflow-hidden group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-transparent group-hover:from-primary/20 transition-all duration-700" />
            <span className="text-foreground/80 text-[8px] sm:text-[10px] md:text-xs font-medium text-center px-2 z-10 transition-colors group-hover:text-foreground">
              {node.label}
            </span>
          </div>
        </div>
      ))}

      {/* Floating Revenue Text */}
      <div className="absolute top-[65%] sm:top-[70%] text-destructive/80 tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold animate-pulse z-10">
        LEAKING REVENUE
      </div>

      {/* Floating Dots */}
      <div className="absolute w-1 h-1 bg-primary rounded-full bottom-20 left-[48%] animate-float" />
      <div className="absolute w-2 h-2 bg-primary rounded-full bottom-24 left-[43%] animate-float-delayed" />
      <div className="absolute w-1.5 h-1.5 bg-primary rounded-full top-1/3 left-1/4 animate-float" />
      <div className="absolute w-1.5 h-1.5 bg-primary rounded-full top-1/4 right-1/4 animate-float-delayed" />

      <style jsx>{`
        .animate-dash {
          stroke-dashoffset: 1000;
          animation: dashMove 18s linear infinite;
        }

        @keyframes dashMove {
          to {
            stroke-dashoffset: 0;
          }
        }

        .animate-spin-slow {
          animation: spin 35s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 40s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 5s ease-in-out infinite 1.5s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.6;
          }
        }

        .animate-fade {
          animation: fadeText 4s ease-in-out infinite;
        }

        @keyframes fadeText {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
