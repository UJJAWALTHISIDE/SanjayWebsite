import { useEffect, useRef } from 'react';

function Bubble({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div
      className="msg-animate"
      style={{
        display: 'flex', flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-end', gap: 8,
      }}
    >
      {/* Avatar dot */}
      <div
        style={{
          flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
          background: isUser ? 'linear-gradient(135deg,#3b82f6,#2563eb)' : 'linear-gradient(135deg,#1e293b,#334155)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.65rem', fontWeight: 700, color: '#fff',
          fontFamily: "'Space Grotesk', sans-serif",
          border: '2px solid',
          borderColor: isUser ? '#bfdbfe' : '#334155',
        }}
      >
        {isUser ? 'U' : 'S'}
      </div>

      {/* Bubble */}
      <div
        style={{
          maxWidth: '76%',
          padding: '10px 13px',
          borderRadius: isUser ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
          background: isUser ? '#3b82f6' : '#1e293b',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.82rem',
          lineHeight: 1.6,
        }}
      >
        {!isUser && (
          <span style={{ display: 'block', fontSize: '0.58rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: '0.1em', color: '#60a5fa', marginBottom: 4 }}>
            SANJAY
          </span>
        )}
        {msg.content.split('\n').map((l, i, arr) => (
          <span key={i}>{l}{i < arr.length - 1 && <br />}</span>
        ))}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="msg-animate" style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,#1e293b,#334155)', border: '2px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: '#60a5fa', fontFamily: "'Space Grotesk', sans-serif" }}>S</div>
      <div style={{ display: 'flex', gap: 4, padding: '12px 14px', background: '#1e293b', borderRadius: '14px 14px 14px 4px' }}>
        <span className="typing-dot" /><span className="typing-dot" /><span className="typing-dot" />
      </div>
    </div>
  );
}

const SUGGESTIONS = ['What is Divya Drishti?', 'How does foveation work?', 'Explain sensor fusion'];

export default function ChatDrawer({ isOpen, onClose, messages, isLoading, onSendMessage }) {
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isLoading]);
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 420); }, [isOpen]);

  function submit() {
    const t = inputRef.current?.value?.trim();
    if (!t || isLoading) return;
    inputRef.current.value = '';
    onSendMessage(t);
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(15,23,42,0.25)',
          backdropFilter: 'blur(2px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Drawer */}
      <aside
        id="chat-drawer"
        className={isOpen ? 'drawer-open' : 'drawer-closed'}
        style={{
          position: 'fixed', top: 0, right: 0, height: '100%',
          width: '100%', maxWidth: 380, zIndex: 50,
          background: '#0f172a',
          borderLeft: '1px solid #1e293b',
          display: 'flex', flexDirection: 'column',
          boxShadow: '-12px 0 40px rgba(0,0,0,0.3)',
        }}
        role="complementary"
        aria-label="SANJAY Chat"
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #1e293b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, color: '#fff', fontFamily: "'Space Grotesk', sans-serif", border: '1.5px solid #3b82f640' }}>S</div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc' }}>SANJAY</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.62rem', color: '#22c55e', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                Divya Drishti active
              </p>
            </div>
          </div>
          <button
            id="chat-close-btn"
            onClick={onClose}
            style={{ width: 30, height: 30, borderRadius: 8, border: '1px solid #1e293b', background: 'transparent', color: '#475569', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, background 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#f8fafc'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#475569'; }}
            aria-label="Close chat"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Empty state */}
          {messages.length === 0 && !isLoading && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: '#1e293b', border: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>👁️</div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, maxWidth: 220 }}>
                Ask anything about autonomous navigation, or click <span style={{ color: '#3b82f6' }}>Deep Dive</span> on a module.
              </p>
            </div>
          )}

          {messages.map(m => <Bubble key={m.id} msg={m} />)}
          {isLoading && <TypingDots />}
          <div ref={bottomRef} />
        </div>

        {/* Suggestion chips */}
        {messages.length === 0 && !isLoading && (
          <div style={{ padding: '0 20px 12px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => onSendMessage(s)}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#64748b',
                  background: 'transparent', border: '1px solid #1e293b',
                  borderRadius: 99, padding: '4px 10px', cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.color = '#60a5fa'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.color = '#64748b'; }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input row */}
        <div style={{ padding: '12px 20px 20px', borderTop: '1px solid #1e293b' }}>
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#1e293b', border: '1px solid #334155',
              borderRadius: 12, padding: '8px 12px',
            }}
            onFocus={e => e.currentTarget.style.borderColor = '#3b82f640'}
          >
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              placeholder="Ask SANJAY…"
              disabled={isLoading}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } }}
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: '0.83rem', color: '#f1f5f9',
                caretColor: '#3b82f6',
              }}
              aria-label="Type your message"
            />
            <button
              id="chat-send-btn"
              onClick={submit}
              disabled={isLoading}
              className="btn-blue"
              style={{ padding: '6px 8px', borderRadius: 8, minWidth: 32, justifyContent: 'center' }}
              aria-label="Send"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
              </svg>
            </button>
          </div>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: '#334155', textAlign: 'center', marginTop: 8 }}>
            Powered by Gemini 2.0 Flash
          </p>
        </div>
      </aside>
    </>
  );
}
