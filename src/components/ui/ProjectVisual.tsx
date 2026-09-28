import Image from 'next/image';
import Mockup from '@/components/mockups/Mockup';
import type { Project } from '@/content/types';
import styles from './ProjectVisual.module.scss';

interface ProjectVisualProps {
  cover: Project['cover'];
  sizes: string;
  priority?: boolean;
}

/** Shows a project's cover: a real screenshot in a browser frame, or a code-drawn mockup. */
export default function ProjectVisual({
  cover,
  sizes,
  priority,
}: ProjectVisualProps) {
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
