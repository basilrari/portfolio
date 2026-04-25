'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle bobbing
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      // Smooth mouse following
      meshRef.current.rotation.y += (mousePos.x * 0.5 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (-mousePos.y * 0.3 - meshRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color="#00bb7f"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingRing({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.8) * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.3;
      meshRef.current.rotation.z = Math.cos(t * 0.4) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1.4, 0.02, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
    </mesh>
  );
}

function FloatingParticles() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const particles = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const radius = 1.8 + Math.random() * 0.5;
    const pos: [number, number, number] = [
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 2,
      Math.sin(angle) * radius,
    ];
    return (
      <mesh key={i} position={pos}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshStandardMaterial
          color={i % 3 === 0 ? '#00bb7f' : i % 3 === 1 ? '#a685ff' : '#00a5ef'}
          emissive={i % 3 === 0 ? '#00bb7f' : i % 3 === 1 ? '#a685ff' : '#00a5ef'}
          emissiveIntensity={1}
        />
      </mesh>
    );
  });

  return <group ref={groupRef}>{particles}</group>;
}

function AvatarScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#00bb7f" intensity={0.5} />
      <AnimatedSphere />
      <FloatingRing position={[0, 0, 0]} color="#00bb7f" delay={0} />
      <FloatingRing position={[0, 0, 0]} color="#a685ff" delay={1} />
      <FloatingParticles />
    </>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-emerald-500/20 bg-slate-900/30 backdrop-blur-sm">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <AvatarScene />
      </Canvas>
    </div>
  );
}
