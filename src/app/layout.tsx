import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import './globals.css';

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
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0e17' },
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          {children}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
