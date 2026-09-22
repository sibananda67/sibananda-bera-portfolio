import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, FileText, ArrowUpRight, Terminal } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  onOpenResume: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'automation', label: 'Automation Lab' },
    { id: 'architecture', label: 'System Map' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'work', 'skills', 'automation', 'architecture', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#090b11]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            id="nav-brand-link"
            className="group flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm group-hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-500/10">
              SB
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold tracking-tight text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                SIBANANDA BERA
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block"></span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase hidden sm:block">
                Digital Systems Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-[#111624]/70 border border-white/5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium transition-all rounded-full ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Resume & Let's Connect */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <button
              id="nav-resume-btn"
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all hover:bg-slate-800"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            <button
              id="nav-connect-btn"
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 group"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle className="p-1.5" />

            <button
              id="nav-mobile-resume-btn"
              onClick={onOpenResume}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 text-xs"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0c101a]/95 backdrop-blur-xl border-b border-white/10 p-5 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-2.5 text-left rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center justify-between px-2 py-1 text-xs text-slate-400 font-mono">
                  <span>Interface Theme</span>
                  <ThemeToggle showLabel />
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-800 text-slate-200 text-sm font-mono flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Structured Resume</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span>Start Conversation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
