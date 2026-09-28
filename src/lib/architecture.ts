/**
 * Shared geometry for the hero "product architecture" graph.
 * Four stacked rings (interface → API → services → data) with nodes on each
 * ring and edges linking every node to its nearest neighbours one layer down.
 * Each node is a technology or product area from real work (see content/skills.ts).
 * Used by both the WebGL scene and the static SVG fallback so they match.
 */
export const layers = [
  {
    label: 'Interface',
    y: 1.1,
    radius: 1.35,
    items: ['React', 'Next.js', 'TypeScript', 'SCSS', 'Tailwind CSS'],
  },
  {
    label: 'API',
    y: 0.37,
    radius: 1.85,
    items: [
      'Node.js',
      'Express.js',
      'NestJS',
      'REST APIs',
      'WebSockets',
      'Stripe',
      'OpenAI API',
    ],
  },
  {
    label: 'Services',
    y: -0.37,
    radius: 1.85,
    items: [
      'Website publishing',
      'Custom domains',
      'Trade engine',
      'Signal feed',
      'Candidate search',
      'SEO & analytics',
      'Chrome extension',
    ],
  },
  {
    label: 'Data',
    y: -1.1,
    radius: 1.3,
    items: ['PostgreSQL', 'MongoDB', 'SQLite', 'Caching', 'Live market data'],
  },
];

export interface GraphNode {
  layer: number;
  label: string;
  angle: number;
  x: number;
  y: number;
  z: number;
}

export const nodes: GraphNode[] = layers.flatMap((layer, li) =>
  layer.items.map((label, i) => {
    const angle = (i / layer.items.length) * Math.PI * 2 + li * 0.55;
    return {
      layer: li,
      label,
      angle,
      x: Math.cos(angle) * layer.radius,
      y: layer.y,
      z: Math.sin(angle) * layer.radius,
    };
  })
);

const angularDistance = (a: number, b: number) => {
  const d = Math.abs(a - b) % (Math.PI * 2);
  return d > Math.PI ? Math.PI * 2 - d : d;
};

/** Pairs of node indices. */
export const edges: [number, number][] = nodes.flatMap((node, index) => {
  const next = nodes
    .map((n, i) => ({ n, i }))
    .filter(({ n }) => n.layer === node.layer + 1)
    .sort(
      (a, b) =>
        angularDistance(a.n.angle, node.angle) -
        angularDistance(b.n.angle, node.angle)
    )
    .slice(0, 2);
  return next.map(({ i }) => [index, i] as [number, number]);
});

/** Downstream neighbours of each node, used to walk the graph like a request. */
export const downstream: number[][] = nodes.map((_, i) =>
  edges.filter(([a]) => a === i).map(([, b]) => b)
);
