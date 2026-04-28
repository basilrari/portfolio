'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function AvatarModel({ mousePos }: { mousePos: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/avatar.glb');
  const targetRot = useRef({ x: 0, y: 0 });

  useEffect(() => {
    targetRot.current = {
      x: mousePos.y * 0.5,
      y: mousePos.x * 0.5,
    };
  }, [mousePos]);

  useFrame(() => {
    if (group.current) {
      // Smooth interpolation towards target rotation
      group.current.rotation.x += (targetRot.current.x - group.current.rotation.x) * 0.1;
      group.current.rotation.y += (targetRot.current.y - group.current.rotation.y) * 0.1;
    }
  });

  return (
    <group ref={group} scale={1.0}>
      <primitive object={scene} />
    </group>
  );
}

export default function AvatarCanvas({ mousePos }: { mousePos?: { x: number; y: number } }) {
  const pos = mousePos || { x: 0, y: 0 };

  return (
    <Canvas
      camera={{ position: [0, 0, 2.5], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#1a1a2e']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={3.0} />
      <directionalLight position={[-5, -3, 4]} intensity={1.5} />
      <pointLight position={[0, 0, 4]} intensity={0.5} />
      <AvatarModel mousePos={pos} />
    </Canvas>
  );
}
