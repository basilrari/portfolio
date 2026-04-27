'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './Shared/AnimatedSection';

const taglineWords = ['Building', 'autonomous', 'systems', 'that', 'see,', 'think,', 'and', 'fly.'];

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const taglineContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const taglineWordVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    rotateX: -65,
    transformPerspective: 700,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.56, ease: 'easeOut' as const },
  },
};

const ctaContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.14,
    },
  },
};

const ctaItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

const scrollIndicatorVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  return (
    <AnimatedSection id="hero" className="py-12 md:py-16 lg:py-20 w-full lg:w-[52%]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <motion.div variants={lineVariants} className="mb-4">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            <span className="inline-flex items-center gap-3 flex-wrap">
              <motion.span
                className="relative inline-flex h-2.5 w-2.5"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' as const }}
                aria-hidden="true"
              >
                <motion.span
                  className="absolute inline-flex h-full w-full rounded-full"
                  style={{ backgroundColor: 'var(--text-accent)' }}
                  animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' as const }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: 'var(--text-accent)' }}
                />
              </motion.span>
              <motion.span
                variants={taglineContainerVariants}
                className="inline-flex flex-wrap gap-x-2.5 gap-y-1.5 align-middle"
              >
                {taglineWords.map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    variants={taglineWordVariants}
                    className={word.includes('see') || word.includes('fly') ? 'inline-block' : 'inline-block'}
                    style={
                      word.includes('see') || word.includes('fly')
                        ? { color: 'var(--text-accent)' }
                        : undefined
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={lineVariants}
          transition={{ duration: 0.6, delay: 1.02, ease: 'easeOut' as const }}
          className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          style={{ color: 'var(--text-secondary)' }}
        >
          Graduate researcher at National Chung Cheng University, Taiwan.
          Specializing in multi-drone coordination, Edge AI on NVIDIA Jetson,
          and LLM-powered autonomous systems for search &amp; rescue.
        </motion.p>

        <motion.div
          variants={ctaContainerVariants}
          transition={{ delay: 1.35, ease: 'easeOut' as const }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          <motion.a
            variants={ctaItemVariants}
            href="#projects"
            whileHover={{
              scale: 1.03,
              boxShadow: '0 0 0 1px color-mix(in srgb, var(--border-accent) 45%, transparent), 0 14px 28px -16px var(--accent-glow-strong)',
              backgroundColor: 'var(--accent-hover)',
            }}
            transition={{ duration: 0.22, ease: 'easeOut' as const }}
            className="theme-transition inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: '#ffffff',
            }}
          >
            <span>View Projects</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
          <motion.a
            variants={ctaItemVariants}
            href="#contact"
            whileHover={{
              scale: 1.02,
              borderColor: 'var(--border-accent)',
              backgroundColor: 'var(--bg-card)',
              boxShadow: '0 0 0 1px color-mix(in srgb, var(--border-accent) 35%, transparent), 0 12px 24px -18px var(--accent-glow)',
            }}
            transition={{ duration: 0.22, ease: 'easeOut' as const }}
            className="theme-transition inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            style={{
              borderColor: 'var(--border-primary)',
              color: 'var(--text-primary)',
            }}
          >
            <span>Get in Touch</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={scrollIndicatorVariants}
          className="flex items-center gap-2 text-sm select-none"
          style={{ color: 'var(--text-secondary)' }}
          aria-hidden="true"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' as const }}
            className="inline-flex"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0-5-5m5 5 5-5" />
            </svg>
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
