'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Avatar Model Component ---
function AvatarModel({ 
  mousePos, 
  onClick,
  isHovered 
}: { 
  mousePos: { x: number; y: number }; 
  onClick: () => void;
  isHovered: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/avatar.glb');
  const [scale, setScale] = useState(1);

  // Idle breathing animation + cursor tracking
  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Gentle idle breathing
    const breathe = Math.sin(state.clock.elapsedTime * 2) * 0.02;
    groupRef.current.position.y = breathe;

    // Smooth rotation toward cursor
    const targetRotY = mousePos.x * 0.8;
    const targetRotX = -mousePos.y * 0.3;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;

    // Hover scale effect
    const targetScale = isHovered ? 1.15 : 1.0;
    setScale(s => s + (targetScale - s) * 0.1);
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

// --- 3D Scene ---
function AvatarScene({ 
  mousePos, 
  onClick,
  isHovered 
}: { 
  mousePos: { x: number; y: number }; 
  onClick: () => void;
  isHovered: boolean;
}) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} color="#00bb7f" intensity={0.3} />
      <AvatarModel mousePos={mousePos} onClick={onClick} isHovered={isHovered} />
    </>
  );
}

// --- Speech Bubble Data ---
interface BubbleMessage {
  id: string;
  text: string;
  triggerSection: string;
}

const bubbleMessages: BubbleMessage[] = [
  { id: 'hero', text: "Hey there! 👋 Nice to meet you!", triggerSection: 'hero' },
  { id: 'about', text: "Want to know more about me?", triggerSection: 'about' },
  { id: 'projects', text: "Check out what I've built! 🚀", triggerSection: 'projects' },
  { id: 'skills', text: "Here's my tech stack ⚡", triggerSection: 'skills' },
  { id: 'contact', text: "Ready to work together? 🤝", triggerSection: 'contact' },
];

const clickMessages = [
  "Hey! 👋",
  "Nice to meet you!",
  "Check out my work!",
  "I'm Basil's digital twin!",
  "Scroll down to explore!",
  "Want to collaborate? 🚀",
  "Fun fact: I'm a 3D model! 😄",
  "Built with Three.js!",
];

// --- Speech Bubble Component ---
function SpeechBubble({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div
      className={`
        absolute -top-20 -left-20 w-40 p-2 bg-slate-800 border border-emerald-500/30 
        rounded-lg text-xs text-slate-200 shadow-lg shadow-emerald-500/10
        transition-all duration-300 pointer-events-none
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
    >
      <div className="relative">
        {message}
        <div 
          className="absolute -bottom-1.5 right-4 w-3 h-3 bg-slate-800 border-r border-b border-emerald-500/30 transform rotate-45"
        />
      </div>
    </div>
  );
}

// --- Main Floating Avatar Component ---
export default function FloatingAvatar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentBubble, setCurrentBubble] = useState('');
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [lastBubbleSection, setLastBubbleSection] = useState('');
  const bubbleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track mouse position (normalized -1 to 1)
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

  // Track scroll position for contextual bubbles
  const showBubble = useCallback((text: string) => {
    if (bubbleTimeoutRef.current) {
      clearTimeout(bubbleTimeoutRef.current);
    }
    setCurrentBubble(text);
    setBubbleVisible(true);
    
    bubbleTimeoutRef.current = setTimeout(() => {
      setBubbleVisible(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollY / (docHeight - windowHeight);

      let section = '';
      if (scrollPercent < 0.2) section = 'hero';
      else if (scrollPercent < 0.4) section = 'about';
      else if (scrollPercent < 0.6) section = 'projects';
      else if (scrollPercent < 0.8) section = 'skills';
      else section = 'contact';

      if (section !== lastBubbleSection && section !== '') {
        setLastBubbleSection(section);
        const msg = bubbleMessages.find(m => m.triggerSection === section);
        if (msg) {
          showBubble(msg.text);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastBubbleSection, showBubble]);

  // Click handler
  const handleClick = () => {
    const randomMsg = clickMessages[Math.floor(Math.random() * clickMessages.length)];
    showBubble(randomMsg);
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 w-24 h-24 md:w-28 md:h-28 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      <SpeechBubble message={currentBubble} visible={bubbleVisible} />
      <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-500/30 bg-slate-900/50 backdrop-blur-sm shadow-lg shadow-emerald-500/20">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <AvatarScene 
            mousePos={mousePos} 
            onClick={handleClick} 
            isHovered={isHovered}
          />
        </Canvas>
      </div>
    </div>
  );
}
