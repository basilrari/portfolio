'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Multi-Drone Army for Flood Search & Rescue',
    description: 'Developing a multi-drone system with NVIDIA Jetson-based on-board Edge AI for autonomous flood search and rescue operations. Built an LLM-powered text-driven command interface for drone coordination.',
    tech: ['Rust', 'Python', 'OpenCV', 'NVIDIA Jetson', 'LLM'],
    github: '#',
  },
  {
    title: 'Public Littering Detection System',
    description: 'Building a modular system using vision-language models (VLMs) to analyze city surveillance video. Generates structured violation reports with tamper-resistant logging.',
    tech: ['Python', 'OpenCV', 'VLM (GLM)', 'Computer Vision'],
    github: '#',
  },
  {
    title: 'Troo Bridge – Climate Action Payment Layer',
    description: 'Developing a payment-layer platform enabling merchants to offer carbon footprint offsetting at checkout. Routes contributions into verified national registry carbon credits.',
    tech: ['Go', 'PostgreSQL', 'Next.js', 'Blockchain'],
    github: '#',
  },
  {
    title: 'CNN + Transformer Littering Behavior Detection',
    description: 'Developed an AI model combining CNN and transformer architectures for public littering behavior detection. Achieved 84% accuracy through robust computer vision pipelines.',
    tech: ['Python', 'PyTorch', 'YOLO', 'DensePose', 'Transformers'],
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View on GitHub</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
