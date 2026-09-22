import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '2mb' }));

// Lazy Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

// System Knowledge Base for Sibananda Bera
const PORTFOLIO_CONTEXT = `
NAME: Sibananda Bera
POSITIONING: Technology • Automation • E-commerce • Digital Systems
POSITIONING STATEMENT: "I build digital systems that turn complex business operations into simple, automated workflows."
BIO: Sibananda works at the intersection of technology, automation, e-commerce, marketing, and business operations. He focuses on understanding real business processes (sales, vendors, marketing, payments, logistics, reporting) and turning manual tasks into structured, scalable workflows.
EMAIL: sibanandabera8114@gmail.com
LINKEDIN: https://www.linkedin.com/in/shibananda-bera-4683052a1/
GITHUB: https://github.com/sibanandabera

CORE COMPETENCIES & DOMAINS:
- Web Development: React, TypeScript, Modern CSS, REST APIs, Webhook Handlers, JSON Schemas.
- Automation & Workflows: n8n, Google Sheets Automation, Transactional Email Delivery (ZeptoMail), AI-assisted workflows, lead routing.
- E-Commerce & Marketplaces: Multi-vendor marketplace operations, seller onboarding systems, catalog taxonomies, HSN/GST compliance tables, order & inventory state management.
- Integrations: Payment gateways (Cashfree, Razorpay), logistics courier APIs (Shiprocket, Delhivery, BlueDart), Google Workspace.
- Marketing & Data: Google Tag Manager (GTM DataLayer), Google Analytics 4 (GA4 conversion tracking), Google Search Console, Google Ads & Meta Ads tracking architectures, Custom Telecaller CRM.

KEY PROJECTS:
1. IngrediaMart - Multi-Vendor Food-Ingredient Platform:
   - What it is: A multi-vendor digital commerce ecosystem connecting food-ingredient suppliers, food manufacturers, and commercial buyers.
   - Sibananda's role: Managed technology, operational flows, seller onboarding portals, product listing taxonomies, HSN/GST validation, order state transitions, and integration coordinates.
   - Key tools: React, REST APIs, Razorpay/Cashfree, Logistics courier webhooks, custom seller management interface.

2. Seller Automation System:
   - What it is: Autonomous vendor outreach and data pipeline.
   - Workflow: Google Sheets trigger -> Lead data capture & validation -> AI-assisted personalization -> Email generation -> ZeptoMail SMTP delivery -> Seller reply detection -> Scheduled follow-up -> CRM synchronization.
   - Impact: Eliminated manual copy-pasting across WhatsApp and spreadsheets; 24/7 automated delivery.

3. Telecaller CRM & Operations Board:
   - What it is: Operational lead allocation and call tracking system.
   - Features: Dynamic lead pools, call logs, disposition tracking, daily KPI metrics, telecaller allocation.
   - Tools: Custom CRM layout, Google Sheets database, real-time metrics.

4. E-Commerce Catalog & Product Operations:
   - What it is: Structured product information management and governance.
   - Features: Attribute taxonomies, HSN/GST categorization, image optimization pipelines, vendor listing rules.

5. Logistics & Payment Integrations:
   - What it is: End-to-end checkout and fulfillment transaction architecture.
   - Features: Webhook listeners for Cashfree & Razorpay payments, automated label generation & tracking updates via Shiprocket & Delhivery.

6. Digital Marketing & Analytics Systems:
   - What it is: Unified acquisition telemetry and conversion measurement.
   - Features: GTM DataLayer, GA4 event pipelines, conversion attribution across Google Ads & Meta Ads, Search Console indexing.

STRICT INSTRUCTIONS:
- You are SB AI, the portfolio assistant for Sibananda Bera.
- Explain Sibananda’s professional work, projects, technologies, automation workflows and experience using ONLY the verified portfolio information above.
- Be concise, professional, and helpful.
- Never invent credentials, companies, clients, revenue, employment history, project results, certifications, or job titles.
- If information isn't available, respond: "I don't have that information in Sibananda's portfolio yet."
- When appropriate, mention which section of the portfolio the user can check (e.g., #work, #automation, #skills, #about, #experience, #contact).
`;

// 1. API: AI Status Check
app.get('/api/ai/status', (req, res) => {
  const hasKey = Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim() !== '');
  res.json({
    active: hasKey,
    mode: hasKey ? 'active' : 'demo',
    model: 'gemini-3.8-flash',
    features: ['chat', 'search', 'explainer', 'workflow_builder', 'consultant']
  });
});

// 2. API: Chat with SB AI
app.post('/api/ai/chat', async (req, res) => {
  const { message, history } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const ai = getGenAI();
  if (!ai) {
    return res.json({
      reply: getFallbackAnswer(message),
      isFallback: true,
      mode: 'demo'
    });
  }

  try {
    const formattedHistory = Array.isArray(history)
      ? history.slice(-6).map((item: any) => `${item.sender === 'user' ? 'Visitor' : 'SB AI'}: ${item.text}`).join('\n')
      : '';

    const prompt = `
${PORTFOLIO_CONTEXT}

Previous Conversation:
${formattedHistory}

Visitor question: "${message}"

Respond directly as SB AI to the visitor following the instructions above. Keep answers concise, clear (2-4 sentences max unless detailed project breakdown is asked), and helpful.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        temperature: 0.2,
      },
    });

    res.json({
      reply: response.text || "I don't have that information in Sibananda's portfolio yet.",
      isFallback: false,
      mode: 'active'
    });
  } catch (error: any) {
    console.error('Gemini chat error:', error?.message || error);
    res.json({
      reply: getFallbackAnswer(message),
      isFallback: true,
      mode: 'demo'
    });
  }
});

// 3. API: Ask My Portfolio Search
app.post('/api/ai/search', async (req, res) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const ai = getGenAI();
  if (!ai) {
    return res.json(getFallbackSearch(query));
  }

  try {
    const prompt = `
${PORTFOLIO_CONTEXT}

Analyze this search query about Sibananda's work: "${query}"

Return a JSON object with:
1. "answer": Concise 1-2 sentence direct factual response based only on the portfolio.
2. "highlightedProjects": Array of strings (project titles from: IngrediaMart, Seller Automation System, Telecaller CRM, E-Commerce Operations, Logistics & Payment Integrations, Digital Marketing Systems).
3. "targetSection": Suggested HTML anchor ID (one of: "#work", "#automation", "#skills", "#experience", "#architecture", "#contact").
4. "buttonLabel": Short CTA button text (e.g. "View Payment Integration Project →", "Explore Automation Lab →").
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            answer: { type: Type.STRING },
            highlightedProjects: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            targetSection: { type: Type.STRING },
            buttonLabel: { type: Type.STRING }
          },
          required: ['answer', 'highlightedProjects', 'targetSection', 'buttonLabel']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({
      ...parsed,
      isFallback: false,
      mode: 'active'
    });
  } catch (error: any) {
    console.error('Gemini search error:', error?.message || error);
    res.json(getFallbackSearch(query));
  }
});

// 4. API: AI Project Explainer
app.post('/api/ai/explain-project', async (req, res) => {
  const { projectId, projectTitle } = req.body;
  const ai = getGenAI();

  if (!ai) {
    return res.json(getFallbackExplainer(projectId || projectTitle));
  }

  try {
    const prompt = `
${PORTFOLIO_CONTEXT}

Provide a structured 5-step breakdown for project "${projectTitle || projectId}".
Return a JSON object with:
- "title": string (Project Title)
- "summary": string (1 sentence high-level overview)
- "problem": string (What manual problem or bottleneck it addresses)
- "solution": string (How the digital system was designed)
- "technology": array of strings (Core technologies used)
- "automation": string (Specific automated flow or triggers)
- "businessWorkflow": array of strings (3-5 sequential steps of the workflow)
- "involvement": string (Sibananda's specific role & contribution)
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            problem: { type: Type.STRING },
            solution: { type: Type.STRING },
            technology: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            automation: { type: Type.STRING },
            businessWorkflow: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            involvement: { type: Type.STRING }
          },
          required: ['title', 'summary', 'problem', 'solution', 'technology', 'automation', 'businessWorkflow', 'involvement']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({
      ...parsed,
      isFallback: false,
      mode: 'active'
    });
  } catch (error: any) {
    console.error('Gemini explainer error:', error?.message || error);
    res.json(getFallbackExplainer(projectId || projectTitle));
  }
});

// 5. API: AI Automation Builder Demo
app.post('/api/ai/build-workflow', async (req, res) => {
  const { taskDescription } = req.body;
  const ai = getGenAI();

  if (!ai) {
    return res.json(getFallbackWorkflow(taskDescription));
  }

  try {
    const prompt = `
A business user described this repetitive manual task they want to automate:
"${taskDescription}"

Generate a realistic, professional digital automation pipeline.
Return a JSON object:
- "workflowTitle": string (A concise title like "Automated Lead Enrichment & Dispatch")
- "trigger": string (e.g. "Webhook: Form Submission" or "Google Sheets Row Appended")
- "nodes": array of objects, each with:
    - "step": number
    - "label": string (e.g. "Lead Captured", "Data Validation", "AI Personalization", "Email Delivery", "CRM Synchronization")
    - "tool": string (e.g. "Google Forms", "n8n", "Gemini API", "ZeptoMail", "Sheets CRM")
    - "action": string (short description of the operation)
- "summary": string (1-2 sentences on what this pipeline accomplishes)
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            workflowTitle: { type: Type.STRING },
            trigger: { type: Type.STRING },
            nodes: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  step: { type: Type.INTEGER },
                  label: { type: Type.STRING },
                  tool: { type: Type.STRING },
                  action: { type: Type.STRING }
                },
                required: ['step', 'label', 'tool', 'action']
              }
            },
            summary: { type: Type.STRING }
          },
          required: ['workflowTitle', 'trigger', 'nodes', 'summary']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({
      ...parsed,
      isFallback: false,
      mode: 'active'
    });
  } catch (error: any) {
    console.error('Gemini workflow builder error:', error?.message || error);
    res.json(getFallbackWorkflow(taskDescription));
  }
});

// 6. API: AI Business Automation Consultant ("What Should I Automate?")
app.post('/api/ai/consult-workflow', async (req, res) => {
  const { manualProcess } = req.body;
  const ai = getGenAI();

  if (!ai) {
    return res.json(getFallbackConsultant(manualProcess));
  }

  try {
    const prompt = `
A visitor wants advice on automating this manual business process:
"${manualProcess}"

Provide a structured automation recommendation based on modern practical tools (n8n, Google Sheets, AI, CRM, Webhooks).
Return a JSON object:
- "processAnalyzed": string
- "potentialWorkflow": array of strings (e.g. ["Lead Database", "Lead Qualification", "AI Personalization", "Automated Email / WhatsApp", "Follow-up Schedule", "CRM Update", "Performance Dashboard"])
- "potentialTools": array of strings (e.g. ["Google Sheets", "n8n", "AI", "Email API", "CRM", "Dashboard"])
- "estimatedBenefit": string (e.g. "Eliminates ~85% of manual tracking time, prevents lost follow-ups, ensures 100% record accuracy.")
- "recommendedStartingStep": string (Practical first step to implement)
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            processAnalyzed: { type: Type.STRING },
            potentialWorkflow: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            potentialTools: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedBenefit: { type: Type.STRING },
            recommendedStartingStep: { type: Type.STRING }
          },
          required: ['processAnalyzed', 'potentialWorkflow', 'potentialTools', 'estimatedBenefit', 'recommendedStartingStep']
        }
      }
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({
      ...parsed,
      isFallback: false,
      mode: 'active'
    });
  } catch (error: any) {
    console.error('Gemini consultant error:', error?.message || error);
    res.json(getFallbackConsultant(manualProcess));
  }
});

// Robust Fallback Handlers strictly based on verified portfolio data
function getFallbackAnswer(message: string): string {
  const q = message.toLowerCase();
  if (q.includes('ingrediamart') || q.includes('ingredia')) {
    return "IngrediaMart is a multi-vendor food-ingredient marketplace where Sibananda managed technical operations, vendor onboarding workflows, catalog taxonomies, HSN/GST compliance tables, order state transitions, and logistics/payment integrations.";
  }
  if (q.includes('automation') || q.includes('automate') || q.includes('n8n')) {
    return "Sibananda has built end-to-end automation pipelines using n8n, Google Sheets webhooks, AI personalization, and ZeptoMail SMTP delivery, including an automated seller outreach engine and telecaller CRM lead allocation.";
  }
  if (q.includes('skill') || q.includes('stack') || q.includes('technology') || q.includes('tools')) {
    return "Sibananda's competencies span Web Development (React, TypeScript, REST APIs), Workflow Automation (n8n, Google Sheets, ZeptoMail), Integrations (Cashfree, Razorpay, Shiprocket, Delhivery), and Analytics (GTM DataLayer, GA4, Search Console).";
  }
  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach')) {
    return "You can reach Sibananda directly via email at sibanandabera8114@gmail.com, or connect with him on LinkedIn at linkedin.com/in/shibananda-bera-4683052a1/.";
  }
  if (q.includes('experience') || q.includes('role') || q.includes('background') || q.includes('work')) {
    return "Sibananda focuses on technology, automation, e-commerce, and digital systems. His work centers on turning chaotic, spreadsheet-heavy business operations into structured, automated workflows across marketplaces, CRM, and integrations.";
  }
  if (q.includes('payment') || q.includes('cashfree') || q.includes('razorpay')) {
    return "Payment-related work includes Cashfree and Razorpay integrations, particularly around marketplace payment gateway setups and vendor settlement workflows.";
  }
  if (q.includes('logistics') || q.includes('shipping') || q.includes('courier')) {
    return "Logistics experience includes integrating courier APIs and webhooks with Shiprocket, Delhivery, and BlueDart for automated shipping label generation and order tracking.";
  }
  return "Sibananda builds digital systems that turn complex business operations into simple, automated workflows across web development, n8n automations, marketplace operations, and API integrations.";
}

function getFallbackSearch(query: string) {
  const q = query.toLowerCase();
  if (q.includes('payment') || q.includes('cashfree') || q.includes('razorpay')) {
    return {
      answer: "Payment-related work includes Cashfree and Razorpay, particularly around marketplace payment and settlement workflows.",
      highlightedProjects: ["Logistics & Payment Integrations", "IngrediaMart"],
      targetSection: "#work",
      buttonLabel: "View Payment Integration Project →",
      isFallback: true,
      mode: 'demo'
    };
  }
  if (q.includes('automation') || q.includes('n8n') || q.includes('email') || q.includes('lead')) {
    return {
      answer: "Automation work includes automated seller outreach connecting Google Sheets, AI personalization, ZeptoMail SMTP delivery, and CRM updates.",
      highlightedProjects: ["Seller Automation System", "Automation Lab"],
      targetSection: "#automation",
      buttonLabel: "Explore Automation Lab →",
      isFallback: true,
      mode: 'demo'
    };
  }
  if (q.includes('crm') || q.includes('telecaller') || q.includes('call')) {
    return {
      answer: "Sibananda built an operational Telecaller CRM managing lead pools, disposition logs, and daily caller KPIs.",
      highlightedProjects: ["Telecaller CRM"],
      targetSection: "#work",
      buttonLabel: "View Telecaller CRM System →",
      isFallback: true,
      mode: 'demo'
    };
  }
  if (q.includes('marketing') || q.includes('ads') || q.includes('seo') || q.includes('gtm') || q.includes('analytics')) {
    return {
      answer: "Marketing telemetry work includes connecting GTM DataLayer, GA4 conversion milestones, Google Ads, Meta Ads, and Search Console.",
      highlightedProjects: ["Digital Marketing Systems"],
      targetSection: "#work",
      buttonLabel: "View Marketing Systems →",
      isFallback: true,
      mode: 'demo'
    };
  }
  return {
    answer: "Sibananda's portfolio showcases practical projects in multi-vendor e-commerce, n8n workflow automations, CRM operations, and third-party API integrations.",
    highlightedProjects: ["IngrediaMart", "Seller Automation System"],
    targetSection: "#work",
    buttonLabel: "Explore Featured Projects →",
    isFallback: true,
    mode: 'demo'
  };
}

function getFallbackExplainer(projectKey: string) {
  return {
    title: "IngrediaMart Marketplace Architecture",
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
    involvement: "Sibananda managed the end-to-end platform operations, listing taxonomy structures, payment/courier integrations, and workflow coordinates.",
    isFallback: true,
    mode: 'demo'
  };
}

function getFallbackWorkflow(task: string) {
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
    mode: 'demo'
  };
}

function getFallbackConsultant(process: string) {
  return {
    processAnalyzed: process || "Manual follow-ups and spreadsheet management",
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
    mode: 'demo'
  };
}

// Vite middleware in dev; static file serving in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
