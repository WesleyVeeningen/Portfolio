const projects = [
  {
    number: '01',
    name: 'SocialDashboard',
    description:
      'A dashboard to monitor and manage multiple social media accounts in one place. Built with Next.js, it supports Facebook for posting, scheduling, and analytics integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/WesleyVeeningen/SocialDashboard',
  },
  {
    number: '02',
    name: 'Spotify Clone',
    description:
      'A React-native app that mimics core Spotify features like browsing, searching, and playlist management. Uses the Spotify API for data and authentication.',
    tech: ['React Native', 'TypeScript', 'Redux'],
    github: 'https://github.com/WesleyVeeningen/SpotifyClone',
  },
  {
    number: '03',
    name: 'C# Console Adventure',
    description:
      'A text-based adventure game built in C# for a school project. Features branching storylines, inventory, and a combat system.',
    tech: ['C#', '.NET'],
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono-brand text-[var(--green)] text-xs tracking-[0.3em] uppercase mb-2">
          03. Projects
        </p>
        <h2 className="font-mono-brand text-3xl md:text-4xl font-bold text-white mb-12">
          Things I&apos;ve built
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 flex flex-col hover:border-[var(--green)] transition-colors duration-300 group"
            >
              <span className="font-mono-brand text-[var(--green)] text-xs mb-4 opacity-60">
                {project.number}.
              </span>
              <h3 className="font-mono-brand text-white font-bold text-lg mb-3 group-hover:text-[var(--green)] transition-colors">
                {project.name}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono-brand text-[10px] text-[var(--green)] bg-[var(--green)]/10 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                className="font-mono-brand text-xs text-[var(--text-muted)] hover:text-[var(--green)] transition-colors flex items-center gap-1"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
