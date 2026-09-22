import React from 'react';
import { motion } from 'motion/react';
import { HOW_I_THINK_STEPS } from '../data/portfolioData';
import { ArrowDown, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProblemToSystem: React.FC = () => {
  const microFlow = [
    'Manual Process',
    'Identify Bottleneck',
    'Design Workflow',
    'Connect Tools',
    'Automate',
    'Measure',
    'Improve'
  ];

  return (
    <section id="thinking" className="py-24 bg-[#080b12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            From Problem → System
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            How I transform chaotic, spreadsheet-heavy operations into resilient, automated digital workflows.
          </p>
        </div>

        {/* Micro-flow transition ribbon */}
        <div className="mb-14 p-4 rounded-2xl bg-[#0d1222] border border-white/10 overflow-x-auto scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] text-xs font-mono text-slate-300">
            {microFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="font-semibold text-slate-200">{step}</span>
                </div>
                {idx < microFlow.length - 1 && (
                  <span className="text-slate-600 font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {HOW_I_THINK_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0d111d] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-extrabold text-cyan-400/80 group-hover:text-cyan-300">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                
                <div className="text-xs font-mono text-cyan-400/90 mb-3">
                  {step.subheading}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{step.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
