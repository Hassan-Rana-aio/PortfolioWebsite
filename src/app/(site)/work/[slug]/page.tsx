import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/case-study/VideoPlayer';
import Mockup from '@/components/mockups/Mockup';
import Button from '@/components/ui/Button';
import ContentText, { renders } from '@/components/ui/ContentText';
import ProjectVisual from '@/components/ui/ProjectVisual';
import Reveal from '@/components/ui/Reveal';
import { TagList } from '@/components/ui/Tag';
import { caseStudies, getProject } from '@/content/projects';
import { isTodo, verified } from '@/lib/todo';
import styles from './page.module.scss';

interface Params {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const title = `${project.name} case study`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      url: `/work/${project.slug}`,
      type: 'article',
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project?.caseStudy) notFound();

  const cs = project.caseStudy;
  const results = verified(cs.results);
  const { live } = project.links;
  const liveUrl = live && !isTodo(live) ? live : undefined;
  const showDiagram = cs.diagram && cs.diagram !== project.cover;
  const index = caseStudies.indexOf(project);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const toc = [
    { id: 'problem', label: 'Problem' },
    { id: 'approach', label: 'Approach' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Key features' },
    { id: 'technology', label: 'Technology' },
    ...(results.length ? [{ id: 'result', label: 'Result' }] : []),
    ...(project.gallery.length ? [{ id: 'screens', label: 'Screens' }] : []),
  ];

  return (
    <article className={styles.page}>
      <header className={`container ${styles.header}`}>
        <Link href="/#projects" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" /> All work
        </Link>
        <p className={styles.kicker}>
          Case study · <ContentText value={project.context} />
        </p>
        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.tagline}>{project.tagline}</p>

        <dl className={styles.meta}>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          {renders(project.period) && (
            <div>
              <dt>Period</dt>
              <dd>
                <ContentText value={project.period} />
              </dd>
            </div>
          )}
          {renders(project.context) && (
            <div>
              <dt>Company</dt>
              <dd>
                <ContentText value={project.context} />
              </dd>
            </div>
          )}
          <div>
            <dt>Links</dt>
            <dd className={styles.links}>
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  Live site <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
              {!liveUrl && renders(live) && <ContentText value={live} />}
              {!liveUrl && !renders(live) && (
                <span className={styles.muted}>Private product</span>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={14} aria-hidden="true" /> Code
                </a>
              )}
            </dd>
          </div>
        </dl>
      </header>

      <div className={`container ${styles.cover}`}>
        {project.video ? (
          <VideoPlayer video={project.video} title={project.name} />
        ) : (
          <ProjectVisual
            cover={project.cover}
            sizes="(min-width: 1280px) 1200px, 100vw"
            priority
          />
        )}
        {!project.video && typeof project.cover === 'string' && (
          <p className={styles.caption}>
            Illustration: drawn to explain the product without exposing private
            screens.
          </p>
        )}
      </div>

      <div className={`container ${styles.body}`}>
        <nav className={styles.toc} aria-label="On this page">
          <p>On this page</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`}>{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.content}>
          <Reveal as="section" className={styles.block}>
            <h2 id="problem">Problem</h2>
            <p className={styles.large}>{cs.problem}</p>
          </Reveal>

          <Reveal as="section" className={styles.block}>
            <h2 id="approach">Approach</h2>
            <ol className={styles.numbered}>
              {cs.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ol>
          </Reveal>

          <Reveal as="section" className={styles.block}>
            <h2 id="solution">Solution: what I built</h2>
            <ul className={styles.bullets}>
              {cs.solution.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            {showDiagram && cs.diagram && (
              <div className={styles.diagram}>
                <Mockup kind={cs.diagram} />
              </div>
            )}
          </Reveal>

          <section className={styles.block}>
            <h2 id="features">Key features</h2>
            <ul className={styles.features}>
              {cs.features.map((f, i) => (
                <Reveal
                  as="li"
                  key={f.title}
                  delay={(i % 2) * 0.06}
                  className={styles.feature}
                  spotlight
                >
                  <span className={styles.featureNum}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </Reveal>
              ))}
            </ul>
          </section>

          <Reveal as="section" className={styles.block}>
            <h2 id="technology">Technology</h2>
            <TagList
              items={project.stack}
              label={`${project.name} tech stack`}
            />
          </Reveal>

          {results.length > 0 && (
            <Reveal as="section" className={styles.block}>
              <h2 id="result">Result</h2>
              <ul className={styles.results}>
                {results.map((r) => (
                  <li key={r}>
                    <ContentText value={r} />
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {project.gallery.length > 0 && (
            <section className={styles.block}>
              <h2 id="screens">Screens</h2>
              <div className={styles.gallery}>
                {project.gallery.map((shot) => (
                  <Reveal key={shot.src.src}>
                    <figure className={styles.shot}>
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        sizes="(min-width: 1024px) 860px, 100vw"
                        placeholder="blur"
                      />
                      <figcaption>{shot.alt}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <footer className={`container ${styles.footer}`}>
        <div className={styles.ctaCard} data-spotlight>
          <p className={styles.ctaTitle}>Need something like this built?</p>
          <p className={styles.ctaBody}>
            I take products from requirements to production. Tell me about
            yours.
          </p>
          <Button href="/#contact" size="lg" icon={<ArrowUpRight />}>
            Let’s talk
          </Button>
        </div>
        {next && next.slug !== project.slug && (
          <Link
            href={`/work/${next.slug}`}
            className={styles.next}
            data-spotlight
          >
            <span>Next case study</span>
            <strong>
              {next.name} <ArrowUpRight size={20} aria-hidden="true" />
            </strong>
            <small>{next.tagline}</small>
          </Link>
        )}
      </footer>
    </article>
  );
}
