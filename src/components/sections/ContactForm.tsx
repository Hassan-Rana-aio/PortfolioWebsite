'use client';

import { ArrowUpRight, LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import styles from './Contact.module.scss';

const reasons = [
  'A full-time or remote role',
  'A freelance project',
  'A startup / product collaboration',
  'Something else',
];

type Status = { kind: 'idle' | 'sending' | 'sent' | 'error'; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: 'sending' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.message || 'Something went wrong.');
      form.reset();
      setStatus({
        kind: 'sent',
        message:
          'Thanks, your message is on its way. I’ll get back to you soon.',
      });
    } catch (err) {
      setStatus({
        kind: 'error',
        message: `${err instanceof Error ? err.message : 'Something went wrong.'} You can also email me directly.`,
      });
    }
  };

  const sending = status.kind === 'sending';

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
          />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>What are you reaching out about?</span>
        <select name="reason" defaultValue={reasons[0]}>
          {reasons.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={5000}
          placeholder="A few lines about the role or the product is plenty."
        />
      </label>

      {/* Honeypot: hidden from people, often filled by bots. */}
      <label className={styles.honeypot} aria-hidden="true">
        Company website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className={styles.submitRow}>
        <Button
          type="submit"
          size="lg"
          disabled={sending}
          icon={
            sending ? (
              <LoaderCircle className={styles.spin} />
            ) : (
              <ArrowUpRight />
            )
          }
        >
          {sending ? 'Sending…' : 'Send message'}
        </Button>
        <p
          role="status"
          aria-live="polite"
          className={`${styles.status} ${status.kind === 'error' ? styles.error : ''} ${status.kind === 'sent' ? styles.sent : ''}`}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
