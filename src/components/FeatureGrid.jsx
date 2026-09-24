import { useState } from 'react';
import FeatureCard from './FeatureCard';
import VideoPlayer from './VideoPlayer';
import IntroVideoModal from './IntroVideoModal';

export const FEATURES = [
  {
    title: 'Semantic Foveation',
    description: 'Dynamically allocates compute to high-attention regions, mimicking the human fovea for real-time scene understanding.',
    icon: '👁️',
    accentColor: '#3b82f6',
    deepDivePrompt: 'Explain Semantic Foveation in the context of this autonomous navigation project. How does it prioritize regions, what algorithms are involved, and how does it interact with the other modules?',
  },
  {
    title: 'Square Grids',
    description: 'Partitions the visual field into structured spatial cells for precise obstacle localization and path-planning coordination.',
    icon: '⊞',
    accentColor: '#8b5cf6',
    deepDivePrompt: 'Explain the Square Grid spatial partitioning module in this autonomous navigation system. How are grid cells defined and how do they feed into path planning?',
  },
  {
    title: 'Potholes & Curbs',
    description: 'Detects and classifies road surface anomalies and curb boundaries using depth estimation to ensure safe autonomous navigation.',
    icon: '🛣️',
    accentColor: '#10b981',
    deepDivePrompt: 'Explain the Potholes and Curbs detection module. What depth estimation methods and edge detection pipelines are used, and how does detection influence path planning?',
  },
  {
    title: 'Telemetry',
    description: 'Fuses live sensor streams — speed, heading, IMU, and LiDAR echoes — into a coherent real-time navigation decision loop.',
    icon: '📡',
    accentColor: '#f59e0b',
    deepDivePrompt: 'Explain the Telemetry module. What sensor streams are ingested, how is sensor fusion performed, and how does it feed into real-time navigation decisions?',
  },
];

export default function FeatureGrid({ onDeepDive }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState(null);

  return (
    <section
      style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '96px 24px 48px',
      }}
      aria-label="SANJAY feature modules"
    >
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.2rem',
          color: '#0a57c2',
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 1.5,
          margin: '0 auto 24px',
          width: '100%',
        }}
      >
        "Like Sanjay to Dhritrashtra, we grant vision to sightless machine."
      </p>

      {/* ── Page hero text ── */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#3b82f6',
            background: '#eff6ff', border: '1px solid #bfdbfe',
            padding: '4px 12px', borderRadius: 99, marginBottom: 16,
          }}
        >
          Autonomous Navigation System
        </span>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#0f172a', lineHeight: 1.15, marginBottom: 12,
          }}
        >
          See the world through{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #1d4ed8, #3b82f6, #60a5fa)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            LiDAR Vision
          </span>
        </h1>
        <p style={{ fontFamily: 'Inter, sans-serif', color: '#64748b', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
          Four intelligent modules working in unison to process, understand, and navigate the road ahead — in real time.
        </p>
      </div>

      {/* ── Side-by-Side Section: Video Player & Mythology Concept Card ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          marginBottom: 48,
        }}
      >
        {/* Uncropped Video Carousel Player Container */}
        <div style={{ flex: '1 1 540px', maxWidth: 760, minWidth: 320 }}>
          <VideoPlayer customSource={customVideoUrl} />
        </div>

        {/* Mythology Concept Artwork Card (Beside video, white background blend, no overlap) */}
        <div
          style={{
            flex: '0 1 320px',
            maxWidth: 340,
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: 20,
            padding: '20px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Artwork Image Container with seamless background blend */}
          <div
            style={{
              width: '100%',
              borderRadius: 14,
              overflow: 'hidden',
              background: '#ffffff',
              marginBottom: 14,
              padding: 4,
            }}
          >
            <img
              src="/sanjaya_mythology.jpg"
              alt="Sanjaya narrating the battlefield to King Dhritrashtra"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                mixBlendMode: 'multiply',
                borderRadius: 12,
              }}
            />
          </div>

          {/* Concept Caption */}
          <div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.64rem',
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                padding: '3px 10px',
                borderRadius: 99,
                display: 'inline-block',
                marginBottom: 8,
              }}
            >
              The Core Concept
            </span>

            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.98rem',
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.3,
                marginBottom: 6,
              }}
            >
              "Sanjaya, what do you see?"
            </h3>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                color: '#64748b',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Just as Sanjaya projected the battlefield to the blind King Dhritrashtra, Project Sanjaya acts as digital eyes for autonomous navigation.
            </p>
          </div>
        </div>
      </div>

      {/* ── Action bar just before cards: GitHub Link & Future Video Button ── */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          marginBottom: 24,
          padding: '16px 20px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)',
          borderRadius: 16,
          border: '1px solid #dbeafe',
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        }}
      >
        {/* Left: Section Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', letterSpacing: '0.04em' }}>
            Intelligence Modules
          </span>
          <span style={{ fontSize: '0.7rem', color: '#64748b', background: '#ffffff', padding: '2px 8px', borderRadius: 99, border: '1px solid #e2e8f0' }}>
            4 Core Systems
          </span>
        </div>

        {/* Right: GitHub Opening Link & Add Intro Video Button */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          {/* GitHub Opening Link */}
          <a
            href="https://github.com/aayush1901/LiDAR_2.5D"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 16px',
              borderRadius: 10,
              background: '#0f172a',
              color: '#ffffff',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)',
              transition: 'transform 0.2s ease, background 0.2s ease',
            }}
            className="hover:scale-105 hover:bg-slate-800"
          >
            {/* GitHub SVG Icon */}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Repository</span>
          </a>
           <a
            href="https://youtu.be/KYhXxxT2f0E"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '9px 16px',
              borderRadius: 10,
              background: '#9eb9f8',
              color: '#131212',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)',
              transition: 'transform 0.2s ease, background 0.2s ease',
            }}
            className="hover:scale-105 hover:bg-slate-800"
          >
            {/* GitHub SVG Icon */}
            <span>🎥</span>
            <span>Watch the Details Here! </span>
          </a>

          {/* Add Intro Video Button */}
         
        </div>
      </div>

      {/* ── 4-card grid ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}
      >
        {FEATURES.map((f, i) => (
          <FeatureCard
            key={f.title}
            index={i}
            title={f.title}
            description={f.description}
            icon={f.icon}
            accentColor={f.accentColor}
            onDeepDive={() => onDeepDive(f.title, f.deepDivePrompt)}
          />
        ))}
      </div>

      {/* Intro Video Dialog Modal */}
      <IntroVideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(url) => setCustomVideoUrl(url)}
      />
    </section>
  );
}
