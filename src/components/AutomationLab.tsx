import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WORKFLOW_SIMULATIONS } from '../data/portfolioData';
import { buildWorkflowAI, GeneratedWorkflow, getAIStatus, AIStatus } from '../services/aiService';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Terminal, 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Cpu, 
  FileCode2, 
  Send,
  Zap,
  ArrowDown
} from 'lucide-react';

export const AutomationLab: React.FC = () => {
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>(WORKFLOW_SIMULATIONS[0].id);
  const currentWorkflow = WORKFLOW_SIMULATIONS.find((w) => w.id === activeWorkflowId) || WORKFLOW_SIMULATIONS[0];
  
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1.2); // seconds per step
  const [logs, setLogs] = useState<Array<{ time: string; msg: string; type: string }>>([
    { time: '10:14:00', msg: 'System standby. Select a workflow or click Run Simulation.', type: 'info' }
  ]);

  // AI Automation Builder Demo state
  const [taskInput, setTaskInput] = useState<string>('I want every new lead to receive a personalized email automatically.');
  const [isBuilding, setIsBuilding] = useState<boolean>(false);
  const [generatedWorkflow, setGeneratedWorkflow] = useState<GeneratedWorkflow | null>(null);
  const [aiStatus, setAiStatus] = useState<AIStatus>({ active: false, mode: 'demo', model: 'gemini-3.8-flash' });

  useEffect(() => {
    getAIStatus().then(setAiStatus);
  }, []);

  const handleBuildAIWorkflow = async () => {
    if (!taskInput.trim() || isBuilding) return;
    setIsBuilding(true);
    try {
      const result = await buildWorkflowAI(taskInput);
      setGeneratedWorkflow(result);
      addLog(`AI Workflow Builder generated pipeline: ${result.workflowTitle}`, 'success');
    } catch (e) {
      // Fallback handled
    } finally {
      setIsBuilding(false);
    }
  };

  // Simulation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning) {
      timer = setInterval(() => {
        setActiveStepIndex((prev) => {
          if (prev >= currentWorkflow.nodes.length - 1) {
            setIsRunning(false);
            addLog(`Workflow execution completed successfully for [${currentWorkflow.title}].`, 'success');
            return prev;
          }
          const nextIndex = prev + 1;
          const node = currentWorkflow.nodes[nextIndex];
          addLog(`Executed node [${node.label}] (${node.sublabel})`, 'exec');
          return nextIndex;
        });
      }, speed * 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, activeStepIndex, currentWorkflow, speed]);

  const addLog = (msg: string, type: 'info' | 'exec' | 'success') => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setLogs((prev) => [...prev.slice(-15), { time: timeStr, msg, type }]);
  };

  const handleStartSimulation = () => {
    setActiveStepIndex(0);
    setIsRunning(true);
    addLog(`Initiated live simulation: ${currentWorkflow.title}`, 'info');
  };

  const handleReset = () => {
    setIsRunning(false);
    setActiveStepIndex(0);
    addLog('Workflow reset to initial node.', 'info');
  };

  const selectNodeDirectly = (index: number) => {
    setIsRunning(false);
    setActiveStepIndex(index);
    const node = currentWorkflow.nodes[index];
    addLog(`Inspecting node state: ${node.label}`, 'exec');
  };

  return (
    <section id="automation" className="py-24 bg-[#07090f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Automation Lab
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Watch real-world business workflows execute step-by-step. Toggle between sales automation, order orchestration, and catalog pipelines to inspect live payloads and event triggers.
          </p>
        </div>

        {/* Workflow Switcher Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {WORKFLOW_SIMULATIONS.map((wf) => {
            const isActive = wf.id === activeWorkflowId;
            return (
              <button
                key={wf.id}
                onClick={() => {
                  setActiveWorkflowId(wf.id);
                  setActiveStepIndex(0);
                  setIsRunning(false);
                  addLog(`Switched active pipeline to: ${wf.title}`, 'info');
                }}
                className={`px-5 py-3 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#13192c] border-purple-500/50 text-white shadow-lg shadow-purple-500/10'
                    : 'bg-[#0d101a] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                }`}
              >
                <div className="text-xs font-mono text-purple-400 mb-0.5">{wf.category}</div>
                <div className="text-sm font-semibold">{wf.title}</div>
              </button>
            );
          })}
        </div>

        {/* Main Lab Board */}
        <div className="rounded-3xl bg-[#0a0e19] border border-white/10 p-6 sm:p-8 shadow-2xl">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                {currentWorkflow.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                {currentWorkflow.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="automation-run-btn"
                onClick={() => (isRunning ? setIsRunning(false) : handleStartSimulation())}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 shadow-lg shadow-purple-500/20 transition-all cursor-pointer"
              >
                {isRunning ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Simulation</span>
                  </>
                )}
              </button>

              <button
                id="automation-reset-btn"
                onClick={handleReset}
                className="p-2 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-slate-300 text-xs transition-colors"
                title="Reset simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Flow Nodes Rail */}
          <div className="mb-10 overflow-x-auto pb-4 scrollbar-none">
            <div className="flex items-center min-w-[760px] justify-between relative px-2">
              
              {/* Connector line behind nodes */}
              <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-slate-800 -translate-y-1/2 -z-0" />
              
              {/* Animated Progress beam */}
              <div
                className="absolute top-1/2 left-6 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 -translate-y-1/2 -z-0 transition-all duration-500 shadow-sm shadow-cyan-400"
                style={{
                  width: `${(activeStepIndex / (currentWorkflow.nodes.length - 1)) * 95}%`
                }}
              />

              {currentWorkflow.nodes.map((node, nIdx) => {
                const isPassed = nIdx <= activeStepIndex;
                const isCurrent = nIdx === activeStepIndex;

                return (
                  <div
                    key={node.id}
                    onClick={() => selectNodeDirectly(nIdx)}
                    className="relative z-10 flex flex-col items-center cursor-pointer group"
                  >
                    {/* Node Circle */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 font-mono text-xs font-bold ${
                        isCurrent
                          ? 'bg-gradient-to-br from-cyan-400 to-purple-500 text-slate-950 scale-110 shadow-xl shadow-cyan-500/40 ring-4 ring-cyan-400/20'
                          : isPassed
                          ? 'bg-purple-950/80 border border-purple-400/50 text-purple-300'
                          : 'bg-[#111728] border border-white/10 text-slate-500 group-hover:border-white/30 group-hover:text-slate-300'
                      }`}
                    >
                      {isPassed && !isCurrent ? (
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <span>0{nIdx + 1}</span>
                      )}
                    </div>

                    {/* Node Text */}
                    <div className="mt-3 text-center">
                      <div className={`text-xs font-semibold tracking-tight transition-colors ${
                        isCurrent ? 'text-cyan-300' : isPassed ? 'text-white' : 'text-slate-500'
                      }`}>
                        {node.label}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                        {node.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inspection Deck: 2 Columns (Live Payload & Live Terminal) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Active Node Payload Inspector */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-[#070a12] border border-white/10 flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan-400">
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>Node Inspector: {currentWorkflow.nodes[activeStepIndex].label}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 uppercase">
                  {currentWorkflow.nodes[activeStepIndex].type}
                </span>
              </div>

              <div className="flex-1 font-mono text-xs text-slate-300 bg-[#05070d] p-4 rounded-xl border border-white/5 overflow-x-auto">
                <pre className="text-cyan-300/90 leading-relaxed text-[11px]">
                  {currentWorkflow.nodes[activeStepIndex].payloadSample || '{\n  "status": "ready"\n}'}
                </pre>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Payload Schema: Valid JSON</span>
                <span className="text-purple-400">Step {activeStepIndex + 1} of {currentWorkflow.nodes.length}</span>
              </div>
            </div>

            {/* Right: Live Execution Terminal Logs */}
            <div className="lg:col-span-6 p-5 rounded-2xl bg-[#070a12] border border-white/10 flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-xs font-mono">
                <div className="flex items-center gap-2 text-purple-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Event Stream & Execution Logs</span>
                </div>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              <div className="flex-1 font-mono text-[11px] bg-[#05070d] p-4 rounded-xl border border-white/5 h-44 overflow-y-auto space-y-1.5 scrollbar-none">
                {logs.map((log, lIdx) => (
                  <div key={lIdx} className="flex items-start gap-2">
                    <span className="text-slate-600 shrink-0">[{log.time}]</span>
                    <span className={`${
                      log.type === 'success' ? 'text-emerald-400 font-semibold' :
                      log.type === 'exec' ? 'text-cyan-300' :
                      'text-slate-400'
                    }`}>
                      {log.msg}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Buffer: Active</span>
                <span>Latency: ~45ms</span>
              </div>
            </div>

          </div>

          {/* Special Section: AI Automation Builder Demo */}
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-white">
                    Describe a Repetitive Task
                  </h3>
                  <p className="text-xs font-sans text-slate-400">
                    Input any manual business chore, and SB AI will construct a sequential automated pipeline.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full border ${
                  aiStatus.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-white/5 text-slate-400 border-white/10'
                }`}>
                  {aiStatus.active ? 'SB AI • AI ACTIVE' : 'SB AI • DEMO MODE'}
                </span>
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleBuildAIWorkflow();
              }}
              className="mt-4 flex flex-col sm:flex-row gap-3"
            >
              <input
                type="text"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="I want every new lead to receive a personalized email automatically."
                className="flex-1 px-4 py-3 rounded-2xl bg-[#0e1424] border border-cyan-500/30 focus:border-cyan-400 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-all font-sans"
              />

              <button
                type="submit"
                disabled={!taskInput.trim() || isBuilding}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer shrink-0"
              >
                {isBuilding ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Synthesizing Nodes...</span>
                  </>
                ) : (
                  <>
                    <span>Build Workflow →</span>
                  </>
                )}
              </button>
            </form>

            {/* Workflow Generation Results */}
            <AnimatePresence>
              {generatedWorkflow && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 pt-6 border-t border-white/10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-md shadow-emerald-500/10">
                        <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        <span>⚡ Workflow Generated</span>
                      </span>
                      <span className="text-xs font-heading font-bold text-white">
                        {generatedWorkflow.workflowTitle}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400">
                      Trigger: <span className="text-cyan-400 font-semibold">{generatedWorkflow.trigger}</span>
                    </span>
                  </div>

                  {/* Node-by-Node Animated Sequence */}
                  <div className="space-y-3">
                    {generatedWorkflow.nodes.map((node, nIdx) => (
                      <motion.div
                        key={nIdx}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: nIdx * 0.12 }}
                        className="p-3.5 rounded-2xl bg-[#0e1424] border border-cyan-500/20 hover:border-cyan-400/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            {node.step}
                          </span>
                          <div>
                            <span className="text-xs font-heading font-bold text-white block">
                              {node.label}
                            </span>
                            <span className="text-[11px] font-sans text-slate-400">
                              {node.action}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[10px] font-mono shrink-0">
                            {node.tool}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Ready
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Demo Disclaimer Box */}
                  <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Summary: {generatedWorkflow.summary}</span>
                    <span className="text-amber-400 shrink-0 ml-2">⚠️ Visual Prototype Only</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
