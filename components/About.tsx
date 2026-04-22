export default function About() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '40+', label: 'Projects Completed' },
    { value: '20+', label: 'Happy Clients' },
    { value: '3', label: 'Awards Won' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: image placeholder */}
          <div className="relative">
            <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-violet-900/40 to-indigo-900/40 border border-violet-800/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-5xl font-bold mx-auto mb-4">
                  AJ
                </div>
                <p className="text-gray-400 text-sm">Alex Johnson</p>
                <p className="text-violet-400 text-sm font-medium">Full-Stack Developer</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-violet-600/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600/20 rounded-2xl blur-xl" />
          </div>

          {/* Right: text */}
          <div>
            <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
            <h2 className="text-4xl font-bold mt-3 mb-6">
              Passionate about building great products
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I&apos;m a full-stack developer with over 5 years of experience building modern web applications.
              I specialize in React, Next.js, and Node.js, and I&apos;m passionate about creating seamless user experiences.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects,
              or hiking in the mountains. I believe in writing clean, maintainable code and collaborating closely with clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-4 text-center"
                >
                  <div className="text-3xl font-extrabold text-violet-400">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
