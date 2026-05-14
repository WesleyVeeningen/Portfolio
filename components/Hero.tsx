export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      {/* subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--green) 1px, transparent 1px), linear-gradient(90deg, var(--green) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        <p className="font-mono-brand text-[var(--green)] text-sm tracking-[0.3em] uppercase mb-6 fade-up fade-up-delay-1">
          &gt; Hello, world!
        </p>

        <h1 className="font-mono-brand text-5xl md:text-7xl font-bold text-white mb-4 fade-up fade-up-delay-2">
          Wesley Veeningen
        </h1>

        <div className="flex items-center justify-center gap-2 mb-8 fade-up fade-up-delay-3">
          <span className="font-mono-brand text-lg md:text-2xl text-[var(--text-muted)]">
            Software Engineering Student
          </span>
          <span className="cursor-blink" />
        </div>

        <p className="font-mono-brand text-sm text-[var(--text-muted)] mb-10 fade-up fade-up-delay-3">
          📍 Rotterdam, Netherlands &nbsp;·&nbsp; Hogeschool Rotterdam &nbsp;·&nbsp; Informatica Y1
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up fade-up-delay-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--green)] text-black font-mono-brand text-sm font-bold rounded hover:bg-[var(--green-dim)] transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="https://github.com/WesleyVeeningen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-[var(--border)] text-[var(--text)] font-mono-brand text-sm rounded hover:border-[var(--green)] hover:text-[var(--green)] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono-brand text-xs text-[var(--text-muted)] tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--green)] to-transparent" />
      </div>
    </section>
  );
}
