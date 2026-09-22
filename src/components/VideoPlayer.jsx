import { useRef, useState } from 'react';

export default function VideoPlayer({ customSource }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  const videoSrc = customSource || "https://res.cloudinary.com/akxkwuzs/video/upload/v1790019233/WhatsApp_Video_2026-09-22_at_12.58.42_AM.mp4";

  function toggleFullscreen() {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().then(() => setFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setFullscreen(false)).catch(console.error);
    }
  }

  return (
    <div style={{ width: '100%', maxWidth: 860, margin: '0 auto' }}>
      {/* Label */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#475569', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {customSource ? 'Custom Navigation Stream' : 'Live Navigation Feed · Full Uncropped Stream'}
          </span>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#94a3b8' }}>
          Real-time LiDAR point-cloud processing
        </span>
      </div>

      {/* Video wrapper - uncropped full visibility */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          borderRadius: 16,
          overflow: 'hidden',
          background: '#090d16',
          boxShadow: hovered
            ? '0 24px 60px rgba(37,99,235,0.2), 0 8px 24px rgba(15,23,42,0.15)'
            : '0 8px 32px rgba(15,23,42,0.12)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          border: '1px solid rgba(59, 130, 246, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 280,
          maxHeight: '75vh',
        }}
      >
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '75vh',
            display: 'block',
            objectFit: 'contain',
            borderRadius: 14,
          }}
          src={videoSrc}
        />

        {/* HUD Scan Line Overlay */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 2,
            pointerEvents: 'none',
            background: 'linear-gradient(90deg, transparent, rgba(96,165,250,0.6), transparent)',
            animation: 'scan 4s linear infinite',
            zIndex: 2,
          }}
        />

        {/* Fullscreen button */}
        <button
          id="video-fullscreen-btn"
          onClick={toggleFullscreen}
          aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          style={{
            position: 'absolute',
            bottom: 14,
            right: 14,
            padding: '8px 14px',
            borderRadius: 10,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.75rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            opacity: hovered ? 1 : 0.75,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            zIndex: 3,
          }}
        >
          {fullscreen ? (
            <>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4m0 5H4m11-5v5m0 0h5M9 15v5m0-5H4m11 5v-5m0 0h5" />
              </svg>
              <span>Exit Fullscreen</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span>Fullscreen</span>
            </>
          )}
        </button>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, padding: '0 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {[['FPS', '30'], ['FEED', '1080p Stream'], ['LATENCY', '12 ms']].map(([k, v], i) => (
            <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748b' }}>
              {i > 0 && <span style={{ width: 1, height: 12, background: '#cbd5e1', display: 'inline-block' }} />}
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#2563eb', fontSize: '0.7rem' }}>{k}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{v}</span>
            </span>
          ))}
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>
          ● LIVE SENSORS SYNCED
        </span>
      </div>

      <style>{`
        @keyframes scan { 0% { top:-1%; } 100% { top:101%; } }
      `}</style>
    </div>
  );
}
