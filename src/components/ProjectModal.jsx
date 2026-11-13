import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/70 dark:bg-night/80"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="relative w-full max-w-2xl bg-paper dark:bg-night-raised border border-line dark:border-line-dark rounded-md shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm bg-paper/90 dark:bg-night/90 border border-line dark:border-line-dark text-ink dark:text-night-ink flex items-center justify-center hover:border-ink dark:hover:border-night-ink transition-colors"
        >
          <i className="fa-solid fa-xmark text-sm" />
        </button>

        <div className="bg-night px-6 sm:px-8 py-9">
          <p className="font-label text-[10px] uppercase tracking-[0.16em] text-night-muted mb-4">
            {project.categoryLabel} — {project.year}
          </p>
          <p className="font-label text-4xl sm:text-5xl font-bold tracking-[-0.02em] leading-none text-night-ink">
            {project.title.toUpperCase()}
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <h3 id="modal-title" className="sr-only">
            {project.title}
          </h3>

          <p className="text-sm font-medium text-ink-muted dark:text-night-muted mb-3">
            {project.subtitle}
          </p>
          <p className="text-ink-muted dark:text-night-muted text-sm leading-[1.7] mb-6">
            {project.description}
          </p>

          <div className="mb-6">
            <p className="font-label text-[10px] uppercase tracking-[0.14em] text-ink-soft dark:text-night-muted mb-3">
              Technologies used
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-sm text-[11px] font-medium text-ink-muted dark:text-night-muted border border-line dark:border-line-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-line dark:border-line-dark">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-sm bg-ink dark:bg-night-ink text-paper dark:text-ink text-[13px] font-semibold hover:bg-clay dark:hover:bg-clay-soft dark:hover:text-ink transition-colors"
              >
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                Live demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-10 px-4 rounded-sm border border-line dark:border-line-dark text-ink dark:text-night-ink text-[13px] font-semibold hover:border-ink dark:hover:border-night-ink transition-colors"
              >
                <i className="fa-brands fa-github text-sm" />
                Source code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
