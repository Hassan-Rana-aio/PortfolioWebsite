import { ArrowUpRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { profile } from '@/content/profile';
import { engagementSteps, services } from '@/content/services';
import styles from './Hire.module.scss';

export default function Hire() {
  return (
    <section
      id="hire"
      className={`section ${styles.hire}`}
      aria-labelledby="hire-title"
    >
      <div className="container">
        <SectionHeader
          index="05"
          eyebrow="For founders & teams"
          id="hire-title"
          title={
            <>
              Have a product idea?{' '}
              <span className="accent-serif">Let’s build it.</span>
            </>
          }
          lead="I work directly with founders and business owners to take a product from requirements to production, or to move an existing one forward. You get one engineer who handles the frontend, backend and database, and who tells you plainly what’s realistic."
        />

        <ul className={styles.services}>
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 3) * 0.06}
              className={styles.service}
              spotlight
            >
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </ul>

        <div className={styles.process}>
          <h3 className={styles.processTitle}>How working together looks</h3>
          <ol className={styles.steps}>
            {engagementSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.06}
                className={styles.step}
              >
                <span className={styles.stepNum}>0{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className={styles.banner}>
          <div>
            <p className={styles.bannerTitle}>Tell me what you’re building.</p>
            <p className={styles.bannerBody}>
              I usually reply within 24 hours with questions or next steps.
            </p>
          </div>
          <div className={styles.bannerActions}>
            <Button href="#contact" size="lg" icon={<ArrowUpRight />}>
              Let’s Build Something
            </Button>
            <Button
              href={profile.links.upwork}
              size="lg"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me on Upwork
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
