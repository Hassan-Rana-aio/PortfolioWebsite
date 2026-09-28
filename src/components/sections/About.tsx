import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { about, profile } from '@/content/profile';
import styles from './About.module.scss';

const facts = [
  { label: 'Role', value: profile.title },
  { label: 'Experience', value: 'In production since 2023' },
  { label: 'Works with', value: 'Engineering teams & founders' },
  { label: 'Education', value: 'BS Computer Science, FAST-NUCES' },
];

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeader
          index="01"
          eyebrow="About"
          id="about-title"
          title={
            <>
              Engineering the whole product,{' '}
              <span className="accent-serif">not just the ticket.</span>
            </>
          }
        />

        <div className={styles.grid}>
          <Reveal className={styles.story}>
            <p className={styles.lead}>{about.lead}</p>
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className={styles.facts}>
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <ol className={styles.principles}>
          {about.principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 0.08}
              className={styles.principle}
              spotlight
            >
              <span className={styles.num}>0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
