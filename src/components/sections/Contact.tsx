import { ArrowUpRight, Briefcase, Github, Linkedin } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { profile } from '@/content/profile';
import ContactForm from './ContactForm';
import CopyEmail from './CopyEmail';
import styles from './Contact.module.scss';

const channels = [
  {
    label: 'LinkedIn',
    href: profile.links.linkedin,
    icon: Linkedin,
    note: 'Connect or message',
  },
  {
    label: 'GitHub',
    href: profile.links.github,
    icon: Github,
    note: 'See my code',
  },
  {
    label: 'Upwork',
    href: profile.links.upwork,
    icon: Briefcase,
    note: 'Hire for a contract',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className={`section ${styles.contact}`}
      aria-labelledby="contact-title"
    >
      <div className="container">
        <Reveal className={styles.head}>
          <p className={styles.eyebrow}>
            <span>07</span> Contact
          </p>
          <h2 id="contact-title" className={styles.title}>
            Let’s build something <span className="accent-serif">great.</span>
          </h2>
          <p className={styles.lead}>
            Hiring for a role, planning a product or need help with an existing
            one? Send a message. I usually reply within 24 hours.
          </p>
          <ul className={styles.openTo} aria-label="Open to">
            {profile.openTo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.direct}>
            <CopyEmail email={profile.email} />
            <ul className={styles.channels}>
              {channels.map(({ label, href, icon: Icon, note }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.channel}
                    data-spotlight
                  >
                    <Icon size={20} aria-hidden="true" />
                    <span>
                      <strong>{label}</strong>
                      <small>{note}</small>
                    </span>
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                      className={styles.arrow}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.location}>
              {profile.location} · {profile.timezone} · Working with teams
              across time zones
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
