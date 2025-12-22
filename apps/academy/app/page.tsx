import React from 'react';
import { modules } from '../lib/data';
import { ModuleCard } from '../components/ModuleCard';

export default function ModulesHomePage() {
  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Synckaiden Academy</p>
          <h1>MVP modules</h1>
          <p className="muted">Use the stubs below to wire live data, automation, and access controls.</p>
        </div>
      </div>

      <div className="grid-two">
        {modules.map((module) => (
          <ModuleCard key={module.slug} module={module} />
        ))}
      </div>
    </div>
  );
}
