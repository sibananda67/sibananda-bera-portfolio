import { SkillItem, ProjectItem, AutomationWorkflow, TimelineItem } from '../types';

export const personalLinks = {
  linkedin: "https://www.linkedin.com/in/shibananda-bera-4683052a1/",
  github: "https://github.com/sibanandabera",
  email: "sibanandabera8114@gmail.com"
};

export const PERSONAL_INFO = {
  name: "Sibananda Bera",
  positioning: "Technology • Automation • E-commerce • Digital Systems",
  statement: "I build digital systems that turn complex business operations into simple, automated workflows.",
  status: "AVAILABLE FOR TECHNOLOGY & AUTOMATION PROJECTS",
  email: personalLinks.email,
  linkedin: personalLinks.linkedin,
  github: personalLinks.github,
  location: "India / Remote Worldwide",
  bioIntro: "My work sits at the intersection of technology, automation, e-commerce, marketing, and business operations. I enjoy taking a messy manual process and turning it into a structured, measurable, and automated system."
};

export const STATS = [
  {
    number: "20+",
    label: "Workflows & Automations",
    sublabel: "Designed, tested, and operationalized across business domains"
  },
  {
    number: "10+",
    label: "Business Systems & Integrations",
    sublabel: "Connecting CRMs, payments, logistics, APIs, and data sheets"
  },
  {
    number: "Multiple",
    label: "E-Commerce & Digital Projects",
    sublabel: "Marketplaces, seller onboarding portals, and marketing pipelines"
  }
];

export const SKILL_CATEGORIES = [
  'Development',
  'Automation',
  'E-commerce',
  'Integrations',
  'Marketing Technology',
  'Data & Business'
] as const;

export const SKILLS_DATA: SkillItem[] = [
  // Development
  {
    name: "React & Modern Web",
    category: "Development",
    description: "Building responsive, component-driven client interfaces, seller portals, and administrative views.",
    proficiency: "Web Technologies",
    icon: "Code2",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"]
  },
  {
    name: "HTML5 & CSS3",
    category: "Development",
    description: "Semantic structures, accessible form designs, fluid responsive layouts, and modern CSS architectures.",
    proficiency: "Frontend Foundation",
    icon: "Layers",
    tags: ["HTML5", "Responsive Design", "CSS Variables", "Flexbox/Grid"]
  },
  {
    name: "JavaScript (ES6+)",
    category: "Development",
    description: "Modern asynchronous programming, DOM manipulation, JSON schema validation, and functional scripting.",
    proficiency: "Core Logic",
    icon: "FileCode",
    tags: ["ESNext", "Async/Await", "Event Handling", "Data Parsing"]
  },
  {
    name: "REST APIs & Webhooks",
    category: "Development",
    description: "Consuming, transforming, and connecting HTTP endpoints with webhook receiver architectures.",
    proficiency: "System Connectivity",
    icon: "Network",
    tags: ["REST", "Webhooks", "JSON", "HTTP Protocols"]
  },

  // Automation
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
    name: "Email & Messaging Automation",
    category: "Automation",
    description: "Automated transactional notifications, cold seller outreach sequences, and WhatsApp alert flows.",
    proficiency: "Communications Delivery",
    icon: "Mail",
    tags: ["ZeptoMail", "SMTP APIs", "WhatsApp Webhooks", "Dynamic Templates"]
  },
  {
    name: "AI-Assisted Workflows",
    category: "Automation",
    description: "Integrating LLM endpoints for contextual product categorization, email personalization, and summary generation.",
    proficiency: "Cognitive Automation",
    icon: "Sparkles",
    tags: ["Prompt Structuring", "Data Extraction", "Auto-drafting", "Classification"]
  },

  // E-commerce
  {
    name: "Multi-Vendor Marketplaces",
    category: "E-commerce",
    description: "System architecture for seller onboarding, catalog governance, customer cart routing, and payouts.",
    proficiency: "Marketplace Ecosystems",
    icon: "Store",
    tags: ["Vendor Portals", "Commission Splitting", "Catalog Review", "Multi-cart"]
  },
  {
    name: "Product Listing & HSN/GST Systems",
    category: "E-commerce",
    description: "Structured product attribute taxonomies, HSN compliance mapping, GST calculation rules, and asset optimization.",
    proficiency: "Catalog Operations",
    icon: "PackageCheck",
    tags: ["HSN Codes", "GST Rates", "Variants & Attributes", "Media Optimization"]
  },
  {
    name: "Order & Inventory Workflows",
    category: "E-commerce",
    description: "End-to-end lifecycle tracking from cart checkout to warehouse dispatch, stock holds, and replenishment alerts.",
    proficiency: "Fulfillment Pipeline",
    icon: "Boxes",
    tags: ["Stock Sync", "Order Queues", "Status Transitions", "Return Logic"]
  },
  {
    name: "Seller Settlements & Commissions",
    category: "E-commerce",
    description: "Calculations for platform fees, logistics deduction rules, vendor ledgers, and payout verification.",
    proficiency: "Vendor Finance Operations",
    icon: "Receipt",
    tags: ["Ledger Rules", "Settlement Cycles", "Payout Validation", "Audit Trails"]
  },

  // Integrations
  {
    name: "Shiprocket & Delhivery Logistics",
    category: "Integrations",
    description: "Airway bill (AWB) generation, reverse pickups, courier rate comparison APIs, and multi-carrier tracking.",
    proficiency: "Logistics Systems",
    icon: "Truck",
    tags: ["Shiprocket API", "Delhivery", "BlueDart Integration", "Realtime Webhooks"]
  },
  {
    name: "Cashfree & Razorpay Gateways",
    category: "Integrations",
    description: "Checkout initialization, signature verification, split payments, webhook callbacks, and refund handling.",
    proficiency: "Payment Infrastructure",
    icon: "CreditCard",
    tags: ["Cashfree", "Razorpay", "Webhook Verification", "Payment Links"]
  },
  {
    name: "Google Ecosystem Services",
    category: "Integrations",
    description: "Automated Drive file structuring, Gmail API delivery pipelines, Cloud storage, and Looker Studio links.",
    proficiency: "Enterprise Google Suite",
    icon: "Cloud",
    tags: ["Google Workspace", "Drive API", "Gmail REST", "App Scripts"]
  },

  // Marketing Technology
  {
    name: "SEO & Search Console",
    category: "Marketing Technology",
    description: "Schema markup, indexing audit workflows, canonical hierarchy, sitemap generation, and SERP telemetry.",
    proficiency: "Search Systems",
    icon: "Search",
    tags: ["Search Console", "Structured Data", "Crawling Audits", "Core Web Vitals"]
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
    name: "Google Ads & Meta Ads Systems",
    category: "Marketing Technology",
    description: "Conversion API server-side tracking, campaign payload attribution, and lead routing to backend pipelines.",
    proficiency: "Paid Acquisition Ops",
    icon: "Target",
    tags: ["Meta Conversions API", "Ad Tracking", "Lead Webhooks", "UTM Attribution"]
  },

  // Data & Business
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
  },
  {
    name: "Process Optimization & Coordination",
    category: "Data & Business",
    description: "Deconstructing fragmented operational friction, standardizing SOPs, and architecting cohesive digital ecosystems.",
    proficiency: "Operations Engineering",
    icon: "GitMerge",
    tags: ["Bottleneck Removal", "Technical Coordination", "SOP Mapping", "Quality Audits"]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ingrediamart",
    number: "01",
    title: "Ingrediamart",
    category: "E-commerce • Marketplace • Automation",
    shortDesc: "Worked across the technology and operational ecosystem of a multi-vendor food-ingredient marketplace.",
    fullDesc: "Designed, managed, and connected the multi-faceted systems powering a specialized multi-vendor ingredient marketplace. Addressed high-complexity challenges including vendor onboarding validations, dynamic catalog listings with HSN/GST tiers, automated order dispatch notifications, and logistics integration.",
    architecture: ["Seller Portal", "Marketplace Engine", "Payment Gateway", "Logistics & AWB", "Customer Delivery"],
    areas: [
      "Multi-vendor marketplace infrastructure",
      "Seller onboarding & verification panel",
      "Product listing & taxonomy governance",
      "Inventory & low-stock warning triggers",
      "Order management & status state machine",
      "Payment gateway integrations & webhooks",
      "Logistics integration & tracking events",
      "GST & commission deduction calculations",
      "Seller settlements & ledger tracking",
      "Search Engine Optimization & Google Search Console",
      "Google Tag Manager & GA4 custom telemetry",
      "Email and WhatsApp automated notifications",
      "CRM & lead management workflows"
    ],
    technologies: ["React", "REST APIs", "Cashfree", "Shiprocket", "GTM", "GA4", "Search Console", "n8n"],
    mockupType: "marketplace",
    highlights: [
      "Real-time order state transition machine (New → Confirmed → Assigned → Dispatched → Delivered)",
      "Automated logistics dispatch with instant AWB assignment",
      "Unified vendor settlement calculator with commission and GST breakdowns"
    ]
  },
  {
    id: "seller-automation",
    number: "02",
    title: "Seller Automation System",
    category: "Automation • CRM • AI",
    shortDesc: "Designed an automated seller outreach workflow that connects lead data, AI personalization, email delivery and follow-up tracking.",
    fullDesc: "Replaced hours of repetitive manual data entry and disjointed messaging with an intelligent, reactive pipeline. The system monitors new seller leads, synthesizes custom outreach copy using AI contextual analysis, dispatches through transactional SMTP via ZeptoMail, and synchronizes status into central CRM records.",
    architecture: ["Google Sheets", "Lead Ingestion", "AI Personalization", "Email Generation", "ZeptoMail SMTP", "Seller Inbox", "Follow-up Monitor", "CRM Record"],
    areas: [
      "Google Sheets webhook triggers",
      "Data normalization & enrichment",
      "AI-driven contextual email drafting",
      "ZeptoMail transactional delivery integration",
      "Open/Click engagement tracking webhooks",
      "Multi-stage automated reminder schedules",
      "Centralized CRM status updates"
    ],
    technologies: ["n8n", "Google Sheets API", "ZeptoMail", "LLM APIs", "Webhooks", "JSON Schema"],
    mockupType: "automation-flow",
    highlights: [
      "Zero manual copy-pasting for outreach campaigns",
      "Personalized pitch customized by seller product category",
      "Live bi-directional sync between email events and CRM status"
    ]
  },
  {
    id: "telecaller-crm",
    number: "03",
    title: "Telecaller CRM & Operations Board",
    category: "CRM • Operations • Automation",
    shortDesc: "Comprehensive operational dashboard streamlining lead allocation, call outcomes, daily quotas, and conversion tracking.",
    fullDesc: "Engineered a transparent telecaller operational system that removed spreadsheets clutter and lost follow-ups. Features structured call logs, automated follow-up reminders, telecaller performance metrics, and disposition categorization.",
    architecture: ["New Lead", "Telecaller Assignment", "Call Execution", "Disposition Outcome", "Automated Follow-up", "Deal Conversion"],
    areas: [
      "Dynamic lead pool distribution algorithm",
      "Structured call disposition logger (Interested, Callback, Busy, Unqualified)",
      "Automated calendar & WhatsApp callback triggers",
      "Daily call volume & connect rate dashboards",
      "Telecaller performance ranking & quality audits",
      "Conversion lifecycle telemetry"
    ],
    technologies: ["React", "Tailwind CSS", "REST Endpoints", "Data Modeling", "Webhooks"],
    mockupType: "crm-dashboard",
    highlights: [
      "Eliminated overlapping calls with automated locking",
      "Integrated 1-click outcome logging with callback scheduler",
      "Real-time operational KPI visibility for team leads"
    ]
  },
  {
    id: "ecommerce-ops",
    number: "04",
    title: "E-Commerce Catalog & Product Operations",
    category: "E-commerce • Product Systems",
    shortDesc: "Architected structured product listings, attribute taxonomies, HSN/GST compliance tables, and inventory queues.",
    fullDesc: "Maintained data integrity across dense multi-category catalogs. Built operational workflows ensuring image asset compression, structured specification tables, GST tax slab categorization, and synchronized inventory levels across sales channels.",
    architecture: ["Raw Vendor Data", "Taxonomy Mapping", "HSN & GST Validation", "Asset Optimization", "Catalog Database", "Marketplace Front"],
    areas: [
      "Multi-tier category taxonomies & attribute schemas",
      "HSN code verification & accurate GST slab calculations",
      "Automated image format conversion & web-ready compression",
      "Bulk inventory imports with automated error flagging",
      "Order status lifecycle monitoring and dispatch tracking",
      "Seller compliance checks before item activation"
    ],
    technologies: ["Product Taxonomies", "GST/HSN Schemas", "Inventory Algorithms", "Data Validation"],
    mockupType: "ecommerce-ops",
    highlights: [
      "Strict data validation preventing faulty product publications",
      "Standardized nutritional, ingredient, and packaging attribute models",
      "Streamlined seller catalog submission to review turnaround"
    ]
  },
  {
    id: "logistics-payment",
    number: "05",
    title: "Logistics & Payment Integrations",
    category: "API • Integration",
    shortDesc: "Technical architecture coordinating payment authorization, split escrow settlements, and courier API handshakes.",
    fullDesc: "Managed the technical bridges connecting customer checkouts to financial processors (Cashfree, Razorpay) and physical distribution networks (Shiprocket, Delhivery, BlueDart). Focused on webhook idempotency, tracking event ingestion, and clean settlement reporting.",
    architecture: ["Marketplace Order", "Payment Gateway API", "Escrow & Settlement", "Logistics Courier API", "Live Tracking Webhook", "Customer Notification"],
    areas: [
      "Cashfree & Razorpay payment gateway workflows",
      "Signature verification & secure webhook callbacks",
      "Automated AWB generation upon order verification",
      "Shiprocket & Delhivery courier rate & courier allocation checks",
      "Multi-carrier tracking status updates via webhook payloads",
      "Seller settlement ledger calculation with logistics deductions"
    ],
    technologies: ["Cashfree", "Razorpay", "Shiprocket", "Delhivery", "BlueDart APIs", "Webhook Routers"],
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
    title: "Digital Marketing & Analytics Systems",
    category: "Marketing Technology • Analytics",
    shortDesc: "Created unified telemetry connecting paid acquisition channels, organic search tracking, and CRM lead capture.",
    fullDesc: "Eliminated blind spots in marketing spend by configuring robust tracking across Google Ads, Meta Ads, Search Console, and GA4 through custom Google Tag Manager event structures. Mapped every inbound click to down-funnel CRM conversion milestones.",
    architecture: ["Traffic Channels (SEO/Ads)", "GTM DataLayer", "GA4 Telemetry", "Inbound Lead Webhook", "CRM Pipeline", "Attributed Conversion"],
    areas: [
      "Google Tag Manager DataLayer container architecture",
      "Custom e-commerce purchase and lead form event tagging",
      "Google Search Console crawl diagnostics and keyword telemetry",
      "Meta Conversions API & Google Ads enhanced conversions",
      "UTM parameter propagation through multi-step forms",
      "Executive marketing ROI & lead acquisition dashboards"
    ],
    technologies: ["Google Tag Manager", "GA4", "Search Console", "Google Ads", "Meta Ads", "Data Studio / Looker"],
    mockupType: "marketing-funnel",
    highlights: [
      "100% verified server-side and client-side conversion firing",
      "End-to-end attribution from initial ad click to final vendor signup",
      "Systematic search performance auditing detecting crawl anomalies"
    ]
  }
];

export const WORKFLOW_SIMULATIONS: AutomationWorkflow[] = [
  {
    id: "wf-outreach",
    title: "Seller Lead Outreach Engine",
    category: "Sales & Inbound Automation",
    description: "Monitors fresh vendor leads, enriches industry profile, queries AI for hyper-personalized messaging, sends via ZeptoMail SMTP, and sets up CRM callbacks.",
    nodes: [
      { id: "n1", label: "Lead Captured", sublabel: "Form or Sheets Webhook", type: "trigger", status: "completed", payloadSample: '{\n  "leadId": "LD-8921",\n  "company": "Apex Agro Spices",\n  "contact": "K. Sharma",\n  "category": "Organic Spices"\n}' },
      { id: "n2", label: "AI Analysis", sublabel: "Context & Catalog Evaluation", type: "ai", status: "completed", payloadSample: '{\n  "intent": "High Potential",\n  "suggestedTone": "B2B Professional",\n  "keyPains": ["Packaging compliance", "Logistics costs"]\n}' },
      { id: "n3", label: "Generate Email", sublabel: "Custom Body Drafting", type: "process", status: "completed", payloadSample: '{\n  "subject": "Expanding Apex Agro\'s bulk distribution on Ingrediamart",\n  "template": "vendor_intro_v2"\n}' },
      { id: "n4", label: "ZeptoMail Dispatch", sublabel: "Transactional SMTP Delivery", type: "integration", status: "completed", payloadSample: '{\n  "messageId": "zm_8921x_ok",\n  "status": "SENT",\n  "timestamp": "2026-09-22T10:14:02Z"\n}' },
      { id: "n5", label: "CRM Sync", sublabel: "Status: Contacted", type: "action", status: "completed", payloadSample: '{\n  "crmStage": "Outreach Sent",\n  "nextAction": "Auto-Followup in 48h"\n}' },
      { id: "n6", label: "Schedule Follow-up", sublabel: "Webhook Cron Registered", type: "output", status: "completed", payloadSample: '{\n  "timerJobId": "cron_fup_8921",\n  "scheduledFor": "2026-09-24T10:14:00Z"\n}' }
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

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "t1",
    category: "Technology & E-commerce",
    role: "Digital Systems & Marketplace Operations",
    project: "Ingrediamart Multi-Vendor Food-Ingredient Platform",
    period: "Multi-vendor Production Environment",
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
  },
  {
    id: "t4",
    category: "Business Operations",
    role: "Business Process & Operations Coordinator",
    project: "Vendor Settlements & Operational Standard Operating Procedures",
    period: "Cross-Functional Coordination",
    technologies: ["Power BI", "Google Sheets Automation", "SOP Modeling", "Audit Systems"],
    builtAndManaged: [
      "Standardized multi-vendor financial settlement calculation models including commission tiers and logistics fees",
      "Authored operational SOPs for vendor catalog approvals, return inspections, and dispute management",
      "Designed daily operational health dashboards tracking pending orders, courier delays, and telecaller connects"
    ],
    outcome: "Eliminated operational blind spots and provided management with dependable real-time performance indicators."
  },
  {
    id: "t5",
    category: "API & Platform Integrations",
    role: "API Integration & Systems Specialist",
    project: "Payment Gateways & Courier Infrastructure Network",
    period: "Infrastructure Engineering",
    technologies: ["Cashfree", "Razorpay", "Shiprocket", "Delhivery", "BlueDart", "REST APIs"],
    builtAndManaged: [
      "Integrated payment initialization, webhook validation, and split payment escrow systems",
      "Connected multi-carrier shipping providers for automatic rate calculation, AWB assignment, and reverse logistics",
      "Built resilient webhook handlers with payload validation and error-recovery retries"
    ],
    outcome: "Created a dependable transaction and fulfillment highway capable of processing orders without manual intervention."
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
