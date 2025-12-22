import { NextResponse } from 'next/server';
import { currentUser, describeAccess, getAccessState, modules, tierLabels } from '../../../lib/data';

export async function GET() {
  const payload = modules.map((module) => {
    const access = getAccessState(module, currentUser);
    return {
      slug: module.slug,
      title: module.title,
      description: module.description,
      requiredTier: module.requiredTier,
      requiredTierLabel: tierLabels[module.requiredTier],
      featureFlag: module.featureFlag ?? null,
      metrics: module.metrics,
      links: module.links,
      highlights: module.highlights,
      access: {
        ...access,
        message: describeAccess(module, currentUser),
      },
    };
  });

  return NextResponse.json({ modules: payload });
}
