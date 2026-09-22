import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, AlertTriangle, Cpu, RotateCcw, Home, Terminal } from 'lucide-react';

interface NotFoundPageProps {
  onReturnToSystem: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnToSystem }) => {
  return (
    <div className="min-h-screen bg-[#080a10] text-[#e2e8f0] flex flex-col items-center justify-center p-6 relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl w-full text-center relative z-10 p-8 sm:p-12 rounded-3xl bg-[#0e1424]/90 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60"
      >
        {/* Status Error Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-mono mb-6">
          <AlertTriangle className="w-3.5 h-3.5 animate-pulse text-rose-400" />
          <span>STATUS 404 • PIPELINE_DISCONNECTED</span>
        </div>

        {/* Animated Disconnected Circuit Illustration */}
        <div className="relative w-48 h-24 mx-auto mb-6 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 200 80" fill="none">
            {/* Left Node */}
            <circle cx="30" cy="40" r="14" fill="#0284c7" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="30" cy="40" r="4" fill="#38bdf8" />

            {/* Broken Flow Line */}
            <path
              d="M 44 40 L 85 40"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Severed Connection Spark */}
            <g transform="translate(100, 40)">
              <circle cx="0" cy="0" r="8" fill="#f43f5e" fillOpacity="0.3" />
              <path d="M -4 -6 L 0 0 L -3 2 L 4 6" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Right Flow Line */}
            <path
              d="M 115 40 L 156 40"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeOpacity="0.4"
            />

            {/* Right Disconnected Node */}
            <circle cx="170" cy="40" r="14" fill="#1e293b" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="170" cy="40" r="4" fill="#64748b" />
          </svg>
        </div>

        {/* Primary 404 Heading */}
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-3">
          SYSTEM NOT FOUND
        </h1>

        {/* Exact Requested Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 mb-8 font-normal">
          "Looks like this workflow doesn't exist."
        </p>

        {/* Terminal Debug Output */}
        <div className="mb-8 p-3 rounded-xl bg-[#060a14] border border-white/5 text-left font-mono text-[11px] text-slate-400 space-y-1">
          <div className="text-cyan-400/90 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            <span>router.lookup(current_path): null</span>
          </div>
          <div className="text-slate-500">
            &gt; error: Route handler unmapped. Automatic failover active.
          </div>
        </div>

        {/* Action Button: RETURN TO SYSTEM → */}
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={onReturnToSystem}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-heading font-semibold text-sm tracking-wide shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2.5 mx-auto cursor-pointer border border-cyan-300/30 transition-all"
        >
          <span>RETURN TO SYSTEM</span>
          <ArrowRight className="w-4 h-4 text-cyan-200" />
        </motion.button>
      </motion.div>

      {/* Footer System Signature */}
      <div className="mt-8 text-xs font-mono text-slate-500 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400/60" />
        <span>Sibananda Bera • Digital Systems Portfolio</span>
      </div>
    </div>
  );
};
