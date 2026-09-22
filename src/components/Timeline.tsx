import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TIMELINE_DATA } from '../data/portfolioData';
import { Briefcase, CheckCircle, ArrowUpRight, Layers } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = [
    'All',
    'Technology & E-commerce',
    'Automation & CRM',
    'Digital Marketing Systems',
    'Business Operations',
    'API & Platform Integrations'
  ];

  const filteredItems = selectedFilter === 'All'
    ? TIMELINE_DATA
    : TIMELINE_DATA.filter((item) => item.category === selectedFilter);

  return (
    <section id="experience" className="py-24 bg-[#080b12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL CONTRIBUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Project-Focused Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Hands-on work across real business systems, operational architectures, marketplace setups, and workflow automations.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-[#101524] border border-white/10 text-slate-400 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative">
          
          {/* Vertical indicator line for desktop */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-500/40 via-purple-500/30 to-blue-500/10 -z-0" />

          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative z-10 md:pl-20"
            >
              {/* Timeline marker node */}
              <div className="hidden md:flex absolute left-5 top-8 w-6 h-6 rounded-full bg-[#080b12] border-2 border-cyan-400 items-center justify-center -translate-x-1/2 shadow-md shadow-cyan-500/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0e1322]/90 border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl">
                
                {/* Top Role & Project Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/5 gap-3">
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-0.5">
                      {item.role}
                    </h3>
                    <div className="text-sm font-semibold text-slate-300 mt-1">
                      Project: {item.project}
                    </div>
                  </div>

                  <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    {item.period}
                  </div>
                </div>

                {/* What was Built / Managed */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Key Responsibilities & Operational Scope
                  </h4>
                  <ul className="space-y-2.5">
                    {item.builtAndManaged.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#131b2e] border border-white/5 text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Outcome Statement */}
                <div className="pt-4 border-t border-white/5 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-white/[0.01] p-3 rounded-xl">
                  <span className="text-cyan-400 font-mono font-bold shrink-0">Outcome:</span>
                  <span className="text-slate-300">{item.outcome}</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
