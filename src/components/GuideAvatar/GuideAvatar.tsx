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
        className="rounded-full overflow-hidden border-2 backdrop-blur-sm"
        style={{
          width: 120,
          height: 120,
          borderColor: 'var(--border-accent)',
          backgroundColor: '#0f172a',
          perspective: '600px',
        }}
        animate={{
          rotateX: mousePos.y * -8,
          rotateY: mousePos.x * 8,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* 3D Human Avatar using CSS */}
        <div
          className="w-full h-full relative"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)',
          }}
        >
          {/* Head */}
          <div
            className="absolute rounded-full"
            style={{
              width: 40,
              height: 44,
              left: '50%',
              top: '18%',
              transform: 'translateX(-50%) translateZ(10px)',
              background: 'radial-gradient(circle at 40% 35%, #e8c9a0, #c49a6c)',
              boxShadow: 'inset -3px -3px 6px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.3)',
            }}
          >
            {/* Eyes */}
            <div
              className="absolute rounded-full"
              style={{ width: 4, height: 4, left: '28%', top: '42%', background: '#1a1a1a' }}
            />
            <div
              className="absolute rounded-full"
              style={{ width: 4, height: 4, left: '62%', top: '42%', background: '#1a1a1a' }}
            />
            {/* Smile */}
            <div
              className="absolute rounded-full"
              style={{
                width: 12,
                height: 6,
                left: '50%',
                top: '60%',
                transform: 'translateX(-50%)',
                border: '2px solid #1a1a1a',
                borderTopWidth: 0,
                borderBottomWidth: 2,
              }}
            />
          </div>

          {/* Hair */}
          <div
            className="absolute rounded-t-full"
            style={{
              width: 42,
              height: 22,
              left: '50%',
              top: '14%',
              transform: 'translateX(-50%) translateZ(11px)',
              background: '#2d2d2d',
            }}
          />

          {/* Neck */}
          <div
            className="absolute"
            style={{
              width: 14,
              height: 10,
              left: '50%',
              top: '52%',
              transform: 'translateX(-50%) translateZ(5px)',
              background: '#c49a6c',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.15)',
            }}
          />

          {/* Torso */}
          <div
            className="absolute rounded-lg"
            style={{
              width: 52,
              height: 42,
              left: '50%',
              top: '58%',
              transform: 'translateX(-50%) translateZ(8px)',
              background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
              boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.3)',
            }}
          >
            {/* Collar */}
            <div
              className="absolute"
              style={{
                width: 20,
                height: 4,
                left: '50%',
                top: '0%',
                transform: 'translateX(-50%)',
                background: '#ffffff',
                borderRadius: '0 0 4px 4px',
              }}
            />
          </div>

          {/* Left Arm */}
          <div
            className="absolute rounded-lg"
            style={{
              width: 14,
              height: 36,
              left: '8%',
              top: '58%',
              transform: 'translateZ(6px) rotate(8deg)',
              background: 'linear-gradient(180deg, #3b82f6, #2563eb)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
            }}
          />
          {/* Left Hand */}
          <div
            className="absolute rounded-full"
            style={{
              width: 10,
              height: 10,
              left: '10%',
              top: '86%',
              transform: 'translateZ(7px)',
              background: '#c49a6c',
            }}
          />

          {/* Right Arm */}
          <div
            className="absolute rounded-lg"
            style={{
              width: 14,
              height: 36,
              right: '8%',
              top: '58%',
              transform: 'translateZ(6px) rotate(-8deg)',
              background: 'linear-gradient(180deg, #3b82f6, #2563eb)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
            }}
          />
          {/* Right Hand */}
          <div
            className="absolute rounded-full"
            style={{
              width: 10,
              height: 10,
              right: '10%',
              top: '86%',
              transform: 'translateZ(7px)',
              background: '#c49a6c',
            }}
          />

          {/* Left Leg */}
          <div
            className="absolute rounded-lg"
            style={{
              width: 16,
              height: 28,
              left: '28%',
              top: '92%',
              transform: 'translateZ(6px)',
              background: 'linear-gradient(180deg, #1e3a5f, #162d4a)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
            }}
          />

          {/* Right Leg */}
          <div
            className="absolute rounded-lg"
            style={{
              width: 16,
              height: 28,
              right: '28%',
              top: '92%',
              transform: 'translateZ(6px)',
              background: 'linear-gradient(180deg, #1e3a5f, #162d4a)',
              boxShadow: 'inset -2px -2px 4px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      </motion.div>
      <SpeechBubble message={currentMessage} visible={bubbleVisible} />
    </div>
  );
}
