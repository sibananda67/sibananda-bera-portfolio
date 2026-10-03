import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavigationProps {
  onOpenResume?: () => void;
}

export const Navigation: React.FC<NavigationProps> = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'projects', label: 'Projects' },
    { id: 'automation-lab', label: 'Automation Lab' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'services', 'solutions', 'projects', 'automation-lab', 'pricing', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sectionIds) {
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
        top: id === 'hero' ? 0 : offsetPosition,
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
            ? 'py-2.5 bg-[#080b12]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-4 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity: SCALVTEK */}
          <button
            onClick={() => scrollToSection('hero')}
            id="nav-brand-link"
            className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/20 border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 text-sm group-hover:border-cyan-300 transition-colors shadow-lg shadow-cyan-500/10">
              <Cpu className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold tracking-wider text-white text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                  {BRAND_INFO.brand}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse hidden sm:inline-block" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase hidden sm:block">
                DIGITAL SYSTEMS & AUTOMATION
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 px-3 py-1 rounded-full bg-[#101524]/80 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-1.5 text-xs font-medium transition-all rounded-full cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/50"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Theme toggle + Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <button
              id="nav-start-project-btn"
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle className="p-1.5" />

            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-white/10 bg-[#101524] text-slate-300 hover:text-white"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
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
            className="fixed inset-x-0 top-[60px] z-40 bg-[#090c16]/95 backdrop-blur-xl border-b border-white/10 p-5 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-1 px-3">
                Navigation
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-white/10 mt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-xs tracking-wide flex items-center justify-center gap-2"
                >
                  <span>Start a Project</span>
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
