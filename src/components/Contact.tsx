'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just chatting about AI, robotics, and drones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:basilrari@gmail.com"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/basilrari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/basilrari"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
