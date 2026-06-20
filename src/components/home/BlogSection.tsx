export default function BlogSection() {
  return (
    <section id="blog" className="mb-12 scroll-mt-8 md:mb-16">
      <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
        Blog
      </h2>
      <div className="expertise-card max-w-2xl p-6">
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Writing on AI, drones, and autonomous systems — coming soon.
        </p>
      </div>
    </section>
  );
}
