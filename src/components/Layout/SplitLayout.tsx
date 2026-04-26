'use client';

import { ReactNode } from 'react';

interface SplitLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

export default function SplitLayout({ leftPanel, rightPanel }: SplitLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Desktop: Split layout */}
      <div className="hidden lg:grid lg:grid-cols-[48%_52%] lg:min-h-screen">
        {/* Left Panel — Sticky */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {leftPanel}
        </div>

        {/* Right Panel — Scrolling */}
        <div className="overflow-y-auto">
          {rightPanel}
        </div>
      </div>

      {/* Mobile: Single column */}
      <div className="lg:hidden">
        {leftPanel}
        {rightPanel}
      </div>
    </div>
  );
}
