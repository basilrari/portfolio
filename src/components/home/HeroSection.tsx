'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { site } from '@/data/site';
import { DroneHeroVisual } from '@/components/visuals/WireframeVisuals';

const DroneScene = dynamic(() => import('@/components/visuals/DroneScene'), {
  ssr: false,
  loading: () => <DroneHeroVisual />,
});

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [webglFailed, setWebglFailed] = useState(false);
  const show3D = prefersReducedMotion === false && !webglFailed;

  return (
    <section id="home" className="mb-12 md:mb-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left — profile */}
        <div>
          <div
            className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-2"
            style={{ borderColor: 'var(--border-primary)' }}
          >
            <Image
              src={site.avatarUrl}
              alt={site.name}
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>

          <h1
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {site.name}
          </h1>
          <p
            className="mt-1 text-xs font-medium tracking-[0.2em]"
            style={{ color: 'var(--text-muted)' }}
          >
            {site.title}
          </p>

          <p
            className="mt-5 max-w-md text-sm leading-relaxed md:text-[15px]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {site.bio}
          </p>

          {site.openTo ? (
            <p className="mt-3 text-xs" style={{ color: 'var(--text-muted)' }}>
              {site.openTo}
            </p>
          ) : null}

          <div className="mt-6 space-y-3">
            {site.education.map((edu) => (
              <div key={edu.school} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  style={{ color: 'var(--text-muted)' }}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {edu.school}
                  </p>
                  {edu.program ? (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {edu.program}
                    </p>
                  ) : null}
                  {edu.focus ? (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {edu.focus}
                    </p>
                  ) : null}
                  {edu.years ? (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {edu.years}
                    </p>
                  ) : null}
                  {edu.advisor ? (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      Advisor: {edu.advisor}
                    </p>
                  ) : null}
                  {edu.lab ? (
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {edu.lab}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — headline + visual */}
        <div>
          <p className="mb-4 text-xs tracking-wide" style={{ color: 'var(--text-muted)' }}>
            &gt; {site.title}
          </p>

          <h2
            className="text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-[2rem]"
            style={{ color: 'var(--text-primary)' }}
          >
            {site.headline}
          </h2>

          <p
            className="mt-4 max-w-lg text-sm leading-relaxed md:text-[15px]"
            style={{ color: 'var(--text-secondary)' }}
          >
            {site.subheadline}
          </p>

          <div
            className="relative my-8 flex h-64 items-center justify-center overflow-hidden rounded-lg md:h-80"
            style={{ backgroundColor: 'var(--visual-bg)' }}
          >
            {show3D ? (
              <DroneScene className="h-full w-full" onWebGLFail={() => setWebglFailed(true)} />
            ) : (
              <DroneHeroVisual />
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.div whileHover={prefersReducedMotion ? undefined : { y: -2 }} transition={{ duration: 0.25 }}>
              <Link
                href="#projects"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                View Projects
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </motion.div>
            {site.resumeUrl ? (
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -2 }} transition={{ duration: 0.25 }}>
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
                >
                  Download Resume
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 20.25h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12M12 16.5V3"
                    />
                  </svg>
                </a>
              </motion.div>
            ) : null}
            {site.scholarUrl ? (
              <motion.div whileHover={prefersReducedMotion ? undefined : { y: -2 }} transition={{ duration: 0.25 }}>
                <a
                  href={site.scholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 px-5 py-2.5 text-sm"
                >
                  Google Scholar
                </a>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
