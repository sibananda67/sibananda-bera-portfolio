import React from 'react';
import { BRAND_INFO, personalLinks } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { ArrowUp, Cpu, Github, Mail, MessageSquare } from 'lucide-react';

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
        top: id === 'hero' ? 0 : elementRect - bodyRect - offset,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'projects', label: 'Projects' },
    { id: 'automation-lab', label: 'Automation Lab' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="py-14 bg-[#05070c] border-t border-white/10 relative text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand & Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-10 border-b border-white/5 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-heading font-extrabold text-white text-xl tracking-wider">
                {BRAND_INFO.brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs font-mono text-cyan-400/90 tracking-wide">
              {BRAND_INFO.tagline}
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-1">
              Practice led by {BRAND_INFO.founder} ({BRAND_INFO.role})
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-cyan-300 transition-colors cursor-pointer text-slate-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#0f1422] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all self-start lg:self-auto flex items-center gap-2 text-xs font-mono cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Top</span>
          </button>
        </div>

        {/* Middle Tier: Connect & Channels */}
        <div className="py-6 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-4 text-slate-400">
            <span className="text-slate-500">Channels:</span>
            <a 
              href={`mailto:${BRAND_INFO.email}`}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{BRAND_INFO.email}</span>
            </a>
            <a 
              href="https://wa.me/918114000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <LinkedInButton variant="footer" label="LinkedIn" />
            <a
              href={personalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Operational Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3">
          <div>
            © 2026 {BRAND_INFO.brand}. Designed & Engineered by {BRAND_INFO.founder}.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-400">DIGITAL SYSTEMS // AUTOMATION // GROWTH</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
