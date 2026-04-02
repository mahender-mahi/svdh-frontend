// src/components/Chatbot.jsx — AI Chatbot with OpenAI + rule-based fallback
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createLead } from '../utils/api';

const SYSTEM_PROMPT = `You are a helpful dental assistant for Srivenkateshwara Dental Hospital 
in Ashok Nagar, Kamareddy, Telangana. You help patients understand dental services, book appointments, 
and answer questions about dental health. Keep responses concise (2-3 sentences max). 
Services offered: Dental Cleaning, Root Canal, Teeth Whitening, Dental Implants, 
Cosmetic Dentistry, Orthodontics, Paediatric Dentistry, Oral Surgery. 
When patients describe symptoms (tooth pain, sensitivity, bleeding gums etc.), 
suggest the relevant service and encourage them to book an appointment. 
Always be warm, professional, and reassuring.`;

const QUICK_OPTS = ['Tooth Pain', 'Cleaning', 'Whitening', 'Implants', 'Book Appointment'];

export default function Chatbot() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  const [open, setOpen]     = useState(false);
  const [msgs, setMsgs]     = useState([{
    role: 'bot',
    text: 'Hi! 👋 Welcome to Srivenkateshwara Dental Hospital Kamareddy.\n\nI can help you with dental services, symptoms, and booking. What brings you here today?',
  }]);
  const [input, setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const [collecting, setCollecting] = useState(null); // {field, data}
  const [showOpts, setShowOpts] = useState(true);
  const msgsEndRef = useRef(null);

  useEffect(() => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, open]);

  if (isAdminPage) return null;

  const addMsg = (role, text) => setMsgs(m => [...m, { role, text }]);

  async function callOpenAI(userMessage, history) {
    const key = import.meta.env.VITE_OPENAI_API_KEY;
    if (!key || key === 'sk-...') return null; // fallback to rule-based

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          max_tokens: 150,
          temperature: 0.7,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...history.slice(-6).map(m => ({ role: m.role === 'bot' ? 'assistant' : 'user', content: m.text })),
            { role: 'user', content: userMessage },
          ],
        }),
      });
      const data = await res.json();
      return data.choices?.[0]?.message?.content || null;
    } catch { return null; }
  }

  function ruleBasedReply(msg) {
    const m = msg.toLowerCase();
    if (m.includes('pain') || m.includes('ache') || m.includes('hurt'))
      return 'Tooth pain can indicate a cavity, infection, or need for root canal treatment. Our dentists at Srivenkateshwara Dental Hospital can diagnose and relieve your pain quickly. Would you like to book an appointment?';
    if (m.includes('clean') || m.includes('scaling') || m.includes('tartar'))
      return 'Professional dental cleaning removes plaque and tartar buildup, preventing gum disease. We recommend cleaning every 6 months. Shall I help you book a session?';
    if (m.includes('white') || m.includes('bright') || m.includes('stain'))
      return 'Our professional teeth whitening can brighten your smile by up to 8 shades in one visit! ✨ Safe, effective, and long-lasting. Would you like to book a whitening session?';
    if (m.includes('implant') || m.includes('missing') || m.includes('replace'))
      return 'Dental implants are a permanent, natural-looking solution for missing teeth. We offer premium implants at affordable prices in Kamareddy. Want to schedule a free consultation?';
    if (m.includes('brace') || m.includes('align') || m.includes('crooked') || m.includes('ortho'))
      return 'We offer braces and clear aligners for all ages! Our orthodontist will assess your teeth and recommend the best treatment. Would you like to know more?';
    if (m.includes('root canal') || m.includes('rct'))
      return 'Root canal treatment (RCT) is completely painless with modern techniques — it relieves severe tooth pain and saves your natural tooth. We use advanced rotary RCT for comfortable treatment. Want to book?';
    if (m.includes('book') || m.includes('appoint') || m.includes('visit'))
      return null; // trigger booking flow
    if (m.includes('cost') || m.includes('price') || m.includes('fees') || m.includes('charge'))
      return 'Our treatment prices are very affordable and competitive in Kamareddy. The exact cost depends on the treatment needed. Please call us or book an appointment for a transparent quote. No hidden charges!';
    if (m.includes('hour') || m.includes('time') || m.includes('open') || m.includes('when'))
      return 'We are open Monday–Saturday 9 AM to 8 PM, and Sunday 10 AM to 3 PM. Emergency dental care is available 24/7. You can walk in or book an appointment.';
    if (m.includes('address') || m.includes('location') || m.includes('where'))
      return 'We are located at Ashok Nagar, Vidya Nagar Colony, Kamareddy, Telangana 503111. Easy to find near the main road. You can also find us on Google Maps!';
    return 'I can help you with dental services, symptoms, and appointment booking. Could you tell me more about your dental concern so I can guide you better?';
  }

  async function handleSend(text) {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput('');
    setShowOpts(false);
    addMsg('user', msg);

    // Booking flow
    if (collecting) {
      const { field, data } = collecting;
      const newData = { ...data, [field]: msg };

      if (field === 'name') {
        setCollecting({ field: 'phone', data: newData });
        setTimeout(() => addMsg('bot', `Thanks ${msg}! 😊 Please share your mobile number so our team can confirm your appointment:`), 500);
      } else if (field === 'phone') {
        setCollecting({ field: 'concern', data: newData });
        setTimeout(() => addMsg('bot', 'Got it! Briefly describe your dental concern or the service you need:'), 500);
      } else if (field === 'concern') {
        setCollecting(null);
        // Save lead
        try {
          await createLead({ name: newData.name, phone: newData.phone, message: msg, source: 'chatbot' });
        } catch {}
        setTimeout(() => {
          addMsg('bot', `Thank you ${newData.name}! ✅\n\nYour request has been saved. Our team will call you at ${newData.phone} within 2 hours to confirm your appointment.\n\nFor urgent help, call us directly. We look forward to seeing you! 🦷`);
          setShowOpts(true);
        }, 600);
      }
      return;
    }

    // Detect booking intent
    const lower = msg.toLowerCase();
    if (lower.includes('book') || lower.includes('appoint') || lower.includes('visit') || lower.includes('yes')) {
      setCollecting({ field: 'name', data: {} });
      setTimeout(() => addMsg('bot', `Great! Let me help you book an appointment at Srivenkateshwara Dental Hospital.\n\nFirst, what's your full name?`), 500);
      return;
    }

    setLoading(true);
    try {
      const aiReply = await callOpenAI(msg, msgs);
      const reply = aiReply || ruleBasedReply(msg);
      setTimeout(() => {
        addMsg('bot', reply);
        setShowOpts(true);
        setLoading(false);
      }, 600);
    } catch {
      addMsg('bot', ruleBasedReply(msg) || 'I\'m here to help! Would you like to book an appointment?');
      setShowOpts(true);
      setLoading(false);
    }
  }

  return (
    <>
      {/* FAB Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #90EE90, #87CEEB)', border: 'none', cursor: 'pointer' }}
        aria-label="Open chat"
      >
        {open ? '✕' : '💬'}
      </button>

      {/* Chatbox */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ background: '#fff', border: '1px solid rgba(135,206,235,0.4)', maxHeight: 520 }}>

          {/* Header */}
          <div className="flex items-center justify-between p-4" style={{ background: 'linear-gradient(135deg, #2a7aad, #3a8a3a)', color: '#fff' }}>
            <div>
              <p className="font-bold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🦷 Dental Assistant</p>
              <p className="text-xs opacity-80">Srivenkateshwara Dental Hospital, Kamareddy</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-400 text-green-900 font-bold">● Online</span>
              <button onClick={() => setOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2" style={{ maxHeight: 320 }}>
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-4/5 px-3 py-2 rounded-xl text-sm leading-relaxed ${m.role === 'bot' ? 'self-start' : 'self-end text-white'}`}
                style={{
                  background: m.role === 'bot' ? 'linear-gradient(135deg, #f0f8ff, #f0fff0)' : 'linear-gradient(135deg, #2a7aad, #3a8a3a)',
                  maxWidth: '85%', whiteSpace: 'pre-line',
                  borderRadius: m.role === 'bot' ? '0 12px 12px 12px' : '12px 12px 0 12px',
                  color: m.role === 'bot' ? '#1a2e1a' : '#fff',
                }}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="self-start px-3 py-2 rounded-xl text-sm" style={{ background: '#f0f8ff' }}>
                <span style={{ opacity: 0.6 }}>Typing...</span>
              </div>
            )}
            <div ref={msgsEndRef} />
          </div>

          {/* Quick Options */}
          {showOpts && !collecting && (
            <div className="flex flex-wrap gap-1 px-3 pb-2">
              {QUICK_OPTS.map(o => (
                <button key={o} onClick={() => handleSend(o)}
                  className="text-xs px-3 py-1 rounded-full font-bold transition-all hover:opacity-80"
                  style={{ background: '#f0fff0', border: '1px solid #90EE90', color: '#3a8a3a', cursor: 'pointer', fontFamily: 'Nunito, sans-serif' }}>
                  {o}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex gap-2 p-3 border-t" style={{ borderColor: '#f0f0f0' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder={collecting ? (collecting.field === 'name' ? 'Your name...' : collecting.field === 'phone' ? 'Your phone...' : 'Your concern...') : 'Type a message...'}
              className="flex-1 rounded-full border px-3 py-1.5 text-sm outline-none"
              style={{ borderColor: '#d0e8d0', fontFamily: 'Nunito, sans-serif' }}
            />
            <button onClick={() => handleSend()}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm flex-shrink-0"
              style={{ background: '#90EE90', border: 'none', cursor: 'pointer' }}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
