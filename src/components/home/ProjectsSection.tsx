'use client';

import { useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { site, type ProjectLinkType } from '@/data/site';
import ScrollReveal from '@/components/home/ScrollReveal';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'drones', label: 'Drones' },
  { id: 'llm', label: 'LLM' },
  { id: 'world-models', label: 'World Models' },
] as const;

type CategoryId = (typeof CATEGORIES)[number]['id'];

const LINK_LABELS: Record<ProjectLinkType, string> = {
  repo: 'Repo',
  demo: 'Demo',
  paper: 'Paper',
};

function isCategoryId(value: string | null): value is CategoryId {
  return CATEGORIES.some((c) => c.id === value);
}

export default function ProjectsSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get('category');
  const filter: CategoryId = isCategoryId(rawCategory) ? rawCategory : 'all';

  const filtered = useMemo(() => {
    if (filter === 'all') return site.projects;
    return site.projects.filter((p) => p.category === filter);
  }, [filter]);

  const setCategory = useCallback(
    (id: CategoryId) => {
      const params = new URLSearchParams(searchParams.toString());
      if (id === 'all') {
        params.delete('category');
      } else {
        params.set('category', id);
      }
      const qs = params.toString();
      router.replace(qs ? `/?${qs}#projects` : '/#projects', { scroll: false });
    },
    [router, searchParams],
  );

  return (
    <ScrollReveal>
      <section id="projects" className="mb-12 scroll-mt-8 md:mb-16">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
            Projects
          </h2>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by expertise">
            {CATEGORIES.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(cat.id)}
                  className="micro-cta rounded-md px-3 py-1.5 text-xs font-medium theme-transition"
                  style={{
                    backgroundColor: active ? 'var(--btn-primary-bg)' : 'transparent',
                    color: active ? 'var(--btn-primary-text)' : 'var(--text-muted)',
                    border: `1px solid ${active ? 'var(--btn-primary-bg)' : 'var(--border-primary)'}`,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filtered.map((project) => (
            <article key={project.title} className="expertise-card p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className="rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide"
                  style={{
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {project.kind}
                </span>
                <span className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
                  {CATEGORIES.find((c) => c.id === project.category)?.label}
                </span>
              </div>

              <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              {project.metrics.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <div key={`${metric.label}-${metric.value}`}>
                      <p className="font-mono text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {metric.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded px-2 py-0.5 font-mono text-[10px]"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.links.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={`${link.type}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="micro-cta text-xs font-medium theme-transition"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {link.label ?? LINK_LABELS[link.type]}
                      <span aria-hidden="true"> →</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            No projects in this category yet.
          </p>
        ) : null}

        {site.publications.length > 0 ? (
          <div className="mt-10">
            <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              Publications
            </h3>
            <ul className="space-y-3">
              {site.publications.map((pub) => (
                <li key={pub.title} className="expertise-card p-4">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium theme-transition"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {pub.title}
                    </a>
                  ) : (
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {pub.title}
                    </p>
                  )}
                  {(pub.venue || pub.year) && (
                    <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                      {[pub.venue, pub.year].filter(Boolean).join(' · ')}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </ScrollReveal>
  );
}
