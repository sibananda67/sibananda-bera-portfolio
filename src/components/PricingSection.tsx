import React from 'react';
import { motion } from 'motion/react';
import { PRICING_DATA, PricingTier } from '../data/portfolioData';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Layers
} from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const scrollToContactWithTier = (targetEngagementType: string) => {
    if (onSelectTier) {
      onSelectTier(targetEngagementType);
    }
    const el = document.getElementById('contact');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#070911] relative border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENGAGEMENT MODELS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Choose the Right Engagement Model
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 mt-3 font-normal leading-relaxed">
            Flexible engagement options for websites, automation, business systems, digital marketing, CRM, integrations, and ongoing technology support.
          </p>
        </div>

        {/* 3 Pricing Cards Grid: 1 Row on Desktop, Stacked on Tablet/Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_DATA.map((tier) => {
            const isFeatured = tier.badge === 'MOST REQUESTED';

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative border ${
                  isFeatured
                    ? 'bg-[#0f1526] border-cyan-500/50 shadow-2xl shadow-cyan-950/60 ring-1 ring-cyan-500/30'
                    : 'bg-[#0a0d18] border-white/10 hover:border-white/20 hover:bg-[#0c101e]'
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`px-3 py-1 rounded-full font-mono font-bold text-[10px] tracking-wider uppercase ${
                      isFeatured
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-white/5 border border-white/10 text-cyan-400'
                    }`}
                  >
                    {tier.badge}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{tier.timeline}</span>
                  </div>
                </div>

                <div>
                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-white tracking-tight mb-3">
                    {tier.name}
                  </h3>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/5 mb-5">
                    {tier.priceAmount ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
                          {tier.priceAmount}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                          {tier.pricePeriod}
                        </span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                          {tier.priceCustom}
                        </div>
                        {tier.pricingSupportText && (
                          <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed font-sans">
                            {tier.pricingSupportText}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {tier.description}
                  </p>

                  {/* Included Deliverables */}
                  <div className="space-y-2.5 mb-8">
                    <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                      Included in Scope:
                    </div>
                    {tier.included.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-white/5">
                  <button
                    onClick={() => scrollToContactWithTier(tier.targetEngagementType)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/40'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
