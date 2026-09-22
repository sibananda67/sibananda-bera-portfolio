import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Workflow, 
  ArrowRight, 
  Layers, 
  Wrench, 
  TrendingUp, 
  Info, 
  CheckCircle2,
  Clock
} from 'lucide-react';
import { consultWorkflowAI, ConsultantResult, getAIStatus, AIStatus } from '../services/aiService';

const MANUAL_PRESETS = [
  "Managing leads",
  "Sending emails",
  "Updating spreadsheets",
  "Following up with customers",
  "Managing orders",
  "Creating reports",
  "Updating inventory"
];

export const AIBusinessConsultant: React.FC = () => {
  const [inputVal, setInputVal] = useState('I manually follow up with 100 leads every week.');
  const [loading, setLoading] = useState(false);
  const [consultation, setConsultation] = useState<ConsultantResult | null>(null);
  const [aiStatus, setAiStatus] = useState<AIStatus>({ active: false, mode: 'demo', model: 'gemini-3.8-flash' });

  useEffect(() => {
    getAIStatus().then(setAiStatus);
  }, []);

  const handleConsult = async (processToAnalyze?: string) => {
    const proc = (processToAnalyze || inputVal).trim();
    if (!proc || loading) return;

    setLoading(true);
    setInputVal(proc);

    try {
      const res = await consultWorkflowAI(proc);
      setConsultation(res);
    } catch (e) {
      // Fallback handled
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-20 sm:py-28 bg-[#080c14] border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI BUSINESS AUTOMATION CONSULTANT</span>
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
          What Should I Automate?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 font-sans max-w-2xl">
          What process are you currently doing manually? Share your bottleneck, and SB AI will design an architectural workflow concept.
        </p>

        {/* Manual Process Presets */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Common Bottlenecks:</span>
          {MANUAL_PRESETS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => handleConsult(preset)}
              className="px-3 py-1.5 rounded-xl bg-[#0e1424] hover:bg-cyan-500/10 border border-white/5 hover:border-cyan-500/30 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Custom Input Form */}
        <div className="mt-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConsult();
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="e.g., I manually copy leads from Facebook Ads into WhatsApp and Google Sheets..."
              className="flex-1 px-4 py-3.5 rounded-2xl bg-[#0e1424] border border-purple-500/30 focus:border-purple-400 text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all shadow-inner font-sans"
            />

            <button
              type="submit"
              disabled={!inputVal.trim() || loading}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-40 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-500/20 cursor-pointer shrink-0"
            >
              {loading ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Analyzing Process...</span>
                </>
              ) : (
                <>
                  <span>Consult Workflow</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Conceptual Result Card */}
        <AnimatePresence>
          {consultation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0e1424]/90 border border-purple-500/30 shadow-2xl relative overflow-hidden"
            >
              {/* Mandatory AI-generated Concept Label */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-purple-400 font-bold">
                  <Workflow className="w-4 h-4 text-purple-400" />
                  <span>AI-GENERATED WORKFLOW CONCEPT</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px]">
                  Conceptual Architecture (Not live deployed)
                </span>
              </div>

              {/* Analyzed Process Banner */}
              <div className="mt-4 text-sm font-sans text-slate-300">
                <span className="text-xs font-mono text-slate-500 block mb-1">ANALYZED OPERATION:</span>
                <span className="font-semibold text-white">"{consultation.processAnalyzed}"</span>
              </div>

              {/* Potential Workflow Pipeline */}
              <div className="mt-6">
                <div className="text-xs font-mono text-cyan-400 font-bold mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>POTENTIAL WORKFLOW PIPELINE:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {consultation.potentialWorkflow?.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#080c14] border border-white/10 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 font-mono text-[11px] font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-sans text-slate-200 mt-0.5">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potential Tools & Estimated Benefit */}
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Potential Tools */}
                <div>
                  <div className="text-xs font-mono text-purple-300 font-bold mb-2.5 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    <span>RECOMMENDED TOOLS & STACK:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {consultation.potentialTools?.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Estimated Operational Benefit */}
                <div>
                  <div className="text-xs font-mono text-emerald-400 font-bold mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>ESTIMATED OPERATIONAL BENEFIT:</span>
                  </div>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed">
                    {consultation.estimatedBenefit}
                  </p>
                </div>

              </div>

              {/* Recommended Starting Step */}
              {consultation.recommendedStartingStep && (
                <div className="mt-6 p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 flex items-start gap-3">
                  <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div className="text-xs font-sans text-indigo-200">
                    <span className="font-mono font-bold block mb-0.5 text-indigo-300">PRACTICAL STARTING STEP:</span>
                    {consultation.recommendedStartingStep}
                  </div>
                </div>
              )}

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
