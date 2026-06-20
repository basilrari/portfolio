import { site } from '@/data/site';

export default function AboutSection() {
  return (
    <section id="about" className="mb-12 scroll-mt-8 md:mb-16">
      <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
        About
      </h2>
      <div className="expertise-card max-w-2xl p-6">
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {site.bio} My work spans multi-drone search &amp; rescue with NVIDIA Jetson Edge AI,
          LLM-powered command interfaces for autonomous coordination, and vision-language models
          for real-world environments.
        </p>
        <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          I believe the most impactful AI lives at the intersection of software and hardware —
          systems that don&apos;t just process data, but perceive, decide, and act.
        </p>
      </div>
    </section>
  );
}
