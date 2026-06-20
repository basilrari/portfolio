import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Basil Rari — AI Engineer',
  description:
    'AI Engineer building intelligent systems across drones, LLMs, and world models. Autonomous systems, edge AI, and computer vision.',
  icons: {
    icon: '/avatar.jpg',
  },
  openGraph: {
    title: 'Basil Rari — AI Engineer',
    description: 'Building intelligent systems that perceive, reason and act.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basil Rari — AI Engineer',
    description: 'Drones, LLMs, and world models for autonomous systems.',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#f9f9f9' },
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
