import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { ArrowUp, Terminal, Workflow } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-12 bg-[#05070c] border-t border-white/10 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/5 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-heading font-bold text-white text-lg tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs font-mono text-cyan-400/90">
              {PERSONAL_INFO.positioning}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <button
              onClick={() => scrollToSection('work')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('automation')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Automation
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <div className="pl-2 border-l border-white/10">
              <LinkedInButton variant="footer" label="LinkedIn" />
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0f1422] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all self-start md:self-auto flex items-center gap-1.5 text-xs font-mono cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Top</span>
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>High-Performance Digital Workflows</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
