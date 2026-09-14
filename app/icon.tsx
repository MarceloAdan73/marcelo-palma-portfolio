import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4f46e5, #a855f7)',
          borderRadius: 36,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '42%',
            background: 'rgba(255,255,255,0.16)',
            borderBottomLeftRadius: 64,
            borderBottomRightRadius: 64,
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              color: '#34d399',
              fontSize: 66,
              fontWeight: 800,
              marginRight: 2,
            }}
          >
            &gt;
          </span>
          <span
            style={{
              color: '#ffffff',
              fontSize: 70,
              fontWeight: 800,
              letterSpacing: 2,
              textShadow: '0 2px 10px rgba(0,0,0,0.35)',
            }}
          >
            MP
          </span>
        </div>
      </div>
    ),
    size
  );
}