'use client';

import { m } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article';
  /** Adds the cursor spotlight effect (see components/layout/Spotlight). */
  spotlight?: boolean;
}

/** Fades content up once when it scrolls into view. Honours reduced motion via MotionProvider. */
export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = 'div',
  spotlight = false,
}: RevealProps) {
  const Component = m[as];
  return (
    <Component
      className={className}
      data-spotlight={spotlight || undefined}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
