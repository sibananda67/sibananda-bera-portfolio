import React from 'react';
import { motion } from 'motion/react';
import { STATS, PERSONAL_INFO } from '../data/portfolioData';
import { Layers, Workflow, ShoppingBag, BarChart, CheckCircle } from 'lucide-react';

export const Introduction: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: "Full-Cycle Web Architecture",
      desc: "Component-driven interfaces, responsive vendor portals, and clean API consumption."
    },
    {
      icon: Workflow,
      title: "Event-Driven Automation",
      desc: "Connecting disjointed apps with n8n, webhooks, conditional routing, and auto-alerts."
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce & Marketplaces",
      desc: "Catalog taxonomies, HSN/GST validation, seller onboarding, and order fulfillment."
    },
    {
      icon: BarChart,
      title: "Operational Telemetry",
      desc: "Tracking caller logs, conversion funnels in GA4/GTM, and executive KPI scorecards."
    }
  ];

  return (
    <section id="introduction" className="py-20 bg-[#07090e] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>PHILOSOPHY & FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
            More Than Just Code. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              I Build Systems.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {PERSONAL_INFO.bioIntro}
          </p>
        </div>

        {/* Animated Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative p-7 rounded-2xl bg-[#0f1422]/80 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 backdrop-blur-sm"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-purple-500/0 group-hover:via-cyan-400 transition-all" />
              
              <div className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                {stat.number}
              </div>
              <div className="text-base font-semibold text-slate-200 mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 leading-relaxed">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0b0e17] border border-white/5 hover:border-white/15 transition-colors flex flex-col"
              >
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
