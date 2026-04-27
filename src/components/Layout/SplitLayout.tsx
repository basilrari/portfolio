'use client';

import { ReactNode, useRef, useEffect } from 'react';

interface SplitLayoutProps {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
}

export default function SplitLayout({ leftPanel, rightPanel }: SplitLayoutProps) {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute('href')?.slice(1);
      if (!hash) return;

      const section = rightPanelRef.current?.querySelector(`#${hash}`);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Desktop: Split layout — show from md (768px) for phone desktop mode */}
      <div className="hidden md:grid md:grid-cols-[50%_50%] lg:grid-cols-[48%_52%] md:min-h-screen">
        {/* Left Panel — Sticky */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {leftPanel}
        </div>

        {/* Right Panel — Scrolling */}
        <div ref={rightPanelRef} className="overflow-y-auto">
          {rightPanel}
        </div>
      </div>

      {/* Mobile: Single column */}
      <div className="md:hidden">
        {leftPanel}
        {rightPanel}
      </div>
    </div>
  );
}
