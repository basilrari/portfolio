import { ReactNode } from 'react';
import Sidebar from './Sidebar';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Sidebar />
      <main className="md:pl-[88px]">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-8 md:px-10 md:pb-12 md:pt-10">
          {children}
        </div>
      </main>
    </div>
  );
}
