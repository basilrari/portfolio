'use client';

import { motion } from 'framer-motion';
import SectionHeader from '@/components/Shared/SectionHeader';
import AnimatedSection from '@/components/Shared/AnimatedSection';

const projects = [
  {
    title: 'Multi-Drone Army for Flood Search & Rescue',
    description: 'Multi-drone system with NVIDIA Jetson Edge AI for autonomous flood search and rescue. LLM-powered text-driven command interface coordinating drone swarms.',
    tech: ['Rust', 'Python', 'OpenCV', 'NVIDIA Jetson', 'LLM'],
    github: 'https://github.com/basilrari',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.39a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'Public Littering Detection System',
    description: 'Vision-language model system analyzing city surveillance video. Generates structured violation reports with tamper-resistant blockchain logging.',
    tech: ['Python', 'OpenCV', 'VLM (GLM)', 'Computer Vision'],
    github: 'https://github.com/basilrari',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Troo Bridge – Climate Action Payment Layer',
    description: 'Payment-layer platform enabling carbon footprint offsetting at checkout. Routes contributions into verified national registry carbon credits.',
    tech: ['Go', 'PostgreSQL', 'Next.js', 'Blockchain'],
    github: 'https://github.com/basilrari',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: 'CNN + Transformer Littering Detection',
    description: 'AI model combining CNN and transformer architectures for littering behavior detection. Achieved 84% accuracy through robust computer vision pipelines.',
    tech: ['Python', 'PyTorch', 'YOLO', 'DensePose', 'Transformers'],
    github: 'https://github.com/basilrari',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

const moreProjects = [
  {
    title: 'TEDxSaintgits – Event Platform',
    description: 'Official TEDx event website with QR-based ticketing, speaker profiles, and live check-in system.',
    tech: ['Next.js', 'TailwindCSS', 'Firebase', 'Razorpay'],
    github: 'https://github.com/basilrari',
  },
  {
    title: 'DeCarb – Carbon Credit Marketplace',
    description: 'Blockchain-based carbon credit marketplace supporting fiat payments and asset management.',
    tech: ['Solidity', 'Next.js', 'Express.js'],
    github: 'https://github.com/basilrari',
  },
  {
    title: 'Hospital Management System',
    description: 'Production-ready web application with integrated video conferencing platform.',
    tech: ['React', 'Express.js', 'MySQL'],
    github: 'https://github.com/basilrari',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group rounded-xl border p-5 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-accent)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
      }}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <span style={{ color: 'var(--text-accent)', opacity: 0.7 }}>
            {project.icon}
          </span>
          <h3
            className="text-base font-semibold transition-colors duration-200"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="flex-shrink-0 transition-colors duration-200 p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-accent)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
          }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: 'var(--text-secondary)' }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded font-mono text-[11px]"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-muted)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CompactProjectCard({ project, index }: { project: typeof moreProjects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="group rounded-xl border p-4 transition-all duration-300"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border-subtle)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-accent)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3
          className="text-sm font-semibold transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="flex-shrink-0 transition-colors duration-200"
          style={{ color: 'var(--text-muted)' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-accent)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
          }}
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>

      <p
        className="text-xs leading-relaxed mb-3"
        style={{ color: 'var(--text-secondary)' }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-1.5 py-0.5 rounded font-mono text-[10px]"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-muted)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20">
      <AnimatedSection>
        <SectionHeader label="01 / Work" title="Featured Projects" />

        <div className="grid gap-4 mb-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <h3
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            More Projects
          </h3>
          <div className="grid gap-4">
            {moreProjects.map((project, index) => (
              <CompactProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );
}
