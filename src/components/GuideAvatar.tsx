'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

// --- Section definitions with positions and messages ---
interface SectionInfo {
  id: string;
  selector: string;
  message: string;
  emoji: string;
}

const sections: SectionInfo[] = [
  { id: 'hero', selector: '#hero', message: "Hey there! 👋 Nice to meet you!", emoji: '👋' },
  { id: 'about', selector: '#about', message: "Want to know more about me?", emoji: '🧐' },
  { id: 'projects', selector: '#projects', message: "Check out what I've built! 🚀", emoji: '🚀' },
  { id: 'skills', selector: '#skills', message: "Here's my tech stack ⚡", emoji: '⚡' },
  { id: 'contact', selector: '#contact', message: "Ready to work together? 🤝", emoji: '🤝' },
];

// --- 3D Avatar Model ---
function AvatarModel({ size, mousePos }: { size: number; mousePos: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/avatar.glb');

  useFrame((state) => {
    if (!groupRef.current) return;

    // Idle breathing
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.02;

    // Smooth rotation toward cursor
    const targetRotY = mousePos.x * 0.5;
    const targetRotX = -mousePos.y * 0.2;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef} scale={size}>
      <primitive object={scene} />
    </group>
  );
}

// --- 3D Scene ---
function AvatarScene({ size, mousePos }: { size: number; mousePos: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#00bb7f" intensity={0.3} />
      <AvatarModel size={size} mousePos={mousePos} />
    </>
  );
}

// --- Speech Bubble ---
function SpeechBubble({ message, visible, position }: { message: string; visible: boolean; position: 'top' | 'bottom' }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: position === 'top' ? 10 : -10, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`
            absolute ${position === 'top' ? '-top-16' : '-bottom-16'} -left-2
            max-w-[200px] px-3 py-2 rounded-xl text-xs shadow-lg
            backdrop-blur-sm pointer-events-none
          `}
          style={{
            backgroundColor: 'var(--bg-elevated)',
            borderColor: 'var(--border-accent)',
            color: 'var(--text-secondary)',
            boxShadow: `0 4px 12px var(--shadow-color)`,
          }}
        >
          {message}
          <div
            className={`
              absolute w-3 h-3
              ${position === 'top'
                ? 'bottom-[-6px] left-4 border-b border-l rotate-45'
                : 'top-[-6px] left-4 border-t border-r rotate-45'
              }
            `}
            style={{
              backgroundColor: 'var(--bg-elevated)',
              borderColor: 'var(--border-accent)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Guide Avatar Component ---
export default function GuideAvatar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState(0);
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [isHero, setIsHero] = useState(true);
  const [avatarSize, setAvatarSize] = useState(120); // pixels
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track mouse position
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

  // Track scroll position and determine current section
  const showBubbleForSection = useCallback((sectionIndex: number) => {
    if (bubbleTimeoutRef.current) {
      clearTimeout(bubbleTimeoutRef.current);
    }

    const section = sections[sectionIndex];
    setCurrentSection(sectionIndex);
    setBubbleVisible(true);

    bubbleTimeoutRef.current = setTimeout(() => {
      setBubbleVisible(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine which section is in view
      let activeSection = 0;
      sections.forEach((section, index) => {
        const el = document.querySelector(section.selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            activeSection = index;
          }
        }
      });

      // Check if we're in hero section
      const inHero = scrollY < windowHeight * 0.5;
      setIsHero(inHero);

      // Adjust avatar size based on section
      if (inHero) {
        setAvatarSize(120);
      } else {
        setAvatarSize(60);
      }

      // Update section and show bubble
      if (activeSection !== currentSection) {
        showBubbleForSection(activeSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, showBubbleForSection]);

  // Calculate avatar position based on scroll
  useEffect(() => {
    const updatePosition = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (isHero) {
        // In hero, position next to text
        setPosition({ x: 0, y: 0 });
      } else {
        // Floating in bottom-right when scrolled
        setPosition({ x: window.innerWidth - 100, y: windowHeight - 100 });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isHero]);

  const currentMessage = sections[currentSection]?.message || '';

  return (
    <>
      {/* Hero Avatar - Large, positioned with text */}
      {isHero && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex-shrink-0"
        >
          <div
            className="rounded-full overflow-hidden border-2 backdrop-blur-sm"
            style={{
              width: avatarSize,
              height: avatarSize,
              borderColor: 'var(--border-accent)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
              <AvatarScene size={0.8} mousePos={mousePos} />
            </Canvas>
          </div>
          <SpeechBubble
            message={currentMessage}
            visible={bubbleVisible}
            position="top"
          />
        </motion.div>
      )}

      {/* Floating Avatar - Appears when scrolled past hero */}
      {!isHero && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed z-50 cursor-pointer"
          style={{
            left: position.x,
            top: position.y,
          }}
        >
          <div
            className="rounded-full overflow-hidden border-2 backdrop-blur-sm shadow-lg"
            style={{
              width: avatarSize,
              height: avatarSize,
              borderColor: 'var(--border-accent)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: `0 8px 24px var(--shadow-color-strong)`,
            }}
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
              <AvatarScene size={0.6} mousePos={mousePos} />
            </Canvas>
          </div>
          <SpeechBubble
            message={currentMessage}
            visible={bubbleVisible}
            position="top"
          />
        </motion.div>
      )}
    </>
  );
}
