import type { Metadata, Viewport } from 'next';
import './globals.css';
import FloatingAvatar from '@/components/FloatingAvatar';

export const metadata: Metadata = {
  title: 'Basil Rari — AI/ML Engineer',
  description: 'AI/ML Engineer specializing in autonomous drones, computer vision, and Edge AI. Building intelligent systems that bridge software and hardware.',
  icons: {
    icon: '/avatar.jpg',
  },
  openGraph: {
    title: 'Basil Rari — AI/ML Engineer',
    description: 'Autonomous drones, computer vision, Edge AI. Building intelligent systems that bridge software and hardware.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Basil Rari — AI/ML Engineer',
    description: 'Autonomous drones, computer vision, Edge AI.',
  },
};

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
        <FloatingAvatar />
      </body>
    </html>
  );
}
