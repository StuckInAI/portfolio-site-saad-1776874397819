export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-700/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-4xl font-bold mb-8 shadow-2xl shadow-violet-900/50">
          AJ
        </div>

        <span className="inline-block bg-violet-900/40 border border-violet-700/50 text-violet-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Available for work ✨
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Alex Johnson
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light">
          Full-Stack Developer &amp; UI Designer crafting beautiful, performant web experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-800/60"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
