'use client';

interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <p
        className="font-mono text-xs tracking-[0.2em] uppercase mb-2"
        style={{ color: 'var(--text-accent)' }}
      >
        {label}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
      <div
        className="mt-3 h-px w-12"
        style={{ backgroundColor: 'var(--accent-primary)' }}
      />
    </div>
  );
}
