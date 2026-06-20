import { site } from '@/data/site';
import { GlobeWireframeVisual } from '@/components/visuals/WireframeVisuals';

function TechIcon({ icon }: { icon: string }) {
  const base = 'h-8 w-8 rounded-lg flex items-center justify-center text-[10px] font-bold font-mono';
  const style = {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-subtle)',
  };

  const labels: Record<string, string> = {
    python: 'Py',
    pytorch: 'Pt',
    jax: 'Jx',
    ros: 'R2',
    cuda: 'Cu',
    docker: 'Dk',
    more: '···',
  };

  return (
    <div className={base} style={style}>
      {labels[icon] ?? icon}
    </div>
  );
}

export default function BottomSection() {
  return (
    <section className="grid grid-cols-1 gap-8 border-t pt-10 md:grid-cols-2 md:gap-12" style={{ borderColor: 'var(--border-subtle)' }}>
      {/* Tech stack */}
      <div>
        <h3 className="mb-5 text-[10px] font-semibold tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
          TECH STACK
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          {site.techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-2">
              <TechIcon icon={tech.icon} />
              <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Currently */}
      <div>
        <h3 className="mb-5 flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--status-green)' }} />
          CURRENTLY
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {site.currently}
          </p>
          <div className="h-32 w-full sm:w-44" style={{ color: 'var(--wireframe-stroke)' }}>
            <GlobeWireframeVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
