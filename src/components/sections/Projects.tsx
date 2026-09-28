import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ContentText, { renders } from '@/components/ui/ContentText';
import ProjectVisual from '@/components/ui/ProjectVisual';
import Reveal from '@/components/ui/Reveal';
import SectionHeader from '@/components/ui/SectionHeader';
import { Tag, TagList } from '@/components/ui/Tag';
import { featuredProjects, moreProjects } from '@/content/projects';
import { stripTodos } from '@/lib/todo';
import MoreProjects from './MoreProjects';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="03"
          eyebrow="Selected work"
          id="projects-title"
          title={
            <>
              Products in production,{' '}
              <span className="accent-serif">not demos.</span>
            </>
          }
          lead="Case studies from the products I’ve built and maintained: what the problem was, how I approached it and what I shipped."
        />

        <ol className={styles.featured}>
          {featuredProjects.map((project, i) => (
            <Reveal as="li" key={project.slug} className={styles.feature}>
              <Link
                href={`/work/${project.slug}`}
                className={styles.featureLink}
                data-spotlight
              >
                <div className={styles.visual}>
                  <ProjectVisual
                    cover={project.cover}
                    sizes="(min-width: 1024px) 640px, 100vw"
                  />
                </div>

                <div className={styles.content}>
                  <p className={styles.kicker}>
                    <span>0{i + 1}</span>
                    <ContentText value={project.context} />
                    {renders(project.period) && (
                      <>
                        <span aria-hidden="true">·</span>
                        <ContentText value={project.period} />
                      </>
                    )}
                  </p>
                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.tagline}>{project.tagline}</p>

                  <dl className={styles.details}>
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>Problem</dt>
                      <dd>{project.caseStudy?.problem}</dd>
                    </div>
                  </dl>

                  <ul className={styles.highlights}>
                    {project.caseStudy?.features.slice(0, 3).map((f) => (
                      <li key={f.title}>
                        <Tag tone="accent">{f.title}</Tag>
                      </li>
                    ))}
                  </ul>

                  <TagList
                    items={project.stack.slice(0, 6)}
                    label={`${project.name} tech stack`}
                  />

                  <span className={styles.cta}>
                    Read case study{' '}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>

        <div className={styles.moreHeader}>
          <h3>More work</h3>
          <p>Other products I’ve worked on, with screenshots.</p>
        </div>
        <MoreProjects projects={stripTodos(moreProjects)} />
      </div>
    </section>
  );
}
