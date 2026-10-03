import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND_INFO, PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  Copy, 
  ArrowUpRight, 
  MessageSquare, 
  Phone, 
  Check, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  initialTier?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  initialService,
  initialTier 
}) => {
  const serviceOptions = [
    "Web & Custom Platforms",
    "E-Commerce & Marketplaces",
    "CRM & Operations",
    "n8n & Workflow Automation",
    "Digital Marketing & Ads",
    "SEO & Organic Growth",
    "WhatsApp Lead Automation",
    "API & Third-Party Integrations",
    "Analytics & Power BI",
    "Custom Business Systems"
  ];

  const engagementTypeOptions = [
    "Essential (Workflow & Automation)",
    "Premium (System & Platform Build)",
    "Custom (Growth, CRM & Systems)",
    "Not Sure / Need Consultation"
  ];

  const timelineOptions = [
    "1–2 Weeks (Sprint)",
    "3–6 Weeks (Platform Build)",
    "Monthly / Project Based",
    "Flexible / Needs Scoping"
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ["Web & Custom Platforms", "n8n & Workflow Automation"]
  );

  const [engagementType, setEngagementType] = useState<string>(
    "Premium (System & Platform Build)"
  );

  const [selectedTimeline, setSelectedTimeline] = useState<string>("3–6 Weeks (Platform Build)");

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    whatsapp: '',
    details: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync when initialTier changes from pricing cards
  useEffect(() => {
    if (initialTier) {
      if (initialTier.includes("Essential") || initialTier.includes("Workflow")) {
        setEngagementType("Essential (Workflow & Automation)");
        setSelectedTimeline("1–2 Weeks (Sprint)");
      } else if (initialTier.includes("Premium") || initialTier.includes("Platform") || initialTier.includes("System")) {
        setEngagementType("Premium (System & Platform Build)");
        setSelectedTimeline("3–6 Weeks (Platform Build)");
      } else if (
        initialTier.includes("Custom") || 
        initialTier.includes("Growth")
      ) {
        setEngagementType("Custom (Growth, CRM & Systems)");
        setSelectedTimeline("Monthly / Project Based");
      } else if (engagementTypeOptions.includes(initialTier)) {
        setEngagementType(initialTier);
      }
    }
  }, [initialTier]);

  // Sync when initialService changes from services
  useEffect(() => {
    if (initialService && !selectedServices.includes(initialService)) {
      setSelectedServices(prev => [...prev, initialService]);
    }
  }, [initialService]);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(BRAND_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const generateBriefText = () => {
    return `PROJECT BRIEF // SCALVTEK
---------------------------------------------
Client Name: ${formData.name || 'Not provided'}
Company / Brand: ${formData.company || 'Not provided'}
Email: ${formData.email || 'Not provided'}
WhatsApp / Phone: ${formData.whatsapp || 'Not provided'}

Engagement Type: ${engagementType}
Preferred Timeline: ${selectedTimeline}

Selected Systems / Services:
${selectedServices.map(s => `• ${s}`).join('\n')}

Project Overview & Requirements:
${formData.details || 'None provided'}
---------------------------------------------`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const brief = generateBriefText();
    const subject = encodeURIComponent(`Project Brief: ${formData.company || formData.name || 'New Client'} - Scalvtek (${engagementType})`);
    const body = encodeURIComponent(brief);
    
    // Open default mail client
    window.location.href = `mailto:${BRAND_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const brief = generateBriefText();
    const encoded = encodeURIComponent(`Hi Scalvtek, I would like to discuss a project:\n\n${brief}`);
    window.open(`https://wa.me/918114000000?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#080a11] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Let’s Build Your Digital System
          </h2>

          <p className="text-base sm:text-lg text-slate-300/90 mt-3 font-normal leading-relaxed">
            Configure your project brief below. We review your requirements and respond with a structured systems architecture and transparent engagement proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Practice Details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            <div className="p-6 rounded-3xl bg-[#0b0f1b] border border-white/10 shadow-xl space-y-5">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                  PRACTICE INQUIRY
                </span>
                <h3 className="text-xl font-heading font-bold text-white tracking-tight">
                  {BRAND_INFO.brand}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {BRAND_INFO.tagline}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need a custom multi-vendor marketplace, an n8n outreach pipeline, payment and courier integrations, or an operational telecaller CRM—reach out directly to get started.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-2.5 pt-3 border-t border-white/5">
                {/* Email Box */}
                <div className="p-3 rounded-xl bg-[#070a14] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">Direct Email</span>
                      <span className="text-xs font-semibold text-white font-mono">{BRAND_INFO.email}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <LinkedInButton variant="card" label="LinkedIn" className="w-full text-xs" />

                  <a
                    href={BRAND_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#070a14] border border-white/5 hover:border-purple-500/40 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-between transition-all group"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-purple-400" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-purple-300 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Response SLA */}
              <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response Window: Within 24 business hours</span>
              </div>
            </div>

            {/* Confidentiality Note */}
            <div className="p-5 rounded-2xl bg-[#0a0e1c] border border-white/5 text-xs font-mono text-slate-400 leading-relaxed">
              <span className="text-slate-200 font-semibold block mb-1">Confidentiality:</span>
              All business workflows, database schemas, and commercial specifics shared in project briefs are kept strictly confidential.
            </div>

          </div>

          {/* Right Column: Interactive Project Brief Generator & Inquiry Form */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0f1a] border border-white/10 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-white tracking-tight">
                    Project Brief Builder
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Select your system needs and submit your parameters directly.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 hidden sm:inline-block">
                  STEP 1 OF 1 // READY
                </span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white font-heading">
                    Project Brief Prepared
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your email client has been prepared with your structured brief. You can also send this brief directly via WhatsApp:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Direct via WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                    >
                      <span>Edit Brief</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Step 1: Select Systems / Services (Multi-select) */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      1. Required Digital Systems (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-200 shadow-sm shadow-cyan-500/10'
                                : 'bg-[#070a14] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 text-cyan-400 stroke-[3]" />}
                            <span>{srv}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2 & 3: Engagement Type & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        2. Engagement Type
                      </label>
                      <select
                        value={engagementType}
                        onChange={(e) => setEngagementType(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-slate-200 text-xs font-mono focus:outline-none transition-colors"
                      >
                        {engagementTypeOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0b0f1a] text-slate-200">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        3. Desired Timeline
                      </label>
                      <select
                        value={selectedTimeline}
                        onChange={(e) => setSelectedTimeline(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-slate-200 text-xs font-mono focus:outline-none transition-colors"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t} className="bg-[#0b0f1a] text-slate-200">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Step 4: Contact & Company Details */}
                  <div className="space-y-4 pt-2">
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider">
                      4. Your Contact & Company Details
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-white text-xs focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Company / Brand Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-white text-xs focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Work Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-white text-xs focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="WhatsApp / Phone Number"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-white text-xs focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell us about the workflow, operational bottleneck, or platform you want to build..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#070a14] border border-white/10 focus:border-cyan-500 text-white text-xs focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 fill-current" />
                      <span>SUBMIT PROJECT BRIEF</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#121b2f] hover:bg-[#18233d] border border-cyan-500/30 text-cyan-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
