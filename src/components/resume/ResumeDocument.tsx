import { experience } from '@/content/experience';
import { profile } from '@/content/profile';
import { resumeProjects, resumeSkills, resumeSummary } from '@/content/resume';
import { isTodo } from '@/lib/todo';
import ContentText, { renders } from '@/components/ui/ContentText';
import styles from './ResumeDocument.module.scss';

const strip = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

/**
 * ATS-friendly CV: one column, real text, standard section headings,
 * no icons, graphics or rating bars. Printed to PDF by scripts/generate-cv.mjs.
 */
export default function ResumeDocument() {
  const contact = [
    { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
    {
      label: 'Phone',
      href: `tel:${profile.phone.replace(/\s/g, '')}`,
      text: profile.phone,
    },
    { label: 'Portfolio', href: profile.siteUrl, text: strip(profile.siteUrl) },
    {
      label: 'LinkedIn',
      href: profile.links.linkedin,
      text: strip(profile.links.linkedin),
    },
    {
      label: 'GitHub',
      href: profile.links.github,
      text: strip(profile.links.github),
    },
  ];

  return (
    <article className={styles.doc}>
      <header className={styles.header}>
        <h1>{profile.name}</h1>
        <p className={styles.title}>{profile.title}</p>
        <p className={styles.contact}>
          {profile.location}
          {contact.map((c) => (
            <span key={c.label}>
              {' | '}
              <a href={c.href}>{c.text}</a>
            </span>
          ))}
        </p>
      </header>

      <section>
        <h2>Summary</h2>
        <p>{resumeSummary}</p>
      </section>

      <section>
        <h2>Experience</h2>
        {experience.map((job) =>
          job.roles.map((role, i) => (
            <div key={`${job.id}-${role.title}`} className={styles.item}>
              <div className={styles.itemHead}>
                <h3>
                  {role.title}
                  {' | '}
                  {job.company}
                </h3>
                <span>
                  {role.start} – {role.end}
                </span>
              </div>
              {i === 0 && (
                <p className={styles.sub}>
                  {job.location}
                  {' | '}
                  {job.stack.join(', ')}
                </p>
              )}
              <ul>
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </section>

      <section>
        <h2>Projects</h2>
        {resumeProjects.map((project) => (
          <div key={project.slug} className={styles.item}>
            <div className={styles.itemHead}>
              <h3>
                {project.name}
                {' | '}
                <ContentText value={project.context} />
              </h3>
              {renders(project.period) && (
                <span>
                  <ContentText value={project.period} />
                </span>
              )}
            </div>
            <p className={styles.sub}>{project.stack.join(', ')}</p>
            <ul>
              <li>{project.summary}</li>
              {project.links.live && !isTodo(project.links.live) && (
                <li>
                  Live:{' '}
                  <a href={project.links.live}>{strip(project.links.live)}</a>
                </li>
              )}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>Skills</h2>
        <ul className={styles.skills}>
          {resumeSkills.map((group) => (
            <li key={group.label}>
              <strong>{group.label}:</strong> {group.items.join(', ')}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <div className={styles.item}>
          <div className={styles.itemHead}>
            <h3>
              {profile.education.degree}
              {' | '}
              {profile.education.school}
            </h3>
            <span>
              {profile.education.start} – {profile.education.end}
            </span>
          </div>
          <p className={styles.sub}>{profile.education.location}</p>
        </div>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          {profile.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
