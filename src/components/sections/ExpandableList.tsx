'use client';

import { useId, useState } from 'react';
import styles from './Experience.module.scss';

/** A bullet list that shows the first `visible` items and reveals the rest on demand. */
export default function ExpandableList({
  items,
  visible = 4,
}: {
  items: string[];
  visible?: number;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const hidden = items.length - visible;
  const shown = open || hidden <= 0 ? items : items.slice(0, visible);

  return (
    <>
      <ul className={styles.bullets} id={id}>
        {shown.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {hidden > 0 && (
        <button
          type="button"
          className={styles.more}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Show less' : `Show ${hidden} more`}
        </button>
      )}
    </>
  );
}
