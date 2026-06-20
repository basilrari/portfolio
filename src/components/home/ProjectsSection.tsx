import { site } from '@/data/site';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-12 scroll-mt-8 md:mb-16">
      <h2 className="mb-6 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {site.projects.map((project) => (
          <article
            key={project.title}
            className="expertise-card p-5"
          >
            <h3 className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
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
          </article>
        ))}
      </div>
    </section>
  );
}
