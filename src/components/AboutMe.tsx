import React from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO, PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { Terminal, Workflow, Cpu, ShieldCheck, CheckCircle2, ArrowRight, Layers, ArrowUpRight } from 'lucide-react';

export const AboutMe: React.FC = () => {
  const corePrinciples = [
    {
      title: "Systems Over Silos",
      desc: "Websites, ads, CRMs, and payment gateways must not exist as disconnected islands. We bridge them into one automated, cohesive workflow."
    },
    {
      title: "Pragmatic Engineering Over Hype",
      desc: "We select the simplest, most resilient architecture that solves the actual operational bottleneck—no unnecessary enterprise bloat."
    },
    {
      title: "End-to-End Operational Visibility",
      desc: "Every automated pipeline must feature state tracking, error logs, and measurable telemetry so you always know where things stand."
    },
    {
      title: "Direct Consultant Execution",
      desc: "No account managers or junior handoffs. You work directly with Sibananda Bera to architect, code, test, and deploy your systems."
    }
  ];

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
    <section id="about" className="py-24 bg-[#07090f] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Cybernetic Practice Badge & Founder Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl bg-gradient-to-b from-[#111728] via-[#0d1222] to-[#080b14] border border-white/10 p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl overflow-hidden group">
              
              {/* Background Digital Grid & Matrix */}
              <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Status Header */}
              <div className="relative z-10 w-full flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/5 pb-3">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  SCALVTEK // PRACTICE
                </span>
                <span className="text-slate-500">CONSULTING PRACTICE</span>
              </div>

              {/* Center Abstract Monogram & Node Matrix */}
              <div className="relative z-10 my-8 flex flex-col items-center">
                {/* Outer pulsing ring */}
                <div className="relative w-32 h-32 rounded-full border border-cyan-500/30 flex items-center justify-center p-2 group-hover:border-cyan-400/60 transition-colors">
                  <div className="w-full h-full rounded-full border border-dashed border-purple-500/40 animate-spin-slow flex items-center justify-center p-2">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/30 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-2xl shadow-cyan-500/20">
                      <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tighter group-hover:scale-105 transition-transform">
                        ST
                      </span>
                    </div>
                  </div>

                  {/* Orbiting nodes */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md shadow-cyan-400" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-md shadow-purple-400" />
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-xl font-heading font-extrabold text-white tracking-tight">
                    {BRAND_INFO.brand}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-semibold mt-1">
                    {BRAND_INFO.tagline}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-2">
                    Founder: <span className="text-white font-semibold">{BRAND_INFO.founder}</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    {BRAND_INFO.role}
                  </div>
                </div>
              </div>

              {/* Practice Details Pills */}
              <div className="relative z-10 w-full pt-4 border-t border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Practice Model:</span>
                  <span className="text-slate-200">Consultant-Led Agency</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Location:</span>
                  <span className="text-slate-200">India / Remote Worldwide</span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Status:</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open for New Builds
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Practice Background, Consultant Bio & Principles */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>ABOUT SCALVTEK & FOUNDER</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Building Pragmatic Digital Systems
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              <p className="text-cyan-300/90 font-medium">
                "{BRAND_INFO.positioningStatement}"
              </p>
              <p className="text-slate-300/90 text-sm sm:text-base">
                Scalvtek is a digital systems, automation, and technology practice led by <strong>Sibananda Bera</strong>, Technology & Automation Consultant. 
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Rather than treating software development, advertising, and operational logistics as disconnected silos, we bridge them into unified systems. We understand how a business actually operates—from sales calls and customer inquiry capture to payment gateway reconciliations, courier dispatch tracking, and executive dashboards—and engineer the digital infrastructure to make those workflows run predictably.
              </p>
            </div>

            {/* Core Working Principles */}
            <div className="space-y-3 mb-8">
              {corePrinciples.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0d1222] border border-white/5 hover:border-cyan-500/20 transition-colors"
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

            {/* Direct Consultant Connect Bar */}
            <div className="p-4 rounded-2xl bg-[#0a0e1c] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-white font-mono">
                  Consult with Sibananda Bera
                </div>
                <div className="text-[11px] text-slate-400">
                  Discuss your business architecture, operational bottlenecks, or platform project.
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={scrollToContact}
                  className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <LinkedInButton variant="primary" label="LinkedIn" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
