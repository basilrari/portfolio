'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSectionTracker } from './useSectionTracker';

const AvatarCanvas = dynamic(
  () => import('./AvatarCanvas'),
  { ssr: false, loading: () => <div className="w-full h-full bg-slate-900 rounded-full" /> }
);

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
        className="overflow-hidden backdrop-blur-sm"
        style={{
          width: 120,
          height: 120,
          backgroundColor: 'transparent',
        }}
        animate={{
          rotateX: mousePos.y * -8,
          rotateY: mousePos.x * 8,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Suspense fallback={<div className="w-full h-full bg-slate-900 rounded-full" />}>
          <AvatarCanvas mousePos={mousePos} />
        </Suspense>
      </motion.div>
      <SpeechBubble message={currentMessage} visible={bubbleVisible} />
    </div>
  );
}
