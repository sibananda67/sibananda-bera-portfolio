import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { Terminal, Workflow, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const corePrinciples = [
    {
      title: "Pragmatism Over Hype",
      desc: "Selecting the simplest reliable architecture that solves the business bottleneck without unnecessary overhead."
    },
    {
      title: "End-to-End Visibility",
      desc: "Every automated pipeline must feature state tracking, error logs, and measurable telemetry."
    },
    {
      title: "Operational Empathy",
      desc: "Understanding the day-to-day pain points of sales reps, vendors, and operations leads before designing software."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#07090f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Sophisticated Abstract Identity Visual (No Fake Real Person) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl bg-gradient-to-b from-[#111728] via-[#0d1222] to-[#080b14] border border-white/10 p-6 flex flex-col items-center justify-between shadow-2xl overflow-hidden group">
              
              {/* Background Digital Grid & Matrix */}
              <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Status Pill */}
              <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-3">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  SYSTEM ONLINE
                </span>
                <span>ID: SIBANANDA-BERA</span>
              </div>

              {/* Center Abstract Monogram & Node Matrix */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                {/* Outer pulsing ring */}
                <div className="relative w-36 h-36 rounded-full border border-cyan-500/30 flex items-center justify-center p-2 group-hover:border-cyan-400/60 transition-colors">
                  <div className="w-full h-full rounded-full border border-dashed border-purple-500/40 animate-spin-slow flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/30 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl shadow-cyan-500/20">
                      <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tighter group-hover:scale-105 transition-transform">
                        SB
                      </span>
                    </div>
                  </div>

                  {/* Satellite Orbiting Nodes */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-400" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 shadow-md shadow-purple-400" />
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                    Sibananda Bera
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5">
                    Technology • Automation • Digital Systems
                  </p>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="relative z-10 w-full pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Architecture: Event-Driven</span>
                <span className="text-emerald-400">Available</span>
              </div>

            </div>
          </div>

          {/* Right: Narrative & Principles */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <span>BACKGROUND & PERSPECTIVE</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
              Who Is Sibananda?
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              <p>
                "I’m interested in the space where technology meets real business problems."
              </p>
              <p className="text-slate-300/90 text-sm sm:text-base">
                "I enjoy understanding how a business actually operates—sales, customers, sellers, marketing, payments, logistics, reporting—and then finding ways to make those processes simpler through technology and automation."
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Rather than treating software development as an isolated exercise in writing lines of code, I view every tool as a cog in an interconnected business machine. Whether architecting vendor verification protocols for multi-category marketplaces, automating transactional communications, or synchronizing third-party logistics APIs, my focus is delivering operational clarity and measurable automation.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="space-y-3">
              {corePrinciples.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0d1222] border border-white/5 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-white font-heading mb-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 ml-6 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* LinkedIn Action */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xs font-mono text-slate-400">
                Interested in system architecture or workflow collaboration?
              </span>
              <LinkedInButton variant="primary" label="Let’s Connect" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
