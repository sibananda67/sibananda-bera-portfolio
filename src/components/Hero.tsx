import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { 
  ArrowRight, 
  Terminal, 
  Workflow, 
  Globe, 
  Cpu, 
  Database, 
  LayoutDashboard, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';

export const Hero: React.FC = () => {
  const words = [
    'Automation',
    'E-commerce',
    'AI Workflows',
    'API Integrations',
    'Digital Operations',
    'Business Systems'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycling text
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [words.length]);

  // Mouse move for interactive node network
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const networkNodes = [
    { id: 0, label: 'Website', sub: 'Frontend UI', icon: Globe, color: '#38bdf8', x: 12, y: 20 },
    { id: 1, label: 'API', sub: 'REST & Webhooks', icon: Cpu, color: '#60a5fa', x: 45, y: 15 },
    { id: 2, label: 'Automation', sub: 'n8n & Logic', icon: Workflow, color: '#a855f7', x: 80, y: 25 },
    { id: 3, label: 'Database', sub: 'Sheets & SQL', icon: Database, color: '#ec4899', x: 20, y: 72 },
    { id: 4, label: 'Dashboard', sub: 'Power BI & KPIs', icon: LayoutDashboard, color: '#06b6d4', x: 55, y: 78 },
    { id: 5, label: 'Business', sub: 'Automated Operations', icon: Briefcase, color: '#10b981', x: 85, y: 70 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Headlines */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121927]/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-lg shadow-cyan-950/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="tracking-wide">{PERSONAL_INFO.status}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1] mb-4"
            >
              I Build Digital Systems That Work Smarter.
            </motion.h1>

            {/* Cycling Animated Domain Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 font-heading"
            >
              <span className="text-slate-400">Specializing in</span>
              <div className="h-10 sm:h-12 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentWordIndex]}
                    initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -24, filter: 'blur(4px)' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold tracking-tight inline-block"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Supporting Positioning Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              "{PERSONAL_INFO.statement}"
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                id="hero-explore-work-cta"
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <button
                id="hero-lets-connect-cta"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 bg-[#111724]/70 hover:bg-[#151c2e] text-slate-200 font-medium text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>

              <LinkedInButton variant="secondary" label="LinkedIn" />
            </motion.div>

            {/* Quick Micro Credentials Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Production E-Commerce Systems
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                n8n & AI Orchestration
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                Cashfree / Shiprocket Integrations
              </span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Animated Digital System Network */}
          <div className="lg:col-span-5 relative w-full h-[420px] sm:h-[480px] flex items-center justify-center">
            
            {/* Background circular frame */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1320]/80 to-[#121829]/60 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/80">
              
              {/* Dot matrix grid */}
              <div className="absolute inset-0 bg-tech-dots opacity-40" />

              {/* Header inside mockup */}
              <div className="absolute top-0 left-0 right-0 h-10 px-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-slate-300 font-semibold">live_system_flow.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Dynamic SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none mt-5">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {connections.map((conn, idx) => {
                  const fromNode = networkNodes[conn.from];
                  const toNode = networkNodes[conn.to];
                  const isHighlighted = activeNode === conn.from || activeNode === conn.to;
                  return (
                    <g key={idx}>
                      <line
                        x1={`${fromNode.x}%`}
                        y1={`${fromNode.y}%`}
                        x2={`${toNode.x}%`}
                        y2={`${toNode.y}%`}
                        stroke={isHighlighted ? '#38bdf8' : 'rgba(255, 255, 255, 0.12)'}
                        strokeWidth={isHighlighted ? 2 : 1.2}
                        strokeDasharray={isHighlighted ? 'none' : '4, 4'}
                        className="transition-colors duration-300"
                      />
                      {/* Pulsing data particle moving across connection */}
                      <circle r="2.5" fill={isHighlighted ? '#38bdf8' : '#818cf8'}>
                        <animateMotion
                          path={`M ${fromNode.x * 4} ${fromNode.y * 4} L ${toNode.x * 4} ${toNode.y * 4}`}
                          dur={`${2.2 + (idx % 3) * 0.7}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Interactive Nodes */}
              <div className="relative w-full h-full p-6 pt-12">
                {networkNodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeNode === node.id;
                  
                  // React smoothly to cursor offset
                  const offsetX = mousePos.x * (10 + node.id * 2);
                  const offsetY = mousePos.y * (10 + node.id * 2);

                  return (
                    <motion.div
                      key={node.id}
                      animate={{
                        x: offsetX,
                        y: offsetY,
                      }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      style={{
                        position: 'absolute',
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className="cursor-pointer group"
                    >
                      <div
                        className={`relative px-3 py-2 rounded-xl flex items-center gap-2.5 transition-all duration-300 backdrop-blur-md ${
                          isActive
                            ? 'bg-[#1b2339] border-2 shadow-xl scale-110'
                            : 'bg-[#111728]/90 border border-white/10 hover:border-cyan-500/40 hover:scale-105'
                        }`}
                        style={{
                          borderColor: isActive ? node.color : undefined,
                          boxShadow: isActive ? `0 0 25px ${node.color}40` : undefined,
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                          style={{ backgroundColor: `${node.color}20`, color: node.color }}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-white tracking-tight leading-none group-hover:text-cyan-300">
                            {node.label}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 leading-tight mt-0.5">
                            {node.sub}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer status bar in visual network */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-white/5 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-cyan-400">●</span>
                  <span>Pipeline Latency: 12ms</span>
                </div>
                <span>Reactive Architecture</span>
              </div>
            </div>

            {/* Decorative Floating Pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-[#141b2e] border border-cyan-500/30 text-slate-200 text-xs font-mono shadow-2xl flex items-center gap-2 hidden sm:flex"
            >
              <Workflow className="w-4 h-4 text-cyan-400" />
              <span>Event-Driven Workflows</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
