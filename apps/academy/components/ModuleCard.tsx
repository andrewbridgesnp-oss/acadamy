import React from 'react';
import Link from 'next/link';
import '../app/globals.css';
import { ModuleRegistryEntry, currentUser, describeAccess, getAccessState, tierLabels } from '../lib/data';
import { StatCard } from './StatCard';

type ModuleCardProps = {
  module: ModuleRegistryEntry;
};

export function ModuleCard({ module }: ModuleCardProps) {
  const access = getAccessState(module, currentUser);
  return (
    <article className="card module-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">{tierLabels[module.requiredTier]}</p>
          <h3>{module.title}</h3>
          <p className="muted">{module.description}</p>
        </div>
        <Link className="primary-button" href={`/${module.slug}`} aria-disabled={access.locked}>
          {access.locked ? 'View locked state' : 'Open module'}
        </Link>
      </div>

      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <div className="highlights">
        {module.highlights.map((item) => (
          <span className="pill" key={item}>
            {item}
          </span>
        ))}
      </div>

      <div className="module-footer">
        <p className="muted">{describeAccess(module, currentUser)}</p>
        <div className="links">
          {module.links.map((link) => (
            <Link key={link.label} href={link.href} className="text-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
