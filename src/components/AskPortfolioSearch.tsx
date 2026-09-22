import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, ArrowRight, CornerDownLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import { searchPortfolioAI, SearchResult, getAIStatus, AIStatus } from '../services/aiService';

const SAMPLE_SEARCHES = [
  "What payment integrations have you worked with?",
  "What automation systems has Sibananda built?",
  "Tell me about marketplace operations at IngrediaMart",
  "How does Sibananda handle logistics APIs?"
];

export const AskPortfolioSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [aiStatus, setAiStatus] = useState<AIStatus>({ active: false, mode: 'demo', model: 'gemini-3.8-flash' });

  useEffect(() => {
    getAIStatus().then(setAiStatus);
  }, []);

  const handleSearch = async (searchTerm?: string) => {
    const term = (searchTerm || query).trim();
    if (!term || isSearching) return;

    setIsSearching(true);
    setQuery(term);

    try {
      const data = await searchPortfolioAI(term);
      setResult(data);
    } catch (e) {
      // Fallback
    } finally {
      setIsSearching(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-search" className="py-16 sm:py-24 bg-[#090d16] border-y border-white/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-POWERED SEARCH</span>
          </div>

          <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
            aiStatus.active 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
              : 'bg-white/5 text-slate-400 border-white/10'
          }`}>
            {aiStatus.active ? 'SB AI • AI ACTIVE' : 'SB AI • DEMO MODE'}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
          Ask Anything About My Work
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 font-sans max-w-2xl">
          Instantly query Sibananda's project archives, automation pipelines, technical stack, or operational systems.
        </p>

        {/* Search Input Box */}
        <div className="mt-8 relative">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
            className="relative flex items-center"
          >
            <div className="absolute left-4 text-cyan-400">
              <Search className="w-5 h-5" />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: What automation systems has Sibananda built?"
              className="w-full pl-12 pr-28 py-4 rounded-2xl bg-[#0e1424] border border-cyan-500/30 focus:border-cyan-400 text-white text-sm sm:text-base placeholder:text-slate-500 focus:outline-none shadow-xl shadow-cyan-500/5 transition-all font-sans"
            />

            <button
              type="submit"
              disabled={!query.trim() || isSearching}
              className="absolute right-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              {isSearching ? (
                <>
                  <span className="w-3 h-3 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <span>Search</span>
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Quick Preset Queries */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-500 text-[11px]">Suggestions:</span>
            {SAMPLE_SEARCHES.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => handleSearch(sample)}
                className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer text-left"
              >
                {sample}
              </button>
            ))}
          </div>
        </div>

        {/* Results Card */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 p-6 rounded-2xl bg-[#0f172a]/90 border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Verified Portfolio Intelligence</span>
                </span>
                <span className="text-slate-400 text-[11px]">
                  {result.mode === 'active' ? 'Synthesized via Gemini' : 'Portfolio Knowledge Base'}
                </span>
              </div>

              {/* Answer Content */}
              <p className="mt-4 text-base text-slate-100 font-sans leading-relaxed">
                "{result.answer}"
              </p>

              {/* Highlighted Projects & CTA */}
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Related Systems:</span>
                  {result.highlightedProjects?.map((proj, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
                    >
                      {proj}
                    </span>
                  ))}
                </div>

                {result.targetSection && (
                  <button
                    onClick={() => scrollToSection(result.targetSection)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-cyan-500/20 cursor-pointer shrink-0"
                  >
                    <span>{result.buttonLabel || "View Project →"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
