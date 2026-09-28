import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          backgroundColor: '#08090b',
          backgroundImage:
            'radial-gradient(circle at 85% 20%, rgba(129,147,255,0.28), transparent 45%)',
          color: '#eeeef0',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 26,
            color: '#a4a7ae',
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background: '#eeeef0',
              color: '#08090b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          {profile.siteUrl.replace('https://', '')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 38,
              color: '#c9cdf7',
              maxWidth: 950,
              lineHeight: 1.25,
            }}
          >
            {profile.positioning}
          </div>
        </div>
        <div
          style={{ display: 'flex', gap: 14, fontSize: 24, color: '#a4a7ae' }}
        >
          {[
            'React',
            'Next.js',
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'MongoDB',
          ].map((t) => (
            <div
              key={t}
              style={{
                padding: '8px 18px',
                border: '1px solid rgba(255,255,255,0.16)',
                borderRadius: 999,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
