import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Learn to Build with AI - Vibe Code';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          position: 'relative',
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 80px',
            zIndex: 1,
          }}
        >
          {/* Icon */}
          <div
            style={{
              display: 'flex',
              marginBottom: '40px',
            }}
          >
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path d="m18 16 4-4-4-4" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m6 8-4 4 4 4" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m14.5 4-5 16" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.1,
            }}
          >
            Build Anything by
            <br />
            Just Describing It
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '32px',
              color: '#cbd5e1',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Learn to build websites and apps with AI as your coding partner.
            <br />
            No coding experience needed.
          </div>

          {/* Badge */}
          <div
            style={{
              marginTop: '40px',
              padding: '12px 32px',
              background: 'rgba(139, 92, 246, 0.2)',
              border: '2px solid rgba(139, 92, 246, 0.4)',
              borderRadius: '999px',
              fontSize: '24px',
              color: '#a78bfa',
              fontWeight: 600,
            }}
          >
            vibecodestart.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
