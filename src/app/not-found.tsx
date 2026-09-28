import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeContent: 'center',
        gap: 16,
        padding: 24,
        textAlign: 'center',
      }}
    >
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
        404
      </p>
      <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
        This page doesn’t exist.
      </h1>
      <Link href="/" style={{ color: 'var(--accent)' }}>
        Back to the portfolio
      </Link>
    </main>
  );
}
