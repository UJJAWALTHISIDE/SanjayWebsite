export default function FeatureCard({ title, description, icon, accentColor, index, onDeepDive }) {
  return (
    <div
      className="card"
      style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 12 }}
      role="article"
      aria-label={`Feature: ${title}`}
    >
      {/* Top: icon + module badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div
          style={{
            width: 40, height: 40, borderRadius: 10, fontSize: 20,
            background: `${accentColor}12`,
            border: `1px solid ${accentColor}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {icon}
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: accentColor,
            background: `${accentColor}12`,
            padding: '3px 8px', borderRadius: 99,
            border: `1px solid ${accentColor}25`,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700, fontSize: '0.95rem',
          color: '#0f172a', lineHeight: 1.3,
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.78rem', color: '#64748b',
          lineHeight: 1.6, flex: 1,
        }}
      >
        {description}
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: '#f1f5f9' }} />

      {/* Deep Dive button */}
      <button
        id={`deep-dive-${title.toLowerCase().replace(/[\s&]+/g, '-')}`}
        onClick={() => onDeepDive(title)}
        aria-label={`Deep Dive into ${title}`}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          width: '100%', padding: '8px 0',
          background: `${accentColor}10`,
          border: `1.5px solid ${accentColor}30`,
          borderRadius: 9, cursor: 'pointer',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600, fontSize: '0.78rem', color: accentColor,
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = `${accentColor}20`; e.currentTarget.style.borderColor = `${accentColor}60`; }}
        onMouseLeave={e => { e.currentTarget.style.background = `${accentColor}10`; e.currentTarget.style.borderColor = `${accentColor}30`; }}
      >
        Deep Dive
        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
}
