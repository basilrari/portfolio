import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Basil Rari — AI/ML Engineer',
  description: 'AI/ML Engineer specializing in robotics, drones, and Edge AI. Building intelligent systems that bridge software and hardware.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
