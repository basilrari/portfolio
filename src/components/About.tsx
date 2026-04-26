'use client';

import { motion } from 'framer-motion';

const highlights = [
  {
    number: '84%',
    label: 'Detection Accuracy',
    description: 'CNN + Transformer littering model',
  },
  {
    number: 'Multi',
    label: 'Drone Coordination',
    description: 'LLM-powered swarm control',
  },
  {
    number: 'Edge',
    label: 'AI Inference',
    description: 'NVIDIA Jetson on-board processing',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="font-mono text-sm tracking-wider mb-3"
            style={{ color: 'var(--text-accent)' }}
          >
            03 / About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Researcher. Builder. Pilot.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4">
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Graduate student at{' '}
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  National Chung Cheng University, Taiwan
                </span>
                , building AI systems that operate in the physical world.
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
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
              </p>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                I believe the most impactful AI lives at the intersection of software and hardware —
                systems that don&apos;t just process data, but{' '}
                <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                  perceive, decide, and act
                </span>
                .
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="text-center p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-subtle)',
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold mb-1"
                    style={{ color: 'var(--text-accent)' }}
                  >
                    {item.number}
                  </div>
                  <div
                    className="text-sm font-medium mb-1"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {item.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
