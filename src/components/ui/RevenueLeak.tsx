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
          background: radial-gradient(circle, rgba(0, 102, 255, 0.15) 0%, rgba(0, 102, 255, 0.05) 35%, transparent 70%);
          filter: blur(40px);
        }

        .orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed rgba(0, 102, 255, 0.15);
          animation: spin 60s linear infinite;
        }

        .orbit2 {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          border: 1px solid rgba(0, 102, 255, 0.03);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .center-node {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: #000;
          border: 4px solid #0066ff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: 1px;
          z-index: 10;
          box-shadow: 0 0 30px rgba(0, 102, 255, 0.4), inset 0 0 20px rgba(0, 102, 255, 0.1);
          animation: pulse 4s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .node {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: #050505;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 9;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
          transition: all 0.5s ease;
        }

        .node:hover {
          border-color: #0066ff;
          box-shadow: 0 0 20px rgba(0, 102, 255, 0.3);
        }

        .leads { top: 10%; left: 10%; }
        .follow-up { top: 10%; right: 10%; }
        .bookings { right: 0; top: 50%; transform: translateY(-50%); }
        .whatsapp { bottom: 10%; left: 50%; transform: translateX(-50%); }
        .calls { left: 0; top: 50%; transform: translateY(-50%); }

        svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .outer-path {
          fill: none;
          stroke: #0066ff;
          stroke-width: 2;
          stroke-dasharray: 10 15;
          animation: dashMove 10s linear infinite;
          opacity: 0.6;
        }

        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -100; }
        }

        .connector {
          fill: none;
          stroke: rgba(0, 102, 255, 0.1);
          stroke-width: 1;
        }

        .leak-text {
          position: absolute;
          bottom: 20%;
          left: 50%;
          transform: translateX(-50%);
          color: #ff3344;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 5px;
          text-transform: uppercase;
          animation: flicker 3s infinite;
        }

        @keyframes flicker {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #0066ff;
          opacity: 0.4;
        }

        .dot-red { background: #ff3344; }
      `}</style>

      <div className="network">
        <div className="orbit" />
        <div className="orbit2" />

        <svg viewBox="0 0 900 900">
          <path className="outer-path" d="M150 150 L750 150 L850 450 L450 850 L50 450 Z" />
          <line className="connector" x1="450" y1="450" x2="150" y2="150" />
          <line className="connector" x1="450" y1="450" x2="750" y2="150" />
          <line className="connector" x1="450" y1="450" x2="850" y2="450" />
          <line className="connector" x1="450" y1="450" x2="450" y2="850" />
          <line className="connector" x1="450" y1="450" x2="50" y2="450" />
        </svg>

        <div className="center-node">
          YOUR<br />BUSINESS
        </div>

        <div className="node leads">Leads</div>
        <div className="node follow-up">Follow-up</div>
        <div className="node bookings">Bookings</div>
        <div className="node whatsapp">WhatsApp</div>
        <div className="node calls">24/7 Calls</div>

        <div className="leak-text">Leaking Revenue</div>

        <div className="dot" style={{ top: '20%', left: '30%' }} />
        <div className="dot dot-red" style={{ top: '60%', left: '48%' }} />
        <div className="dot dot-red" style={{ top: '55%', left: '52%' }} />
        <div className="dot" style={{ top: '40%', left: '70%' }} />
      </div>
    </div>
  );
}
