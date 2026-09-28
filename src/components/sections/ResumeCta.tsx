import { ArrowUpRight, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { experience } from '@/content/experience';
import { profile } from '@/content/profile';
import styles from './ResumeCta.module.scss';

export default function ResumeCta() {
  return (
    <section id="resume" className="section" aria-labelledby="resume-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeader
            index="06"
            eyebrow="Resume"
            id="resume-title"
            title="Everything above, on two pages."
            lead="An ATS-friendly CV with the same roles, projects and skills you see here. Download the PDF or read it in the browser."
          />
          <Reveal className={styles.actions}>
            <Button
              href={profile.cvPath}
              size="lg"
              icon={<Download />}
              iconPosition="start"
              download
            >
              Download CV
            </Button>
            <Button
              href="/resume"
              size="lg"
              variant="secondary"
              icon={<ArrowUpRight />}
            >
              View online
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className={styles.paperWrap}>
          <a
            href="/resume"
            className={styles.paper}
            aria-label="Open the online resume"
          >
            <span className={styles.paperName}>{profile.name}</span>
            <span className={styles.paperTitle}>{profile.title}</span>
            <span className={styles.paperRule} />
            <span className={styles.paperHeading}>Experience</span>
            {experience.slice(0, 4).map((job) => (
              <span key={job.id} className={styles.paperRow}>
                <b>
                  {job.roles[0].title}, {job.company}
                </b>
                <i>
                  {job.roles[job.roles.length - 1].start} – {job.roles[0].end}
                </i>
              </span>
            ))}
            <span className={styles.paperHeading}>Skills</span>
            <span className={styles.paperLines} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
