import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/content/services';
import styles from './Testimonials.module.scss';

/** Renders nothing until real testimonials are added to content/services.ts. */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="section"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <SectionHeader
          index="·"
          eyebrow="Kind words"
          id="testimonials-title"
          title="What people I’ve worked with say."
        />
        <ul className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.06}>
              <figure className={styles.card}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>
                    {t.title}
                    {t.source && ` · ${t.source}`}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
