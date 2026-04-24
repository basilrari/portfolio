'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: 'AI / ML',
    items: ['LLMs', 'VLMs', 'CNNs', 'Transformers', 'OpenCV', 'PyTorch', 'TensorFlow', 'YOLO', 'DensePose'],
    color: 'text-blue-400',
  },
  {
    category: 'Languages',
    items: ['Python', 'Go', 'Rust', 'JavaScript', 'TypeScript', 'Solidity', 'SQL'],
    color: 'text-purple-400',
  },
  {
    category: 'Web & Backend',
    items: ['Next.js', 'React', 'TailwindCSS', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB'],
    color: 'text-pink-400',
  },
  {
    category: 'Systems & Tools',
    items: ['NVIDIA Jetson', 'Docker', 'AWS EC2', 'Git', 'Linux', 'Smart Contracts'],
    color: 'text-green-400',
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className={`text-lg font-semibold mb-4 ${skill.color}`}>{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                    >
                      {item}
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
