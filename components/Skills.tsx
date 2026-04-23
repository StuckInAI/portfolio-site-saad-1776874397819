import { Skill, SkillCategory } from '@/lib/db';

interface SkillsProps {
  skills: Skill[];
  skillCategories: SkillCategory[];
}

export default function Skills({ skills, skillCategories }: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-600 text-sm font-semibold tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl font-bold mt-3 text-gray-900">What I Work With</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skill bars */}
        {skills.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill) => (
              <div key={skill.id}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-yellow-600 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-yellow-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Category cards */}
        {skillCategories.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-yellow-200 rounded-2xl p-6 hover:border-yellow-400 transition-colors duration-200 shadow-sm"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {(cat.skills ?? []).map((skill) => (
                    <span
                      key={skill}
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
