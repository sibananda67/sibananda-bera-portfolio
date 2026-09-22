// Centralized AI Service for SB AI Portfolio Intelligence
export interface AIStatus {
  active: boolean;
  mode: 'active' | 'demo';
  model: string;
}

export interface SearchResult {
  answer: string;
  highlightedProjects: string[];
  targetSection: string;
  buttonLabel: string;
  isFallback?: boolean;
  mode?: 'active' | 'demo';
}

export interface ProjectExplanation {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  automation: string;
  businessWorkflow: string[];
  involvement: string;
  isFallback?: boolean;
  mode?: 'active' | 'demo';
}

export interface GeneratedWorkflowNode {
  step: number;
  label: string;
  tool: string;
  action: string;
}

export interface GeneratedWorkflow {
  workflowTitle: string;
  trigger: string;
  nodes: GeneratedWorkflowNode[];
  summary: string;
  isFallback?: boolean;
  mode?: 'active' | 'demo';
}

export interface ConsultantResult {
  processAnalyzed: string;
  potentialWorkflow: string[];
  potentialTools: string[];
  estimatedBenefit: string;
  recommendedStartingStep: string;
  isFallback?: boolean;
  mode?: 'active' | 'demo';
}

// Helper to safely parse JSON response and verify contentType
async function safeJsonFetch<T>(url: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('application/json')) {
      return (await res.json()) as T;
    }
  } catch {
    // Silently fall back to demo mode on network or parsing failure
  }
  return null;
}

// 1. Status Check
let cachedStatusPromise: Promise<AIStatus> | null = null;

export async function getAIStatus(): Promise<AIStatus> {
  if (!cachedStatusPromise) {
    cachedStatusPromise = (async () => {
      const data = await safeJsonFetch<AIStatus>('/api/ai/status');
      if (data && typeof data.active === 'boolean') {
        return data;
      }
      return { active: false, mode: 'demo', model: 'gemini-3.8-flash' };
    })();
  }
  return cachedStatusPromise;
}

// 2. Chat with SB AI
export async function askSBAI(
  message: string,
  history: Array<{ sender: 'user' | 'bot'; text: string }> = []
): Promise<{ reply: string; isFallback: boolean; mode: 'active' | 'demo' }> {
  const data = await safeJsonFetch<{ reply: string; isFallback: boolean; mode: 'active' | 'demo' }>(
    '/api/ai/chat',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
    }
  );
  if (data && data.reply) {
    return data;
  }

  return {
    reply: "Sibananda builds digital systems that turn complex business operations into simple, automated workflows across web development, n8n automations, marketplace operations, and API integrations.",
    isFallback: true,
    mode: 'demo',
  };
}

// 3. Search Portfolio with AI
export async function searchPortfolioAI(query: string): Promise<SearchResult> {
  const data = await safeJsonFetch<SearchResult>('/api/ai/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  if (data && data.answer) {
    return data;
  }

  return {
    answer: "Sibananda's portfolio showcases practical projects in multi-vendor e-commerce, n8n workflow automations, CRM operations, and third-party API integrations.",
    highlightedProjects: ["IngrediaMart", "Seller Automation System"],
    targetSection: "#work",
    buttonLabel: "Explore Featured Projects →",
    isFallback: true,
    mode: 'demo',
  };
}

// 4. Explain Project with AI
export async function explainProjectAI(
  projectId: string,
  projectTitle: string
): Promise<ProjectExplanation> {
  const data = await safeJsonFetch<ProjectExplanation>('/api/ai/explain-project', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ projectId, projectTitle }),
  });
  if (data && data.summary) {
    return data;
  }

  return {
    title: projectTitle || "IngrediaMart Marketplace Architecture",
    summary: "A multi-vendor digital food-ingredient platform unifying catalog governance, payments, logistics, and seller onboarding.",
    problem: "Food ingredient sourcing involves complex B2B inquiries, manual vendor verification, and fragmented payment & courier tracking.",
    solution: "A centralized digital marketplace connecting supplier portals with automated catalog taxonomies and order state management.",
    technology: ["React", "TypeScript", "REST APIs", "Cashfree/Razorpay", "Shiprocket Webhooks"],
    automation: "Automated seller onboarding verification and courier webhook state transitions.",
    businessWorkflow: [
      "Vendor registers on onboarding portal",
      "HSN/GST and catalog attributes validated",
      "Buyer creates commercial order via secure gateway",
      "Courier label generated via Shiprocket webhook",
      "Settlement & CRM records updated"
    ],
    involvement: "Sibananda managed the platform operations, listing taxonomy structures, payment/courier integrations, and workflow coordinates.",
    isFallback: true,
    mode: 'demo',
  };
}

// 5. Build Workflow Demo
export async function buildWorkflowAI(taskDescription: string): Promise<GeneratedWorkflow> {
  const data = await safeJsonFetch<GeneratedWorkflow>('/api/ai/build-workflow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ taskDescription }),
  });
  if (data && data.workflowTitle) {
    return data;
  }

  return {
    workflowTitle: "Autonomous Lead Processing & Notification Pipeline",
    trigger: "Webhook: New Inbound Lead Entry",
    nodes: [
      { step: 1, label: "Lead Captured", tool: "Google Forms / Webhook", action: "Captures inbound visitor details" },
      { step: 2, label: "Data Validation", tool: "n8n Workflow Engine", action: "Cleans email & verifies phone format" },
      { step: 3, label: "AI Personalization", tool: "Gemini AI", action: "Generates tailored pitch based on inquiry" },
      { step: 4, label: "Email Dispatched", tool: "ZeptoMail SMTP", action: "Sends verified transactional email" },
      { step: 5, label: "CRM Synced", tool: "Google Sheets / CRM", action: "Logs lead status & schedules follow-up" }
    ],
    summary: "Replaces manual copy-pasting and email drafting with an instant, verified digital delivery pipeline.",
    isFallback: true,
    mode: 'demo',
  };
}

// 6. Consult Automation Workflow ("What Should I Automate?")
export async function consultWorkflowAI(manualProcess: string): Promise<ConsultantResult> {
  const data = await safeJsonFetch<ConsultantResult>('/api/ai/consult-workflow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ manualProcess }),
  });
  if (data && data.processAnalyzed) {
    return data;
  }

  return {
    processAnalyzed: manualProcess || "Manual follow-ups and spreadsheet management",
    potentialWorkflow: [
      "Centralized Ingestion (Google Sheets / Form)",
      "Automated Data Sanitization (n8n)",
      "AI Prompt Personalization (Gemini)",
      "Transactional Email / WhatsApp API Dispatch",
      "Follow-Up Schedule Reminder",
      "CRM Pipeline Update & Dashboard Reporting"
    ],
    potentialTools: ["Google Sheets", "n8n", "AI", "Email API", "CRM", "Dashboard"],
    estimatedBenefit: "Reduces up to 85% of manual operational friction, prevents delayed lead follow-ups, and ensures live audit trails.",
    recommendedStartingStep: "Consolidate the incoming data into a structured Google Sheet or webhook trigger before connecting automated email dispatches.",
    isFallback: true,
    mode: 'demo',
  };
}
