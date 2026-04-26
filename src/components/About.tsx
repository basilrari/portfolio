'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/Shared/SectionHeader';
import AnimatedSection from '@/components/Shared/AnimatedSection';

const highlights = [
  {
    value: '84%',
    label: 'Detection Accuracy',
    description: 'CNN + Transformer littering model',
  },
  {
    value: 'Multi',
    label: 'Drone Coordination',
    description: 'LLM-powered swarm control',
  },
  {
    value: 'Edge',
    label: 'AI Inference',
    description: 'NVIDIA Jetson on-board processing',
  },
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20">
      <AnimatedSection>
        <SectionHeader label="03 / About" title="Researcher. Builder. Pilot." />

        <div className="space-y-4 mb-10">
          <p style={{ color: 'var(--text-secondary)' }}>
            Graduate student at{' '}
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              National Chung Cheng University, Taiwan
            </span>
            , building AI systems that operate in the physical world.
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
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
          </p>
          <p style={{ color: 'var(--text-secondary)' }}>
            I believe the most impactful AI lives at the intersection of software and hardware —
            systems that don&apos;t just process data, but{' '}
            <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
              perceive, decide, and act
            </span>
            .
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="text-center p-4 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div
                className="text-xl md:text-2xl font-bold mb-1"
                style={{ color: 'var(--text-accent)' }}
              >
                {item.value}
              </div>
              <div
                className="text-xs font-medium mb-0.5"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.label}
              </div>
              <div
                className="text-[11px]"
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
