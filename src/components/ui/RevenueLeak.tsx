"use client";

import { motion } from "framer-motion";

export function RevenueLeak() {
  return (
    <div className="relative w-full aspect-square max-w-[700px] mx-auto scale-75 md:scale-100">
      <style jsx>{`
        .network {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .network::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle, oklch(var(--primary) / 0.1) 0%, oklch(var(--primary) / 0.02) 40%, transparent 80%);
          border: 1px solid oklch(var(--primary) / 0.05);
        }

        .orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed oklch(var(--primary) / 0.1);
          animation: spin 80s linear infinite;
        }

        .orbit2 {
          position: absolute;
          inset: -15%;
          border-radius: 50%;
          border: 1px solid oklch(var(--foreground) / 0.02);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .center-node {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: oklch(var(--background));
          border: 1px solid oklch(var(--primary) / 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: oklch(var(--foreground));
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 4px;
          z-index: 10;
          box-shadow: 0 0 40px oklch(var(--primary) / 0.1), inset 0 0 20px oklch(var(--primary) / 0.05);
          background: oklch(var(--background));
        }

        .center-node strong {
          font-size: 24px;
          letter-spacing: -1px;
          margin-top: 4px;
          color: oklch(var(--primary));
        }

        .node {
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 2.5rem;
          background: oklch(var(--foreground) / 0.01);
          border: 1px solid oklch(var(--border));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: oklch(var(--foreground));
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          z-index: 9;
          background: oklch(var(--foreground) / 0.01);
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .node:hover {
          border-color: oklch(var(--primary) / 0.5);
          background: oklch(var(--primary) / 0.05);
          transform: scale(1.1) rotate(5deg);
        }

        .node i {
          font-style: normal;
          font-size: 12px;
          margin-top: 4px;
          opacity: 0.4;
        }

        .leads { top: 5%; left: 5%; }
        .follow-up { top: 5%; right: 5%; }
        .bookings { right: -5%; top: 50%; transform: translateY(-50%); }
        .whatsapp { bottom: 5%; left: 50%; transform: translateX(-50%); }
        .calls { left: -5%; top: 50%; transform: translateY(-50%); }

        svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .outer-path {
          fill: none;
          stroke: oklch(var(--primary) / 0.1);
          stroke-width: 1;
          stroke-dasharray: 10 20;
          animation: dashMove 20s linear infinite;
        }

        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -200; }
        }

        .connector {
          fill: none;
          stroke: oklch(var(--primary) / 0.05);
          stroke-width: 1;
        }

        .status-badge {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          padding: 8px 16px;
          border-radius: 99px;
          background: oklch(var(--primary) / 0.05);
          border: 1px solid oklch(var(--primary) / 0.2);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: oklch(var(--primary));
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.5); }
        }

        .status-text {
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: oklch(var(--primary));
        }
      `}</style>

      <div className="network">
        <div className="orbit" />
        <div className="orbit2" />

        <svg viewBox="0 0 900 900">
          <path className="outer-path" d="M100 100 L800 100 L900 450 L450 900 L0 450 Z" />
          <line className="connector" x1="450" y1="450" x2="100" y2="100" />
          <line className="connector" x1="450" y1="450" x2="800" y2="100" />
          <line className="connector" x1="450" y1="450" x2="900" y2="450" />
          <line className="connector" x1="450" y1="450" x2="450" y2="900" />
          <line className="connector" x1="450" y1="450" x2="0" y2="450" />
        </svg>

        <div className="center-node">
          <span>Enterprise</span>
          <strong>ASSET</strong>
          <i className="text-[8px] opacity-20 mt-2 not-italic">v4.0.2</i>
        </div>

        <div className="node leads">Leads <i>[QUAL]</i></div>
        <div className="node follow-up">Nurture <i>[AUTO]</i></div>
        <div className="node bookings">Sales <i>[CORE]</i></div>
        <div className="node whatsapp">Chat <i>[EDGE]</i></div>
        <div className="node calls">Voice <i>[AI]</i></div>

        <div className="status-badge">
           <div className="status-dot" />
           <span className="status-text">Leak Detection Active</span>
        </div>
      </div>
    </div>
  );
}
