import { SkillItem, ProjectItem, AutomationWorkflow, TimelineItem } from '../types';

export const personalLinks = {
  linkedin: "https://www.linkedin.com/in/shibananda-bera-4683052a1/",
  github: "https://github.com/sibanandabera",
  email: "sibanandabera8114@gmail.com",
  whatsapp: "+918114000000" // Formatted WhatsApp link
};

export const BRAND_INFO = {
  brand: "SCALVTEK",
  tagline: "DIGITAL SYSTEMS & AUTOMATION",
  subTagline: "Technology • Automation • E-commerce • AI Workflows • CRM • Digital Marketing • Business Systems • Integrations",
  founder: "Sibananda Bera",
  role: "Technology & Automation Consultant",
  headline: "BUILDING DIGITAL SYSTEMS THAT WORK SMARTER.",
  supportingHeadline: "Technology, automation and digital growth systems for modern businesses.",
  heroCopy: "Scalvtek designs and builds custom websites, e-commerce platforms, CRM systems, AI-powered workflows, digital marketing systems and third-party integrations that help businesses operate more efficiently and grow digitally.",
  positioningStatement: "We design and build digital systems that connect websites, e-commerce, CRM, marketing, automation, APIs and business operations into one connected workflow.",
  status: "DIGITAL SYSTEMS // AUTOMATION // GROWTH",
  availabilityStatus: "PRACTICE LED BY SIBANANDA BERA // ACCEPTING SELECT CLIENT BUILDS",
  email: personalLinks.email,
  linkedin: personalLinks.linkedin,
  github: personalLinks.github,
  location: "India / Remote Worldwide",
  bioIntro: "Scalvtek is a digital systems and automation practice founded and led by Sibananda Bera. We partner with startups, e-commerce brands, manufacturers, and service companies to engineer resilient software, automate repetitive operations, and connect fragmented business tools into cohesive workflows."
};

// Aliased for backwards compatibility with any existing components
export const PERSONAL_INFO = {
  name: BRAND_INFO.founder,
  positioning: BRAND_INFO.subTagline,
  statement: BRAND_INFO.positioningStatement,
  status: BRAND_INFO.availabilityStatus,
  email: BRAND_INFO.email,
  linkedin: BRAND_INFO.linkedin,
  github: BRAND_INFO.github,
  location: BRAND_INFO.location,
  bioIntro: BRAND_INFO.bioIntro
};

// Real, credible operational statistics (no fake revenue or inflated percentages)
export const STATS = [
  {
    number: "10+",
    label: "Core Service Capabilities",
    sublabel: "From modern web platforms & multi-vendor marketplaces to n8n pipelines & CRM architecture"
  },
  {
    number: "25+",
    label: "Automated Workflows & Endpoints",
    sublabel: "Orchestrating leads, orders, transactional messaging, and cross-platform synchronization"
  },
  {
    number: "Production",
    label: "Demonstrated Systems",
    sublabel: "Live marketplace infrastructure (IngrediaMart), custom telecaller CRMs, and payment/logistics APIs"
  }
];

// 10 Detailed Service Categories as requested
export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techTags: string[];
  projectHighlight?: string;
  iconName: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development & Custom Platforms",
    tagline: "Custom websites, web applications, and business platforms built for performance.",
    description: "We architect fast, responsive, and maintainable digital interfaces engineered for clear user journeys and direct API integration.",
    deliverables: [
      "Business & corporate websites",
      "High-converting landing pages",
      "Custom web applications & portals",
      "Customer portals & administrative dashboards",
      "Internal business tools & operations panels",
      "Modern React / TypeScript frontend engineering",
      "Firebase / Serverless web backends",
      "API-connected platforms & webhook endpoints"
    ],
    techTags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Firebase", "REST APIs", "Node.js"],
    iconName: "Code2"
  },
  {
    id: "ecommerce-marketplaces",
    number: "02",
    title: "E-Commerce & Marketplace Systems",
    tagline: "Digital commerce infrastructure for single stores and multi-vendor platforms.",
    description: "Designing end-to-end commerce platforms with vendor onboarding, catalog compliance, split payment gateways, and automated fulfillment handshakes.",
    deliverables: [
      "B2B & B2C e-commerce stores",
      "Multi-vendor marketplaces & vendor hubs",
      "Seller dashboards & self-serve portals",
      "Product catalog & attribute taxonomy systems",
      "Inventory workflows & low-stock triggers",
      "Order management & state-machine lifecycles",
      "Commission structures & vendor payout rules",
      "GST & tax invoice automated workflows",
      "Payment gateway & courier tracking integration"
    ],
    techTags: ["Marketplace Architecture", "Cashfree", "Razorpay", "Shiprocket", "HSN/GST Taxonomies", "Order State Machine"],
    projectHighlight: "IngrediaMart: Multi-vendor food & ingredient marketplace ecosystem with vendor onboarding, HSN compliance, and logistics automation.",
    iconName: "Store"
  },
  {
    id: "crm-operations",
    number: "03",
    title: "CRM & Business Operations",
    tagline: "Custom operational software replacing chaotic spreadsheets and missed follow-ups.",
    description: "We build intuitive CRM and telecaller management tools that give teams real-time visibility into leads, call outcomes, and pipeline progression.",
    deliverables: [
      "Lead management & allocation engines",
      "Telecaller & sales rep operational boards",
      "Visual sales pipelines & deal tracking",
      "Call disposition logging & follow-up queues",
      "Seller onboarding verification CRM",
      "Automated lead assignment rules",
      "Google Sheets-based operational databases",
      "Daily team performance & connect-rate metrics",
      "WhatsApp & SMS follow-up workflows"
    ],
    techTags: ["Custom CRM Layouts", "Google Sheets API", "WhatsApp Alerts", "Lead Routing", "Call Dispositions"],
    projectHighlight: "Telecaller Operations CRM: Dynamic lead pool allocator with automated outcome recording and callback scheduling.",
    iconName: "Users"
  },
  {
    id: "ai-workflow-automation",
    number: "04",
    title: "AI & Workflow Automation",
    tagline: "Automated business workflows that run 24/7 without manual intervention.",
    description: "We orchestrate multi-step conditional workflows connecting forms, databases, AI models, and communication channels into dependable autonomous pipelines.",
    deliverables: [
      "n8n workflow design & self-hosted orchestration",
      "AI-powered company research & lead enrichment",
      "Lead discovery, parsing, and data validation",
      "Contextual email personalization with LLMs",
      "WhatsApp automated interactive messaging",
      "CRM & spreadsheet bidirectional sync",
      "Automated KPI summaries & daily digests",
      "Scheduled cron jobs & event-driven webhooks",
      "Human-in-the-loop review & approval stages"
    ],
    techTags: ["n8n", "LLM APIs", "Webhooks", "JSON Schemas", "Cron Triggers", "ZeptoMail SMTP"],
    projectHighlight: "Autonomous Seller Outreach Engine: Enriches company data, drafts personalized pitches, and syncs status to CRM.",
    iconName: "Workflow"
  },
  {
    id: "digital-marketing",
    number: "05",
    title: "Digital Marketing & Measurement",
    tagline: "Digital marketing connected directly to business systems — not isolated advertising.",
    description: "We build high-performance acquisition campaigns with airtight server-side and client-side conversion tracking so every ad dollar is accountable.",
    deliverables: [
      "Google Ads (Search, Display & Performance Max)",
      "Meta Ads (Facebook & Instagram Lead Generation)",
      "WhatsApp click-to-chat ad funnels",
      "Campaign setup, audience building & AB testing",
      "Google Tag Manager DataLayer container architecture",
      "Google Analytics 4 custom event & funnel tracking",
      "Server-side Meta Conversions API & Google Enhanced Conversions",
      "Google Search Console crawling & indexing optimization",
      "Landing page conversion-rate optimization (CRO)"
    ],
    techTags: ["Google Tag Manager", "GA4", "Search Console", "Meta Ads", "Google Ads", "Conversion APIs"],
    iconName: "Target"
  },
  {
    id: "seo-growth",
    number: "06",
    title: "SEO & Organic Growth",
    tagline: "Technical SEO and structured architecture built for long-term search engine discovery.",
    description: "Optimizing website code, sitemaps, category taxonomies, and rich schema markup to maximize visibility for high-intent search queries.",
    deliverables: [
      "Technical SEO audits & Core Web Vitals optimization",
      "On-page content structuring & semantic hierarchy",
      "High-intent commercial keyword mapping",
      "E-commerce product & category SEO optimization",
      "Google Business Profile optimization for local search",
      "Dynamic XML sitemaps & robots.txt configuration",
      "Schema.org JSON-LD structured data implementation",
      "Search Console crawl anomaly & indexing monitoring"
    ],
    techTags: ["Schema.org JSON-LD", "Core Web Vitals", "XML Sitemaps", "Search Console", "Taxonomy Optimization"],
    iconName: "Search"
  },
  {
    id: "whatsapp-automation",
    number: "07",
    title: "WhatsApp & Lead Automation",
    tagline: "Engage, qualify, and route prospects instantly where they are most responsive.",
    description: "Automate inbound lead capture, qualification questions, and team alerts on WhatsApp, seamlessly syncing conversations with your CRM.",
    deliverables: [
      "Instant WhatsApp automated greeting & qualification flows",
      "Multi-question interactive lead capture questionnaires",
      "Automated follow-up reminders & appointment nudges",
      "Seller & vendor document submission onboarding flows",
      "Instant push alerts to internal sales teams on hot leads",
      "Google Sheets & CRM bidirectional synchronization",
      "Graceful human handoff triggers when intervention is needed"
    ],
    techTags: ["WhatsApp Business API", "Interactive Flows", "Google Sheets Sync", "Webhook Handshake", "Lead Qualification"],
    iconName: "MessageSquare"
  },
  {
    id: "api-integrations",
    number: "08",
    title: "API & Third-Party Integrations",
    tagline: "Connecting your software tools into one unified operational highway.",
    description: "Bridging customer interfaces, financial processors, shipping providers, and data sheets with resilient, secure API handshakes.",
    deliverables: [
      "Payment gateway integration (Cashfree, Razorpay)",
      "Logistics & courier dispatch APIs (Shiprocket, Delhivery, Blue Dart)",
      "CRM & customer database API connectors",
      "WhatsApp & transactional email APIs (ZeptoMail)",
      "Google Workspace & Cloud Storage automation",
      "Secure webhook receivers with signature verification",
      "Automated data harmonization & retry pipelines"
    ],
    techTags: ["Cashfree", "Razorpay", "Shiprocket", "Delhivery", "Blue Dart", "Google Sheets", "REST APIs", "Webhooks"],
    iconName: "Network"
  },
  {
    id: "analytics-bi",
    number: "09",
    title: "Analytics & Business Intelligence",
    tagline: "Turning raw daily operations into clear, actionable executive dashboards.",
    description: "Designing visual KPI scorecards and automated data feeds that give business owners instant clarity on sales, team efficiency, and order volume.",
    deliverables: [
      "Power BI interactive executive dashboards",
      "Daily order volume & fulfillment SLA tracking",
      "Telecaller connect-rate & conversion scorecards",
      "Marketing acquisition channel ROI reports",
      "Automated daily/weekly email summary digests",
      "Data modeling from disparate operational sheets",
      "Decision-support telemetry for founders & managers"
    ],
    techTags: ["Power BI", "Data Modeling", "Executive KPIs", "Automated Digests", "Operations Telemetry"],
    iconName: "BarChart3"
  },
  {
    id: "custom-business-systems",
    number: "10",
    title: "Custom Business Systems",
    tagline: "Tailored software and operational tools designed around your unique business logic.",
    description: "When off-the-shelf software doesn't fit your manufacturing, food supply, or service workflows, we engineer bespoke digital tools that do.",
    deliverables: [
      "Food & manufacturing order capture & dispatch tools",
      "Distributor & dealer management portals",
      "Hospitality inquiry & booking management workflows",
      "Custom multi-stage approval & sign-off systems",
      "Internal staff operational boards & task assignment",
      "Legacy spreadsheet migration to structured web apps",
      "SOP digitization & workflow governance"
    ],
    techTags: ["Bespoke Web Apps", "Custom Business Logic", "Distributor Portals", "Workflow Governance"],
    iconName: "Cpu"
  }
];

// Target Business Solutions (Industry / Scale alignment)
export interface SolutionItem {
  id: string;
  target: string;
  badge: string;
  summary: string;
  challenges: string[];
  scalvtekSolution: string[];
  typicalStack: string[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "startups",
    target: "Startups & Emerging Brands",
    badge: "RAPID EXECUTION",
    summary: "Build an MVP that works on day one, with automated lead capture, clean customer onboarding, and scalable architecture.",
    challenges: [
      "Stuck between slow agency quotes and fragile no-code prototypes",
      "Manual customer intake and missed follow-ups",
      "Lack of connected measurement to track marketing ROI"
    ],
    scalvtekSolution: [
      "Fast, production-grade React/TypeScript web apps and landing pages",
      "Automated WhatsApp & email lead routing connected to Google Sheets or CRM",
      "Complete analytics and conversion tracking setup from launch"
    ],
    typicalStack: ["React", "Tailwind CSS", "Firebase / Supabase", "n8n", "WhatsApp API", "GTM/GA4"]
  },
  {
    id: "ecommerce-marketplaces",
    target: "E-Commerce & Marketplaces",
    badge: "MULTI-VENDOR & COMMERCE",
    summary: "Complete commerce architecture handling seller onboarding, catalog taxonomies, split payments, and logistics handshakes.",
    challenges: [
      "Managing multi-vendor catalogs with complex HSN and GST tax compliance",
      "Manual order routing and delay in generating shipping labels (AWBs)",
      "Disjointed payment settlement ledgers and vendor payout calculations"
    ],
    scalvtekSolution: [
      "Comprehensive multi-vendor portals with verified seller onboarding",
      "Automated order state machine linking Cashfree/Razorpay with Shiprocket/Delhivery",
      "Automated invoice generation, commission deductions, and ledger tracking"
    ],
    typicalStack: ["Marketplace Platform", "Cashfree / Razorpay", "Shiprocket / Delhivery", "n8n", "Automated GST/HSN Engine"]
  },
  {
    id: "manufacturing-fmcg",
    target: "Food, Manufacturing & FMCG",
    badge: "OPERATIONAL INTEGRATION",
    summary: "Digitize B2B distributor orders, inventory visibility, and warehouse dispatch notifications into an automated flow.",
    challenges: [
      "Orders arriving chaotically across WhatsApp, phone calls, and paper invoices",
      "Zero real-time visibility into inventory stockouts or delayed dispatches",
      "Telecallers and sales reps lacking structured follow-up queues"
    ],
    scalvtekSolution: [
      "B2B ordering portals and WhatsApp catalog inquiry workflows",
      "Automated dispatch status notifications with live courier tracking links",
      "Centralized operations dashboards and telecaller CRM for dealer accounts"
    ],
    typicalStack: ["Custom Order Portals", "WhatsApp Automation", "Power BI", "Google Sheets API", "Logistics Couriers"]
  },
  {
    id: "hospitality-services",
    target: "Hospitality & Service Businesses",
    badge: "CUSTOMER INTAKE & RETENTION",
    summary: "Turn inquiries into confirmed bookings with automated response flows, customer status pipelines, and review triggers.",
    challenges: [
      "High drop-off between initial customer inquiry and actual booking",
      "Manual staff follow-ups eating valuable administrative hours",
      "Fragmented customer data across disparate booking calendars and forms"
    ],
    scalvtekSolution: [
      "Instant WhatsApp inquiry qualification with automated appointment booking",
      "Automated SMS/Email reminders reducing no-shows and cancellations",
      "Centralized customer relationship database with automated post-service follow-up"
    ],
    typicalStack: ["Interactive Booking Web Apps", "WhatsApp Lead Engine", "Calendar API Sync", "Automated Notifications"]
  },
  {
    id: "agencies-ops",
    target: "Agencies & Operations-Heavy Teams",
    badge: "WORKFLOW ORCHESTRATION",
    summary: "Eliminate repetitive copy-paste tasks, data reconciliations, and reporting overhead with custom n8n pipelines.",
    challenges: [
      "Staff spending hours manually copying data between forms, sheets, and tools",
      "Inconsistent client onboarding and lost kickoff checklists",
      "Manual weekly and monthly reporting preparation"
    ],
    scalvtekSolution: [
      "Self-hosted n8n workflow pipelines connecting all internal SaaS tools",
      "Automated client intake, folder creation, and task initialization",
      "Automated executive KPI report generation sent directly to email or Slack"
    ],
    typicalStack: ["n8n Workflow Engine", "Google Workspace", "REST APIs", "Power BI", "Slack/Email Webhooks"]
  }
];

// Engagement Models & Pricing Structure
export interface PricingTier {
  id: string;
  badge: string;
  name: string;
  priceAmount?: string;
  pricePeriod?: string;
  priceCustom?: string;
  pricingSupportText?: string;
  timeline: string;
  description: string;
  included: string[];
  ctaText: string;
  targetEngagementType: string;
}

export const PRICING_DATA: PricingTier[] = [
  {
    id: "essential",
    badge: "CORE TIER",
    name: "ESSENTIAL",
    priceAmount: "$3,599",
    pricePeriod: "/ MONTH",
    timeline: "1–2 WEEKS",
    description: "For businesses that need reliable automation, integrations, and streamlined operational workflows.",
    included: [
      "Workflow analysis and process mapping",
      "n8n / automation workflow development",
      "API and third-party integrations",
      "Google Sheets / CRM / email integrations",
      "WhatsApp workflow integration where required",
      "Testing and deployment",
      "Basic documentation and handover"
    ],
    ctaText: "CHOOSE ESSENTIAL",
    targetEngagementType: "Essential (Workflow & Automation)"
  },
  {
    id: "premium",
    badge: "MOST REQUESTED",
    name: "PREMIUM",
    priceAmount: "$4,499",
    pricePeriod: "/ MONTH",
    timeline: "3–6 WEEKS",
    description: "For businesses that need a complete website, e-commerce platform, marketplace, CRM, or connected business system.",
    included: [
      "Website or web application development",
      "E-commerce / marketplace functionality",
      "Responsive UI implementation",
      "CRM and business workflow integration",
      "Payment and logistics integrations",
      "API integrations",
      "Database / Google Sheets synchronization",
      "Analytics and tracking setup",
      "Deployment and technical handover"
    ],
    ctaText: "CHOOSE PREMIUM",
    targetEngagementType: "Premium (System & Platform Build)"
  },
  {
    id: "custom",
    badge: "CUSTOM ENGAGEMENT",
    name: "CUSTOM",
    priceCustom: "CUSTOM PRICING",
    pricingSupportText: "Pricing is scoped according to the required services, systems, integrations, project complexity, timeline, and ongoing support.",
    timeline: "MONTHLY / PROJECT BASED",
    description: "For businesses requiring ongoing digital marketing, CRM management, automation, analytics, system improvements, or a combination of multiple services.",
    included: [
      "Digital marketing support",
      "SEO and search visibility",
      "Google Ads / Meta Ads management",
      "Lead generation workflows",
      "CRM setup and optimization",
      "WhatsApp automation",
      "Business process automation",
      "AI-assisted workflows",
      "Analytics and reporting",
      "API and software integrations",
      "Ongoing system improvements"
    ],
    ctaText: "REQUEST CUSTOM QUOTE",
    targetEngagementType: "Custom (Growth, CRM & Systems)"
  }
];

// Verified Real Projects Data
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ingrediamart",
    number: "01",
    title: "IngrediaMart",
    category: "E-commerce • Multi-Vendor Marketplace • Logistics",
    shortDesc: "Architected technology and operational workflows for a specialized B2B multi-vendor food & ingredient platform.",
    fullDesc: "Designed, managed, and connected the multi-faceted systems powering IngrediaMart. Handled high-complexity operational requirements including vendor onboarding verification, dynamic catalog listings with HSN/GST tax validation, automated order dispatch notifications, and integration with payment gateways and courier networks.",
    architecture: ["Seller Portal", "Marketplace Engine", "Payment Gateway (Cashfree/Razorpay)", "Logistics Courier (Shiprocket/Delhivery)", "Customer Delivery Updates"],
    areas: [
      "Multi-vendor marketplace infrastructure and vendor self-serve panel",
      "Product listing governance & HSN/GST tax compliance tables",
      "Order management state machine (New → Assigned → Dispatched → Delivered)",
      "Payment gateway integration with webhook callback verification",
      "Logistics integration with automated AWB generation and live tracking",
      "Seller commission calculations and settlement ledgers",
      "Google Tag Manager DataLayer and GA4 e-commerce telemetry",
      "WhatsApp & transactional email notifications for buyers and sellers"
    ],
    technologies: ["React", "REST APIs", "Cashfree", "Razorpay", "Shiprocket", "Delhivery", "GTM", "GA4", "Search Console", "n8n"],
    mockupType: "marketplace",
    highlights: [
      "Real-time order state transition machine preventing lost order handoffs",
      "Automated logistics dispatch with instant AWB assignment across couriers",
      "Unified vendor settlement calculator with commission and GST breakdowns"
    ]
  },
  {
    id: "telecaller-crm",
    number: "02",
    title: "Telecaller CRM & Operations Board",
    category: "CRM • Lead Management • Business Operations",
    shortDesc: "Custom operational system streamlining lead distribution, call outcomes, and follow-up reminders.",
    fullDesc: "Engineered a transparent operational management tool that eliminated spreadsheet clutter and lost deals. Features dynamic lead allocation across agents, one-click call disposition logging, automated callback alarms, and real-time daily connect-rate scorecards.",
    architecture: ["New Lead Ingestion", "Telecaller Pool Allocation", "Call Disposition Logger", "Automated Callback Trigger", "Performance Dashboard"],
    areas: [
      "Dynamic lead pool distribution algorithm preventing overlapping calls",
      "Structured call disposition logger (Interested, Callback, Busy, Not Qualified)",
      "Automated calendar & WhatsApp callback alerts for scheduled leads",
      "Daily call volume & connect-rate metrics for team leads",
      "Google Sheets operational backend with automated row status locking",
      "Conversion lifecycle tracking from initial contact to closed account"
    ],
    technologies: ["Custom React UI", "Tailwind CSS", "Google Sheets API", "WhatsApp Alerts", "Webhooks"],
    mockupType: "crm-dashboard",
    highlights: [
      "Eliminated duplicate calls with automated lead locking mechanism",
      "Integrated 1-click outcome logging with scheduled callback triggers",
      "Provided leadership with dependable daily connect-rate telemetry"
    ]
  },
  {
    id: "whatsapp-onboarding",
    number: "03",
    title: "WhatsApp Lead Qualification & Seller Engine",
    category: "Automation • WhatsApp • Lead Operations",
    shortDesc: "Automated WhatsApp conversation flow that qualifies incoming vendor leads and syncs directly with CRM records.",
    fullDesc: "Replaced slow manual inquiry response with an intelligent, reactive WhatsApp automation. As soon as a prospective seller or buyer initiates a chat, the system captures business details, validates category fit, alerts the internal team, and creates a verified record in the CRM.",
    architecture: ["Inbound WhatsApp Ping", "Interactive Flow Quiz", "Category & Volume Check", "Sheets / CRM Sync", "Internal Team Alert"],
    areas: [
      "Instant 24/7 automated greetings and interactive response menus",
      "Dynamic qualification quiz capturing business name, category, and monthly volume",
      "Validation rules to separate high-intent commercial buyers from general queries",
      "Instant push notification to sales team with lead summary and direct link",
      "Bidirectional synchronization with central Google Sheets database",
      "Graceful human handoff when complex questions are triggered"
    ],
    technologies: ["WhatsApp Business API", "n8n", "Webhooks", "Google Sheets API", "Interactive Messaging"],
    mockupType: "automation-flow",
    highlights: [
      "Zero latency in responding to inbound WhatsApp ad leads",
      "Structured data capture eliminating manual copy-pasting for telecallers",
      "Automatic filtering of unqualified inquiries before sales outreach"
    ]
  },
  {
    id: "seller-automation",
    number: "04",
    title: "AI-Powered Outreach & Company Research",
    category: "Automation • AI Workflows • Data Enrichment",
    shortDesc: "Autonomous outreach pipeline that researches companies, drafts personalized emails, and schedules follow-ups.",
    fullDesc: "Replaced hours of repetitive manual data entry and generic blast emails with an intelligent pipeline. The system monitors new vendor leads, enriches their profile with industry data, synthesizes custom outreach copy using AI, and delivers via ZeptoMail SMTP with engagement tracking.",
    architecture: ["Lead Ingestion", "AI Context Analysis", "Personalized Draft", "ZeptoMail SMTP Dispatch", "Engagement Webhook", "CRM Sync"],
    areas: [
      "Google Sheets webhook triggers for new prospective accounts",
      "AI-driven contextual email drafting personalized by product category",
      "Transactional SMTP delivery integration via ZeptoMail",
      "Open and click engagement tracking via webhook receivers",
      "Multi-stage automated reminder schedules based on recipient behavior",
      "Centralized CRM status updates with full audit logs"
    ],
    technologies: ["n8n", "Google Sheets API", "ZeptoMail", "LLM APIs", "Webhooks", "JSON Schema"],
    mockupType: "automation-flow",
    highlights: [
      "Zero manual copy-pasting for outreach campaigns",
      "High-relevance personalization tailored to seller product specialization",
      "Live bi-directional sync between email delivery events and CRM state"
    ]
  },
  {
    id: "logistics-payment",
    number: "05",
    title: "Logistics & Payment Integration Highway",
    category: "API • Payment Gateways • Logistics Integrations",
    shortDesc: "Resilient middleware coordinating payment authorization, split payouts, and multi-carrier courier handshakes.",
    fullDesc: "Managed the technical bridges connecting customer checkouts to financial processors (Cashfree, Razorpay) and physical courier networks (Shiprocket, Delhivery, Blue Dart). Engineered idempotent webhook receivers and unified tracking payload normalizers.",
    architecture: ["Marketplace Order", "Cashfree/Razorpay API", "Escrow & Payout", "Shiprocket/Delhivery API", "Courier Webhook", "Customer Tracking"],
    areas: [
      "Cashfree & Razorpay payment gateway integration with signature verification",
      "Automated AWB generation upon order confirmation",
      "Shiprocket & Delhivery courier rate comparison and pickup scheduling",
      "Multi-carrier tracking status normalization standardizing disparate events",
      "Seller settlement ledger calculation with courier fee reconciliation",
      "Fault-tolerant webhook receiver with automated retry logic"
    ],
    technologies: ["Cashfree", "Razorpay", "Shiprocket", "Delhivery", "Blue Dart APIs", "REST APIs", "Webhook Routers"],
    mockupType: "logistics-payment",
    highlights: [
      "Unified tracking status parser standardizing disparate courier events",
      "Automated logistics cost reconciliation against vendor balances",
      "Fault-tolerant webhook receiver with auto-retry on network drop"
    ]
  },
  {
    id: "digital-marketing",
    number: "06",
    title: "Digital Marketing & Telemetry Infrastructure",
    category: "Marketing Systems • Analytics • CRO",
    shortDesc: "Connected telemetry linking Google Ads, Meta Ads, Search Console, and GA4 directly to sales conversion data.",
    fullDesc: "Eliminated blind spots in marketing spend by configuring robust tracking across paid ads, organic search, and CRM milestones. Built custom Google Tag Manager DataLayer schemas to ensure every advertising dollar is attributed to actual down-funnel business outcomes.",
    architecture: ["Ad Traffic (Google/Meta)", "GTM DataLayer", "GA4 Telemetry", "Lead Ingestion Webhook", "CRM Pipeline", "Attributed Conversion"],
    areas: [
      "Google Tag Manager DataLayer container architecture for web and checkout",
      "Custom e-commerce purchase and lead form event tagging",
      "Google Search Console crawl diagnostics and keyword telemetry",
      "Meta Conversions API & Google Ads enhanced conversions",
      "UTM parameter propagation through multi-step forms",
      "Executive marketing ROI and lead acquisition dashboards"
    ],
    technologies: ["Google Tag Manager", "GA4", "Search Console", "Google Ads", "Meta Ads", "Power BI"],
    mockupType: "marketing-funnel",
    highlights: [
      "100% verified server-side and client-side conversion firing",
      "End-to-end attribution from initial ad click to final vendor signup",
      "Systematic search performance auditing detecting crawl anomalies"
    ]
  }
];

// Interactive Automation Lab Workflow Simulations
export const WORKFLOW_SIMULATIONS: AutomationWorkflow[] = [
  {
    id: "wf-outreach",
    title: "Seller Lead Outreach & AI Enrichment",
    category: "Sales & Inbound Automation",
    description: "Captures fresh vendor leads, enriches company profile, generates AI personalized pitch, dispatches via ZeptoMail SMTP, and registers CRM callbacks.",
    nodes: [
      { id: "n1", label: "Lead Ingestion", sublabel: "Form or Sheets Webhook", type: "trigger", status: "completed", payloadSample: '{\n  "leadId": "LD-8921",\n  "company": "Apex Agro Spices",\n  "contact": "K. Sharma",\n  "category": "Organic Spices"\n}' },
      { id: "n2", label: "AI Analysis", sublabel: "Context & Catalog Evaluation", type: "ai", status: "completed", payloadSample: '{\n  "intent": "High Commercial Potential",\n  "suggestedTone": "B2B Professional",\n  "keyPains": ["Packaging compliance", "Logistics costs"]\n}' },
      { id: "n3", label: "Draft Message", sublabel: "Custom Body Generation", type: "process", status: "completed", payloadSample: '{\n  "subject": "Expanding Apex Agro\'s bulk distribution on IngrediaMart",\n  "template": "vendor_intro_v2"\n}' },
      { id: "n4", label: "ZeptoMail Dispatch", sublabel: "Transactional SMTP Delivery", type: "integration", status: "completed", payloadSample: '{\n  "messageId": "zm_8921x_ok",\n  "status": "SENT",\n  "timestamp": "2026-10-03T10:14:02Z"\n}' },
      { id: "n5", label: "CRM Sync", sublabel: "Stage: Outreach Active", type: "action", status: "completed", payloadSample: '{\n  "crmStage": "Outreach Sent",\n  "nextAction": "Auto-Followup in 48h"\n}' },
      { id: "n6", label: "Schedule Follow-up", sublabel: "Webhook Cron Registered", type: "output", status: "completed", payloadSample: '{\n  "timerJobId": "cron_fup_8921",\n  "scheduledFor": "2026-10-05T10:14:00Z"\n}' }
    ]
  },
  {
    id: "wf-order",
    title: "Order Fulfillment & Settlement Chain",
    category: "Marketplace Operations",
    description: "Executes payment validation, routes item order to specific verified vendor, creates GST invoice, provisions courier AWB, and tracks in real-time.",
    nodes: [
      { id: "n1", label: "Customer Checkout", sublabel: "Cart Confirmed", type: "trigger", status: "completed", payloadSample: '{\n  "orderId": "ORD-54019",\n  "totalAmount": 14500,\n  "currency": "INR",\n  "items": 3\n}' },
      { id: "n2", label: "Payment Verification", sublabel: "Cashfree/Razorpay Webhook", type: "integration", status: "completed", payloadSample: '{\n  "txnStatus": "SUCCESS",\n  "gatewayRef": "CF_PAY_89321",\n  "splitEscrow": true\n}' },
      { id: "n3", label: "Seller Assignment", sublabel: "Vendor Dispatch Queue", type: "process", status: "completed", payloadSample: '{\n  "assignedVendor": "VEND-304",\n  "warehouseLocation": "Bhiwandi, MH"\n}' },
      { id: "n4", label: "Tax & Invoice Engine", sublabel: "HSN & GST Split Calculation", type: "action", status: "completed", payloadSample: '{\n  "invoiceNo": "INV-2026-902",\n  "gstSlab": "18%",\n  "platformFee": 725\n}' },
      { id: "n5", label: "Logistics Dispatch", sublabel: "Shiprocket / Delhivery API", type: "integration", status: "completed", payloadSample: '{\n  "awb": "DEL_984321049",\n  "courier": "Delhivery Express",\n  "pickupDate": "Today 16:00"\n}' },
      { id: "n6", label: "Customer Notification", sublabel: "WhatsApp & Email Dispatched", type: "output", status: "completed", payloadSample: '{\n  "whatsapp": "SENT",\n  "trackingUrl": "https://track.system/DEL_984321049"\n}' }
    ]
  },
  {
    id: "wf-catalog",
    title: "Catalog AI Extraction & SEO Pipeline",
    category: "Product & Marketing Engineering",
    description: "Ingests raw vendor product specifications, generates canonical SEO meta tags, validates HSN codes, compresses media, and activates catalog item.",
    nodes: [
      { id: "n1", label: "Raw Sheet Entry", sublabel: "Seller Submits Form", type: "trigger", status: "completed", payloadSample: '{\n  "rawName": "Dry Ginger Powder 1kg bulk pack",\n  "seller": "SpiceKing Ltd"\n}' },
      { id: "n2", label: "AI Content Enrichment", sublabel: "Attribute & Spec Extraction", type: "ai", status: "completed", payloadSample: '{\n  "cleanedTitle": "Pure Dried Ginger Powder (Zingiber officinale) - 1kg",\n  "grade": "Export Grade A"\n}' },
      { id: "n3", label: "Tax & HSN Validator", sublabel: "0910.11 Compliance Check", type: "process", status: "completed", payloadSample: '{\n  "hsn": "09101110",\n  "gstRate": "5%",\n  "valid": true\n}' },
      { id: "n4", label: "Asset Processing", sublabel: "WebP Conversion & CDN", type: "action", status: "completed", payloadSample: '{\n  "originalSize": "4.2MB",\n  "optimizedSize": "182KB",\n  "cdnKey": "cdn.ingred/products/ginger-01.webp"\n}' },
      { id: "n5", label: "Schema & SEO Generator", sublabel: "Product JSON-LD Built", type: "process", status: "completed", payloadSample: '{\n  "metaTitle": "Buy Dried Ginger Powder Wholesale | Bulk Supplier",\n  "schemaType": "Product"\n}' },
      { id: "n6", label: "Live Marketplace Push", sublabel: "Indexed in Catalog DB", type: "output", status: "completed", payloadSample: '{\n  "status": "ACTIVE",\n  "slug": "/spices/dried-ginger-powder-1kg"\n}' }
    ]
  }
];

// Skills data for skill cloud or details
export const SKILL_CATEGORIES = [
  'Development',
  'Automation',
  'E-commerce',
  'Integrations',
  'Marketing Technology',
  'Data & Business'
] as const;

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "React & Modern Web",
    category: "Development",
    description: "Building responsive, component-driven client interfaces, seller portals, and administrative views.",
    proficiency: "Web Technologies",
    icon: "Code2",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    name: "HTML5 & Modern CSS",
    category: "Development",
    description: "Semantic structures, accessible form designs, fluid responsive layouts, and modern CSS architectures.",
    proficiency: "Frontend Foundation",
    icon: "Layers",
    tags: ["HTML5", "Responsive Design", "CSS Grid/Flexbox"]
  },
  {
    name: "REST APIs & Webhooks",
    category: "Development",
    description: "Consuming, transforming, and connecting HTTP endpoints with webhook receiver architectures.",
    proficiency: "System Connectivity",
    icon: "Network",
    tags: ["REST", "Webhooks", "JSON", "HTTP Protocols"]
  },
  {
    name: "n8n Workflow Automation",
    category: "Automation",
    description: "Orchestrating multi-step conditional workflows, webhook triggers, error handling, and scheduled jobs.",
    proficiency: "Workflow Orchestration",
    icon: "Workflow",
    tags: ["Node Logic", "Custom Code Nodes", "Cron Triggers", "Branching"]
  },
  {
    name: "Google Sheets Automation",
    category: "Automation",
    description: "Transforming tabular data into live operational databases with Apps Script, formulas, and auto-sync.",
    proficiency: "Operational Backend",
    icon: "FileSpreadsheet",
    tags: ["App Scripts", "ArrayFormula", "Query Functions", "Webhook Sync"]
  },
  {
    name: "Email & WhatsApp Automation",
    category: "Automation",
    description: "Automated transactional notifications, cold seller outreach sequences, and WhatsApp alert flows.",
    proficiency: "Communications Delivery",
    icon: "Mail",
    tags: ["ZeptoMail", "SMTP APIs", "WhatsApp Webhooks", "Dynamic Templates"]
  },
  {
    name: "Multi-Vendor Marketplaces",
    category: "E-commerce",
    description: "System architecture for seller onboarding, catalog governance, customer cart routing, and payouts.",
    proficiency: "Marketplace Ecosystems",
    icon: "Store",
    tags: ["Vendor Portals", "Commission Splitting", "Catalog Review", "Multi-cart"]
  },
  {
    name: "Logistics APIs (Shiprocket & Delhivery)",
    category: "Integrations",
    description: "Airway bill (AWB) generation, reverse pickups, courier rate comparison APIs, and multi-carrier tracking.",
    proficiency: "Logistics Systems",
    icon: "Truck",
    tags: ["Shiprocket API", "Delhivery", "Blue Dart Integration", "Realtime Webhooks"]
  },
  {
    name: "Payment Gateways (Cashfree & Razorpay)",
    category: "Integrations",
    description: "Checkout initialization, signature verification, split payments, webhook callbacks, and refund handling.",
    proficiency: "Payment Infrastructure",
    icon: "CreditCard",
    tags: ["Cashfree", "Razorpay", "Webhook Verification", "Payment Links"]
  },
  {
    name: "Google Tag Manager & GA4",
    category: "Marketing Technology",
    description: "DataLayer event tracking, conversion tag firing, custom dimensions, and user behavior analytics funnels.",
    proficiency: "Measurement Architecture",
    icon: "Activity",
    tags: ["GTM Container", "DataLayer", "GA4 Funnels", "Custom Events"]
  },
  {
    name: "SEO & Search Console",
    category: "Marketing Technology",
    description: "Schema markup, indexing audit workflows, canonical hierarchy, sitemap generation, and SERP telemetry.",
    proficiency: "Search Systems",
    icon: "Search",
    tags: ["Search Console", "Structured Data", "Crawling Audits", "Core Web Vitals"]
  },
  {
    name: "Custom CRM & Lead Pipelines",
    category: "Data & Business",
    description: "Designing caller lead boards, disposition statuses, automated follow-up reminders, and stage tracking.",
    proficiency: "Customer Ops Engine",
    icon: "Users",
    tags: ["Lead Scoring", "Call Dispositions", "Follow-up Queues", "User Roles"]
  },
  {
    name: "Power BI & Business Dashboards",
    category: "Data & Business",
    description: "Executive KPI scorecards, telecaller efficiency metrics, daily order volume trends, and fulfillment SLAs.",
    proficiency: "Executive Reporting",
    icon: "BarChart3",
    tags: ["Power BI", "Data Modeling", "KPI Metrics", "Operational Dashboards"]
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "t1",
    category: "Technology & E-commerce",
    role: "Digital Systems & Marketplace Operations",
    project: "IngrediaMart Multi-Vendor Food-Ingredient Platform",
    period: "Production Environment",
    technologies: ["React", "Marketplace Systems", "Shiprocket", "Cashfree", "Catalog Taxonomies"],
    builtAndManaged: [
      "Worked across technical architecture and daily operational execution of a multi-vendor ingredient marketplace",
      "Managed seller onboarding verification, product listing workflows, and HSN/GST validation systems",
      "Coordinated order fulfillment transitions, inventory queues, and logistics courier handshakes"
    ],
    outcome: "Built an interconnected marketplace operations system linking sellers, payments, couriers, and buyers into a seamless workflow."
  },
  {
    id: "t2",
    category: "Automation & CRM",
    role: "Workflow & Operations Automation Specialist",
    project: "Automated Seller Outreach & Telecaller CRM Systems",
    period: "Operational Systems Implementation",
    technologies: ["n8n", "ZeptoMail", "Google Sheets API", "LLM APIs", "Webhooks", "CRM Architecture"],
    builtAndManaged: [
      "Engineered automated seller acquisition pipelines utilizing Google Sheets triggers, AI-personalized copy, and ZeptoMail",
      "Created structured telecaller management boards with disposition tracking and automated callback calendar alarms",
      "Automated multi-stage follow-up sequences based on recipient engagement webhooks"
    ],
    outcome: "Transformed scattered manual outreach into a measurable, automated engine with real-time status visibility."
  },
  {
    id: "t3",
    category: "Digital Marketing Systems",
    role: "MarTech & Telemetry Architect",
    project: "Search & Conversion Tracking Infrastructure",
    period: "Growth & Analytics Implementation",
    technologies: ["Google Tag Manager", "GA4", "Search Console", "Google Ads", "Meta Ads"],
    builtAndManaged: [
      "Configured robust DataLayer events capturing catalog views, add-to-carts, leads, and checkout transactions",
      "Resolved crawl errors and optimized technical SEO architecture for multi-category marketplace catalogs",
      "Integrated ad channel webhooks and attribution links feeding clean lead data directly into CRM"
    ],
    outcome: "Unified disparate advertising and search channels into single-source-of-truth conversion tracking."
  }
];

export const HOW_I_THINK_STEPS = [
  {
    number: "01",
    title: "Understand",
    subheading: "Manual process & bottleneck discovery",
    description: "Deeply mapping the current real-world business operations. Interviewing stakeholders, auditing existing spreadsheets, and identifying where human hours, data leaks, or delays occur.",
    highlight: "Uncover hidden dependencies before writing any code."
  },
  {
    number: "02",
    title: "Structure",
    subheading: "Data modeling & architecture design",
    description: "Translating messy unstructured communication into predictable JSON schemas, database entities, state machines, and API contracts.",
    highlight: "Order and predictability at the data layer."
  },
  {
    number: "03",
    title: "Build",
    subheading: "Connecting tools & software interfaces",
    description: "Developing responsive frontends, configuring webhooks, wiring CRM panels, and integrating third-party services (payments, courier APIs, email servers).",
    highlight: "Clean, robust code built for operational resilience."
  },
  {
    number: "04",
    title: "Automate",
    subheading: "Orchestrating event-driven workflows",
    description: "Implementing n8n pipelines, AI personalization triggers, auto-notifications, and automated background jobs that run 24/7 without manual intervention.",
    highlight: "Zero-friction handoffs across separate systems."
  },
  {
    number: "05",
    title: "Optimize",
    subheading: "Measurement, telemetry & continuous refinement",
    description: "Establishing performance KPIs, error logging, and analytics dashboards (GA4, Looker, Power BI) to systematically evaluate throughput and continuously streamline operations.",
    highlight: "Real-time visibility into system health and ROI."
  }
];

export const SYSTEM_MAP_DATA = {
  "E-commerce": {
    color: "#38bdf8",
    nodes: ["React Frontend", "Catalog Taxonomies", "Multi-Vendor Engine", "Cashfree Gateway", "Shiprocket Logistics", "CRM & Orders", "GA4 Analytics"],
    description: "Complete transactional flow connecting customer catalog browsing to multi-vendor allocation, payment clearing, courier dispatch, and analytics."
  },
  "Automation": {
    color: "#a855f7",
    nodes: ["n8n Workflows", "Google Sheets Webhooks", "LLM Personalization", "ZeptoMail SMTP", "CRM Sync", "Notification Engine"],
    description: "Event-driven background pipeline handling lead capture, AI enrichment, transactional messaging, and multi-app synchronization."
  },
  "Marketing": {
    color: "#06b6d4",
    nodes: ["Google Ads", "Meta Ads", "Google Search Console", "GTM DataLayer", "GA4 Telemetry", "Lead Ingestion", "Attribution Pipeline"],
    description: "Measurement and acquisition ecosystem tracking traffic sources, firing conversion tags, and feeding qualified leads into sales operations."
  },
  "CRM": {
    color: "#ec4899",
    nodes: ["Lead Pool", "Telecaller Assignment", "Call Logs", "Disposition Engine", "Automated Callback Trigger", "Conversion Metrics"],
    description: "Operational management system managing leads, agent workloads, call dispositions, and customer relationship progression."
  },
  "API": {
    color: "#3b82f6",
    nodes: ["REST Endpoints", "Webhook Receivers", "Payment Verification", "Logistics Handshake", "Database Adapters", "Error Catchers"],
    description: "Resilient middleware layer synchronizing third-party APIs (Cashfree, Razorpay, Delhivery) with internal business state."
  },
  "Analytics": {
    color: "#10b981",
    nodes: ["Power BI", "DataLayer Events", "Order Ledger", "KPI Scorecards", "Operational Trends", "Executive Reports"],
    description: "Data intelligence layer synthesizing raw operational records into actionable charts, SLA compliance reports, and growth trends."
  }
};

