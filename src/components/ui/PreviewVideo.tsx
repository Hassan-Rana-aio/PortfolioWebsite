'use client';

import { useEffect, useRef, useState } from 'react';
import type { ProjectVideo } from '@/content/types';
import styles from './ProjectVisual.module.scss';

/**
 * A short silent loop for project cards. It only downloads and plays while the
 * card is on screen, and stays a still poster for reduced-motion and Save-Data users.
 */
export default function PreviewVideo({
  video,
  label,
}: {
  video: ProjectVideo;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    setAllowed(!reduced && nav.connection?.saveData !== true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!allowed || !el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {
            // Autoplay blocked: the poster stays, which is fine.
          });
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [allowed]);

  return (
    <video
      ref={ref}
      className={styles.image}
      poster={video.poster}
      width={video.width}
      height={video.height}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    >
      {allowed && <source src={video.preview} type="video/mp4" />}
    </video>
  );
}
