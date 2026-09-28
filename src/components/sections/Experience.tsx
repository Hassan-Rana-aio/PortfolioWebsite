import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { TagList } from '@/components/ui/Tag';
import { experience } from '@/content/experience';
import ExpandableList from './ExpandableList';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          id="experience-title"
          title="Where the experience comes from."
          lead="Three years of shipping in production, from a website builder used by restaurants to a trading platform I built from the ground up."
        />

        <ol className={styles.timeline}>
          {experience.map((job) => {
            const first = job.roles[job.roles.length - 1];
            const latest = job.roles[0];
            return (
              <Reveal as="li" key={job.id} className={styles.entry}>
                <div className={styles.meta}>
                  <p className={styles.period}>
                    {first.start} – {latest.end}
                  </p>
                  <h3 className={styles.company}>{job.company}</h3>
                  <p className={styles.location}>{job.location}</p>
                </div>

                <div className={styles.body}>
                  <p className={styles.context}>{job.context}</p>

                  {job.roles.map((role) => (
                    <div key={role.title} className={styles.role}>
                      <div className={styles.roleHead}>
                        <h4>{role.title}</h4>
                        <span>
                          {role.start} – {role.end}
                        </span>
                      </div>
                      <ExpandableList
                        items={role.bullets}
                        visible={job.id === 'aio' ? 5 : 3}
                      />
                    </div>
                  ))}

                  <div className={styles.footer}>
                    <TagList
                      items={job.stack}
                      label={`${job.company} tech stack`}
                    />
                    {job.caseStudy && (
                      <Link
                        href={`/work/${job.caseStudy}`}
                        className={styles.caseLink}
                      >
                        Read case study{' '}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
