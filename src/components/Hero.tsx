import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Workflow, 
  Globe, 
  Cpu, 
  Database, 
  LayoutDashboard, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const Hero: React.FC = () => {
  const words = [
    'Custom Websites & Platforms',
    'E-Commerce & Marketplaces',
    'CRM & Business Operations',
    'n8n & AI Workflows',
    'API & Logistics Integrations',
    'Digital Marketing Telemetry'
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Cycling domain specialties
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

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
    { id: 0, label: 'Web Platform', sub: 'React & Portals', icon: Globe, color: '#38bdf8', x: 14, y: 22 },
    { id: 1, label: 'API Gateway', sub: 'REST & Webhooks', icon: Cpu, color: '#60a5fa', x: 48, y: 16 },
    { id: 2, label: 'Automation', sub: 'n8n & Logic', icon: Workflow, color: '#a855f7', x: 82, y: 26 },
    { id: 3, label: 'Data & CRM', sub: 'Sheets & Pipelines', icon: Database, color: '#ec4899', x: 22, y: 74 },
    { id: 4, label: 'Intelligence', sub: 'Power BI & KPIs', icon: LayoutDashboard, color: '#06b6d4', x: 54, y: 80 },
    { id: 5, label: 'Operations', sub: 'Integrated Business', icon: Briefcase, color: '#10b981', x: 86, y: 72 },
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
            
            {/* System Status Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111726]/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-6 shadow-lg shadow-cyan-950/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="tracking-widest font-semibold">{BRAND_INFO.status}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1] mb-4"
            >
              {BRAND_INFO.headline}
            </motion.h1>

            {/* Supporting Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-cyan-400/90 font-heading mb-4"
            >
              {BRAND_INFO.supportingHeadline}
            </motion.h2>

            {/* Cycling Animated Domain Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2.5 text-base sm:text-lg lg:text-xl font-medium mb-6 font-mono text-slate-400"
            >
              <span>Systems:</span>
              <div className="h-9 sm:h-10 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[currentWordIndex]}
                    initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold tracking-tight inline-block"
                  >
                    {words[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {BRAND_INFO.heroCopy}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                id="hero-start-project-cta"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-950" />
              </button>

              <button
                id="hero-explore-work-cta"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700/80 hover:border-cyan-500/50 bg-[#111724]/70 hover:bg-[#151c2e] text-slate-200 font-semibold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <span>EXPLORE OUR WORK</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>
            </motion.div>

            {/* Practice Identity Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Led by Sibananda Bera (Consultant)
              </span>
              <span className="text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                No Agency Fluff · Real System Architecture
              </span>
              <span className="text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                End-to-End Implementation
              </span>
            </motion.div>

          </div>

          {/* Right Column: Interactive Animated Digital System Network */}
          <div className="lg:col-span-5 relative w-full h-[430px] sm:h-[490px] flex items-center justify-center">
            
            {/* Background frame */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0d1220]/90 to-[#121829]/70 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/80">
              
              {/* Dot matrix grid */}
              <div className="absolute inset-0 bg-tech-dots opacity-40" />

              {/* Header inside mockup */}
              <div className="absolute top-0 left-0 right-0 h-10 px-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-slate-300 font-semibold font-mono">scalvtek_orchestrator.ts</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>CONNECTED</span>
                </div>
              </div>

              {/* Dynamic SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none mt-5">
                <defs>
                  <linearGradient id="lineGradHero" x1="0%" y1="0%" x2="100%" y2="100%">
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
                        stroke={isHighlighted ? '#38bdf8' : 'url(#lineGradHero)'}
                        strokeWidth={isHighlighted ? '2' : '1.2'}
                        strokeDasharray={isHighlighted ? 'none' : '4 3'}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Interactive System Nodes */}
              <div className="absolute inset-0 pt-10">
                {networkNodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = activeNode === node.id;
                  
                  // subtle 3D tilt response
                  const offsetX = mousePos.x * 6;
                  const offsetY = mousePos.y * 6;

                  return (
                    <motion.div
                      key={node.id}
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
                      }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`absolute cursor-pointer p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 group z-20 ${
                        isActive
                          ? 'bg-[#182035] border-cyan-400 scale-110 shadow-xl shadow-cyan-500/30'
                          : 'bg-[#101524]/90 border-white/10 hover:border-cyan-500/50 hover:bg-[#141b2e]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-colors"
                          style={{
                            backgroundColor: `${node.color}20`,
                            color: node.color,
                          }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="hidden sm:block text-left pr-1">
                          <div className="text-xs font-semibold text-white tracking-tight leading-none group-hover:text-cyan-300 transition-colors">
                            {node.label}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">
                            {node.sub}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Terminal status ticker at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="text-cyan-400">root@scalvtek:~$</span>
                  <span className="text-slate-300">orchestrate --mode=connected</span>
                </span>
                <span className="text-emerald-400 hidden sm:inline-block">200 OK</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
