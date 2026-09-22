import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { AIProjectExplainerModal } from './AIProjectExplainerModal';
import { 
  ArrowRight, 
  ExternalLink, 
  Check, 
  Layers, 
  Cpu, 
  Activity, 
  Truck, 
  CreditCard, 
  Database, 
  PhoneCall, 
  TrendingUp, 
  FileSpreadsheet, 
  Mail, 
  Sparkles, 
  Boxes, 
  Eye 
} from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS_DATA[0].id);
  const [explainingProject, setExplainingProject] = useState<ProjectItem | null>(null);
  const activeProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <section id="work" className="py-24 bg-[#090c14] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Things I’ve Built, Managed & Automated
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Real systems addressing tangible operational problems—connecting seller networks, customer checkouts, logistics APIs, and automated outreach engines.
          </p>
        </div>

        {/* Project Selector Rail */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {PROJECTS_DATA.map((proj) => {
            const isSelected = selectedProjectId === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all flex items-center gap-3 border ${
                  isSelected
                    ? 'bg-[#12192c] border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white'
                    : 'bg-[#0e121d] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/10'
                }`}
              >
                <span className="font-mono text-xs text-cyan-400 font-bold">
                  {proj.number}
                </span>
                <span className="text-sm font-semibold tracking-tight">
                  {proj.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Cinematic Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl bg-[#0c101c] border border-white/10 overflow-hidden shadow-2xl shadow-black/80"
          >
            {/* Project Header Bar */}
            <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-[#111728] via-[#0d1220] to-[#12182a] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
                    PROJECT {activeProject.number}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                  {activeProject.title}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setExplainingProject(activeProject)}
                  className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/40 text-cyan-300 hover:text-white font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-cyan-500/10 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>✨ Explain with AI</span>
                </button>

                {activeProject.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Body: 2 Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
              
              {/* Left Column: Context & Architecture */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-normal">
                    {activeProject.fullDesc}
                  </p>

                  {/* Visual Architecture Flow */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#080b12] border border-white/5">
                    <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>System Architecture Handshake</span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {activeProject.architecture.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono flex items-center justify-center shrink-0">
                            {sIdx + 1}
                          </div>
                          <span className="text-xs font-mono text-slate-300">
                            {step}
                          </span>
                          {sIdx < activeProject.architecture.length - 1 && (
                            <span className="text-slate-600 text-xs ml-auto">↓</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Core System Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Covered Scope Chips */}
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[11px] font-mono text-slate-400 block mb-2">
                    Project Scope & Workflows:
                  </span>
                  <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                    {activeProject.areas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Custom Interactive Realistic Dashboard/Mockup */}
              <div className="lg:col-span-7">
                <div className="w-full rounded-2xl bg-[#090d18] border border-white/10 p-5 shadow-inner overflow-hidden min-h-[440px] flex flex-col justify-between">
                  
                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-slate-300 font-semibold uppercase">
                        {activeProject.mockupType.replace('-', ' ')} preview
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500">Live Simulation</span>
                  </div>

                  {/* Render Specific Mockup based on type */}
                  <div className="flex-1 flex flex-col justify-center">
                    {activeProject.mockupType === 'marketplace' && <MarketplaceMockup />}
                    {activeProject.mockupType === 'automation-flow' && <AutomationFlowMockup />}
                    {activeProject.mockupType === 'crm-dashboard' && <CrmMockup />}
                    {activeProject.mockupType === 'ecommerce-ops' && <EcommerceOpsMockup />}
                    {activeProject.mockupType === 'logistics-payment' && <LogisticsPaymentMockup />}
                    {activeProject.mockupType === 'marketing-funnel' && <MarketingFunnelMockup />}
                  </div>

                  {/* Mockup Footer status */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Engine: Production System State</span>
                    <span className="text-cyan-400">Strict Data Privacy Guarded</span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* AI Project Explainer Modal */}
      {explainingProject && (
        <AIProjectExplainerModal
          isOpen={Boolean(explainingProject)}
          onClose={() => setExplainingProject(null)}
          projectId={explainingProject.id}
          projectTitle={explainingProject.title}
        />
      )}
    </section>
  );
};

// Sub-Mockup 1: Ingrediamart Marketplace Dashboard
const MarketplaceMockup: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<number>(0);
  const orders = [
    { id: "ING-8921", vendor: "Apex Agro Spices", item: "Kashmiri Red Chilli (A-Grade)", qty: "250 KG", val: "₹1,45,000", status: "Dispatched", awb: "DEL_8920194" },
    { id: "ING-8922", vendor: "Malabar Bio Extracts", item: "Organic Cardamom Extract", qty: "40 Liters", val: "₹92,400", status: "Assigned", awb: "Pending" },
    { id: "ING-8923", vendor: "Satpura Herbs Ltd", item: "Ashwagandha Root Powder", qty: "500 KG", val: "₹2,10,000", status: "Delivered", awb: "SR_9410294" }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-[#0e1424] border border-cyan-500/20">
          <div className="text-[10px] text-slate-400 font-mono">Active Vendors</div>
          <div className="text-lg font-bold text-white mt-1">142</div>
          <div className="text-[10px] text-cyan-400 font-mono mt-0.5">Verified onboarded</div>
        </div>
        <div className="p-3 rounded-xl bg-[#0e1424] border border-blue-500/20">
          <div className="text-[10px] text-slate-400 font-mono">Dispatches Today</div>
          <div className="text-lg font-bold text-white mt-1">38 Consignments</div>
          <div className="text-[10px] text-blue-400 font-mono mt-0.5">Shiprocket / Delhivery</div>
        </div>
        <div className="p-3 rounded-xl bg-[#0e1424] border border-purple-500/20">
          <div className="text-[10px] text-slate-400 font-mono">Escrow Settlement</div>
          <div className="text-lg font-bold text-white mt-1">99.4% Valid</div>
          <div className="text-[10px] text-purple-400 font-mono mt-0.5">GST & Platform Fees</div>
        </div>
      </div>

      {/* Orders Table Mock */}
      <div className="rounded-xl bg-[#0e1424] border border-white/5 overflow-hidden">
        <div className="p-2.5 bg-white/[0.02] border-b border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Live Marketplace Order Queue</span>
          <span className="text-cyan-400 text-[10px]">Real-time state transitions</span>
        </div>
        <div className="divide-y divide-white/5 text-xs">
          {orders.map((ord, idx) => (
            <div
              key={ord.id}
              onClick={() => setSelectedOrder(idx)}
              className={`p-3 flex items-center justify-between cursor-pointer transition-colors ${
                selectedOrder === idx ? 'bg-cyan-500/10' : 'hover:bg-white/[0.02]'
              }`}
            >
              <div>
                <div className="font-mono font-semibold text-slate-200">{ord.id} • {ord.item}</div>
                <div className="text-[11px] text-slate-400">{ord.vendor} • {ord.qty}</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-slate-200">{ord.val}</div>
                <span className={`inline-block text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  ord.status === 'Delivered' ? 'bg-emerald-500/20 text-emerald-300' :
                  ord.status === 'Dispatched' ? 'bg-cyan-500/20 text-cyan-300' :
                  'bg-amber-500/20 text-amber-300'
                }`}>
                  {ord.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[#0a0e19] border border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
        <span>Selected: {orders[selectedOrder].id}</span>
        <span>AWB: {orders[selectedOrder].awb}</span>
      </div>
    </div>
  );
};

// Sub-Mockup 2: Seller Outreach Automation System
const AutomationFlowMockup: React.FC = () => {
  const steps = [
    { label: "Google Sheets Trigger", detail: "Row appended with verified business lead", time: "0.0s", status: "Triggered" },
    { label: "AI Personalization", detail: "Extracts product line & matches tone", time: "+1.2s", status: "Generated" },
    { label: "ZeptoMail SMTP Dispatch", detail: "Delivered via dedicated IP pool", time: "+2.4s", status: "Sent" },
    { label: "CRM Bi-Directional Sync", detail: "Status tagged: 'Outreach Stage 1'", time: "+3.1s", status: "Updated" }
  ];

  return (
    <div className="space-y-3 font-mono">
      <div className="p-3 rounded-xl bg-[#0d1222] border border-purple-500/20 text-xs">
        <div className="text-slate-400 text-[10px] uppercase">Workflow Engine: n8n + ZeptoMail</div>
        <div className="text-slate-200 text-xs mt-1">Lead Outreach & Engagement Pipeline</div>
      </div>

      <div className="space-y-2">
        {steps.map((st, i) => (
          <div key={i} className="p-3 rounded-xl bg-[#0e1424] border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs flex items-center justify-center font-bold">
                {i + 1}
              </div>
              <div>
                <div className="text-xs text-white font-semibold">{st.label}</div>
                <div className="text-[11px] text-slate-400">{st.detail}</div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {st.status}
              </span>
              <div className="text-[9px] text-slate-500 mt-1">{st.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sub-Mockup 3: Telecaller CRM
const CrmMockup: React.FC = () => {
  return (
    <div className="space-y-3 font-mono">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        <div className="p-2.5 rounded-lg bg-[#0e1424] border border-white/5">
          <div className="text-[10px] text-slate-400">Total Leads</div>
          <div className="text-base font-bold text-white">412</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0e1424] border border-white/5">
          <div className="text-[10px] text-slate-400">Calls Today</div>
          <div className="text-base font-bold text-cyan-400">78</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0e1424] border border-white/5">
          <div className="text-[10px] text-slate-400">Connect Rate</div>
          <div className="text-base font-bold text-emerald-400">64.2%</div>
        </div>
        <div className="p-2.5 rounded-lg bg-[#0e1424] border border-white/5">
          <div className="text-[10px] text-slate-400">Callbacks Set</div>
          <div className="text-base font-bold text-purple-400">23</div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[#0e1424] border border-white/5 text-xs">
        <div className="flex items-center justify-between text-slate-400 mb-2 text-[11px]">
          <span>Recent Call Disposition Logs</span>
          <span className="text-cyan-400">Active Queue</span>
        </div>
        <div className="space-y-2">
          <div className="p-2 rounded bg-white/[0.02] flex items-center justify-between">
            <div>
              <span className="text-slate-200 font-bold">Shreeji Naturals</span>
              <span className="text-slate-500 text-[10px] ml-2">Caller: Agent #04</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              Interested (Demo)
            </span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] flex items-center justify-between">
            <div>
              <span className="text-slate-200 font-bold">Vedic Botanicals</span>
              <span className="text-slate-500 text-[10px] ml-2">Caller: Agent #02</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
              Callback @ 3:30 PM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-Mockup 4: E-Commerce Catalog Ops
const EcommerceOpsMockup: React.FC = () => {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="p-3 rounded-xl bg-[#0e1424] border border-white/5">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <span>Catalog Governance & HSN Validation Table</span>
          <span className="text-cyan-400">Compliance Pass</span>
        </div>
        <div className="space-y-1.5">
          <div className="p-2 rounded bg-white/[0.02] flex items-center justify-between">
            <span>Turmeric Curcumin 95% Extract</span>
            <span className="text-cyan-300">HSN: 3301.90 | GST: 18%</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] flex items-center justify-between">
            <span>Organic Dehydrated Onion Flakes</span>
            <span className="text-cyan-300">HSN: 0712.20 | GST: 5%</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] flex items-center justify-between">
            <span>Cold-Pressed Moringa Seed Oil</span>
            <span className="text-cyan-300">HSN: 1515.90 | GST: 5%</span>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-[#0e1424] border border-white/5 flex items-center justify-between text-[11px]">
        <span className="text-slate-400">Asset Compression Queue</span>
        <span className="text-emerald-400">41 Images Converted to WebP (-74% bytes)</span>
      </div>
    </div>
  );
};

// Sub-Mockup 5: Logistics & Payment Integrations
const LogisticsPaymentMockup: React.FC = () => {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="p-3 rounded-xl bg-[#0e1424] border border-cyan-500/20">
        <div className="text-[10px] text-slate-400 uppercase">Payment Gateways & Courier Routing</div>
        <div className="text-slate-200 text-xs mt-1">Cashfree / Razorpay ↔ Shiprocket / Delhivery</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-[#0b0f1c] border border-white/5">
          <div className="text-[10px] text-cyan-400">Payment Handshake</div>
          <div className="text-white font-bold mt-1">Cashfree Split Escrow</div>
          <div className="text-[10px] text-slate-400 mt-1">Signature Verified • Auto-Settlement</div>
        </div>

        <div className="p-3 rounded-xl bg-[#0b0f1c] border border-white/5">
          <div className="text-[10px] text-blue-400">Logistics Broker</div>
          <div className="text-white font-bold mt-1">Shiprocket / Delhivery</div>
          <div className="text-[10px] text-slate-400 mt-1">Rate Optimization • Instant AWB</div>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-[#090d18] border border-white/5 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Webhook Health: 99.98% Idempotency Guarded</span>
        <span className="text-emerald-400">Zero Lost Events</span>
      </div>
    </div>
  );
};

// Sub-Mockup 6: Digital Marketing Systems
const MarketingFunnelMockup: React.FC = () => {
  return (
    <div className="space-y-3 font-mono text-xs">
      <div className="p-3 rounded-xl bg-[#0e1424] border border-white/5">
        <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
          <span>GTM DataLayer & Acquisition Telemetry</span>
          <span className="text-cyan-400">Active Pipeline</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
            <span className="text-slate-300">Google Ads & Meta Ads Clicks</span>
            <span className="text-slate-400">UTM Propagated</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
            <span className="text-slate-300">GTM Tag Execution</span>
            <span className="text-cyan-300">DataLayer Events Dispatched</span>
          </div>
          <div className="flex items-center justify-between p-2 rounded bg-white/[0.02]">
            <span className="text-slate-300">GA4 Custom Conversion Milestone</span>
            <span className="text-emerald-300">Vendor Onboarding Complete</span>
          </div>
        </div>
      </div>

      <div className="p-2.5 rounded-lg bg-[#090d18] border border-white/5 text-[10px] text-slate-400 flex items-center justify-between">
        <span>Attribution Match Rate: 98.4%</span>
        <span className="text-purple-400">Single Source of Truth</span>
      </div>
    </div>
  );
};
