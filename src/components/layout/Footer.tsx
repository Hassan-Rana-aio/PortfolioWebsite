import { ArrowUp } from 'lucide-react';
import { navItems } from '@/content/navigation';
import { profile } from '@/content/profile';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.title}</p>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className={styles.social}>
          <li>
            <a href={`mailto:${profile.email}`}>Email</a>
          </li>
          <li>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={profile.links.upwork}
              target="_blank"
              rel="noopener noreferrer"
            >
              Upwork
            </a>
          </li>
        </ul>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and
          Three.js.
        </p>
        <a href="#top" className={styles.top}>
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
