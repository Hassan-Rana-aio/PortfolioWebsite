'use client';

import { useEffect } from 'react';

/**
 * Feeds the cursor position into any `[data-spotlight]` card under the pointer
 * as --mx / --my, which globals.scss turns into a soft glow and border light.
 * One passive listener for the whole page; skipped on touch devices.
 */
export default function Spotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return undefined;
    }
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const target = (e.target as Element | null)?.closest<HTMLElement>(
          '[data-spotlight]'
        );
        if (!target) return;
        const rect = target.getBoundingClientRect();
        target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        target.style.setProperty('--my', `${e.clientY - rect.top}px`);
      });
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onMove);
    };
  }, []);

  return null;
}
