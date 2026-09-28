'use client';

import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import ContentText, { renders } from '@/components/ui/ContentText';
import { TagList } from '@/components/ui/Tag';
import type { Project } from '@/content/types';
import styles from './MoreProjects.module.scss';

export default function MoreProjects({ projects }: { projects: Project[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);
  const [index, setIndex] = useState(0);

  const open = (project: Project) => {
    setSelected(project);
    setIndex(0);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selected && dialog && !dialog.open) dialog.showModal();
  }, [selected]);

  const close = () => dialogRef.current?.close();

  const count = selected?.gallery.length ?? 0;
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (count ? (i + dir + count) % count : 0)),
    [count]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };

  const shot = selected?.gallery[index];

  return (
    <>
      <ul className={styles.grid}>
        {projects.map((project) => {
          const cover =
            typeof project.cover === 'string' ? null : project.cover;
          return (
            <li key={project.slug}>
              <button
                type="button"
                className={styles.card}
                data-spotlight
                onClick={() => open(project)}
              >
                {cover && (
                  <span className={styles.thumb}>
                    <Image
                      src={cover.src}
                      alt=""
                      sizes="(min-width: 1024px) 380px, (min-width: 560px) 50vw, 100vw"
                      placeholder="blur"
                      className={styles.thumbImg}
                    />
                  </span>
                )}
                <span className={styles.cardBody}>
                  <span className={styles.cardTitle}>
                    {project.name}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                  <span className={styles.cardTagline}>{project.tagline}</span>
                  <span className={styles.cardStack}>
                    {project.stack.slice(0, 4).join(' · ')}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="project-dialog-title"
        onClose={() => setSelected(null)}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {selected && (
          <div className={styles.dialogInner}>
            <button
              type="button"
              className={styles.close}
              onClick={close}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className={styles.gallery}>
              {shot && (
                <div className={styles.stage}>
                  <Image
                    key={shot.src.src}
                    src={shot.src}
                    alt={shot.alt}
                    sizes="(min-width: 1024px) 760px, 100vw"
                    placeholder="blur"
                    className={styles.stageImg}
                  />
                </div>
              )}
              {count > 1 && (
                <div className={styles.controls}>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span aria-live="polite">
                    {index + 1} / {count}
                  </span>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              )}
            </div>

            <div className={styles.info}>
              <p className={styles.infoContext}>
                <ContentText value={selected.context} />
              </p>
              <h3 id="project-dialog-title">{selected.name}</h3>
              <p>{selected.summary}</p>
              {(renders(selected.role) || renders(selected.period)) && (
                <dl>
                  {renders(selected.role) && (
                    <div>
                      <dt>Role</dt>
                      <dd>
                        <ContentText value={selected.role} />
                      </dd>
                    </div>
                  )}
                  {renders(selected.period) && (
                    <div>
                      <dt>Period</dt>
                      <dd>
                        <ContentText value={selected.period} />
                      </dd>
                    </div>
                  )}
                </dl>
              )}
              <TagList items={selected.stack} label="Tech stack" />
              {selected.caseStudy && (
                <Link
                  href={`/work/${selected.slug}`}
                  className={styles.caseLink}
                >
                  Read the case study{' '}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
