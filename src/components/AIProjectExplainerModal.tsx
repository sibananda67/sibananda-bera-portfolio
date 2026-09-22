import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  ArrowDown, 
  AlertCircle, 
  CheckCircle, 
  Cpu, 
  Workflow, 
  GitMerge, 
  UserCheck, 
  ShieldCheck 
} from 'lucide-react';
import { explainProjectAI, ProjectExplanation, getAIStatus, AIStatus } from '../services/aiService';

interface AIProjectExplainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  projectTitle: string;
}

export const AIProjectExplainerModal: React.FC<AIProjectExplainerModalProps> = ({
  isOpen,
  onClose,
  projectId,
  projectTitle,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProjectExplanation | null>(null);
  const [aiStatus, setAiStatus] = useState<AIStatus>({ active: false, mode: 'demo', model: 'gemini-3.8-flash' });

  useEffect(() => {
    getAIStatus().then(setAiStatus);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      explainProjectAI(projectId, projectTitle)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [isOpen, projectId, projectTitle]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-[#0b0f1a] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#0e1424] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  AI Architecture Breakdown
                </span>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                  aiStatus.active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-slate-400'
                }`}>
                  {aiStatus.active ? 'SB AI • AI ACTIVE' : 'SB AI • DEMO MODE'}
                </span>
              </div>
              <h3 className="text-lg font-heading font-extrabold text-white mt-0.5">
                {projectTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close explainer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {loading ? (
            <div className="py-16 text-center space-y-3">
              <div className="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-xs font-mono text-cyan-300">Synthesizing system architecture...</p>
            </div>
          ) : data ? (
            <div className="space-y-6 font-sans">
              
              {/* Executive Summary */}
              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-slate-200 text-sm leading-relaxed">
                <span className="font-mono text-xs font-bold text-cyan-400 block mb-1">SYSTEM SUMMARY:</span>
                {data.summary}
              </div>

              {/* 5-Step Architecture Flow */}
              <div className="space-y-4">
                
                {/* 1. Problem */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 rounded-2xl bg-[#0e1424] border border-amber-500/20"
                >
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold mb-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>1. THE OPERATIONAL PROBLEM</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.problem}
                  </p>
                </motion.div>

                <div className="flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4 text-cyan-500 animate-bounce" />
                </div>

                {/* 2. Solution */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 rounded-2xl bg-[#0e1424] border border-emerald-500/20"
                >
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>2. THE SYSTEM SOLUTION</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.solution}
                  </p>
                </motion.div>

                <div className="flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4 text-cyan-500" />
                </div>

                {/* 3. Technology */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 rounded-2xl bg-[#0e1424] border border-blue-500/20"
                >
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold mb-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span>3. CORE TECHNOLOGIES & APIS</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.technology?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <div className="flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4 text-cyan-500" />
                </div>

                {/* 4. Automation */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-4 rounded-2xl bg-[#0e1424] border border-purple-500/20"
                >
                  <div className="flex items-center gap-2 text-purple-400 text-xs font-mono font-bold mb-1.5">
                    <Workflow className="w-4 h-4 text-purple-400" />
                    <span>4. AUTOMATION & TRIGGERS</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {data.automation}
                  </p>
                </motion.div>

                <div className="flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4 text-cyan-500" />
                </div>

                {/* 5. Business Workflow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-4 rounded-2xl bg-[#0e1424] border border-cyan-500/20"
                >
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold mb-2">
                    <GitMerge className="w-4 h-4 text-cyan-400" />
                    <span>5. END-TO-END BUSINESS WORKFLOW</span>
                  </div>
                  <ol className="space-y-2 text-xs font-mono text-slate-300">
                    {data.businessWorkflow?.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {idx + 1}
                        </span>
                        <span className="mt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>

                {/* Sibananda's Involvement */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-4 rounded-2xl bg-[#141b2d] border border-white/10"
                >
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold mb-1.5">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>SIBANANDA'S PRACTICAL INVOLVEMENT</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {data.involvement}
                  </p>
                </motion.div>

              </div>

            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0e1424] border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Structured from verified project blueprints.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
