'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Multi-Drone Army for Flood Search & Rescue',
    description: 'Multi-drone system with NVIDIA Jetson Edge AI for autonomous flood search and rescue. LLM-powered text-driven command interface coordinating drone swarms.',
    tech: ['Rust', 'Python', 'OpenCV', 'NVIDIA Jetson', 'LLM'],
    github: 'https://github.com/basilrari',
    highlight: true,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="16" width="40" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16V12a8 8 0 0116 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 28H4M44 28h-4M12 32v4M36 32v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Public Littering Detection System',
    description: 'Vision-language model system analyzing city surveillance video. Generates structured violation reports with tamper-resistant blockchain logging.',
    tech: ['Python', 'OpenCV', 'VLM (GLM)', 'Computer Vision'],
    github: 'https://github.com/basilrari',
    highlight: true,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="8" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="22" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M18 36h12M24 28v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 14l4 4M34 14l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Troo Bridge – Climate Action Payment Layer',
    description: 'Payment-layer platform enabling carbon footprint offsetting at checkout. Routes contributions into verified national registry carbon credits.',
    tech: ['Go', 'PostgreSQL', 'Next.js', 'Blockchain'],
    github: 'https://github.com/basilrari',
    highlight: false,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <path d="M8 24h32M24 8v32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" />
        <path d="M18 20c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'CNN + Transformer Littering Detection',
    description: 'AI model combining CNN and transformer architectures for littering behavior detection. Achieved 84% accuracy through robust computer vision pipelines.',
    tech: ['Python', 'PyTorch', 'YOLO', 'DensePose', 'Transformers'],
    github: 'https://github.com/basilrari',
    highlight: false,
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="28" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="28" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M20 13h8M13 20v8M35 20v8M20 35h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
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

function ProjectCard({ project, index, featured }: { project: typeof projects[0] | typeof moreProjects[0]; index: number; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`group relative rounded-xl border p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-900/50 focus-within:border-emerald-500/50 ${
        featured
          ? 'bg-slate-900/80 border-slate-800 md:col-span-2 md:flex md:gap-8'
          : 'bg-slate-900/40 border-slate-800/50'
      }`}
    >
      {featured && 'icon' in project && (
        <div className="flex-shrink-0 text-emerald-500/60 self-center md:self-auto">
          {project.icon}
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors duration-200">
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex-shrink-0 text-slate-500 hover:text-emerald-400 transition-colors duration-200 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 bg-slate-800 text-slate-300 text-xs rounded-md font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400 text-sm tracking-wider mb-3">01 / Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                featured={project.highlight}
              />
            ))}
          </div>

          {/* More projects */}
          <h3 className="text-xl font-semibold mb-6 text-slate-400">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {moreProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
