import React from 'react';
import '../app/globals.css';

type ModuleSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function ModuleSection({ title, description, children }: ModuleSectionProps) {
  return (
    <section className="module-section">
      <div className="section-header">
        <h2>{title}</h2>
        {description && <p className="muted">{description}</p>}
      </div>
      <div>{children}</div>
    </section>
  );
}
