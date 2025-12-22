import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { ModuleSection } from '../../../components/ModuleSection';
import { StatCard } from '../../../components/StatCard';
import { getModuleBySlug } from '../../../lib/data';

const module = getModuleBySlug('finance');

export default function FinancePage() {
  if (!module) return null;

  const accounts = [
    { account: 'Primary checking', status: 'Connected', owner: 'Ops' },
    { account: 'Stripe revenue', status: 'Pending auth', owner: 'Finance' },
    { account: 'Payroll', status: 'Mapping rules', owner: 'People Ops' },
  ];

  const tasks = [
    'Upload last 3 statements for bookkeeping baseline',
    'Define alert thresholds for burn and negative cash flow',
    'Prep funding data room (cap table, traction, forecasts)',
  ];

  return (
    <ModuleLayout module={module}>
      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <ModuleSection title="Connections" description="Banking and PSP stubs for future integrations.">
        <table className="table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Status</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((item) => (
              <tr key={item.account}>
                <td>{item.account}</td>
                <td>{item.status}</td>
                <td>{item.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>

      <ModuleSection title="Next steps" description="Funding and controls to align with Pro/Enterprise tiers.">
        <ul className="list">
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </ModuleSection>
    </ModuleLayout>
  );
}
