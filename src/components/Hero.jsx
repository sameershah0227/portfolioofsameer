import { profile, socials } from '../data/projects'

const stats = [
  { value: 'BSc', label: 'Artificial Intelligence' },
  { value: 'SZABIST', label: 'University' },
  { value: '1', label: 'App shipped' },
]

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-start">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="w-1.5 h-1.5 bg-clay dark:bg-clay-soft" />
              <span className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
                Open to internships &amp; collaborations
              </span>
            </div>

            <p className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted mb-5">
              Hi, I'm {profile.name}
            </p>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.05] text-ink dark:text-night-ink mb-7">
              Full-stack developer
              <br className="hidden sm:block" /> &amp; AI undergraduate.
            </h1>

            <p className="text-base md:text-[17px] leading-[1.7] text-ink-muted dark:text-night-muted max-w-[62ch] mb-10">
              I build fast, accessible web apps where clean engineering meets considered design —
              from the database and auth layer up to the last micro-interaction. Currently studying
              Artificial Intelligence at {profile.university}.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm bg-ink dark:bg-night-ink text-paper dark:text-ink text-sm font-semibold hover:bg-clay dark:hover:bg-clay-soft dark:hover:text-ink transition-colors"
              >
                View my work
                <i className="fa-solid fa-arrow-right text-[11px]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-sm border border-line dark:border-line-dark text-ink dark:text-night-ink text-sm font-semibold hover:border-ink dark:hover:border-night-ink transition-colors"
              >
                <i className="fa-regular fa-paper-plane text-[12px]" />
                Get in touch
              </a>
            </div>

            <div className="mt-12 pt-6 border-t border-line dark:border-line-dark flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="font-label text-[11px] uppercase tracking-[0.14em] text-ink-soft dark:text-night-muted">
                Find me on
              </span>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-sm border border-line dark:border-line-dark flex items-center justify-center text-ink-muted dark:text-night-muted hover:text-clay hover:border-clay dark:hover:text-clay-soft dark:hover:border-clay-soft transition-colors"
                  >
                    <i className={`${social.icon} text-sm`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="border border-line dark:border-line-dark bg-paper-raised dark:bg-night-raised rounded-md overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-line dark:border-line-dark">
                <span className="font-mono text-[11px] text-ink-muted dark:text-night-muted">
                  profile.ts
                </span>
                <span className="font-label text-[10px] uppercase tracking-[0.14em] text-ink-soft dark:text-night-muted">
                  TypeScript
                </span>
              </div>

              <pre className="font-mono text-[12.5px] leading-[1.75] overflow-x-auto p-5 text-ink-muted dark:text-night-muted">
                <code>
                  <span className="text-ink dark:text-night-ink font-medium">const</span> sameer = {'{'}
                  {'\n  '}
                  <span className="text-ink-soft dark:text-night-muted">name</span>:{' '}
                  <span className="text-clay dark:text-clay-soft">'Sameer Shah'</span>,
                  {'\n  '}
                  <span className="text-ink-soft dark:text-night-muted">role</span>:{' '}
                  <span className="text-clay dark:text-clay-soft">'Full-Stack Dev'</span>,
                  {'\n  '}
                  <span className="text-ink-soft dark:text-night-muted">studying</span>:{' '}
                  <span className="text-clay dark:text-clay-soft">'BSc AI @ SZABIST'</span>,
                  {'\n  '}
                  <span className="text-ink-soft dark:text-night-muted">stack</span>: [{'\n    '}
                  <span className="text-clay dark:text-clay-soft">'Next.js'</span>,
                  {'\n    '}
                  <span className="text-clay dark:text-clay-soft">'React'</span>,
                  {'\n    '}
                  <span className="text-clay dark:text-clay-soft">'Supabase'</span>
                  {'\n  '}],
                  {'\n  '}
                  <span className="text-ink-soft dark:text-night-muted">shipped</span>:{' '}
                  <span className="text-clay dark:text-clay-soft">'Samify'</span>,
                  {'\n  '}
                  <span className="text-ink-soft dark:text-night-muted">coffee</span>:{' '}
                  <span className="text-ink dark:text-night-ink">Infinity</span>
                  {'\n};'}
                </code>
              </pre>

              <div className="grid grid-cols-3 border-t border-line dark:border-line-dark divide-x divide-line dark:divide-line-dark">
                {stats.map((stat) => (
                  <div key={stat.label} className="px-3 py-4 text-center">
                    <p className="font-mono text-base font-medium text-ink dark:text-night-ink leading-none">
                      {stat.value}
                    </p>
                    <p className="font-label text-[9px] uppercase tracking-[0.1em] text-ink-soft dark:text-night-muted mt-2 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
