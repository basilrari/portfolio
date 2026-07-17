'use client';

import {
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type PointerEvent,
  type ReactNode,
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

function readCssColor(varName: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return value || fallback;
}

function useThemeColors() {
  const [colors, setColors] = useState({
    stroke: 'rgba(255,255,255,0.55)',
    muted: 'rgba(255,255,255,0.28)',
    fill: 'rgba(255,255,255,0.08)',
  });

  useEffect(() => {
    const sync = () => {
      setColors({
        stroke: readCssColor('--text-primary', '#ffffff'),
        muted: readCssColor('--wireframe-stroke', 'rgba(255,255,255,0.35)'),
        fill: readCssColor('--wireframe-fill', 'rgba(255,255,255,0.04)'),
      });
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return colors;
}

function Rotor({
  position,
  color,
  speed,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * speed;
    }
  });

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.28, 0.012, 8, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.35} />
        </mesh>
        <mesh>
          <boxGeometry args={[0.5, 0.02, 0.04]} />
          <meshBasicMaterial color={color} transparent opacity={0.45} />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.5, 0.02, 0.04]} />
          <meshBasicMaterial color={color} transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function WireframeDrone({
  mouse,
  colors,
  active,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
  colors: { stroke: string; muted: string; fill: string };
  active: boolean;
}) {
  const root = useRef<THREE.Group>(null);
  const t = useRef(0);

  const armPoints = useMemo(
    () => [new THREE.Vector3(-0.85, 0, 0), new THREE.Vector3(0.85, 0, 0)],
    [],
  );
  const crossPoints = useMemo(
    () => [new THREE.Vector3(0, 0, -0.85), new THREE.Vector3(0, 0, 0.85)],
    [],
  );

  useFrame((_, delta) => {
    if (!root.current || !active) return;
    t.current += delta;
    const hover = Math.sin(t.current * 1.2) * 0.08;
    const bank = Math.sin(t.current * 0.7) * 0.06;
    const targetX = mouse.current.x * 0.25;
    const targetY = mouse.current.y * 0.15;

    root.current.position.y = THREE.MathUtils.lerp(root.current.position.y, hover + targetY, 0.08);
    root.current.rotation.z = THREE.MathUtils.lerp(
      root.current.rotation.z,
      bank + targetX * 0.2,
      0.08,
    );
    root.current.rotation.x = THREE.MathUtils.lerp(
      root.current.rotation.x,
      -targetY * 0.25,
      0.08,
    );
    root.current.rotation.y = THREE.MathUtils.lerp(root.current.rotation.y, targetX * 0.35, 0.08);
  });

  return (
    <group ref={root}>
      <Line points={armPoints} color={colors.stroke} lineWidth={1.5} transparent opacity={0.7} />
      <Line points={crossPoints} color={colors.stroke} lineWidth={1.5} transparent opacity={0.7} />

      <mesh>
        <boxGeometry args={[0.55, 0.22, 0.35]} />
        <meshBasicMaterial color={colors.fill} transparent opacity={0.9} />
      </mesh>
      <mesh>
        <boxGeometry args={[0.55, 0.22, 0.35]} />
        <meshBasicMaterial color={colors.stroke} wireframe transparent opacity={0.55} />
      </mesh>

      <mesh position={[0, -0.08, 0.05]}>
        <boxGeometry args={[0.22, 0.06, 0.12]} />
        <meshBasicMaterial color={colors.muted} transparent opacity={0.5} />
      </mesh>

      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.07, 12, 12]} />
        <meshBasicMaterial color={colors.stroke} wireframe transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <sphereGeometry args={[0.035, 10, 10]} />
        <meshBasicMaterial color={colors.stroke} transparent opacity={0.35} />
      </mesh>

      <Rotor position={[-0.85, 0, 0]} color={colors.stroke} speed={14} />
      <Rotor position={[0.85, 0, 0]} color={colors.stroke} speed={-13} />
      <Rotor position={[0, 0, -0.85]} color={colors.stroke} speed={12} />
      <Rotor position={[0, 0, 0.85]} color={colors.stroke} speed={-15} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]}>
        <circleGeometry args={[0.7, 32]} />
        <meshBasicMaterial color={colors.stroke} transparent opacity={0.06} />
      </mesh>
    </group>
  );
}

function SceneContent({
  mouse,
  active,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
  active: boolean;
}) {
  const colors = useThemeColors();

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 2]} intensity={0.45} />
      <directionalLight position={[-2, 1, -2]} intensity={0.2} />
      <WireframeDrone mouse={mouse} colors={colors} active={active} />
    </>
  );
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

type DroneSceneProps = {
  className?: string;
  onWebGLFail?: () => void;
};

export default function DroneScene({ className, onWebGLFail }: DroneSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleFail = () => {
    setFailed(true);
    onWebGLFail?.();
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = { x, y };
  };

  const onPointerLeave = () => {
    mouse.current = { x: 0, y: 0 };
  };

  if (failed) return null;

  return (
    <div
      ref={containerRef}
      className={className}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden="true"
    >
      <WebGLErrorBoundary onError={handleFail}>
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0.6, 3.2], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
          frameloop={visible ? 'always' : 'never'}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
          style={{ width: '100%', height: '100%' }}
        >
          <SceneContent mouse={mouse} active={visible} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
