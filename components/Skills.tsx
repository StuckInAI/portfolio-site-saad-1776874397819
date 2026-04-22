interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Category {
  name: string;
  icon: string;
  skills: string[];
}

export default function Skills() {
  const skills: Skill[] = [
    { name: 'React / Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'PostgreSQL', level: 80, category: 'Backend' },
    { name: 'Docker', level: 75, category: 'DevOps' },
  ];

  const categories: Category[] = [
    {
      name: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Framer Motion'],
    },
    {
      name: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
    },
    {
      name: 'Tools & DevOps',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl font-bold mt-3">What I Work With</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                <span className="text-sm text-violet-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 hover:border-violet-700/50 transition-colors duration-200"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-semibold mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
