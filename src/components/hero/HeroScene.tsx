'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { downstream, edges, layers, nodes } from '@/lib/architecture';

const PACKET_COUNT = 16;
const MAX_ACTIVE_EDGES = 8;
const AUTO_STEP_SECONDS = 2.4;
const ACCENT = new THREE.Color('#8193ff');

/** Soft round sprite used for node halos and moving packets. */
function useGlowTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.25, 'rgba(255,255,255,0.55)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);
}

/** Next node when auto-walking: follow an edge down, or restart at the top. */
function nextAutoNode(current: number | null) {
  const options = current === null ? [] : downstream[current];
  if (options.length)
    return options[Math.floor(Math.random() * options.length)];
  const top = nodes.flatMap((n, i) => (n.layer === 0 ? [i] : []));
  return top[Math.floor(Math.random() * top.length)];
}

interface GraphProps {
  pointer: React.RefObject<{ x: number; y: number }>;
  label: React.RefObject<HTMLDivElement | null>;
  onActiveChange: (index: number | null) => void;
}

function Graph({ pointer, label, onActiveChange }: GraphProps) {
  const group = useRef<THREE.Group>(null);
  const packetGeometry = useRef<THREE.BufferGeometry>(null);
  const activeEdgeGeometry = useRef<THREE.BufferGeometry>(null);
  const activeHalo = useRef<THREE.Points>(null);
  const activeHaloGeometry = useRef<THREE.BufferGeometry>(null);
  const glow = useGlowTexture();

  const hovered = useRef<number | null>(null);
  const active = useRef<number | null>(null);
  const autoTimer = useRef(0);
  const spin = useRef(1);
  const projected = useMemo(() => new THREE.Vector3(), []);

  const nodePositions = useMemo(
    () => new Float32Array(nodes.flatMap((n) => [n.x, n.y, n.z])),
    []
  );

  const edgePositions = useMemo(
    () =>
      new Float32Array(
        edges.flatMap(([a, b]) => [
          nodes[a].x,
          nodes[a].y,
          nodes[a].z,
          nodes[b].x,
          nodes[b].y,
          nodes[b].z,
        ])
      ),
    []
  );

  const rings = useMemo(
    () =>
      layers.map((layer) => {
        const points = Array.from({ length: 97 }, (_, i) => {
          const a = (i / 96) * Math.PI * 2;
          return new THREE.Vector3(
            Math.cos(a) * layer.radius,
            layer.y,
            Math.sin(a) * layer.radius
          );
        });
        return new THREE.BufferGeometry().setFromPoints(points);
      }),
    []
  );

  // Invisible spheres give each node a comfortable hover target.
  const hitGeometry = useMemo(() => new THREE.SphereGeometry(0.2, 8, 8), []);
  const hitMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    []
  );

  // Each packet travels down one edge, then hops to a random edge.
  const packets = useMemo(
    () =>
      Array.from({ length: PACKET_COUNT }, () => ({
        edge: Math.floor(Math.random() * edges.length),
        t: Math.random(),
        speed: 0.18 + Math.random() * 0.22,
      })),
    []
  );
  const packetPositions = useMemo(() => new Float32Array(PACKET_COUNT * 3), []);
  const activeEdgePositions = useMemo(
    () => new Float32Array(MAX_ACTIVE_EDGES * 6),
    []
  );
  const activeHaloPosition = useMemo(() => new Float32Array(3), []);

  useEffect(
    () => () => {
      glow.dispose();
      rings.forEach((r) => r.dispose());
      hitGeometry.dispose();
      hitMaterial.dispose();
    },
    [glow, rings, hitGeometry, hitMaterial]
  );

  const setActive = (index: number | null) => {
    if (active.current === index) return;
    active.current = index;
    onActiveChange(index);

    // Rebuild the highlighted edges for the new node.
    const geometry = activeEdgeGeometry.current;
    if (!geometry) return;
    const connected =
      index === null
        ? []
        : edges
            .filter(([a, b]) => a === index || b === index)
            .slice(0, MAX_ACTIVE_EDGES);
    connected.forEach(([a, b], i) => {
      activeEdgePositions.set(
        [
          nodes[a].x,
          nodes[a].y,
          nodes[a].z,
          nodes[b].x,
          nodes[b].y,
          nodes[b].z,
        ],
        i * 6
      );
    });
    geometry.setDrawRange(0, connected.length * 2);
    geometry.getAttribute('position').needsUpdate = true;
  };

  useFrame((state, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const g = group.current;
    if (!g) return;

    // Slow the spin while someone is reading a label.
    const targetSpin = hovered.current === null ? 1 : 0.15;
    spin.current += (targetSpin - spin.current) * 0.06;
    g.rotation.y += delta * 0.07 * spin.current;
    const targetX = 0.32 + (pointer.current?.y ?? 0) * 0.12;
    const targetZ = (pointer.current?.x ?? 0) * -0.08;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
    g.rotation.z += (targetZ - g.rotation.z) * 0.04;

    // Hover wins; otherwise walk the graph on a timer.
    if (hovered.current !== null) {
      setActive(hovered.current);
      autoTimer.current = 0;
    } else {
      autoTimer.current += delta;
      if (active.current === null || autoTimer.current > AUTO_STEP_SECONDS) {
        autoTimer.current = 0;
        setActive(nextAutoNode(active.current));
      }
    }

    // Position the active halo and the DOM label over the active node.
    const index = active.current;
    const halo = activeHalo.current;
    if (halo) halo.visible = index !== null;
    if (index !== null) {
      const node = nodes[index];
      activeHaloPosition.set([node.x, node.y, node.z]);
      const haloAttr = activeHaloGeometry.current?.getAttribute('position');
      if (haloAttr) haloAttr.needsUpdate = true;
      if (halo) {
        const material = halo.material as THREE.PointsMaterial;
        material.size = 0.62 + Math.sin(state.clock.elapsedTime * 3) * 0.06;
      }

      const el = label.current;
      if (el) {
        projected.set(node.x, node.y, node.z);
        g.localToWorld(projected);
        projected.project(state.camera);
        const x = (projected.x * 0.5 + 0.5) * state.size.width;
        const y = (-projected.y * 0.5 + 0.5) * state.size.height;
        el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      }
    }

    packets.forEach((p, i) => {
      p.t += delta * p.speed;
      if (p.t >= 1) {
        p.t = 0;
        p.edge = Math.floor(Math.random() * edges.length);
      }
      const [a, b] = edges[p.edge];
      packetPositions[i * 3] = nodes[a].x + (nodes[b].x - nodes[a].x) * p.t;
      packetPositions[i * 3 + 1] = nodes[a].y + (nodes[b].y - nodes[a].y) * p.t;
      packetPositions[i * 3 + 2] = nodes[a].z + (nodes[b].z - nodes[a].z) * p.t;
    });
    const attr = packetGeometry.current?.getAttribute('position');
    if (attr) attr.needsUpdate = true;
  });

  return (
    <group ref={group} rotation={[0.32, 0, 0]}>
      {rings.map((geometry, i) => (
        <lineLoop key={i} geometry={geometry}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.08} />
        </lineLoop>
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[edgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={ACCENT} transparent opacity={0.22} />
      </lineSegments>

      {/* Edges of the active node */}
      <lineSegments>
        <bufferGeometry ref={activeEdgeGeometry}>
          <bufferAttribute
            attach="attributes-position"
            args={[activeEdgePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#c9d0ff" transparent opacity={0.85} />
      </lineSegments>

      {/* Node halos */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          map={glow}
          color={ACCENT}
          size={0.42}
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Node cores */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          map={glow}
          color="#eef0ff"
          size={0.13}
          transparent
          depthWrite={false}
        />
      </points>

      {/* Active node halo */}
      <points ref={activeHalo} visible={false}>
        <bufferGeometry ref={activeHaloGeometry}>
          <bufferAttribute
            attach="attributes-position"
            args={[activeHaloPosition, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          map={glow}
          color="#dfe4ff"
          size={0.62}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Data packets */}
      <points>
        <bufferGeometry ref={packetGeometry}>
          <bufferAttribute
            attach="attributes-position"
            args={[packetPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          map={glow}
          color="#ffffff"
          size={0.16}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Hover targets */}
      {nodes.map((node, i) => (
        <mesh
          key={node.label}
          position={[node.x, node.y, node.z]}
          geometry={hitGeometry}
          material={hitMaterial}
          onPointerOver={(e) => {
            e.stopPropagation();
            hovered.current = i;
          }}
          onPointerOut={() => {
            if (hovered.current === i) hovered.current = null;
          }}
        />
      ))}
    </group>
  );
}

interface HeroSceneProps {
  active: boolean;
  onReady: () => void;
  label: React.RefObject<HTMLDivElement | null>;
  onActiveChange: (index: number | null) => void;
}

export default function HeroScene({
  active,
  onReady,
  label,
  onActiveChange,
}: HeroSceneProps) {
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  return (
    <Canvas
      aria-hidden="true"
      frameloop={active ? 'always' : 'never'}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      onCreated={() => onReady()}
    >
      <Graph pointer={pointer} label={label} onActiveChange={onActiveChange} />
    </Canvas>
  );
}
