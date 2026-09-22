import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInButton } from './LinkedInButton';
import { Mail, Linkedin, Github, Send, CheckCircle2, Copy, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Workflow Automation',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Portfolio Visitor'} - ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hi Sibananda,\n\nMy name is ${formData.name} (${formData.email}).\nI am interested in discussing: ${formData.projectType}\n\nProject details:\n${formData.message}\n\nLooking forward to speaking.`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#080a11] relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Headline, Subtitle, Direct Channels */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-4">
                Have a Process Worth Automating?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 mb-8 font-normal">
                "Let’s turn repetitive work into a smarter system."
              </p>

              <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-lg">
                Whether you need a custom multi-vendor marketplace workflow, an n8n automated outreach pipeline, payment/courier integrations, or operational dashboards—I'm available to engineer dependable digital systems.
              </p>

              {/* Direct Info Pill Cards */}
              <div className="space-y-3 max-w-md">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-[#0e1322] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                      <span className="text-xs sm:text-sm font-semibold text-white font-mono">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3 items-stretch">
                  <div className="w-full">
                    <LinkedInButton variant="card" label="View LinkedIn" className="w-full h-full justify-between" />
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-[#0e1322] border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-between transition-all group h-full"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-purple-400" />
                      <span>View GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Status Beacon */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response Window: Typically within 24 business hours</span>
            </div>
          </div>

          {/* Right: Interactive Message Builder */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0b0f1a] border border-white/10 shadow-2xl">
              <h3 className="text-lg font-bold text-white font-heading mb-1">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-mono">
                Tell me about the workflow, operational bottleneck, or platform you want to build.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white font-heading">Message Drafted & Client Opened</h4>
                  <p className="text-xs text-slate-300">
                    Your email client has been prepared with your parameters. You can also email directly at <span className="text-cyan-300 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-cyan-400 underline font-mono cursor-pointer"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-white/10 focus:border-cyan-500 text-white text-xs font-sans focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-white/10 focus:border-cyan-500 text-white text-xs font-sans focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      System / Project Domain
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-white/10 focus:border-cyan-500 text-white text-xs font-mono focus:outline-none transition-colors"
                    >
                      <option value="Workflow Automation">Workflow Automation (n8n / Sheets)</option>
                      <option value="E-Commerce & Marketplaces">E-Commerce & Marketplace Architecture</option>
                      <option value="CRM & Lead Pipelines">CRM & Lead Operations</option>
                      <option value="Payment & Logistics APIs">Payment & Logistics API Integrations</option>
                      <option value="Digital Marketing & Analytics">Digital Marketing & GTM/GA4 Telemetry</option>
                      <option value="General Technology Consultation">General Systems Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Project Details / Manual Process to Automate
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your current manual process or the digital system you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#070a12] border border-white/10 focus:border-cyan-500 text-white text-xs font-sans focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 fill-current" />
                    <span>Send Message & Initialize Project</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
