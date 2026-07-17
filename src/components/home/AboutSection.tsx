'use client';

import { site } from '@/data/site';
import ScrollReveal from '@/components/home/ScrollReveal';

export default function AboutSection() {
  return (
    <ScrollReveal>
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

          <div
            className="mt-6 space-y-2 border-t pt-5"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Email — </span>
              <a
                href={`mailto:${site.email}`}
                className="micro-cta theme-transition"
                style={{ color: 'var(--text-primary)' }}
              >
                {site.email}
              </a>
            </p>
            {site.openTo ? (
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {site.openTo}
              </p>
            ) : null}
            {site.scholarUrl ? (
              <p className="text-sm">
                <a
                  href={site.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="micro-cta theme-transition"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Google Scholar
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
