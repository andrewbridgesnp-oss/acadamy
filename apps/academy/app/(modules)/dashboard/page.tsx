import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { ModuleSection } from '../../../components/ModuleSection';
import { StatCard } from '../../../components/StatCard';
import { getModuleBySlug } from '../../../lib/data';

const module = getModuleBySlug('dashboard');

export default function DashboardPage() {
  if (!module) return null;

  const actions = [
    { label: 'Entity formation', owner: 'Ops', status: 'In progress' },
    { label: 'Bank connections', owner: 'Finance', status: 'Queued' },
    { label: 'Automation QA', owner: 'RevOps', status: 'Completed' },
  ];

  const auditTrail = [
    { ts: 'Today 09:15', event: 'Finance module enabled', actor: 'System' },
    { ts: 'Yesterday 18:02', event: 'Automation runbook updated', actor: 'Kayden' },
    { ts: 'Yesterday 10:44', event: 'Compliance policy uploaded', actor: 'Founder' },
  ];

  return (
    <ModuleLayout module={module}>
      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <ModuleSection title="Recent actions" description="Operational feed to plug into activity logs.">
        <table className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {actions.map((item) => (
              <tr key={item.label}>
                <td>{item.label}</td>
                <td>{item.owner}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>

      <ModuleSection title="Audit log" description="Timestamps and actors for compliance review.">
        <table className="table">
          <thead>
            <tr>
              <th>When</th>
              <th>Event</th>
              <th>Actor</th>
            </tr>
          </thead>
          <tbody>
            {auditTrail.map((item) => (
              <tr key={item.ts}>
                <td>{item.ts}</td>
                <td>{item.event}</td>
                <td>{item.actor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>
    </ModuleLayout>
  );
}
