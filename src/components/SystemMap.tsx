import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYSTEM_MAP_DATA } from '../data/portfolioData';
import { Network, CheckCircle2, Sparkles, ArrowDown, ArrowRight, Zap } from 'lucide-react';

const CATEGORIES = [
  'Automation',
  'E-commerce',
  'CRM',
  'Marketing',
  'API Integration'
] as const;

type SystemCategory = typeof CATEGORIES[number];

const ENHANCED_SYSTEMS: Record<SystemCategory, {
  color: string;
  glow: string;
  description: string;
  nodes: { label: string; role: string; type: string }[];
}> = {
  'Automation': {
    color: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.25)',
    description: 'Autonomous event-driven pipeline bridging incoming leads, prompt personalization, transactional delivery, and continuous CRM synchronization.',
    nodes: [
      { label: 'n8n', role: 'Workflow Orchestration', type: 'Trigger' },
      { label: 'AI', role: 'Context Enrichment', type: 'Intelligence' },
      { label: 'Google Sheets', role: 'Live Source of Truth', type: 'Database' },
      { label: 'Email', role: 'ZeptoMail SMTP Dispatch', type: 'Delivery' },
      { label: 'CRM', role: 'Lead Disposition & Logs', type: 'Operations' },
      { label: 'Analytics', role: 'Conversion Telemetry', type: 'Telemetry' },
    ]
  },
  'E-commerce': {
    color: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.25)',
    description: 'High-availability marketplace transaction architecture coordinating seller catalogs, checkouts, payment settlement, and multi-courier fulfillment.',
    nodes: [
      { label: 'Buyer Interface', role: 'React & UI States', type: 'Frontend' },
      { label: 'Catalog Engine', role: 'HSN/GST Taxonomies', type: 'Product Core' },
      { label: 'Payment Gateway', role: 'Cashfree / Razorpay', type: 'Settlement' },
      { label: 'Logistics Handshake', role: 'Shiprocket & Delhivery', type: 'Fulfillment' },
      { label: 'Order State Machine', role: 'Webhook Listeners', type: 'Operations' },
      { label: 'Seller Payouts', role: 'Ledger & Commission', type: 'Finance' },
    ]
  },
  'CRM': {
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.25)',
    description: 'Unified caller operations command system tracking outbound agent allocations, call dispositions, automated schedule alarms, and conversion metrics.',
    nodes: [
      { label: 'Lead Pool Ingestion', role: 'Webhook & Ad Capture', type: 'Intake' },
      { label: 'Telecaller Pool', role: 'Caller Queue Routing', type: 'Routing' },
      { label: 'Call Log Interface', role: 'Real-time Duration & Notes', type: 'Agent UI' },
      { label: 'Disposition Engine', role: 'Interested / Callback / Won', type: 'Status' },
      { label: 'Automated Reminders', role: 'Calendar & WhatsApp', type: 'Follow-up' },
      { label: 'Performance Board', role: 'Daily KPIs & Conversion', type: 'Executive' },
    ]
  },
  'Marketing': {
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.25)',
    description: 'Full-funnel MarTech integration connecting paid advertising campaigns, search engine indexing, data layer telemetry, and attribution pipelines.',
    nodes: [
      { label: 'Google & Meta Ads', role: 'Paid Acquisition Campaigns', type: 'Traffic' },
      { label: 'Google Search Console', role: 'Technical SEO & Indexing', type: 'Organic' },
      { label: 'GTM DataLayer', role: 'Custom Event Dispatcher', type: 'Container' },
      { label: 'GA4 Telemetry', role: 'Funnel Milestone Tracking', type: 'Analytics' },
      { label: 'Server CAPI', role: 'First-party Conversion API', type: 'Reliability' },
      { label: 'Attribution Model', role: 'Channel ROI & Lead Source', type: 'Intelligence' },
    ]
  },
  'API Integration': {
    color: '#3b82f6',
    glow: 'rgba(59, 130, 246, 0.25)',
    description: 'Resilient middleware and webhook infrastructure managing secure cryptographic handshakes, error retries, and data transformations.',
    nodes: [
      { label: 'REST Endpoints', role: 'Structured Request Handling', type: 'Gateway' },
      { label: 'Signature Validation', role: 'HMAC Cryptographic Auth', type: 'Security' },
      { label: 'Webhook Receiver', role: 'Payment & Courier Events', type: 'Listener' },
      { label: 'Data Transformer', role: 'Payload Normalization', type: 'Logic' },
      { label: 'Idempotency Cache', role: 'Duplicate Prevention', type: 'Integrity' },
      { label: 'Database Sync', role: 'Transactional Commit', type: 'Storage' },
    ]
  }
};

export const SystemMap: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SystemCategory>('Automation');
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const activeData = ENHANCED_SYSTEMS[activeCategory] || ENHANCED_SYSTEMS['Automation'];

  return (
    <section id="architecture" className="py-24 bg-[#07090e] relative border-t border-white/5 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 -left-40 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-all duration-700 -z-0"
        style={{ backgroundColor: activeData.glow }}
      />
      <div 
        className="absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-[140px] pointer-events-none transition-all duration-700 -z-0"
        style={{ backgroundColor: activeData.glow }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>AI-GENERATED SYSTEM MAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight">
            Technology Ecosystem Map
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Select a domain below to dynamically illuminate the interconnected architecture, node dependencies, and operational data highways.
          </p>
        </div>

        {/* Domain Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            const catColor = ENHANCED_SYSTEMS[cat].color;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-2.5 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#12182a] text-white shadow-2xl scale-105'
                    : 'bg-[#0d101a] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
                style={{
                  borderColor: isSelected ? catColor : undefined,
                  boxShadow: isSelected ? `0 0 25px ${catColor}35` : undefined,
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full transition-transform"
                  style={{ 
                    backgroundColor: catColor,
                    boxShadow: isSelected ? `0 0 8px ${catColor}` : undefined
                  }}
                />
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Highlighted Ecosystem Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-10 rounded-3xl bg-[#0b0f1a]/95 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-sm"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Active Architecture Flow
                  </span>
                  <span 
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                    style={{ 
                      borderColor: `${activeData.color}40`,
                      color: activeData.color,
                      backgroundColor: `${activeData.color}10`
                    }}
                  >
                    Dynamic Circuit Active
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white font-heading mt-1 flex items-center gap-2">
                  <span>{activeCategory} System Pipeline</span>
                </h3>
              </div>
              <p className="text-xs text-slate-300 max-w-md font-normal leading-relaxed">
                {activeData.description}
              </p>
            </div>

            {/* Connected Animated Flow: Desktop Horizontal / Mobile Vertical */}
            <div className="relative py-4">
              
              {/* Connector line for large screens */}
              <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[2px] bg-white/10 -z-0 overflow-hidden">
                <motion.div
                  className="w-24 h-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${activeData.color}, transparent)`
                  }}
                  animate={{
                    x: ['-100%', '800%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                />
              </div>

              {/* Node Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10">
                {activeData.nodes.map((node, nIdx) => {
                  const isHovered = hoveredNode === nIdx;
                  return (
                    <motion.div
                      key={nIdx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: nIdx * 0.08 }}
                      onMouseEnter={() => setHoveredNode(nIdx)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`p-4 rounded-2xl bg-[#0f1526] border transition-all duration-300 relative flex flex-col justify-between group ${
                        isHovered 
                          ? 'border-white/50 -translate-y-1 shadow-xl' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                      style={{
                        boxShadow: isHovered ? `0 10px 25px ${activeData.color}30` : undefined
                      }}
                    >
                      {/* Step Indicator & Pulse Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span 
                          className="w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center"
                          style={{
                            backgroundColor: `${activeData.color}20`,
                            color: activeData.color
                          }}
                        >
                          {nIdx + 1}
                        </span>

                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {node.type}
                        </span>
                      </div>

                      {/* Main Node Label */}
                      <div className="my-1">
                        <h4 className="text-base font-heading font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                          {node.label}
                        </h4>
                        <p className="text-[11px] font-sans text-slate-400 mt-1 leading-tight">
                          {node.role}
                        </p>
                      </div>

                      {/* Sub-status Indicator */}
                      <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-500">Node Status:</span>
                        <span className="flex items-center gap-1 font-semibold" style={{ color: activeData.color }}>
                          <span 
                            className="w-1.5 h-1.5 rounded-full animate-ping"
                            style={{ backgroundColor: activeData.color }}
                          />
                          Synced
                        </span>
                      </div>

                      {/* Arrow indicator between nodes on smaller screens */}
                      {nIdx < activeData.nodes.length - 1 && (
                        <div className="lg:hidden flex justify-center mt-2 -mb-2">
                          <ArrowDown className="w-4 h-4 text-slate-500" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

            </div>

            {/* Verification Footer */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Interoperability: Zero Manual Glue Needed</span>
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Zap className="w-3.5 h-3.5" />
                <span>Synchronous State & Background Workers Active</span>
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
