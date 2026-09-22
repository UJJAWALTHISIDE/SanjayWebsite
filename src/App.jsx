import { useState, useCallback, useEffect } from 'react';
import { initGemini, sendMessage } from './lib/gemini';
import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import BusinessImpact from './components/BusinessImpact';
import ChatDrawer from './components/ChatDrawer';
import './index.css';

let mid = 0;
const uid = () => ++mid;

export default function App() {
  const [chatOpen, setChatOpen]   = useState(false);
  const [messages, setMessages]   = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { initGemini(); }, []);

  const push = useCallback((role, content) =>
    setMessages(p => [...p, { id: uid(), role, content }]), []);

  const handleSend = useCallback(async (text, showUserMsg = true) => {
    if (!text.trim() || isLoading) return;
    if (showUserMsg) push('user', text);
    setChatOpen(true);
    setIsLoading(true);
    const res = await sendMessage(text);
    push('assistant', res);
    setIsLoading(false);
  }, [isLoading, push]);

  const handleDeepDive = useCallback((title, prompt) => {
    setChatOpen(true);
    push('user', `🔍 Deep Dive: ${title}`);
    setIsLoading(true);
    sendMessage(prompt).then(res => {
      setMessages(p => [...p, { id: uid(), role: 'assistant', content: res }]);
      setIsLoading(false);
    });
  }, [push]);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a' }}>
      <Header
        onToggleChat={() => setChatOpen(p => !p)}
        chatOpen={chatOpen}
      />
      <main id="main-content">
        <FeatureGrid onDeepDive={handleDeepDive} />
        <BusinessImpact />
      </main>
      <ChatDrawer
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        messages={messages}
        isLoading={isLoading}
        onSendMessage={t => handleSend(t, true)}
      />
    </div>
  );
}
