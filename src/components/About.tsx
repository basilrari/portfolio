'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/Shared/SectionHeader';
import AnimatedSection from '@/components/Shared/AnimatedSection';

const stats = [
  {
    value: '3+',
    label: 'Years Building AI',
    description: 'From research prototypes to deployable systems',
  },
  {
    value: '10+',
    label: 'Projects Completed',
    description: 'Autonomy, climate tech, and applied computer vision',
  },
  {
    value: '3',
    label: 'Research Areas',
    description: 'AI, drones, and robotics in real-world environments',
  },
];

export default function About() {
  return (
    <section id="about" className="py-10 md:py-14 lg:py-16">
      <AnimatedSection>
        <div
          className="theme-transition micro-card relative overflow-hidden rounded-2xl border p-5 md:p-6"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -right-8 -top-10 h-24 w-24 rounded-full blur-2xl"
            style={{ backgroundColor: 'var(--accent-primary)', opacity: 0.14 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 0.14, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-5 top-5"
            style={{ color: 'var(--text-accent)' }}
            initial={{ opacity: 0, rotate: -20, y: -6 }}
            whileInView={{ opacity: 0.65, rotate: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.5 12H3m18 0h-1.5M6.343 6.343l-1.06-1.06m13.374 13.374-1.06-1.06M17.657 6.343l1.06-1.06M6.343 17.657l-1.06 1.06M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </motion.div>

          <SectionHeader label="03 / About" title="Researcher. Builder. Pilot." />

          <div className="space-y-4 md:space-y-5">
            <motion.p
              className="text-[15px] leading-relaxed md:text-base md:leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              Graduate student at{' '}
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                National Chung Cheng University, Taiwan
              </span>
              , building AI systems that operate in the physical world.
            </motion.p>
            <motion.p
              className="text-[15px] leading-relaxed md:text-base md:leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08, ease: 'easeOut' }}
            >
              My work spans from{' '}
              <span style={{ color: 'var(--text-accent)' }}>
                multi-drone search &amp; rescue
              </span>{' '}
              with NVIDIA Jetson-based Edge AI, to{' '}
              <span style={{ color: 'var(--text-accent)' }}>
                LLM-powered command interfaces
              </span>{' '}
              for autonomous coordination, to{' '}
              <span style={{ color: 'var(--text-accent)' }}>
                vision-language models
              </span>{' '}
              for urban surveillance and climate action.
            </motion.p>
            <motion.p
              className="text-[15px] leading-relaxed md:text-base md:leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.16, ease: 'easeOut' }}
            >
              I believe the most impactful AI lives at the intersection of software and hardware —
              systems that don&apos;t just process data, but{' '}
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                perceive, decide, and act
              </span>
              .
            </motion.p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35, ease: 'easeOut' }}
              className="theme-transition micro-card rounded-xl border p-3.5 md:p-4"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div
                className="text-lg font-bold md:text-xl"
                style={{ color: 'var(--text-accent)' }}
              >
                {item.value}
              </div>
              <div
                className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </div>
              <div
                className="mt-1 text-[11px] leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
              >
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
