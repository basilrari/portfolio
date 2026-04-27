'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/Shared/SectionHeader';
import AnimatedSection from '@/components/Shared/AnimatedSection';

const skillCategories = [
  {
    category: 'AI',
    items: ['LLMs', 'Agents', 'RAG', 'Prompting', 'Embeddings'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364 6.364l-2.121-2.121M8.757 8.757 6.636 6.636m11.728 0-2.121 2.121M8.757 15.243l-2.121 2.121M12 16.5A4.5 4.5 0 1012 7.5a4.5 4.5 0 000 9z"
        />
      </svg>
    ),
  },
  {
    category: 'ML',
    items: ['PyTorch', 'TensorFlow', 'Transformers', 'CNNs', 'OpenCV'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 19.5h15m-12-3.75v-7.5m4.5 7.5v-4.5m4.5 4.5V6.75m-9.75 0h9.75a1.5 1.5 0 011.5 1.5v9.75a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
        />
      </svg>
    ),
  },
  {
    category: 'Languages',
    items: ['Python', 'Go', 'Rust', 'TypeScript', 'JavaScript', 'SQL'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
  {
    category: 'Web',
    items: ['Next.js', 'React', 'TailwindCSS', 'HTML', 'CSS'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582"
        />
      </svg>
    ),
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 4.5h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 016.75 4.5zm0 5.25h10.5m-10.5 4.5h6"
        />
      </svg>
    ),
  },
  {
    category: 'Systems',
    items: ['Linux', 'Docker', 'AWS EC2', 'NVIDIA Jetson', 'Networking'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 8.25h16.5M3.75 15.75h16.5M7.5 5.25v13.5m9-13.5v13.5"
        />
      </svg>
    ),
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1h12.76m-2.82 8.82l5.1-5.1m0 0l-5.1-5.1m5.1 5.1H11.42"
        />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20">
      <AnimatedSection>
        <SectionHeader label="02 / Arsenal" title="Technical Skills" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3.5">
          {skillCategories.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.015,
                y: -2,
                borderColor: 'var(--border-accent)',
                boxShadow:
                  '0 0 0 1px color-mix(in srgb, var(--border-accent) 40%, transparent), 0 14px 28px -18px var(--accent-glow-strong)',
              }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + index * 0.06, duration: 0.38, ease: 'easeOut' }}
              className="theme-transition micro-card rounded-xl border p-4"
              style={{
                ['--skill-card-bg' as string]: 'var(--bg-card)',
                ['--skill-card-border' as string]: 'var(--border-subtle)',
                ['--skill-pill-bg' as string]: 'var(--bg-secondary)',
                ['--skill-pill-text' as string]: 'var(--text-secondary)',
                backgroundColor: 'var(--skill-card-bg)',
                borderColor: 'var(--skill-card-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-2.5" style={{ color: 'var(--text-accent)' }}>
                {skill.icon}
                <h3
                  className="text-[11px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: 'var(--text-accent)' }}
                >
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 rounded-md font-mono text-[11px] leading-none"
                    style={{
                      backgroundColor: 'var(--skill-pill-bg)',
                      color: 'var(--skill-pill-text)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
