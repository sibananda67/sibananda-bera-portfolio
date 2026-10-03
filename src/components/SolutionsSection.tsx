import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS_DATA, SolutionItem } from '../data/portfolioData';
import { 
  Rocket, 
  Store, 
  Factory, 
  Hotel, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight,
  Layers,
  Sparkles
} from 'lucide-react';

const solutionIcons: Record<string, React.ElementType> = {
  startups: Rocket,
  'ecommerce-marketplaces': Store,
  'manufacturing-fmcg': Factory,
  'hospitality-services': Hotel,
  'agencies-ops': Briefcase,
};

export const SolutionsSection: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(SOLUTIONS_DATA[0].id);
  const activeSolution = SOLUTIONS_DATA.find((s) => s.id === selectedSolutionId) || SOLUTIONS_DATA[0];
  const Icon = solutionIcons[activeSolution.id] || Sparkles;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#080b13] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUTIONS BY INDUSTRY & SCALE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Tailored Systems for Your Operational Model
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 mt-3 font-normal leading-relaxed">
            Whether you're launching a venture, scaling a multi-vendor supply chain, or managing distributor orders, we engineer systems that eliminate operational bottlenecks.
          </p>
        </div>

        {/* Industry Pill Selector Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SOLUTIONS_DATA.map((sol) => {
            const isSelected = selectedSolutionId === sol.id;
            const TabIcon = solutionIcons[sol.id] || Sparkles;

            return (
              <button
                key={sol.id}
                id={`sol-tab-${sol.id}`}
                onClick={() => setSelectedSolutionId(sol.id)}
                className={`px-4 py-3 rounded-2xl text-left whitespace-nowrap transition-all flex items-center gap-2.5 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#12192d] border-cyan-500/60 shadow-lg shadow-cyan-950/50 text-white'
                    : 'bg-[#0a0d18] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span className="text-xs sm:text-sm font-semibold tracking-tight">
                  {sol.target}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-[#0c101d] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Top header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400 tracking-wider">
                    {activeSolution.badge}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                    {activeSolution.target}
                  </h3>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 self-start md:self-auto cursor-pointer"
              >
                <span>Deploy This Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Core summary */}
            <div className="py-6 text-sm sm:text-base text-slate-200 leading-relaxed font-normal border-b border-white/5">
              "{activeSolution.summary}"
            </div>

            {/* Two-column layout: Common Bottlenecks vs The Scalvtek Connected System */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              
              {/* Left: The Bottleneck */}
              <div className="p-6 rounded-2xl bg-[#090c16] border border-red-500/10">
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-wider mb-4">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Operational Pain Points</span>
                </div>
                <div className="space-y-3">
                  {activeSolution.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="text-red-400/80 font-mono text-xs mt-0.5">•</span>
                      <span className="leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Scalvtek System */}
              <div className="p-6 rounded-2xl bg-[#090e1b] border border-cyan-500/20 shadow-lg shadow-cyan-950/30">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Scalvtek Solution</span>
                </div>
                <div className="space-y-3">
                  {activeSolution.scalvtekSolution.map((s, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer with typical stack & direct CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-2 text-slate-400">
                <span className="text-slate-500">Typical System Architecture:</span>
                {activeSolution.typicalStack.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-slate-300">{tech}</span>
                    {idx < activeSolution.typicalStack.length - 1 && <span className="text-slate-600">·</span>}
                  </React.Fragment>
                ))}
              </div>

              <button
                onClick={scrollToContact}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
              >
                <span>Discuss Your Requirements</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
