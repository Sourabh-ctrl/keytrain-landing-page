export type Service = {
  slug: string
  title: string
  description: string
  outcome: string
  category: string
  features: string[]
}

export type ServiceCategory = {
  category: string
  items: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: 'AI & Automation',
    items: [
      {
        slug: 'ai-agents',
        title: 'AI Agents',
        description: 'Autonomous assistants that optimize workflows and reduce manual follow-up.',
        outcome: 'Reduce manual tasks by up to 60%',
        category: 'AI & Automation',
        features: ['Smart workflow automation', 'Context-aware assistants', 'Ready for production'],
      },
      {
        slug: 'custom-ai-solutions',
        title: 'Custom AI Solutions',
        description: 'Production-ready AI systems tailored to business-critical use cases.',
        outcome: 'Faster decisioning with lower error rates',
        category: 'AI & Automation',
        features: ['Custom model development', 'API-ready delivery', 'Enterprise-grade monitoring'],
      },
      {
        slug: 'computer-vision',
        title: 'Computer Vision',
        description: 'Image and video analysis pipelines for automation and quality control.',
        outcome: 'Improve accuracy to 90%+',
        category: 'AI & Automation',
        features: ['Edge and cloud deployment', 'Real-time alerts', 'Integration with dashboards'],
      },
      {
        slug: 'nlp-systems',
        title: 'NLP Systems',
        description: 'Text understanding solutions for document automation and insights.',
        outcome: 'Automate document processing',
        category: 'AI & Automation',
        features: ['Entity extraction', 'Semantic search', 'Compliance-ready workflows'],
      },
      {
        slug: 'workflow-automation',
        title: 'Workflow Automation',
        description: 'Integrated automations and bots that reduce handoffs and accelerate delivery.',
        outcome: 'Save hours per week per user',
        category: 'AI & Automation',
        features: ['API orchestration', 'Robotic process automation', 'Operational dashboards'],
      },
      {
        slug: 'chatbots',
        title: 'Chatbots',
        description: 'Conversational interfaces for customers, partners, and internal teams.',
        outcome: 'Cut support costs and improve SLAs',
        category: 'AI & Automation',
        features: ['Omni-channel chat', 'Intent routing', 'Low-latency responses'],
      },
    ],
  },
  {
    category: 'Software Development',
    items: [
      {
        slug: 'web-development',
        title: 'Web Development',
        description: 'Modern web applications built for performance, usability, and scale.',
        outcome: 'Faster time-to-market',
        category: 'Software Development',
        features: ['Responsive interfaces', 'API-driven architecture', 'Performance optimization'],
      },
      {
        slug: 'saas-development',
        title: 'SaaS Development',
        description: 'Scalable multi-tenant platforms engineered for growth and retention.',
        outcome: 'Handle rapid user growth',
        category: 'Software Development',
        features: ['Subscription workflows', 'Usage-based scaling', 'Analytics and reporting'],
      },
      {
        slug: 'custom-software',
        title: 'Custom Software',
        description: 'Tailored solutions built around your unique processes and business rules.',
        outcome: 'Align tools with revenue workflows',
        category: 'Software Development',
        features: ['Custom product design', 'Robust integration', 'Managed delivery'],
      },
      {
        slug: 'enterprise-apps',
        title: 'Enterprise Apps',
        description: 'Robust internal systems with security, audit, and compliance baked in.',
        outcome: 'Enterprise-ready stability',
        category: 'Software Development',
        features: ['Role-based access', 'Data governance', 'High-availability architecture'],
      },
      {
        slug: 'api-integrations',
        title: 'API Integrations',
        description: 'Reliable, documented APIs for internal teams and external partners.',
        outcome: 'Faster partner integrations',
        category: 'Software Development',
        features: ['OpenAPI design', 'Secure authentication', 'Monitoring and docs'],
      },
      {
        slug: 'cloud-solutions',
        title: 'Cloud Solutions',
        description: 'Design and migration services for cloud-native infrastructure and cost efficiency.',
        outcome: 'Improve uptime and cost efficiency',
        category: 'Software Development',
        features: ['Cloud strategy', 'Migration plans', 'Autoscaling architecture'],
      },
    ],
  },
  {
    category: 'IT & Digital Solutions',
    items: [
      {
        slug: 'it-consulting',
        title: 'IT Consulting',
        description: 'Roadmaps and technical strategy aligned to your business priorities.',
        outcome: 'Clear, actionable plans',
        category: 'IT & Digital Solutions',
        features: ['IT due diligence', 'Architecture reviews', 'Vendor evaluations'],
      },
      {
        slug: 'devops',
        title: 'DevOps',
        description: 'CI/CD, pipelines, and infrastructure automation you can trust.',
        outcome: 'Deployments you can trust',
        category: 'IT & Digital Solutions',
        features: ['Pipeline automation', 'Infrastructure-as-code', 'Monitoring and alerts'],
      },
      {
        slug: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Risk assessments and security hardening for modern applications.',
        outcome: 'Reduce security incidents',
        category: 'IT & Digital Solutions',
        features: ['Security reviews', 'Threat modeling', 'Secure deployment patterns'],
      },
      {
        slug: 'digital-transformation',
        title: 'Digital Transformation',
        description: 'Modernize people, process, and technology to accelerate outcomes.',
        outcome: 'Faster product iterations',
        category: 'IT & Digital Solutions',
        features: ['Process automation', 'Platform consolidation', 'Roadmap execution'],
      },
      {
        slug: 'infrastructure',
        title: 'Infrastructure',
        description: 'Scalable networks, observability, and managed cloud platforms.',
        outcome: 'Reliable system performance',
        category: 'IT & Digital Solutions',
        features: ['Architecture design', 'Managed infrastructure', 'Disaster recovery'],
      },
      {
        slug: 'technical-support',
        title: 'Technical Support',
        description: 'On-call and managed support options for production reliability.',
        outcome: 'Reduce operational load',
        category: 'IT & Digital Solutions',
        features: ['Support SLAs', 'Incident response', 'Platform maintenance'],
      },
    ],
  },
]

export type CaseStudy = {
  slug: string
  projectType: string
  tag: string
  challenge: string
  solution: string
  outcome: string
  summary: string
  metrics: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'saas-architecture',
    projectType: 'SaaS Architecture',
    tag: 'SaaS',
    challenge: 'Scaling product to 10k+ customers with frequent downtime.',
    solution: 'Re-architected to microservices, added autoscaling and observability.',
    outcome: '3× higher concurrency and 40% reduction in infrastructure cost.',
    summary: 'Delivered a reliable SaaS foundation with performance improvements and operational visibility.',
    metrics: ['40% infrastructure cost reduction', '3× higher concurrency', '99.9% production uptime'],
  },
  {
    slug: 'ai-automation',
    projectType: 'AI Automation',
    tag: 'Fintech',
    challenge: 'Manual reconciliation consuming engineering time.',
    solution: 'Built automated extraction and matching using NLP and rules.',
    outcome: 'Reduced manual workload by 40% and sped processing 3×.',
    summary: 'Automated a mission-critical financial workflow to reduce headcount and improve throughput.',
    metrics: ['40% reduction in manual effort', '3× faster processing', '95%+ accuracy'],
  },
  {
    slug: 'computer-vision',
    projectType: 'Computer Vision',
    tag: 'Logistics',
    challenge: 'Error-prone quality checks on the packing line.',
    solution: 'Deployed an edge CV model with real-time alerts and dashboard.',
    outcome: 'Accuracy improved to 92% and defects cut in half.',
    summary: 'Implemented a vision-driven inspection workflow for better quality and faster decision-making.',
    metrics: ['92% inspection accuracy', '50% fewer defects', 'Improved throughput'],
  },
]

export const allServices = serviceCategories.flatMap((category) => category.items)

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug)
}

export function getAllServiceSlugs() {
  return allServices.map((service) => ({ slug: service.slug }))
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}

export function getAllCaseStudySlugs() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
}
