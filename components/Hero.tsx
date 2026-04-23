import { Profile } from '@/lib/db';

interface HeroProps {
  profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
  const name = profile?.name ?? 'Your Name';
  const title = profile?.title ?? 'Full-Stack Developer';
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/30 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-4xl font-bold mb-8 shadow-2xl shadow-yellow-400/40 text-yellow-900">
          {initials}
        </div>

        {profile?.available_for_work && (
          <span className="inline-block bg-yellow-200/80 border border-yellow-400/50 text-yellow-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Available for work ✨
          </span>
        )}

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            {name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 font-light">
          {title}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-yellow-400/40 hover:shadow-yellow-400/60"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-yellow-400/60 hover:border-yellow-500 text-gray-700 hover:text-gray-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-200 bg-white/50"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-yellow-600/70">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
