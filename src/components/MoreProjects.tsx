'use client';

import { motion } from 'framer-motion';

const moreProjects = [
  {
    title: 'TEDxSaintgits – Official Event Platform',
    description: 'Developed the official TEDxSaintgits event website with QR-based ticketing, speaker profiles, and live check-in.',
    tech: ['Next.js', 'TailwindCSS', 'Firebase', 'Razorpay'],
  },
  {
    title: 'DeCarb – Carbon Credit Marketplace',
    description: 'Built a blockchain-based carbon credit marketplace supporting fiat payments and asset management.',
    tech: ['Solidity', 'Next.js', 'TailwindCSS', 'Express.js'],
  },
  {
    title: 'Hospital Management System',
    description: 'Built and integrated a production-ready web application with video conferencing platform.',
    tech: ['React.js', 'Express.js', 'MySQL'],
  },
];

export default function MoreProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            More <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {moreProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-blue-500/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
