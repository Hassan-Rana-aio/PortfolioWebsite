'use client';

import { AnimatePresence, m } from 'motion/react';
import { useRef, useState } from 'react';
import SectionHeader from '@/components/ui/SectionHeader';
import { skillGroups } from '@/content/skills';
import styles from './Skills.module.scss';

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0];

  // Roving focus for the tablist (arrow keys, Home, End).
  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const last = skillGroups.length - 1;
    const next =
      e.key === 'ArrowRight' || e.key === 'ArrowDown'
        ? index === last
          ? 0
          : index + 1
        : e.key === 'ArrowLeft' || e.key === 'ArrowUp'
          ? index === 0
            ? last
            : index - 1
          : e.key === 'Home'
            ? 0
            : e.key === 'End'
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActiveId(skillGroups[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader
          index="04"
          eyebrow="Skills"
          id="skills-title"
          title="The stack, and where I’ve used it."
          lead="No rating bars. Each tool is listed next to the products I used it on."
        />

        <div className={styles.layout}>
          <div
            role="tablist"
            aria-label="Skill categories"
            aria-orientation="vertical"
            className={styles.tabs}
          >
            {skillGroups.map((group, i) => {
              const selected = group.id === activeId;
              return (
                <button
                  key={group.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  className={styles.tab}
                  onClick={() => setActiveId(group.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {selected && (
                    <m.span
                      layoutId="skills-tab"
                      className={styles.tabBg}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 34,
                      }}
                    />
                  )}
                  <span className={styles.tabLabel}>{group.label}</span>
                  <span className={styles.tabCount}>{group.skills.length}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className={styles.panel}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <p className={styles.blurb}>{active.blurb}</p>
                <ul className={styles.rows}>
                  {active.skills.map((skill, i) => (
                    <m.li
                      key={skill.name}
                      className={styles.row}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i, duration: 0.3 }}
                    >
                      <span className={styles.skill}>{skill.name}</span>
                      <span className={styles.used}>
                        {skill.usedAt.map((place) => (
                          <span key={place}>{place}</span>
                        ))}
                      </span>
                    </m.li>
                  ))}
                </ul>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
