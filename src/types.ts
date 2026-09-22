export interface SkillItem {
  name: string;
  category: 'Development' | 'Automation' | 'E-commerce' | 'Integrations' | 'Marketing Technology' | 'Data & Business';
  description: string;
  proficiency: string; // e.g. "Production Experience", "Workflow Design", "Deep Integration"
  icon: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  architecture: string[];
  areas: string[];
  technologies: string[];
  mockupType: 'marketplace' | 'automation-flow' | 'crm-dashboard' | 'ecommerce-ops' | 'logistics-payment' | 'marketing-funnel';
  highlights: string[];
}

export interface AutomationWorkflow {
  id: string;
  title: string;
  category: string;
  description: string;
  nodes: {
    id: string;
    label: string;
    sublabel: string;
    type: 'trigger' | 'process' | 'ai' | 'integration' | 'action' | 'output';
    status: 'idle' | 'running' | 'completed';
    payloadSample?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  category: 'Technology & E-commerce' | 'Automation & CRM' | 'Digital Marketing Systems' | 'Business Operations' | 'API & Platform Integrations';
  role: string;
  project: string;
  period: string;
  technologies: string[];
  builtAndManaged: string[];
  outcome: string;
}
