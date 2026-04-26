'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          Building autonomous systems
          <br />
          that <span style={{ color: 'var(--text-accent)' }}>see, think, and fly.</span>
        </h1>

        <p
          className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Graduate researcher at National Chung Cheng University, Taiwan.
          Specializing in multi-drone coordination, Edge AI on NVIDIA Jetson,
          and LLM-powered autonomous systems for search &amp; rescue.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: '#ffffff',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-hover)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--accent-primary)';
          }}
        >
          <span>View Projects</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          style={{
            borderColor: 'var(--border-primary)',
            color: 'var(--text-primary)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--text-secondary)';
            (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--bg-card)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-primary)';
            (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
          }}
        >
          <span>Get in Touch</span>
        </a>
      </motion.div>
    </section>
  );
}
