import { edges, layers, nodes } from '@/lib/architecture';

/**
 * Static SVG projection of the hero graph, used on mobile, for reduced motion,
 * without WebGL, and as the first paint before the 3D scene loads.
 */
const TILT = 0.32;
const YAW = 0.6;
const SCALE = 100;

const project = (x: number, y: number, z: number) => {
  const rx = x * Math.cos(YAW) - z * Math.sin(YAW);
  const rz = x * Math.sin(YAW) + z * Math.cos(YAW);
  return {
    x: rx * SCALE,
    y: -(y * Math.cos(TILT) - rz * Math.sin(TILT)) * SCALE,
    depth: rz,
  };
};

const points = nodes.map((n) => project(n.x, n.y, n.z));
const depthOpacity = (depth: number) => 0.45 + ((depth + 2) / 4) * 0.55;
const round = (v: number) => Math.round(v * 10) / 10;

export default function HeroFallback({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-240 -210 480 420"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="hero-node-glow">
          <stop offset="0%" stopColor="#8193ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8193ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {layers.map((layer) => (
        <ellipse
          key={layer.label}
          cx={0}
          cy={round(-layer.y * Math.cos(TILT) * SCALE)}
          rx={round(layer.radius * SCALE)}
          ry={round(layer.radius * Math.sin(TILT) * SCALE)}
          fill="none"
          stroke="#fff"
          strokeOpacity="0.08"
        />
      ))}
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={round(points[a].x)}
          y1={round(points[a].y)}
          x2={round(points[b].x)}
          y2={round(points[b].y)}
          stroke="#8193ff"
          strokeOpacity="0.25"
        />
      ))}
      {points.map((p, i) => (
        <g key={i} opacity={round(depthOpacity(p.depth))}>
          <circle
            cx={round(p.x)}
            cy={round(p.y)}
            r="18"
            fill="url(#hero-node-glow)"
          />
          <circle cx={round(p.x)} cy={round(p.y)} r="3.2" fill="#eef0ff" />
        </g>
      ))}
    </svg>
  );
}
