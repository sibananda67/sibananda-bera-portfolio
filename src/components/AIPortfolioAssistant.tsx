import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { getAIStatus, askSBAI, AIStatus } from '../services/aiService';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Mic, 
  MicOff, 
  Volume2, 
  RefreshCw, 
  ArrowUpRight,
  ShieldCheck,
  ChevronDown,
  MessageSquare
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

const QUICK_QUESTIONS = [
  "🚀 What does Sibananda do?",
  "🤖 What automation projects has he worked on?",
  "🛒 Tell me about IngrediaMart",
  "🔗 What integrations has he worked with?",
  "⚙️ What can he automate?",
  "💼 What are his technical skills?",
  "📄 Show me his experience",
  "📬 How can I contact him?"
];

export const AIPortfolioAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiStatus, setAiStatus] = useState<AIStatus>({ active: false, mode: 'demo', model: 'gemini-3.8-flash' });
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "Hey 👋 I’m SB AI.\n\nWant to know what Sibananda has built?",
      timestamp: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechAvailable, setSpeechAvailable] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check AI backend status on mount
  useEffect(() => {
    getAIStatus().then(setAiStatus);
    if (typeof window !== 'undefined' && ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      setSpeechAvailable(true);
    }
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isThinking) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ sender: m.sender, text: m.text }));
      const response = await askSBAI(text, history);

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "I don’t have that information in Sibananda’s portfolio yet.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  // Optional Voice Input Handler
  const toggleVoiceInput = () => {
    if (!speechAvailable) {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: "Voice input is not supported in this browser or iframe. Feel free to type your question directly!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      return;
    }

    const SpeechRec = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRec) return;

    if (isListening) {
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          setInputValue(transcript);
          handleSendMessage(transcript);
        }
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative p-3 sm:px-4 sm:py-3 rounded-2xl bg-gradient-to-r from-[#0d1424] via-[#101b33] to-[#0c162d] border border-cyan-500/40 hover:border-cyan-400 text-white shadow-2xl shadow-cyan-500/20 flex items-center gap-2.5 backdrop-blur-xl cursor-pointer"
            aria-label="Open SB AI Assistant"
          >
            {/* Pulsing Status Dot */}
            <div className="relative w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
              <Bot className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0d1424] animate-pulse" />
            </div>

            <div className="hidden sm:flex flex-col text-left">
              <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-white tracking-wide">
                <span>SB AI</span>
                <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${aiStatus.active ? 'bg-emerald-500/20 text-emerald-300' : 'bg-white/10 text-slate-400'}`}>
                  {aiStatus.active ? '🟢 AI ACTIVE' : '⚪ DEMO MODE'}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Ask me about my work</span>
            </div>
          </motion.button>
        )}
      </div>

      {/* Floating Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-50 w-[94vw] sm:w-[410px] max-h-[85vh] sm:max-h-[640px] h-[580px] bg-[#0b0f1a]/95 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#0e1424] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-heading font-bold text-white">SB AI</h3>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      aiStatus.active
                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                        : 'bg-white/5 text-slate-300 border-white/10'
                    }`}>
                      {aiStatus.active ? 'SB AI • AI ACTIVE' : 'SB AI • DEMO MODE'}
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-slate-400">Ask me about my work</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {speechAvailable && (
                  <button
                    onClick={toggleVoiceInput}
                    title={isListening ? "Listening... click to stop" : "Talk to SB AI (Voice Input)"}
                    className={`p-1.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                      isListening ? 'bg-red-500/20 border-red-500 text-red-300 animate-pulse' : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                )}

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close assistant"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Questions Carousel */}
            <div className="px-3 py-2 bg-[#090d16] border-b border-white/5 overflow-x-auto scrollbar-none flex items-center gap-1.5 text-[11px] font-mono whitespace-nowrap">
              <span className="text-slate-500 text-[10px] uppercase font-bold shrink-0">Prompts:</span>
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q.replace(/^[^\s]+\s/, ''))}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/5 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-200 transition-colors shrink-0 cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Mode Banner */}
            {!aiStatus.active && (
              <div className="px-4 py-1.5 bg-cyan-950/20 border-b border-cyan-500/15 text-[11px] font-mono text-cyan-300/90 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>SB AI is currently in demo mode.</span>
                </span>
                <span className="text-[10px] text-slate-400">Offline Intelligence</span>
              </div>
            )}

            {/* Chat Messages Thread */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-xs shadow-md'
                        : 'bg-[#121829] border border-white/10 text-slate-200 rounded-tl-xs shadow-sm'
                    }`}
                  >
                    {msg.text}
                    <div className={`text-[9px] mt-1.5 font-mono ${msg.sender === 'user' ? 'text-blue-200' : 'text-slate-500'} text-right`}>
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-[#121829] border border-white/10 text-slate-400 rounded-tl-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[11px] font-mono">SB AI is thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#0e1424] border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask anything about Sibananda's work..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#080c14] border border-white/10 focus:border-cyan-400 text-white text-xs placeholder:text-slate-500 focus:outline-none transition-colors"
                />

                <button
                  type="submit"
                  disabled={!inputValue.trim() || isThinking}
                  className="p-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                  aria-label="Send query"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Privacy Notice */}
              <div className="mt-2 text-center text-[10px] font-mono text-slate-500 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3 h-3 text-slate-500" />
                <span>AI responses are generated from verified portfolio information.</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
