import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, PROJECTS_DATA, SKILLS_DATA } from '../data/portfolioData';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink, Mail } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
SIBANANDA BERA
Technology • Automation • E-commerce • Digital Systems
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
GitHub: ${PERSONAL_INFO.github}

SUMMARY:
${PERSONAL_INFO.statement}
${PERSONAL_INFO.bioIntro}

CORE PRACTICAL COMPETENCIES:
• Web Development: React, TypeScript, Modern CSS, REST APIs, Webhooks
• Automation: n8n, Workflow Automation, Google Sheets, Email Delivery (ZeptoMail), AI-assisted Workflows
• E-Commerce: Multi-vendor Marketplaces, Seller Onboarding, Catalog Taxonomies, HSN/GST Rules, Inventory & Orders
• Integrations: Cashfree, Razorpay, Shiprocket, Delhivery, BlueDart, Google Workspace
• Marketing & Data: GTM, GA4, Search Console, Google/Meta Ads Systems, Power BI, Custom CRM Operations

PROJECT EXPERIENCE:
1. Ingrediamart - Multi-Vendor Food-Ingredient Platform
- Worked across technology and operational ecosystem connecting sellers, payments, logistics, and customer orders.
- Managed seller onboarding panels, product listing taxonomies, HSN/GST validation, and order state transitions.

2. Seller Automation System
- Automated outreach workflow connecting Google Sheets triggers, AI personalization, ZeptoMail transactional delivery, and CRM updates.

3. Telecaller CRM & Operations Board
- Operational CRM system with dynamic lead pools, call logs, disposition tracking, and daily KPI metrics.

4. E-Commerce Catalog & Product Operations
- Structured product listings, attribute taxonomies, HSN/GST compliance tables, and image optimization pipelines.

5. Logistics & Payment Integrations
- Technical architecture connecting Cashfree/Razorpay payment gateways and Shiprocket/Delhivery courier APIs.

6. Digital Marketing & Analytics Systems
- Unified telemetry connecting GTM DataLayer, GA4 conversion milestones, Google Ads, Meta Ads, and Search Console.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="w-full max-w-4xl bg-[#0d111d] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Top Modal Controls */}
          <div className="p-4 sm:p-6 bg-[#111728] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-mono text-cyan-400">
              <FileText className="w-4 h-4" />
              <span>Structured Technical Resume</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Text</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200 font-sans print:bg-white print:text-black">
            
            {/* Header */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-3xl font-heading font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sm font-mono text-cyan-400 mt-1">
                {PERSONAL_INFO.positioning}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline font-semibold transition-colors"
                >
                  LinkedIn Profile
                </a>
                <span>•</span>
                <span>{PERSONAL_INFO.location}</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.status}</span>
              </div>
            </div>

            {/* Profile Overview */}
            <div>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                Professional Positioning
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                {PERSONAL_INFO.statement} {PERSONAL_INFO.bioIntro}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 font-bold">
                Technical & Operational Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-[#090d18] border border-white/5">
                  <span className="font-semibold text-cyan-300 block mb-1">Development & Systems</span>
                  <span className="text-slate-300">React, TypeScript, Modern CSS, REST APIs, Webhook Handlers, JSON Schemas</span>
                </div>
                <div className="p-3 rounded-xl bg-[#090d18] border border-white/5">
                  <span className="font-semibold text-purple-300 block mb-1">Automation & Workflows</span>
                  <span className="text-slate-300">n8n, Google Sheets Automation, ZeptoMail SMTP, AI Personalization Prompts</span>
                </div>
                <div className="p-3 rounded-xl bg-[#090d18] border border-white/5">
                  <span className="font-semibold text-blue-300 block mb-1">E-Commerce & Marketplaces</span>
                  <span className="text-slate-300">Multi-Vendor Portals, HSN & GST Schemas, Catalog Taxonomies, Inventory & Orders</span>
                </div>
                <div className="p-3 rounded-xl bg-[#090d18] border border-white/5">
                  <span className="font-semibold text-emerald-300 block mb-1">Integrations & Telemetry</span>
                  <span className="text-slate-300">Cashfree, Razorpay, Shiprocket, Delhivery, GTM DataLayer, GA4, Search Console</span>
                </div>
              </div>
            </div>

            {/* Practical Project History */}
            <div>
              <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 font-bold">
                Demonstrated Project Contributions
              </h2>

              <div className="space-y-6">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="border-l-2 border-cyan-500/30 pl-4 py-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold text-white font-heading">
                        {proj.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">{proj.category}</span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {proj.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.technologies.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Credentials Notice */}
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Verified Project Scope • Documented Architecture</span>
              <span>Available for Technical & Automation Engagements</span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
