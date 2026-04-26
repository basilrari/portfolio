'use client';

import { ReactNode } from 'react';

interface RightPanelProps {
  children: ReactNode;
}

export default function RightPanel({ children }: RightPanelProps) {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-3xl mx-auto px-6 py-12 md:px-10 md:py-16 lg:px-12 lg:py-20">
        {children}
      </div>
    </div>
  );
}
