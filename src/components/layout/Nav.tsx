'use client';

import { AnimatePresence, m } from 'motion/react';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button';
import { navItems } from '@/content/navigation';
import { profile } from '@/content/profile';
import styles from './Nav.module.scss';

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (!enabled) return undefined;
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : '';
}

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const active = useActiveSection(isHome);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const hrefFor = (id: string) => (id === 'home' ? '/#home' : `/#${id}`);

  return (
    <header
      className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}
    >
      <span className={styles.progress} aria-hidden="true" />
      <div className={styles.bar}>
        <Link
          href="/#home"
          className={styles.brand}
          aria-label={`${profile.name}, home`}
        >
          <span className={styles.mark} aria-hidden="true">
            {profile.initials}
          </span>
          <span className={styles.brandName}>{profile.shortName}</span>
        </Link>

        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={hrefFor(item.id)}
                  className={styles.link}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {active === item.id && (
                    <m.span
                      layoutId="nav-active"
                      className={styles.activePill}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className={styles.linkLabel}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button
            href="/#contact"
            size="md"
            className={styles.cta}
            icon={<ArrowUpRight />}
          >
            Let&apos;s talk
          </Button>
          <button
            ref={toggleRef}
            className={styles.toggle}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            className={styles.sheet}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Mobile">
              <ul className={styles.sheetList}>
                {navItems.map((item, i) => (
                  <m.li
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35 }}
                  >
                    <a
                      href={hrefFor(item.id)}
                      className={styles.sheetLink}
                      onClick={() => setOpen(false)}
                    >
                      <span className={styles.sheetIndex}>0{i + 1}</span>
                      {item.label}
                    </a>
                  </m.li>
                ))}
              </ul>
            </nav>
            <div className={styles.sheetFooter}>
              <Button
                href="/#contact"
                size="lg"
                icon={<ArrowUpRight />}
                onClick={() => setOpen(false)}
              >
                Hire me
              </Button>
              <Button
                href={profile.cvPath}
                variant="secondary"
                size="lg"
                icon={<Download />}
                download
              >
                Download CV
              </Button>
              <a className={styles.sheetEmail} href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
