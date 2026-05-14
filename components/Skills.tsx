const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'PHP', 'Bash', "Next.js", "React"],
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'VS Code', 'GitHub', 'Linux CLI', "Docker"],
  },
  {
    label: 'Currently Learning',
    skills: ['TypeScript', 'C#'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--surface)]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono-brand text-[var(--green)] text-xs tracking-[0.3em] uppercase mb-2">
          02. Skills
        </p>
        <h2 className="font-mono-brand text-3xl md:text-4xl font-bold text-white mb-12">
          What I work with
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono-brand text-[var(--green)] text-sm mb-4 tracking-wider">
                {'// '}{group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-brand text-xs px-3 py-1.5 border border-[var(--border)] text-[var(--text-muted)] rounded hover:border-[var(--green)] hover:text-[var(--green)] transition-colors duration-200 cursor-default"
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
