import { useState } from 'react';

export const COMPARISON_DATA = [
  {
    aspect: 'Processing',
    squareGrid: 'Fast Cartesian math & direct lookup O(1)',
    radialGrid: 'Requires trigonometric transformations (sin/cos)',
    squareAdvantage: 'High Speed',
    icon: '⚡',
  },
  {
    aspect: 'Alignment',
    squareGrid: 'Clean boundaries across resolutions',
    radialGrid: 'Distorted & complex boundaries',
    squareAdvantage: 'Zero Distortion',
    icon: '📐',
  },
  {
    aspect: 'Resolution',
    squareGrid: 'Easily targets specific threat zones',
    radialGrid: 'Scaling affects entire radial regions',
    squareAdvantage: 'Focused Compute',
    icon: '🎯',
  },
  {
    aspect: 'Hardware',
    squareGrid: 'Efficient for GPU & edge hardware',
    radialGrid: 'Higher transformation & compute overhead',
    squareAdvantage: '-60% GPU Overhead',
    icon: '💻',
  },
];

export const UNIQUE_SOLUTIONS = [
  {
    id: 'geometric-foveation',
    title: 'Geometric Foveation',
    tagline: 'Height Variance & Drivable Surface Isolation',
    icon: '🏔️',
    accentColor: '#059669',
    bgColor: 'linear-gradient(135deg, rgba(5,150,105,0.06) 0%, rgba(16,185,129,0.02) 100%)',
    borderColor: '#a7f3d0',
    description: 'Uses height variance (ΔZ = Zmax - Zmin) within Cartesian square grid cells to rapidly detect curbs and potholes while instantly identifying the safe drivable road surface.',
    howSquareHelps: 'Square grid cell indexing allows constant-time O(1) height variance calculation across adjacent cells without 3D point cloud distortion.',
  },
  {
    id: 'semantic-foveation',
    title: 'Semantic Foveation',
    tagline: 'Dynamic Target-Specific Resolution Zoom',
    icon: '👁️',
    accentColor: '#2563eb',
    bgColor: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(59,130,246,0.02) 100%)',
    borderColor: '#bfdbfe',
    description: 'Dynamically increases grid resolution (down to 5cm) around detected semantic objects (pedestrians, vehicles) for precise threat tracking while keeping background regions computationally efficient.',
    howSquareHelps: 'Square cells can be recursively quad-split into finer sub-grids cleanly, unlike radial arcs which distort cell shapes when scaled.',
  },
  {
    id: 'predictive-dbscan',
    title: 'Predictive DBSCAN Tracking',
    tagline: 'Clustering, Relative Speed & Time-to-Collision (TTC)',
    icon: '⏱️',
    bgColor: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(139,92,246,0.02) 100%)',
    accentColor: '#7c3aed',
    borderColor: '#ddd6fe',
    description: 'Groups detected 3D spatial points into discrete object clusters and tracks their trajectory vectors to estimate relative velocity and Time-to-Collision (TTC) for active brake execution.',
    howSquareHelps: 'Grid-accelerated DBSCAN eliminates k-d tree search bottlenecks, running cluster grouping at 100Hz on edge GPUs.',
  },
];

export const FOVEATION_TIERS = [
  {
    tier: 'Immediate Threat Zone',
    range: '0 – 10 m',
    res: '5 cm Resolution',
    desc: 'Maximum detail for active pedestrian, curb & pothole detection',
    accent: '#ef4444',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    tier: 'Mid-Range Zone',
    range: '10 – 40 m',
    res: '10 – 20 cm Resolution',
    desc: 'Balanced spatial detail and edge compute load',
    accent: '#f59e0b',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    tier: 'Distant Zone',
    range: '40 – 100 m+',
    res: '50 cm Resolution',
    desc: 'Compressed spatial representation for far vehicle tracking',
    accent: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
];

export const ARCHITECTURE_PILLARS = [
  {
    num: '1',
    title: 'Progressive Multi-Tier Foveation',
    subtitle: '5cm → 50cm Dynamic Grids',
    desc: 'Dynamically scales resolution from 5cm (near-field) to 50cm (far-field), preserving spatial awareness while drastically reducing memory load.',
    icon: '📊',
    color: '#2563eb',
  },
  {
    num: '2',
    title: 'Cartesian Semantic Processing',
    subtitle: 'Square Cartesian Grid AI',
    desc: 'Uses a square Cartesian grid with Semantic AI to avoid costly trigonometric calculations and eliminate edge-compute latency.',
    icon: '⊞',
    color: '#7c3aed',
  },
  {
    num: '3',
    title: 'Critical Point Isolation (2.5D Z-Height)',
    subtitle: 'O(1) Elevation Hazards ΔZ',
    desc: 'Analyzes Z-max, Z-min, and Z-avg elevation variances to isolate potholes, curbs, and terrain hazards lost in standard 2D mapping.',
    icon: '🏔️',
    color: '#059669',
  },
  {
    num: '4',
    title: 'Zero-Latency Binary Transmission',
    subtitle: 'Float32Array WebSockets',
    desc: 'Transmits raw spatial data via Float32Array binary WebSockets instead of JSON, eliminating parsing overhead for real-time 100Hz streaming.',
    icon: '⚡',
    color: '#d97706',
  },
];

export default function GridComparison() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <section
      id="grid-architecture"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '64px 24px 48px',
      }}
      aria-label="2.5D LiDAR Elevation & Square Grid Comparison"
    >
      {/* ── Section Header ── */}
      <div style={{ textAlign: 'center', marginBottom: 44 }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#2563eb',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            padding: '5px 14px',
            borderRadius: 99,
            marginBottom: 16,
          }}
        >
          2.5D LiDAR Elevation Architecture
        </span>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: '#0f172a',
            lineHeight: 1.2,
            marginBottom: 14,
            letterSpacing: '-0.02em',
          }}
        >
          Why Square Cartesian Grids Outperform Radial Grids
        </h2>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#64748b',
            fontSize: '0.96rem',
            maxWidth: 640,
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          Modern LiDAR generates 100K–200K+ points/frame. Sanjaya’s 2.5D Cartesian mapping & multi-tier foveation eliminate compute bottlenecks while preserving elevation data.
        </p>
      </div>

      {/* ── Tab Selector ── */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 36 }}>
        <div
          style={{
            background: '#f1f5f9',
            padding: 4,
            borderRadius: 12,
            display: 'inline-flex',
            gap: 4,
            border: '1px solid #e2e8f0',
          }}
        >
          {[
            { id: 'comparison', label: '📊 Square Grid vs Radial Grid' },
            { id: 'foveation', label: '🎯 2.5D Foveation & Pipeline' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 20px',
                borderRadius: 8,
                border: 'none',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer',
                background: activeTab === tab.id ? '#ffffff' : 'transparent',
                color: activeTab === tab.id ? '#1d4ed8' : '#64748b',
                boxShadow: activeTab === tab.id ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── TAB 1: Aspect Comparison Table + Uniqueness Section ── */}
      {activeTab === 'comparison' && (
        <div>
          {/* Comparison Matrix Table */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: 20,
              border: '1px solid #cbd5e1',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
              overflow: 'hidden',
              marginBottom: 32,
            }}
          >
            {/* Table Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 2fr 2fr',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                color: '#ffffff',
                padding: '16px 24px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                alignItems: 'center',
              }}
            >
              <div>ASPECT</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#93c5fd' }}>
                <span>⊞</span>
                <span>SQUARE GRID (PROJECT SANJAYA)</span>
              </div>
              <div style={{ color: '#cbd5e1', opacity: 0.85 }}>
                <span>⭕ RADIAL GRID (CONVENTIONAL)</span>
              </div>
            </div>

            {/* Table Rows */}
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={row.aspect}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 2fr 2fr',
                  padding: '20px 24px',
                  background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  borderBottom: idx < COMPARISON_DATA.length - 1 ? '1px solid #f1f5f9' : 'none',
                  alignItems: 'center',
                }}
              >
                {/* Aspect Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1.1rem' }}>{row.icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                    {row.aspect}
                  </span>
                </div>

                {/* Square Grid Cell (Superior) */}
                <div
                  style={{
                    background: 'rgba(37, 99, 235, 0.04)',
                    borderLeft: '3px solid #2563eb',
                    padding: '10px 14px',
                    borderRadius: '0 8px 8px 0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#1e293b', fontSize: '0.86rem' }}>
                      {row.squareGrid}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '0.62rem',
                        fontWeight: 700,
                        color: '#166534',
                        background: '#dcfce7',
                        padding: '2px 6px',
                        borderRadius: 4,
                      }}
                    >
                      ✓ {row.squareAdvantage}
                    </span>
                  </div>
                </div>

                {/* Radial Grid Cell (Standard) */}
                <div style={{ padding: '10px 14px', color: '#64748b', fontFamily: 'Inter, sans-serif', fontSize: '0.85rem' }}>
                  <span style={{ color: '#94a3b8' }}>✕ </span>
                  {row.radialGrid}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Problem vs Solution summary box */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
              marginBottom: 48,
            }}
          >
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: 14,
                padding: '20px 22px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#dc2626', marginBottom: 8 }}>
                <span style={{ fontSize: '1.2rem' }}>⚠️</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase' }}>
                  The Problem with Radial Grids
                </span>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#7f1d1d', lineHeight: 1.55, margin: 0 }}>
                Radial grids require complex sine/cosine trigonometric transformations for every point, causing heavy computational overhead on GPU edge devices and distorted boundaries across scaling tiers.
              </p>
            </div>

            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: 14,
                padding: '20px 22px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#16a34a', marginBottom: 8 }}>
                <span style={{ fontSize: '1.2rem' }}>⊞</span>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.88rem', textTransform: 'uppercase' }}>
                  Sanjaya's Square Grid Solution
                </span>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#14532d', lineHeight: 1.55, margin: 0 }}>
                Square Cartesian grids enable direct array index lookup O(1) without trigonometric math, ensuring clean resolution boundaries and maximum compute efficiency for real-time ADAS safety.
              </p>
            </div>
          </div>

          {/* ── NEW SECTION: Uniqueness of the Solution ── */}
          <div
            style={{
              background: 'linear-gradient(135deg, #064e3b 0%, #0f172a 100%)',
              borderRadius: 20,
              padding: '36px 32px',
              color: '#ffffff',
              boxShadow: '0 20px 40px -15px rgba(6, 78, 59, 0.35)',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(16, 185, 129, 0.3)',
            }}
          >
            {/* Header Badge & Title */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.1)', pb: 16, paddingBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: '#10b981',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    boxShadow: '0 0 16px rgba(16, 185, 129, 0.5)',
                  }}
                >
                  ✦
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: 0,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Uniqueness of the Solution
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: '#a7f3d0', margin: '2px 0 0' }}>
                    How Cartesian Square Grids enable 3 breakthrough perception innovations
                  </p>
                </div>
              </div>

              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: '#34d399',
                  background: 'rgba(52, 211, 153, 0.12)',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  padding: '6px 14px',
                  borderRadius: 99,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                INNOVATIVE • ROBUST • SCALABLE
              </span>
            </div>

            {/* 3 Unique Capability Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 20,
              }}
            >
              {UNIQUE_SOLUTIONS.map(item => (
                <div
                  key={item.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${item.borderColor}40`,
                    borderRadius: 16,
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                      <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                      <div>
                        <h4
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: '#ffffff',
                            margin: 0,
                          }}
                        >
                          {item.title}
                        </h4>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#6ee7b7', fontWeight: 600 }}>
                          {item.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.86rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: 16 }}>
                      {item.description}
                    </p>
                  </div>

                  {/* Square Grid Advantage Sub-box */}
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.25)',
                      borderLeft: `3px solid ${item.accentColor}`,
                      borderRadius: '0 8px 8px 0',
                      padding: '10px 12px',
                    }}
                  >
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.74rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
                      <strong style={{ color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>Square Grid Advantage: </strong>
                      {item.howSquareHelps}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: Multi-Tier Foveation & Pipeline ── */}
      {activeTab === 'foveation' && (
        <div>
          {/* Foveation Resolution Tiers Header */}
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>
              Progressive Multi-Tier Foveation (5cm → 50cm)
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: '#64748b', margin: 0 }}>
              Foveated attention concentrates high-density grid cells where hazard risk is greatest while compressing background spatial noise.
            </p>
          </div>

          {/* 3 Foveation Zone Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 16,
              marginBottom: 36,
            }}
          >
            {FOVEATION_TIERS.map(zone => (
              <div
                key={zone.tier}
                style={{
                  background: zone.bg,
                  border: `1px solid ${zone.border}`,
                  borderRadius: 14,
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 700, color: zone.accent, textTransform: 'uppercase' }}>
                    {zone.tier}
                  </span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 800, color: '#0f172a' }}>
                    {zone.range}
                  </span>
                </div>

                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 800, color: zone.accent, marginBottom: 8 }}>
                  {zone.res}
                </div>

                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  {zone.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Architecture Pillars Grid */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: 16 }}>
              Core 2.5D Solution Architecture
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: 16,
              }}
            >
              {ARCHITECTURE_PILLARS.map(item => (
                <div
                  key={item.num}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 14,
                    padding: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${item.color}15`,
                        color: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 800,
                        fontSize: '0.9rem',
                      }}
                    >
                      {item.num}
                    </div>

                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                        {item.title}
                      </h4>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', color: item.color, fontWeight: 600 }}>
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
