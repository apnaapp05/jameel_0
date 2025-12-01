"use client";
import React, { useState } from 'react';
import { 
  MessageSquare, 
  CalendarDays, 
  Send, 
  Bot, 
  User, 
  Clock, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

export default function BookingPage() {
  const [mode, setMode] = useState<'chat' | 'manual'>('chat');

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)]">
      
      {/* 1. Toggle Switcher */}
      <div className="flex p-1 bg-slate-100 rounded-xl mb-4">
        <button 
          onClick={() => setMode('chat')}
          className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${
            mode === 'chat' ? 'bg-white text-brand-teal shadow-sm' : 'text-slate-500'
          }`}
        >
          <Bot className="h-4 w-4" /> AI Assistant
        </button>
        <button 
          onClick={() => setMode('manual')}
          className={`flex-1 py-2 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${
            mode === 'manual' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
          }`}
        >
          <CalendarDays className="h-4 w-4" /> Manual Book
        </button>
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden relative">
        {mode === 'chat' ? <AIChatInterface /> : <ManualBookingWizard />}
      </div>

    </div>
  );
}

// --- Sub-Component: AI Chat Interface ---
function AIChatInterface() {
  const [messages, setMessages] = useState([
    { role: 'agent', text: "As-salamun alaykum! I'm your Dental Assistant. How can I help you today? (e.g., 'I have a toothache' or 'Book a cleaning')" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    // Add User Message
    const newMsgs = [...messages, { role: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');
    
    // Simulate AI Thinking & Response
    setTimeout(() => {
      setMessages([...newMsgs, { 
        role: 'agent', 
        text: "I understand. Dr. Smith has an opening tomorrow at 10:00 AM. Shall I book that for you?",
        action: true 
      }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat History */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-brand-teal text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
              {/* If Agent has an action proposal */}
              {/* @ts-ignore */}
              {msg.action && (
                <div className="mt-3 bg-slate-50 p-2 rounded-lg border border-slate-100 flex gap-2">
                  <button className="flex-1 bg-brand-teal text-white py-1.5 rounded text-xs font-bold">Confirm</button>
                  <button className="flex-1 bg-white border border-slate-200 text-slate-600 py-1.5 rounded text-xs">Other Time</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your request..." 
          className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-teal"
        />
        <button 
          onClick={handleSend}
          className="p-3 bg-brand-teal text-white rounded-full hover:bg-teal-600 transition-colors"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// --- Sub-Component: Manual Wizard ---
function ManualBookingWizard() {
  return (
    <div className="p-4 space-y-4 overflow-y-auto h-full">
      <h3 className="font-bold text-slate-800">Select Doctor</h3>
      <div className="p-3 border border-slate-200 rounded-xl flex items-center gap-3 cursor-pointer ring-2 ring-brand-teal bg-teal-50/30">
        <div className="h-10 w-10 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">S</div>
        <div className="flex-1">
          <div className="font-bold text-sm">Dr. Sarah Smith</div>
          <div className="text-xs text-slate-500">General Dentist</div>
        </div>
        <CheckCircle2 className="h-5 w-5 text-brand-teal" />
      </div>

      <h3 className="font-bold text-slate-800 mt-4">Select Date</h3>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {['Mon 24', 'Tue 25', 'Wed 26'].map((d, i) => (
          <button key={i} className={`min-w-[70px] p-3 rounded-xl border flex flex-col items-center gap-1 text-sm ${i===1 ? 'bg-brand-teal text-white border-brand-teal' : 'bg-white border-slate-200'}`}>
            <span className="text-xs opacity-70">{d.split(' ')[0]}</span>
            <span className="font-bold text-lg">{d.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      <h3 className="font-bold text-slate-800 mt-4">Available Slots</h3>
      <div className="grid grid-cols-2 gap-2">
        {['09:00 AM', '11:30 AM', '02:00 PM', '04:15 PM'].map((t) => (
          <button key={t} className="py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-brand-teal hover:text-brand-teal">
            {t}
          </button>
        ))}
      </div>
      
      <button className="w-full mt-6 bg-slate-800 text-white py-3 rounded-xl font-bold text-sm">
        Confirm Booking
      </button>
    </div>
  );
}