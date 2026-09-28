'use client';

import { Check, Copy, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './Contact.module.scss';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className={styles.email}>
      <a href={`mailto:${email}`} className={styles.emailLink}>
        <Mail size={20} aria-hidden="true" />
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className={styles.copy}
        aria-label="Copy email address"
      >
        {copied ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
}
