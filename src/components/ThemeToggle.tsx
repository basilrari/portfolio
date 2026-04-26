'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-10 h-10 rounded-lg border border-subtle flex items-center justify-center transition-all duration-200 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      style={{
        borderColor: 'var(--border-subtle)',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.borderColor = 'var(--border-accent)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.borderColor = 'var(--border-subtle)';
      }}
    >
      {/* Sun icon — shown in dark mode */}
      <svg
        className="absolute w-5 h-5 transition-all duration-300"
        style={{
          color: 'var(--text-secondary)',
          opacity: theme === 'dark' ? 1 : 0,
          transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)',
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>

      {/* Moon icon — shown in light mode */}
      <svg
        className="absolute w-5 h-5 transition-all duration-300"
        style={{
          color: 'var(--text-secondary)',
          opacity: theme === 'light' ? 1 : 0,
          transform: theme === 'light' ? 'rotate(0deg) scale(1)' : 'rotate(-90deg) scale(0)',
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
}
