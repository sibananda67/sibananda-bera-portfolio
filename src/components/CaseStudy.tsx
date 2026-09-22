import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, CheckCircle2, ArrowRight, Zap, RefreshCw } from 'lucide-react';

export const CaseStudy: React.FC = () => {
  const [viewMode, setViewMode] = useState<'compare' | 'after'>('compare');

  const beforeItems = [
    { title: "Manual Lead Collection", desc: "Copy-pasting leads between WhatsApp, scattered spreadsheets, and email threads." },
    { title: "Manual Personalization", desc: "Crafting individual emails manually, causing delays and inconsistent messaging." },
    { title: "Manual Email Dispatch", desc: "Sending single emails one-by-one from personal accounts without deliverability checks." },
    { title: "Manual Follow-Ups", desc: "Forgetting follow-ups or overlapping phone calls, causing lost sales leads." },
    { title: "Scattered Reporting", desc: "No central source of truth for conversions, call logs, or pipeline health." }
  ];

  const afterItems = [
    { title: "Centralized Data Ingestion", desc: "Incoming leads automatically parsed, cleaned, and synced into Google Sheets & CRM." },
    { title: "AI-Assisted Personalization", desc: "Intelligent prompts generate customized pitches matched to vendor product categories." },
    { title: "Automated Email Delivery", desc: "Transactional delivery via ZeptoMail SMTP with verified open & click webhooks." },
    { title: "Structured CRM & Reminders", desc: "Automatic follow-up sequences scheduled and telecaller leads auto-allocated." },
    { title: "Live Performance Dashboards", desc: "Real-time metrics on connect rates, email delivery, and conversion milestones." }
  ];

  return (
    <section id="casestudy" className="py-24 bg-[#080a11] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>TRANSFORMATION SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            From Manual Work to Digital Workflow
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Deconstructing hours of manual friction and replacing it with an autonomous, high-visibility digital pipeline.
          </p>
        </div>

        {/* Before vs After Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Before: Messy Manual Process */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#120d13]/60 border border-red-500/20 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-red-500/20">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Problem: Manual Disarray</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">Legacy State</span>
              </div>

              <div className="space-y-4">
                {beforeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-red-500/10">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-red-500/10 text-xs font-mono text-red-400/80">
              High human overhead • Prone to error • Zero real-time metrics
            </div>
          </div>

          {/* After: Structured Automated System */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#0a151b]/60 border border-cyan-500/30 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The System: Automated Pipeline</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-300">Modern Architecture</span>
              </div>

              <div className="space-y-4">
                {afterItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#09111c] border border-cyan-500/20">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center justify-between">
              <span>95% Reduction in Manual Labor</span>
              <span>24/7 Automated Execution</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
