interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce app built with Next.js, Stripe, and PostgreSQL. Features include product management, cart, and checkout.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      gradient: 'from-violet-900/60 to-indigo-900/60',
      emoji: '🛒',
      link: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A Kanban-style task manager with drag-and-drop, real-time updates, and team collaboration features.',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      gradient: 'from-blue-900/60 to-cyan-900/60',
      emoji: '📋',
      link: '#',
    },
    {
      title: 'AI Content Generator',
      description:
        'An AI-powered writing assistant that helps create blog posts, social media content, and marketing copy.',
      tags: ['Next.js', 'OpenAI', 'Prisma', 'TypeScript'],
      gradient: 'from-emerald-900/60 to-teal-900/60',
      emoji: '🤖',
      link: '#',
    },
    {
      title: 'Finance Dashboard',
      description:
        'A comprehensive finance tracking app with beautiful charts, budgeting tools, and expense categorization.',
      tags: ['React', 'Chart.js', 'Express', 'PostgreSQL'],
      gradient: 'from-orange-900/60 to-amber-900/60',
      emoji: '📊',
      link: '#',
    },
    {
      title: 'Social Media App',
      description:
        'A modern social platform with real-time messaging, media sharing, and personalized content feeds.',
      tags: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind'],
      gradient: 'from-pink-900/60 to-rose-900/60',
      emoji: '💬',
      link: '#',
    },
    {
      title: 'Developer Portfolio',
      description:
        'A sleek, animated portfolio website for developers, featuring project showcases and contact forms.',
      tags: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
      gradient: 'from-purple-900/60 to-violet-900/60',
      emoji: '🌐',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl font-bold mt-3">Featured Work</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from side projects to client work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-gradient-to-br ${project.gradient} border border-gray-700/50 rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition-transform duration-200 hover:shadow-xl hover:shadow-black/30`}
            >
              <div className="text-4xl mb-4">{project.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/30 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-sm font-semibold text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
              >
                View Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
