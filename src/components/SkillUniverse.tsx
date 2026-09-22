import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Workflow, 
  Store, 
  Truck, 
  Search, 
  BarChart3, 
  Layers, 
  FileCode, 
  Network, 
  FileSpreadsheet, 
  Mail, 
  Sparkles, 
  PackageCheck, 
  Boxes, 
  Receipt, 
  CreditCard, 
  Cloud, 
  Activity, 
  Target, 
  Users, 
  GitMerge 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Workflow,
  Store,
  Truck,
  Search,
  BarChart3,
  Layers,
  FileCode,
  Network,
  FileSpreadsheet,
  Mail,
  Sparkles,
  PackageCheck,
  Boxes,
  Receipt,
  CreditCard,
  Cloud,
  Activity,
  Target,
  Users,
  GitMerge
};

export const SkillUniverse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#080b12] relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
              <span>SKILLS & CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
              My Digital Toolbox
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Practical competencies applied across real-world web applications, marketplace engines, and automation pipelines.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 bg-[#0f1424] border border-white/5 px-3 py-2 rounded-lg self-start md:self-auto">
            Showing <span className="text-cyan-400 font-semibold">{filteredSkills.length}</span> verified capability areas
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'bg-[#111726] border border-white/10 text-slate-300 hover:text-white hover:border-slate-600'
            }`}
          >
            All Disciplines ({SKILLS_DATA.length})
          </button>

          {SKILL_CATEGORIES.map((category) => {
            const count = SKILLS_DATA.filter((s) => s.category === category).length;
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-[#111726] border border-white/10 text-slate-300 hover:text-white hover:border-slate-600'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-950/30 text-slate-950' : 'bg-white/10 text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = iconMap[skill.icon] || Code2;
              const isHovered = hoveredSkill === skill.name;

              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="group relative rounded-2xl bg-[#0e1322]/90 border border-white/10 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
                >
                  {/* Subtle top indicator */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:border-cyan-400/50 group-hover:scale-110 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white font-heading group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-[11px] font-mono text-cyan-400/80">
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      {skill.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                    {skill.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {skill.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#131b2e] border border-white/5 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Ambient hover glow line */}
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/0 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
