import Link from 'next/link';
import { site } from '@/data/site';
import {
  DroneWireframeVisual,
  LLMVisual,
  WorldModelVisual,
} from '@/components/visuals/WireframeVisuals';

const visuals = {
  drones: DroneWireframeVisual,
  llm: LLMVisual,
  'world-models': WorldModelVisual,
} as const;

const icons = {
  drones: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  llm: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
  'world-models': (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
};

export default function ExpertiseCards() {
  return (
    <section className="mb-12 md:mb-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {site.expertise.map((area) => {
          const Visual = visuals[area.id as keyof typeof visuals];

          return (
            <article key={area.id} className="expertise-card flex flex-col p-5">
              <div className="mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                {icons[area.id as keyof typeof icons]}
                <h3 className="text-base font-semibold">{area.title}</h3>
              </div>

              <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {area.description}
              </p>

              <ul className="mb-5 space-y-1.5">
                {area.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                    <span className="h-1 w-1 rounded-full" style={{ backgroundColor: 'var(--text-muted)' }} />
                    {skill}
                  </li>
                ))}
              </ul>

              <div
                className="mb-4 flex h-36 items-center overflow-hidden rounded-md"
                style={{ backgroundColor: 'var(--visual-bg)' }}
              >
                <Visual />
              </div>

              <Link
                href={area.linkHref}
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium theme-transition"
                style={{ color: 'var(--text-primary)' }}
              >
                {area.linkLabel}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
