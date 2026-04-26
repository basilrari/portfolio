'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { useSectionTracker } from './useSectionTracker';

// --- 3D Avatar Model ---
function AvatarModel({ mousePos }: { mousePos: { x: number; y: number } }) {
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
    <group ref={groupRef} scale={0.8}>
      <primitive object={scene} />
    </group>
  );
}

// --- 3D Scene ---
function AvatarScene({ mousePos }: { mousePos: { x: number; y: number } }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#00bb7f" intensity={0.3} />
      <AvatarModel mousePos={mousePos} />
    </>
  );
}

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

  // Track mouse for avatar rotation
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
      <div
        className="rounded-full overflow-hidden border-2 backdrop-blur-sm"
        style={{
          width: 120,
          height: 120,
          borderColor: 'var(--border-accent)',
          backgroundColor: 'var(--bg-card)',
        }}
      >
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <AvatarScene mousePos={mousePos} />
        </Canvas>
      </div>
      <SpeechBubble message={currentMessage} visible={bubbleVisible} />
    </div>
  );
}
