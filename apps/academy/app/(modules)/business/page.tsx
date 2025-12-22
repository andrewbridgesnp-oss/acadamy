import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { ModuleSection } from '../../../components/ModuleSection';
import { StatCard } from '../../../components/StatCard';
import { getModuleBySlug } from '../../../lib/data';

const module = getModuleBySlug('business');

export default function BusinessPage() {
  if (!module) return null;

  const checklist = [
    { item: 'Name availability + EIN', owner: 'Founder', status: 'Ready' },
    { item: 'Operating agreement', owner: 'Legal', status: 'Drafting' },
    { item: 'Registered agent', owner: 'Ops', status: 'Assigned' },
  ];

  const documents = [
    { name: 'Articles of organization', date: 'Feb 12', status: 'Pending signature' },
    { name: 'W9 + EIN letter', date: 'Feb 10', status: 'Uploaded' },
    { name: 'Policies (data + security)', date: 'Feb 06', status: 'Needs review' },
  ];

  return (
    <ModuleLayout module={module}>
      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <ModuleSection title="Formation checklist" description="Tasks and ownership before filings go out.">
        <table className="table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {checklist.map((item) => (
              <tr key={item.item}>
                <td>{item.item}</td>
                <td>{item.owner}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>

      <ModuleSection title="Documents" description="Vault placeholders for filings and approvals.">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last updated</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.name}>
                <td>{doc.name}</td>
                <td>{doc.date}</td>
                <td>{doc.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>
    </ModuleLayout>
  );
}
