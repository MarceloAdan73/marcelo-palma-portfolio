import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700, color: '#ffffff' }}>MP</div>
      </div>
    ),
    size
  );
}