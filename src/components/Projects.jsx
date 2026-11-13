import SectionLabel from './SectionLabel'
import { projects } from '../data/projects'

const bars = [
  38, 62, 44, 78, 30, 56, 88, 42, 68, 34, 74, 50, 92, 46, 60, 36, 82, 54, 40, 70, 32, 66, 48, 76,
]

export default function Projects({ onOpenProject }) {
  const project = projects[0]

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line dark:border-line-dark">
      <div className="max-w-page mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 reveal">
          <div>
            <SectionLabel index="03" className="mb-5">
              Portfolio
            </SectionLabel>
            <h2 className="text-[1.9rem] sm:text-4xl font-bold tracking-[-0.02em] leading-[1.15] text-ink dark:text-night-ink">
              Selected work
            </h2>
          </div>
          <p className="text-sm text-ink-muted dark:text-night-muted max-w-[38ch] leading-relaxed">
            One product so far, built end to end — from the database schema to the last
            micro-interaction.
          </p>
        </div>

        <article className="mt-12 reveal border border-line dark:border-line-dark rounded-md overflow-hidden bg-paper-raised dark:bg-night-raised">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 bg-night p-8 sm:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
              <div className="flex items-center justify-between">
                <span className="font-label text-[10px] uppercase tracking-[0.16em] text-night-muted">
                  {project.categoryLabel}
                </span>
                <span className="font-mono text-[11px] text-night-muted">{project.year}</span>
              </div>

              <div className="my-8">
                <p className="font-label text-[2.75rem] sm:text-[4rem] font-bold tracking-[-0.02em] leading-none text-night-ink">
                  SAMIFY
                </p>
                <p className="font-mono text-[11px] sm:text-xs text-night-muted mt-4">
                  next.js 16 · react 19 · supabase · tailwind · capacitor
                </p>
              </div>

              <div className="flex items-end gap-[3px] h-10" aria-hidden="true">
                {bars.map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}%` }}
                    className="flex-1 bg-clay-soft opacity-70"
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col">
              <h3 className="text-xl font-semibold text-ink dark:text-night-ink mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-ink-muted dark:text-night-muted mb-4">
                {project.subtitle}
              </p>
              <p className="text-sm leading-[1.7] text-ink-muted dark:text-night-muted flex-1">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-line dark:border-line-dark">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-sm text-[11px] font-medium text-ink-muted dark:text-night-muted border border-line dark:border-line-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  className="inline-flex items-center gap-2 h-10 px-4 rounded-sm bg-ink dark:bg-night-ink text-paper dark:text-ink text-[13px] font-semibold hover:bg-clay dark:hover:bg-clay-soft dark:hover:text-ink transition-colors"
                >
                  Case study
                  <i className="fa-solid fa-arrow-right text-[10px]" />
                </button>
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-4 rounded-sm border border-line dark:border-line-dark text-ink dark:text-night-ink text-[13px] font-semibold hover:border-ink dark:hover:border-night-ink transition-colors"
                  >
                    <i className="fa-brands fa-github text-sm" />
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
