import { useState } from 'react';

export const PILLARS = [
  {
    id: 'consumer-adas',
    title: 'Consumer Auto Safety (All-Weather ADAS)',
    subtitle: 'Zero-Visibility Hazard Detection for Indian Roads',
    icon: '🛡️',
    badge: 'Mass Production Ready',
    accentColor: '#2563eb',
    gradientBg: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(59,130,246,0.02) 100%)',
    borderColor: '#dbeafe',
    description: `Project Sanjaya's LiDAR engine slices through India's most challenging driving conditions—from dense North Indian winter smog to heavy monsoon rains—providing life-saving, zero-visibility hazard detection where standard optical cameras completely fail.`,
    highlights: [
      'Penetrates North Indian winter fog & heavy monsoon downpours',
      'Zero-visibility detection of unlit vehicles, cattle, and pedestrians',
      'Eliminates glare blindness from un-dipped high beams',
    ],
  },
  {
    id: 'democratizing-autonomy',
    title: 'Democratizing Autonomy (Cost-Effective Compute)',
    subtitle: 'Trig-Free Cartesian Perception on Mid-Range Hardware',
    icon: '⚡',
    badge: 'High Scalability',
    accentColor: '#7c3aed',
    gradientBg: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(139,92,246,0.02) 100%)',
    borderColor: '#ddd6fe',
    description: `Our trig-free Cartesian Semantic Processing allows real-time 3D perception to run on normal, affordable GPUs. This brings high-end autonomous safety features to mid-range Indian vehicles without the massive hardware costs usually required by traditional LiDAR engines.`,
    highlights: [
      'Eliminates expensive trigonometric math overhead',
      'Runs 3D perception loops on consumer-grade Automotive GPUs',
      'Reduces compute hardware costs by up to 60% for OEM integration',
    ],
  },
  {
    id: 'tactical-defense',
    title: 'Tactical & Defense Mobility (Indian Army & DRDO)',
    subtitle: 'Stealth Autonomous Operations in Unmapped Terrain',
    icon: '🎖️',
    badge: 'National Security Asset',
    accentColor: '#059669',
    gradientBg: 'linear-gradient(135deg, rgba(5,150,105,0.06) 0%, rgba(16,185,129,0.02) 100%)',
    borderColor: '#a7f3d0',
    description: `Positioned as a strategic asset for national security, Sanjaya powers autonomous border patrol vehicles and unmanned supply convoys operating in unmapped, treacherous terrains like the Himalayas. It enables stealth navigation in pitch-black conditions without headlights while instantly detecting geometric hazards like hidden craters or drop-offs.`,
    highlights: [
      'Headlight-free blackout stealth navigation for nocturnal patrols',
      'Instant 3D spatial mapping of unmapped Himalayan drop-offs',
      'Resilient against optical camera thermal distortion & dust clouds',
    ],
  },
];

export default function BusinessImpact() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="strategic-impact"
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '64px 24px 96px',
      }}
      aria-label="Strategic Business Impact & Use Cases"
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: 52 }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#1d4ed8',
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            padding: '5px 14px',
            borderRadius: 99,
            marginBottom: 16,
          }}
        >
          Strategic Business Impact & Use Cases
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
          Engineered for India’s Infrastructure & Defense Needs
        </h2>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#64748b',
            fontSize: '0.98rem',
            maxWidth: 620,
            margin: '0 auto',
            lineHeight: 1.65,
          }}
        >
          Scaling next-generation 3D spatial perception from consumer ADAS to high-altitude tactical mobility — optimized for complex, zero-visibility environments.
        </p>
      </div>

      {/* Visual Showcase Card with Image Integration */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: 20,
          padding: '32px',
          marginBottom: 48,
          color: '#ffffff',
          boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Subtle grid accent overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 10px #10b981',
                }}
              />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontWeight: 700, color: '#93c5fd', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                PROJECT SANJAYA PERCEPTION MATRIX
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 12,
                lineHeight: 1.3,
              }}
            >
              Real-Time 3D Spatial Foveation in Action
            </h3>

            <p style={{ fontFamily: 'Inter, sans-serif', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 20 }}>
              Live perception stream showing trigonometric-free Cartesian grid partitioning and hazard classification under severe environmental conditions.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {[
                { label: 'Latency', value: '0ms Trig Overhead' },
                { label: 'Compute Cost', value: '-60% GPU Overhead' },
              ].map(stat => (
                <div
                  key={stat.label}
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    padding: '8px 14px',
                    borderRadius: 10,
                  }}
                >
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.68rem', color: '#94a3b8' }}>{stat.label}</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: '#60a5fa' }}>{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image visual display container */}
          <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(148, 163, 184, 0.2)', background: '#020617', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!imgError ? (
              <img
                src="https://share.gemini.google/kwDTU3FdNFqi"
                alt="Project Sanjaya LiDAR Perception Grid Visualization"
                onError={() => setImgError(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 14 }}
              />
            ) : (
              /* Fallback Cybernetic Perception Canvas Visualization */
              <div style={{ padding: 24, textAlign: 'center', background: 'radial-gradient(circle at center, #1e1b4b 0%, #020617 100%)', width: '100%' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🛰️ 👁️ 🚗</div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#60a5fa', fontSize: '0.95rem' }}>
                  Project Sanjaya All-Weather 3D Perception Mesh
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#94a3b8', marginTop: 4 }}>
                  Real-time LiDAR point-cloud processing & Cartesian Grid Partitioning
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3 Core Pillar Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}
      >
        {PILLARS.map(pillar => (
          <div
            key={pillar.id}
            style={{
              background: pillar.gradientBg,
              border: `1px solid ${pillar.borderColor}`,
              borderRadius: 16,
              padding: '28px 24px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            className="hover:shadow-lg hover:-translate-y-1"
          >
            <div>
              {/* Header: Icon + Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                    boxShadow: `0 4px 12px ${pillar.accentColor}25`,
                    border: `1px solid ${pillar.borderColor}`,
                  }}
                >
                  {pillar.icon}
                </div>

                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: pillar.accentColor,
                    background: '#ffffff',
                    border: `1px solid ${pillar.borderColor}`,
                    padding: '4px 10px',
                    borderRadius: 99,
                  }}
                >
                  {pillar.badge}
                </span>
              </div>

              {/* H3 Heading */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#0f172a',
                  marginBottom: 6,
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
              </h3>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: pillar.accentColor,
                  marginBottom: 14,
                }}
              >
                {pillar.subtitle}
              </p>

              {/* Description Copy */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  color: '#475569',
                  lineHeight: 1.6,
                  marginBottom: 20,
                }}
              >
                {pillar.description}
              </p>
            </div>

            {/* Bullet Highlights */}
            <div
              style={{
                borderTop: `1px solid ${pillar.borderColor}`,
                paddingTop: 16,
                marginTop: 'auto',
              }}
            >
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {pillar.highlights.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.78rem',
                      color: '#334155',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      marginBottom: 8,
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ color: pillar.accentColor, fontWeight: 'bold' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
