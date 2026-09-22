import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { personalLinks } from '../data/portfolioData';
import { ArrowUpRight, Briefcase } from 'lucide-react';

interface LinkedInButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'card' | 'footer' | 'pill';
  className?: string;
  showIcon?: boolean;
}

const HOVER_QUIPS = [
  { emoji: "👀", text: "Oh… you found my LinkedIn!" },
  { emoji: "😎", text: "Professional stalking starts here." },
  { emoji: "😂", text: "Okay, okay… you can check my LinkedIn." },
  { emoji: "💼", text: "Looking for my professional side?" },
  { emoji: "🚀", text: "Want to see what I’m building?" },
  { emoji: "🤝", text: "Let’s connect!" }
];

export const LinkedInButton: React.FC<LinkedInButtonProps> = ({
  label = "LinkedIn",
  variant = "primary",
  className = "",
  showIcon = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [currentQuip, setCurrentQuip] = useState(HOVER_QUIPS[0]);
  const [showToast, setShowToast] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Pick a random quip on hover
  const handleMouseEnter = () => {
    const randomIndex = Math.floor(Math.random() * HOVER_QUIPS.length);
    setCurrentQuip(HOVER_QUIPS[randomIndex]);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    setShowToast(true);

    setTimeout(() => {
      setIsClicked(false);
      setIsHovered(false);
      setShowToast(false);
    }, 2000);
  };

  // Base styling per variant
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-blue-700/90 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-blue-600/20 border border-blue-400/30';
      case 'secondary':
        return 'px-4 py-2 rounded-xl bg-[#0e1322] hover:bg-[#151c2e] border border-blue-500/30 hover:border-blue-400 text-slate-200 hover:text-white text-xs font-mono shadow-md';
      case 'card':
        return 'w-full p-3.5 rounded-xl bg-[#0e1322] border border-blue-500/30 hover:border-blue-400 text-slate-200 hover:text-white text-xs font-mono shadow-lg';
      case 'footer':
        return 'px-3 py-1.5 rounded-lg bg-[#0e1322] hover:bg-[#151c2e] border border-white/10 hover:border-blue-400/60 text-slate-300 hover:text-white text-xs font-mono';
      case 'pill':
        return 'px-3.5 py-1.5 rounded-full bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:text-blue-100 text-xs font-mono';
      default:
        return 'px-4 py-2 rounded-xl bg-[#0e1322] border border-blue-500/30 text-slate-200 text-xs font-mono';
    }
  };

  return (
    <div className="relative inline-block">
      {/* Cartoon Speech Bubble & SB Cyber Mascot */}
      <AnimatePresence>
        {(isHovered || isClicked) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 450,
              damping: 24
            }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap flex items-end gap-1.5"
          >
            {/* Cute Futuristic Cartoon Robot Mascot */}
            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, -4, 4, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut"
              }}
              className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 border border-cyan-200/50 p-1 flex flex-col items-center justify-center shadow-lg shadow-cyan-500/30 relative"
            >
              {/* Antenna */}
              <div className="absolute -top-1.5 w-1 h-1.5 bg-cyan-300 rounded-full flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-ping absolute" />
              </div>
              {/* Eyes */}
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-950 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-200" />
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-950 flex items-center justify-center">
                  <div className="w-0.5 h-0.5 rounded-full bg-cyan-200" />
                </div>
              </div>
              {/* Smile / Mouth line */}
              <div className="w-2.5 h-0.5 bg-slate-950/70 rounded-full mt-0.5" />
            </motion.div>

            {/* Speech Bubble */}
            <div className="relative px-3 py-1.5 rounded-xl bg-[#0c1220]/95 backdrop-blur-md border border-cyan-400/40 text-slate-100 text-[11px] font-sans font-medium shadow-xl shadow-cyan-950/60 flex items-center gap-1.5">
              {isClicked ? (
                <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                  <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 0.6 }}
                  >
                    👀
                  </motion.span>
                  <span>Going to LinkedIn…</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <motion.span
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    {currentQuip.emoji}
                  </motion.span>
                  <span className="text-slate-200">{currentQuip.text}</span>
                </div>
              )}

              {/* Bubble Pointer Arrow */}
              <div className="absolute -bottom-1.5 left-7 -translate-x-1/2 w-2.5 h-2.5 bg-[#0c1220] border-r border-b border-cyan-400/40 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Button / Link */}
      <motion.a
        href={personalLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          y: -2,
          scale: 1.02,
          rotateZ: 0.5,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.96 }}
        aria-label="Connect on LinkedIn with Sibananda Bera (opens in new tab)"
        className={`group relative flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${getVariantStyles()} ${className} ${
          isClicked ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-[#080a10]' : ''
        }`}
      >
        {/* Briefcase or LinkedIn Icon */}
        {showIcon && (
          <motion.span
            animate={{
              rotate: isHovered ? [0, -10, 10, 0] : 0
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center text-sm"
          >
            💼
          </motion.span>
        )}

        <span className="tracking-wide">{isClicked ? 'Opening Profile...' : label}</span>

        {/* Dynamic Arrow */}
        <ArrowUpRight
          className={`w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 ${
            isHovered ? 'translate-x-0.5 -translate-y-0.5 text-cyan-200' : 'text-slate-400'
          }`}
        />

        {/* Ambient Hover Glow Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </motion.a>

      {/* Easter Egg Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl bg-[#0d1424] border border-cyan-400/50 text-white text-xs font-mono shadow-2xl shadow-cyan-500/20 flex items-center gap-2 backdrop-blur-xl"
          >
            <span className="text-base">🚀</span>
            <span>See you on LinkedIn!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
