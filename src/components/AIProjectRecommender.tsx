import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ShoppingCart, 
  Bot, 
  Network, 
  BarChart3, 
  Megaphone, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';

interface RecommendationOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  projects: {
    title: string;
    description: string;
    tags: string[];
    sectionAnchor: string;
  }[];
}

const INTEREST_OPTIONS: RecommendationOption[] = [
  {
    id: 'ecommerce',
    label: '🛒 E-commerce',
    icon: ShoppingCart,
    projects: [
      {
        title: "IngrediaMart Marketplace Operations",
        description: "Multi-vendor food-ingredient platform, seller onboarding, catalog taxonomy, and order fulfillment states.",
        tags: ["Multi-vendor", "Catalog Taxonomies", "HSN/GST", "Cashfree/Razorpay"],
        sectionAnchor: "#work"
      },
      {
        title: "E-Commerce Catalog Operations",
        description: "Structured attribute taxonomies, image optimization pipelines, and vendor catalog validation.",
        tags: ["Catalog Governance", "Inventory Sync", "Vendor Portals"],
        sectionAnchor: "#work"
      },
      {
        title: "Logistics Courier Integrations",
        description: "Shiprocket, Delhivery, and BlueDart API webhooks for automated checkout dispatch and tracking updates.",
        tags: ["Shiprocket", "Delhivery", "Tracking Webhooks"],
        sectionAnchor: "#work"
      }
    ]
  },
  {
    id: 'automation',
    label: '🤖 Automation',
    icon: Bot,
    projects: [
      {
        title: "Seller Automation System",
        description: "Autonomous outreach pipeline connecting Google Sheets, AI prompt personalization, and ZeptoMail SMTP delivery.",
        tags: ["n8n", "Google Sheets", "ZeptoMail", "AI Personalization"],
        sectionAnchor: "#automation"
      },
      {
        title: "Telecaller CRM & Operations Board",
        description: "Operational lead allocation, caller pools, call logs, disposition tracking, and daily KPI dashboards.",
        tags: ["Custom CRM", "Lead Routing", "Daily Metrics"],
        sectionAnchor: "#work"
      },
      {
        title: "Interactive Automation Lab",
        description: "Real-time interactive workflow builder simulating triggers, transformation nodes, and delivery status.",
        tags: ["Interactive Nodes", "Payload Inspection", "Visual Pipeline"],
        sectionAnchor: "#automation"
      }
    ]
  },
  {
    id: 'api',
    label: '🔗 API Integration',
    icon: Network,
    projects: [
      {
        title: "Payment Gateway Architecture",
        description: "Cashfree and Razorpay secure payment sessions, signature verification webhooks, and vendor payouts.",
        tags: ["Cashfree", "Razorpay", "Webhook Listeners"],
        sectionAnchor: "#work"
      },
      {
        title: "Courier & Tracking APIs",
        description: "Live tracking webhook handlers, AWB generation, and delivery status synchronizations.",
        tags: ["Shiprocket", "Delhivery", "BlueDart"],
        sectionAnchor: "#work"
      },
      {
        title: "Transactional Email Systems",
        description: "ZeptoMail SMTP integration with deliverability tracking and automated reply capture.",
        tags: ["ZeptoMail", "Transactional Delivery", "Bounce Handling"],
        sectionAnchor: "#automation"
      }
    ]
  },
  {
    id: 'analytics',
    label: '📊 Analytics',
    icon: BarChart3,
    projects: [
      {
        title: "Digital Marketing & Analytics Architecture",
        description: "GTM DataLayer implementations, GA4 custom conversion events, and cross-channel funnel tracking.",
        tags: ["GTM DataLayer", "GA4 Events", "Google Search Console"],
        sectionAnchor: "#work"
      },
      {
        title: "Telecaller Operations Metrics",
        description: "Real-time call volume tracking, conversion ratios, and disposition distribution dashboards.",
        tags: ["KPI Boards", "Disposition Logs", "Conversion Rate"],
        sectionAnchor: "#work"
      }
    ]
  },
  {
    id: 'marketing',
    label: '📣 Digital Marketing',
    icon: Megaphone,
    projects: [
      {
        title: "Google Ads & Meta Ads Tracking Systems",
        description: "Server/client conversion tracking, campaign attribution, and catalog feed synchronizations.",
        tags: ["Google Ads", "Meta Ads Pixel", "Conversion API"],
        sectionAnchor: "#work"
      },
      {
        title: "SEO & Search Engine Indexing",
        description: "Structured schema data, dynamic sitemaps, and Search Console indexing optimization.",
        tags: ["Search Console", "Schema.org", "Organic Crawling"],
        sectionAnchor: "#work"
      }
    ]
  },
  {
    id: 'systems',
    label: '⚙️ Business Systems',
    icon: Cpu,
    projects: [
      {
        title: "Multi-Vendor Marketplace Infrastructure",
        description: "Cohesive digital system connecting sellers, buyers, warehousing, payments, and customer care.",
        tags: ["Marketplace Ops", "Order States", "HSN/GST Compliance"],
        sectionAnchor: "#work"
      },
      {
        title: "Internal Operations & CRM Pipeline",
        description: "Structured workflows preventing spreadsheet chaos and standardizing daily team operations.",
        tags: ["Custom CRM", "Operational Integrity", "Google Workspace"],
        sectionAnchor: "#work"
      }
    ]
  }
];

export const AIProjectRecommender: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('automation');

  const selectedCategory = INTEREST_OPTIONS.find((c) => c.id === selectedId) || INTEREST_OPTIONS[0];

  const scrollToAnchor = (anchor: string) => {
    const el = document.querySelector(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="ai-recommender" className="py-16 sm:py-20 bg-[#070b12] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI PROJECT RECOMMENDER</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
            Not sure where to start?
          </h2>
          <p className="mt-2 text-sm text-slate-400 font-sans">
            What domain are you most interested in exploring?
          </p>
        </div>

        {/* Option Selector Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {INTEREST_OPTIONS.map((opt) => {
            const isSelected = opt.id === selectedId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedId(opt.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-[#0f172a] hover:bg-[#15203b] border border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <span>{opt.label}</span>
              </button>
            );
          })}
        </div>

        {/* Recommended Project Cards Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>RECOMMENDED FOR YOU ({selectedCategory.projects.length} PROJECTS)</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Curated by SB AI
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {selectedCategory.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0d1424] border border-cyan-500/20 hover:border-cyan-400/50 shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-slate-500 mb-2">
                      <span>Recommendation #{idx + 1}</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>

                    <h4 className="text-base font-heading font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                      {proj.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white/5 text-slate-400 text-[10px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5">
                    <button
                      onClick={() => scrollToAnchor(proj.sectionAnchor)}
                      className="w-full py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/20 font-mono text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Explore System Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
