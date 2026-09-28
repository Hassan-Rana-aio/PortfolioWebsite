'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { layers, nodes } from '@/lib/architecture';
import HeroFallback from './HeroFallback';
import styles from './Hero.module.scss';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

/** Decide once, on the client, whether this device should get the WebGL scene. */
function canRender3D() {
  const wide = window.matchMedia('(min-width: 1024px)').matches;
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean };
    deviceMemory?: number;
  };
  const saveData = nav.connection?.saveData === true;
  const lowMemory =
    typeof nav.deviceMemory === 'number' && nav.deviceMemory < 4;
  if (!wide || reducedMotion || saveData || lowMemory) return false;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const activeLayer = activeNode === null ? null : nodes[activeNode].layer;

  useEffect(() => {
    if (!canRender3D()) return undefined;
    // Wait until the main thread is idle so the 3D bundle never competes with first paint.
    const idle =
      window.requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 600));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(() => setEnabled(true));
    return () => cancel(handle);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.visual}>
      <div className={styles.glow} aria-hidden="true" />
      <HeroFallback
        className={`${styles.fallback} ${ready ? styles.hidden : ''}`}
      />
      {enabled && (
        <div className={`${styles.canvas} ${ready ? styles.shown : ''}`}>
          <HeroScene
            active={visible}
            onReady={() => setReady(true)}
            label={labelRef}
            onActiveChange={setActiveNode}
          />
          <div
            ref={labelRef}
            className={`${styles.nodeLabel} ${activeNode !== null ? styles.nodeLabelOn : ''}`}
            aria-hidden="true"
          >
            {activeNode !== null && (
              <span key={activeNode} className={styles.nodeLabelInner}>
                <small>{layers[nodes[activeNode].layer].label}</small>
                {nodes[activeNode].label}
              </span>
            )}
          </div>
        </div>
      )}
      <ol className={styles.legend} aria-label="Layers I work across">
        {layers.map((layer, i) => (
          <li
            key={layer.label}
            className={activeLayer === i ? styles.legendActive : undefined}
          >
            <span>0{i + 1}</span>
            {layer.label}
          </li>
        ))}
      </ol>
    </div>
  );
}
