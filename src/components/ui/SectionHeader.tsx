import type { ReactNode } from 'react';
import Reveal from './Reveal';
import styles from './SectionHeader.module.scss';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
}

export default function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  id,
}: SectionHeaderProps) {
  return (
    <Reveal className={styles.header}>
      <p className={styles.eyebrow}>
        <span className={styles.index}>{index}</span>
        <span className={styles.rule} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {lead && <p className={styles.lead}>{lead}</p>}
    </Reveal>
  );
}
