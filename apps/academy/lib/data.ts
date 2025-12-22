export type Tier = 'starter' | 'pro' | 'enterprise';

export type ModuleRegistryEntry = {
  slug: string;
  title: string;
  description: string;
  requiredTier: Tier;
  featureFlag?: 'n8n';
  metrics: { label: string; value: string; helper?: string }[];
  links: { label: string; href: string; description?: string }[];
  highlights: string[];
};

export const tierOrder: Record<Tier, number> = {
  starter: 0,
  pro: 1,
  enterprise: 2,
};

export const tierLabels: Record<Tier, string> = {
  starter: 'Starter',
  pro: 'Pro',
  enterprise: 'Enterprise',
};

export const currentUser = {
  name: 'Intake Founder',
  tier: 'starter' as Tier,
  flags: {
    n8n: false,
  },
};

export const modules: ModuleRegistryEntry[] = [
  {
    slug: 'dashboard',
    title: 'Dashboard',
    description:
      'Unified view of portfolio status, speed to deployment, and operational health for each workspace.',
    requiredTier: 'starter',
    metrics: [
      { label: 'Active modules', value: '6', helper: 'Tracked in last 24h' },
      { label: 'Average completion', value: '72%', helper: 'Across onboarding steps' },
      { label: 'Automation uptime', value: '99.1%', helper: 'Tracked weekly' },
    ],
    links: [
      { label: 'View audit timeline', href: '/dashboard#audit', description: 'Ops audit and approvals' },
      { label: 'Download report', href: '/dashboard#reports', description: 'Export PDF & CSV' },
    ],
    highlights: [
      'Executive summary blocks with audit-friendly timestamps',
      'Dynamic metrics wiring for activity, automation, and revenue proxies',
      'Workspace shortcuts to every enabled module',
    ],
  },
  {
    slug: 'business',
    title: 'Business',
    description: 'Entity, compliance, and operating procedures to keep the business formation on track.',
    requiredTier: 'starter',
    metrics: [
      { label: 'Entity status', value: 'Pending approval', helper: 'Secretary of State sync' },
      { label: 'Compliance tasks', value: '3 open', helper: 'Annual + monthly filings' },
      { label: 'Docs synced', value: '12', helper: 'Policies, EIN, banking letters' },
    ],
    links: [
      { label: 'Formation checklist', href: '/business#checklist', description: 'LLC/Corp readiness' },
      { label: 'Upload documents', href: '/business#documents', description: 'State + IRS proofs' },
    ],
    highlights: [
      'Checklist-style onboarding with compliance gates',
      'Document vault ready for KYC/AML uploads',
      'Task feed with ownership, due dates, and reminders',
    ],
  },
  {
    slug: 'finance',
    title: 'Finance',
    description: 'Capital stack snapshots, cash flow signals, and funding tasks in one place.',
    requiredTier: 'pro',
    metrics: [
      { label: 'Runway', value: '8.2 months', helper: 'Based on current burn' },
      { label: 'MRR trend', value: '+12% MoM', helper: 'Weighted by last 3 months' },
      { label: 'Books health', value: 'Needs review', helper: 'Bank rules not yet mapped' },
    ],
    links: [
      { label: 'Connect accounts', href: '/finance#connections', description: 'Bank + PSP connectors' },
      { label: 'Export statements', href: '/finance#reports', description: 'CSV + PDF for CPA' },
    ],
    highlights: [
      'Receivables and burn placeholders ready for API feeds',
      'Bank-rule playbooks mapped to categories and alerts',
      'Funding readiness steps with document prompts',
    ],
  },
  {
    slug: 'automation',
    title: 'Automation',
    description: 'Operational automations orchestrated through n8n with governance and approvals.',
    requiredTier: 'enterprise',
    featureFlag: 'n8n',
    metrics: [
      { label: 'Active workflows', value: '4', helper: 'n8n scenario stubs ready' },
      { label: 'Recent runs', value: '21', helper: 'Sandbox executions this week' },
      { label: 'Approvals', value: '2 pending', helper: 'Awaiting compliance signoff' },
    ],
    links: [
      { label: 'n8n cockpit', href: '/automation#n8n', description: 'Flag-gated orchestrator' },
      { label: 'Automation audit log', href: '/automation#audit', description: 'View signed events' },
    ],
    highlights: [
      'n8n feature flag controls access to workflow orchestration',
      'Execution trail placeholders for audit-friendly logs',
      'Runbooks and rollbacks mapped for every scenario',
    ],
  },
  {
    slug: 'ai-academy-lite',
    title: 'AI Academy Lite',
    description: 'Learning tracks, quizzes, and certification previews to teach before execution.',
    requiredTier: 'starter',
    metrics: [
      { label: 'Active learners', value: '38', helper: 'Across all cohorts' },
      { label: 'Quiz pass rate', value: '84%', helper: 'Last 30 days' },
      { label: 'Tracks live', value: '6', helper: 'Foundations + automation primers' },
    ],
    links: [
      { label: 'Start a track', href: '/ai-academy-lite#tracks', description: 'Kick off a lesson plan' },
      { label: 'Review quizzes', href: '/ai-academy-lite#quizzes', description: 'Assess comprehension' },
    ],
    highlights: [
      'Modular lessons with checkpoints for certification readiness',
      'Quiz scaffolding to validate understanding before automation',
      'Progress tracking aligned to product phases',
    ],
  },
  {
    slug: 'help-kayden',
    title: 'Help / Kayden',
    description: 'Concierge-style support, guidance, and escalations to unblock operators quickly.',
    requiredTier: 'starter',
    metrics: [
      { label: 'Open tickets', value: '5', helper: 'Priority sorted' },
      { label: 'Avg response', value: '12m', helper: 'SLA placeholder' },
      { label: 'Playbooks ready', value: '9', helper: 'Templates for common issues' },
    ],
    links: [
      { label: 'Contact Kayden', href: '/help-kayden#contact', description: 'High-touch support lane' },
      { label: 'Review playbooks', href: '/help-kayden#playbooks', description: 'Self-serve workflows' },
    ],
    highlights: [
      'SLA and severity placeholders for rapid triage',
      'Playbook-driven answers with links to modules',
      'Concierge lane ready for enterprise escalations',
    ],
  },
];

export function getModuleBySlug(slug: string): ModuleRegistryEntry | undefined {
  return modules.find((module) => module.slug === slug);
}

export function getAccessState(
  module: ModuleRegistryEntry,
  profile: typeof currentUser = currentUser,
): { locked: boolean; reasons: string[] } {
  const reasons: string[] = [];
  if (tierOrder[profile.tier] < tierOrder[module.requiredTier]) {
    reasons.push(`${tierLabels[module.requiredTier]} tier required`);
  }
  if (module.featureFlag && !profile.flags[module.featureFlag]) {
    reasons.push(`${module.featureFlag} flag disabled`);
  }

  return { locked: reasons.length > 0, reasons };
}

export function describeAccess(module: ModuleRegistryEntry, profile: typeof currentUser = currentUser): string {
  const access = getAccessState(module, profile);
  if (!access.locked) return 'Ready for your workspace';
  return `Locked: ${access.reasons.join(' • ')}`;
}
