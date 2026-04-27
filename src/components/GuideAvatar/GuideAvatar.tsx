'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionTracker } from './useSectionTracker';

// --- Speech Bubble ---
function SpeechBubble({ message, visible }: { message: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="absolute -bottom-12 -left-4 z-20"
        >
          <div
            className="max-w-[180px] px-3 py-2 rounded-xl text-xs shadow-lg backdrop-blur-sm pointer-events-none"
            style={{
              backgroundColor: 'var(--bg-elevated)',
              borderColor: 'var(--border-accent)',
              color: 'var(--text-secondary)',
              boxShadow: '0 4px 12px var(--shadow-color)',
            }}
          >
            {message}
            <div
              className="absolute -top-1.5 left-4 w-3 h-3 border-t border-r rotate-45"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                borderColor: 'var(--border-accent)',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Guide Avatar Component ---
export default function GuideAvatar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { currentMessage, bubbleVisible } = useSectionTracker();

  // Track mouse for avatar tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex-shrink-0">
      <motion.div
        className="rounded-full overflow-hidden border-2 backdrop-blur-sm flex items-center justify-center"
        style={{
          width: 120,
          height: 120,
          borderColor: 'var(--border-accent)',
          backgroundColor: 'var(--bg-secondary)',
        }}
        animate={{
          rotateX: mousePos.y * -5,
          rotateY: mousePos.x * 5,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Professional illustrated avatar */}
        <svg viewBox="0 0 120 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: 'var(--text-accent)', stopOpacity: '0.3'}} />
              <stop offset="100%" style={{stopColor: 'var(--text-accent)', stopOpacity: '0.1'}} />
            </linearGradient>
          </defs>
          {/* Background */}
          <rect width="120" height="120" fill="url(#avatarGrad)" />
          {/* Head - more realistic proportions */}
          <ellipse cx="60" cy="40" rx="16" ry="20" fill="var(--text-secondary)" opacity="0.7" />
          {/* Hair */}
          <path d="M44 32 Q44 20 60 18 Q76 20 76 32 Q76 26 60 24 Q44 26 44 32" fill="var(--text-primary)" opacity="0.5" />
          {/* Eyes */}
          <circle cx="54" cy="38" r="2" fill="var(--bg-secondary)" />
          <circle cx="66" cy="38" r="2" fill="var(--bg-secondary)" />
          {/* Nose */}
          <path d="M60 38 L58 44 L62 44 Z" fill="var(--text-primary)" opacity="0.3" />
          {/* Mouth */}
          <path d="M55 48 Q60 51 65 48" stroke="var(--bg-secondary)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Neck */}
          <rect x="56" y="58" width="8" height="8" fill="var(--text-secondary)" opacity="0.6" />
          {/* Shoulders / Body */}
          <path d="M30 100 Q30 75 60 72 Q90 75 90 100" fill="var(--text-primary)" opacity="0.4" />
          {/* Collar */}
          <path d="M50 75 L60 82 L70 75" stroke="var(--text-accent)" strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      </motion.div>
      <SpeechBubble message={currentMessage} visible={bubbleVisible} />
    </div>
  );
}
