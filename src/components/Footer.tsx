'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t"
      style={{ borderColor: 'var(--border-subtle)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm"
          style={{ color: 'var(--text-muted)' }}
        >
          © {new Date().getFullYear()} Basil Rari
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Back to top"
          className="transition-colors duration-200 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = 'var(--text-accent)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = 'var(--text-muted)';
          }}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
