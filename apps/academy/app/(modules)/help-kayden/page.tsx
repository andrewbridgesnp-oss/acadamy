import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { ModuleSection } from '../../../components/ModuleSection';
import { StatCard } from '../../../components/StatCard';
import { getModuleBySlug } from '../../../lib/data';

const module = getModuleBySlug('help-kayden');

export default function HelpKaydenPage() {
  if (!module) return null;

  const tickets = [
    { id: '#218', topic: 'Bank feed failing', status: 'Escalated', owner: 'Kayden' },
    { id: '#217', topic: 'Automation QA', status: 'In progress', owner: 'Ops' },
    { id: '#216', topic: 'Training request', status: 'New', owner: 'Support' },
  ];

  const playbooks = [
    'How to capture audit notes for every workflow run',
    'Escalation ladder for finance and compliance blockers',
    'Safe prompts checklist for regulated industries',
  ];

  return (
    <ModuleLayout module={module}>
      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <ModuleSection title="Recent tickets" description="Concierge support feed for operators.">
        <table className="table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Topic</th>
              <th>Status</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.topic}</td>
                <td>{ticket.status}</td>
                <td>{ticket.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>

      <ModuleSection title="Playbooks" description="Link back to workflows and knowledge base.">
        <ul className="list">
          {playbooks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ModuleSection>
    </ModuleLayout>
  );
}
