import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #111827, #312e81)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 28, color: '#a78bfa', marginBottom: 24 }}>
          F U L L - S T A C K &nbsp; D E V E L O P E R
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, color: '#ffffff' }}>
          Marcelo Palma
        </div>
        <div style={{ fontSize: 40, color: '#c7d2fe', marginTop: 24 }}>
          Next.js · TypeScript · Node.js · Docker · Testing
        </div>
      </div>
    ),
    size
  );
}