import { useState } from 'react';
import Logo from './Logo';

export default function Header({ onToggleChat, chatOpen }) {
  const [d1Err, setD1Err] = useState(false);
  const [d2Err, setD2Err] = useState(false);
  const [logoErr, setLogoErr] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(248, 250, 252, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 64,
        }}
      >
        {/* Left: Brand Logo + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {/* Project Logo Image with SVG fallback */}
          {!logoErr ? (
            <img
              src="https://chatgpt.com/backend-api/estuary/public_content/enc/eyJpZCI6Im1fNmFiMTcwNTZlYzZjODE5MWIxODQwZjAxNGYxYjZiODA6c2VkaW1lbnQ6Ly83NDVhNzZjMmUxMWQzN2EjZmlsZV8wMDAwMDAwMDdlM2M4MjBiYTk2ZTAyOGQxNzllZTA4NSN1bmZ1cmwiLCJnaXptb29pZCI6bnVsbCwid2lkIjpudWxsLCJvaWQiOm51bGwsInNpZCI6bnVsbCwiY3MiOm51bGwsImZuIjpudWxsLCJjZCI6bnVsbCwidHMiOiIyMDcxNyIsInAiOiJweWkiLCJjaWQiOiIxIiwic2lnIjoiZTM0NjM4NGVkZDhhOTQ3Mzc3MjI4OGU1YTBjMGZiOWZhZmFkM2YzZDlhOWQ3ZDhkNTA4MTZjN2M4NzRlYWRjMSIsInYiOiIwIiwiY2RuIjpudWxsLCJjcCI6bnVsbCwibWEiOm51bGx9"
              alt="Project Sanjaya Logo"
              onError={() => setLogoErr(true)}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                objectFit: 'cover',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                border: '1px solid #bfdbfe',
              }}
            />
          ) : (
            <Logo size={38} />
          )}

          {/* Title & Subline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span
                id="site-title"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.4rem',
                  letterSpacing: '0.05em',
                  background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
              >
                SANJAY
              </span>
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#2563eb',
                  background: '#dbeafe',
                  padding: '2px 6px',
                  borderRadius: 4,
                  textTransform: 'uppercase',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                v2.0 ADAS
              </span>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.64rem', color: '#64748b', marginTop: 2, letterSpacing: '0.01em' }}>
              LiDAR Vision · Autonomous 3D Perception Engine
            </p>
          </div>

          {/* Dhritrashtra & Sanjay Avatar badge */}
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: 8, borderLeft: '1px solid #e2e8f0', paddingLeft: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[
                { src: '/avatars/dhritrashtra.png', err: d1Err, onErr: () => setD1Err(true), emoji: '👑', title: 'Dhritrashtra', z: 0 },
                { src: '/avatars/sanjay.png',       err: d2Err, onErr: () => setD2Err(true), emoji: '👁️', title: 'Sanjay',       z: 1 },
              ].map((av, i) => (
                <div
                  key={av.title}
                  title={av.title}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                    background: 'linear-gradient(135deg, #dbeafe, #ede9fe)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    fontSize: 14,
                    marginLeft: i === 1 ? -8 : 0,
                    zIndex: av.z,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                  }}
                >
                  {!av.err ? (
                    <img src={av.src} alt={av.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={av.onErr} />
                  ) : (
                    av.emoji
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Subline */}
        <p
          style={{
            display: 'none',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.72rem',
            color: '#64748b',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: 420,
            lineHeight: 1.5,
            flex: 1,
            margin: '0 24px',
          }}
          className="lg-quote"
        >
          "Digital eyes for autonomous navigation — processing the world in real-time."
        
        </p>
       

        {/* Right: Chat drawer trigger button */}
        <button
          id="chat-toggle-btn"
          onClick={onToggleChat}
          className="btn-blue"
          aria-label={chatOpen ? 'Close chat' : 'Ask SANJAY'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderRadius: 10,
            fontWeight: 600,
            fontSize: '0.85rem',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {chatOpen ? 'Close' : 'Ask SANJAY AI'}
        </button>
      </div>

      <style>{`
        @media (min-width: 1024px) { .lg-quote { display: block !important; } }
      `}</style>
    </header>
  );
}
