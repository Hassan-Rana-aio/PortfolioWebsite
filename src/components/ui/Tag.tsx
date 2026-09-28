import styles from './Tag.module.scss';

export function Tag({
  children,
  tone = 'default',
}: {
  children: React.ReactNode;
  tone?: 'default' | 'accent';
}) {
  return (
    <span className={`${styles.tag} ${tone === 'accent' ? styles.accent : ''}`}>
      {children}
    </span>
  );
}

export function TagList({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className={styles.list} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
