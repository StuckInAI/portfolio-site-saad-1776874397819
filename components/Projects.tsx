import { Project } from '@/lib/db';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl font-bold mt-3 text-gray-900">Featured Work</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from side projects to client work.
          </p>
        </div>

        {projects.length === 0 ? (
          <p className="text-center text-gray-400">No projects found. Add some in your database!</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-gradient-to-br ${
                  project.gradient || 'from-yellow-100 to-amber-100'
                } border border-yellow-200 rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-200 hover:shadow-xl hover:shadow-yellow-200/60`}
              >
                <div className="text-4xl mb-4">{project.emoji || '🚀'}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {(project.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow-200/70 text-yellow-900 text-xs font-medium px-3 py-1 rounded-full border border-yellow-300/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link || '#'}
                  className="text-sm font-semibold text-yellow-600 hover:text-yellow-500 flex items-center gap-1 transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
