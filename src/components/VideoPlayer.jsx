import { useRef, useState, useEffect } from 'react';

export const VIDEO_PLAYLIST = [
  {
    id: 'normal-view',
    title: 'Normal View',
    subtitle: 'Standard Stream',
    description: 'Real-time 3D LiDAR point-cloud perception feed',
    src: 'https://res.cloudinary.com/akxkwuzs/video/upload/v1790019233/WhatsApp_Video_2026-09-22_at_12.58.42_AM.mp4',
    accentColor: '#3b82f6',
    icon: '📹',
  },
  {
    id: 'pedestrian-detection',
    title: 'Pedestrian Detection',
    subtitle: 'Foveated Attention',
    description: 'Blue bounding boxes with red centers mark detected pedestrians in real time',
    src: 'https://res.cloudinary.com/akxkwuzs/video/upload/v1790169865/WhatsApp_Video_2026-09-19_at_8.00.06_PM.mp4',
    accentColor: '#3b82f6',
    icon: '🚶',
  },
  {
    id: 'dbscan-collision',
    title: 'DBSCAN Object & Collision Detection',
    subtitle: 'TTC Engine',
    description: 'Object detection and Time-to-Collide (TTC) calculation using DBSCAN clustering',
    src: 'https://res.cloudinary.com/akxkwuzs/video/upload/v1790169865/WhatsApp_Video_2026-09-19_at_8.00.08_PM.mp4',
    accentColor: '#10b981',
    icon: '⚠️',
  },
  {
    id: 'square-grid-partition',
    title: 'Square Grids Spatial Partitioning',
    subtitle: 'Cartesian Matrix',
    description: 'Cartesian square grid partitioning optimized for fast path planning over circular grids',
    src: 'https://res.cloudinary.com/akxkwuzs/video/upload/v1790169865/WhatsApp_Video_2026-09-19_at_8.00.07_PM.mp4',
    accentColor: '#8b5cf6',
    icon: '⊞',
  },
];

export default function VideoPlayer({ customSource }) {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  // Active item
  const activeItem = customSource
    ? {
        id: 'custom',
        title: 'Custom Introduction Video',
        subtitle: 'User Custom Stream',
        description: 'Custom attached navigation stream',
        src: customSource,
        accentColor: '#ec4899',
        icon: '🎥',
      }
    : VIDEO_PLAYLIST[currentIndex];

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? VIDEO_PLAYLIST.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === VIDEO_PLAYLIST.length - 1 ? 0 : prev + 1));
  };

  function toggleFullscreen() {
    if (!videoRef.current) return;
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen().then(() => setFullscreen(true)).catch(console.error);
    } else {
      document.exitFullscreen().then(() => setFullscreen(false)).catch(console.error);
    }
  }

  // Auto-play when video changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex, customSource]);

  return (
    <div style={{ width: '100%', maxWidth: 880, margin: '0 auto' }}>

      {/* ── Top Header Bar above video ── */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 14,
          padding: '4px 2px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#10b981',
                display: 'inline-block',
                boxShadow: '0 0 10px #10b981',
              }}
            />
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {activeItem.title}
            </h2>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.64rem',
                fontWeight: 700,
                color: activeItem.accentColor,
                background: `${activeItem.accentColor}15`,
                border: `1px solid ${activeItem.accentColor}40`,
                padding: '3px 8px',
                borderRadius: 99,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {activeItem.subtitle}
            </span>
          </div>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
            {activeItem.description}
          </p>
        </div>

        {/* Video index counter */}
        {!customSource && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              padding: '4px 12px',
              borderRadius: 99,
            }}
          >
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#3b82f6' }}>
              Stream {currentIndex + 1}
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#94a3b8' }}>
              of {VIDEO_PLAYLIST.length}
            </span>
          </div>
        )}
      </div>

      {/* ── Main Uncropped Video Container ── */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          borderRadius: 18,
          overflow: 'hidden',
          background: '#040711',
          boxShadow: hovered
            ? '0 25px 65px rgba(37,99,235,0.22), 0 10px 30px rgba(15,23,42,0.18)'
            : '0 10px 36px rgba(15,23,42,0.14)',
          transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 320,
          maxHeight: '75vh',
        }}
      >
        {/* Video Element — objectFit contain for full uncropped visibility */}
        <video
          ref={videoRef}
          key={activeItem.src}
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
            borderRadius: 16,
          }}
          src={activeItem.src}
        />

        {/* HUD Scan line overlay */}
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

        {/* Floating Description Badge (Top Left of Video) */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            background: 'rgba(9, 13, 22, 0.78)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: 10,
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            zIndex: 3,
            maxWidth: '85%',
          }}
        >
          <span style={{ fontSize: '0.9rem' }}>{activeItem.icon}</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#f8fafc', fontWeight: 500 }}>
            {activeItem.description}
          </span>
        </div>

        {/* ── Side Navigation Arrows (Left & Right) ── */}
        {!customSource && (
          <>
            {/* Previous Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous video"
              style={{
                position: 'absolute',
                left: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                opacity: hovered ? 1 : 0.7,
                transition: 'opacity 0.2s ease, transform 0.2s ease, background 0.2s ease',
                zIndex: 4,
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              }}
              className="hover:scale-110 hover:bg-blue-600"
            >
              ❮
            </button>

            {/* Next Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next video"
              style={{
                position: 'absolute',
                right: 14,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                opacity: hovered ? 1 : 0.7,
                transition: 'opacity 0.2s ease, transform 0.2s ease, background 0.2s ease',
                zIndex: 4,
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              }}
              className="hover:scale-110 hover:bg-blue-600"
            >
              ❯
            </button>
          </>
        )}

        {/* Fullscreen button (Bottom Right) */}
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
            background: 'rgba(15, 23, 42, 0.8)',
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
            opacity: hovered ? 1 : 0.8,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            zIndex: 4,
          }}
          className="hover:scale-105"
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

      {/* ── Video Selector Carousel Pills below player ── */}
      {!customSource && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 10,
            marginTop: 14,
          }}
        >
          {VIDEO_PLAYLIST.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 14px',
                  borderRadius: 12,
                  background: isActive ? '#ffffff' : '#f8fafc',
                  border: isActive ? `2px solid ${item.accentColor}` : '1px solid #e2e8f0',
                  boxShadow: isActive ? `0 4px 14px ${item.accentColor}25` : 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                }}
                className="hover:border-blue-300"
              >
                <span
                  style={{
                    fontSize: '1.2rem',
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: isActive ? `${item.accentColor}15` : '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shrink: 0,
                  }}
                >
                  {item.icon}
                </span>

                <div style={{ overflow: 'hidden' }}>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? item.accentColor : '#334155',
                      margin: 0,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#94a3b8', margin: 0 }}>
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Stats bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14, padding: '0 4px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {[['FPS', '30'], ['FEED', '1080p Stream'], ['LATENCY', '12 ms']].map(([k, v], i) => (
            <span key={k} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#64748b' }}>
              {i > 0 && <span style={{ width: 1, height: 12, background: '#cbd5e1', display: 'inline-block' }} />}
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#2563eb', fontSize: '0.7rem' }}>{k}</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{v}</span>
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: '#10b981', fontWeight: 600 }}>
            ● LIVE SENSORS SYNCED
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scan { 0% { top:-1%; } 100% { top:101%; } }
      `}</style>
    </div>
  );
}
