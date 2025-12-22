import React from 'react';
import Link from 'next/link';
import '../app/globals.css';
import { ModuleRegistryEntry, currentUser, describeAccess, getAccessState, tierLabels } from '../lib/data';

type ModuleLayoutProps = {
  module: ModuleRegistryEntry;
  children: React.ReactNode;
};

export function ModuleLayout({ module, children }: ModuleLayoutProps) {
  const access = getAccessState(module, currentUser);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">{tierLabels[module.requiredTier]} module</p>
          <h1>{module.title}</h1>
          <p className="muted">{module.description}</p>
          {module.featureFlag && <p className="muted">Feature flag: {module.featureFlag}</p>}
        </div>
        <Link className="ghost-button" href="/">
          ← Back to modules
        </Link>
      </div>

      {access.locked && (
        <div className="locked-banner">
          <strong>Locked.</strong> {describeAccess(module, currentUser)} — upgrade tier or enable required flags to
          unlock.
        </div>
      )}

      <div className={access.locked ? 'locked-surface' : ''}>{children}</div>
    </div>
  );
}
