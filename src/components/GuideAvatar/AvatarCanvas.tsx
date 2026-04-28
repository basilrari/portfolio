'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/* ── Memoji Character ── */
function MemojiCharacter() {
  const group = useRef<THREE.Group>(null);
  const headGroup = useRef<THREE.Group>(null);
  const bodyGroup = useRef<THREE.Group>(null);
  const leftBlink = useRef<THREE.Mesh>(null);
  const rightBlink = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (bodyGroup.current) {
      bodyGroup.current.rotation.y = Math.sin(t * 0.4) * 0.15;
      bodyGroup.current.position.y = Math.sin(t * 0.8) * 0.02;
    }

    if (headGroup.current) {
      headGroup.current.rotation.y = Math.sin(t * 0.5) * 0.25;
      headGroup.current.rotation.z = Math.sin(t * 0.3) * 0.05;
      headGroup.current.rotation.x = Math.sin(t * 0.6) * 0.05;
    }

    if (leftBlink.current && rightBlink.current) {
      const blinkCycle = t % 3.5;
      const blinkAmount = blinkCycle < 0.15 ? Math.sin(blinkCycle / 0.15 * Math.PI) : 0;
      leftBlink.current.scale.y = 1 + blinkAmount * 8;
      rightBlink.current.scale.y = 1 + blinkAmount * 8;
    }
  });

  return (
    <group ref={group} scale={1.6}>
      {/* ── Body ── */}
      <group ref={bodyGroup}>
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[0.7, 0.6, 0.35]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.95} />
        </mesh>
        <mesh position={[-0.45, -0.05, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.95} />
        </mesh>
        <mesh position={[0.45, -0.05, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.95} />
        </mesh>
        <mesh position={[0, -0.2, 0.1]}>
          <boxGeometry args={[0.3, 0.25, 0.05]} />
          <meshStandardMaterial color="#404040" roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.3, 0.18]}>
          <boxGeometry args={[0.02, 0.5, 0.02]} />
          <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.3} />
        </mesh>
        <mesh position={[0, -0.05, -0.25]}>
          <boxGeometry args={[0.65, 0.35, 0.15]} />
          <meshStandardMaterial color="#2a2a2a" roughness={0.95} />
        </mesh>
      </group>

      {/* ── Head ── */}
      <group ref={headGroup} position={[0, 0.25, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.22, 0]}>
          <cylinderGeometry args={[0.12, 0.14, 0.2, 16]} />
          <meshStandardMaterial color="#b8886a" roughness={0.55} />
        </mesh>

        {/* Head */}
        <mesh>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color="#c4956a" roughness={0.55} />
        </mesh>

        {/* Jaw */}
        <mesh position={[0, -0.15, 0.05]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#c4956a" roughness={0.55} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.35, 0, -0.02]} rotation={[0, 0, 0.1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#b8886a" roughness={0.45} />
        </mesh>
        <mesh position={[0.35, 0, -0.02]} rotation={[0, 0, -0.1]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#b8886a" roughness={0.45} />
        </mesh>

        {/* ── Hair ── */}
        <mesh position={[0, 0.22, -0.05]}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>
        <mesh position={[0, 0.35, -0.1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>
        <mesh position={[-0.1, 0.28, 0.15]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>
        <mesh position={[-0.3, 0.1, -0.05]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>
        <mesh position={[0.3, 0.1, -0.05]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>

        {/* ── Left Eye ── */}
        <group position={[-0.12, 0.05, 0.3]}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#fff8f0" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#1a1008" roughness={0.15} />
          </mesh>
          <mesh position={[0, 0, 0.07]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial color="#000000" roughness={0.05} />
          </mesh>
          <mesh position={[0.015, 0.015, 0.08]}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* ── Right Eye ── */}
        <group position={[0.12, 0.05, 0.3]}>
          <mesh>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshStandardMaterial color="#fff8f0" roughness={0.3} />
          </mesh>
          <mesh position={[0, 0, 0.05]}>
            <sphereGeometry args={[0.045, 16, 16]} />
            <meshStandardMaterial color="#1a1008" roughness={0.15} />
          </mesh>
          <mesh position={[0, 0, 0.07]}>
            <sphereGeometry args={[0.025, 16, 16]} />
            <meshStandardMaterial color="#000000" roughness={0.05} />
          </mesh>
          <mesh position={[0.015, 0.015, 0.08]}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* Blink eyelids */}
        <mesh ref={leftBlink} position={[-0.12, 0.08, 0.3]}>
          <boxGeometry args={[0.16, 0.01, 0.08]} />
          <meshStandardMaterial color="#c4956a" roughness={0.55} />
        </mesh>
        <mesh ref={rightBlink} position={[0.12, 0.08, 0.3]}>
          <boxGeometry args={[0.16, 0.01, 0.08]} />
          <meshStandardMaterial color="#c4956a" roughness={0.55} />
        </mesh>

        {/* ── Eyebrows ── */}
        <mesh position={[-0.12, 0.15, 0.32]} rotation={[0, 0, -0.15]}>
          <boxGeometry args={[0.12, 0.025, 0.02]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>
        <mesh position={[0.12, 0.15, 0.32]} rotation={[0, 0, 0.15]}>
          <boxGeometry args={[0.12, 0.025, 0.02]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.75} />
        </mesh>

        {/* ── Glasses ── */}
        <group position={[-0.12, 0.05, 0.32]}>
          <mesh>
            <torusGeometry args={[0.08, 0.015, 8, 24]} />
            <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.3} />
          </mesh>
        </group>
        <group position={[0.12, 0.05, 0.32]}>
          <mesh>
            <torusGeometry args={[0.08, 0.015, 8, 24]} />
            <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.3} />
          </mesh>
        </group>
        <mesh position={[0, 0.05, 0.33]}>
          <boxGeometry args={[0.06, 0.015, 0.015]} />
          <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.3} />
        </mesh>
        <mesh position={[-0.22, 0.06, 0.25]} rotation={[0, 0.3, 0]}>
          <boxGeometry args={[0.12, 0.015, 0.015]} />
          <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.3} />
        </mesh>
        <mesh position={[0.22, 0.06, 0.25]} rotation={[0, -0.3, 0]}>
          <boxGeometry args={[0.12, 0.015, 0.015]} />
          <meshStandardMaterial color="#111111" roughness={0.25} metalness={0.3} />
        </mesh>

        {/* ── Nose ── */}
        <mesh position={[0, -0.02, 0.33]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#b8886a" roughness={0.45} />
        </mesh>

        {/* ── Mouth ── */}
        <mesh position={[0, -0.12, 0.3]}>
          <boxGeometry args={[0.1, 0.015, 0.02]} />
          <meshStandardMaterial color="#8b5e5e" roughness={0.35} />
        </mesh>
      </group>
    </group>
  );
}

export default function AvatarCanvas({ mousePos }: { mousePos?: { x: number; y: number } }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <directionalLight position={[-3, 2, 3]} intensity={0.6} />
      <pointLight position={[0, 0, 4]} intensity={0.3} />
      <MemojiCharacter />
    </Canvas>
  );
}
