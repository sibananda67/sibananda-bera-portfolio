import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Sparkles, 
  Download, 
  Send, 
  CheckCircle2, 
  Bot, 
  Printer, 
  Copy, 
  Check,
  ShieldCheck 
} from 'lucide-react';
import { askSBAI, getAIStatus, AIStatus } from '../services/aiService';
import { PERSONAL_INFO } from '../data/portfolioData';

const RESUME_QUESTIONS = [
  "What’s his technical background?",
  "What kind of projects has he worked on?",
  "What automation experience does he have?",
  "What technologies does he use?"
];

interface AIResumeAssistantProps {
  onOpenFullResume?: () => void;
}

export const AIResumeAssistant: React.FC<AIResumeAssistantProps> = ({ onOpenFullResume }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [aiStatus, setAiStatus] = useState<AIStatus>({ active: false, mode: 'demo', model: 'gemini-3.8-flash' });

  useEffect(() => {
    getAIStatus().then(setAiStatus);
  }, []);

  const handleAskResume = async (promptText?: string) => {
    const text = (promptText || query).trim();
    if (!text || loading) return;

    setLoading(true);
    setQuery(text);

    try {
      const res = await askSBAI(`Based strictly on Sibananda's resume: ${text}`);
      setResponse(res.reply);
    } catch (e) {
      setResponse("Sibananda specializes in Technology, Automation, E-commerce, and Digital Systems, turning manual business operations into structured automated workflows.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadText = () => {
    const text = `SIBANANDA BERA - RESUME
Positioning: ${PERSONAL_INFO.positioning}
Statement: ${PERSONAL_INFO.statement}
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

EXPERIENCE & DOMAIN EXPERTISE:
• Web Development: React, TypeScript, Modern CSS, REST APIs
• Workflows & Automation: n8n, Google Sheets, ZeptoMail, AI Personalization
• E-Commerce: Multi-vendor Marketplaces, Seller Onboarding, Catalog Taxonomies, HSN/GST
• Integrations: Cashfree, Razorpay, Shiprocket, Delhivery, BlueDart
• Marketing & Data: GTM DataLayer, GA4 Conversion Events, Google/Meta Ads

PROJECTS:
1. IngrediaMart - Multi-Vendor Food-Ingredient Platform
2. Seller Automation System (Google Sheets + AI + ZeptoMail)
3. Telecaller CRM & Operations Board
4. E-Commerce Catalog & Product Operations
5. Logistics & Payment Webhook Integrations
6. Digital Marketing & Analytics Systems`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Sibananda_Bera_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-resume" className="py-16 sm:py-20 bg-[#090d16] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI RESUME ASSISTANT</span>
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
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
          Ask My Resume
        </h2>
        <p className="mt-2 text-sm text-slate-400 font-sans max-w-xl">
          Directly query Sibananda's verified career history, technical stack, or project milestones.
        </p>

        {/* Preset Prompt Buttons */}
        <div className="mt-6 flex flex-wrap gap-2">
          {RESUME_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAskResume(q)}
              className="px-3 py-1.5 rounded-xl bg-[#0f172a] hover:bg-blue-500/10 border border-white/5 hover:border-blue-500/30 text-xs font-mono text-slate-300 hover:text-blue-300 transition-colors cursor-pointer text-left"
            >
              "{q}"
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAskResume();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything about Sibananda's credentials or background..."
              className="flex-1 px-4 py-3 rounded-2xl bg-[#0e1424] border border-blue-500/30 focus:border-blue-400 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-all font-sans"
            />

            <button
              type="submit"
              disabled={!query.trim() || loading}
              className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
            >
              {loading ? (
                <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
            </button>
          </form>
        </div>

        {/* AI Answer Card */}
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#0e1424] border border-blue-500/30 shadow-xl relative"
            >
              <div className="flex items-center justify-between text-xs font-mono text-blue-400 pb-3 border-b border-white/10 mb-3">
                <span className="flex items-center gap-1.5 font-bold">
                  <Bot className="w-4 h-4" />
                  <span>Resume Intelligence Response</span>
                </span>
                <span className="text-slate-500 text-[10px]">Derived from verified CV data</span>
              </div>

              <p className="text-sm text-slate-200 font-sans leading-relaxed">
                {response}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Download Resume Actions Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official documentation verified & maintained by Sibananda.</span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenFullResume && (
              <button
                onClick={onOpenFullResume}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Full Resume</span>
              </button>
            )}

            <button
              onClick={handleDownloadText}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-950" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5 text-slate-950" />
                  <span>Download Resume</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
