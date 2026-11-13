import SectionLabel from './SectionLabel'
import { skillGroups } from '../data/projects'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line dark:border-line-dark">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <SectionLabel index="02" className="mb-5 reveal">
          Tech stack
        </SectionLabel>

        <div className="max-w-[60ch] mb-14 reveal">
          <h2 className="text-[1.9rem] sm:text-4xl font-bold tracking-[-0.02em] leading-[1.15] text-ink dark:text-night-ink mb-4">
            Skills &amp; technologies
          </h2>
          <p className="text-ink-muted dark:text-night-muted leading-[1.7]">
            A curated set of modern tools, languages, and frameworks I rely on to ship
            high-performing digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="pt-7 border-t-2 border-ink dark:border-night-ink reveal"
            >
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-lg font-semibold text-ink dark:text-night-ink">
                  {group.title}
                </h3>
                <span className="font-mono text-[11px] text-ink-soft dark:text-night-muted">
                  {group.index}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-muted dark:text-night-muted mb-6">
                {group.description}
              </p>
              <ul className="space-y-3 text-sm">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 text-ink dark:text-night-ink"
                  >
                    <i
                      className={`${item.icon} w-4 text-center text-ink-soft dark:text-night-muted`}
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
