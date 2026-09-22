export default function Logo({ size = 36, className = '' }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.35)',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(191, 219, 254, 0.6)',
      }}
      className={className}
    >
      {/* HUD scan grid background effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
          opacity: 0.6,
        }}
      />

      {/* Cyber Eye / LiDAR Vision SVG Logo */}
      <svg
        width={size * 0.65}
        height={size * 0.65}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Outer Eye Shape */}
        <path
          d="M2 12C3.6 7.5 7.5 4 12 4C16.5 4 20.4 7.5 22 12C20.4 16.5 16.5 20 12 20C7.5 20 3.6 16.5 2 12Z"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Iris Ring */}
        <circle cx="12" cy="12" r="4" stroke="#bfdbfe" strokeWidth="1.5" />
        {/* Glowing Core Pupil */}
        <circle cx="12" cy="12" r="2" fill="#ffffff" />
        {/* LiDAR Arc Rays */}
        <path
          d="M12 7V5M12 19V17M7 12H5M19 12H17"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
