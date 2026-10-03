import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_DATA, ServiceCategory } from '../data/portfolioData';
import { 
  Code2, 
  Store, 
  Users, 
  Workflow, 
  Target, 
  Search, 
  MessageSquare, 
  Network, 
  BarChart3, 
  Cpu, 
  Check, 
  ArrowUpRight,
  Sparkles,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Store,
  Users,
  Workflow,
  Target,
  Search,
  MessageSquare,
  Network,
  BarChart3,
  Cpu,
};

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const ActiveIcon = iconMap[activeService.iconName] || Cpu;

  const scrollToContact = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-[#070910] relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>PRACTICE CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            WHAT WE BUILD
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 mt-3 font-normal leading-relaxed">
            Digital systems, automation and growth infrastructure designed around real business workflows.
          </p>
        </div>

        {/* Interactive Service Grid & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 10 Service Categories Selector */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest px-2 mb-1 flex items-center justify-between">
              <span>Service Categories</span>
              <span className="text-cyan-400 font-bold">10 Domains</span>
            </div>

            <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/10">
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedServiceId === service.id;
                const IconComponent = iconMap[service.iconName] || Cpu;

                return (
                  <button
                    key={service.id}
                    id={`service-btn-${service.id}`}
                    onClick={() => setSelectedServiceId(service.id)}
                    className={`w-full p-3.5 rounded-2xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                      isSelected
                        ? 'bg-[#111728] border-cyan-500/50 shadow-lg shadow-cyan-950/50 text-white'
                        : 'bg-[#0a0e1a]/80 border-white/5 text-slate-400 hover:text-slate-200 hover:bg-[#0e1322] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-white/5 text-slate-400'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-cyan-400/80 font-bold">
                          SERVICE {service.number}
                        </div>
                        <div className={`text-sm font-semibold tracking-tight leading-snug ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                          {service.title}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center pl-2">
                      <span className={`w-1.5 h-1.5 rounded-full transition-all ${isSelected ? 'bg-cyan-400 shadow-sm shadow-cyan-400 scale-125' : 'bg-transparent'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Service Detailed Blueprint */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0b101d] border border-white/10 shadow-2xl relative overflow-hidden"
              >
                {/* Subtle top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-cyan-400 tracking-wider">
                        SERVICE {activeService.number} // SCALVTEK
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                        {activeService.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => scrollToContact(activeService.title)}
                    className="px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-xs transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                  >
                    <span>Inquire About This</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Tagline & Description */}
                <div className="py-5 border-b border-white/5 space-y-2">
                  <p className="text-sm sm:text-base font-semibold text-white">
                    {activeService.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {activeService.description}
                  </p>
                </div>

                {/* What We Deliver (List) */}
                <div className="py-6">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>Included Scope & Deliverables</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#080c16] border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                      >
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Real Project Highlight if available */}
                {activeService.projectHighlight && (
                  <div className="p-4 rounded-2xl bg-[#10172b] border border-cyan-500/20 mb-6 flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                        Demonstrated System Highlight
                      </div>
                      <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                        {activeService.projectHighlight}
                      </p>
                    </div>
                  </div>
                )}

                {/* Technologies / Integrations unboxed with subtle separator */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-slate-400 font-mono flex flex-wrap items-center gap-2">
                    <span className="text-slate-500">Tech Stack:</span>
                    {activeService.techTags.map((t, idx) => (
                      <React.Fragment key={idx}>
                        <span className="text-slate-300 font-medium">{t}</span>
                        {idx < activeService.techTags.length - 1 && <span className="text-slate-600">/</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button
                    onClick={() => scrollToContact(activeService.title)}
                    className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
