'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a graduate student at National Chung Cheng University, Taiwan, 
                deeply interested in AI agents and multi-agent systems, focusing on 
                secure, trustworthy AI for real-world decision-making.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My work spans from developing multi-drone armies for flood search 
                and rescue with NVIDIA Jetson-based Edge AI, to building LLM-powered 
                command interfaces for autonomous drone coordination.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="monospace text-sm text-blue-400 mb-1">Languages</p>
                  <p className="text-gray-400">Python, Go, Rust, JavaScript/TypeScript, Solidity</p>
                </div>
                <div>
                  <p className="monospace text-sm text-purple-400 mb-1">AI/ML</p>
                  <p className="text-gray-400">LLMs, VLMs, CNNs, Transformers, OpenCV, PyTorch</p>
                </div>
                <div>
                  <p className="monospace text-sm text-pink-400 mb-1">Systems</p>
                  <p className="text-gray-400">NVIDIA Jetson, Docker, AWS, Linux, Smart Contracts</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
