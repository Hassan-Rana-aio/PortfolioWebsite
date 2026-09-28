import styles from './BuilderMockup.module.scss';

const sections = [
  'Header',
  'Hero carousel',
  'Featured menu',
  'Catering',
  'Instagram',
  'FAQ',
  'Footer',
];

/**
 * A generic illustration of a restaurant website builder (editor, canvas and
 * publish bar). Deliberately not a copy of AIO's real interface.
 */
export default function BuilderMockup({
  label = 'Illustration of a restaurant website builder',
}: {
  label?: string;
}) {
  return (
    <figure className={styles.frame} role="img" aria-label={label}>
      <div className={styles.topbar}>
        <span className={styles.dots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className={styles.domain}>
          <span className={styles.lock} aria-hidden="true" />
          your-restaurant.com
        </span>
        <span className={styles.env}>Preview</span>
        <span className={styles.publish}>Publish</span>
      </div>

      <div className={styles.body}>
        <aside className={styles.sidebar} aria-hidden="true">
          <p className={styles.sideTitle}>Sections</p>
          {sections.map((s, i) => (
            <span
              key={s}
              className={`${styles.sideItem} ${i === 2 ? styles.active : ''}`}
            >
              <b />
              {s}
            </span>
          ))}
          <span className={styles.add}>+ Add section</span>
        </aside>

        <div className={styles.canvas} aria-hidden="true">
          <div className={styles.siteNav}>
            <span className={styles.logo} />
            <span className={styles.navLinks}>
              <i />
              <i />
              <i />
            </span>
            <span className={styles.orderBtn}>Order</span>
          </div>
          <div className={styles.siteHero}>
            <span className={styles.heroLine} />
            <span className={styles.heroLineShort} />
            <span className={styles.heroBtn} />
          </div>
          <div className={styles.menuRow}>
            {['Starters', 'Mains', 'Desserts'].map((m) => (
              <span key={m} className={styles.menuCard}>
                <span className={styles.menuImg} />
                <span className={styles.menuText}>{m}</span>
              </span>
            ))}
          </div>
          <span className={styles.selection}>
            <span className={styles.selectionTag}>Featured menu</span>
          </span>
        </div>

        <aside className={styles.panel} aria-hidden="true">
          <p className={styles.sideTitle}>Customise</p>
          <span className={styles.field}>
            <small>Button text</small>
            <span>View full menu</span>
          </span>
          <span className={styles.field}>
            <small>Link</small>
            <span>/menu</span>
          </span>
          <span className={styles.toggleRow}>
            <small>Show prices</small>
            <span className={styles.toggle} />
          </span>
          <span className={styles.field}>
            <small>SEO title</small>
            <span>Menu | Your Restaurant</span>
          </span>
        </aside>
      </div>
    </figure>
  );
}
