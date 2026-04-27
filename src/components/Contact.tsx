'use client';

import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import SectionHeader from '@/components/Shared/SectionHeader';
import AnimatedSection from '@/components/Shared/AnimatedSection';

export default function Contact() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/basilrari',
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      description: 'Connect for roles, research, and collaborations.',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/basilrari',
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      description: 'Explore recent work in AI, systems, and software.',
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' as const },
    },
  } as const;

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20">
      <AnimatedSection>
        <SectionHeader label="04 / Contact" title="Let&apos;s Build Something" />
        <motion.div
          className="grid gap-5 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            '--contact-card-bg': 'var(--bg-card)',
            '--contact-card-border': 'var(--border-primary)',
            '--contact-card-border-hover': 'var(--text-secondary)',
            '--contact-card-text': 'var(--text-primary)',
            '--contact-card-subtle': 'var(--text-secondary)',
            '--contact-card-highlight': 'var(--accent-primary)',
          } as CSSProperties}
        >
          <motion.div
            className="rounded-2xl border p-6 md:p-8"
            variants={itemVariants}
            style={{
              borderColor: 'var(--contact-card-border)',
              backgroundColor: 'var(--contact-card-bg)',
            }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight" style={{ color: 'var(--contact-card-text)' }}>
              Ship your next intelligent system with a partner who cares about quality and impact.
            </h3>
            <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: 'var(--contact-card-subtle)' }}>
              Open to research collaborations, engineering roles, and conversations about autonomous systems, AI, and drones.
            </p>

            <a
              href="mailto:basilrari@gmail.com"
              className="theme-transition micro-button group mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:w-auto"
              style={{
                color: '#ffffff',
                backgroundColor: 'var(--contact-card-highlight)',
                boxShadow: '0 14px 32px -20px var(--contact-card-highlight)',
              }}
            >
              <svg className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span>Email basilrari@gmail.com</span>
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className="theme-transition micro-card group relative flex min-h-40 flex-col justify-between rounded-2xl border p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                style={{
                  borderColor: 'var(--contact-card-border)',
                  backgroundColor: 'var(--contact-card-bg)',
                  color: 'var(--contact-card-text)',
                }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  borderColor: 'var(--contact-card-border-hover)',
                  boxShadow:
                    '0 0 0 1px color-mix(in srgb, var(--contact-card-highlight) 30%, transparent), 0 16px 30px -20px var(--accent-glow-strong)',
                }}
                transition={{ duration: 0.24, ease: 'easeOut' as const }}
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--contact-card-highlight) 14%, transparent)',
                    color: 'var(--contact-card-highlight)',
                  }}
                >
                  {link.icon}
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-semibold">{link.name}</h4>
                  <p className="mt-2 text-sm" style={{ color: 'var(--contact-card-subtle)' }}>
                    {link.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
