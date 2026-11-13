import SectionLabel from './SectionLabel'
import { education } from '../data/projects'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-line dark:border-line-dark">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04" className="mb-5 reveal">
              Education
            </SectionLabel>
            <h2 className="text-[1.9rem] sm:text-4xl font-bold tracking-[-0.02em] leading-[1.15] text-ink dark:text-night-ink max-w-[16ch] reveal">
              Academic background
            </h2>
            <p className="text-sm text-ink-muted dark:text-night-muted leading-[1.7] mt-5 max-w-[34ch] reveal">
              O Levels to A Levels to a bachelor's in Artificial Intelligence — the long way round
              to building software properly.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative border-l border-line dark:border-line-dark pl-8 space-y-10">
              {education.map((entry) => (
                <div key={entry.role} className="relative reveal">
                  <span
                    className={`absolute -left-[35px] top-1.5 w-2 h-2 ${
                      entry.current
                        ? 'bg-clay dark:bg-clay-soft'
                        : 'bg-ink-muted dark:bg-night-muted'
                    }`}
                  />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-label text-[11px] font-medium uppercase tracking-[0.12em] ${
                        entry.current
                          ? 'text-clay dark:text-clay-soft'
                          : 'text-ink-muted dark:text-night-muted'
                      }`}
                    >
                      {entry.period}
                    </span>
                    <span className="font-mono text-[11px] text-ink-soft dark:text-night-muted">
                      {entry.place}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-ink dark:text-night-ink">{entry.role}</h3>
                  <p className="text-sm font-medium text-ink-muted dark:text-night-muted mb-2">
                    {entry.org}
                  </p>
                  <p className="text-sm leading-[1.7] text-ink-muted dark:text-night-muted max-w-[62ch]">
                    {entry.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
