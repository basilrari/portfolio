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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400 text-sm tracking-wider mb-3">03 / About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Researcher. Builder. Pilot.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4">
              <p className="text-slate-400 text-lg leading-relaxed">
                Graduate student at <span className="text-slate-200 font-medium">National Chung Cheng University, Taiwan</span>,
                building AI systems that operate in the physical world.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                My work spans from <span className="text-emerald-400">multi-drone search &amp; rescue</span> with
                NVIDIA Jetson-based Edge AI, to <span className="text-emerald-400">LLM-powered command interfaces</span>{' '}
                for autonomous coordination, to <span className="text-emerald-400">vision-language models</span> for
                urban surveillance and climate action.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                I believe the most impactful AI lives at the intersection of software and hardware —
                systems that don't just process data, but <span className="text-slate-200 font-medium">perceive, decide, and act</span>.
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
                  className="text-center p-4 rounded-xl bg-slate-900/60 border border-slate-800/50"
                >
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">
                    {item.number}
                  </div>
                  <div className="text-sm font-medium text-slate-300 mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500">
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
