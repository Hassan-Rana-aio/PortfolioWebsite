import { Play } from 'lucide-react';
import Image from 'next/image';
import Mockup from '@/components/mockups/Mockup';
import type { Project } from '@/content/types';
import PreviewVideo from './PreviewVideo';
import styles from './ProjectVisual.module.scss';

interface ProjectVisualProps {
  cover: Project['cover'];
  sizes: string;
  priority?: boolean;
  /** When set, the card loops a silent preview of the product video. */
  video?: Project['video'];
}

/**
 * Shows a project's cover: a looping product video, a real screenshot in a
 * browser frame, or a code-drawn mockup.
 */
export default function ProjectVisual({
  cover,
  sizes,
  priority,
  video,
}: ProjectVisualProps) {
  if (video) {
    const label = typeof cover === 'string' ? '' : cover.alt;
    return (
      <div className={styles.browser}>
        <div className={styles.chrome} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className={styles.shot}>
          <PreviewVideo video={video} label={label} />
          <span className={styles.badge}>
            <Play size={12} aria-hidden="true" />
            Video walkthrough · {video.duration}
          </span>
        </div>
      </div>
    );
  }

  if (typeof cover === 'string') return <Mockup kind={cover} />;

  return (
    <div className={styles.browser}>
      <div className={styles.chrome} aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className={styles.shot}>
        <Image
          src={cover.src}
          alt={cover.alt}
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className={styles.image}
        />
      </div>
    </div>
  );
}
