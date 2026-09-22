import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Sparkles, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  RefreshCw, 
  ShieldCheck, 
  Database, 
  Server, 
  Share2 
} from 'lucide-react';

interface DiagramConcept {
  title: string;
  trigger: string;
  layers: {
    name: string;
    description: string;
    tech: string;
    protocol: string;
  }[];
  dataPayloadSummary: string;
}

const PRESET_SYSTEMS: Record<string, DiagramConcept> = {
  "Automated E-commerce Order System": {
    title: "Marketplace Checkout & Dispatch Highway",
    trigger: "Order Paid (Cashfree / Razorpay Webhook)",
    layers: [
      { name: "Ingestion Gateway", description: "Cryptographic HMAC signature validation", tech: "Node / Express API", protocol: "HTTPS Webhook" },
      { name: "Order State Machine", description: "Lock inventory & compute multi-vendor split", tech: "Postgres / Ledger", protocol: "ACID Transaction" },
      { name: "Courier Allocation", description: "Generate AWB & request pickup docket", tech: "Shiprocket / Delhivery API", protocol: "REST JSON" },
      { name: "Customer Notification", description: "Dispatch SMS / WhatsApp tracking link", tech: "Twilio / Meta Cloud API", protocol: "Async Event" },
      { name: "BI Telemetry", description: "Stream revenue event to executive board", tech: "GA4 / Power BI", protocol: "DataLayer" }
    ],
    dataPayloadSummary: '{"event": "ORDER_CONFIRMED", "split_payout": true, "awb_dispatched": true}'
  },
  "Autonomous Lead Outreach Pipeline": {
    title: "Zero-Touch Outbound Qualification & Dispatch",
    trigger: "New Row Added in Google Sheets / Form Submission",
    layers: [
      { name: "Poller & Webhook", description: "Detect uncontacted record & extract metadata", tech: "n8n Trigger Node", protocol: "Event Hook" },
      { name: "AI Enrichment", description: "Synthesize personalized value proposition", tech: "Gemini / LLM API", protocol: "Prompt Context" },
      { name: "SMTP Engine", description: "Authenticate DKIM/SPF & send email", tech: "ZeptoMail SMTP", protocol: "TLS Port 587" },
      { name: "Engagement Listener", description: "Detect opens, clicks & reply intent", tech: "Webhook Listener", protocol: "POST Callback" },
      { name: "CRM Stage Shift", description: "Update lead status to 'Contacted'", tech: "Google Sheets / CRM", protocol: "API Patch" }
    ],
    dataPayloadSummary: '{"lead_id": "LD_908", "personalized": true, "delivery_status": "DELIVERED"}'
  },
  "Telecaller Disposition & Analytics Hub": {
    title: "Outbound Call Operations & Conversion Engine",
    trigger: "Caller selects Call Disposition in Dashboard",
    layers: [
      { name: "Agent Web Console", description: "Capture call duration, notes & outcome tag", tech: "React Custom Portal", protocol: "Client State" },
      { name: "Queue Balancer", description: "Re-queue busy numbers / assign hot leads", tech: "Custom Routing Engine", protocol: "Websocket" },
      { name: "Callback Scheduler", description: "Set reminder alarm on agent calendar", tech: "Google Calendar API", protocol: "OAuth2 Sync" },
      { name: "Aggregation Daemon", description: "Compute hourly caller connect ratios", tech: "Server Worker", protocol: "Cron / Interval" },
      { name: "Executive KPI Board", description: "Display live team conversion rates", tech: "Real-time Dashboard", protocol: "SSE Stream" }
    ],
    dataPayloadSummary: '{"disposition": "INTERESTED", "followup_scheduled": "2026-09-24T10:00:00Z"}'
  }
};

export const AISystemVisualizer: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<string>("Automated E-commerce Order System");
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [activeConcept, setActiveConcept] = useState<DiagramConcept>(PRESET_SYSTEMS["Automated E-commerce Order System"]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleSelectPreset = (key: string) => {
    setSelectedPreset(key);
    setActiveConcept(PRESET_SYSTEMS[key]);
  };

  const handleGenerateCustom = () => {
    if (!customPrompt.trim()) return;
    setIsGenerating(true);

    setTimeout(() => {
      setActiveConcept({
        title: `Custom Architecture: ${customPrompt.slice(0, 32)}...`,
        trigger: `Trigger: Inbound Event for "${customPrompt.slice(0, 24)}"`,
        layers: [
          { name: "Data Ingestion & Event Capture", description: "Secure entry endpoint with validation", tech: "Webhooks / REST", protocol: "HTTPS" },
          { name: "Business Logic Engine", description: `Processes workflow rules for: ${customPrompt.slice(0, 36)}`, tech: "Node / n8n", protocol: "Payload Pipeline" },
          { name: "AI Contextual Processing", description: "Autonomous data normalization & generation", tech: "Gemini Model", protocol: "JSON Schema" },
          { name: "External Service Handshake", description: "Dispatches updates to downstream tools", tech: "Connected APIs", protocol: "OAuth2 / Tokens" },
          { name: "State Persistence & Telemetry", description: "Records audit trail and fires analytics metrics", tech: "Database & Dashboards", protocol: "Telemetry" }
        ],
        dataPayloadSummary: `{"custom_process": "${customPrompt.slice(0, 20)}", "status": "AUTOMATED", "validated": true}`
      });
      setIsGenerating(false);
    }, 600);
  };

  return (
    <section id="visualize-system" className="py-20 sm:py-28 bg-[#06080e] border-t border-white/5 relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>VISUALIZE A SYSTEM</span>
          </div>

          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
            AI-GENERATED DIAGRAM CONCEPT
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
          System Architecture Visualizer
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-400 font-sans max-w-2xl">
          Describe any business process or pick a production blueprint below to generate a conceptual system architecture diagram.
        </p>

        {/* Preset Selector Buttons */}
        <div className="mt-8 flex flex-wrap gap-2.5">
          {Object.keys(PRESET_SYSTEMS).map((presetKey) => {
            const isSelected = selectedPreset === presetKey;
            return (
              <button
                key={presetKey}
                onClick={() => handleSelectPreset(presetKey)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-[#0c1220] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'}`} />
                <span>{presetKey}</span>
              </button>
            );
          })}
        </div>

        {/* Custom Input */}
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Or describe a custom system (e.g. Automated vendor invoice approval and bank payout)..."
              className="flex-1 px-4 py-3 rounded-2xl bg-[#0c1220] border border-cyan-500/30 focus:border-cyan-400 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none transition-all font-sans"
            />
            <button
              onClick={handleGenerateCustom}
              disabled={!customPrompt.trim() || isGenerating}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 cursor-pointer shrink-0"
            >
              {isGenerating ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Synthesizing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Visualize System</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Conceptual Diagram Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConcept.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-cyan-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Diagram Title & Mandatory Concept Label */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-3">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {activeConcept.trigger}
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mt-1">
                  {activeConcept.title}
                </h3>
              </div>

              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px]">
                  AI-Generated Architecture Schematic
                </span>
              </div>
            </div>

            {/* Visual Topology Schematic */}
            <div className="space-y-4 relative">
              {activeConcept.layers.map((layer, lIdx) => (
                <div key={lIdx} className="relative">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#0e1628] border border-white/10 hover:border-cyan-400/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {lIdx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-heading font-bold text-white">
                            {layer.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px] font-mono">
                            {layer.protocol}
                          </span>
                        </div>
                        <p className="text-xs font-sans text-slate-400 mt-0.5">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs">
                        {layer.tech}
                      </span>
                    </div>
                  </div>

                  {/* Flow Arrow between layers */}
                  {lIdx < activeConcept.layers.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="w-0.5 h-3 bg-cyan-500/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Live Data Payload Sample */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Simulated Event Payload:</span>
                <code className="text-cyan-300 bg-[#060a14] px-2 py-1 rounded border border-white/5">
                  {activeConcept.dataPayloadSummary}
                </code>
              </div>

              <span className="text-[11px] text-slate-500">
                Resilient Architecture • Event-Driven Handshake
              </span>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
