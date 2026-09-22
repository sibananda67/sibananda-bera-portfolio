import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      id="theme-toggle-button"
      onClick={toggleTheme}
      type="button"
      className={`group relative flex items-center gap-2 p-2 rounded-xl transition-all duration-300 cursor-pointer border ${
        isDark
          ? 'bg-slate-900/70 border-slate-700/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-850 shadow-md shadow-black/20'
          : 'bg-white/80 border-slate-200/90 text-slate-700 hover:text-cyan-600 hover:border-cyan-400 hover:bg-white shadow-sm'
      } backdrop-blur-md ${className}`}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="text-cyan-400 flex items-center justify-center"
            >
              <Moon className="w-4 h-4 fill-cyan-400/20" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="text-amber-500 flex items-center justify-center"
            >
              <Sun className="w-4 h-4 fill-amber-500/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}

      {/* Subtle indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors ${
          isDark ? 'bg-cyan-400' : 'bg-amber-500'
        }`}
      />
    </button>
  );
};
