export default function Footer() {
  return (
    <footer className="border-t border-line dark:border-line-dark py-8">
      <div className="max-w-page mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-semibold text-sm text-ink dark:text-night-ink">
            Sameer<span className="text-clay dark:text-clay-soft">.dev</span>
          </span>
          <span className="text-ink-soft dark:text-night-muted text-sm">
            © {new Date().getFullYear()} Sameer Shah. All rights reserved.
          </span>
        </div>

        <a
          href="#home"
          className="inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.12em] text-ink-muted dark:text-night-muted hover:text-clay dark:hover:text-clay-soft transition-colors"
        >
          Back to top
          <i className="fa-solid fa-arrow-up text-[9px]" />
        </a>
      </div>
    </footer>
  )
}
