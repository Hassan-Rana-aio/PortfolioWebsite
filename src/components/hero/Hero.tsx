import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { profile } from '@/content/profile';
import HeroVisual from './HeroVisual';
import styles from './Hero.module.scss';

const socials = [
  { label: 'GitHub', href: profile.links.github, icon: Github },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            Open to full-time, remote &amp; freelance work
          </p>

          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>

          <p className={styles.positioning}>
            Product Engineer building{' '}
            <span className="accent-serif">AI-powered SaaS</span> &amp; scalable
            digital products.
          </p>

          <p className={styles.intro}>{profile.intro}</p>

          <div className={styles.ctas}>
            <Button href="#projects" size="lg" icon={<ArrowDown />}>
              View My Work
            </Button>
            <Button
              href="#contact"
              size="lg"
              variant="secondary"
              icon={<ArrowUpRight />}
            >
              Hire Me
            </Button>
            <Button
              href={profile.cvPath}
              size="lg"
              variant="ghost"
              icon={<Download />}
              iconPosition="start"
              download
            >
              Download CV
            </Button>
          </div>

          <ul className={styles.socials}>
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http') && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>

      <div className={`container ${styles.facts}`}>
        <dl>
          <div>
            <dt>Currently</dt>
            <dd>
              {profile.current.role} at{' '}
              <strong>{profile.current.company}</strong>, on its{' '}
              {profile.current.focus}
            </dd>
          </div>
          <div>
            <dt>Previously</dt>
            <dd>{profile.previously.join(' · ')}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>
              {profile.location} · {profile.timezone}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
