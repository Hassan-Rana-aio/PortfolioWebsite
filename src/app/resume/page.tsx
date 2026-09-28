import { ArrowLeft, Download } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ResumeDocument from '@/components/resume/ResumeDocument';
import { profile } from '@/content/profile';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Resume',
  description: `CV of ${profile.name}, ${profile.title}. Experience at AIO, K-Hive, QLU.ai and PreMed.pk, projects and skills.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <nav className={styles.toolbar} aria-label="Resume">
        <Link href="/" className={styles.back}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
        </Link>
        <a href={profile.cvPath} download className={styles.download}>
          <Download size={16} aria-hidden="true" /> Download PDF
        </a>
      </nav>
      <main className={styles.sheet}>
        <ResumeDocument />
      </main>
    </div>
  );
}
