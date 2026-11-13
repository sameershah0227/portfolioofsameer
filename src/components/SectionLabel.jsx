export default function SectionLabel({ index, children, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-label text-[11px] font-medium text-clay dark:text-clay-soft">{index}</span>
      <span className="h-px w-7 bg-line dark:bg-line-dark" />
      <span className="font-label text-[11px] font-medium uppercase tracking-[0.14em] text-ink-muted dark:text-night-muted">
        {children}
      </span>
    </div>
  )
}
