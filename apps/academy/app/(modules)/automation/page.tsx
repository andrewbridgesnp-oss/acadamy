import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { ModuleSection } from '../../../components/ModuleSection';
import { StatCard } from '../../../components/StatCard';
import { getModuleBySlug } from '../../../lib/data';

const module = getModuleBySlug('automation');

export default function AutomationPage() {
  if (!module) return null;

  const workflows = [
    { name: 'Revenue handoff', status: 'Draft', approvals: 'Security, Finance' },
    { name: 'KYC refresh', status: 'Ready to test', approvals: 'Legal' },
    { name: 'Founders digest', status: 'Scheduled', approvals: 'Ops' },
  ];

  const audit = [
    { time: 'Today 11:21', detail: 'n8n flag evaluated: false', actor: 'Platform' },
    { time: 'Today 10:02', detail: 'Workflow "KYC refresh" edited', actor: 'Kayden' },
    { time: 'Yesterday 19:30', detail: 'Rollback plan attached to "Revenue handoff"', actor: 'Ops' },
  ];

  return (
    <ModuleLayout module={module}>
      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <ModuleSection title="n8n workflows" description="Feature-flag gated orchestrations with approvals.">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Approvals</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((wf) => (
              <tr key={wf.name}>
                <td>{wf.name}</td>
                <td>{wf.status}</td>
                <td>{wf.approvals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>

      <ModuleSection title="Execution audit" description="Placeholder log for run history and rollbacks.">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Actor</th>
            </tr>
          </thead>
          <tbody>
            {audit.map((entry) => (
              <tr key={entry.time}>
                <td>{entry.time}</td>
                <td>{entry.detail}</td>
                <td>{entry.actor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>
    </ModuleLayout>
  );
}
