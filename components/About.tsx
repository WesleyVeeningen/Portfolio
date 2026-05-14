export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>01. About</SectionLabel>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
          <div>
            <h2 className="font-mono-brand text-3xl md:text-4xl font-bold text-white mb-6">
              Hi, I&apos;m Wesley.
            </h2>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              I&apos;m a 20-year-old software engineering student in my first year of{' '}
              <span className="text-[var(--green)]">Informatica at Hogeschool Rotterdam</span>,
              the Netherlands.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              I love turning ideas into working software — whether that&apos;s a clean CLI tool,
              a web app, or an algorithm I just learned in class. I&apos;m driven by curiosity
              and a want to keep getting better.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Currently focused on building a solid foundation: clean code, good habits,
              and a growing portfolio.
            </p>
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 font-mono-brand text-sm">
            <p className="text-[var(--text-muted)] mb-1"><span className="text-[var(--green)]">const</span> wesley = {'{'}</p>
            <p className="text-[var(--text-muted)] ml-4">age: <span className="text-white">20</span>,</p>
            <p className="text-[var(--text-muted)] ml-4">location: <span className="text-white">&quot;Rotterdam, NL&quot;</span>,</p>
            <p className="text-[var(--text-muted)] ml-4">school: <span className="text-white">&quot;Hogeschool Rotterdam&quot;</span>,</p>
            <p className="text-[var(--text-muted)] ml-4">program: <span className="text-white">&quot;Informatica&quot;</span>,</p>
            <p className="text-[var(--text-muted)] ml-4">year: <span className="text-white">1</span>,</p>
            <p className="text-[var(--text-muted)] ml-4">lookingFor: <span className="text-white">&quot;Internship&quot;</span>,</p>
            <p className="text-[var(--text-muted)] ml-4">hobbies: [<span className="text-white">&quot;coding&quot;, &quot;gaming&quot;, &quot;learning&quot;, &quot;Working Out&quot;</span>],</p>
            <p className="text-[var(--text-muted)]">{'}'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono-brand text-[var(--green)] text-xs tracking-[0.3em] uppercase mb-2">
      {children}
    </p>
  );
}
