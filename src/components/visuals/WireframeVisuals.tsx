export function DroneHeroVisual() {
  return (
    <svg viewBox="0 0 400 280" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="droneBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--text-primary)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="var(--text-primary)" stopOpacity="0.05" />
        </linearGradient>
        <filter id="droneShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="var(--text-primary)" floodOpacity="0.08" />
        </filter>
      </defs>
      {/* Ground shadow */}
      <ellipse cx="200" cy="240" rx="80" ry="12" fill="var(--text-primary)" opacity="0.06" />
      {/* Arms */}
      <line x1="120" y1="130" x2="280" y2="130" stroke="var(--text-primary)" strokeWidth="3" opacity="0.7" />
      <line x1="200" y1="50" x2="200" y2="210" stroke="var(--text-primary)" strokeWidth="3" opacity="0.7" />
      {/* Rotors */}
      {[
        [120, 130],
        [280, 130],
        [200, 50],
        [200, 210],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="28" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.25" strokeDasharray="4 3" />
          <circle cx={cx} cy={cy} r="6" fill="var(--text-primary)" opacity="0.5" />
          <ellipse
            className="wf-rotor-spin"
            style={{ transformOrigin: `${cx}px ${cy}px` }}
            cx={cx}
            cy={cy}
            rx="22"
            ry="4"
            stroke="var(--text-primary)"
            strokeWidth="1"
            opacity="0.35"
            transform={`rotate(${i * 45} ${cx} ${cy})`}
          />
        </g>
      ))}
      {/* Body */}
      <rect x="170" y="110" width="60" height="40" rx="8" fill="url(#droneBody)" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.8" filter="url(#droneShadow)" />
      <circle cx="200" cy="125" r="6" fill="var(--text-primary)" opacity="0.3" />
      <rect x="185" y="135" width="30" height="8" rx="2" fill="var(--text-primary)" opacity="0.2" />
      {/* Camera gimbal */}
      <circle cx="200" cy="158" r="8" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="200" cy="158" r="4" fill="var(--text-primary)" opacity="0.25" />
    </svg>
  );
}

export function DroneWireframeVisual() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full wf-drone-stage" aria-hidden="true">
      {/* Terrain grid */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1="20"
          y1={100 + i * 8}
          x2="260"
          y2={100 + i * 8}
          stroke="var(--wireframe-stroke)"
          strokeWidth="0.75"
        />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={20 + i * 22}
          y1="100"
          x2={20 + i * 22 - 40}
          y2="160"
          stroke="var(--wireframe-stroke)"
          strokeWidth="0.75"
        />
      ))}
      {/* Drone wireframe */}
      <g stroke="var(--wireframe-stroke)" strokeWidth="1" fill="none">
        <line x1="100" y1="55" x2="180" y2="55" />
        <line x1="140" y1="25" x2="140" y2="85" />
        {[
          [100, 55],
          [180, 55],
          [140, 25],
          [140, 85],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" />
            <ellipse
              className="wf-rotor-spin"
              style={{ transformOrigin: `${cx}px ${cy}px` }}
              cx={cx}
              cy={cy}
              rx="12"
              ry="2.5"
              stroke="var(--wireframe-stroke)"
              strokeWidth="0.75"
              fill="none"
            />
          </g>
        ))}
        <rect x="125" y="48" width="30" height="14" rx="2" />
      </g>
      <path d="M60 120 Q140 90 220 115" stroke="var(--wireframe-stroke)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
    </svg>
  );
}

export function LLMVisual() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full wf-llm-pulse" aria-hidden="true">
      <rect x="30" y="20" width="220" height="120" rx="6" stroke="var(--wireframe-stroke)" strokeWidth="1" fill="var(--wireframe-fill)" />
      <text x="44" y="42" fill="var(--text-muted)" fontSize="9" fontFamily="monospace">
        Mission Plan
      </text>
      {['Scan sector A', 'Deploy swarm', 'Report status'].map((item, i) => (
        <g key={item}>
          <rect x="44" y={52 + i * 22} width="10" height="10" rx="2" stroke="var(--wireframe-stroke)" strokeWidth="0.75" />
          <text x="62" y={61 + i * 22} fill="var(--text-secondary)" fontSize="9" fontFamily="monospace">
            {item}
          </text>
        </g>
      ))}
      <rect
        className="wf-llm-token"
        x="170"
        y="110"
        width="70"
        height="22"
        rx="4"
        stroke="var(--wireframe-stroke)"
        strokeWidth="0.75"
        fill="var(--wireframe-fill)"
      />
      <text x="182" y="125" fill="var(--text-muted)" fontSize="8" fontFamily="monospace">
        Tokens: 1.2k
      </text>
    </svg>
  );
}

export function WorldModelVisual() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="h-full w-full" aria-hidden="true">
      {/* Map base */}
      <rect x="40" y="80" width="200" height="60" rx="4" stroke="var(--wireframe-stroke)" strokeWidth="0.75" fill="var(--wireframe-fill)" />
      <path d="M60 120 L100 100 L140 115 L180 95 L220 110" stroke="var(--wireframe-stroke)" strokeWidth="1" fill="none" />
      {/* Layered panels */}
      {[0, 1, 2].map((layer) => (
        <g key={layer} opacity={0.4 + layer * 0.2}>
          <rect
            x={70 + layer * 12}
            y={30 + layer * 10}
            width="140"
            height="70"
            rx="4"
            stroke="var(--wireframe-stroke)"
            strokeWidth="1"
            fill="var(--wireframe-fill)"
          />
          <line x1={85 + layer * 12} y1={50 + layer * 10} x2={185 + layer * 12} y2={50 + layer * 10} stroke="var(--wireframe-stroke)" strokeWidth="0.5" />
          <line x1={85 + layer * 12} y1={65 + layer * 10} x2={155 + layer * 12} y2={65 + layer * 10} stroke="var(--wireframe-stroke)" strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  );
}

export function GlobeWireframeVisual() {
  return (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full wf-globe-stage" aria-hidden="true">
      <g className="wf-globe-rotate" style={{ transformOrigin: '100px 80px' }}>
        <circle cx="100" cy="80" r="55" stroke="var(--wireframe-stroke)" strokeWidth="1" fill="var(--wireframe-fill)" />
        <ellipse cx="100" cy="80" rx="55" ry="18" stroke="var(--wireframe-stroke)" strokeWidth="0.75" />
        <ellipse cx="100" cy="80" rx="18" ry="55" stroke="var(--wireframe-stroke)" strokeWidth="0.75" />
        <line x1="45" y1="80" x2="155" y2="80" stroke="var(--wireframe-stroke)" strokeWidth="0.5" />
        <path
          d="M100 25 Q130 55 100 80 Q70 105 100 135"
          stroke="var(--wireframe-stroke)"
          strokeWidth="0.5"
          fill="none"
        />
      </g>
      {/* Orbit path */}
      <ellipse
        className="wf-orbit-path"
        cx="100"
        cy="80"
        rx="72"
        ry="28"
        stroke="var(--wireframe-stroke)"
        strokeWidth="0.75"
        strokeDasharray="4 4"
        transform="rotate(-20 100 80)"
        fill="none"
      />
      {/* Drone on orbit */}
      <g className="wf-orbit-drone">
        <g transform="translate(158, 58)">
          <circle r="5" stroke="var(--wireframe-stroke)" strokeWidth="1" fill="var(--bg-card)" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="var(--wireframe-stroke)" strokeWidth="0.75" />
          <line x1="0" y1="-6" x2="0" y2="6" stroke="var(--wireframe-stroke)" strokeWidth="0.75" />
        </g>
      </g>
    </svg>
  );
}
