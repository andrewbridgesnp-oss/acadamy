import React from 'react';
import { ModuleLayout } from '../../../components/ModuleLayout';
import { ModuleSection } from '../../../components/ModuleSection';
import { StatCard } from '../../../components/StatCard';
import { getModuleBySlug } from '../../../lib/data';

const module = getModuleBySlug('ai-academy-lite');

export default function AiAcademyLitePage() {
  if (!module) return null;

  const tracks = [
    { name: 'Foundations', duration: '45 mins', status: 'Live' },
    { name: 'Automation readiness', duration: '30 mins', status: 'Live' },
    { name: 'Security & data handling', duration: '25 mins', status: 'Draft' },
  ];

  const quizzes = [
    { name: 'Prompting basics', completion: '82%', attempts: 140 },
    { name: 'Workflow design', completion: '74%', attempts: 88 },
    { name: 'Compliance guardrails', completion: '65%', attempts: 60 },
  ];

  return (
    <ModuleLayout module={module}>
      <div className="stat-grid">
        {module.metrics.map((metric) => (
          <StatCard key={metric.label} label={metric.label} value={metric.value} helper={metric.helper} />
        ))}
      </div>

      <ModuleSection title="Tracks" description="Learning plans to complete before automation is enabled.">
        <table className="table">
          <thead>
            <tr>
              <th>Track</th>
              <th>Duration</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <tr key={track.name}>
                <td>{track.name}</td>
                <td>{track.duration}</td>
                <td>{track.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>

      <ModuleSection title="Quiz performance" description="Swap with LXP analytics when live.">
        <table className="table">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Completion</th>
              <th>Attempts</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz.name}>
                <td>{quiz.name}</td>
                <td>{quiz.completion}</td>
                <td>{quiz.attempts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ModuleSection>
    </ModuleLayout>
  );
}
